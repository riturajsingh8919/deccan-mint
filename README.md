# Deccan Mint

The light landing page for Deccan Mint, a gold and silver coin brand by Sai Surya Gold. It uses Next.js, React, Tailwind CSS 4, GSAP, Lucide React, and React Icons.

## Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Next.js, normally http://localhost:3000. For production, run `npm run build` followed by `npm start`. Run `npm run lint` and `npx tsc --noEmit` after the build generates Next.js types.

## Deploy on the VPS

The app listens on port 3000 inside its Compose bridge network. The VPS runs Traefik on the host network, where it can reach the app without publishing port 3000. Traefik uses its `letsencrypt` resolver for public HTTPS and redirects `www.deccanmint.com` to `deccanmint.com`.

For the initial deployment, clone the GitHub repository into `/opt/deccan-mint`. From the VPS, pull and deploy updates with:

```sh
cd /opt/deccan-mint
git pull --ff-only origin main
docker compose build --pull
docker compose up -d --wait
```

Run `docker compose ps` to check health and `docker compose logs --tail=100 web` to inspect startup output.

## Update the artwork

The header and footer share `public/logo.png`. The light hero uses `public/images/deccan-coin-campaign.webp`, a 1448 × 1086 ImageGen adaptation of the earlier gold and silver composition. The collection viewer and gifting feature reuse `study-gold.webp`, `study-silver.webp`, and `gifting-atelier.webp` from the dark project. The site labels the artwork as illustrative. The Golconda Fort photo and attribution are available on the site and at `/credits`.

## Navigation, motion, and enquiries

The page moves from the Deccan story into the interactive collection, gifting, buying guidance, and personal enquiries. Tailwind animations start the hero reveal on the first render. GSAP handles the desktop pointer response, and the Golconda Fort photograph moves subtly as its section scrolls into view. The page respects reduced-motion preferences and leaves the root scroll behavior at its browser default. Section anchors opt into smooth scrolling individually. The FAQ uses accessible expandable buttons, and the collection tabs support arrow-key navigation.

Product and gifting links preselect the enquiry topic. The form prepares a WhatsApp message for the visitor to review and send. Visitors can also call or email Deccan Mint directly. No backend or checkout is required.

## Light campaign image prompt

The hero adaptation was produced with the built-in ImageGen tool using the earlier gold and silver study as its edit reference.

Use case: lighting-weather and precise background replacement. Edit the reference coin campaign into a bright, high-end editorial still for the ivory Deccan Mint site. Keep the two same conceptual unbranded coins, gold larger in foreground left at the same angle and silver slightly behind on right, engraved relief of plateau contours and fine ridged edges. Preserve physically credible metal colors. Replace the black stone and dark studio with warm pale limestone, subtle ivory plaster studio gradient, and an elegant stepped off-white travertine plinth low in frame. Use soft but directional morning daylight from upper left so the sculptural coins have clean warm and cool highlights and clear short natural shadows, very light top/side negative space #f5ecdc family, confident refined product photography. Landscape 4:3 ideally, subject group centered horizontally and sitting a bit lower than center, both coins fully visible with at least 11% breathing room horizontally and 15% above, all-important objects inside central 78% to allow square crop. Coin group fills about 68% of width. Big crisp coin faces, no additional objects, no text, logos, watermark, sparkles, ring gadgets, or ornate packaging. Do not make the gold desaturated or yellow plastic; keep sharp metallic edge contrast. Keep the composition photographic, tactile and uncluttered.
