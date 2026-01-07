import { initLenis } from "./core/lenis.js";
import { initHero } from "./sections/hero.js";
import { initSobre } from "./sections/sobre.js";
import { initServicos } from "./sections/servicos.js";
import { initBeneficios } from "./sections/beneficios.js";
import { initAvaliacoes } from "./sections/avaliacoes.js";
import { initCta } from "./sections/cta.js";
import { initDuvidas } from "./sections/duvidas.js";
import { initPromo } from "./sections/promo.js";

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    initLenis();

    document.querySelector(".js-hero") &&
      initHero(document.querySelector(".js-hero"));

    document.querySelector(".js-sobre") &&
      initSobre(document.querySelector(".js-sobre"));

    document.querySelector(".js-servicos") &&
      initServicos(document.querySelector(".js-servicos"));

    document.querySelector(".js-beneficios") &&
      initBeneficios(document.querySelector(".js-beneficios"));

    document.querySelector(".js-avaliacoes") &&
      initAvaliacoes(document.querySelector(".js-avaliacoes"));

    document.querySelector(".js-cta") &&
      initCta(document.querySelector(".js-cta"));

    document.querySelector(".js-duvidas") &&
      initDuvidas(document.querySelector(".js-duvidas"));

    document.querySelector(".js-promo") &&
      initPromo(document.querySelector(".js-promo"));
  });
}
