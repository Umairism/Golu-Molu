# Anniversary Memory Web App

A personal, private web app to preserve and present shared memories for a long-distance relationship anniversary.

## 🎯 Purpose

This is a minimal, emotionally honest web application built to celebrate and document the journey of a long-distance relationship. It prioritizes intention over complexity.

## 🛠 Tech Stack

- **React** with **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Lucide React** for icons

## 📁 Project Structure

```
src/
├── components/          # All UI components
│   ├── Landing.tsx      # Entry screen
│   ├── Timeline.tsx     # Journey milestones
│   ├── Messages.tsx     # Important conversations
│   ├── VideoMoments.tsx # Video memories
│   ├── PhotoStory.tsx   # Photo carousel
│   ├── Letters.tsx      # Long-form letters
│   └── Closing.tsx      # Final message
├── data/                # All content data
│   ├── timeline.ts
│   ├── messages.ts
│   ├── videos.ts
│   ├── photos.ts
│   └── letters.ts
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📝 Customizing Content

### 1. Timeline Events
Edit `src/data/timeline.ts` to add your relationship milestones.

### 2. Messages
Update `src/data/messages.ts` with meaningful text messages.

### 3. Videos
- Place video files in `public/videos/`
- Update `src/data/videos.ts` with video paths and titles

### 4. Photos
- Place photo files in `public/photos/`
- Update `src/data/photos.ts` with photo paths and captions

### 5. Letters
Edit `src/data/letters.ts` to add your heartfelt letters.

## 📂 Asset Organization

Create these folders in your `public/` directory:
- `public/videos/` - for video files
- `public/photos/` - for photo files

Supported formats:
- **Videos**: MP4, WebM
- **Photos**: JPG, PNG, WebP

## 🎨 Design Principles

- **Minimal UI** - Content over decoration
- **Emotional honesty** - Authentic over perfect
- **Clean typography** - Easy to read, plenty of space
- **Simple animations** - Fade in and slide up only
- **Fully responsive** - Works on all devices

## 🔒 Privacy

This is a **private project**. Before deploying:
1. Add password protection if needed
2. Use robots.txt to prevent search engine indexing
3. Keep the repository private
4. Don't commit sensitive media files to git

## 📦 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify
3. Optional: Add password protection via Netlify settings

### Other Platforms

The built `dist/` folder can be deployed to:
- Vercel
- GitHub Pages
- Any static hosting service

## ⚡ Performance Tips

- Optimize images before adding them (use WebP format)
- Keep video files under 50MB each
- Use compressed video formats (H.264/H.265)

## 📅 Development Timeline

- **Day 1**: Setup + Layout + Landing
- **Day 2**: Timeline + Messages + Responsive design
- **Day 3**: Videos + Photos + Letters + Deploy

**Hard Deadline**: January 20, 2026

## ✅ Definition of Done

- [x] All components implemented
- [x] Fully responsive
- [ ] No placeholder text (customize data files)
- [ ] Add your media files
- [ ] No console errors
- [ ] Deployed and tested on mobile
- [ ] Viewed once end-to-end

## 💡 Final Note

*"If you feel emotional reading it, stop editing. That means it works."*

---

Made with ❤️ for someone special
