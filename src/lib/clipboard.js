export async function copyText(
  text,
  clipboard = globalThis.navigator?.clipboard,
) {
  if (!clipboard?.writeText) return false;
  try {
    await clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
