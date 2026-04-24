"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardList, PenTool, Rocket, BarChart3 } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Needs Assessment",
    desc: "We start with a deep-dive into your team's current skill levels, business goals, and L&D gaps through structured workshops and surveys.",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Custom Program Design",
    desc: "Our academic team co-creates a curriculum with your stakeholders — aligned to your tech stack, role requirements, and business context.",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Expert-Led Delivery",
    desc: "Live sessions with IIT/IIM faculty, industry mentors, and hands-on projects. Online, hybrid, or on-site — your choice.",
    color: "#f97316",
    bg: "#fff7ed",
    border: "#fed7aa",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Outcome Tracking",
    desc: "Real-time dashboards track learner progress, completion rates, and skill uplift. Monthly reports delivered to your L&D head.",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
];

export default function HowItWorks() {
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
      ref={ref}
      style={{
        padding: "88px 0",
        background: "linear-gradient(180deg, #f8f9ff 0%, #eef2ff 100%)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f97316", marginBottom: 10,
          }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: "clamp(26px, 3.2vw, 38px)",
            color: "var(--blue-deep)", marginBottom: 14,
          }}>
            From Conversation to Transformation
          </h2>
          <p style={{
            fontSize: 16, color: "var(--text-secondary)",
            maxWidth: 500, margin: "0 auto", lineHeight: 1.75,
          }}>
            A simple 4-step process to get your team upskilled — handled end-to-end by Accredian.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connector line (desktop) */}
          <div style={{
            position: "absolute",
            top: 44,
            left: "12.5%",
            right: "12.5%",
            height: 2,
            background: "linear-gradient(90deg, #bfdbfe, #bbf7d0, #fed7aa, #ddd6fe)",
            borderRadius: 2,
            zIndex: 0,
          }}
          className="connector-line"
          />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            position: "relative",
            zIndex: 1,
          }}>
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.55s ease ${i * 0.15}s, transform 0.55s ease ${i * 0.15}s`,
                  }}
                >
                  {/* Icon circle */}
                  <div style={{
                    width: 88, height: 88, borderRadius: "50%",
                    background: "white",
                    border: `2.5px solid ${s.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 20,
                    boxShadow: `0 4px 20px ${s.color}20`,
                    position: "relative",
                  }}>
                    <Icon size={32} style={{ color: s.color }} />
                    {/* Step number badge */}
                    <div style={{
                      position: "absolute", top: -6, right: -6,
                      width: 26, height: 26, borderRadius: "50%",
                      background: s.color, color: "white",
                      fontSize: 11, fontWeight: 800,
                      fontFamily: "Sora, sans-serif",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "2px solid white",
                    }}>
                      {s.step.replace("0", "")}
                    </div>
                  </div>

                  {/* Step number text */}
                  <div style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                    color: s.color, textTransform: "uppercase", marginBottom: 8,
                    fontFamily: "Sora, sans-serif",
                  }}>
                    Step {s.step}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "Sora, sans-serif", fontWeight: 700,
                    fontSize: 17, color: "#0f172a", marginBottom: 12,
                  }}>
                    {s.title}
                  </h3>

                  {/* Desc */}
                  <p style={{
                    fontSize: 14, color: "#64748b", lineHeight: 1.7,
                    maxWidth: 240,
                  }}>
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .connector-line { display: none; }
        }
      `}</style>
    </section>
  );
}
