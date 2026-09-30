# TRES AI Assistant: brand and visual guide

Product page: `/tres-ai-assistant` (`frontend/src/pages/TresAiAssistant.jsx`)
Brand files: `frontend/src/assets/Tres AI/`

## Logo

TRES AI Assistant is a sub-brand of Tresvance. The Tresvance wordmark is not changed; it stays in the site header.

| File | Use |
|---|---|
| `Logo.png` | Master artwork (transparent, 2146×733). Keep as the source. |
| `tres-ai-logo.png` | Cropped full lockup (icon + "TRES **AI** Assistant"), 1200px wide. Hero, footers, decks. |
| `tres-ai-mark.png` | Icon only, 256×256 square. Chat avatars, app icon, favicon, social profile. |
| `TRES AI .png` → `tres-ai-visual.webp` | Master product visual. Product-page showcase, home hero banner, Our Products card, link previews. |
| `vuisual 2.png` → `tres-ai-flow.webp` | Six-stage flow diagram (Hi → Understand → Qualify → Recommend → Book → Confirm). Product page "How it works". |

**Construction.** The icon is an open triangle: a white base stroke and a blue gradient stroke rising to a glowing node. The rising stroke echoes the blue "Λ" in the Tresvance wordmark; the node reads as the AI "spark". The wordmark sets TRES in bold white, AI in brand blue and Assistant in light white.

**Rules**
- Use on black or very dark backgrounds (`#050505` to `#121419`). On light backgrounds, a dark-text version is needed first. Don't place the current white artwork on white.
- Clear space: at least the height of the "T" on every side.
- Minimum size: lockup 120px wide on screen; icon 16px.
- Don't recolor, stretch, add outlines or separate "AI" from "TRES".

## Palette

| Token | Hex | Role |
|---|---|---|
| Black | `#050505` | Page background |
| Surface | `#0C0D10` / `#121419` | Cards, chat windows |
| White | `#FFFFFF` | Headlines, primary text (body at 50–60% opacity) |
| Brand blue | `#06A3DA` | Accent, CTAs, "AI" in the logo, icons |
| Glow blue | `#0BB4EF` → `#1E6BFF` | Gradients and light effects only |

Typeface on the page: Inter (headings medium weight, tight tracking).

## Supporting visuals: prompts

The master visual (`TRES AI .png`) sets the style: a dark studio scene, a glass phone or chat panel on a glowing blue-lit pedestal, and floating glass feature cards joined by thin light lines. Keep new visuals in the same world.

Shared style suffix for every prompt:

> dark premium tech aesthetic, near-black background, brand blue #06A3DA neon edge lighting, frosted glass UI panels, soft volumetric glow, shallow depth of field, clean minimal composition, high-end SaaS product render, 16:9, no extra logos, no watermark

1. **Hero variant: "From Hi to booked".** A single glass chat window floating above a glowing pedestal. The conversation starts with the word "Hi" and ends in a confirmed booking card with a check mark. A soft blue light trail runs from the first message to the booking card.
2. **Omnichannel.** A central glowing TRES AI icon node, with thin blue light lines running to six floating glass tiles: website, WhatsApp, Instagram, Messenger, email and calendar. It's arranged like a constellation in a dark space.
3. **Lead qualification.** A glass funnel made of light. Many small chat bubbles enter at the top and fewer, brighter "qualified lead" cards with score badges come out at the bottom, with blue and white particles.
4. **24/7.** A split scene of an office at night (dark, empty desk, city lights outside) with a glowing chat panel on the monitor still answering customers. A clock reads 2:00 AM and there's a soft blue glow on the desk.
5. **Human handoff.** Two glass panels side by side: an AI chat panel passing a glowing context card (name, need, history) to a human agent panel with a headset icon. A thin light beam connects them.
6. **Industry set (one per card, same framing).** A glass chat panel over a softly blurred scene: a dental clinic reception, a real-estate site visit, a university admissions desk, a retail store, a bank branch or a hotel lobby. The scene is desaturated with a blue rim light and the chat panel is sharp.
7. **Insights dashboard.** A floating glass analytics panel with bar charts, a conversion ring and a conversation heat map, with blue data lines and a dark reflective floor.

**Social and ads:** export 1200×630 (link previews), 1080×1080 and 1080×1350 (Instagram), and 1920×1080 (decks and YouTube). Keep the headline in the left third and the product in the right two-thirds, as in the master visual.

## Notes

- The page's sample conversation and hero chat use a fictional clinic ("BrightSmile Dental") and a masked number. Replace them with a real customer story once one is approved.
- Claims on the page are capability statements ("24/7", "seconds to first reply", "4+ channels", "multilingual"). Confirm each matches what ships before launch, especially the channel list and languages.
