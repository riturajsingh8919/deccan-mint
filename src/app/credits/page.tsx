import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { display, inlineAction } from "@/components/landing-design";

export const metadata: Metadata = { title: "Artwork & Photography | Deccan Mint", alternates: { canonical: "/credits" } };

export default function Credits() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-10">
      <Logo />
      <Link href="/" className={`mt-6 ${inlineAction}`}><ArrowLeft size={16} aria-hidden="true" />Back to Deccan Mint</Link>
      <h1 className={`${display} mt-6 text-4xl sm:text-6xl`}>Artwork &amp; photography</h1>
      <p className="mt-5 text-base leading-[1.8] text-muted">The coin campaign, the gold and silver studies, and the gifting concept are AI-generated illustrations. Ask Deccan Mint for images and details of available coins.</p>
      <article className="mt-8 border-y border-line py-6">
        <a href="https://unsplash.com/photos/em6e6FJB3oQ" target="_blank" rel="noreferrer" className={inlineAction}>Golconda Fort, Hyderabad <ArrowUpRight size={17} aria-hidden="true" /></a>
        <p className="mt-2 text-base text-muted">Photography by Anand Ramavath · <a href="https://unsplash.com/license" target="_blank" rel="noreferrer" className="underline underline-offset-4">Unsplash License</a></p>
      </article>
    </main>
  );
}
