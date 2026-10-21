import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import PropTypes from "prop-types";
import { CONTACT, RESUMES } from "../constants";

// A real email request is offered until the approved download assets are available.
export default function ResumeLink({ compact = false }) {
  if (!RESUMES.length)
    return (
      <a
        className={compact ? "resume-link" : "button button-secondary"}
        href={"mailto:" + CONTACT.email + "?subject=Resume%20request"}
      >
        {compact ? "Request résumé" : "Request my résumé"}
        <FiArrowUpRight aria-hidden="true" />
      </a>
    );
  return (
    <details className="resume-menu">
      <summary className={compact ? "resume-link" : "button button-secondary"}>
        Download résumé
        <FiDownload aria-hidden="true" />
      </summary>
      <div>
        {RESUMES.map((resume) => (
          <a key={resume.url} href={resume.url} download>
            {resume.label}
            <FiDownload aria-hidden="true" />
          </a>
        ))}
      </div>
    </details>
  );
}

ResumeLink.propTypes = { compact: PropTypes.bool };
