import { createSectionTimeline } from "../helpers/sectionTimeline";
import { gsap } from "gsap";

export function initPromo(root) {
  if (!root) return;

  const card = root.querySelector(".js-promo-card");
  const tl = createSectionTimeline({ trigger: root });

  tl.from(card, { autoAlpha: 0 });

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
