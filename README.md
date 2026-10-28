# Deccan Mint

A responsive, light-theme landing page for Deccan Mint, a gold and silver coin brand by Sai Surya Gold. Built in the existing Next.js 16 / React 19 project with Tailwind CSS 4, Lucide React, and the WhatsApp brand icon from React Icons.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js, normally http://localhost:3000.

```bash
npm run build
npm start
```

## Experience

- Responsive navigation with a keyboard-accessible mobile dialog and active section indicators.
- Gold-toned product hero with coin artwork composed from licensed photographs, an accessible collection selector, a gifting banner, Deccan heritage story, buyer guidance, FAQs, and a WhatsApp enquiry form.
- Collection tabs support arrow-key navigation. Hero gold/silver links open the corresponding collection, and collection enquiry links select the matching interest in the form.
- Calls and WhatsApp enquiries use **+91 90306 09236**.
- The form validates visitor details, prepares a WhatsApp message, and opens it for the visitor to review and send. It does not send automatically, store submissions, or require a backend. A visible message link remains available if the browser blocks the new tab.
- Reduced-motion preferences, keyboard focus states, accessible FAQ controls, and a skip link are supported.
- Metadata, canonical URLs, Open Graph tags, sitemap, and robots use **https://deccanmint.com/**.
- Privacy notice and photography credits are available at `/privacy` and `/credits`.

## Typography and styling

DM Sans and Manrope load **directly from Google Fonts** through the root layout stylesheet link. No downloaded or custom font files are included. If Google Fonts is unavailable, Arial provides the fallback. All text uses at least `text-base` (16px), including labels, captions, navigation, and footer content.

All styling uses Tailwind CSS 4 utilities, theme tokens, and base rules in `src/app/globals.css`. The light palette uses the supplied brand guide as its foundation: warm ivory, antique gold, espresso, champagne, and Deccan green. No dark-mode styles or additional CSS frameworks are used.

## Source map

- `src/app/page.tsx`: homepage content and section composition.
- `src/components/landing-interactions.tsx`: navigation, reveal animations, FAQs, and WhatsApp form.
- `src/components/metal-coin.tsx`: responsive coin compositions using CSS crops of licensed photography.
- `src/components/logo.tsx`: supplied logo, displayed without altering its original image file.
- `src/app/layout.tsx`: Google Fonts and site metadata.
- `src/app/globals.css`: Tailwind 4 theme and accessibility defaults.
- `public/images/`: locally hosted, licensed photography and the supplied logo.

The page intentionally uses enquiry-led actions while the online catalogue is being developed. It does not invent prices, customer reviews, purity grades, certification claims, delivery promises, or available inventory. Replace illustrative photography with approved product images when available.

## Photography

Stock images illustrate the category and gifting story; they do not represent inventory or imply affiliation with pictured mints.

| Local asset | Photographer | Source | License |
| --- | --- | --- | --- |
| `gold-editorial.jpg` | Scottsdale Mint | https://unsplash.com/photos/7Sp9T__RDgE | Unsplash License |
| `gold-detail.jpg` | Zlaťáky.cz | https://unsplash.com/photos/6WPM3xyCXhg | Unsplash License |
| `bullion-coins.jpg` | Zlaťáky.cz | https://unsplash.com/photos/jgP2-aCuyV0 | Unsplash License |
| `gold-coins.jpg` | Zlaťáky.cz | https://unsplash.com/photos/i1x77UCEFZI | Unsplash License |
| `silver-coins.jpg` | Scottsdale Mint | https://unsplash.com/photos/hUqaxjL1Ews | Unsplash License |
| `deccan-heritage.jpg` | Anand Ramavath | https://unsplash.com/photos/em6e6FJB3oQ | Unsplash License |
| `meaningful-gift.jpg` | Beyzaa Yurtkuran | https://www.pexels.com/photo/item-tied-with-string-20191566/ | Pexels License |

License terms: https://unsplash.com/license and https://www.pexels.com/license/. The original Deccan Mint logo was supplied by the business.

## Checks

```bash
npm run lint
npm run build
```

Browser checks cover widths from 320px to 1440px, menu opening/closing, FAQ toggles, collection interest selection, form validation, WhatsApp recipient/message composition, image loading, and linked pages.
# deccan-mint
