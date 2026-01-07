import { defineCollection, z } from "astro:content";
const theme = defineCollection({
  type: "data",
  schema: z.object({
    colors: z.object({
      dark: z.string(),
      fillDark: z.string(),
      light: z.string(),
      fillLight: z.string(),
      fillLightSecondary: z.string(),
    }),
  }),
});
/* ================= SEO ================= */
const seo = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    siteUrl: z.string(),
    ogImage: z.string(),
    favicon: z.string(),
  }),
});

const hero = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    ctaText: z.string(),
    ctaLink: z.string(),
    backgroundImage: z.string(),
    logo: z.string(),
    logoAlt: z.string(),
    topBarText: z.string(),
    promoBarText: z.string(),
    navDuvidas: z.string(),
    navSobre: z.string(),
    navServicos: z.string(),
    navBeneficios: z.string(),
    navAvaliacoes: z.string(),
    navContato: z.string(),
  }),
});

const sobre = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    stat1: z.string(),
    stat2: z.string(),
    stat3: z.string(),
    stat4: z.string(),
    sobreIcon: z.string().optional(),
  }),
});

const servicos = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    categories: z.array(
      z.object({
        category: z.string(),
      })
    ),

    ctaText: z.string(),
    ctaLink: z.string(),

    cards: z.array(
      z.object({
        image: z.string(),
        imageAlt: z.string(),
        services: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            duration: z.string(),
            price: z.string(),
          })
        ),
      })
    ),
  }),
});

const beneficios = defineCollection({
  type: "data",
  schema: z.object({
    sectionLabel: z.string(),
    sectionTitle: z.string(),

    benefit1Icon: z.string(),
    benefit1Title: z.string(),
    benefit1Description: z.string(),

    benefit2Icon: z.string(),
    benefit2Title: z.string(),
    benefit2Description: z.string(),

    benefit3Icon: z.string(),
    benefit3Title: z.string(),
    benefit3Description: z.string(),

    benefit4Icon: z.string(),
    benefit4Title: z.string(),
    benefit4Description: z.string(),
  }),
});

const avaliacoes = defineCollection({
  type: "data",
  schema: z.object({
    sectionLabel: z.string(),
    sectionTitle: z.string(),
    buttonText: z.string(),
    buttonLink: z.string(),

    items: z.array(
      z.discriminatedUnion("type", [
        z.object({
          type: z.literal("image"),
          image: z.string(),
          alt: z.string(),
          stars: z.number(),
          text: z.string(),
          author: z.string(),
        }),
        z.object({
          type: z.literal("video"),
          video: z.string(),
        }),
      ])
    ),
  }),
});

/* ================= CTA ================= */

const cta = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),

    buttonText: z.string(),
    buttonLink: z.string(),

    backgroundImage: z.string(),
    backgroundAlt: z.string(),
  }),
});
const duvidas = defineCollection({
  type: "data",
  schema: z.object({
    sectionLabel: z.string(),
    sectionTitle: z.string(),

    items: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ),
  }),
});
const promo = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),

    buttonText: z.string(),
    buttonLink: z.string(),

    address: z.string(),

    backgroundImage: z.string(),
    backgroundAlt: z.string(),
  }),
});
const footer = defineCollection({
  type: "data",
  schema: z.object({
    logo: z.string(),
    logoAlt: z.string(),

    menu: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),

    socials: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),

    address: z.string(),

    contacts: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      })
    ),

    copyright: z.string(),
  }),
});

export const collections = {
  theme,
  seo,
  hero,
  sobre,
  servicos,
  beneficios,
  avaliacoes,
  cta,
  duvidas,
  promo,
  footer
};
