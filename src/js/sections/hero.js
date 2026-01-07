import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function initHero() {
  const root = document.querySelector(".js-hero");
  if (!root) return;

  // Se quiser bloquear quando não está no topo
  if (window.scrollY > 10) return;

  const title = root.querySelector(".js-hero-title");
  const desc = root.querySelector(".js-hero-desc");
  const button = root.querySelector(".js-hero-button");
  const topbar = root.querySelector(".js-hero-topbar");
  const header = root.querySelector(".js-hero-header");
  const promo = root.querySelector(".js-hero-promobar");

  if (!title || !desc) return;

  const splitTitle = new SplitText(title, {
    type: "words",
    mask: "lines",
  });

  const splitDesc = new SplitText(desc, {
    type: "lines",
    mask: "lines",
  });

  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  tl.set("body", { overflowX: "hidden" })
    .from(root, {
      autoAlpha: 0,
      scale: 1.2,
      duration: 0.8,
    })
    .from(
      splitTitle.words,
      {
        autoAlpha: 0,
        filter: "blur(24px)",
        stagger: 0.012,
      },
      "<+=0.16"
    )
    .from(
      splitDesc.lines,
      {
        yPercent: 100,
        stagger: 0.09,
      },
      "<0.2"
    )
    .from([button, topbar, header], { autoAlpha: 0 }, "<")
    .from(promo, { autoAlpha: 0, scale: 0.9 }, "<")
    .set("body", { overflowX: "visible" });

  // Scroll effect
  gsap.fromTo(
    root,
    { scale: 1 },
    {
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "+=300",
        scrub: true,
        immediateRender: false,
      },
    }
  );

  return () => {
    splitTitle.revert();
    splitDesc.revert();
  };
}
