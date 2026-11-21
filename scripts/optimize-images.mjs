// Image optimization. Converts the raw dropped-in PNGs to WebP at
// sensible web sizes. Run with: node scripts/optimize-images.mjs
//
// Studio: founder portrait, downscale to ~1200px wide. Quality 82.
// (The hero image is a one-off asset and is not touched by this script.)
import sharp from "sharp";
import { readFile, stat } from "node:fs/promises";

const QUALITY_STUDIO = 82;

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

/** Downscale to a max width (never enlarges) and write a webp. */
async function convert({ in: input, out: output, maxWidth, quality }) {
  if (!(await exists(input))) {
    console.log(`skip: ${input} not found`);
    return;
  }
  const data = await readFile(input);
  const meta = await sharp(data).metadata();
  console.log(`${input} -> ${output}`);
  console.log(
    `  source: ${meta.width}x${meta.height}, ${(data.length / 1024 / 1024).toFixed(2)} MB`,
  );

  const pipeline =
    meta.width > maxWidth
      ? sharp(data).resize({ width: maxWidth, withoutEnlargement: true })
      : sharp(data);

  await pipeline.webp({ quality }).toFile(output);
  const result = await sharp(await readFile(output)).metadata();
  const size = (await readFile(output)).length;
  console.log(
    `  output: ${result.width}x${result.height}, ${(size / 1024).toFixed(0)} KB`,
  );
}

async function run() {
  // The raw photo is archived outside the repo so it does not ship with every
  // build. Point PLANOLAND_STUDIO_SOURCE at it (or at a local copy of
  // public/images/studio/FounderPhoto_Website.png) before running.
  const studioSource =
    process.env.PLANOLAND_STUDIO_SOURCE ??
    "C:/Users/Sinisa/Documents/MiniMaxAI Workfolder/archive/planoland-studio-source/FounderPhoto_Website.png";

  await convert({
    in: studioSource,
    out: "public/images/studio/founder-sinisa.webp",
    maxWidth: 1200,
    quality: QUALITY_STUDIO,
  });

  console.log("\n✅ Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
