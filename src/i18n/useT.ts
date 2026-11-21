import { useLang } from "./LangContext";

/**
 * Dictionary of UI strings. RU is the source of truth.
 * EN is filled for the chrome (nav, footer, buttons, page intros).
 * Missing EN keys fall back to RU at render time so the site never shows
 * an empty string — untranslated spots are easy to find later.
 */
export const strings = {
  // ---- Header / nav ----
  "nav.private": { ru: "Частные сады", en: "Private gardens" },
  "nav.home": { ru: "Главная", en: "Home" },
  "nav.portfolio": { ru: "Портфолио", en: "Portfolio" },
  "nav.scandinavian": { ru: "Скандинавский сад", en: "Scandinavian garden" },
  "nav.services": { ru: "Услуги", en: "Services" },
  "nav.team": { ru: "Команда", en: "Team" },
  "nav.contacts": { ru: "Контакты", en: "Contacts" },
  "nav.blog": { ru: "Блог", en: "Blog" },
  "header.openMenu": { ru: "Открыть меню", en: "Open menu" },

  // ---- Hero ----
  "hero.eyebrow": {
    ru: "Скандинавский дизайн",
    en: "Scandinavian design",
  },
  "hero.title": {
    ru: "От эскиза до готового сада",
    en: "From sketch to finished garden",
  },
  "hero.lede": {
    ru: "Проектируем сад, планируем работы и следим, чтобы на объекте строили точно по проекту. 15 лет опыта в Швеции — работаем в Москве и Московской области.",
    en: "We design the garden, plan the works and make sure the site is built to the design. 15 years of experience in Sweden, now working across Moscow and the Moscow region.",
  },
  "hero.stat1.value": { ru: "15 лет", en: "15 years" },
  "hero.stat1.label": { ru: "в дизайне и строительстве", en: "in design and construction" },
  "hero.stat2.value": { ru: "300+", en: "300+" },
  "hero.stat2.label": { ru: "садов спроектировано и построено", en: "gardens designed and built" },
  "hero.stat3.value": { ru: "Контроль", en: "Control" },
  "hero.stat3.label": {
    ru: "авторский надзор и проверка, что всё построено по проекту",
    en: "design supervision and checking that everything is built to the design",
  },

  // ---- Home page metadata (must match index.html) ----
  "home.seoTitle": {
    ru: "PlanoLand — ландшафтный дизайн и ведение проекта в Подмосковье",
    en: "PlanoLand — landscape design and project management in the Moscow region",
  },
  "home.seoDescription": {
    ru: "Ландшафтный дизайн и ведение проекта в Подмосковье: проектирование скандинавских садов, расчёт объёмов, организация работ, авторский надзор на объекте и проверка, что всё построено по проекту. 15 лет опыта, 300+ садов. Запишитесь на консультацию.",
    en: "Landscape design and project management in the Moscow region: Scandinavian garden design, quantity takeoffs, work coordination, design supervision on site and checking that everything is built to the design. 15 years of experience, 300+ gardens. Book a consultation.",
  },

  // ---- Featured projects ----
  "featured.label": { ru: "проект", en: "project" },
  "featured.prev": { ru: "Предыдущий проект", en: "Previous project" },
  "featured.next": { ru: "Следующий проект", en: "Next project" },

  // ---- Studio ----
  "studio.eyebrow": {
    ru: "Независимый ландшафтный дизайнер и руководитель проекта",
    en: "Independent landscape designer and project manager",
  },
  "studio.title": {
    ru: "Создаем пространство, в котором хочется жить",
    en: "We create a space you want to live in",
  },
  "studio.caption": {
    ru: "Синиша Предраговић — дизайнер и руководитель проекта PlanoLand",
    en: "Sinisa Predragović — designer and project manager at PlanoLand",
  },
  "studio.alt": {
    ru: "Синиша Предраговић за работой на объекте — дизайнер и руководитель проекта студии PlanoLand",
    en: "Sinisa Predragović at work on a site — designer and project manager of PlanoLand",
  },
  "studio.body1": {
    ru: "Сад — это способ быть здесь и сейчас. Пространство, которое меняет образ мыслей и жизни, где человек чувствует опору, связь с собой и миром.",
    en: "A garden is a way to be here and now. A space that changes how you think and live, where a person feels grounded and connected to themselves and the world.",
  },
  "studio.body2": {
    ru: "Скандинавский сад — фирменный стиль PlanoLand. Это философия ощущения, состояния и мысли, в которой среда формируется вокруг человека.",
    en: "The Scandinavian garden is PlanoLand’s signature style — a philosophy of feeling, state and thought, where the environment is shaped around the person.",
  },
  "studio.cta": { ru: "Подробнее о нас", en: "More about us" },

  // ---- Principles ----
  "principles.title": {
    ru: "Принципы скандинавского сада",
    en: "Principles of the Scandinavian garden",
  },
  "principles.lede": {
    ru: "Сад создаёт пространство для отдыха и восстановления: здесь можно почувствовать спокойствие и уверенность, насладиться природой, найти вдохновение и новые эмоции. Это вклад в комфорт и качество повседневной жизни.",
    en: "A garden creates a place to rest and recharge: a place to feel calm and secure, enjoy nature, and find inspiration and new experiences. It is an investment in comfort and the quality of everyday life.",
  },

  // ---- Portfolio ----
  "portfolio.title": { ru: "Портфолио", en: "Portfolio" },
  "portfolio.all": { ru: "Все проекты", en: "All projects" },
  "portfolio.filter.all": { ru: "Все", en: "All" },
  "portfolio.filter.private": { ru: "Частные", en: "Private" },

  // ---- Consultation CTA (lead form → Telegram) ----
  "cta.eyebrow": {
    ru: "Запись на консультацию",
    en: "Book a consultation",
  },
  "cta.title": {
    ru: "Начнём с разговора о вашем саде",
    en: "Let's start with a conversation about your garden",
  },
  "cta.name": { ru: "Ваше имя", en: "Your name" },
  "cta.contact": { ru: "Телефон или email", en: "Phone or email" },
  "cta.submit": { ru: "Отправить заявку", en: "Send request" },
  "cta.consent": {
    ru: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
    en: "By clicking the button you agree to the processing of personal data.",
  },

  // ---- Form status / validation (Telegram submission) ----
  "form.message": {
    ru: "Сообщение",
    en: "Message",
  },
  "form.messagePlaceholder": {
    ru: "Расскажите о своём участке",
    en: "Tell us about your plot",
  },
  "form.submit": { ru: "Отправить", en: "Send" },
  "form.sending": { ru: "Отправка…", en: "Sending…" },
  "form.success": {
    ru: "Сообщение отправлено! ✓",
    en: "Message sent! ✓",
  },
  "form.error.required": {
    ru: "Пожалуйста, заполните обязательные поля.",
    en: "Please fill in the required fields.",
  },
  "form.error.too_short": {
    ru: "Слишком короткое значение.",
    en: "Value is too short.",
  },
  "form.error.too_long": {
    ru: "Слишком длинное значение.",
    en: "Value is too long.",
  },
  "form.error.name": {
    ru: "Введите имя (2–100 символов).",
    en: "Please enter a name (2–100 characters).",
  },
  "form.error.contact": {
    ru: "Введите телефон или email (5–254 символа).",
    en: "Please enter a phone or email (5–254 characters).",
  },
  "form.error.message": {
    ru: "Сообщение слишком короткое или слишком длинное (10–2000 символов).",
    en: "Message is too short or too long (10–2000 characters).",
  },
  "form.error.send": {
    ru: "Ошибка отправки. Попробуйте ещё раз.",
    en: "Failed to send. Please try again.",
  },

  // ---- Footer ----
  "footer.msk": {
    ru: "Москва, ул. Зорге, д. 9А",
    en: "Zorge street 9A, Moscow",
  },
  "footer.area": {
    ru: "Москва и Московская область",
    en: "Moscow and the Moscow region",
  },
  "footer.rights": {
    ru: "2026. Материалы сайта могут быть использованы только с разрешения PlanoLand.",
    en: "2026. Site materials may be used only with permission of PlanoLand.",
  },
  "footer.policy": {
    ru: "Политика обработки персональных данных",
    en: "Personal data processing policy",
  },
  "footer.agree": {
    ru: "Пользовательское соглашение",
    en: "User agreement",
  },
  "footer.documents": { ru: "Документы", en: "Documents" },

  // ---- Cookie / chat ----
  "cookie.text": {
    ru: "Наш сайт использует cookies для улучшения работы. Сервис Яндекс.Метрика также использует cookies.",
    en: "Our site uses cookies to improve your experience. Yandex.Metrica also uses cookies.",
  },
  "cookie.ok": { ru: "OK", en: "OK" },
  "chat.label": { ru: "чат", en: "chat" },

  // ---- Project detail ----
  "project.next": { ru: "Следующий проект", en: "Next project" },
  "project.backToPortfolio": {
    ru: "Все проекты",
    en: "All projects",
  },
  "project.spec.area": { ru: "Площадь", en: "Area" },
  "project.spec.location": { ru: "Локация", en: "Location" },
  "project.spec.year": { ru: "Год", en: "Year" },
  "project.spec.status": { ru: "Статус", en: "Status" },
  "project.spec.status.realized": { ru: "Реализован", en: "Realized" },
  "project.spec.status.concept": { ru: "Концепция", en: "Concept" },
  "project.aboutTitle": { ru: "О проекте", en: "About the project" },

  // ---- Render disclaimer (for visualization-only imagery) ----
  "disclaimer.renders": {
    ru: "Растения и озеленение на визуализациях приведены исключительно для наглядности и не являются посадочной ведомостью или итоговым ассортиментом.",
    en: "Plants and greenery in the renders are shown for visualization purposes only and do not constitute a planting schedule or final plant list.",
  },

  // ---- Services ----
    "services.eyebrow": {
      ru: "Услуги студии",
      en: "Studio services",
    },
    "services.title": {
      ru: "Проектирование и ведение проекта",
      en: "Design and project management",
    },
    "services.lede": {
      ru: "Проектируем сад, считаем объёмы, организуем работы и проверяем, что на объекте строят по чертежу. Строительство можно передать подрядчику, которого находим мы, или вашей бригаде — тогда мы ведём её по проекту и отвечаем за соответствие готового сада. Работы можно вести поэтапно, по сезонам.",
      en: "We design the garden, calculate quantities, coordinate the works and check that the site is built to the design. Construction can be handed to a contractor we find, or to your own crew — in that case we run it against the design and answer for the finished garden matching the drawing. The work can be delivered in phases across seasons.",
    },

  // ---- Team ----
  "team.eyebrow": { ru: "Основатель студии", en: "The studio's founder" },
  "team.title": {
    ru: "Человек, который создаёт сады",
    en: "The person who makes gardens",
  },
  "team.lede": {
    ru: "PlanoLand — независимая студия ландшафтного дизайна, основанная Синишей Предраговичем. Он проектирует сады, считает объёмы, планирует работы, подбирает исполнителей и приезжает на объект, чтобы убедиться, что построено по чертежу. 15 лет опыта в Швеции, теперь студия работает в Москве и Московской области.",
    en: "PlanoLand is an independent landscape design studio founded by Sinisa Predragović. He designs the gardens, calculates quantities, plans the works, finds the contractors and comes to the site to check that it is built to the drawing. Fifteen years of experience in Sweden, now working across Moscow and the Moscow region.",
  },
  "team.studioNoteTitle": { ru: "Студия", en: "The studio" },
  "team.studioNote": {
    ru: "PlanoLand — это основатель студии Синиша Предраговић и привлекаемые им специалисты. Постоянных сотрудников в штате нет, поэтому каждое звено подбирается под задачу: исполнитель на площадке, поставщик, садовник на сезон. Строительство ведётся подрядчиком — тем, которого находим мы, или тем, которого привлекаете вы; в обоих случаях на объекте присутствует дизайнер, а за соответствие готового сада проекту отвечает студия.",
    en: "PlanoLand is Sinisa Predragović, the founder, and the specialists he brings in. There is no permanent staff, so every role is hired for the task: the contractor on site, the supplier, the gardener for the season. Construction is carried out by a contractor — one we find, or one you appoint; either way the designer is on site, and the studio is answerable for the finished garden matching the design.",
  },

  // ---- Contacts ----
  "contacts.eyebrow": { ru: "Контакты", en: "Contacts" },
  "contacts.title": {
    ru: "Расскажите о своём участке",
    en: "Tell us about your plot",
  },
  "contacts.lede": {
    ru: "Оставьте заявку — менеджер свяжется в течение рабочего дня и предложит время для первой встречи.",
    en: "Leave a request — the manager will contact you within a business day and propose a time for the first meeting.",
  },
  "contacts.msk": { ru: "Офис", en: "Office" },
  "contacts.area": {
    ru: "Работаем по Москве и Московской области",
    en: "We work across Moscow and the Moscow region",
  },

  // ---- Social profile names (used as accessible labels) ----
  "social.youtube": { ru: "YouTube", en: "YouTube" },
  "social.vkVideo": { ru: "VK Видео", en: "VK Video" },
  "social.vk": { ru: "VK", en: "VK" },
  "social.telegram": { ru: "Telegram", en: "Telegram" },
  "social.instagram": { ru: "Instagram", en: "Instagram" },
  "social.dzen": { ru: "Дзен", en: "Dzen" },
  "social.pinterest": { ru: "Pinterest", en: "Pinterest" },

  // ---- Blog ----
  "blog.eyebrow": { ru: "Журнал", en: "Journal" },
  "blog.title": {
    ru: "Статьи и заметки студии",
    en: "Articles and notes from the studio",
  },
  "blog.lede": {
    ru: "Пишем о скандинавском саде, материалах, растениях и процессе работы над проектами.",
    en: "We write about the Scandinavian garden, materials, plants and the working process.",
  },

  // ---- Legal ----
  "legal.updated": { ru: "Последнее обновление", en: "Last updated" },
  "legal.toc": { ru: "Содержание", en: "Contents" },

  // ---- 404 ----
  "notfound.title": { ru: "Страница не найдена", en: "Page not found" },
  "notfound.body": {
    ru: "По этому адресу ничего нет. Вернитесь на главную или откройте портфолио.",
    en: "Nothing here at that address. Head back home or open the portfolio.",
  },
  "notfound.cta": { ru: "На главную", en: "Go home" },
} as const;

export type StringKey = keyof typeof strings;

/** Look up a localized string. Falls back to RU if EN is missing. */
export function useT() {
  const { contentLocale } = useLang();
  return (key: StringKey): string => {
    const entry = strings[key];
    if (!entry) return key;
    const value = entry[contentLocale];
    return value ?? entry.ru;
  };
}

/** Non-hook variant for use inside event handlers or outside components. */
export function translate(key: StringKey, locale: "ru" | "en"): string {
  const entry = strings[key];
  if (!entry) return key;
  return entry[locale] ?? entry.ru;
}
