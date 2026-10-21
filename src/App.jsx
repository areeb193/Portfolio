import { useEffect, useRef, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Project from "./components/Project";
import Contact from "./components/Contact";
import CaseStudy from "./components/CaseStudy";
import { PROJECTS } from "./constants";
import { resolveRoute } from "./lib/navigation";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const previousRoute = useRef(null);
  const route = resolveRoute(hash, PROJECTS);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const isCase = hash.startsWith("#/");
    const resolved = resolveRoute(hash, PROJECTS);
    document.title =
      resolved.type === "project"
        ? resolved.project.title + " — Areeb Zakir"
        : resolved.type === "not-found"
          ? "Project not found — Areeb Zakir"
          : "Areeb Zakir — Software Engineer";
    const target = isCase
      ? document.getElementById("case-heading")
      : document.getElementById(hash.slice(1) || "home");
    if (target && (hash || previousRoute.current)) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
      target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }
    previousRoute.current = isCase;
  }, [hash]);

  return (
    <>
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main");
          main?.focus({ preventScroll: true });
          main?.scrollIntoView({ behavior: "instant" });
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex="-1">
        {route.type === "home" ? (
          <>
            <Hero />
            <Project />
            <Experiences />
            <Technologies />
            <About />
            <Contact />
          </>
        ) : route.type === "project" ? (
          <CaseStudy project={route.project} />
        ) : (
          <section className="container not-found">
            <p className="eyebrow">Project not found</p>
            <h1 id="case-heading" tabIndex="-1">
              Let’s get back
              <br />
              to the work.
            </h1>
            <p>This case study isn’t available at this address.</p>
            <a className="button button-primary" href="#work">
              View selected work
            </a>
          </section>
        )}
      </main>
      <footer className="site-footer container">
        <a className="footer-name" href="#home">
          Areeb Zakir<span>Software engineer · Lahore, Pakistan</span>
        </a>
        <span>© {new Date().getFullYear()}</span>
        <a className="back-top" href="#home">
          Back to top
          <FiArrowUp aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
