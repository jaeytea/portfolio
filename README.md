# portfolio — terminal-themed React site

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
# output → dist/
```

## Deploy to Vercel (recommended)

```bash
npm i -g vercel
vercel
# follow prompts — select "Vite" framework
```

Or push to GitHub and connect repo on vercel.com — auto-deploys on every push.

## Deploy to Netlify

```bash
npm run build
# drag-drop the dist/ folder at app.netlify.com/drop
```

Or connect GitHub repo → build command: `npm run build` → publish dir: `dist`

## Customise

| File | What to change |
|---|---|
| `src/components/Hero.jsx` | Your name, bio, email, GitHub, LinkedIn, resume link |
| `src/components/Skills.jsx` | Add/remove skill chips per category |
| `src/components/Projects.jsx` | Replace project cards with your own |
| `src/components/Contact.jsx` | Wire up Formspree or EmailJS for real emails |
| `src/components/Footer.jsx` | Deployment platform name |
| `src/App.css` | Colors via CSS variables at top of file |

## Wire up the contact form (Formspree — free)

1. Sign up at formspree.io
2. Create a form → copy your endpoint URL
3. In `Contact.jsx`, replace the `handleSubmit` function:

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/YOUR_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSent(true);
  setTimeout(() => setSent(false), 4000);
  setForm({ name: "", email: "", message: "" });
};
```

## Color scheme (App.css :root)

```css
--green:    #39d353   /* primary accent — prompts, active states */
--cyan:     #58a6ff   /* secondary — links, commands */
--yellow:   #e3b341   /* tertiary — flags, stack tags */
--magenta:  #bc8cff   /* quaternary — values, categories */
--red:      #f85149   /* errors */
--bg:       #0d1117   /* main background */
--bg2:      #161b22   /* cards, terminal windows */
```
