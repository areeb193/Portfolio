export default function About() {
  return (
    <section
      className="section container about-section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-title">
        <p className="eyebrow">04 / A little about me</p>
        <h2 id="about-heading">
          Curious about
          <br />
          how things work.
          <br />
          <span>
            And how they
            <br />
            could work better.
          </span>
        </h2>
        <div className="about-portrait">
          <img
            src="/images/areeb-portrait.webp"
            alt="Areeb Zakir"
            width="420"
            height="509"
            loading="lazy"
          />
          <div>
            <p className="portrait-name">Areeb Zakir</p>
            <p className="portrait-location">Lahore, Pakistan</p>
            <span className="portrait-caption">
              Engineer. Always a student.
            </span>
          </div>
        </div>
      </div>
      <div className="about-copy">
        <p>
          I’m Areeb, a software engineer who enjoys connecting the pieces of a
          product: the interface someone uses, the API behind it, and the data
          that makes it useful.
        </p>
        <p>
          Since starting freelance work in 2023, I’ve worked across web and
          mobile applications, then brought that experience into internships and
          production engineering. I like understanding a problem before choosing
          the tools, and staying involved through implementation, testing, and
          deployment.
        </p>
        <p>
          These days, I’m especially interested in backend systems and the small
          engineering decisions that make software easier to use and maintain.
        </p>
        <div className="education">
          <span className="education-mark" aria-hidden="true">
            ↗
          </span>
          <div>
            <span className="eyebrow">Education</span>
            <h3>BS Software Engineering</h3>
            <p>
              COMSATS University Islamabad
              <br />
              Lahore Campus · Sep 2022 — Sep 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
