import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";

export const metadata: Metadata = { title: "Photography Credits | Deccan Mint", alternates: { canonical: "/credits" } };

const photos = [
  { title: "Gold coin editorial study", photographer: "Scottsdale Mint", url: "https://unsplash.com/photos/7Sp9T__RDgE", license: "Unsplash License", licenseUrl: "https://unsplash.com/license" },
  { title: "Gold bullion detail", photographer: "Zlaťáky.cz", url: "https://unsplash.com/photos/6WPM3xyCXhg", license: "Unsplash License", licenseUrl: "https://unsplash.com/license" },
  { title: "Gold & silver coin still life", photographer: "Zlaťáky.cz", url: "https://unsplash.com/photos/jgP2-aCuyV0", license: "Unsplash License", licenseUrl: "https://unsplash.com/license" },
  { title: "Gold coins on a light surface", photographer: "Zlaťáky.cz", url: "https://unsplash.com/photos/i1x77UCEFZI", license: "Unsplash License", licenseUrl: "https://unsplash.com/license" },
  { title: "Silver bullion still life", photographer: "Scottsdale Mint", url: "https://unsplash.com/photos/hUqaxjL1Ews", license: "Unsplash License", licenseUrl: "https://unsplash.com/license" },
  { title: "Golconda Fort, Hyderabad", photographer: "Anand Ramavath", url: "https://unsplash.com/photos/em6e6FJB3oQ", license: "Unsplash License", licenseUrl: "https://unsplash.com/license" },
  { title: "A gift wrapped with care", photographer: "Beyzaa Yurtkuran", url: "https://www.pexels.com/photo/item-tied-with-string-20191566/", license: "Pexels License", licenseUrl: "https://www.pexels.com/license/" },
];

export default function Credits() {
  return <main className="mx-auto max-w-3xl px-6 py-10 sm:px-10"><Logo /><Link href="/" className="mt-10 flex items-center gap-2 text-base text-green"><ArrowLeft size={15} />Back to Deccan Mint</Link><h1 className="mt-10 font-display text-5xl">Photography credits</h1><p className="mt-5 text-base leading-7 text-muted">With appreciation to the photographers who make their work available under free-use licenses. Coin and gifting photographs are editorial illustrations; they do not represent Deccan Mint inventory or imply a commercial affiliation with the pictured mints.</p><div className="mt-8 divide-y divide-gold/20">{photos.map(photo => <article key={photo.url} className="py-6"><a href={photo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-display text-[27px] hover:text-gold-dark">{photo.title}<ArrowUpRight size={17} /></a><p className="mt-2 text-base text-muted">Photography by {photo.photographer} · <a href={photo.licenseUrl} className="underline underline-offset-4" target="_blank" rel="noopener noreferrer">{photo.license}</a></p></article>)}</div><p className="mt-8 text-base leading-6 text-muted">The Deccan Mint logo is supplied by the business. Typography: DM Sans and Manrope, served by Google Fonts. Icons: Lucide React.</p></main>;
}
