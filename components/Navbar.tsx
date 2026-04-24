"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "var(--blue-deep)" }}
              >
                A
              </div>
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "Sora, sans-serif", color: "var(--blue-deep)" }}
              >
                Accredian
                <span
                  className="text-xs font-medium ml-1.5 px-1.5 py-0.5 rounded"
                  style={{
                    background: "var(--orange)",
                    color: "white",
                    fontFamily: "DM Sans, sans-serif",
                    verticalAlign: "middle",
                  }}
                >
                  Enterprise
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-50"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--blue-deep)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 border-2"
              style={{
                color: "var(--blue-deep)",
                borderColor: "var(--blue-deep)",
                fontFamily: "Sora, sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--blue-deep)";
                el.style.color = "white";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "var(--blue-deep)";
              }}
            >
              Schedule a Call
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-5 py-2.5 text-sm font-semibold rounded-xl text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "var(--orange)",
                fontFamily: "Sora, sans-serif",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--orange-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "var(--orange)")
              }
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "var(--blue-deep)" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "white", borderTop: "1px solid var(--border)" }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-4 py-3 text-sm font-medium rounded-lg"
              style={{ color: "var(--text-primary)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-5 py-3 text-sm font-semibold rounded-xl text-center border-2"
              style={{ color: "var(--blue-deep)", borderColor: "var(--blue-deep)" }}
            >
              Schedule a Call
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-5 py-3 text-sm font-semibold rounded-xl text-center text-white"
              style={{ background: "var(--orange)" }}
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
