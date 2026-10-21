import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { ARCHIVE, PROJECTS } from "../constants";

export default function Project() {
  return (
    <section
      className="section container"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / Selected work</p>
          <h2 id="work-heading">Built with purpose.</h2>
        </div>
        <p>
          A closer look at the systems,
          <br className="desktop-break" /> products, and ideas I’ve worked on.
        </p>
      </div>
      <div className="project-grid">
        {PROJECTS.map((project, index) => (
          <article
            className={
              "project-card " + (index === 0 ? "project-featured" : "")
            }
            key={project.slug}
          >
            <a
              className={"project-image project-image-" + project.slug}
              href={"#/work/" + project.slug}
              aria-label={"Read " + project.title + " case study"}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                width="960"
                height="640"
                loading="lazy"
              />
              <span className="preview-label">{project.visualNote}</span>
              <span className="image-arrow" aria-hidden="true">
                <FiArrowUpRight />
              </span>
            </a>
            <div className="project-copy">
              <div className="project-meta">
                <span>{project.category}</span>
                <span
                  className={
                    "stage " +
                    (project.stage === "Prototype" ? "stage-prototype" : "")
                  }
                >
                  <span />
                  {project.stage}
                </span>
              </div>
              <h3>
                <a href={"#/work/" + project.slug}>{project.title}</a>
              </h3>
              <p>{project.summary}</p>
              <p className="contribution">{project.contribution}</p>
              <ul className="tags" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a className="text-link" href={"#/work/" + project.slug}>
                  View case study
                  <FiArrowRight aria-hidden="true" />
                </a>
                {project.private && (
                  <span className="private-note">
                    Private production project
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <details className="project-archive">
        <summary>
          More from the workbench
          <span>
            03 projects{" "}
            <span className="archive-plus" aria-hidden="true">
              +
            </span>
          </span>
        </summary>
        <div>
          {ARCHIVE.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                {project.title}
                <small>{project.category}</small>
              </span>
              <span>
                Source <FiArrowUpRight aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </details>
    </section>
  );
}
