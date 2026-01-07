import { createSectionTimeline } from "../helpers/sectionTimeline";

export function initCta(root) {
  if (!root) return;

  const title = root.querySelector(".js-cta-title");
  const button = root.querySelector(".js-cta-button");

  const tl = createSectionTimeline({
    trigger: root,
    start: "top top",
    end: `${window.innerHeight * 2}px top`,
    scrub: true,
    pin: true,
    once: false,
  });

  tl.from(root, { autoAlpha: 0 })
    .from(title, { filter: "blur(24px)" }, "<0.2")
    .from(button, { filter: "blur(24px)" }, "<");
}
