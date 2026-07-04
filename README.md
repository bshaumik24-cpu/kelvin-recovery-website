# Kelvin Recovery — Landing Site

One-page static website for Kelvin Recovery: managed cold plunge amenities for premium residential buildings in Dubai. Plain HTML/CSS/JS — no build step, no backend. Runs on GitHub Pages as-is.

## Files

```
index.html      → the whole site (all sections)
styles.css      → all styling (colors, layout, responsive)
script.js       → nav, smooth scroll, FAQ accordion, form demo
assets/
  images/       → put real photos here (see [EDIT-IMAGE] comments)
  pdfs/         → put kelvin-recovery-pilot-one-pager.pdf here
README.md       → this file
```

## Before going live — the edit checklist

Open `index.html` and search for these markers:

| Marker | What to change |
|---|---|
| `[EDIT-PHONE]` | Your phone number (contact section + footer) |
| `[EDIT-EMAIL]` | Your email (contact section + footer) |
| `[EDIT-WHATSAPP]` | Your number in the `wa.me/...` links — full number, no `+`, no spaces |
| `[EDIT-IMAGE]` | Replace placeholder boxes with `<img>` tags pointing at `./assets/images/...` |
| `[EDIT-PDF]` | Upload the pilot one-pager PDF to `assets/pdfs/kelvin-recovery-pilot-one-pager.pdf` |
| `[EDIT-DOMAIN]` | Your live URL in the `og:url` meta tag |
| `[EDIT-FORM]` | Connect the contact form (instructions below) |

### Connecting the contact form (currently front-end only)

The form shows a demo message and sends nothing. To make it real:

1. **Formspree (simplest):** create a free form at formspree.io, copy your endpoint, then in `index.html` change the form tag to `<form class="form" action="https://formspree.io/f/YOUR_ID" method="POST">` and delete the block in `script.js` marked `FORM-DEMO`.
2. **Google Forms / Tally:** replace the whole `<form>` block with your embed iframe, or point the button at your form URL.

## Deploying to GitHub Pages

1. **Create a repository:** at github.com click **New repository**, name it (e.g. `kelvin-recovery`), keep it **Public**, don't add any template files, click **Create repository**.
2. **Upload the files:** on the empty repo page click **uploading an existing file**, drag in `index.html`, `styles.css`, `script.js`, `README.md` and the `assets` folder (drag the folder itself so the structure is kept), then click **Commit changes**. `index.html` must sit in the root, not inside a subfolder.
3. **Enable Pages:** go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, click **Save**.
6. **Find your link:** wait 1–2 minutes, refresh Settings → Pages — your live URL appears at the top: `https://YOUR-USERNAME.github.io/kelvin-recovery/`.
7. **Future edits:** open any file in the repo on GitHub, click the pencil icon, edit, **Commit changes**. The live site updates automatically within a minute or two. (To add images/PDFs later: **Add file → Upload files** inside the right folder.)
8. **Custom domain later:** buy the domain (e.g. `kelvinrecovery.ae`), then in **Settings → Pages → Custom domain** enter it and save. At your domain registrar, add a `CNAME` record for `www` pointing to `YOUR-USERNAME.github.io`, and (for the bare domain) `A` records pointing to GitHub Pages' IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. Wait for DNS to propagate, then tick **Enforce HTTPS**. Note: `.ae` domains are registered through AE-accredited registrars; the DNS steps are the same.

## Notes

- Empty folders don't upload to GitHub — the `.gitkeep` files inside `assets/images/` and `assets/pdfs/` are there so the structure survives. Delete them once real files are in.
- No fake testimonials, logos or past-project photos anywhere on this site. Keep it that way until they're real.
- Fonts load from Google Fonts (Archivo, Public Sans, IBM Plex Mono). No other external dependencies.
