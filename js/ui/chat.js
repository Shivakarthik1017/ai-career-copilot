// js/ui/chat.js — AI Mentor chat panel.
// Flow: user sends a message → try DeepSeek (if a key is set) → on any
// failure or no key, answer with the rule-based fallback mentor so the
// chat never shows a dead screen. Every reply is labelled with its source.

import { LLM, fallbackAnswer, errorMessage } from "../api/llm.js";
import { store } from "../storage.js";
import { chatMessageHTML, esc } from "./render.js";

export function initChat(ctxProvider) {
  const log = document.getElementById("chatLog");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const status = document.getElementById("chatStatus");
  const clearBtn = document.getElementById("chatClear");
  if (!log || !form) return;

  const renderStatus = () => {
    status.textContent = LLM.hasKey()
      ? "AI mentor connected (DeepSeek) — answers come from the model."
      : "Built-in mentor — add your DeepSeek key in js/config.js to enable live AI answers.";
    status.className = "chat-status " + (LLM.hasKey() ? "on" : "off");
  };
  renderStatus();

  const history = store.getChat();
  if (history.length === 0) {
    history.push({ role: "assistant", content: "Hi, I'm your AI career mentor. Tell me your goal — for example “how do I become a cybersecurity intern?” — and I'll give you a concrete plan based on your roadmap.", source: "mentor" });
  }
  log.innerHTML = history.map(chatMessageHTML).join("");
  log.scrollTop = log.scrollHeight;

  const push = (msg) => {
    const h = store.getChat(); h.push(msg); store.saveChat(h);
    log.insertAdjacentHTML("beforeend", chatMessageHTML(msg));
    log.scrollTop = log.scrollHeight;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    input.focus();
    push({ role: "user", content: text });
    const typing = document.createElement("div");
    typing.className = "msg assistant typing";
    typing.innerHTML = '<div class="msg-bubble">Thinking<span class="dots"><i></i><i></i><i></i></span></div>';
    log.appendChild(typing);
    log.scrollTop = log.scrollHeight;

    const ctx = ctxProvider ? ctxProvider() : {};
    const historyMsgs = store.getChat().filter((m) => m.role !== "assistant" || m.source !== "mentor").slice(-8)
      .map((m) => ({ role: m.role, content: m.content }));

    let result = await LLM.chat([...historyMsgs, { role: "user", content: text }]);
    typing.remove();
    if (result.ok) {
      push({ role: "assistant", content: result.reply, source: "deepseek" });
    } else {
      const note = errorMessage(result.error);
      push({ role: "assistant", content: fallbackAnswer(text, ctx), source: "mentor" });
      status.textContent = note;
      status.className = "chat-status off";
    }
  });

  clearBtn.addEventListener("click", () => {
    store.clearChat();
    log.innerHTML = "";
    push({ role: "assistant", content: "Chat cleared. Ask me anything about your career path.", source: "mentor" });
  });

  document.querySelectorAll("[data-ask]").forEach((b) => {
    b.addEventListener("click", () => {
      input.value = b.getAttribute("data-ask");
      input.focus();
      form.requestSubmit();
    });
  });
}
