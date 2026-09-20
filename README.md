# Skytech Skills Academy

Professional academy website for practical courses in technology, engineering, design, and English.

## Project structure

```
SKYTECH/
├── client/     # React + Vite frontend (active)
├── server/     # Placeholder for future backend
├── .gitignore
└── README.md
```

## Frontend stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React

## Getting started

```bash
cd client
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build

```bash
cd client
npm run build
npm run preview
```

## Available routes

- `/` — Home
- `/courses` — Course listing with search and filters
- `/course/:slug` — Course details
- `/about` — About the academy
- `/our-story` — Academy story (English / Urdu toggle)
- `/contact` — Contact page (placeholder details)
- `/enroll` — Enrollment form (frontend only)

## Notes

- Course data lives in `client/src/data/courses.js` and is used across the frontend.
- Enrollment and contact forms are frontend demonstrations only. They do not save data to a database.
- The `server/` folder is intentionally empty and reserved for future backend work.
