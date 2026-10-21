import { useRef, useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import { CONTACT } from "../constants";
import { copyText } from "../lib/clipboard";
import ResumeLink from "./ResumeLink";

export default function Contact() {
  const [copyState, setCopyState] = useState("idle");
  const fallback = useRef(null);
  async function copyEmail() {
    setCopyState("pending");
    const copied = await copyText(CONTACT.email);
    setCopyState(copied ? "success" : "error");
    if (!copied)
      requestAnimationFrame(() => {
        fallback.current?.focus();
        fallback.current?.select();
      });
  }
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <p className="eyebrow">05 / Let’s connect</p>
        <div className="contact-heading">
          <h2 id="contact-heading">
            Good things start
            <br />
            with a <span>conversation.</span>
          </h2>
          <span className="contact-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <p className="contact-description">
          Have a product or engineering problem to discuss?
          <br />
          Send me a note. I’d like to hear about it.
        </p>
        <div className="email-row">
          <a className="email-link" href={"mailto:" + CONTACT.email}>
            {CONTACT.email}
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            className="copy-button"
            onClick={copyEmail}
            disabled={copyState === "pending"}
            aria-label="Copy email address"
          >
            {copyState === "success" ? <FiCheck /> : <FiCopy />}
            <span>
              {copyState === "success"
                ? "Copied"
                : copyState === "pending"
                  ? "Copying…"
                  : "Copy email"}
            </span>
          </button>
        </div>
        <p className="copy-status" role="status">
          {copyState === "success"
            ? "Email copied to your clipboard."
            : copyState === "error"
              ? "Copy was unavailable. Select and copy the email below, or use the email link."
              : ""}
        </p>
        {copyState === "error" && (
          <label className="copy-fallback">
            Email address
            <input
              ref={fallback}
              value={CONTACT.email}
              readOnly
              onFocus={(event) => event.target.select()}
            />
          </label>
        )}
        <div className="contact-bottom">
          <div className="social-links">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer">
              GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href="tel:+923344984973">
              {CONTACT.phone}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <ResumeLink compact />
        </div>
      </div>
    </section>
  );
}
