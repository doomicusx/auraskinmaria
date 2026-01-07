import { SplitText } from "gsap/SplitText";
import { createSectionTimeline } from "../helpers/sectionTimeline";

export function initSobre() {
  const root = document.querySelector(".js-sobre");
  if (!root) return;

  const title = root.querySelector(".js-sobre-title");
  const decor = root.querySelector(".js-sobre-decorativo");
  const items = root.querySelectorAll(".js-sobre-item");

  if (!title) return;

  const split = new SplitText(title, { type: "words", mask: "lines" });
  const tl = createSectionTimeline({ trigger: root });

  tl.from(decor, { autoAlpha: 0 })
    .from(
      split.words,
      {
        autoAlpha: 0,
        filter: "blur(24px)",
        stagger: 0.012,
      },
      "<"
    )
    .from(items, { autoAlpha: 0, stagger: 0.05 }, "<0.6");

  return () => split.revert();
}
