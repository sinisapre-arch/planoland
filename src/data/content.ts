import type { LocalizedString } from "./projects";

/** Principles shown on the home page and Scandinavian-garden page. */
export const principles: LocalizedString[] = [
  { ru: "Сад, как продолжение дома", en: "A garden as a continuation of the home" },
  { ru: "Эргономика и функциональное зонирование", en: "Ergonomics and functional zoning" },
  { ru: "Сад, который растёт сам, пока вы отдыхаете", en: "A garden that grows by itself while you rest" },
  { ru: "Создаётся на поколения", en: "Built to last for generations" },
  { ru: "Честный бюджет и практичность", en: "Honest budget and practicality" },
  { ru: "Для неспешного утра и долгого вечера", en: "For slow mornings and long evenings" },
];

/** Services (title + body pairs for the Services page). */
export const services: { title: LocalizedString; body: LocalizedString }[] = [
  {
    title: { ru: "Предпроектное обследование", en: "Pre-project survey" },
    body: {
      ru: "Выезжаем на участок, чтобы понять задачи и пожелания заказчика. Во время строительства дома рельеф часто меняется из-за выемки и подсыпки грунта, поэтому старые высотные отметки в исходных материалах могут уже не соответствовать фактическим. Перед проектированием заново измеряем существующие объекты и актуальные высоты GNSS-приёмником (GPS). Предоставленный заказчиком официальный кадастровый DWG используем как подложку границ; наши измерения не устанавливают и не подтверждают кадастровые границы.",
      en: "We visit the site to understand the client's needs and priorities. House construction often changes terrain through excavation and fill, so elevations in older source files may no longer match actual site levels. Before design, we remeasure existing features and current elevations with a GNSS receiver (GPS). The client's official cadastral DWG is used as a boundary reference; our measurements do not establish or certify cadastral boundaries.",
    },
  },
  {
    title: { ru: "Концептуальный проект", en: "Concept design" },
    body: {
      ru: "Сочетаем обмер участка GNSS-приёмником (GPS) с фотограмметрией, чтобы учесть рельеф, существующие объекты и особенности территории, а затем наглядно показать будущий результат в 3D. Для каждого клиента создаём персональную страницу проекта с чертежами, концептуальными решениями и визуализациями. Вы можете следить за ходом работы, знакомиться с решениями на каждом этапе и согласовывать проект до утверждения финального плана.",
      en: "We combine GNSS receiver (GPS) site measurement with photogrammetry to capture terrain, existing features and the character of the site, then present the proposed result in 3D. Each client gets a personal project page with drawings, design concepts and visualizations. You can follow progress, review decisions at every stage and approve the design before the final plan is signed off.",
    },
  },
  {
    title: { ru: "Рабочая документация", en: "Detailed design" },
    body: {
      ru: "Разбивочные чертежи, планы покрытий и посадочных зон, схема рулонного или посевного газона, подбор материалов, а также отдельные проекты освещения, полива и дренажа с высотными отметками и уклонами — состав документации согласуется для каждого проекта.",
      en: "Set-out drawings, paving and planting-area plans, a ready-laid or seeded lawn plan, material selections, and optional lighting, irrigation and drainage designs with levels and slopes. The drawing scope is agreed for each project.",
    },
  },
  {
    title: { ru: "Авторский надзор", en: "Design supervision" },
    body: {
      ru: "Остаёмся на объекте в ходе стройки, проверяем работы на соответствие утверждённому проекту и вносим правки по месту при необходимости.",
      en: "We stay on site through construction, checking the work against the approved design and adjusting details on the spot as needed.",
    },
  },
  {
    title: { ru: "Реализация", en: "Implementation" },
    body: {
      ru: "Полный цикл реализации ландшафтного проекта — от вертикальной планировки до посадки крупномеров. Собственные строительные бригады и авторский надзор руководителя компании обеспечивают точное воплощение решений на каждом этапе. Благодаря личному участию руководителя в проектировании и реализации замысел сохраняется в деталях — от чертежа до готового сада.",
      en: "We deliver the complete landscape project, from grading to planting mature trees. Our own construction teams and the company director's design supervision ensure that every decision is carried through accurately. With the director personally involved in both design and construction, the original vision is preserved in every detail, from drawing to finished garden.",
    },
  },
  {
    title: { ru: "Уход", en: "Maintenance" },
    body: {
      ru: "Сезонный уход, чтобы сад прижился и жил десятилетиями.",
      en: "Seasonal care helps the garden establish itself and thrive for decades.",
    },
  },
];

/** Landscape design packages and common client questions for the Services page. */
export const designPackages: {
  title: LocalizedString;
  price: LocalizedString;
  description: LocalizedString;
  why: LocalizedString;
  includes: LocalizedString[];
  tag?: LocalizedString;
  recommended?: boolean;
}[] = [
  {
    title: { ru: "Базовый проект 2D", en: "Base 2D design" },
    tag: { ru: "Для планировки и первичной оценки", en: "For layout and initial pricing" },
    recommended: true,
    price: { ru: "от 5 000 ₽/сотка · минимум 50 000 ₽", en: "from ₽5,000/sotka · ₽50,000 minimum" },
    description: { ru: "Единый пакет: разрабатываем планировку и выдаём базовый комплект 2D-планов в PDF. Он показывает устройство сада и помогает согласовать решение и получить предварительную оценку работ. Полный набор технических чертежей для реализации относится к рабочему проекту.", en: "One package: develop the layout and deliver a base set of 2D plans in PDF. It communicates the garden design, supports approval and helps obtain an initial work estimate. The full technical drawing set for construction is part of the working design." },
    why: { ru: "Подходит, когда важно понять и согласовать общий план сада без заказа всех технических схем сразу. Концепция входит в цену — отдельной платы за неё нет.", en: "A good fit when you need to understand and approve the overall garden plan without commissioning every technical drawing at once. The concept is included; there is no separate concept fee." },
    includes: [
      { ru: "Планировочное решение и до 2 раундов сводных правок к первому эскизу", en: "Layout concept and up to 2 consolidated revision rounds on the first draft" },
      { ru: "Генплан с основными зонами отдыха, террасой, дорожками, газоном и посадочными зонами", en: "General plan with main outdoor living areas, terrace, paths, lawn and planting zones" },
      { ru: "Базовый план покрытий, посадочных зон и газона; без перечня видов и количества растений", en: "Base paving, planting-area and lawn plans; no plant species list or quantities" },
      { ru: "Комплект согласованных чертежей в PDF; DWG — по согласованному составу", en: "Agreed drawing set in PDF; DWG by agreed scope" },
      { ru: "Не включает подробную разбивку, ведомость объёмов материалов и отдельные инженерные разделы", en: "Excludes detailed set-out, material quantity takeoffs and separate engineering disciplines" },
    ],
  },
  {
    title: { ru: "Рабочий проект", en: "Detailed working design" },
    tag: { ru: "Для точной реализации", en: "For precise construction" },
    price: { ru: "от 8 000 ₽/сотка · минимум 80 000 ₽", en: "from ₽8,000/sotka · ₽80,000 minimum" },
    description: { ru: "Подробный проект именно сада и благоустройства: планировка, зоны отдыха, покрытия и бордюры, газон, посадочные зоны, материалы покрытий, размеры и ключевые высоты. Инженерные системы и подбор конкретного ассортимента растений оформляются отдельно.", en: "Detailed design of the garden and landscape works: layout, outdoor living areas, paving and kerbs, lawn, planting areas, surface materials, dimensions and key levels. Engineering systems and selection of specific plant varieties are separate services." },
    why: { ru: "Дает подрядчику понятные размеры и отметки для мощения, озеленения и формирования рельефа, не перегружая базовую цену сторонними инженерными разделами.", en: "Gives contractors clear dimensions and levels for paving, planting and shaping the site, while keeping other engineering disciplines outside the base price." },
    includes: [
      { ru: "Всё, что входит в базовый проект 2D", en: "Everything in the base 2D design" },
      { ru: "Размерный план дорожек, площадок, террасы и бордюров; подбор типов покрытий", en: "Dimensioned paths, paved areas, terrace and kerb plan; surface material selections" },
      { ru: "План газона и границ посадочных зон; конкретные виды и количество растений не входят", en: "Lawn plan and planting-area boundaries; specific plant varieties and quantities are not included" },
      { ru: "Растения на 3D-визуализации служат для показа образа сада и не являются ассортиментной ведомостью", en: "Plants shown in 3D visualizations illustrate the garden concept and are not a plant schedule" },
      { ru: "Вертикальная планировка сада с ключевыми проектными отметками и уклонами", en: "Garden grading plan with key design levels and slopes" },
      { ru: "Рабочие PDF/DWG-листы по согласованному составу", en: "Working PDF/DWG sheets in the agreed scope" },
      { ru: "Отдельно: дренаж и ливнёвка, освещение, автополив, GNSS-съёмка, расчёт материалов и 3D-визуализация", en: "Separate: drainage and stormwater, lighting, irrigation, GNSS survey, material takeoffs and 3D visualization" },
      { ru: "Пакет DWG/PDF — в согласованном составе", en: "DWG/PDF deliverables as agreed" },
    ],
  },
  {
    title: { ru: "3D-визуализация к проекту", en: "3D visualization add-on" },
    price: { ru: "от 30 000 ₽ за комплект", en: "from ₽30,000 per set" },
    description: { ru: "Фотореалистичные 3D-визуализации будущего сада; базовый комплект — до 3 ракурсов.", en: "Photorealistic 3D visualizations of the proposed garden; a starter set includes up to 3 views." },
    why: { ru: "Позволяет заранее оценить атмосферу, материалы и пропорции, прежде чем принимать решения о строительстве.", en: "Preview atmosphere, materials and proportions before making construction decisions." },
    includes: [
      { ru: "Добавляется к выбранному проекту", en: "Added to a selected design package" },
      { ru: "Число ракурсов и детализация согласуются заранее", en: "Agree the number of views and detail level in advance" },
    ],
  },
];

export const serviceFaq: { question: LocalizedString; answer: LocalizedString }[] = [
  {
    question: { ru: "Когда начинать ландшафтный проект — до или после строительства дома?", en: "When should landscape design begin: before or after the house is built?" },
    answer: { ru: "Лучше параллельно с проектированием дома, до начала строительства. Тогда можно заранее согласовать высоту чистого пола и входов, отметки участка, въезд, дорожки и места выхода коммуникаций. Это помогает избежать ступеней, неудобных уклонов, конфликтов труб и кабелей и дорогостоящих переделок. Посадки и чистовые покрытия выполняют позже, когда тяжёлая техника закончила работу.", en: "Ideally, start alongside the house design, before construction. That lets the team coordinate finished floor and entrance levels, site grading, driveway, paths and utility exits early. This helps avoid awkward steps and slopes, clashes between pipes and cables, and costly rework. Planting and final surfaces can wait until heavy construction is complete." },
  },
  {
    question: { ru: "Входит ли планировочная концепция в цену 2D-проекта?", en: "Is the layout concept included in the 2D design price?" },
    answer: { ru: "Да. И базовый 2D-проект, и рабочий проект включают разработку и согласование планировочного решения. Базовый 2D даёт генплан и основные планы сада. Рабочий проект добавляет подробные размеры и отметки для дорожек, площадок, бордюров, газона и посадочных зон. Конкретные виды и количество растений, дендроплан и ассортиментная/посадочная ведомость в базовые пакеты не входят: их можно заказать отдельно после согласования планировки, пожеланий и бюджета. Дренаж и ливнёвка, освещение, автополив, GNSS-съёмка, ведомости материалов и 3D-визуализация также рассчитываются отдельно. Пакеты 2D и «Рабочий проект» — альтернативные цены, они не складываются.", en: "Yes. Both the base 2D and working design include developing and agreeing the layout. Base 2D provides the general and key garden plans. The working design adds detailed dimensions and levels for paths, paved areas, kerbs, lawn and planting areas. Specific plant varieties and quantities, a dendroplan and planting schedule are not included in the base packages; they can be scoped separately once the layout, preferences and budget are agreed. Drainage and stormwater, lighting, irrigation, GNSS survey, material schedules and 3D visualization are also priced separately. The 2D and Working Design packages are alternative prices, not cumulative." },
  },
  {
    question: { ru: "Сколько правок входит в стоимость проекта?", en: "How many revisions are included in the design price?" },
    answer: { ru: "В базовый 2D- и рабочий проекты входят до двух раундов сводных комментариев к первому эскизу планировки. Один раунд — это один собранный список пожеланий после просмотра версии, а не отдельные сообщения по каждому изменению. Новые варианты, изменение ранее утверждённой планировки или задания и дополнительные раунды оцениваются отдельно, с согласованием цены и срока до начала доработки. Исправление ошибок или несоответствий согласованному заданию с нашей стороны не считается платной правкой.", en: "The base 2D and working-design packages include up to two rounds of consolidated comments on the first layout draft. One round means one combined list of feedback after reviewing a version, not separate messages for each change. New options, changes to an approved layout or brief, and additional rounds are quoted separately, with price and timing agreed before revisions begin. Correcting our errors or deviations from the agreed brief does not count as a billable revision." },
  },
  {
    question: { ru: "Входит ли в проект дендроплан с перечнем растений?", en: "Does the design include a plant schedule?" },
    answer: { ru: "Нет. В проекте показываются газон и границы посадочных зон; растения в 3D служат для визуального образа сада. Подбор видов, количества и размеров растений, дендроплан и посадочная ведомость — отдельный этап. Его состав и бюджет можно определить после утверждения планировки и обсуждения ваших пожеланий.", en: "No. The design shows the lawn and planting-area boundaries; plants in 3D are illustrative. Selecting plant varieties, quantities and sizes, and preparing a dendroplan and planting schedule are a separate stage. Its scope and budget can be agreed after the layout and your preferences are approved." },
  },
  {
    question: { ru: "Можно работать по проекту моей строительной компании?", en: "Can you work from a design prepared by my contractor?" },
    answer: { ru: "Да. После проверки исходного DWG и системы координат можно отдельно заказать вынос согласованных точек GNSS-приёмником (GPS), обмер существующего участка или фиксацию проложенных коммуникаций до засыпки.", en: "Yes. After checking the source DWG and coordinate system, you can book set-out of agreed points with a GNSS receiver (GPS), existing-site measurement or recording installed utilities before backfill." },
  },
  {
    question: { ru: "Для чего нужен обмер участка, если есть кадастровый план?", en: "Why measure the site if I already have a cadastral plan?" },
    answer: { ru: "Кадастровый DWG служит подложкой границ, но обычно не показывает актуальный рельеф, существующие деревья, дорожки и фактические высоты. Мы собираем эти данные GNSS-приёмником (GPS), чтобы проектировать уклоны, водоотведение и привязку элементов к реальному участку. Обмер не устанавливает и не подтверждает кадастровые границы.", en: "The cadastral DWG is a boundary reference, but it usually does not show current terrain, existing trees, paths or measured site levels. We collect this information with a GNSS receiver (GPS) to design slopes, drainage and the position of features on the actual site. Our measurement does not establish or certify cadastral boundaries." },
  },
];

/** Drainage service packages shown on the Services page. */
export const drainagePackages: {
  title: LocalizedString;
  price: LocalizedString;
  description: LocalizedString;
  includes: LocalizedString[];
}[] = [
  {
    title: { ru: "План дренажа и ливнёвки 2D", en: "2D drainage & stormwater plan" },
    price: { ru: "от 12 000 ₽", en: "from ₽12,000" },
    description: {
      ru: "Схема для участка до 10 соток: как собрать воду с территории и водостоков кровли, где проложить трубы и колодцы и куда отвести сток. Заранее согласованный маршрут помогает бригаде избежать импровизации и переделок при монтаже.",
      en: "A plan for plots up to 10 sotkas showing how to collect water from the site and roof downpipes, route pipes and wells, and direct the outflow. An agreed route helps the crew avoid guesswork and rework during installation.",
    },
    includes: [
      { ru: "Трассы труб и расположение колодцев", en: "Pipe routes and well locations" },
      { ru: "Точки сбора, включая подключение водостоков кровли по заданию", en: "Collection points, including roof downpipe connections as scoped" },
      { ru: "План в PDF", en: "Plan delivered as PDF" },
    ],
  },
  {
    title: { ru: "План с отметками и уклонами", en: "Plan with elevations and slopes" },
    price: { ru: "от 25 000 ₽", en: "from ₽25,000" },
    description: {
      ru: "Рабочая схема с высотами и уклонами помогает перенести проектные отметки на участок и выполнить монтаж по заданному направлению стока, а не определять решения по месту.",
      en: "A working plan with elevations and slopes helps transfer design levels to the site and install to the intended flow direction instead of making decisions on the spot.",
    },
    includes: [
      { ru: "Проектные отметки ключевых точек и колодцев", en: "Design elevations at key points and wells" },
      { ru: "Длины участков и заданные уклоны труб", en: "Pipe segment lengths and specified slopes" },
      { ru: "PDF и DWG по исходным данным участка", en: "PDF and DWG based on the supplied site data" },
    ],
  },
  {
    title: { ru: "Фактическая схема до засыпки", en: "As-built record before backfill" },
    price: { ru: "от 18 000 ₽", en: "from ₽18,000" },
    description: {
      ru: "Пока траншея открыта, GNSS-приёмником (GPS) фиксируем фактическое положение доступных участков труб и контрольных точек. Сверяем измеренные координаты и высоты с предоставленным проектом, чтобы обнаружить расхождения до засыпки.",
      en: "While the trench is open, we use a GNSS receiver (GPS) to record accessible pipe sections and check points. We compare measured coordinates and elevations with the supplied design to identify differences before backfill.",
    },
    includes: [
      { ru: "Один выезд: до 50 м трассы и 10 ключевых точек", en: "One visit: up to 50 m of pipe and 10 key points" },
      { ru: "Схема фактически проложенной трассы в PDF/DWG и таблица измеренных координат/отметок", en: "As-built route plan in PDF/DWG and a schedule of measured coordinates/elevations" },
      { ru: "Отметки участков, отличающихся от предоставленного проекта", en: "Measured points that differ from the supplied design are identified" },
      { ru: "Документ для дальнейшего обслуживания, ремонта или строительства на участке", en: "A record to refer to during future maintenance, repairs or construction" },
    ],
  },
  {
    title: { ru: "Полный цикл: план, вынос и контроль", en: "Full service: plan, set-out and record" },
    price: { ru: "от 52 000 ₽", en: "from ₽52,000" },
    description: {
      ru: "Проектируем, выносим точки и фиксируем фактическую трассу до засыпки. В итоге у вас остаётся измеренная исполнительная схема для сравнения с проектом и будущего обслуживания участка.",
      en: "We design the system, set out points and record the installed route before backfill. You receive a measured as-built record to compare with the design and keep for future site maintenance.",
    },
    includes: [
      { ru: "План дренажа с отметками и уклонами", en: "Drainage plan with elevations and slopes" },
      { ru: "Вынос согласованных проектных точек на участок", en: "Set-out of agreed design points on site" },
      { ru: "Выезд для измерений до обратной засыпки", en: "A site visit to measure the system before backfill" },
      { ru: "До 10 соток и 50 м трассы; исходная съёмка предоставляется отдельно", en: "Up to 10 sotkas and 50 m of pipe; base site survey supplied or priced separately" },
    ],
  },
];

/** Team members. */
export const team: {
  name: LocalizedString;
  role: LocalizedString;
  bio: LocalizedString;
  photo: string;
}[] = [
  {
    name: { ru: "Синиша Предраговић", en: "Sinisa Predragović" },
    role: {
      ru: "Сооснователь PlanoLand, дизайнер и строитель",
      en: "PlanoLand co-founder, designer and builder",
    },
    bio: {
      ru: "Синиша 15 лет проектировал и строил ландшафты в Швеции, прежде чем привезти это ремесло в Подмосковье и основать PlanoLand. Он участвует в каждом проекте от первого эскиза до последнего камня: сам проектирует и строит сад. Его страсть — создавать пространства на поколения, которые приносят красоту, тишину и радость тем, кто в них живёт.",
      en: "Sinisa spent 15 years designing and building landscapes in Sweden before bringing his craft to the Moscow region and co-founding PlanoLand. He takes part in every project from the first sketch to the last stone, designing and building the garden himself. His passion is creating spaces that last for generations and bring beauty, calm and joy to the people who live in them.",
    },
    photo: "/images/studio/founders.webp",
  },
  {
    name: { ru: "Георгий Лыхно", en: "Georgy Lykhno" },
    role: {
      ru: "Сооснователь, работа с клиентами",
      en: "Co-founder, client relations",
    },
    bio: {
      ru: "Георгий — основатель компании «Планодом», которая строит каркасные и каменные дома в Подмосковье и по всей России. В PlanoLand он ведёт клиентскую сторону каждого проекта — от первого контакта до сдачи, чтобы заказчики получали в саду ту же надёжность полного цикла, что и клиенты «Планодома» при строительстве дома.",
      en: "Georgy is the founder of Planodom, which builds timber-frame and stone houses across the Moscow region and throughout Russia. At PlanoLand, he leads the client side of every project from first contact to handover, giving garden clients the same full-cycle reliability that Planodom's homebuilding clients receive.",
    },
    photo: "/images/studio/founders.webp",
  },
];

/** Blog posts (representative stubs). */
export const blogPosts: {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  image: string;
}[] = [
  {
    slug: "scandinavian-design-russian-winters",
    title: {
      ru: "Скандинавский дизайн, русские зимы",
      en: "Scandinavian design, Russian winters",
    },
    excerpt: {
      ru: "Как шведская ландшафтная техника адаптируется к более суровому, снежному климату.",
      en: "How Swedish landscape technique adapts to a harsher, snowier climate.",
    },
    date: "2026-03-14",
    image: "https://ext.same-assets.com/3686561945/3311752931.webp",
  },
  {
    slug: "what-photogrammetry-does-for-your-garden",
    title: {
      ru: "Что делает фотограмметрия для вашего сада",
      en: "What photogrammetry actually does for your garden design",
    },
    excerpt: {
      ru: "Простое объяснение процесса съёмки/3D, через который проходит каждый клиент.",
      en: "A plain-English explanation of the survey/3D process every client goes through.",
    },
    date: "2026-02-02",
    image: "https://ext.same-assets.com/3686561945/3484833766.webp",
  },
  {
    slug: "you-dont-have-to-build-it-all-in-one-summer",
    title: {
      ru: "Не обязательно строить всё за одно лето",
      en: "You don't have to build it all in one summer",
    },
    excerpt: {
      ru: "Как поэтапное, сезон-за-сезоном строительство делает большой сад доступным.",
      en: "How phased, season-by-season construction makes a bigger garden affordable.",
    },
    date: "2026-01-20",
    image: "https://ext.same-assets.com/3686561945/2915188378.webp",
  },
];
