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
        {/* The founders portrait is a single photograph of both people, so it
            is shown once here rather than duplicated on every member card. */}
        <div className="mx-auto mb-12 max-w-[1760px]">
          <figure className="relative overflow-hidden bg-graphite">
            <img
              src={assets.studio}
              alt={t("studio.alt")}
              className="max-h-[70vh] w-full object-cover object-top"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-cream">
              <p className="max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.18em]">
                {t("studio.caption")}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto grid max-w-[1760px] gap-6 sm:grid-cols-2">
          {team.map((member) => {
            const name = member.name[contentLocale] ?? member.name.ru;
            const role = member.role[contentLocale] ?? member.role.ru;
            const bio = member.bio[contentLocale] ?? member.bio.ru;
            return (
              <article
                key={member.name.ru}
                className="bg-graphite/5 p-6 sm:p-8"
              >
                <h3 className="font-expanded text-3xl font-black uppercase leading-none tracking-[-0.04em]">
                  {name}
                </h3>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite/65">
                  {role}
                </p>
                <p className="mt-5 text-base leading-relaxed text-graphite/80">
                  {bio}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
