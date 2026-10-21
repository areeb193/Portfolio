import assert from "node:assert/strict";
import { access, mkdir, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const originalWindow = globalThis.window;
const results = [];
try {
  const { default: App } = await vite.ssrLoadModule("/src/App.jsx");
  const { PROJECTS } = await vite.ssrLoadModule("/src/constants/index.js");
  const hashes = [
    "",
    ...PROJECTS.map((project) => "#/work/" + project.slug),
    "#/work/missing",
  ];
  const homepageIds = new Set();
  for (const hash of hashes) {
    globalThis.window = { location: { hash } };
    const html = renderToStaticMarkup(React.createElement(App));
    assert.equal((html.match(/<h1\b/g) || []).length, 1, "One H1: " + hash);
    assert.equal(
      (html.match(/<main\b/g) || []).length,
      1,
      "One main landmark: " + hash,
    );
    assert.ok(!html.includes('href="#"'), "No placeholder links");
    assert.ok(
      !/gamil\.com|Terraform|Ansible|Azure|AKS|85A\.New/i.test(html),
      "No stale positioning or address",
    );
    if (!hash) {
      for (const match of html.matchAll(/\bid="([^"]+)"/g))
        homepageIds.add(match[1]);
      assert.ok(html.includes("Mindravel Interactive"));
      assert.ok(html.includes("Aug 2026"));
      assert.ok(html.includes("mailto:areebzakir1114@gmail.com"));
    }
    for (const match of html.matchAll(/\bhref="([^"]+)"/g)) {
      const href = match[1];
      if (href.startsWith("#/"))
        assert.ok(hashes.includes(href), "Case link resolves: " + href);
      else if (href.startsWith("#"))
        assert.ok(homepageIds.has(href.slice(1)), "Anchor exists: " + href);
      else
        assert.ok(
          /^(https:\/\/|mailto:|tel:)/.test(href),
          "Real link protocol: " + href,
        );
    }
    for (const match of html.matchAll(/<img\b[^>]*>/g)) {
      assert.ok(/\balt=/.test(match[0]), "Image has alt attribute");
      const source = match[0].match(/\bsrc="([^"]+)"/)[1];
      await access("public" + source);
    }
    results.push({
      route: hash || "/",
      status: "pass",
      h1: 1,
      links: "resolved",
      images: "present",
    });
  }
  await mkdir("evidence", { recursive: true });
  await writeFile(
    "evidence/render-check.json",
    JSON.stringify(
      { method: "React server render; not a browser or visual check", results },
      null,
      2,
    ) + "\n",
  );
  console.log(
    "PASS: homepage, three case studies, and missing-project recovery. One H1 and main landmark per route; internal links resolve; assets exist.",
  );
} finally {
  globalThis.window = originalWindow;
  await vite.close();
}
