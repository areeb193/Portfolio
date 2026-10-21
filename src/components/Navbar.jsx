import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import ResumeLink from "./ResumeLink";

const links = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["About", "about"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const toggle = useRef(null);
  const restoreFocus = useRef(true);

  useEffect(() => {
    const update = () => {
      const section = [...links].reverse().find(([, id]) => {
        const element = document.getElementById(id);
        return element && element.getBoundingClientRect().top < 180;
      });
      setActive(section?.[1] || "");
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const breakpoint = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (breakpoint.matches) dialog.current?.close();
    };
    breakpoint.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previous;
      breakpoint.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function closeMenu(restore = true) {
    restoreFocus.current = restore;
    dialog.current?.close();
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="wordmark" href="#home" aria-label="Areeb Zakir, home">
          <span className="monogram">
            az<span>.</span>
          </span>
          <span>Areeb Zakir</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, id]) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
            >
              {name}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <ResumeLink compact />
          <button
            ref={toggle}
            className="icon-button menu-toggle"
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => {
              restoreFocus.current = true;
              dialog.current.showModal();
              setOpen(true);
            }}
          >
            <FiMenu />
          </button>
        </div>
      </div>
      <dialog
        id="mobile-navigation"
        className="mobile-menu"
        ref={dialog}
        aria-label="Site navigation"
        onClose={() => {
          setOpen(false);
          if (restoreFocus.current) toggle.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === dialog.current) closeMenu();
        }}
      >
        <div className="menu-heading">
          <span className="eyebrow">Navigation</span>
          <button
            className="icon-button"
            aria-label="Close navigation"
            onClick={() => closeMenu()}
          >
            <FiX />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([name, id], index) => (
            <a key={id} href={"#" + id} onClick={() => closeMenu(false)}>
              <span>
                <small>0{index + 1}</small>
                {name}
              </span>
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p className="menu-location">Based in Lahore, Pakistan.</p>
      </dialog>
    </header>
  );
}
