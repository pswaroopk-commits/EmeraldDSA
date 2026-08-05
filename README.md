# Emerald DSA Website

Static public website source for Emerald DSA, a loan assistance business in MVP Colony, Visakhapatnam, Andhra Pradesh.

## Current status

This is a local prototype using the supplied Emerald DSA visiting-card artwork, website layout references and proprietor photograph. It remains intentionally conservative and avoids unverified claims. Partner logos and testimonials are disabled by default in `js/main.js` until the business owner confirms the required details.

## Assets

Original supplied files are preserved in `assets/originals/`. Optimised WebP images used by the website are in `assets/images/` and `assets/logos/`.

## Edit business details

Open `js/main.js` and update `SITE_CONFIG`:

- Owner display name
- Primary call number
- WhatsApp number
- Complete address
- Google Maps link
- Business hours
- Service list
- Partner and testimonial feature flags

## Preview locally

Because this is plain HTML, it can be opened directly in a browser. For a local server:

```powershell
python -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

## Deploy

The site is ready for GitHub plus Cloudflare Pages. Use the deployment checklist in `DEPLOYMENT.md`.
