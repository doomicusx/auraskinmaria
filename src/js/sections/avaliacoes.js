import { createSectionTimeline } from "../helpers/sectionTimeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function initAvaliacoes(root) {
  if (!root) return;

  const title = root.querySelector(".js-avaliacoes-title");
  const decor = root.querySelector(".js-avaliacoes-decorativo");
  const button = root.querySelector(".js-avaliacoes-button");
  const cards = root.querySelectorAll(".js-avaliacoes-cards");

  const tl = createSectionTimeline({ trigger: root, start: "top 50%" });

  tl.from(decor, { autoAlpha: 0 })
    .from(title, { filter: "blur(24px)" }, "<")
    .from(button, { autoAlpha: 0 }, "<")
    .from(cards, { autoAlpha: 0, stagger: 0.1 }, "<");

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
  const videoCards = root.querySelectorAll("[data-video]");

  videoCards.forEach((btn) => {
    const card = btn.closest("li");
    const video = card.querySelector("video");

    if (!video) return;

    const toggleVideo = () => {
      if (video.paused) {
        // pausa todos os outros
        root.querySelectorAll("video").forEach((v) => {
          if (v !== video) {
            v.pause();
            v.currentTime = 0;
            v.closest("li")
              ?.querySelector("[data-video]")
              ?.classList.remove("opacity-0", "pointer-events-none");
          }
        });

        video.play();
        btn.classList.add("opacity-0", "pointer-events-none");
      } else {
        video.pause();
        btn.classList.remove("opacity-0", "pointer-events-none");
      }
    };

    // clique no botão
    btn.addEventListener("click", toggleVideo);

    // clique no vídeo (PAUSE)
    video.addEventListener("click", toggleVideo);

    // quando terminar
    video.addEventListener("ended", () => {
      btn.classList.remove("opacity-0", "pointer-events-none");
    });
  });
}
