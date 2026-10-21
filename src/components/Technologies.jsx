import { FiArrowUpRight } from "react-icons/fi";
import { CAPABILITIES } from "../constants";

export default function Technologies() {
  return (
    <section
      className="section capabilities-section"
      aria-labelledby="capabilities-heading"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / Capabilities</p>
            <h2 id="capabilities-heading">
              The right tools.
              <br />A connected perspective.
            </h2>
          </div>
          <p>
            Working across the stack,
            <br />
            with a growing focus on the backend.
          </p>
        </div>
        <div className="capability-grid">
          {CAPABILITIES.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="mono capability-number">
                /{capability.number}
              </span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <p className="capability-skills">{capability.skills}</p>
              <a className="text-link" href={capability.href}>
                {capability.evidence}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
