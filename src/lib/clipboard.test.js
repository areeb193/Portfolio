import assert from "node:assert/strict";
import test from "node:test";
import { copyText } from "./clipboard.js";

test("reports success only after the clipboard write finishes", async () => {
  let resolve;
  let settled = false;
  const clipboard = {
    writeText: (value) => {
      assert.equal(value, "hello@example.com");
      return new Promise((done) => {
        resolve = done;
      });
    },
  };
  const pending = copyText("hello@example.com", clipboard).then((value) => {
    settled = true;
    return value;
  });
  await Promise.resolve();
  assert.equal(settled, false);
  resolve();
  assert.equal(await pending, true);
});

test("reports failure when clipboard permissions are denied", async () => {
  assert.equal(
    await copyText("hello", {
      writeText: async () => {
        throw new Error("NotAllowedError");
      },
    }),
    false,
  );
});

test("reports failure when clipboard is unsupported", async () => {
  assert.equal(await copyText("hello", null), false);
  assert.equal(await copyText("hello", {}), false);
});
