import { createSectionTimeline } from "../helpers/sectionTimeline";

export function initBeneficios(root) {
  if (!root) return;

  const title = root.querySelector(".js-beneficios-title");
  const decor = root.querySelector(".js-beneficios-decorativo");
  const cards = root.querySelectorAll(".js-beneficios-cards");

  const tl = createSectionTimeline({
    trigger: root,
    start: "top top",
    end: `${window.innerHeight}px top`,
    scrub: true,
    pin: true,
    once: false,
  });

  tl.from(decor, { autoAlpha: 0 })
    .from(title, { autoAlpha: 0, filter: "blur(24px)" }, "<")
    .from(cards, { yPercent: 96, autoAlpha: 0, stagger: 0.1 }, "<");
}
