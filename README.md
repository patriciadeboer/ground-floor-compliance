# ISO Consulting Website (React + Vite)

This repository contains the source code for the ISO Compliance Consulting website.  
The site is built with **React + Vite** and will be deployed on [Netlify](https://www.netlify.com).

## 🚀 Features
- Lightweight React app (powered by Vite)
- Minimal folder structure
- Ready for Netlify deployment
- SEO-friendly titles & descriptions
- Easy to expand later (services, blog, case studies, etc.)

## 📂 Project Structure
```
iso-consulting-site/
│── .gitignore
│── README.md
│── package.json
│── vite.config.js
│── index.html
│
├── public/
│   └── favicon.ico
│
└── src/
    ├── App.jsx
    ├── main.jsx
    └── style.css
```

## 🛠 Setup & Run Locally
1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/iso-consulting-site.git
   cd iso-consulting-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open the URL shown in your terminal (default: `http://localhost:5173`).

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

## 🌐 Deployment on Netlify
1. Push this repo to GitHub.
2. In Netlify → *New Site from Git* → connect this repo.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Netlify will provide a live URL (you can add a custom domain later).

## 📌 Next Steps
- [ ] Add a contact form (via Netlify Forms)
- [ ] Configure a custom domain (e.g., `yourconsulting.com`)
- [ ] Submit `sitemap.xml` to Google Search Console for SEO
- [ ] Expand site with Services/About content

---

© 2025 Your Company Name. All rights reserved.
