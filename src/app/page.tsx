import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { ArrowUpRight, Gem, Gift, Handshake, MessageCircle, Phone } from "lucide-react";
import { CollectionExplorer, EnquiryForm, Faqs, Header, Reveal } from "@/components/landing-interactions";
import { Logo } from "@/components/logo";
import { MetalCoin } from "@/components/metal-coin";

const buyingGuide = [
  { number: "01", title: "Start with the metal.", text: "Gold or silver? Check the specific coin’s stated purity, fineness, and manufacturer or mint details." },
  { number: "02", title: "Find the right weight & design.", text: "Think about who it’s for, what it marks, and how you’d like it to be remembered." },
  { number: "03", title: "Understand the full price.", text: "Confirm the final price, applicable charges, and supporting documentation before you buy." },
];

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only fixed top-4 left-4 z-[100] bg-white px-5 py-3 text-espresso focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main">
        <section id="home" className="relative overflow-hidden border-b border-[#dfcba7] bg-[linear-gradient(110deg,#fcf8ef_0%,#f5e9d4_54%,#ecd4a9_100%)]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[repeating-linear-gradient(120deg,transparent_0px,transparent_180px,#fff7df40_181px,#fff7df40_182px,transparent_183px,transparent_250px)]" />
          <div className="relative mx-auto grid max-w-[1440px] items-center gap-4 px-5 pt-10 pb-8 sm:px-10 sm:pt-14 lg:min-h-[625px] lg:grid-cols-[1fr_1.03fr] lg:gap-0 lg:px-14 lg:py-12">
            <div className="relative z-10 max-w-[600px]">
              <p className="mb-5 inline-flex items-center gap-3 text-base font-semibold text-gold-dark"><span className="h-px w-8 bg-gold" />DISCOVER DECCAN MINT</p>
              <h1 className="font-display text-[39px] leading-[1.1] tracking-[-0.035em] sm:text-[60px] lg:text-[60px] xl:text-[66px]">Gold &amp; silver coins.<br /><span className="text-[#966b2d]">Value you can hold.</span></h1>
              <p className="mt-6 max-w-[470px] text-base leading-[1.8] sm:text-lg text-[#625647]">Explore gold and silver coins for personal ownership, building your collection, and thoughtful gifting.</p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <a href="#collections" data-collection="gold" aria-label="Explore gold coins" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#93682f] px-3 py-3 text-base font-semibold text-white sm:gap-5 sm:px-5 shadow-[0_5px_18px_#93682f20] transition-all hover:-translate-y-0.5 hover:bg-[#795323]"><span className="sm:hidden">Gold coins</span><span className="hidden sm:inline">Explore gold coins</span><ArrowUpRight size={18} /></a>
                <a href="#collections" data-collection="silver" aria-label="Explore silver coins" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-md border border-[#b9a17f] bg-white/55 px-3 py-3 text-base font-semibold text-espresso sm:gap-5 sm:px-5 transition-colors hover:bg-white"><span className="sm:hidden">Silver coins</span><span className="hidden sm:inline">Explore silver coins</span><ArrowUpRight size={18} /></a>
              </div>
              <p className="mt-7 hidden items-center gap-2 text-base text-[#75644e] sm:flex"><Gem size={19} strokeWidth={1.5} />For your collection. For the moments that matter.</p>
            </div>
            <div className="relative mx-auto h-[310px] w-full max-w-[630px] sm:h-[400px] lg:h-[510px]" aria-label="Gold and silver coin presentation">
              <div aria-hidden="true" className="absolute right-[3%] bottom-[5%] left-[10%] h-[10%] rounded-[50%] bg-[#986b2a]/15 blur-2xl" />
              <div className="absolute top-[7%] left-[8%] w-[67%] -rotate-12"><MetalCoin metal="gold" preload /></div>
              <div className="absolute top-[43%] right-[0%] w-[46%] rotate-12"><MetalCoin metal="silver" preload /></div>
              <div className="absolute bottom-[2%] left-[0%] w-[30%] rotate-6"><MetalCoin metal="gold" /></div>
            </div>
          </div>
        </section>
        <div className="border-b border-gold/15 bg-white">
          <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-7 sm:px-10 md:grid-cols-3 lg:px-14 lg:py-8">
            {[{ icon: Gem, title: "Dedicated to gold & silver", text: "Precious-metal coins, thoughtfully chosen" }, { icon: Gift, title: "Gifts with meaning", text: "For festivals, weddings & milestones" }, { icon: Handshake, title: "Personal guidance", text: "A real conversation about your choice" }].map(({ icon: Icon, title, text }) => <div key={title} className="flex items-center gap-4 md:justify-center"><span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f7efdf] text-gold-dark"><Icon size={25} strokeWidth={1.5} /></span><div><p className="text-base font-semibold">{title}</p><p className="mt-1 text-base text-muted">{text}</p></div></div>)}
          </div>
        </div>

        <section id="collections" className="mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20 lg:px-14">
          <div className="mb-9 text-center">
            <p className="mb-3 text-base font-semibold text-gold-dark">THE DECCAN MINT COLLECTION</p>
            <h2 className="font-display text-[34px] leading-tight tracking-[-0.03em] sm:text-[44px]">Find something precious.</h2>
            <p className="mx-auto mt-4 max-w-[670px] text-base leading-relaxed text-muted">Explore gold, silver, and thoughtful gifting. Choose a collection to discover more.</p>
          </div>
          <CollectionExplorer />
        </section>

        <section id="gifting" className="px-5 pb-14 sm:px-10 sm:pb-20 lg:px-14">
          <div className="mx-auto grid max-w-[1328px] overflow-hidden rounded-2xl border border-[#e4d2b4] bg-[linear-gradient(110deg,#f6ead5,#faf4e8)] md:grid-cols-[1.05fr_0.95fr]">
            <div className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
              <p className="mb-4 flex items-center gap-2 text-base font-semibold text-gold-dark"><Gift size={20} />THE GIFT OF SOMETHING PRECIOUS</p>
              <h2 className="font-display text-[34px] leading-[1.15] tracking-[-0.03em] sm:text-[46px]">For the occasion.<br />For years to come.</h2>
              <p className="mt-5 max-w-[470px] text-base leading-[1.85] text-muted">A wedding. A festival. A new beginning. Mark it with a gold or silver coin — a gift that carries the thought behind it.</p>
              <div className="mt-6 flex flex-wrap gap-2">{["Weddings", "Festivals", "Milestones"].map(occasion => <span key={occasion} className="rounded-md border border-gold/25 bg-white/60 px-3 py-2 text-base text-espresso">{occasion}</span>)}</div>
              <a href="#contact" data-interest="Gifting" className="mt-7 inline-flex min-h-13 items-center gap-6 rounded-md bg-[#93682f] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#795323]">Explore gifting options <ArrowUpRight size={18} /></a>
            </div>
            <div className="relative min-h-[310px] overflow-hidden md:min-h-full"><Image src="/images/meaningful-gift.jpg" alt="A carefully wrapped gift with a textured fabric ribbon" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover object-[65%_72%] brightness-110 sepia-20" /><div className="absolute inset-0 hidden bg-linear-to-r from-[#f8efde] via-transparent to-transparent md:block" /></div>
          </div>
        </section>

        <section id="our-story" className="mx-auto max-w-[1440px] px-5 pt-2 pb-14 sm:px-10 sm:pb-20 lg:px-14">
          <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7"><p className="mb-5 text-base font-medium text-gold-dark">ABOUT DECCAN MINT</p><h2 className="max-w-[680px] font-display text-[34px] leading-[1.2] tracking-[-0.025em] sm:text-[44px]">Rooted in heritage.<br />Made for today.</h2></div>
            <div className="max-w-[490px] self-end lg:col-span-5 lg:pb-1"><p className="text-base leading-[1.9] text-muted">Deccan Mint takes its name from a region shaped by history, artistry, and enduring traditions. That connection guides how we think about gold and silver: as something to own, to give, and to carry forward.</p><p className="mt-4 text-base font-medium text-espresso">Deccan Mint is a brand by Sai Surya Gold.</p></div>
          </div>
          <Reveal>
            <div className="grid gap-7 md:grid-cols-12 md:gap-10">
              <figure className="md:col-span-8"><div className="relative h-[280px] overflow-hidden rounded-xl bg-[#e7e3d9] sm:h-[330px] lg:h-[360px]"><Image src="/images/deccan-heritage.jpg" alt="The stone architecture and open grounds of Golconda Fort, Hyderabad" fill sizes="(max-width: 768px) 100vw, 65vw" className="object-cover object-[center_60%] saturate-65" /></div><figcaption className="mt-3 flex flex-col gap-2 text-base text-muted sm:flex-row sm:justify-between sm:gap-4"><span>Golconda Fort, Hyderabad</span><span>The Deccan, our inspiration</span></figcaption></figure>
              <div className="flex flex-col justify-between border-t border-gold/35 pt-6 md:col-span-4 md:pt-7"><div><p className="text-base font-semibold tracking-[0.08em] text-gold-dark uppercase">The way we see it</p><p className="mt-6 font-display text-[25px] font-medium leading-[1.5] tracking-[-0.02em] lg:text-[29px]">A coin’s worth is in its metal.<br />Its meaning is in the reason you chose it.</p></div><div className="mt-8 border-t border-gold/25 pt-5"><p className="text-base leading-[1.9] text-muted">Clear product details. Attention to presentation. A conversation about your requirements. These are the details we care about.</p><a href="#contact" className="mt-5 inline-flex items-center gap-4 text-base font-semibold text-gold-dark">Get to know us <ArrowUpRight size={15} /></a></div></div>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-gold/15 bg-[#f7f3eb]">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-10 sm:py-18 lg:grid-cols-2 lg:gap-16 lg:px-14">
            <div id="coin-guide">
              <p className="mb-5 text-base font-medium text-gold-dark">Before you choose</p><h2 className="font-display text-[30px] leading-[1.2] tracking-[-0.025em] sm:text-[36px]">Know what you’re buying.</h2>
              <div className="mt-8 border-t border-gold/30">{buyingGuide.map(item => <article key={item.number} className="grid grid-cols-[28px_1fr] gap-4 border-b border-gold/25 py-6"><p className="pt-1 text-base text-gold-dark">{item.number}</p><div><h3 className="text-base font-medium">{item.title}</h3><p className="mt-2 max-w-[460px] text-base leading-[1.85] text-muted">{item.text}</p></div></article>)}</div>
              <p className="mt-5 text-base leading-[1.8] text-muted">Need a hand with the details? <a href="tel:+919030609236" className="font-medium text-espresso underline underline-offset-4">We’re happy to talk.</a></p>
            </div>
            <div id="faqs"><p className="mb-5 text-base font-medium text-gold-dark">A little more clarity</p><h2 className="mb-8 font-display text-[30px] leading-[1.2] tracking-[-0.025em] sm:text-[36px]">Questions, answered.</h2><Faqs /></div>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-10 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:px-14">
          <div className="lg:col-span-5"><p className="mb-6 text-base font-medium text-gold-dark">A conversation is a good place to start</p><h2 className="font-display text-[40px] leading-[1.15] tracking-[-0.03em] sm:text-[52px]">Let’s talk about<br />your next coin.</h2><p className="mt-6 max-w-[350px] text-base leading-[1.9] text-muted">Tell us what you have in mind. We’ll help you explore the available options and the details that matter to you.</p><div className="mt-8 flex flex-col items-start gap-4"><a href="tel:+919030609236" className="inline-flex items-center gap-3 text-[17px] font-medium transition-colors hover:text-gold-dark"><Phone size={17} strokeWidth={1.5} />+91 90306 09236</a><a href="https://wa.me/919030609236" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-base text-green"><MessageCircle size={17} strokeWidth={1.5} />Prefer a message? Chat on WhatsApp <ArrowUpRight size={14} /></a></div><p className="mt-10 max-w-[340px] border-t border-gold/25 pt-5 text-base leading-[1.85] text-muted">Our full online catalogue is on its way. In the meantime, contact us for available coins, gifting requirements, and product information.</p></div>
          <div className="lg:col-span-7"><EnquiryForm /></div>
        </section>
      </main>

      <footer className="border-t border-gold/20 bg-[#f1e8d9] pt-10 pb-6">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
          <div className="grid gap-8 pb-9 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div><Logo /><p className="mt-4 max-w-[300px] text-base leading-[1.8] text-muted">Precious-metal coins for personal collections, thoughtful gifts, and special occasions.</p></div>
            <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-3 self-start text-base text-espresso/80">{[{ name: "Collections", href: "#collections" }, { name: "Our story", href: "#our-story" }, { name: "Gifting", href: "#gifting" }, { name: "The coin guide", href: "#coin-guide" }, { name: "FAQs", href: "#faqs" }, { name: "Contact", href: "#contact" }].map(item => <a key={item.href} href={item.href} className="transition-colors hover:text-gold-dark">{item.name}</a>)}</nav>
            <div className="text-base sm:col-span-2 lg:col-span-1 lg:justify-self-end"><p className="mb-3 text-base tracking-[0.1em] text-gold-dark uppercase">Speak to Deccan Mint</p><a href="tel:+919030609236" className="text-[17px] font-medium">+91 90306 09236</a><a href="mailto:info@deccanmint.com" className="mt-2 block text-base text-muted transition-colors hover:text-gold-dark">info@deccanmint.com</a></div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-gold/25 pt-5 pr-20 text-base text-muted sm:flex-row"><p>© 2026 Deccan Mint. All rights reserved.</p><div className="flex flex-wrap gap-x-5 gap-y-3"><Link href="/privacy" className="hover:text-espresso">Privacy notice</Link></div></div>
        </div>
      </footer>
      <a href="https://wa.me/919030609236" target="_blank" rel="noopener noreferrer" aria-label="Chat with Deccan Mint on WhatsApp (opens in a new tab)" title="Chat on WhatsApp" className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#168a49] text-white shadow-[0_5px_22px_#168a4933] transition-all hover:-translate-y-1 hover:bg-[#10783d] sm:right-6 sm:bottom-6"><FaWhatsapp size={32} aria-hidden="true" /></a>
    </>
  );
}
