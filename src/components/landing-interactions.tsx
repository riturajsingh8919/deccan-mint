"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCheck, ChevronDown, Maximize2, Menu, MessageCircle, Minimize2, Phone, Plus, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import giftingAtelier from "../../public/images/gifting-atelier.webp";
import studyGold from "../../public/images/study-gold.webp";
import studySilver from "../../public/images/study-silver.webp";
import { business, container, display, inlineAction, navigation, primaryAction } from "./landing-design";
import { Logo } from "./logo";

export function Header() {
  const [active, setActive] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const followingLink = useRef(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 75rem)");
    const closeOnDesktop = () => {
      if (desktop.matches && dialog.current?.open) dialog.current.close();
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    }, { rootMargin: "-15% 0px -65% 0px" });

    for (const id of ["home", ...navigation.map((item) => item.id), "contact"]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  function followNavigation() {
    followingLink.current = true;
    dialog.current?.close();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur-md">
      <div className={`${container} flex min-h-16 items-center justify-between gap-2 py-1 sm:min-h-19 sm:gap-5`}>
        <Logo compact inLanding />
        <nav aria-label="Main navigation" className="hidden items-center gap-6 min-[75rem]:flex xl:gap-8">
          {navigation.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              data-landing-link
              aria-current={active === id ? "location" : undefined}
              className={`relative py-3 text-base font-medium whitespace-nowrap transition-colors after:absolute after:inset-x-0 after:bottom-2 after:h-px after:origin-left after:bg-gold after:transition-transform hover:text-gold-dark ${active === id ? "text-gold-dark after:scale-x-100" : "text-charcoal after:scale-x-0 hover:after:scale-x-100"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" data-landing-link className="hidden min-h-11 items-center gap-2 rounded-full border border-gold/65 px-4 py-2 text-base font-semibold whitespace-nowrap text-ink transition-colors hover:bg-gold-soft min-[75rem]:inline-flex xl:px-5">
          Enquire now <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button
          ref={trigger}
          type="button"
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          aria-controls="mobile-navigation"
          onClick={() => dialog.current?.showModal()}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-ink hover:bg-parchment min-[75rem]:hidden"
        >
          <Menu size={23} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-label="Navigation menu"
        onClose={() => {
          if (!followingLink.current) trigger.current?.focus({ preventScroll: true });
          followingLink.current = false;
        }}
        className="fixed inset-0 m-0 max-h-dvh w-full max-w-none overflow-y-auto border-b border-line bg-ivory px-5 py-4 text-ink backdrop:bg-ink/35 sm:px-10"
      >
        <div className="flex items-center justify-between gap-2">
          <Logo compact inLanding onClick={followNavigation} />
          <button type="button" aria-label="Close navigation menu" onClick={() => dialog.current?.close()} className="grid size-11 shrink-0 place-items-center rounded-full border border-line"><X size={23} strokeWidth={1.5} aria-hidden="true" /></button>
        </div>
        <nav aria-label="Mobile navigation" className="mt-6 border-t border-line">
          {navigation.map(({ id, label }) => (
            <a key={id} href={`#${id}`} data-landing-link onClick={followNavigation} className="flex min-h-15 items-center justify-between border-b border-line py-3 font-display text-2xl">
              {label}<ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" className="text-gold-dark" />
            </a>
          ))}
        </nav>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 pb-3">
          <a href="#contact" data-landing-link onClick={followNavigation} className={primaryAction}>Enquire now <ArrowUpRight size={17} aria-hidden="true" /></a>
          <a href={business.phone} className={inlineAction}><Phone size={15} aria-hidden="true" />{business.phoneNumber}</a>
        </div>
      </dialog>
    </header>
  );
}

const collectionOptions = [
  {
    id: "gold", name: "Gold Coins", tab: "Gold",
    image: studyGold, alt: "Illustrative gold-toned coin with engraved plateau contours on stone",
    description: "Gold has long been part of the moments we mark. Explore it for a collection of your own, a family occasion, or a gift with lasting meaning.",
    enquiry: "Enquire about gold", interest: "Gold Coins",
  },
  {
    id: "silver", name: "Silver Coins", tab: "Silver",
    image: studySilver, alt: "Illustrative silver-toned coin with engraved plateau contours on stone",
    description: "A silver coin can begin a collection, add to one, or mark a milestone. Tell us what you have in mind and we’ll talk through the options.",
    enquiry: "Enquire about silver", interest: "Silver Coins",
  },
  {
    id: "gifting", name: "Coins for Gifting", tab: "Gifting",
    image: giftingAtelier, alt: "Illustrative gold-toned coin in a burgundy velvet presentation case",
    description: "For a wedding, a festival, or a new beginning, tell us who you’re choosing for and we’ll discuss available gold and silver coins.",
    enquiry: "Enquire about gifting", interest: "Gifting",
  },
] as const;

export function CollectionExplorer() {
  const [selected, setSelected] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function select(index: number) {
    setSelected(index);
    setZoomed(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.23fr_1fr] lg:gap-x-12 xl:gap-x-17">
      <div data-reveal="text" role="tablist" aria-label="Explore our collections" className="grid grid-cols-3 gap-1 self-end rounded-full border border-line bg-ivory p-1.5 lg:col-start-2 lg:row-start-1">
        {collectionOptions.map(({ id, name, tab }, index) => (
          <button
            key={id}
            ref={(element) => { buttons.current[index] = element; }}
            type="button"
            role="tab"
            id={`collection-tab-${id}`}
            aria-label={name}
            aria-controls={`collection-panel-${id}`}
            aria-selected={selected === index}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => select(index)}
            onKeyDown={(event) => {
              let next: number;
              if (event.key === "ArrowRight") next = (index + 1) % collectionOptions.length;
              else if (event.key === "ArrowLeft") next = (index + collectionOptions.length - 1) % collectionOptions.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = collectionOptions.length - 1;
              else return;
              event.preventDefault();
              select(next);
              buttons.current[next]?.focus();
            }}
            className={`min-h-11 min-w-0 rounded-full px-2 text-base font-semibold transition-colors ${selected === index ? "bg-ink text-white" : "text-muted hover:bg-gold-soft hover:text-ink"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div data-reveal="image" className="group/reveal relative isolate aspect-[1.28] overflow-hidden rounded-[4px] bg-[#33291f] sm:aspect-[1.5] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[430px]">
        <div data-reveal-visual className="absolute inset-0 group-data-[reveal-pending]/reveal:opacity-0">
          {collectionOptions.map(({ id, image, alt }, index) => (
            <Image
              key={id}
              src={image}
              alt={alt}
              aria-hidden={index !== selected}
              fill
              placeholder="blur"
              sizes="(min-width: 1440px) 700px, (min-width: 1024px) 54vw, 100vw"
              className={`object-cover object-center motion-safe:transition-[opacity,scale] motion-safe:duration-700 motion-safe:ease-out ${index === selected ? "opacity-100" : "opacity-0"} ${index === selected && zoomed ? "scale-[1.23]" : "scale-100"}`}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-linear-to-t from-black/90 to-transparent p-3 pt-9 sm:p-5 sm:pt-12">
          <span className="text-base text-white">{collectionOptions[selected].id === "gifting" ? "Illustrative gifting concept" : "Illustrative coin study"}</span>
          <button type="button" aria-label={zoomed ? "Reset image zoom" : "Inspect image detail"} aria-pressed={zoomed} onClick={() => setZoomed((current) => !current)} className="grid size-11 shrink-0 place-items-center rounded-full border border-white/60 bg-black/55 text-white transition-colors hover:bg-white hover:text-ink">
            {zoomed ? <Minimize2 size={19} aria-hidden="true" /> : <Maximize2 size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div data-reveal="text" data-reveal-delay="90" className="lg:col-start-2 lg:row-start-2 lg:min-h-[250px]">
        {collectionOptions.map(({ id, name, description, enquiry, interest }, index) => (
          <div key={id} id={`collection-panel-${id}`} role="tabpanel" aria-labelledby={`collection-tab-${id}`} hidden={selected !== index} className="max-w-[425px] pb-2">
            <h3 className={`${display} text-[clamp(2.4rem,5vw,4.6rem)]`}>{name}</h3>
            <p className="mt-4 text-base leading-[1.8] text-muted">{description}</p>
            <a href="#contact" data-landing-link data-interest={interest} className={`mt-4 ${inlineAction}`}>{enquiry} <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        ))}
      </div>
    </div>
  );
}

const questions = [
  { question: "What is Deccan Mint?", answer: "Deccan Mint is a gold and silver coin brand by Sai Surya Gold. We focus on coins for personal collections, gifting, and special occasions." },
  { question: "Can I buy gold and silver coins online?", answer: "Our online catalogue is in development. In the meantime, contact us about current availability, pricing, and how to purchase." },
  { question: "How can I confirm a coin’s purity?", answer: "Check the coin’s stated fineness, its manufacturer or mint, and relevant documentation or verification markings." },
  { question: "Can you help me choose a coin for gifting?", answer: "Yes. Share the occasion and tell us whether you’re considering gold or silver. We can talk through available coins, designs, and weights." },
  { question: "How do I get in touch?", answer: "Call +91 90306 09236 or use the enquiry form to prepare a WhatsApp message. You’ll review the message in WhatsApp before sending." },
];

export function Faqs() {
  const id = useId();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-line">
      {questions.map(({ question, answer }, index) => {
        const expanded = open === index;
        const panel = `${id}-answer-${index}`;
        return (
          <div key={question} data-reveal="text" data-reveal-delay={index * 40} className="border-b border-line">
            <h3>
              <button type="button" aria-expanded={expanded} aria-controls={panel} onClick={() => setOpen((current) => current === index ? null : index)} className="group flex min-h-13 w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-ink transition-colors hover:text-gold-dark aria-expanded:text-gold-dark">
                {question}<Plus size={18} aria-hidden="true" className="shrink-0 text-gold-dark motion-safe:transition-transform motion-safe:duration-300 group-aria-expanded:rotate-45" />
              </button>
            </h3>
            <div id={panel} aria-hidden={!expanded} className={`grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-300 motion-safe:ease-out ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="min-h-0 overflow-hidden"><p className="pb-5 text-base leading-[1.75] text-muted">{answer}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function EnquiryForm() {
  const [interest, setInterest] = useState("General Enquiry");
  const [enquiryUrl, setEnquiryUrl] = useState("");

  useEffect(() => {
    const choose = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[data-interest]");
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

  const field = "mt-2 min-h-12 w-full rounded-md border border-charcoal/45 bg-ivory px-3.5 py-3 text-base text-charcoal transition-colors placeholder:text-muted hover:border-gold-dark focus:border-gold-dark focus:outline-none focus:ring-2 focus:ring-gold/25";
  return <div data-reveal="text" data-reveal-delay="90" className="rounded-[4px] border border-line bg-white p-5 sm:p-8"><div className="mb-7 flex items-center justify-between border-b border-line pb-6"><div><h3 className="font-display text-[31px] tracking-[-0.025em]">Send an enquiry</h3><p className="mt-2 text-base text-muted">Tell us what you’re looking for.</p></div><MessageCircle size={26} strokeWidth={1} className="ml-3 shrink-0 text-gold-dark" /></div>
    <form onSubmit={submit} onChange={() => setEnquiryUrl("")} onInput={event => { if (event.target instanceof HTMLInputElement) event.target.setCustomValidity(""); }}>
      <div className="grid gap-5 sm:grid-cols-2"><label className="text-base font-medium">Your name <span className="text-gold-dark">*</span><input name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Full name" className={field} /></label><label className="text-base font-medium">Phone number <span className="text-gold-dark">*</span><input type="tel" name="phone" autoComplete="tel" required minLength={10} maxLength={20} pattern="[+]?[0-9 \(\)\-]{10,20}" title="Enter a phone number with at least 10 digits, optionally including a country code." placeholder="+91  Phone number" className={field} /></label></div>
      <label className="mt-5 block text-base font-medium">Email address <span className="font-normal text-muted">(optional)</span><input type="email" name="email" autoComplete="email" maxLength={200} placeholder="you@example.com" className={field} /></label>
      <label className="mt-5 block text-base font-medium">I’m interested in<span className="relative block"><select name="interest" value={interest} onChange={e => setInterest(e.target.value)} className={`${field} appearance-none pr-10`}>{["Gold Coins", "Silver Coins", "Gifting", "General Enquiry"].map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={15} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-muted" /></span></label>
      <label className="mt-5 block text-base font-medium">Your message <span className="font-normal text-muted">(optional)</span><textarea name="message" maxLength={2000} rows={3} placeholder="Tell us about the coin or occasion you have in mind." className={`${field} min-h-24 resize-y leading-relaxed`} /></label>
      <p className="mt-4 text-base leading-[1.8] text-muted">Continue to WhatsApp to review and send your message. <a href="/privacy" className="underline underline-offset-2 hover:text-charcoal">Privacy notice</a>.</p>
      <button type="submit" className={`mt-5 w-full ${primaryAction}`}>Continue on WhatsApp <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
      {enquiryUrl && <div role="status" className="mt-5 rounded-sm border border-whatsapp/15 bg-whatsapp/5 p-4"><p className="flex items-center gap-2 text-base font-semibold text-whatsapp"><CheckCheck size={16} />Your enquiry is ready in WhatsApp.</p><p className="mt-2 text-base leading-relaxed text-muted">Review your message and tap Send in WhatsApp to reach our team.</p><a href={enquiryUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-base font-semibold text-whatsapp">Open your WhatsApp message <ArrowRight size={13} /></a></div>}
    </form>
  </div>;
}
