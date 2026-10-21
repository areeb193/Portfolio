import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { CONTACT } from "../constants";
import ResumeLink from "./ResumeLink";

export default function Hero() {
  return (
    <section
      className="hero container"
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="hero-copy">
        <div className="current-role">
          <span className="status-dot" />
          <span>
            Associate Software Engineer <span className="role-divider">/</span>{" "}
            <strong>Mindravel Interactive</strong>
          </span>
        </div>
        <h1 id="hero-heading">
          I build the systems behind <span>better digital products.</span>
        </h1>
        <p className="hero-description">
          I’m Areeb Zakir, a software engineer in Lahore building backend
          services, production dashboards, and cross-platform mobile apps.
        </p>
        <p className="hero-stack">
          Currently working with Node.js, PostgreSQL, Amazon Aurora, MongoDB,
          and Valkey.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            View selected work
            <FiArrowDown aria-hidden="true" />
          </a>
          <ResumeLink />
        </div>
        <div className="social-links" aria-label="Find Areeb online">
          <a href={CONTACT.github} target="_blank" rel="noreferrer">
            GitHub
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a href={"mailto:" + CONTACT.email}>
            Email
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="hero-visual">
        <div className="visual-topline">
          <span className="eyebrow">
            A little structure. A lot of possibility.
          </span>
          <span className="crosshair" aria-hidden="true">
            +
          </span>
        </div>
        <img
          src="/images/systems-sculpture.svg"
          width="640"
          height="640"
          alt=""
        />
        <figcaption>
          <span className="visual-caption">BACKEND · WEB · MOBILE</span>
          <span className="visual-index">FIG. 01</span>
        </figcaption>
      </figure>
      <div className="hero-bottom">
        <span>Thoughtful interfaces. Dependable systems.</span>
        <a href="#work">
          Explore the work <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
