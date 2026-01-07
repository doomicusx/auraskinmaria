import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
export function createSectionTimeline({
  trigger,
  start = "top 75%",
  end,
  scrub = false,
  pin = false,
  once = true,
}) {
  return gsap.timeline({
    defaults: { ease: "power2.out" },
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
      pin,
      once,
    },
  });
}
