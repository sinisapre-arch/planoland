/**
 * Shared site assets (hero imagery, socials). Centralized so pages can
 * import what they need without repeating URLs.
 */
export const assets = {
  // Local optimized assets (see scripts/optimize-images.mjs).
  hero: "/images/hero/hero.webp",
  studio: "/images/studio/founders.webp",
  bg3: "/images/scandinavian-garden.webp",
  socials: {
    youtube: "/images/social/youtube.svg",
    vkVideo: "/images/social/vk-video.svg",
    vk: "/images/social/vk.svg",
    telegram: "/images/social/telegram.svg",
    instagram: "/images/social/instagram.svg",
    dzen: "/images/social/dzen.svg",
    pinterest: "/images/social/pinterest.svg",
  },
} as const;

export const contactInfo = {
  phone: "+7 916 979-65-65",
  phoneHref: "tel:+79169796565",
  email: "pl@planoland.ru",
  emailHref: "mailto:pl@planoland.ru",
} as const;
