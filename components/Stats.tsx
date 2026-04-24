"use client";

import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Star, Trophy } from "lucide-react";

const STATS = [
  {
    icon: Users,
    end: 500,
    suffix: "+",
    label: "Enterprise Partners",
    sub: "Across IT, BFSI, Healthcare & more",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    icon: BookOpen,
    end: 150,
    suffix: "+",
    label: "Programs Available",
    sub: "Across tech, management & leadership",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    icon: Star,
    end: 95,
    suffix: "%",
    label: "Satisfaction Rate",
    sub: "From post-program learner surveys",
    color: "#d97706",
    bg: "#fffbeb",
    border: "#fde68a",
  },
  {
    icon: Trophy,
    end: 50000,
    suffix: "+",
    label: "Employees Trained",
    sub: "And growing every quarter",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
];

function formatNumber(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return n.toString();
}

function Counter({ end, suffix, active }: { end: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, end]);

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "80px 0",
        background: "white",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f97316", marginBottom: 10,
          }}>
            Our Impact
          </p>
          <h2 style={{
            fontFamily: "Sora, sans-serif", fontWeight: 700,
            fontSize: "clamp(26px, 3.2vw, 38px)",
            color: "var(--blue-deep)",
            marginBottom: 12,
          }}>
            A Legacy of Excellence &amp; Impact
          </h2>
          <p style={{
            fontSize: 16, color: "var(--text-secondary)",
            maxWidth: 520, margin: "0 auto", lineHeight: 1.7,
          }}>
            Numbers that reflect our commitment to building future-ready workforces for India's leading organizations.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 24,
        }}>
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  background: "white",
                  border: `1.5px solid ${s.border}`,
                  borderRadius: 20,
                  padding: "32px 28px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                  opacity: active ? 1 : 0,
                  transform: active ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background icon watermark */}
                <div style={{
                  position: "absolute", right: -10, bottom: -10,
                  opacity: 0.05,
                }}>
                  <Icon size={80} style={{ color: s.color }} />
                </div>

                {/* Icon badge */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: s.bg,
                  border: `1.5px solid ${s.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={24} style={{ color: s.color }} />
                </div>

                {/* Number */}
                <div style={{
                  fontFamily: "Sora, sans-serif", fontWeight: 800,
                  fontSize: 42, lineHeight: 1,
                  color: s.color, marginBottom: 8,
                }}>
                  <Counter end={s.end} suffix={s.suffix} active={active} />
                </div>

                {/* Label */}
                <div style={{
                  fontFamily: "Sora, sans-serif", fontWeight: 600,
                  fontSize: 16, color: "#0f172a", marginBottom: 6,
                }}>
                  {s.label}
                </div>

                {/* Sub */}
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>
                  {s.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
