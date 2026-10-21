export function resolveRoute(hash, projects) {
  if (!hash.startsWith("#/"))
    return { type: "home", anchor: hash.slice(1) || "home" };
  const project = projects.find((item) => hash === "#/work/" + item.slug);
  return project ? { type: "project", project } : { type: "not-found" };
}
