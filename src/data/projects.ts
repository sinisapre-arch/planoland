/**
 * Project records. Slugs are descriptive English keywords; old codenames
 * (buxus, terrasso, hacienda, sad) redirect to the new slugs in vercel.json.
 *
 * Image folders under public/images/projects/ are named after the slug, so the
 * shipped asset paths carry no legacy codenames.
 */
export type ProjectCategory = "private";

export type LocalizedString = {
  ru: string;
  en?: string;
};

export type Project = {
  slug: string;
  title: LocalizedString;
  /** Short place line shown on cards. */
  place: LocalizedString;
  category: ProjectCategory;
  /** Cover image used on cards & detail hero. */
  image: string;
  /** Optional badge shown on cards. Currently unused (no awards to display). */
  label?: LocalizedString;
  /** Detail-page specs. */
  specs: {
    area: LocalizedString;
    year: string;
    location: LocalizedString;
    status?: "realized" | "concept";
  };
  /** Optional awards list. Currently unused (no awards to display). */
  awards?: LocalizedString[];
  /** Long-form description shown on the detail page. */
  description: LocalizedString;
  /** Extra gallery images (besides the hero). */
  gallery?: string[];
  /** Featured on the home carousel. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "djursholm",
    title: { ru: "Мощение и вертикальная планировка", en: "Paving and site grading" },
    place: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
    category: "private",
    image: "/images/projects/djursholm/cover.webp",
    specs: {
      area: { ru: "1000 м²", en: "1,000 m²" },
      year: "2023",
      location: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафтный проект в Стокгольме. Лестницы, мощение и продуманная вертикальная планировка объединили архитектуру дома и окружающий ландшафт в гармоничное целое. Перепады высот стали частью композиции, а дорожки и посадки сформировали удобные маршруты и уютные зоны для отдыха. В результате получился современный сад, в котором эстетика сочетается с функциональностью, а каждый элемент поддерживает целостность пространства.",
      en: "A landscape design in Stockholm. Steps, paving and carefully considered grading bring the architecture of the house and the surrounding landscape together. Changes in level become part of the composition, while paths and planting create convenient routes and welcoming places to relax. The result is a modern garden where aesthetics and function work together and every element contributes to a coherent whole.",
    },
    gallery: [
      "/images/projects/djursholm/gallery/01.webp",
      "/images/projects/djursholm/gallery/02.webp",
      "/images/projects/djursholm/gallery/03.webp",
      "/images/projects/djursholm/gallery/04.webp",
      "/images/projects/djursholm/gallery/05.webp",
      "/images/projects/djursholm/gallery/06.webp",
      "/images/projects/djursholm/gallery/07.webp",
      "/images/projects/djursholm/gallery/08.webp",
      "/images/projects/djursholm/gallery/09.webp",
      "/images/projects/djursholm/gallery/10.webp",
      "/images/projects/djursholm/gallery/11.webp",
      "/images/projects/djursholm/gallery/12.webp",
      "/images/projects/djursholm/gallery/13.webp",
      "/images/projects/djursholm/gallery/14.webp",
      "/images/projects/djursholm/gallery/15.webp",
    ],
    featured: true,
  },
  {
    slug: "sollentuna",
    title: { ru: "Водное благоустройство", en: "Water and pool landscaping" },
    place: { ru: "Соллентуна, Швеция", en: "Sollentuna, Sweden" },
    category: "private",
    image: "/images/projects/sollentuna/cover.webp",
    specs: {
      area: { ru: "1200 м²", en: "1,200 m²" },
      year: "2022",
      location: { ru: "Соллентуна, Швеция", en: "Sollentuna, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафт загородного дома с бассейном. Геометрия дорожек и ступеней объединяет дом, зону отдыха и бассейн в целостную композицию. Продуманная вертикальная планировка обеспечивает комфортное перемещение по участку, а озеленение смягчает архитектурные линии и создаёт гармоничную связь между домом и садом.",
      en: "Landscape design for a country home with a pool. The geometry of the paths and steps brings the house, leisure area and pool together in a unified composition. Thoughtful grading makes it comfortable to move around the site, while planting softens the architectural lines and creates a harmonious connection between house and garden.",
    },
    gallery: [
      "/images/projects/sollentuna/gallery/01.webp",
      "/images/projects/sollentuna/gallery/02.webp",
      "/images/projects/sollentuna/gallery/03.webp",
      "/images/projects/sollentuna/gallery/04.webp",
    ],
    featured: true,
  },
  {
    slug: "gustavsberg",
    title: { ru: "Благоустройство территории", en: "Landscape design for a country home" },
    place: {
      ru: "Густавсберг, Швеция",
      en: "Gustavsberg, Sweden",
    },
    category: "private",
    image: "/images/projects/gustavsberg/cover.webp",
    specs: {
      area: { ru: "2000 м²", en: "2,000 m²" },
      year: "2021",
      location: { ru: "Густавсберг, Швеция", en: "Gustavsberg, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафт загородного дома с выразительной архитектурой. Обширное мощение объединяет дом, зоны отдыха и бассейн в единую композицию. Чёткая геометрия дорожек, аккуратные посадки и лаконичное ограждение формируют ухоженное, гармоничное пространство, где функциональность сочетается с естественной красотой сада.",
      en: "Landscape design for a country home with distinctive architecture. Extensive paving brings the house, leisure areas and pool together in one composition. Clear path geometry, considered planting and understated fencing create a polished, harmonious space where function meets the natural beauty of the garden.",
    },
    gallery: [
      "/images/projects/gustavsberg/gallery/01.webp",
      "/images/projects/gustavsberg/gallery/02.webp",
      "/images/projects/gustavsberg/gallery/03.webp",
      "/images/projects/gustavsberg/gallery/04.webp",
      "/images/projects/gustavsberg/gallery/05.webp",
      "/images/projects/gustavsberg/gallery/06.webp",
      "/images/projects/gustavsberg/gallery/07.webp",
    ],
    featured: true,
  },
  {
    slug: "lidingo",
    title: { ru: "Озеленение", en: "Garden planting and landscaping" },
    place: {
      ru: "Лидингё, Швеция",
      en: "Lidingö, Sweden",
    },
    category: "private",
    image: "/images/projects/lidingo/cover.webp",
    specs: {
      area: { ru: "900 м²", en: "900 m²" },
      year: "2020",
      location: { ru: "Лидингё, Швеция", en: "Lidingö, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафтный проект с продуманной планировкой, мощением и озеленением. Дорожки и плиточное покрытие формируют удобную структуру участка, а газон и тщательно подобранные растения объединяют пространство в гармоничную композицию. Каждый элемент сада спроектирован с учётом эстетики, функциональности и комфорта в повседневной жизни.",
      en: "A landscape design with carefully planned layout, paving and planting. Paths and paved areas give the site a practical structure, while the lawn and carefully selected plants bring it together as a harmonious composition. Every garden element is designed with aesthetics, function and everyday comfort in mind.",
    },
    gallery: [
      "/images/projects/lidingo/gallery/01.webp",
      "/images/projects/lidingo/gallery/02.webp",
      "/images/projects/lidingo/gallery/03.webp",
      "/images/projects/lidingo/gallery/04.webp",
      "/images/projects/lidingo/gallery/05.webp",
      "/images/projects/lidingo/gallery/06.webp",
      "/images/projects/lidingo/gallery/07.webp",
      "/images/projects/lidingo/gallery/08.webp",
      "/images/projects/lidingo/gallery/09.webp",
      "/images/projects/lidingo/gallery/10.webp",
      "/images/projects/lidingo/gallery/11.webp",
    ],
    featured: true,
  },
  {
    slug: "planting",
    title: { ru: "Посадка растений", en: "Planting design" },
    place: {
      ru: "Джурсхольм, Швеция",
      en: "Djursholm, Sweden",
    },
    category: "private",
    image: "/images/projects/planting/cover.webp",
    specs: {
      area: { ru: "2000 м²", en: "2,000 m²" },
      year: "2022",
      location: { ru: "Джурсхольм, Швеция", en: "Djursholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафтный проект загородного дома в Швеции. Разработали комплексную концепцию участка, объединив озеленение, подъездные дорожки и террасу под навесом в единую композицию. Планировка подчёркивает выразительную архитектуру деревянного дома с черепичной крышей, а продуманное сочетание мощения и растений — стриженой живой изгороди, олив в кашпо и газона — создаёт гармоничное пространство для отдыха и жизни на природе.",
      en: "Landscape design for a country home in Sweden. We developed a full site concept that brings planting, access paths and a sheltered terrace together in a single composition. The layout responds to the distinctive architecture of the timber house with a tiled roof, while the combination of paving and planting — clipped hedges, potted olives and lawn — creates a harmonious place to relax and enjoy life outdoors.",
    },
    gallery: [
      "/images/projects/planting/gallery/01.webp",
      "/images/projects/planting/gallery/02.webp",
      "/images/projects/planting/gallery/03.webp",
      "/images/projects/planting/gallery/04.webp",
    ],
    featured: true,
  },
  {
    slug: "summer-house-pool",
    title: { ru: "Летний загородный дом с бассейном", en: "Summer country home with a pool" },
    place: {
      ru: "Швеция",
      en: "Sweden",
    },
    category: "private",
    image: "/images/projects/summer-house-pool/cover.webp",
    specs: {
      area: { ru: "1500 м²", en: "1,500 m²" },
      year: "2023",
      location: { ru: "Швеция", en: "Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафт загородного дома для летнего отдыха. Светлое мощение объединяет дом, бассейн и зоны отдыха в гармоничное пространство. Чёткие линии дорожек и плиточных площадок сочетаются с окружающим озеленением, создавая атмосферу лёгкости, уюта и комфорта для летних дней за городом.",
      en: "Landscape design for a country home made for summer getaways. Light paving brings the house, pool and leisure areas together in a harmonious space. Clean path lines and paved terraces sit naturally among the planting, creating a light, welcoming and comfortable setting for summer days in the country.",
    },
    gallery: [
      "/images/projects/summer-house-pool/gallery/01.webp",
      "/images/projects/summer-house-pool/gallery/02.webp",
      "/images/projects/summer-house-pool/gallery/03.webp",
    ],
    featured: true,
  },
  {
    slug: "terrace-pool",
    title: { ru: "Терраса и бассейн", en: "Terrace and pool" },
    place: {
      ru: "Стокгольм, Швеция",
      en: "Stockholm, Sweden",
    },
    category: "private",
    image: "/images/projects/terrace-pool/cover.webp",
    specs: {
      area: { ru: "900 м²", en: "900 m²" },
      year: "2021",
      location: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафт загородного дома с бассейном и открытой террасой. Насыпная дорожка объединяет основные зоны участка, создавая естественный переход между домом, садом и местом для отдыха у воды. Продуманная планировка и гармоничное озеленение формируют целостное пространство для комфортной жизни на природе.",
      en: "Landscape design for a country home with a pool and open terrace. A gravel path links the main areas, creating a natural transition between the house, garden and waterside lounge. Thoughtful planning and harmonious planting make a unified space for comfortable outdoor living.",
    },
    gallery: [
      "/images/projects/terrace-pool/gallery/01.webp",
      "/images/projects/terrace-pool/gallery/02.webp",
      "/images/projects/terrace-pool/gallery/03.webp",
      "/images/projects/terrace-pool/gallery/04.webp",
      "/images/projects/terrace-pool/gallery/05.webp",
      "/images/projects/terrace-pool/gallery/06.webp",
      "/images/projects/terrace-pool/gallery/07.webp",
    ],
    featured: true,
  },
  {
    slug: "garden-earthworks",
    title: { ru: "Земляные работы и проектирование", en: "Earthworks and garden design" },
    place: {
      ru: "Стокгольм, Швеция",
      en: "Stockholm, Sweden",
    },
    category: "private",
    image: "/images/projects/garden-earthworks/cover.webp",
    specs: {
      area: { ru: "1000 м²", en: "1,000 m²" },
      year: "2020",
      location: { ru: "Стокгольм, Швеция", en: "Stockholm, Sweden" },
      status: "realized",
    },
    description: {
      ru: "Ландшафтный проект с многоуровневой планировкой. Гранитная терраса и булыжные дорожки объединяют функциональные зоны участка, а подпорные стены органично вписаны в композицию и помогают обыграть перепад высот. Оранжерея на каменном основании, каменный колодец и водоём из гранитных валунов создают уединённый уголок сада, а стриженые живые изгороди отделяют участок от улицы.",
      en: "A landscape design with a multi-level layout. A granite terrace and cobbled paths connect the functional areas of the site, while retaining walls fit naturally into the composition and make use of the change in level. A greenhouse on a stone base, a stone well and a pond edged with granite boulders create a secluded corner of the garden, while clipped hedges separate the property from the street.",
    },
    gallery: [
      "/images/projects/garden-earthworks/gallery/01.webp",
      "/images/projects/garden-earthworks/gallery/02.webp",
      "/images/projects/garden-earthworks/gallery/03.webp",
      "/images/projects/garden-earthworks/gallery/04.webp",
      "/images/projects/garden-earthworks/gallery/05.webp",
      "/images/projects/garden-earthworks/gallery/06.webp",
      "/images/projects/garden-earthworks/gallery/07.webp",
      "/images/projects/garden-earthworks/gallery/08.webp",
      "/images/projects/garden-earthworks/gallery/09.webp",
      "/images/projects/garden-earthworks/gallery/10.webp",
      "/images/projects/garden-earthworks/gallery/11.webp",
    ],
    featured: true,
  },
];

/** Lookup by slug, returns `undefined` for unknown slugs (handled by route). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Next project in the array, wrapping around for the last one. */
export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}

/** Quick accessor for the home-page carousel. */
export const featuredProjects = projects.filter((project) => project.featured);
