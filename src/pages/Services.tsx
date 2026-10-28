import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { assets } from "../data/assets";
import { designPackages, drainagePackages, serviceFaq, services } from "../data/content";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";
import { useLocalePath } from "../i18n/routes";

export default function Services() {
  const t = useT();
  const { contentLocale } = useLang();
  const localePath = useLocalePath();
  const isRu = contentLocale === "ru";
  const serviceGroups = [
    { title: isRu ? "ПРОЕКТИРОВАНИЕ" : "DESIGN", items: [services[1], services[2]] },
    {
      title: isRu ? "РАСЧЁТ ОБЪЁМОВ И СМЕТЫ" : "QUANTITIES & COST ESTIMATES",
      items: [{
        title: { ru: "Материалы и земляные работы", en: "Materials and earthworks" },
        body: {
          ru: "Подсчёт объёмов материалов и расчёт выемки/насыпи по проекту и данным участка. Можно заказать отдельно или вместе с проектированием.",
          en: "Material quantity takeoffs and cut/fill calculations based on the design and site data. Available on its own or alongside design.",
        },
      }],
    },
    { title: isRu ? "ОБМЕР УЧАСТКА" : "SITE MEASUREMENT", items: [services[0]] },
    { title: isRu ? "СТРОИТЕЛЬСТВО И СОПРОВОЖДЕНИЕ" : "CONSTRUCTION & SUPERVISION", items: [services[4], services[3]] },
    { title: isRu ? "УХОД ЗА САДОМ" : "GARDEN MAINTENANCE", items: [services[5]] },
  ];

  return (
    <>
      <Seo title={t("nav.services")} description={t("services.lede")} />
      <PageHeader
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        lede={t("services.lede")}
        tone="cream"
      />

      <section className="bg-graphite px-4 py-16 text-cream sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sage">{isRu ? "ПРОЕКТИРУЕМ, ЧТОБЫ СТРОИТЬ УВЕРЕННО" : "PLAN WITH CONFIDENCE. BUILD WITH FEWER SURPRISES."}</p>
              <h2 className="font-expanded text-4xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
                {isRu ? "Меньше догадок сейчас — меньше дорогих переделок потом" : "Fewer unknowns now. Fewer costly changes later."}
              </h2>
            </div>
            <div>
              <p className="leading-relaxed text-cream/75">
                {isRu
                  ? "Мы помогаем заранее согласовать планировку, размеры, высоты, материалы и последовательность работ. А если у вас уже есть проект, проверим, можно ли использовать его и дополнить только тем, чего не хватает. Так вы вкладываетесь в нужные решения и снижаете риск повторных работ, лишних закупок и поисков скрытых коммуникаций в будущем."
                  : "We help you agree the layout, dimensions, levels, materials and work sequence before construction. If you already have a design, we can check whether it can be used and add only what is missing. That helps you pay for the decisions you need and reduces the risk of rework, unnecessary purchases and future guesswork about buried utilities."}
              </p>
              <a href={localePath("/contacts")} className="mt-6 inline-flex min-h-12 items-center justify-center bg-cream px-6 py-3 text-sm font-bold uppercase tracking-wide text-graphite transition-colors hover:bg-cream/85">
                {isRu ? "Обсудить задачу" : "Discuss your project"}
              </a>
            </div>
          </div>
          <div className="mt-12 grid gap-6 border-t border-cream/15 pt-6 md:grid-cols-3">
            {[
              { title: isRu ? "Сначала решить — потом строить" : "Decide before you build", body: isRu ? "Увязать высоты дома, въезда, террасы и дорожек до укладки покрытий, чтобы не исправлять неудобные ступени и уклоны." : "Coordinate house, driveway, terrace and path levels before paving, helping avoid awkward steps and slopes that are costly to fix later." },
              { title: isRu ? "Оплачивать только недостающую работу" : "Pay only for what is missing", body: isRu ? "Если есть пригодный проект, можем выполнить вынос и измерения по нему — без повторной оплаты за разработку такого же плана." : "If you already have a usable design, we can set out and measure from it instead of charging you to redraw the same plan." },
              { title: isRu ? "Сохранить данные на будущее" : "Keep a record for later", body: isRu ? "Зафиксировать GNSS-координаты и высоты труб до засыпки, чтобы сравнить их с проектом и иметь схему для будущего ремонта или строительства." : "Record GNSS coordinates and elevations before backfill, compare them with the plan and keep a reference for future repairs or construction." },
            ].map((item) => (
              <article key={item.title}>
                <h3 className="font-expanded text-lg font-black uppercase tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1760px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-graphite/50">
              {isRu ? "ЧЕМ МЫ МОЖЕМ ПОМОЧЬ" : "HOW WE CAN HELP"}
            </p>
            <h2 className="font-expanded text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
              {isRu ? "Услуги по этапам проекта" : "Services by project stage"}
            </h2>
            <p className="mt-5 leading-relaxed text-graphite/70">
              {isRu ? "Можно заказать отдельный этап или пройти весь путь вместе с нами — от обмера участка и проекта до строительства и ухода." : "Choose a single service or work with us from site measurement and design through construction and maintenance."}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {serviceGroups.map((group, index) => (
              <article key={group.title} className="border border-graphite/15 bg-white/40 p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-4 border-b border-graphite/15 pb-4">
                  <span className="font-expanded text-2xl font-black text-graphite/35">0{index + 1}</span>
                  <h3 className="font-expanded text-xl font-black uppercase tracking-[-0.03em]">{group.title}</h3>
                </div>
                <div className="space-y-6">
                  {group.items.map((service) => (
                    <div key={service.title.ru}>
                      <h4 className="font-bold uppercase tracking-wide">{service.title[contentLocale] ?? service.title.ru}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-graphite/75">{service.body[contentLocale] ?? service.body.ru}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage/15 px-4 py-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-graphite/50">{isRu ? "ЛАНДШАФТНЫЙ ДИЗАЙН" : "LANDSCAPE DESIGN"}</p>
            <h2 className="font-expanded text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">{isRu ? "Сначала проект — потом решение о визуализации и стройке" : "Start with the design; add visualization or construction when ready"}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {designPackages.map((item) => (
              <article key={item.title.ru} className={`flex h-full flex-col bg-cream p-6 sm:p-8 ${item.recommended ? "border-2 border-graphite shadow-lg" : "border border-graphite/15"}`}>
                <div className="flex flex-col gap-2 border-b border-graphite/15 pb-5">
                  {item.tag && <span className={`w-fit px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] ${item.recommended ? "bg-graphite text-cream" : "bg-graphite/10 text-graphite/70"}`}>{item.tag[contentLocale] ?? item.tag.ru}</span>}
                  <h3 className="font-expanded text-2xl font-black uppercase tracking-[-0.03em]">{item.title[contentLocale] ?? item.title.ru}</h3>
                  <p className="font-bold text-graphite/75">{item.price[contentLocale] ?? item.price.ru}</p>
                </div>
                <p className="mt-5 leading-relaxed text-graphite/80">{item.description[contentLocale] ?? item.description.ru}</p>
                <p className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-graphite/65">
                  <span className="font-bold uppercase tracking-wide">{isRu ? "Чем полезно: " : "Why it helps: "}</span>
                  {item.why[contentLocale] ?? item.why.ru}
                </p>
                <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-graphite/75">
                  {item.includes.map((point) => <li key={point.ru} className="flex gap-3"><span aria-hidden="true">—</span><span>{point[contentLocale] ?? point.ru}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-graphite/60">{isRu ? "Цены за сотку (100 м²) указаны для участков до 10 соток с исходными данными, достаточными для проектирования. Минимальная стоимость покрывает объём работы даже на небольшом участке. Пакеты 2D и «Рабочий проект» — альтернативные итоговые цены, они не складываются. В цену рабочего проекта входит дизайн сада и покрытий, но не отдельные инженерные системы. GNSS-обмер, дренаж и ливнёвка (от 12 000 ₽), освещение, автополив, ведомости объёмов/материалов и 3D-визуализация рассчитываются отдельно. Итоговый состав и цена фиксируются после брифа." : "Per-sotka (100 m²) rates apply to sites up to 10 sotkas with suitable base information. The minimum fee reflects the design effort even for a small plot. The 2D and Detailed Working Design prices are alternative package totals; they are not added together. The working-design price covers the garden and hardscape design, not separate engineering systems. GNSS site measurement, drainage and stormwater (from ₽12,000), lighting, irrigation, material/quantity schedules and 3D visualization are priced separately. The final scope and price are confirmed after a brief."}</p>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-graphite/50">{isRu ? "ПОДГОТОВКА К РЕАЛИЗАЦИИ" : "PLAN BEFORE YOU BUILD"}</p>
            <h2 className="font-expanded text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">{isRu ? "Расчёт материалов и земляных работ" : "Material takeoffs & earthwork calculations"}</h2>
            <p className="mt-5 leading-relaxed text-graphite/70">{isRu ? "Помогаем понять объёмы и бюджет до заказа материалов и выхода техники. Расчёты можно выполнить по нашему проекту или по предоставленным чертежам другой компании." : "Understand quantities and budget before ordering materials or bringing machinery to site. We can calculate from our design or drawings supplied by another company."}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: isRu ? "Ведомость материалов и предварительная смета" : "Material schedule & preliminary estimate",
                body: isRu ? "Посчитаем объёмы покрытий и оснований, бордюров, грунта, растений и других позиций по согласованным чертежам. В таблице можно сопоставить количества и актуальные ориентировочные цены поставщиков." : "Calculate quantities for paving and sub-bases, kerbs, soil, plants and other items from agreed drawings. The schedule can pair quantities with current indicative supplier prices.",
                why: isRu ? "Упрощает сравнение предложений, закупку по этапам и контроль перерасхода или нехватки материалов." : "Makes it easier to compare quotes, phase purchases and avoid ordering too much or too little.",
              },
              {
                title: isRu ? "Расчёт объёмов выемки и насыпи" : "Cut-and-fill volume calculation",
                body: isRu ? "По существующим и проектным отметкам рассчитаем объём разработки и подсыпки грунта, баланс земляных масс и ориентировочную потребность в вывозе или завозе." : "Using existing and proposed levels, calculate excavation and fill volumes, cut/fill balance, and indicative soil removal or import needs.",
                why: isRu ? "Помогает заранее оценить объём работы экскаватора, логистику грунта и влияние планировки на бюджет." : "Helps estimate excavator workload, soil logistics and the budget impact of grading in advance.",
              },
            ].map((item) => (
              <article key={item.title} className="border border-graphite/15 bg-white/40 p-6 sm:p-8">
                <h3 className="font-expanded text-2xl font-black uppercase tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-graphite/75">{item.body}</p>
                <p className="mt-4 border-l-2 border-sage pl-4 text-sm leading-relaxed text-graphite/65"><span className="font-bold uppercase tracking-wide">{isRu ? "Чем полезно: " : "Why it helps: "}</span>{item.why}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-graphite/60">{isRu ? "Стоимость зависит от состава чертежей и точности исходных данных. Для расчёта земляных масс нужны актуальные данные рельефа и проектные отметки. Смета предварительная: фактические цены материалов, условия участка и объёмы работ могут измениться." : "Pricing depends on drawing scope and the quality of source data. Earthwork calculations require current terrain information and proposed levels. Estimates are preliminary; supplier prices, site conditions and actual quantities may change."}</p>
        </div>
      </section>

      <section className="bg-graphite px-4 py-20 text-cream sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sage">
              {isRu ? "ОБМЕР УЧАСТКА И ВЫНОС ПРОЕКТНЫХ ТОЧЕК" : "SITE MEASUREMENT & DESIGN SET-OUT"}
            </p>
            <h2 className="font-expanded text-4xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
              {isRu ? "Данные участка — точная разбивка — понятный результат" : "Site data, accurate set-out, clear deliverables"}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-cream/70">
              {isRu
                ? "Собираем фактические данные GNSS-приёмником (GPS), обрабатываем измерения и выдаём согласованные материалы в DWG/PDF. Можно заказать отдельный обмер участка, вынос точек по готовому проекту или измерения до засыпки траншеи."
                : "We collect site data with a GNSS receiver (GPS), process the measurements and provide the agreed DWG/PDF files. Book a standalone site measurement, set-out from an existing design or measurements before a trench is backfilled."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { zone: isRu ? "В пределах МКАД" : "Within MKAD", price: "22 000 ₽", enPrice: "₽22,000" },
              { zone: isRu ? "До 30 км за МКАД" : "Up to 30 km outside MKAD", price: "26 000 ₽", enPrice: "₽26,000" },
              { zone: isRu ? "31–60 км за МКАД" : "31–60 km outside MKAD", price: "30 000 ₽", enPrice: "₽30,000" },
              { zone: isRu ? "61–100 км за МКАД" : "61–100 km outside MKAD", price: "36 000 ₽", enPrice: "₽36,000" },
            ].map((item) => (
              <article key={item.zone} className="border border-cream/15 bg-cream/[0.04] p-6">
                <h3 className="text-sm uppercase tracking-wide text-cream/65">{item.zone}</h3>
                <p className="mt-4 font-expanded text-3xl font-black">{isRu ? item.price : item.enPrice}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                {isRu ? "Обмер GNSS-приёмником (GPS) существующих объектов и высот для ландшафтного проекта, до 10 соток." : "GNSS receiver (GPS) measurement of existing features and levels for a landscape project, up to 10 sotkas."}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/60">
            {isRu
              ? "Дополнительная площадь — от 1 500 ₽/сотка. Дальше 100 км — по расчёту. Для выноса точек заказчик предоставляет исходный официальный кадастровый DWG и систему координат. Мы не устанавливаем и не подтверждаем кадастровые границы."
              : "Additional area: from ₽1,500 per sotka. Beyond 100 km: quoted individually. For set-out, the client supplies the original official cadastral DWG and coordinate system. We do not establish or certify cadastral boundaries."}
          </p>
          <article className="mt-10 grid gap-5 border border-cream/20 bg-cream/[0.04] p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <h3 className="font-expanded text-2xl font-black uppercase tracking-[-0.03em]">
                {isRu ? "Вынос точек по готовому проекту" : "Set-out from an existing design"}
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-cream/70">
                {isRu
                  ? "Если проект подготовила ваша строительная компания или другой проектировщик, вынесем GNSS-приёмником (GPS) до 10 согласованных точек по предоставленному DWG на участке до 10 соток. Это помогает перенести готовое решение на местность без разметки «на глаз» и заказа дублирующего проекта. Сначала проверим DWG и систему координат; выезд за пределы МКАД рассчитывается отдельно."
                  : "If your contractor or another designer prepared the plan, we can set out up to 10 agreed points with a GNSS receiver (GPS) from the supplied DWG on plots up to 10 sotkas. This transfers the existing design to the site without setting points by eye or commissioning a duplicate plan. We review the DWG and coordinate system first; travel outside MKAD is quoted separately."}
              </p>
            </div>
            <p className="whitespace-nowrap font-expanded text-2xl font-black">{isRu ? "от 12 000 ₽" : "from ₽12,000"}</p>
          </article>
          <div className="mt-8 grid gap-6 border-t border-cream/15 pt-6 md:grid-cols-3">
            {[
              { title: isRu ? "Съёмка участка для проекта" : "Site survey for design", body: isRu ? "GNSS-приёмником (GPS) фиксируем рельеф, существующие объекты и характерные точки для проектирования благоустройства." : "Use a GNSS receiver (GPS) to capture terrain, existing features and key points for landscape design." },
              { title: isRu ? "Отметки и точки для строительства" : "Levels and construction points", body: isRu ? "Вынос GNSS-приёмником (GPS) согласованных отметок и мест будущих объектов: дома, бани, септика, колодца и инженерных узлов — по исходному проекту." : "Set out agreed levels and locations with a GNSS receiver (GPS), including a house, sauna, septic system, well or utility points, from the supplied design." },
              { title: isRu ? "Фактическая схема после монтажа" : "As-built record after installation", body: isRu ? "GNSS-приёмником (GPS) фиксируем координаты и фактические высоты элементов до того, как их закроют грунтом или конструкциями." : "Record coordinates and measured elevations with a GNSS receiver (GPS) before features are covered by soil or construction." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage/15 px-4 py-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-graphite/55">
              {isRu ? "ДРЕНАЖ — ВЫБЕРИТЕ НУЖНЫЙ ОБЪЁМ" : "DRAINAGE — CHOOSE THE SCOPE YOU NEED"}
            </p>
            <h2 className="font-expanded text-4xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-5xl">
              {isRu ? "От готового проекта до исполнительной схемы" : "From a design to an as-built record"}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-graphite/75">
              {isRu
                ? "Если у вас уже есть пригодный для работы DWG от строительной компании, после проверки файла и системы координат можно заказать только вынос и GNSS-измерения — не оплачивать разработку дублирующего плана. До засыпки мы фиксируем видимые участки трассы, сверяем измеренные точки с проектом и передаём схему для архива, будущего ремонта или строительства."
                : "If you already have a usable DWG from your contractor, we can check the file and coordinate system, then provide only set-out and GNSS measurements—so you do not pay for a duplicate design. Before backfill, we record the visible route, compare measured points with the plan and provide a record for your files, future repairs or construction."}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {drainagePackages.map((item) => (
              <article key={item.title.ru} className="flex h-full flex-col border border-graphite/15 bg-cream p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="max-w-md font-expanded text-2xl font-black uppercase leading-tight tracking-[-0.03em]">
                    {item.title[contentLocale] ?? item.title.ru}
                  </h3>
                  <p className="whitespace-nowrap text-lg font-bold text-graphite/75">
                    {item.price[contentLocale] ?? item.price.ru}
                  </p>
                </div>
                <p className="mt-4 leading-relaxed text-graphite/75">
                  {item.description[contentLocale] ?? item.description.ru}
                </p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-graphite/15 pt-5 text-sm leading-relaxed text-graphite/80">
                  {item.includes.map((point) => (
                    <li key={point.ru} className="flex gap-3">
                      <span aria-hidden="true" className="text-graphite/45">—</span>
                      <span>{point[contentLocale] ?? point.ru}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 grid gap-6 border-t border-graphite/20 pt-6 text-sm leading-relaxed text-graphite/70 md:grid-cols-2">
            <p>
              {isRu
                ? "Измеренная исполнительная схема уменьшает неопределённость: помогает сравнить фактические координаты и высоты с проектом, выявить расхождения до засыпки и сохранить расположение труб для будущих работ. Это может предотвратить повторное вскрытие грунта и оплату повторного проектирования. Траншея должна оставаться открытой."
                : "A measured as-built record reduces uncertainty: it helps compare actual coordinates and elevations with the plan, identify differences before backfill and preserve pipe locations for future work. This can help avoid reopening the ground or paying to recreate the design. Trenches must remain open."}
            </p>
            <p>
              {isRu
                ? "Измерения документируют координаты и высоты доступных точек; достижимая точность зависит от условий приёма GNSS/RTK и корректности исходной системы координат. Это помогает проверить положение и отметки труб, но не заменяет постоянное руководство бригадой или проверку всех скрытых характеристик монтажа. Выезд за МКАД рассчитывается отдельно."
                : "Measurements document coordinates and elevations at accessible points; achievable accuracy depends on GNSS/RTK reception and the supplied coordinate reference. This helps check pipe positions and levels, but does not replace ongoing crew management or verify every hidden aspect of installation. Travel outside MKAD is quoted separately."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-20 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-graphite/50">{isRu ? "СТРОИТЕЛЬСТВО И РЕАЛИЗАЦИЯ" : "CONSTRUCTION & DELIVERY"}</p>
            <h2 className="font-expanded text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">{isRu ? "Воплощаем согласованный проект на участке" : "Build the approved design on site"}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { title: isRu ? "Подготовка и земляные работы" : "Preparation & earthworks", body: isRu ? "Подготовка основания, разработка грунта, планировка рельефа и вынос проектных отметок; земляные работы с привлечением экскаватора." : "Base preparation, excavation, grading and transfer of design levels, including excavator work." },
              { title: isRu ? "Мощение и благоустройство" : "Paving & landscaping", body: isRu ? "Укладка брусчатки и бордюров, подготовительные слои, посадки и другие работы по согласованному проекту. Авторский надзор можно заказать отдельно." : "Paving and kerbs, sub-base preparation, planting and other work from the agreed design. Design supervision is available separately." },
            ].map((item) => (
              <article key={item.title} className="border border-graphite/15 p-6 sm:p-8">
                <h3 className="font-expanded text-2xl font-black uppercase tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-graphite/75">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-graphite/60">
            {isRu ? "Стоимость строительства рассчитывается после осмотра участка и согласования объёмов. Аренда техники, инструмента, расходные материалы и доставка учитываются в смете отдельно." : "Construction is quoted after reviewing the site and confirming quantities. Equipment and tool rental, consumables and delivery are itemized in the estimate."}
          </p>
        </div>
      </section>

      <section className="bg-sage/15 px-4 py-16 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-6 border border-graphite/15 bg-cream p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-graphite/55">{isRu ? "РАЗОВАЯ ПОМОЩЬ НА ОБЪЕКТЕ" : "ONE-OFF ON-SITE SUPPORT"}</p>
            <h2 className="font-expanded text-3xl font-black uppercase tracking-[-0.03em]">{isRu ? "Консультация по проекту и ходу работ" : "Project and construction-stage consultation"}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-graphite/75">
              {isRu
                ? "Выезд до 2 часов в пределах МКАД: разберём вопросы заказчика и бригады по ландшафтному проекту, отметкам, покрытиям и последовательности работ; осмотрим видимые выполненные работы и дадим рекомендации. После выезда — краткое резюме с фото. Не является постоянным управлением бригадой или техническим надзором. За МКАД транспорт оплачивается отдельно."
                : "A visit of up to 2 hours within MKAD to discuss the landscape design, levels, paving and work sequence with you and your crew; review visible completed work and give recommendations. Includes a brief photo summary. This is not ongoing crew management or technical supervision. Travel outside MKAD is extra."}
            </p>
          </div>
          <p className="whitespace-nowrap font-expanded text-2xl font-black">{isRu ? "от 15 000 ₽ / выезд" : "from ₽15,000 / visit"}</p>
        </div>
      </section>

      <section className="bg-graphite px-4 py-20 text-cream sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sage">{isRu ? "ПОЛЕЗНО ЗНАТЬ" : "GOOD TO KNOW"}</p>
            <h2 className="font-expanded text-4xl font-black uppercase tracking-[-0.04em] sm:text-5xl">{isRu ? "Вопросы о проектировании и работах" : "Planning & construction guide"}</h2>
            <p className="mt-5 leading-relaxed text-cream/70">{isRu ? "Короткие ответы помогут выбрать правильный момент и понять, какие исходные данные понадобятся." : "Quick answers to help you choose the right time to start and understand what information is needed."}</p>
          </div>
          <div className="divide-y divide-cream/15 border-y border-cream/15">
            {serviceFaq.map((item) => (
              <details key={item.question.ru} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold sm:text-lg">
                  <span>{item.question[contentLocale] ?? item.question.ru}</span>
                  <span aria-hidden="true" className="shrink-0 text-2xl text-sage transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-4xl pt-4 leading-relaxed text-cream/70">{item.answer[contentLocale] ?? item.answer.ru}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 text-graphite sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-6 border-t border-graphite/20 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-expanded text-2xl font-black uppercase tracking-[-0.03em]">
              {isRu ? "Нужен отдельный объём работ?" : "Need a tailored scope?"}
            </p>
            <p className="mt-2 max-w-2xl text-graphite/70">
              {isRu ? "Опишите участок и результат, который хотите получить — подготовим состав работ и точный расчёт." : "Tell us about the site and the result you need. We’ll propose a scope and provide a detailed quote."}
            </p>
          </div>
          <a href={localePath("/contacts")} className="inline-flex min-h-12 items-center justify-center bg-graphite px-7 py-3 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-graphite/80">
            {isRu ? "Обсудить задачу" : "Discuss your project"}
          </a>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden bg-graphite">
        <img
          src={assets.studio}
          alt={t("nav.services")}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
      </section>
    </>
  );
}
