# khizooo — Static Website (mysite)

A static, multi-page personal website hosted on GitHub Pages.

It’s mostly plain HTML/CSS with a shared runtime script that:
- loads CSS/JS dependencies,
- injects common UI (sidebar, mobile menu, footer),
- renders some pages dynamically (e.g. Artworks grid, Devspark list).

## Live / Hosting

- Production host (as configured in code): `https://khizarooo.github.io/mysite/`

## Tech Stack

- HTML (multiple standalone pages)
- CSS: Bootstrap + custom styles
- JS: vanilla + jQuery
- Vendor bundles in `js/`: `jquery.js`, `bootstrap.bundle.min.js`, `plugins.js`
- Analytics (production only): GA4 + Ahrefs (loaded dynamically)

## Project Structure

- `index.html` — Home / hub page
- Top-level sections:
	- `Artworks.html` — Artworks gallery (grid rendered by JS)
	- `Infographics.html` / `InfographicsList.html` / `InfographicDetail.html` — Infographics section
	- `Toolbox.html` / `ToolboxList.html` / `ToolBoxDetail.html` — Toolbox section
	- `Freebies.html` and `Freebies/` — Free assets lists
	- `Devspark.html` — Devspark (JSON-backed offcanvas detail)
	- `Portfolio.html`, `FutureMonsters.html`
- Shared UI/runtime:
	- `js/init.js` — main runtime (loads assets + renders shared UI)
	- `components/left-sidebar.js` — legacy/unused sidebar script (current sidebar is in `js/init.js`)
- Data:
	- `json/devspark/data.json` — Devspark categories/subcategories
	- `json/freebies/*.json` — curated lists (many pages are statically rendered from these)
	- `json/toolbox/**` — toolbox data (present for future/automation)
- Assets:
	- `css/` — stylesheets
	- `images/` — artwork images + monsters
- SEO:
	- `sitemap.xml` — static sitemap for GitHub Pages
	- `googlee5a25bead9a97af0.html` — Google verification

## How the Site Works

### Global Paths: `BASE_PATH` and `REL_PATH`

Most pages define a `window.BASE_PATH` inline (in the `<head>`), switching between:
- GitHub Pages base URL when hosted on `khizarooo.github.io`
- a hard-coded `file:///D:/.../mysite/` base for local file browsing

`js/init.js` also defines `BASE_PATH` the same way and computes `window.REL_PATH` based on how deep the current URL path is under `/mysite/`.

Usage patterns:
- Links/navigation often use `BASE_PATH` (absolute-to-site links)
- Runtime asset loading uses `REL_PATH` (relative-to-current-page)

### Shared Runtime (`js/init.js`)

On every page that includes it, `js/init.js`:
- Shows a full-screen “white loader” overlay, then hides it after page load.
- Dynamically injects CSS:
	- `css/fonts.css`, `css/bootstrap.min.css`, `css/all.min.css`, `css/plugins.css`, `css/style.css`, `css/khizooo.css`
- Dynamically injects JS (after DOMContentLoaded):
	- `js/jquery.js` → then `js/bootstrap.bundle.min.js` and `js/plugins.js`
- Injects shared UI into the DOM:
	- Sidebar navigation
	- Mobile menu
	- Footer/social links
- Initializes various UI effects and plugins (cursor, jarallax, counters, to-top, canvas background, etc.)

### Dynamic Content

- **Artworks grid**
	- `Artworks.html` provides `<div id="art-grid">`.
	- `js/init.js` renders the grid from a hard-coded list of image filenames in `images/artworks/`.
	- `Artworks.html` defines `openArtModal()` to show the clicked image in a Bootstrap modal.

- **Devspark**
	- `Devspark.html` provides `<ul id="devspark_list">`.
	- `js/init.js` fetches Devspark JSON, renders categories as clickable list items, and opens a Bootstrap offcanvas for details.
	- Data source:
		- fetched from GitHub Raw URL (not from local `json/devspark/data.json`)
	- Caching:
		- stored in `localStorage` for 1 day (`devspark_data_json`)

### Static “Generated from JSON” Pages

The `json/freebies/*.json` files look like the source-of-truth for curated lists.
Many pages in `Freebies/` are currently **static HTML** with a comment like “statically rendered from typography.json”, meaning the JSON exists but the site does not load it at runtime.

## Local Development

### Option A: Open as local files (works with current `BASE_PATH`)

Open `index.html` directly in a browser.

### Option B: Run a local web server (recommended for web-like behavior)

If you use a local server (examples below), note that your current `BASE_PATH` logic will *not* match `localhost`, and will fall back to the hard-coded `file:///D:/...` path.

- Python: `python -m http.server`
- Node: `npx serve`

To make local server development smooth, consider the improvement in the “Improvements” section: compute `BASE_PATH` automatically from `document.baseURI`.

## Deployment

This repo is configured to work on GitHub Pages under the `/mysite/` subpath.

Typical workflow:
- push to GitHub
- GitHub Pages serves `https://khizarooo.github.io/mysite/`

## SEO / Sitemap

`sitemap.xml` lists key URLs (home + sections + subpages).
If you add/remove pages, update `sitemap.xml` accordingly.

## Known Rough Edges (from scan)

- `LandingPage.html` is referenced in `index.html`/`FutureMonsters.html` targets, but is not present in the folder.
- The contact form in `js/init.js` posts to `modal/contact.php`, but there is no PHP backend in this project structure (static hosting won’t run PHP).
- `components/left-sidebar.js` appears to be legacy and is not the sidebar currently used by the site.

## Improvements (Recommended)

### High impact / should do first

1. **Remove hard-coded local file path from `BASE_PATH`**
	 - Compute it from the current page URL so it works on GitHub Pages, `localhost`, and file browsing.
	 - Example approach: `window.BASE_PATH = new URL('./', document.baseURI).href;`

2. **Unify `BASE_PATH` definition**
	 - Right now many pages define `BASE_PATH` inline *and* `js/init.js` defines it too.
	 - Pick one source of truth to avoid mismatches.

3. **Make Devspark JSON load locally**
	 - Prefer fetching `json/devspark/data.json` from the same site origin, with an optional fallback to GitHub Raw.
	 - This makes the page work offline and avoids external dependency.

4. **Fix/clean placeholder links**
	 - Several pages use `href="abc"` placeholders.
	 - These are confusing for users and can hurt SEO.

5. **Contact form: replace or remove**
	 - For static hosting, use a static-friendly provider (Formspree / Netlify Forms / Cloudflare Forms) or remove the handler.

### Quality / performance

6. **Reduce JS/CSS payload**
	 - `js/plugins.js` is large (template bundle). If you only use a subset, split it or remove unused plugins.

7. **SEO: meaningful metadata per page**
	 - Many pages still have generic meta description/author.
	 - Add unique `<title>`, `<meta name="description">`, OpenGraph/Twitter tags, and canonical URLs.

8. **Accessibility pass**
	 - Ensure buttons/links have clear labels, add `aria-*` where needed, improve keyboard focus, and keep `alt` text meaningful.

9. **Automate sitemap updates**
	 - Consider generating `sitemap.xml` from your folder tree during release/build.

### Maintainability

10. **Introduce a lightweight build step (optional)**
	 - Not required, but a tiny script can:
		 - regenerate Freebies pages from `json/freebies/*.json`
		 - keep navigation targets consistent
		 - validate broken links
