import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { CollectionExplorer, EnquiryForm, Faqs, Header } from "@/components/landing-interactions";
import { business, container, display, eyebrow, inlineAction, navigation, primaryAction } from "@/components/landing-design";
import { LandingMotion } from "@/components/landing-motion";
import { Logo } from "@/components/logo";
import coinCampaign from "../../public/images/deccan-coin-campaign.webp";
import deccanHeritage from "../../public/images/deccan-heritage.jpg";
import giftingAtelier from "../../public/images/gifting-atelier.webp";

const buyingGuide = [
  { title: "Metal and fineness", text: "Check the stated fineness and the mint or manufacturer details for the coin you’re considering." },
  { title: "Weight and design", text: "Choose a weight and design that suit your collection or the occasion you’re marking." },
  { title: "Price and documentation", text: "Ask for the final price, any applicable charges, and supporting documentation before buying." },
];

function Hero() {
  return (
    <section id="home" data-hero aria-labelledby="hero-title" className="overflow-hidden border-b border-line bg-[#f8f3e9]">
      <div className={`${container} grid items-center gap-7 pt-10 pb-6 sm:gap-9 sm:pt-13 sm:pb-10 lg:grid-cols-[0.96fr_1.04fr] lg:gap-10 lg:py-13 xl:gap-16`}>
        <div className="relative z-10 pb-1 lg:py-6">
          <p className={`${eyebrow} mb-4 flex items-center gap-3 sm:mb-6`}>
            <span aria-hidden="true" className="h-px w-8 origin-left bg-gold motion-safe:animate-hero-rule" />
            <span className="motion-safe:animate-hero-detail [--hero-delay:90ms]">The Deccan Mint collection</span>
          </p>
          <h1 id="hero-title" className={`${display} text-[clamp(2.35rem,10.6vw,4.6rem)] sm:text-[clamp(3.3rem,7.2vw,5.05rem)] lg:text-[clamp(3.25rem,5.25vw,5.45rem)]`}>
            <span className="-mx-1 block overflow-hidden px-1 pb-[.08em]">
              <span data-hero-line className="block motion-safe:animate-hero-line [--hero-delay:155ms]">Gold &amp; silver.</span>
            </span>
            <span className="-mx-1 -mt-[.06em] block overflow-hidden px-1 pb-[.14em]">
              <em data-hero-line className="block text-gold-dark motion-safe:animate-hero-line [--hero-delay:305ms]">Worth keeping.</em>
            </span>
          </h1>
          <p className="mt-3 max-w-[28rem] text-base leading-[1.8] text-muted motion-safe:animate-hero-detail [--hero-delay:465ms] sm:mt-5 sm:text-lg">
            Coins for the collections you build, the people you celebrate, and the moments you want to remember.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 motion-safe:animate-hero-detail [--hero-delay:585ms] focus-within:animate-none sm:mt-8">
            <a href="#collections" data-landing-link className={primaryAction}>Explore the coins <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href="#our-story" data-landing-link className={inlineAction}>Our story <ArrowDown size={17} aria-hidden="true" className="motion-safe:transition-transform motion-safe:group-hover:translate-y-1" /></a>
          </div>
        </div>
        <figure className="relative min-w-0 lg:pt-2">
          <div data-hero-art className="relative isolate aspect-[1.32] overflow-hidden rounded-[4px] bg-[#efe4d2] lg:aspect-[1.15]">
            <div data-hero-aperture className="absolute inset-0 overflow-hidden motion-safe:animate-hero-aperture">
              <div data-hero-drift className="absolute -inset-1 sm:-inset-2">
                <div data-hero-image className="relative h-full w-full origin-[50%_60%] motion-safe:animate-hero-image">
                  <Image
                    src={coinCampaign}
                    alt="Illustrative gold and silver coins engraved with plateau contours, displayed on pale stone"
                    fill
                    preload
                    placeholder="blur"
                    sizes="(min-width: 1440px) 660px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <figcaption className="mt-3 flex justify-end text-base text-muted motion-safe:animate-hero-detail [--hero-delay:700ms] focus-within:animate-none">
            <Link href="/credits" className="underline decoration-gold/60 underline-offset-4 hover:text-gold-dark">Illustrative coin study</Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="our-story" aria-labelledby="story-title" className="bg-ivory">
      <div className={`${container} pt-12 pb-13 sm:pt-17 sm:pb-18 lg:pt-22 lg:pb-23`}>
        <div className="mb-6 grid items-end gap-4 sm:mb-8 md:grid-cols-[1.35fr_1fr] md:gap-9 lg:gap-16">
          <div data-reveal="text">
            <p className={`${eyebrow} mb-4`}>Our story</p>
            <h2 id="story-title" className={`${display} max-w-[730px] text-[clamp(2.7rem,6.5vw,6rem)]`}>Rooted in <em className="inline-block text-gold-dark">the Deccan.</em></h2>
          </div>
          <p data-reveal="text" data-reveal-delay="90" className="max-w-[440px] text-base leading-[1.8] text-muted md:justify-self-end md:pb-1">The region gave Deccan Mint its name. Its stone forts, layered plateaus, and living traditions shape how we think about the things people choose to keep.</p>
        </div>
        <figure>
          <div data-story-frame data-reveal="panorama" className="group/reveal relative aspect-[1.52] overflow-hidden rounded-[4px] bg-parchment sm:aspect-[2.05] lg:aspect-[2.75]">
            <div data-reveal-visual className="absolute inset-0 group-data-[reveal-pending]/reveal:opacity-0">
              <div data-story-drift className="absolute inset-0 lg:-inset-4">
                <Image
                  src={deccanHeritage}
                  alt="Arched stone ramparts and the approach to Golconda Fort in Hyderabad"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1440px) 1360px, 100vw"
                  className="object-cover object-[center_62%] saturate-[.75]"
                />
              </div>
            </div>
          </div>
          <figcaption data-reveal="text" className="mt-3 flex items-center gap-2 text-base text-muted">
            <span aria-hidden="true" className="h-px w-6 bg-gold" /> Golconda Fort, Hyderabad
          </figcaption>
        </figure>
        <div className="mt-6 grid gap-4 border-t border-line pt-6 sm:mt-8 md:grid-cols-[1.35fr_1fr] md:items-start md:gap-9">
          <p data-reveal="text" className={`${display} text-[clamp(1.6rem,3.2vw,2.9rem)]`}>A tradition carried forward.</p>
          <div data-reveal="text" data-reveal-delay="90" className="max-w-[440px] md:justify-self-end">
            <p className="text-base leading-[1.8] text-muted">A brand by Sai Surya Gold, Deccan Mint honours the place of gold and silver in Indian homes through coins for collecting, gifting, and passing on.</p>
            <a href="#collections" data-landing-link className={`mt-2 ${inlineAction}`}>See the collection <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Collections() {
  return (
    <section id="collections" aria-labelledby="collections-title" className="border-y border-line bg-[#f5f0e7]">
      <div className={`${container} py-12 sm:py-18 lg:py-22`}>
        <div className="mb-7 grid items-end gap-4 sm:mb-10 md:grid-cols-[1.3fr_1fr] md:gap-8">
          <div data-reveal="text">
            <p className={`${eyebrow} mb-4`}>The collection</p>
            <h2 id="collections-title" className={`${display} text-[clamp(2.7rem,6vw,5.65rem)]`}>Find your kind of <em className="text-gold-dark">precious.</em></h2>
          </div>
          <p data-reveal="text" data-reveal-delay="90" className="max-w-[420px] text-base leading-[1.8] text-muted md:justify-self-end md:pb-1">Explore gold and silver, then ask us about available coin designs, weights, and gifting options.</p>
        </div>
        <CollectionExplorer />
      </div>
    </section>
  );
}

function Gifting() {
  return (
    <section id="gifting" aria-labelledby="gifting-title" className="bg-ivory">
      <div className={`${container} py-12 sm:py-17 lg:py-22`}>
        <div className="grid overflow-hidden rounded-[4px] border border-[#e4d4c9] bg-[#f3e8e0] lg:grid-cols-[1fr_1.08fr]">
          <div className="flex flex-col items-start justify-center px-5 py-8 sm:px-9 sm:py-10 lg:px-[clamp(2.5rem,4.5vw,5rem)]">
            <div data-reveal="text">
              <p className={`${eyebrow} mb-4`}>Coins for gifting</p>
              <h2 id="gifting-title" className={`${display} text-[clamp(2.5rem,5.15vw,5.15rem)]`}>A gift worth<br /><em className="text-[#865d40]">keeping.</em></h2>
            </div>
            <p data-reveal="text" data-reveal-delay="90" className="mt-5 max-w-[390px] text-base leading-[1.8] text-muted">For a wedding, a festival, or a new beginning, choose a gold or silver coin with the person and the occasion in mind.</p>
            <a data-reveal="text" data-reveal-delay="145" href="#contact" data-landing-link data-interest="Gifting" className={`mt-6 ${primaryAction}`}>Discuss a gift <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
          <figure data-reveal="image" className="group group/reveal relative aspect-[1.39] overflow-hidden bg-[#381c16] lg:aspect-[1.36]">
            <div data-reveal-visual className="absolute inset-0 group-data-[reveal-pending]/reveal:opacity-0">
              <Image
                src={giftingAtelier}
                alt="An illustrative gold-toned coin in an open burgundy velvet case with a champagne ribbon"
                fill
                placeholder="blur"
                sizes="(min-width: 1440px) 695px, (min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[center_53%] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.035]"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 to-transparent px-4 pt-12 pb-3 text-base text-white sm:px-6 sm:pb-4">Illustrative gifting concept</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function CoinGuide() {
  return (
    <section id="coin-guide" aria-labelledby="guide-title" className="border-y border-line bg-[#f5f0e7]">
      <div className={`${container} grid gap-10 py-13 sm:py-17 lg:grid-cols-2 lg:gap-18 lg:py-22`}>
        <div>
          <div data-reveal="text" className="mb-6">
            <p className={`${eyebrow} mb-4`}>Before you choose</p>
            <h2 id="guide-title" className={`${display} text-[clamp(2.5rem,5vw,4.65rem)]`}>Know what you’re buying.</h2>
          </div>
          <dl className="border-t border-line">
            {buyingGuide.map(({ title, text }, index) => (
              <div key={title} data-reveal="text" data-reveal-delay={index * 50} className="border-b border-line py-4">
                <dt className="text-base font-semibold text-ink">{title}</dt>
                <dd className="mt-1 text-base leading-[1.7] text-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div id="faqs">
          <div data-reveal="text" className="mb-6">
            <p className={`${eyebrow} mb-4`}>Frequently asked questions</p>
            <h2 className={`${display} text-[clamp(2.5rem,5vw,4.65rem)]`}>Questions, answered.</h2>
          </div>
          <Faqs />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ivory">
      <div className={`${container} grid gap-8 py-12 sm:py-18 lg:grid-cols-[.91fr_1.09fr] lg:gap-16 lg:py-22`}>
        <div className="lg:pt-8">
          <div data-reveal="text">
            <p className={`${eyebrow} mb-4`}>Speak to Deccan Mint</p>
            <h2 id="contact-title" className={`${display} max-w-[590px] text-[clamp(2.7rem,6vw,5.45rem)]`}>Let’s talk about your <em className="text-gold-dark">next coin.</em></h2>
          </div>
          <p data-reveal="text" data-reveal-delay="90" className="mt-5 max-w-[380px] text-base leading-[1.8] text-muted">Tell us what you have in mind. We can discuss available coins, pricing, and the details that matter to you.</p>
          <div data-reveal="text" data-reveal-delay="145" className="mt-5 flex flex-wrap items-center gap-x-6">
            <a href={business.phone} className={inlineAction}><Phone size={16} aria-hidden="true" /> {business.phoneNumber}</a>
            <a href={`mailto:${business.email}`} className={inlineAction}><Mail size={16} aria-hidden="true" /> {business.email}</a>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}

function Footer() {
  const link = "inline-flex min-h-10 items-center gap-2 text-base text-muted transition-colors hover:text-gold-dark";
  return (
    <footer className="border-t border-line bg-[#f2ede3]">
      <div className={`${container} pt-9 sm:pt-12`}>
        <div className="grid gap-x-8 gap-y-6 pb-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_.85fr_1fr]">
          <div data-reveal="text" className="border-b border-line pb-5 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:pb-0">
            <Logo inLanding />
            <p className="mt-3 max-w-[305px] text-base leading-[1.7] text-muted">Gold and silver coins for collecting, gifting, and passing on.</p>
          </div>
          <div data-reveal="text" data-reveal-delay="65">
            <h2 className="mb-2 text-base font-semibold text-ink">Explore</h2>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-3 lg:grid-cols-1">
                {navigation.map(({ id, label }) => <li key={id}><a href={`#${id}`} data-landing-link className={link}>{label}</a></li>)}
              </ul>
            </nav>
          </div>
          <div data-reveal="text" data-reveal-delay="130">
            <h2 className="mb-2 text-base font-semibold text-ink">Get in touch</h2>
            <ul>
              <li><a href={business.phone} className={link}><Phone size={16} aria-hidden="true" />{business.phoneNumber}</a></li>
              <li><a href={`mailto:${business.email}`} className={link}><Mail size={16} aria-hidden="true" />{business.email}</a></li>
              <li><a href={business.whatsapp} target="_blank" rel="noreferrer" className={link}><FaWhatsapp size={17} aria-hidden="true" />Chat on WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 border-t border-line py-4 pr-14 text-base text-muted sm:pr-0">
          <p>© 2026 Deccan Mint. All rights reserved.</p>
          <Link href="/privacy" className="inline-flex min-h-10 items-center hover:text-gold-dark">Privacy notice</Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div data-landing>
      <a href="#main" className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-5 focus:py-3 focus:text-charcoal focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Story />
        <Collections />
        <Gifting />
        <CoinGuide />
        <Contact />
      </main>
      <Footer />
      <a href={business.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Deccan Mint on WhatsApp (opens in a new tab)" title="Chat on WhatsApp" className="fixed right-4 bottom-4 z-40 grid size-13 place-items-center rounded-full bg-[#168a49] text-white shadow-[0_5px_22px_#168a4933] transition-colors hover:bg-[#10783d] motion-safe:transition-[transform,background-color] motion-safe:hover:-translate-y-1 sm:right-6 sm:bottom-6">
        <FaWhatsapp size={29} aria-hidden="true" />
      </a>
      <LandingMotion />
    </div>
  );
}
