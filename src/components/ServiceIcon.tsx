/**
 * Line icons for the Services page groups.
 *
 * Drawn on a shared 32x32 grid with a 1.6 stroke, round caps and round joins,
 * so they sit together as one family. They inherit `currentColor` and scale
 * with the font size of whatever they are placed next to.
 */

export type ServiceIconName =
  | "survey"
  | "design"
  | "drainage"
  | "quantities"
  | "construction"
  | "care";

type Props = {
  name: ServiceIconName;
  className?: string;
};

export default function ServiceIcon({ name, className }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {name === "survey" && (
        <>
          {/* Surveyor's tripod with a level on top */}
          <path d="M16 13 6 27" />
          <path d="M16 13l10 14" />
          <path d="M11.6 19.6h8.8" />
          <rect x="12" y="6.5" width="8" height="5" rx="1.5" />
          <path d="M16 11.5V13" />
        </>
      )}

      {name === "design" && (
        <>
          {/* Drawing sheet with a garden plan on it */}
          <path d="M6 4.5h13l7 7v16H6z" />
          <path d="M19 4.5v7h7" />
          <path d="M10 21.5c3.5-5.5 7.5-1.5 11-8" />
          <circle cx="21.5" cy="13.5" r="1.8" />
        </>
      )}

      {name === "drainage" && (
        <>
          {/* Pipe run with a drop */}
          <path d="M8 4v13a6 6 0 0 0 6 6h3" />
          <path d="M25 19c1.5 2.2 2.5 3.6 2.5 4.6a2.5 2.5 0 1 1-5 0c0-1 1-2.4 2.5-4.6z" />
        </>
      )}

      {name === "quantities" && (
        <>
          {/* Calculator */}
          <rect x="8" y="3.5" width="16" height="25" rx="2.5" />
          <rect x="11" y="7" width="10" height="5" rx="1" />
          <circle cx="12.5" cy="17" r="1.2" />
          <circle cx="16" cy="17" r="1.2" />
          <circle cx="19.5" cy="17" r="1.2" />
          <circle cx="12.5" cy="22.5" r="1.2" />
          <circle cx="16" cy="22.5" r="1.2" />
          <circle cx="19.5" cy="22.5" r="1.2" />
        </>
      )}

      {name === "construction" && (
        <>
          {/* Hard hat with a check mark */}
          <path d="M9 19a7 7 0 0 1 14 0" />
          <path d="M6 19h20" />
          <path d="M16 5.5V12" />
          <path d="M11.5 25.5l3 3 6.5-6.5" />
        </>
      )}

      {name === "care" && (
        <>
          {/* Leaf */}
          <path d="M27 5c0 11-6 21-13 21a8 8 0 0 1-8-8C6 12 15 5 27 5z" />
          <path d="M14 26C14 17 19 10 27 5" />
        </>
      )}
    </svg>
  );
}
