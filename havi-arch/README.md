# HAVI ARCH — Website

React + JavaScript + Tailwind CSS (v4) + Vite.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```
npm run build      # output in /dist
npm run preview
```

## Editing
- All text, projects, services and image URLs: `src/data/content.js`
- Colors and fonts: `@theme` block in `src/index.css`
- Contact form: wire the `TODO` in `src/components/Contact.jsx` to your backend / email service / Supabase.
- Replace the Unsplash placeholder images with your own project photos (put them in `/public` and use `/your-image.jpg`).
