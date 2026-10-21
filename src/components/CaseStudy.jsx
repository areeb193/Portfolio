import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";
import { PROJECTS } from "../constants";

export default function CaseStudy({ project }) {
  const next = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];
  return (
    <article className="case-study container">
      <a className="text-link case-back" href="#work">
        <FiArrowLeft aria-hidden="true" />
        All selected work
      </a>
      <div className="case-intro">
        <p className="eyebrow">
          {project.number} / {project.category}
        </p>
        <h1 id="case-heading" tabIndex="-1">
          {project.title}
        </h1>
        <p className="case-summary">{project.summary}</p>
      </div>
      <dl className="case-facts">
        <div>
          <dt>Stage</dt>
          <dd>{project.stage}</dd>
        </div>
        <div>
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Context</dt>
          <dd>{project.context}</dd>
        </div>
      </dl>
      <figure className={"case-visual project-image-" + project.slug}>
        <img
          src={project.image}
          alt={project.imageAlt}
          width="960"
          height="640"
        />
        <figcaption>{project.visualNote}</figcaption>
      </figure>
      <div className="case-content">
        <aside>
          <p className="eyebrow">Tools & technologies</p>
          <ul className="tags">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {project.source && (
            <a
              className="text-link"
              href={project.source}
              target="_blank"
              rel="noreferrer"
            >
              Explore the source
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.live && (
            <a
              className="text-link"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Visit live site
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.private && (
            <p className="case-privacy">
              Private production work. This overview uses a generic illustration
              and contains no customer or infrastructure data.
            </p>
          )}
        </aside>
        <div className="case-narrative">
          <section>
            <p className="eyebrow">The context</p>
            <h2>A problem worth working on.</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <p className="eyebrow">My contribution</p>
            <h2>The work behind the interface.</h2>
            <p>{project.work}</p>
          </section>
          <section>
            <p className="eyebrow">Technical approach</p>
            <h2>How the pieces fit.</h2>
            {project.decisions.map(([title, text]) => (
              <div className="case-decision" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </section>
          <section>
            <p className="eyebrow">Where it stands</p>
            <h2>The result.</h2>
            <p>{project.outcome}</p>
          </section>
        </div>
      </div>
      <a className="next-project" href={"#/work/" + next.slug}>
        <span>
          <span className="eyebrow">Next case study</span>
          <strong>{next.title}</strong>
        </span>
        <FiArrowRight aria-hidden="true" />
      </a>
    </article>
  );
}

CaseStudy.propTypes = {
  project: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    stage: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    visualNote: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    source: PropTypes.string,
    live: PropTypes.string,
    private: PropTypes.bool,
    problem: PropTypes.string.isRequired,
    work: PropTypes.string.isRequired,
    decisions: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
      .isRequired,
    outcome: PropTypes.string.isRequired,
  }).isRequired,
};
