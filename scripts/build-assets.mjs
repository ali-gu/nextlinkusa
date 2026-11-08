/**
 * Derives every static image the site ships from the two supplied brand files.
 * Re-run with `npm run assets` after replacing anything in assets/source/.
 */
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "assets", "source");
const BRAND = path.join(ROOT, "public", "brand");
const IMG = path.join(ROOT, "public", "images");
const APP = path.join(ROOT, "src", "app");

const LOGO = path.join(SRC, "nextlink-logo.png");
const COVER = path.join(SRC, "company-profile-cover.png");

/**
 * Widths every raster asset is emitted at. Must stay in step with
 * `images.deviceSizes` / `images.imageSizes` in next.config.ts, because the
 * static export has no optimizer to fall back on.
 */
const WIDTH_LADDER = [128, 192, 256, 384, 640, 960, 1280, 1600];

/** Filled in as variants are written, then dumped for the image loader. */
const manifest = {};

/**
 * Emits WebP variants of `file` at every ladder width up to its natural size,
 * named `<base>-<width>.webp` beside it, and records them in the manifest.
 */
async function emitVariants(file, publicPath) {
  const image = sharp(file);
  const { width: natural, hasAlpha } = await image.metadata();
  const widths = WIDTH_LADDER.filter((w) => w < natural);
  if (widths.at(-1) !== natural) widths.push(natural);

  const dir = path.dirname(file);
  const base = path.basename(file, path.extname(file));

  for (const width of widths) {
    await sharp(file)
      .resize(width, null, { kernel: "lanczos3", withoutEnlargement: true })
      .webp({ quality: hasAlpha ? 90 : 78, effort: 6, alphaQuality: 100 })
      .toFile(path.join(dir, `${base}-${width}.webp`));
  }

  manifest[publicPath] = widths;
}

/* ---------------------------------------------------------------- helpers */

/**
 * The supplied logo sits on flat white. Keying it out keeps the mark usable on
 * tinted sections: fully-white pixels drop to alpha 0, near-white pixels keep a
 * proportional alpha and get un-multiplied so the glow does not turn milky.
 */
async function keyOutWhite(file, { low = 236, high = 252 } = {}) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const min = Math.min(r, g, b);
    let a = 1;
    if (min >= high) a = 0;
    else if (min > low) a = (high - min) / (high - low);

    if (a <= 0) {
      out[i] = out[i + 1] = out[i + 2] = out[i + 3] = 0;
      continue;
    }
    if (a < 1) {
      // Reverse the composite against white so edges stay saturated.
      out[i] = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - a)) / a)));
      out[i + 1] = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - a)) / a)));
      out[i + 2] = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - a)) / a)));
    } else {
      out[i] = r; out[i + 1] = g; out[i + 2] = b;
    }
    out[i + 3] = Math.round(a * 255 * (data[i + 3] / 255));
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
}

const tile = (crop, width, height, file, quality = 82) =>
  sharp(COVER)
    .extract(crop)
    .resize(width, height, { fit: "cover", kernel: "lanczos3" })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toFile(path.join(IMG, file));

/* ------------------------------------------------------------------- logo */

async function buildLogo() {
  const keyed = await keyOutWhite(LOGO);
  const trimmed = await keyed
    .trim({ threshold: 6 })
    .png({ compressionLevel: 9, palette: true, quality: 92 })
    .toBuffer();

  await sharp(trimmed).toFile(path.join(BRAND, "nextlink-logo.png"));
  return trimmed;
}

/* ------------------------------------------------------------------ icons */

async function buildIcons() {
  // The ribbon "N" device holds up at 16px; the globe lockup turns to mush.
  const mark = await (await keyOutWhite(COVER, { low: 198, high: 226 }))
    .extract({ left: 168, top: 28, width: 352, height: 214 })
    .trim({ threshold: 8 })
    .png()
    .toBuffer();

  const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

  async function square(size, padRatio, bg, file) {
    const pad = Math.round(size * padRatio);
    const inner = await sharp(mark)
      .resize(size - pad * 2, size - pad * 2, { fit: "inside", background: transparent })
      .toBuffer();
    const { width, height } = await sharp(inner).metadata();

    return sharp({ create: { width: size, height: size, channels: 4, background: bg } })
      .composite([
        {
          input: inner,
          left: Math.round((size - width) / 2),
          top: Math.round((size - height) / 2),
        },
      ])
      .png({ compressionLevel: 9 })
      .toFile(file);
  }

  await square(512, 0.06, transparent, path.join(APP, "icon.png"));
  await square(512, 0.06, transparent, path.join(BRAND, "icon-512.png"));
  await square(192, 0.05, transparent, path.join(BRAND, "icon-192.png"));
  // iOS flattens alpha onto black, so bake the brand white in.
  await square(180, 0.12, { r: 255, g: 255, b: 255, alpha: 1 }, path.join(APP, "apple-icon.png"));
}

/* ----------------------------------------------------------------- photos */

async function buildPhotos() {
  await tile({ left: 672, top: 0, width: 864, height: 700 }, 1296, 1050, "hero-collage.jpg", 80);
  await tile({ left: 700, top: 60, width: 390, height: 470 }, 780, 940, "riyadh-skyline.jpg");
  await tile({ left: 1245, top: 15, width: 280, height: 300 }, 840, 900, "telecom-tower.jpg");
  await tile({ left: 1215, top: 400, width: 310, height: 190 }, 930, 570, "fiber-optics.jpg");
  await tile({ left: 1200, top: 625, width: 330, height: 150 }, 990, 450, "offshore-cable-ship.jpg");
  await tile({ left: 672, top: 0, width: 864, height: 460 }, 1728, 920, "skyline-wide.jpg", 78);
}

/* -------------------------------------------------------- social previews */

async function buildSocial() {
  const W = 1200;
  const H = 630;

  const backdrop = await sharp(COVER)
    .extract({ left: 672, top: 0, width: 864, height: 560 })
    .resize(W, H, { fit: "cover", position: "right top" })
    .toBuffer();

  const scrim = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0.35">
      <stop offset="0%" stop-color="#03152B" stop-opacity="0.985"/>
      <stop offset="54%" stop-color="#07305C" stop-opacity="0.93"/>
      <stop offset="100%" stop-color="#07305C" stop-opacity="0.40"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="0" y="${H - 9}" width="${W}" height="9" fill="#C8102E"/>
  <rect x="0" y="${H - 9}" width="${Math.round(W * 0.58)}" height="9" fill="#1AA7EC"/>
</svg>`);

  const copy = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .brand { font: 700 44px -apple-system, "Helvetica Neue", Arial, sans-serif; letter-spacing: -1.2px; }
    .tag   { font: 600 13px -apple-system, "Helvetica Neue", Arial, sans-serif; fill: #8FB8DC; letter-spacing: 5px; }
    .kick  { font: 700 18px -apple-system, "Helvetica Neue", Arial, sans-serif; fill: #6FD0FF; letter-spacing: 3.6px; }
    .head  { font: 700 53px -apple-system, "Helvetica Neue", Arial, sans-serif; fill: #FFFFFF; letter-spacing: -1.5px; }
    .sub   { font: 400 26px -apple-system, "Helvetica Neue", Arial, sans-serif; fill: #A9CBEA; }
  </style>
  <text class="brand" x="72" y="112"><tspan fill="#FFFFFF">NextLink</tspan><tspan fill="#E8313F">USA</tspan></text>
  <text class="tag" x="74" y="142">CONNECT · INNOVATE · EMPOWER</text>

  <rect x="72" y="196" width="58" height="4" fill="#1AA7EC"/>
  <text class="kick" x="72" y="252">TELECOM · NETWORKS · CRITICAL INFRASTRUCTURE</text>
  <text class="head" x="72" y="326">American engineering for telecom</text>
  <text class="head" x="72" y="388">and critical infrastructure</text>
  <text class="sub" x="72" y="444">Design, installation, commissioning and support across the Gulf.</text>
</svg>`);

  await sharp(backdrop)
    .composite([{ input: scrim }, { input: copy }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(IMG, "og-default.jpg"));
}

/* ---------------------------------------------------------------- variants */

/**
 * Everything `next/image` renders needs a WebP ladder, because the static
 * export cannot resize at request time. The social card is excluded: it is
 * only ever fetched whole by a scraper.
 */
async function buildResponsiveVariants() {
  const targets = [
    [path.join(BRAND, "nextlink-logo.png"), "/brand/nextlink-logo.png"],
    ...[
      "hero-collage.jpg",
      "riyadh-skyline.jpg",
      "telecom-tower.jpg",
      "fiber-optics.jpg",
      "offshore-cable-ship.jpg",
      "skyline-wide.jpg",
    ].map((name) => [path.join(IMG, name), `/images/${name}`]),
  ];

  for (const [file, publicPath] of targets) {
    await emitVariants(file, publicPath);
  }

  await writeFile(
    path.join(ROOT, "src", "lib", "image-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
}

/* -------------------------------------------------------------------- run */

for (const dir of [BRAND, IMG]) await mkdir(dir, { recursive: true });

await buildLogo();
await buildIcons();
await buildPhotos();
await buildSocial();
await buildResponsiveVariants();

const variantCount = Object.values(manifest).reduce((n, w) => n + w.length, 0);
console.log(
  `assets: brand lockups, icons, photography, social preview and ` +
    `${variantCount} responsive WebP variants`,
);
