"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

function observeSectionReveals(landing: HTMLElement, revealed: WeakSet<Element>) {
  const targets = landing.querySelectorAll("[data-reveal]");
  const running = new Map<Element, Animation>();
  const observer = new IntersectionObserver((entries) => {
    for (const { target, isIntersecting } of entries) {
      if (!isIntersecting) continue;
      observer.unobserve(target);
      revealed.add(target);
      target.removeAttribute("data-reveal-pending");
      if (target.matches(":focus-within")) continue;

      const kind = target.getAttribute("data-reveal");
      const visual = target.querySelector("[data-reveal-visual]");
      const delay = Number(target.getAttribute("data-reveal-delay"));
      const animation = visual
        ? visual.animate([
            { clipPath: kind === "panorama" ? "inset(0 96% 0 0)" : "inset(0 0 0 96%)", scale: "1.08" },
            { clipPath: "inset(0)", scale: "1" },
          ], { duration: 1150, delay, easing: "cubic-bezier(.52,.06,.19,1)", fill: "backwards" })
        : target.animate([
            { opacity: 0.12, transform: "translateY(26px)" },
            { opacity: 1, transform: "none" },
          ], { duration: 750, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" });

      running.set(target, animation);
      animation.onfinish = () => { running.delete(target); };
    }
  }, { rootMargin: "-88px 0px -40px" });

  targets.forEach((target) => {
    if (revealed.has(target)) return;
    // Prepare offscreen photos so the full image cannot flash before its reveal.
    if (target.getAttribute("data-reveal") !== "text" && target.getBoundingClientRect().top >= window.innerHeight) {
      target.setAttribute("data-reveal-pending", "");
    }
    observer.observe(target);
  });

  function revealOnFocus(event: FocusEvent) {
    if (!(event.target instanceof Element)) return;
    const target = event.target.closest("[data-reveal]");
    if (!target) return;
    observer.unobserve(target);
    revealed.add(target);
    target.removeAttribute("data-reveal-pending");
    running.get(target)?.cancel();
    running.delete(target);
  }

  landing.addEventListener("focusin", revealOnFocus);
  return () => {
    observer.disconnect();
    landing.removeEventListener("focusin", revealOnFocus);
    targets.forEach((target) => target.removeAttribute("data-reveal-pending"));
    running.forEach((animation) => animation.cancel());
  };
}

export function LandingMotion() {
  useEffect(() => {
    const landing = document.querySelector<HTMLElement>("[data-landing]");
    const hero = landing?.querySelector<HTMLElement>("[data-hero]");
    if (!landing || !hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const motion = gsap.matchMedia();
    const revealed = new WeakSet<Element>();

    function followAnchor(event: MouseEvent) {
      if (
        event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey
        || event.shiftKey || event.altKey || !(event.target instanceof Element)
      ) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[data-landing-link]");
      const hash = anchor?.hash;
      const section = hash ? document.getElementById(hash.slice(1)) : null;
      if (!hash || !section) return;

      event.preventDefault();
      if (window.location.hash !== hash) window.history.pushState(null, "", hash);
      const heading = section.querySelector<HTMLElement>("h1, h2") ?? section;
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: reducedMotion.matches ? "instant" : "smooth", block: "start" });
    }

    // Same-page links opt into scrolling without changing the root CSS behavior.
    document.addEventListener("click", followAnchor);

    motion.add("(prefers-reduced-motion: no-preference)", () => observeSectionReveals(landing, revealed));

    motion.add(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const art = hero.querySelector<HTMLElement>("[data-hero-art]");
        const drift = art?.querySelector<HTMLElement>("[data-hero-drift]");
        const story = landing.querySelector<HTMLElement>("[data-story-frame]");
        const storyImage = story?.querySelector<HTMLElement>("[data-story-drift]");
        if (!art || !drift) return;
        const x = gsap.quickTo(drift, "x", { duration: 0.85, ease: "power3.out" });
        const y = gsap.quickTo(drift, "y", { duration: 0.85, ease: "power3.out" });
        let frame = 0;

        const move = (event: PointerEvent) => {
          const bounds = art.getBoundingClientRect();
          x((event.clientX - bounds.left - bounds.width / 2) * 0.018);
          y((event.clientY - bounds.top - bounds.height / 2) * 0.017);
        };
        const reset = () => {
          x(0);
          y(0);
        };
        const moveStory = () => {
          frame = 0;
          if (!story || !storyImage) return;
          const bounds = story.getBoundingClientRect();
          if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;

          const progress = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
          storyImage.style.translate = `0 ${(progress - 0.5) * 28}px`;
        };
        const scheduleStory = () => {
          if (!frame) frame = window.requestAnimationFrame(moveStory);
        };
        art.addEventListener("pointermove", move);
        art.addEventListener("pointerleave", reset);
        window.addEventListener("scroll", scheduleStory, { passive: true });
        window.addEventListener("resize", scheduleStory);
        scheduleStory();

        return () => {
          art.removeEventListener("pointermove", move);
          art.removeEventListener("pointerleave", reset);
          window.removeEventListener("scroll", scheduleStory);
          window.removeEventListener("resize", scheduleStory);
          if (frame) window.cancelAnimationFrame(frame);
          storyImage?.style.removeProperty("translate");
        };
      },
      hero,
    );

    return () => {
      document.removeEventListener("click", followAnchor);
      motion.revert();
    };
  }, []);

  return null;
}
