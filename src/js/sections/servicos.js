import { SplitText } from "gsap/SplitText";
import { createSectionTimeline } from "../helpers/sectionTimeline";
import { gsap } from "gsap";

export function initServicos(root) {
  if (!root) return;

  const title = root.querySelector(".js-servicos-title");
  const desc = root.querySelector(".js-servicos-desc");
  const decor = root.querySelector(".js-servico-decorativo");
  const items = root.querySelectorAll(".js-servicos-item");

  const splitDesc = new SplitText(desc, { type: "lines", mask: "lines" });
  const tl = createSectionTimeline({ trigger: root });

  tl.from(decor, { autoAlpha: 0 })
    .from(title, { filter: "blur(24px)" }, "<")
    .from(splitDesc.lines, { yPercent: 100, stagger: 0.09 }, "<")
    .from(items, { autoAlpha: 0, stagger: 0.02 }, "<");

  gsap.fromTo(
    root,
    { scale: 0.95 },
    {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top bottom",
        end: "+=500",
        scrub: true,
      },
    }
  );

  return () => splitDesc.revert();
}
