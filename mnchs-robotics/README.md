# MNCHS Robotics Club Website

A React + Vite site for the Masbate National Comprehensive High School Robotics Club.
Written in JSX, with four pages: **Home**, **Info**, **Directory**, and **Membership Registration**.

## Project structure

```
src/
  components/
    Navbar.jsx          nav bar (PCB pin-header style)
    Footer.jsx           site footer
    TitleBlock.jsx        "engineering drawing" corner stamp, reused on every page
    CircuitDivider.jsx    decorative section divider (drawn as a circuit trace)
  pages/
    Home.jsx
    Info.jsx
    Directory.jsx         officer roster + contact info — EDIT THIS with real names
    Membership.jsx        registration form
  App.jsx                 routes
  main.jsx                entry point
  index.css                all styling (colors, type, layout)
```

## Run it locally

You'll need [Node.js](https://nodejs.org/) (v18 or newer) installed.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Things you'll probably want to edit first

1. **`src/pages/Directory.jsx`** — the `OFFICERS` array at the top has placeholder
   names like "Officer Name". Replace with your actual officers.
2. **`src/components/Footer.jsx`** — update the email address and Facebook handle.
3. **`src/pages/Info.jsx`** — the `FAQS` and `ACTIVITIES` arrays, and the adviser name
   in the title block.
4. **The membership form** (`src/pages/Membership.jsx`) currently only validates and
   shows a confirmation message in the browser — it does **not** send the data anywhere
   yet, since this is a static site with no backend. To actually collect submissions,
   pick one:
   - **Formspree** (easiest): create a free form at [formspree.io](https://formspree.io),
     then inside `handleSubmit` add a `fetch('https://formspree.io/f/your-id', { method: 'POST', body: ... })` call.
   - **Google Forms**: build an equivalent Google Form and either embed it instead, or
     POST to its form action URL.
   - **Your own backend**: point `fetch()` at your own API endpoint.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. Install the GitHub Pages deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
3. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. In `vite.config.js`, set the base path to your repo name:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/<your-repo-name>/',
   })
   ```
5. Run:
   ```bash
   npm run deploy
   ```
6. In your GitHub repo settings → Pages, set the source to the `gh-pages` branch.

The app already uses `HashRouter` (URLs look like `/#/info`) specifically so that
page refreshes and direct links work correctly on GitHub Pages without extra
server configuration.

## Tech stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — dev server & build tool
- [React Router](https://reactrouter.com/) — page navigation
- Fonts: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono (labels/data)
- No CSS framework — all styling is plain CSS in `src/index.css` using CSS variables
