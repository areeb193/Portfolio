import assert from "node:assert/strict";
import test from "node:test";
import { resolveRoute } from "./navigation.js";
import { PROJECTS } from "../constants/index.js";

test("section anchors and an empty hash stay on the homepage", () => {
  assert.deepEqual(resolveRoute("", PROJECTS), {
    type: "home",
    anchor: "home",
  });
  assert.deepEqual(resolveRoute("#experience", PROJECTS), {
    type: "home",
    anchor: "experience",
  });
});

test("every featured project has a distinct shareable route", () => {
  assert.equal(
    new Set(PROJECTS.map((project) => project.slug)).size,
    PROJECTS.length,
  );
  for (const project of PROJECTS) {
    assert.deepEqual(resolveRoute("#/work/" + project.slug, PROJECTS), {
      type: "project",
      project,
    });
  }
});

test("unknown and malformed project URLs show the recovery page", () => {
  for (const hash of [
    "#/work/missing",
    "#/work/%",
    "#/work/",
    "#/work/libera/extra",
  ]) {
    assert.deepEqual(resolveRoute(hash, PROJECTS), { type: "not-found" });
  }
});
