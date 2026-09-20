# Skytech Skills Academy

A modern, responsive academy website for **Skytech Skills Academy**, offering professional courses in IT, engineering, architecture, digital skills, web development, graphic design, English language, and IELTS preparation.

## Features

- Modern and responsive design
- Professional academy homepage
- Course categories and course listings
- Course search and filtering
- Individual course detail pages
- Online enrollment form with validation
- About Academy page
- Our Story section with English/Urdu reading option
- Contact page
- Responsive navigation with mobile menu
- Reusable React components
- SEO-friendly page structure
- Accessible and user-friendly interface

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Lucide React
- JavaScript (ES6+)

## Project Structure

```text
SKYTECH/
├── client/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── data/
│       ├── layouts/
│       ├── pages/
│       ├── sections/
│       ├── routes/
│       ├── hooks/
│       ├── utils/
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
│
├── server/     # Placeholder for future backend
├── .gitignore
└── README.md
```

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
