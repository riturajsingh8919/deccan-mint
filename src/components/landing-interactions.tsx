"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, CheckCheck, ChevronDown, Menu, MessageCircle, Minus, Phone, Plus, X } from "lucide-react";
import { Logo } from "./logo";
import { MetalCoin } from "./metal-coin";

const navigation = [
  { label: "Collections", id: "collections" },
  { label: "Gifting", id: "gifting" },
  { label: "Our story", id: "our-story" },
  { label: "The coin guide", id: "coin-guide" },
];

export function Header() {
  const [active, setActive] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px", threshold: 0 });
    ["home", ...navigation.map(item => item.id), "faqs", "contact"].forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-white/95 backdrop-blur-xl">
      <div className="border-b border-[#e6d5b7] bg-[#f4ead7]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-2 text-base sm:px-10 lg:px-14">
          <p className="hidden text-[#776346] md:block">Gold, silver &amp; meaningful gifts</p>
          <div className="flex w-full items-center justify-between gap-5 md:w-auto"><a href="tel:+919030609236" className="inline-flex items-center gap-2 text-[#5f492c]"><Phone size={16} />+91 90306 09236</a><a href="https://wa.me/919030609236" target="_blank" rel="noopener noreferrer" aria-label="Speak to us on WhatsApp" className="inline-flex items-center gap-2 text-[#5f492c]"><MessageCircle size={18} /><span className="hidden sm:inline">Chat with us</span></a></div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 px-5 py-1 sm:gap-5 sm:px-10 sm:py-1.5 lg:px-14">
        <Logo compact />
        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex xl:gap-8">
          {navigation.map(item => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined} className={`relative py-3 text-base font-medium transition-colors after:absolute after:right-0 after:bottom-1 after:left-0 after:h-px after:origin-left after:bg-gold after:transition-transform hover:text-gold-dark ${active === item.id ? "text-gold-dark after:scale-x-100" : "text-espresso/80 after:scale-x-0 hover:after:scale-x-100"}`}>{item.label}</a>)}
        </nav>
        <a href="#contact" className="group hidden min-h-12 items-center gap-4 rounded-md bg-[#93682f] px-5 text-base font-semibold text-white transition-colors hover:bg-[#795323] md:inline-flex">Enquire now <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        <button type="button" aria-label="Open navigation menu" aria-controls="mobile-navigation" onClick={() => dialog.current?.showModal()} className="-mr-2 flex size-10 shrink-0 items-center justify-center text-espresso xl:hidden"><Menu size={23} strokeWidth={1.5} /></button>
      </div>
      <dialog ref={dialog} id="mobile-navigation" aria-label="Navigation menu" className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none flex-col bg-ivory px-6 py-6 text-espresso backdrop:bg-espresso/30 open:flex">
        <div className="flex items-center justify-between gap-2"><Logo compact /><button type="button" aria-label="Close navigation menu" onClick={() => dialog.current?.close()} className="flex size-10 shrink-0 items-center justify-center"><X size={24} strokeWidth={1.5} /></button></div>
        <p className="mt-16 text-base tracking-[0.2em] text-gold-dark uppercase">Discover Deccan Mint</p>
        <nav aria-label="Mobile navigation" className="mt-5 flex flex-col">{[...navigation, { label: "FAQs", id: "faqs" }, { label: "Get in touch", id: "contact" }].map((item, i) => <a key={item.id} href={`#${item.id}`} onClick={() => dialog.current?.close()} className="flex items-center justify-between border-b border-gold/20 py-4 font-display text-[33px]"><span><span className="mr-5 align-middle font-sans text-base text-gold-dark">0{i + 1}</span>{item.label}</span><ArrowUpRight size={19} strokeWidth={1.2} /></a>)}</nav>
        <a href="tel:+919030609236" className="mt-10 inline-flex items-center gap-3 text-base"><Phone size={15} />+91 90306 09236</a>
        <p className="mt-auto pt-8 text-base text-muted">deccanmint.com</p>
      </dialog>
    </header>
  );
}

const collectionOptions = [
  {
    id: "gold", name: "Gold Coins", symbol: "Au", category: "A familiar expression of lasting value.",
    image: "/images/gold-editorial.jpg", alt: "Gold bullion coins with intricate sculpted details, photographed in protective capsules",
    description: "Explore gold coins for personal ownership, family celebrations, and meaningful gifts. Tell us the design, weight, or occasion you have in mind.",
    purpose: "Personal collections, family milestones, and special gifts",
    enquiry: "Explore gold coins", position: "object-[center_65%]",
  },
  {
    id: "silver", name: "Silver Coins", symbol: "Ag", category: "A thoughtful place to begin.",
    image: "/images/silver-coins.jpg", alt: "A detailed silver round resting against a stack of silver bullion",
    description: "Discover silver coins for festivals, keepsakes, and the start of a precious-metal collection. Let’s find an option that fits your occasion.",
    purpose: "First collections, festivals, keepsakes, and everyday milestones",
    enquiry: "Explore silver coins", position: "object-[center_45%]",
  },
  {
    id: "gifting", name: "Coins for Gifting", symbol: "Gift", category: "For someone you have in mind.",
    image: "/images/meaningful-gift.jpg", alt: "A carefully wrapped gift tied with a woven fabric ribbon",
    description: "Weddings, anniversaries, festivals, and new beginnings. Tell us about your occasion and we can discuss suitable gold and silver coin options.",
    purpose: "Celebrations, expressions of gratitude, and meaningful occasions",
    enquiry: "Explore gifting", position: "object-[65%_70%]",
  },
];

export function CollectionExplorer() {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const collection = collectionOptions[selected];

  useEffect(() => {
    const choose = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[data-collection]");
      const index = collectionOptions.findIndex(item => item.id === link?.dataset.collection);
      if (index >= 0) setSelected(index);
    };
    document.addEventListener("click", choose);
    return () => document.removeEventListener("click", choose);
  }, []);

  return (
    <div>
      <p className="mb-4 text-center text-base font-medium">Choose a collection</p>
      <div role="tablist" aria-label="Explore our collections" className="mx-auto mb-8 grid max-w-[720px] grid-cols-3 gap-2 rounded-xl border border-gold/25 bg-[#f7f1e7] p-2 sm:gap-3 sm:p-3">
        {collectionOptions.map((item, i) => (
          <button
            key={item.id}
            ref={element => { buttons.current[i] = element; }}
            type="button"
            role="tab"
            aria-label={item.name}
            id={`collection-tab-${item.id}`}
            aria-controls={`collection-panel-${item.id}`}
            aria-selected={selected === i}
            tabIndex={selected === i ? 0 : -1}
            onClick={() => setSelected(i)}
            onKeyDown={event => {
              let next = i;
              if (event.key === "ArrowRight") next = (i + 1) % collectionOptions.length;
              else if (event.key === "ArrowLeft") next = (i + collectionOptions.length - 1) % collectionOptions.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = collectionOptions.length - 1;
              else return;
              event.preventDefault();
              setSelected(next);
              buttons.current[next]?.focus();
            }}
            className={`flex min-h-14 min-w-0 items-center justify-center gap-3 rounded-md border px-2 py-3 text-center text-base font-semibold transition-all sm:min-h-16 sm:px-5 ${selected === i ? "border-[#93682f] bg-[#93682f] text-white shadow-sm" : "border-gold/35 bg-white text-espresso hover:border-gold-dark hover:bg-[#faf6ed] hover:shadow-sm"}`}
          >
            <span>{item.id === "gold" ? "Gold" : item.id === "silver" ? "Silver" : "Gifting"}</span>
            {selected === i && <Check aria-hidden="true" size={18} className="hidden shrink-0 sm:block" />}
          </button>
        ))}
      </div>
      {collectionOptions.map((item, i) => (
        <div key={item.id} id={`collection-panel-${item.id}`} role="tabpanel" aria-labelledby={`collection-tab-${item.id}`} hidden={selected !== i}>
          {selected === i && <div className="grid overflow-hidden rounded-2xl border border-[#e6d9c4] bg-white shadow-[0_8px_35px_#6d492708] md:grid-cols-2">
            <div className={`relative flex min-h-[350px] items-center justify-center overflow-hidden sm:min-h-[460px] ${collection.id === "silver" ? "bg-[linear-gradient(145deg,#fafbfa,#e8ece8)]" : "bg-[linear-gradient(145deg,#fffcf5,#f0dfbd)]"}`}>
              {collection.id === "gifting" ? <Image src={collection.image} alt={collection.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-[65%_70%]" /> : <MetalCoin metal={collection.id === "silver" ? "silver" : "gold"} className="my-10 w-[68%] max-w-[350px] -rotate-6 transition-transform duration-700 hover:rotate-0 hover:scale-[1.03]" />}
              <span className="absolute top-6 left-6 rounded-md border border-white/60 bg-white/75 px-3 py-2 text-base font-medium text-[#735831]">{collection.id === "gifting" ? "Thoughtful gifting" : collection.id === "gold" ? "The gold collection" : "The silver collection"}</span>
            </div>
            <div className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-12 lg:py-11">
              <p className="text-base font-medium text-gold-dark">{collection.category}</p>
              <h3 className="mt-3 font-display text-[32px] leading-tight tracking-[-0.025em] lg:text-[42px]">{collection.name}</h3>
              <p className="mt-4 text-base leading-[1.8] text-muted">{collection.description}</p>
              <div className="mt-5 grid gap-3 border-t border-gold/20 pt-5">{["Discuss available designs & weights", "Understand purity & product details", collection.id === "gifting" ? "Find an option for your occasion" : "Choose for yourself or for gifting"].map(detail => <p key={detail} className="flex items-start gap-3 text-base text-espresso/85"><Check size={18} className="mt-1 shrink-0 text-gold-dark" />{detail}</p>)}</div>
              <a href="#contact" data-interest={collection.id === "gifting" ? "Gifting" : collection.name} className="group mt-7 inline-flex min-h-13 items-center justify-center gap-5 self-start rounded-md bg-[#93682f] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#795323]">{collection.id === "gifting" ? "Enquire about gifting" : `Enquire about ${collection.id} coins`}<ArrowUpRight size={18} /></a>
            </div>
          </div>}
        </div>
      ))}
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        element.animate([{ opacity: 0, transform: "translateY(22px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 700, easing: "cubic-bezier(0.2, 0.65, 0.3, 1)", fill: "backwards" });
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}

const questions = [
  { question: "What is Deccan Mint?", answer: "Deccan Mint is a gold and silver coin brand by Sai Surya Gold. Our focus is on precious-metal coins for personal ownership, thoughtful gifting, and life’s meaningful occasions." },
  { question: "What kinds of coins can I enquire about?", answer: "Our primary focus is gold and silver coins. Available products, designs, weights, and specifications can be discussed during your enquiry. Share what you have in mind and we’ll help you explore suitable options." },
  { question: "Can I buy gold and silver coins online?", answer: "Our full online catalogue is currently under development. Until it is available, you can call us or send an enquiry on WhatsApp to discuss products, availability, and pricing." },
  { question: "How can I confirm a coin’s purity?", answer: "Confirm the specific product’s stated fineness, manufacturer or mint details, and relevant documentation or verification markings, where applicable. Always check these details before purchasing." },
  { question: "Can you help me choose a coin for gifting?", answer: "Yes. Tell us about the occasion, the metal you’re considering, and any preferences you have. We welcome conversations about weddings, festivals, milestones, and other gifting requirements, and can discuss suitable available options." },
  { question: "How do I get in touch?", answer: "Call +91 90306 09236 or use the enquiry form below to prepare a WhatsApp message. You’ll review and send your message in WhatsApp to start a personal conversation with Deccan Mint." },
];

export function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="border-t border-gold/25">{questions.map((item, i) => <div key={item.question} className="border-b border-gold/25"><h3><button type="button" id={`faq-question-${i}`} aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-base leading-relaxed font-medium transition-colors hover:text-gold-dark"><span>{item.question}</span>{open === i ? <Minus size={17} strokeWidth={1.3} className="shrink-0 text-gold-dark" /> : <Plus size={17} strokeWidth={1.3} className="shrink-0 text-gold-dark" />}</button></h3><div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-question-${i}`} hidden={open !== i} className="pr-6 pb-6 text-base leading-[1.85] text-muted">{item.answer}</div></div>)}</div>;
}

export function EnquiryForm() {
  const [interest, setInterest] = useState("General Enquiry");
  const [enquiryUrl, setEnquiryUrl] = useState("");
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const choose = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[data-interest]");
      if (link?.dataset.interest) {
        setInterest(link.dataset.interest);
        setEnquiryUrl("");
      }
    };
    document.addEventListener("click", choose);
    return () => document.removeEventListener("click", choose);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const nameInput = event.currentTarget.elements.namedItem("name") as HTMLInputElement;
    const phoneInput = event.currentTarget.elements.namedItem("phone") as HTMLInputElement;
    if (name.length < 2) {
      nameInput.setCustomValidity("Please enter your name.");
      nameInput.reportValidity();
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) {
      phoneInput.setCustomValidity("Please enter a phone number with 10 to 15 digits.");
      phoneInput.reportValidity();
      return;
    }
    const text = [`Hello Deccan Mint,`, `My name is ${name}. I’m interested in ${interest.toLowerCase()}.`, `Phone: ${phone}`, ...(email ? [`Email: ${email}`] : []), ...(message ? ["", message] : [])].join("\n");
    const url = `https://wa.me/919030609236?text=${encodeURIComponent(text)}`;
    setEnquiryUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const field = "mt-2 min-h-12 w-full border border-gold/30 bg-white/65 px-3.5 py-3 text-base text-espresso transition-colors placeholder:text-muted/60 hover:border-gold/50 focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/10";
  return <div className="rounded-2xl border border-gold/20 bg-white p-6 shadow-[0_8px_40px_#69461e08] sm:p-8"><div className="mb-7 flex items-center justify-between border-b border-gold/15 pb-6"><div><h3 className="font-display text-[31px] tracking-[-0.025em]">Send an enquiry</h3><p className="mt-2 text-base text-muted">Tell us what you’re looking for.</p></div><MessageCircle size={26} strokeWidth={1} className="ml-3 shrink-0 text-gold-dark" /></div>
    <form ref={form} onSubmit={submit} onChange={() => setEnquiryUrl("")} onInput={event => { if (event.target instanceof HTMLInputElement) event.target.setCustomValidity(""); }}>
      <div className="grid gap-5 sm:grid-cols-2"><label className="text-base font-medium">Your name <span className="text-gold-dark">*</span><input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Full name" className={field} /></label><label className="text-base font-medium">Phone number <span className="text-gold-dark">*</span><input type="tel" name="phone" autoComplete="tel" required minLength={10} maxLength={20} pattern="[+]?[0-9 \(\)\-]{10,20}" title="Enter a phone number with at least 10 digits, optionally including a country code." placeholder="+91  Phone number" className={field} /></label></div>
      <label className="mt-5 block text-base font-medium">Email address <span className="font-normal text-muted">(optional)</span><input type="email" name="email" autoComplete="email" maxLength={200} placeholder="you@example.com" className={field} /></label>
      <label className="mt-5 block text-base font-medium">I’m interested in<span className="relative block"><select name="interest" value={interest} onChange={e => setInterest(e.target.value)} className={`${field} appearance-none pr-10`}>{["Gold Coins", "Silver Coins", "Gifting", "General Enquiry"].map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={15} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted" /></span></label>
      <label className="mt-5 block text-base font-medium">Your message <span className="font-normal text-muted">(optional)</span><textarea name="message" maxLength={2000} rows={3} placeholder="Tell us about the coin or occasion you have in mind." className={`${field} min-h-24 resize-y leading-relaxed`} /></label>
      <p className="mt-4 text-base leading-[1.8] text-muted">Continue to WhatsApp to review and send your message. <a href="/privacy" className="underline underline-offset-2 hover:text-espresso">Privacy notice</a>.</p>
      <button type="submit" className="group mt-5 flex min-h-13 w-full items-center justify-center gap-4 rounded-md bg-[#93682f] px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-[#795323]">Continue on WhatsApp <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
      <p className="mt-3 text-center text-base text-muted">A personal conversation. No obligation.</p>
      {enquiryUrl && <div role="status" className="mt-5 rounded-sm border border-green/15 bg-green/5 p-4"><p className="flex items-center gap-2 text-base font-semibold text-green"><CheckCheck size={16} />Your enquiry is ready in WhatsApp.</p><p className="mt-2 text-base leading-relaxed text-muted">Review your message and tap Send in WhatsApp to reach our team.</p><a href={enquiryUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-green">Open your WhatsApp message <ArrowRight size={13} /></a></div>}
    </form>
  </div>;
}
