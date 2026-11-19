# Design research — AI Career Copilot rebuild (19 Nov 2026)

Researched before rebuilding, so the redesign copies real patterns instead
of guessing. Sites actually read: roadmap.sh, duolingo.com, plus design-system
extractions for Duolingo, Linear, Notion and Perplexity from web search.

## 1. roadmap.sh — https://roadmap.sh
- Tagline: "Skill up with community created roadmaps, guides, and courses."
- Light, clean, content-first. Roadmaps are the product: a grid of
  skill-based roadmaps (Python, SQL, JavaScript, AI Agents, Flutter…),
  each a card you click into; guides listed below.
- Pattern taken: **the roadmap IS the hero** — role cards in a clean grid,
  numbered steps, progress visible on the card, no dark dashboard chrome.
  Our role picker becomes a roadmap-style card grid, and the 6-month plan
  becomes a vertical timeline with numbered month nodes.

## 2. Duolingo — https://www.duolingo.com + design-system extractions
- Light theme, white canvas (#FFFFFF) on Snow (#F7F7F7), one unmistakable
  brand colour (green #58CC02) used only for primary actions and progress.
- Rounded everything: cards 16–24px radius, pill buttons (9999px),
  progress bars 8px tall, pill fill, animated fill transition.
- Gamification as brand: streaks, XP, hearts — progress is always visible
  and celebrated, not hidden in a settings page.
- Pattern taken: **white cards, 2px soft borders, pill CTAs, animated
  progress bars, streak chip in the header**. Our teal = Duolingo green's
  role; orange = the warm gamification accent (streak/fire).

## 3. Linear / Notion — design-system research (linear.app, notion.com)
- Linear: extreme restraint — one accent, tight tracking (-0.04em),
  massive headline 56–72px, centred single column, product screenshot
  below the fold, CSS-only @keyframes (no animation library).
- Notion: warm white canvas (#FFFFFF), warm dark text (#37352F, not pure
  black), soft pastel tints (peach #FDDCB5, sky #D3E5FF, mint #DBEDDB),
  whitespace as the primary design element, dual CTA (strong + quiet).
- Pattern taken: **centred hero, tight-tracked display headline, gradient
  text on one line, generous whitespace, dual CTA, CSS-only keyframes**.
  Notion's shimmer guard is copied too: animations off under
  `prefers-reduced-motion`.

## 4. Perplexity — design-system extractions (perplexity.ai)
- Light mode: white canvas #FFFFFF, surface #F8F8F8, border #E0E0E0,
  text #0F0F10, one teal accent (#20B8CD / #1591A3 on light) used for
  fewer than 5% of elements — send button, focus rings, active state.
- Cream variant: aged-paper canvas #FAF8F5 / #F6F2EC, composer card
  #FCFBF8 with a 1px #D7D0C5 border, pill rounding on all controls.
- The search/composer box IS the hero; the chrome disappears and the
  content leads. 8px base spacing unit.
- Pattern taken: **cream paper background, white composer card, one teal
  accent used sparingly, chat messages that slide in, typing indicator**.
  Our AI Mentor Chat becomes a Perplexity-style composer card.

## Patterns applied in this rebuild
- Light only: cream #FFFBF6 background, white cards, ink #1C1917 text,
  teal #0F766E primary, orange #F97316 accent (Learn With Shivakarthik).
- Brand system: logo mark (gradient compass/arrow tile) + wordmark,
  consistent sticky header, branded footer, tagline everywhere.
- Keyframes (all in styles.css): fadeUp (staggered hero), float (blobs),
  gradientShift (headline + blobs), shine (primary button), popIn
  (cards), slideIn (chat messages), typing dots, progressGrow
  (skill-gap + roadmap bars), timeline draw-in on scroll, hover lift.
- Roadmap as a vertical timeline with numbered nodes, like roadmap.sh.
- Duolingo-style streak chip + animated progress bars.
- No dark-only dashboard look; no invented data — all 8 roles, 14
  courses, 13 opportunities, deadlines and links unchanged.
