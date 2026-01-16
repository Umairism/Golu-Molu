# Construction.md
## Personal Memory Web App (Anniversary Project)

Purpose:
Build a private, simple, emotionally honest web app to preserve and present shared memories for a long-distance relationship anniversary (20 Jan).

This project prioritizes intention over complexity.

---

## 1. Core Principles (Non-Negotiable)

- Minimal UI. Emotional content > visuals.
- No unnecessary animations.
- No public sharing. This is private.
- Every section must have a reason to exist.
- Finish the project. Do not endlessly polish.

---

## 2. Tech Stack

Frontend:
- React (Vite)
- Tailwind CSS
- Optional: Framer Motion (fade / slide only)

Deployment:
- Netlify

Optional Tools:
- bolt.new (for initial UI scaffolding only)

No backend.
No database.
All data stored locally in files.

---

## 3. Information Architecture

Single-page experience with section-based navigation.

Sections (in order):
1. Landing
2. Timeline
3. Messages
4. Video Moments
5. Photo Story
6. Letters
7. Closing

Navigation:
- Scroll-based or minimal navbar
- No routing required unless it improves clarity

---

## 4. Folder Structure

src/
├─ components/
│ ├─ Landing.jsx
│ ├─ Timeline.jsx
│ ├─ Messages.jsx
│ ├─ VideoMoments.jsx
│ ├─ PhotoStory.jsx
│ ├─ Letters.jsx
│ ├─ Closing.jsx
│
├─ data/
│ ├─ timeline.js
│ ├─ messages.js
│ ├─ videos.js
│ ├─ photos.js
│ ├─ letters.js
│
├─ styles/
│ └─ theme.css
│
├─ App.jsx
├─ main.jsx




Rule:
No hardcoded emotional content inside components.
All personal content lives in `data/`.

---

## 5. Section Specifications

### 5.1 Landing
Purpose:
Set emotional tone immediately.

Content:
- Short line (1 sentence max)
- Enter button

Design:
- Dark or soft neutral background
- Centered content
- Optional ambient audio with pause control

---

### 5.2 Timeline
Purpose:
Show progression, not perfection.

Data:
- Date
- Title
- Short description
- Optional image

Events to include:
- First conversation
- First call
- A difficult moment
- A meaningful realization
- Today (20 Jan)

---

### 5.3 Messages
Purpose:
Highlight words that mattered.

Rules:
- 5–10 messages max
- No walls of text
- Dates included
- Styled like chat bubbles

---

### 5.4 Video Moments
Purpose:
Simulate presence despite distance.

Structure:
- Video A plays first
- Fade transition
- Video B plays next

Rules:
- No autoplay
- User initiates play
- Controls visible

---

### 5.5 Photo Story
Purpose:
Let visuals speak.

Design:
- One photo per view
- Arrow or swipe navigation
- Optional short caption

Avoid:
- Masonry grids
- Overlays
- Heavy filters

---

### 5.6 Letters
Purpose:
Say what chats cannot.

Structure:
- Tab or toggle:
  - From Me
  - From You (optional placeholder)

Design:
- Large readable font
- Plenty of spacing
- No decorative clutter

---

### 5.7 Closing
Purpose:
Emotional closure.

Content:
- One honest paragraph
- Date
- Simple ending line

No buttons.
No links.
End quietly.

---

## 6. Styling Guidelines

Colors:
- 1 primary neutral
- 1 accent color
- White space matters more than color

Typography:
- Sans-serif
- Large line height
- Comfortable reading size

Animations:
- Fade in
- Slide up
Nothing else.

---

## 7. Security / Privacy

- Do NOT index with search engines
- Optional simple password gate (frontend-only is acceptable)
- Do not host personal raw chat backups

---

## 8. Development Plan

Day 1:
- Setup project
- Theme + layout
- Landing + section skeletons

Day 2:
- Timeline + Messages
- Responsive layout
- Content refinement

Day 3:
- Videos + Photos + Letters
- Final polish
- Deploy to Netlify

Hard deadline:
20 January. Ship before perfection.

---

## 9. Definition of Done

- Fully responsive
- No placeholder text
- No console errors
- Deployed and tested on mobile
- Viewed once end-to-end without changing anything

If you feel emotional reading it, stop editing.
That means it works.

---
