"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, LayoutTemplate, Monitor, Briefcase, HeadphonesIcon, Award,
} from "lucide-react";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "IIT & IIM Faculty",
    desc: "Learn directly from professors and industry experts from India's most prestigious institutions.",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    icon: LayoutTemplate,
    title: "Custom Curriculum",
    desc: "Every program is tailored to your organization's goals, tech stack, and team skill gaps.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: Monitor,
    title: "Flexible Delivery",
    desc: "Choose from fully online, hybrid, or on-site formats to suit your team's schedule and location.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    icon: Briefcase,
    title: "Industry-Aligned Programs",
    desc: "Curriculum co-designed with hiring partners to ensure real-world applicability from day one.",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated L&D Support",
    desc: "A dedicated learning & development manager handles everything from onboarding to completion.",
    color: "#0891b2",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    icon: Award,
    title: "Certified by Top Institutes",
    desc: "Employees receive certificates from IITs, IIMs, and XLRI — credentials that carry real weight.",
    color: "#e11d48",
    bg: "#fff1f2",
    border: "#fecdd3",
  },
];

export default function WhyAccredian() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why"
      ref={ref}
      style={{
        padding: "88px 0",
        background: "linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f97316", marginBottom: 10,
          }}>
            Why Choose Us
          </p>
          <h2 style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: "clamp(26px, 3.2vw, 38px)",
            color: "var(--blue-deep)", marginBottom: 14,
          }}>
            Why Leading Companies Choose Accredian
          </h2>
          <p style={{
            fontSize: 16, color: "var(--text-secondary)",
            maxWidth: 540, margin: "0 auto", lineHeight: 1.75,
          }}>
            We don't just deliver training — we design transformational learning experiences
            that drive measurable business outcomes.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                style={{
                  background: "white",
                  border: "1.5px solid #f1f5f9",
                  borderRadius: 20,
                  padding: "32px 28px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.55s ease ${i * 0.08}s, transform 0.55s ease ${i * 0.08}s, box-shadow 0.2s`,
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
                  el.style.borderColor = f.border;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                  el.style.borderColor = "#f1f5f9";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: f.bg,
                  border: `1.5px solid ${f.border}`,
                  display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: 20,
                }}>
                  <Icon size={24} style={{ color: f.color }} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "Sora, sans-serif", fontWeight: 700,
                  fontSize: 17, color: "#0f172a", marginBottom: 10,
                }}>
                  {f.title}
                </h3>

                {/* Desc */}
                <p style={{
                  fontSize: 14, color: "#64748b", lineHeight: 1.7,
                }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
