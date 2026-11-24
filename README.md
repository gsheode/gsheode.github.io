# Senior Software Engineer Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Customize

Replace placeholder content in `src/App.tsx`:

- Name and professional introduction
- GitHub and LinkedIn URLs
- Email address
- Featured projects and repository URLs
- Skills and work experience

## Local development

```powershell
npm install
npm run dev
```

Open the URL printed by Vite.

## Build

```powershell
npm run lint
npm run build
npm run preview
```

## GitHub Pages

Update `base` in `vite.config.ts` if the repository name changes. Then deploy with:

```powershell
npm run deploy
```

Alternatively, push to the `main` branch and use the included GitHub Actions workflow. In the GitHub repository settings, open **Pages** and set the source to **GitHub Actions**.
