// js/storage.js — All persistence lives here, localStorage only.
// No account, no server, no tracking. Keys are namespaced "acc:*".
// Progress is stored per role so a student can switch roles safely.

const PREFIX = "acc:";

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch { return fallback; }
}
function write(key, value) {
  try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch { /* storage full/blocked — app still works in-memory */ }
}

export const store = {
  getProfile: () => read("profile", null),
  saveProfile: (p) => write("profile", p),
  getProgress: (roleId) => read("progress:" + roleId, {}),
  saveProgress: (roleId, progress) => write("progress:" + roleId, progress),
  toggleMonth: (roleId, monthIndex) => {
    const p = store.getProgress(roleId);
    p[monthIndex] = !p[monthIndex];
    store.saveProgress(roleId, p);
    return p;
  },
  getChat: () => read("chat", []),
  saveChat: (msgs) => write("chat", msgs.slice(-40)),
  clearChat: () => write("chat", []),
  getStreak: () => read("streak", { count: 0, lastDate: null }),
  touchStreak: () => {
    const today = new Date().toISOString().slice(0, 10);
    const s = store.getStreak();
    if (s.lastDate === today) return s;
    const y = new Date(); y.setDate(y.getDate() - 1);
    const yesterday = y.toISOString().slice(0, 10);
    const next = { count: s.lastDate === yesterday ? s.count + 1 : 1, lastDate: today };
    write("streak", next);
    return next;
  }
};
