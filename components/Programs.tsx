"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Monitor, ArrowRight, BookOpen } from "lucide-react";

const CATEGORIES = ["All", "Technology", "Management", "Data & AI", "Leadership"];

const PROGRAMS = [
  {
    title: "Full Stack Development",
    institute: "IIT Kanpur",
    duration: "6 Months",
    mode: "Online",
    category: "Technology",
    tag: "Most Popular",
    tagColor: "#2563eb",
    tagBg: "#eff6ff",
    color: "#2563eb",
    border: "#bfdbfe",
    bg: "#f8fbff",
    desc: "Comprehensive program covering React, Node.js, databases, and cloud deployment with live projects.",
  },
  {
    title: "Data Science & AI",
    institute: "IIM Lucknow",
    duration: "8 Months",
    mode: "Hybrid",
    category: "Data & AI",
    tag: "High Demand",
    tagColor: "#16a34a",
    tagBg: "#f0fdf4",
    color: "#16a34a",
    border: "#bbf7d0",
    bg: "#f8fffe",
    desc: "End-to-end data science with Python, ML, deep learning, and real-world business case studies.",
  },
  {
    title: "Product Management",
    institute: "IIM Amritsar",
    duration: "5 Months",
    mode: "Online",
    category: "Management",
    tag: "Trending",
    tagColor: "#d97706",
    tagBg: "#fffbeb",
    color: "#d97706",
    border: "#fde68a",
    bg: "#fffdf5",
    desc: "Learn product strategy, roadmapping, user research, and stakeholder management from PMs at top firms.",
  },
  {
    title: "Cloud & DevOps",
    institute: "IIT Hyderabad",
    duration: "4 Months",
    mode: "Online",
    category: "Technology",
    tag: null,
    tagColor: "",
    tagBg: "",
    color: "#7c3aed",
    border: "#ddd6fe",
    bg: "#faf8ff",
    desc: "AWS, GCP, Docker, Kubernetes, CI/CD pipelines — for engineers ready to move to the cloud.",
  },
  {
    title: "Business Analytics",
    institute: "SP Jain",
    duration: "6 Months",
    mode: "Hybrid",
    category: "Data & AI",
    tag: null,
    tagColor: "",
    tagBg: "",
    color: "#0891b2",
    border: "#a5f3fc",
    bg: "#f5feff",
    desc: "Excel, SQL, Power BI, and advanced analytics techniques for business decision-making.",
  },
  {
    title: "Leadership & Management",
    institute: "XLRI Delhi",
    duration: "12 Months",
    mode: "Online",
    category: "Leadership",
    tag: "Executive",
    tagColor: "#e11d48",
    tagBg: "#fff1f2",
    color: "#e11d48",
    border: "#fecdd3",
    bg: "#fff8f9",
    desc: "Executive-level program covering people management, OKRs, strategic thinking, and org design.",
  },
];

export default function Programs() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeTab === "All"
    ? PROGRAMS
    : PROGRAMS.filter(p => p.category === activeTab);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="programs" ref={ref} style={{ padding: "88px 0", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f97316", marginBottom: 10,
          }}>
            Our Programs
          </p>
          <h2 style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: "clamp(26px, 3.2vw, 38px)",
            color: "var(--blue-deep)", marginBottom: 14,
          }}>
            Programs Built for Your Team
          </h2>
          <p style={{
            fontSize: 16, color: "var(--text-secondary)",
            maxWidth: 520, margin: "0 auto", lineHeight: 1.75,
          }}>
            150+ programs across technology, management, and leadership — each designed
            for working professionals and enterprise teams.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{
          display: "flex", flexWrap: "wrap", gap: 10,
          justifyContent: "center", marginBottom: 44,
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                padding: "9px 20px",
                borderRadius: 999,
                border: activeTab === cat ? "1.5px solid #1a3a8f" : "1.5px solid #e2e8f0",
                background: activeTab === cat ? "#1a3a8f" : "white",
                color: activeTab === cat ? "white" : "#64748b",
                fontFamily: "Sora, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {filtered.map((prog, i) => (
            <div
              key={prog.title}
              style={{
                background: prog.bg,
                border: `1.5px solid ${prog.border}`,
                borderRadius: 20,
                padding: "28px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s, box-shadow 0.2s`,
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.10)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
              }}
            >
              {/* Top row: tag + institute */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                {/* Institute badge */}
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: prog.color,
                  background: prog.tagBg || prog.bg,
                  border: `1px solid ${prog.border}`,
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontFamily: "Sora, sans-serif",
                }}>
                  {prog.institute}
                </span>
                {/* Popular tag */}
                {prog.tag && (
                  <span style={{
                    fontSize: 10, fontWeight: 700,
                    color: prog.tagColor, background: prog.tagBg,
                    border: `1px solid ${prog.border}`,
                    borderRadius: 999, padding: "3px 9px",
                    fontFamily: "Sora, sans-serif",
                    letterSpacing: "0.02em",
                  }}>
                    {prog.tag}
                  </span>
                )}
              </div>

              {/* Icon + Title */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "white",
                  border: `1.5px solid ${prog.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <BookOpen size={18} style={{ color: prog.color }} />
                </div>
                <h3 style={{
                  fontFamily: "Sora, sans-serif", fontWeight: 700,
                  fontSize: 16, color: "#0f172a", lineHeight: 1.3,
                  paddingTop: 2,
                }}>
                  {prog.title}
                </h3>
              </div>

              {/* Desc */}
              <p style={{
                fontSize: 13, color: "#64748b", lineHeight: 1.65,
                marginBottom: 20, flexGrow: 1,
              }}>
                {prog.desc}
              </p>

              {/* Meta row */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#475569" }}>
                  <Clock size={13} style={{ color: prog.color }} />
                  {prog.duration}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#475569" }}>
                  <Monitor size={13} style={{ color: prog.color }} />
                  {prog.mode}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  width: "100%", padding: "11px 0",
                  borderRadius: 12,
                  background: prog.color,
                  color: "white",
                  fontFamily: "Sora, sans-serif", fontWeight: 600, fontSize: 13,
                  border: "none", cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                Enquire Now <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ fontSize: 15, color: "#64748b", marginBottom: 16 }}>
            Don't see what you need? We build custom programs from scratch.
          </p>
          <button
            onClick={scrollToContact}
            style={{
              padding: "13px 32px", borderRadius: 14,
              background: "var(--blue-deep)", color: "white",
              fontFamily: "Sora, sans-serif", fontWeight: 600, fontSize: 14,
              border: "none", cursor: "pointer",
              boxShadow: "0 4px 16px rgba(10,31,92,0.25)",
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Request a Custom Program →
          </button>
        </div>
      </div>
    </section>
  );
}
