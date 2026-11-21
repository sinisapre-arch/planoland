import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import { assets } from "../data/assets";
import { team } from "../data/content";
import { useLang } from "../i18n/LangContext";
import { useT } from "../i18n/useT";

export default function Team() {
  const t = useT();
  const { contentLocale } = useLang();

  return (
    <>
      <Seo title={t("nav.team")} description={t("team.lede")} />
      <PageHeader
        eyebrow={t("team.eyebrow")}
        title={t("team.title")}
        lede={t("team.lede")}
        tone="cream"
      />

      <section className="bg-cream px-4 pb-20 text-graphite sm:px-6 lg:px-10">
        {/* One founder: the portrait stands beside his own text instead of
            being repeated on a member card. */}
        <div className="mx-auto grid max-w-[1760px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <figure className="relative overflow-hidden bg-graphite">
            <img
              src={assets.studio}
              alt={t("studio.alt")}
              className="aspect-[3/4] w-full object-cover object-top"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-cream">
              <p className="max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.18em]">
                {t("studio.caption")}
              </p>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center gap-10">
            {team.map((member) => {
              const name = member.name[contentLocale] ?? member.name.ru;
              const role = member.role[contentLocale] ?? member.role.ru;
              const bio = member.bio[contentLocale] ?? member.bio.ru;
              return (
                <div key={member.name.ru}>
                  <h2 className="font-expanded text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    {name}
                  </h2>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                    {role}
                  </p>
                  <p className="mt-7 max-w-2xl text-lg leading-relaxed text-graphite/80">
                    {bio}
                  </p>
                </div>
              );
            })}

            <div className="border-t border-graphite/20 pt-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-graphite/55">
                {t("team.studioNoteTitle")}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite/80">
                {t("team.studioNote")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
