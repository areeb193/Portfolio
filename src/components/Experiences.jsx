import { EXPERIENCES } from "../constants";

export default function Experiences() {
  return (
    <section
      className="section container experience-section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-intro">
        <p className="eyebrow">02 / Experience</p>
        <h2 id="experience-heading">
          Learning by
          <br />
          shipping.
        </h2>
        <p>
          From client applications to production services. Every role adds
          another perspective.
        </p>
      </div>
      <div className="timeline">
        {EXPERIENCES.map((experience) => (
          <article className="experience" key={experience.company}>
            <div className="experience-top">
              <p className="mono">{experience.date}</p>
              {experience.current && (
                <span className="current-badge">Current</span>
              )}
            </div>
            <h3>{experience.role}</h3>
            <p className="company">{experience.company}</p>
            <p className="experience-detail">{experience.detail}</p>
            <ul>
              {experience.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
