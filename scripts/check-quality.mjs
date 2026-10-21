import assert from "node:assert/strict";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

function luminance(hex) {
  const rgb = hex.match(/[a-f0-9]{2}/gi).map((channel) => {
    const value = parseInt(channel, 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
}
const pairs = [
  ["Primary text / page", "f4f2ed", "0b0f14", 4.5],
  ["Secondary text / elevated surface", "b5bec9", "1a2430", 4.5],
  ["Accent links / card", "8bbeff", "131a23", 4.5],
  ["Primary button", "0b0f14", "8bbeff", 4.5],
  ["About heading accent", "9aabc0", "0b0f14", 4.5],
  ["Technology tags", "bdcddd", "1b2734", 4.5],
  ["Contribution text", "cbd3dd", "131a23", 4.5],
  ["Production stage", "b8d2ed", "131a23", 4.5],
  ["Prototype stage", "d7c9a8", "131a23", 4.5],
  ["Contact secondary text", "b5bec9", "121b27", 4.5],
  ["Control border / elevated surface", "718197", "1a2430", 3],
  ["Focus outline / card", "b9d8ff", "131a23", 3],
];
const contrast = pairs.map(([name, fg, bg, minimum]) => {
  const a = luminance(fg),
    b = luminance(bg);
  const ratio = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  assert.ok(ratio >= minimum, name + " has insufficient contrast");
  return {
    name,
    foreground: "#" + fg,
    background: "#" + bg,
    ratio: +ratio.toFixed(2),
    minimum,
    pass: true,
  };
});
async function bundleStats(directory) {
  const names = (await readdir(directory)).filter((name) =>
    /\.(js|css)$/.test(name),
  );
  const rows = [];
  for (const name of names) {
    const bytes = await readFile(directory + "/" + name);
    rows.push({
      name,
      type: name.split(".").pop(),
      bytes: bytes.length,
      gzipBytes: gzipSync(bytes).length,
    });
  }
  return rows;
}
for (const name of ["inter", "manrope"]) {
  const font = await readFile("public/fonts/" + name + "-latin.woff2");
  assert.equal(font.toString("ascii", 0, 4), "wOF2", "Real WOFF2 font");
}
const production = await bundleStats("dist/assets");
assert.ok(
  production
    .filter((row) => row.type === "js")
    .reduce((sum, row) => sum + row.gzipBytes, 0) <= 250000,
  "Initial JS budget",
);
let baseline = null;
try {
  baseline = await bundleStats(".qa-baseline/assets");
} catch {
  /* The baseline is a local capture and is intentionally not required in a fresh clone. */
}
const report = {
  environment: `${process.platform}, Node ${process.versions.node}; Vite production output; gzipSync default settings`,
  method:
    "Static token contrast and compressed build-size comparison. No browser layout, Lighthouse, or field Web Vitals claims.",
  contrast,
  baseline,
  production,
  limitations: [
    "Browser responsive/keyboard checks blocked by approval review",
    "No field Core Web Vitals or Lighthouse run",
    "Approved resume PDFs unavailable",
  ],
};
await mkdir("evidence", { recursive: true });
await writeFile(
  "evidence/quality-check.json",
  JSON.stringify(report, null, 2) + "\n",
);
console.log(
  "PASS: 12 contrast pairs; WOFF2 fonts; production JavaScript below 250 kB gzip.",
);
console.log(JSON.stringify({ baseline, production }, null, 2));
