"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Accredian transformed our engineering team. The custom Full Stack program was aligned perfectly to our product roadmap, and the IIT faculty brought incredible depth. We saw measurable productivity gains within 3 months.",
    name: "Rajesh Mehta",
    title: "VP of Engineering",
    company: "Tata Digital",
    initials: "RM",
    color: "#2563eb",
    bg: "#eff6ff",
    stars: 5,
  },
  {
    quote:
      "What sets Accredian apart is the L&D support manager. They handled everything — scheduling, attendance tracking, feedback loops. Our HR team barely had to lift a finger. The outcomes spoke for themselves.",
    name: "Priya Nair",
    title: "Head of Learning & Development",
    company: "Infosys BPM",
    initials: "PN",
    color: "#16a34a",
    bg: "#f0fdf4",
    stars: 5,
  },
  {
    quote:
      "We enrolled 200+ managers in the Leadership & Management program from XLRI. The real-world case studies and peer cohort model made it incredibly engaging. Strongly recommend for any org scaling fast.",
    name: "Amit Sharma",
    title: "Chief People Officer",
    company: "Capgemini India",
    initials: "AS",
    color: "#7c3aed",
    bg: "#f5f3ff",
    stars: 5,
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      ref={ref}
      style={{
        padding: "88px 0",
        background: "white",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f97316", marginBottom: 10,
          }}>
            Success Stories
          </p>
          <h2 style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: "clamp(26px, 3.2vw, 38px)",
            color: "var(--blue-deep)", marginBottom: 14,
          }}>
            Heard It From Our Partners
          </h2>
          <p style={{
            fontSize: 16, color: "var(--text-secondary)",
            maxWidth: 480, margin: "0 auto", lineHeight: 1.75,
          }}>
            Real outcomes from real L&D leaders who chose Accredian for their teams.
          </p>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="testimonials-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} active={active} />
          ))}
        </div>

        {/* Mobile: single card + arrows */}
        <div className="testimonials-mobile" style={{ display: "none" }}>
          <TestimonialCard t={TESTIMONIALS[current]} i={0} active={true} />
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 16, marginTop: 24,
          }}>
            <button onClick={prev} style={{
              width: 40, height: 40, borderRadius: "50%",
              border: "1.5px solid #e2e8f0", background: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}>
              <ChevronLeft size={18} color="#475569" />
            </button>
            <div style={{ display: "flex", gap: 6 }}>
              {TESTIMONIALS.map((_, i) => (
                <div key={i} style={{
                  width: i === current ? 20 : 8, height: 8,
                  borderRadius: 4,
                  background: i === current ? "var(--blue-deep)" : "#cbd5e1",
                  transition: "width 0.3s",
                }} />
              ))}
            </div>
            <button onClick={next} style={{
              width: 40, height: 40, borderRadius: "50%",
              border: "1.5px solid #e2e8f0", background: "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
            }}>
              <ChevronRight size={18} color="#475569" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { display: none !important; }
          .testimonials-mobile { display: block !important; }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({
  t, i, active,
}: {
  t: typeof TESTIMONIALS[0]; i: number; active: boolean;
}) {
  return (
    <div style={{
      background: "white",
      border: "1.5px solid #f1f5f9",
      borderRadius: 20,
      padding: "32px 28px",
      boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
      display: "flex",
      flexDirection: "column",
      gap: 0,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: t.color, borderRadius: "20px 20px 0 0",
      }} />

      {/* Stars */}
      <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={14} fill="#fbbf24" stroke="none" />
        ))}
      </div>

      {/* Quote icon */}
      <div style={{ marginBottom: 14 }}>
        <Quote size={28} style={{ color: t.color, opacity: 0.25 }} />
      </div>

      {/* Quote text */}
      <p style={{
        fontSize: 14, color: "#334155", lineHeight: 1.8,
        fontStyle: "italic", flexGrow: 1, marginBottom: 24,
      }}>
        "{t.quote}"
      </p>

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: t.bg,
          border: `2px solid ${t.color}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "Sora, sans-serif", fontWeight: 700,
          fontSize: 14, color: t.color,
          flexShrink: 0,
        }}>
          {t.initials}
        </div>
        <div>
          <div style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: 14, color: "#0f172a",
          }}>
            {t.name}
          </div>
          <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>
            {t.title}, {t.company}
          </div>
        </div>
      </div>
    </div>
  );
}
