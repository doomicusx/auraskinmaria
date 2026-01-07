import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initLenis() {
  const lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false,
    lerp: 0.07,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    });
  });

  return lenis;
}
