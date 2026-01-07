import { createSectionTimeline } from "../helpers/sectionTimeline";
import { gsap } from "gsap";

export function initDuvidas(root) {
  if (!root) return;

  const title = root.querySelector(".js-duvidas-title");
  const decor = root.querySelector(".js-duvidas-decorativo");
  const cards = root.querySelectorAll(".js-duvidas-cards");

  const tl = createSectionTimeline({ trigger: root });

  tl.from(decor, { autoAlpha: 0 })
    .from(title, { filter: "blur(24px)" }, "<")
    .from(cards, { autoAlpha: 0 }, "<");

  gsap.fromTo(
    root,
    { scale: 0.95 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: root,
        start: "top bottom",
        end: "+=500",
        scrub: true,
      },
    }
  );
}
