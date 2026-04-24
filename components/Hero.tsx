"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play, Building2, GraduationCap, TrendingUp, Award, CheckCircle2 } from "lucide-react";

const INSTITUTES = ["IIT Kanpur", "IIM Lucknow", "IIM Amritsar", "XLRI Delhi", "SP Jain", "IIT Hyderabad"];

const STATS = [
  { icon: Building2,    value: "500+",  label: "Enterprise Partners", color: "#60a5fa", bg: "rgba(96,165,250,0.15)"  },
  { icon: GraduationCap,value: "50K+",  label: "Employees Trained",   color: "#34d399", bg: "rgba(52,211,153,0.15)"  },
  { icon: TrendingUp,   value: "150%",  label: "Avg Salary Hike",     color: "#fb923c", bg: "rgba(251,146,60,0.15)"  },
  { icon: Award,        value: "95%",   label: "Satisfaction Rate",   color: "#a78bfa", bg: "rgba(167,139,250,0.15)" },
];

const FEATURES = [
  "Programs from IITs, IIMs & XLRI",
  "Custom curriculum for your team",
  "Dedicated L&D support manager",
  "Live + recorded session access",
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        background: "linear-gradient(135deg, #0a1f5c 0%, #1a3a8f 55%, #1e40af 100%)",
        paddingTop: 72,
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background grid */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glow blobs */}
      <div style={{ position:"absolute", top:-120, right:-120, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(96,165,250,0.18), transparent)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-80, left:-80, width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle, rgba(249,115,22,0.12), transparent)", pointerEvents:"none" }} />

      {/* Main container */}
      <div style={{ width:"100%", maxWidth:1280, margin:"0 auto", padding:"64px 40px 100px" }}>

        {/* Two-column grid via CSS */}
        <div className="hero-grid">

          {/* ── LEFT ── */}
          <div style={{
            color:"white",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
            {/* Eyebrow */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:8,
              padding:"6px 16px", borderRadius:999,
              background:"rgba(249,115,22,0.18)",
              border:"1px solid rgba(249,115,22,0.35)",
              color:"#fdba74", fontSize:13, fontWeight:500, marginBottom:24,
            }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:"#fb923c", display:"inline-block" }} />
              India's #1 Corporate Learning Platform
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily:"Sora, sans-serif",
              fontSize:"clamp(34px, 4.2vw, 56px)",
              fontWeight:800, lineHeight:1.18,
              marginBottom:20, color:"white",
            }}>
              Upskill Your{" "}
              <span style={{
                background:"linear-gradient(90deg, #fb923c, #fbbf24)",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                display:"inline-block",
              }}>Workforce</span>
              <br />With Top Institutes
            </h1>

            {/* Sub */}
            <p style={{
              fontSize:16, lineHeight:1.75, color:"#bfdbfe",
              marginBottom:28, maxWidth:460,
              opacity: visible ? 1 : 0,
              transition:"opacity 0.7s ease 0.15s",
            }}>
              Partner with Accredian to deliver IIT &amp; IIM‑backed programs tailored for your
              organization. Trusted by 500+ companies to train, retain, and grow top talent.
            </p>

            {/* Bullets */}
            <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:32 }}>
              {FEATURES.map((f) => (
                <div key={f} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <CheckCircle2 size={16} style={{ color:"#34d399", flexShrink:0 }} />
                  <span style={{ fontSize:14, color:"#e0f2fe" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:14, marginBottom:36 }}>
              <a href="#programs" onClick={(e)=>{ e.preventDefault(); scrollTo("#programs"); }}
                style={{
                  display:"inline-flex", alignItems:"center", gap:8,
                  padding:"13px 26px", borderRadius:14,
                  background:"#f97316", color:"white",
                  fontFamily:"Sora, sans-serif", fontWeight:600, fontSize:14,
                  textDecoration:"none", boxShadow:"0 4px 20px rgba(249,115,22,0.4)",
                  transition:"transform 0.2s",
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
              >
                Explore Programs <ArrowRight size={16} />
              </a>
              <a href="#contact" onClick={(e)=>{ e.preventDefault(); scrollTo("#contact"); }}
                style={{
                  display:"inline-flex", alignItems:"center", gap:8,
                  padding:"13px 26px", borderRadius:14,
                  background:"rgba(255,255,255,0.1)", color:"white",
                  border:"1.5px solid rgba(255,255,255,0.25)",
                  fontFamily:"Sora, sans-serif", fontWeight:600, fontSize:14,
                  textDecoration:"none", backdropFilter:"blur(8px)",
                  transition:"background 0.2s",
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.18)"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.10)"; }}
              >
                <Play size={14} fill="white" strokeWidth={0} /> Schedule a Call
              </a>
            </div>

            {/* Institute tags */}
            <div>
              <p style={{ fontSize:11, fontWeight:600, color:"#93c5fd", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:10 }}>
                Programs from
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {INSTITUTES.map((inst) => (
                  <span key={inst} style={{
                    padding:"5px 12px", borderRadius:999, fontSize:12, fontWeight:500,
                    background:"rgba(255,255,255,0.08)",
                    border:"1px solid rgba(255,255,255,0.18)",
                    color:"rgba(255,255,255,0.88)",
                  }}>
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="hero-right" style={{
            opacity: visible ? 1 : 0,
            transition:"opacity 1s ease 0.4s",
            display:"flex",
            flexDirection:"column",
            gap:16,
          }}>
            {/* 2×2 stat cards */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} style={{
                    background:"rgba(255,255,255,0.08)",
                    border:"1px solid rgba(255,255,255,0.14)",
                    borderRadius:20, padding:"24px 20px",
                    backdropFilter:"blur(12px)",
                    animation:`float 4s ease-in-out ${i * 0.4}s infinite`,
                  }}>
                    <div style={{
                      width:44, height:44, borderRadius:12,
                      background:s.bg, display:"flex", alignItems:"center",
                      justifyContent:"center", marginBottom:14,
                    }}>
                      <Icon size={22} style={{ color:s.color }} />
                    </div>
                    <div style={{ fontFamily:"Sora, sans-serif", fontWeight:800, fontSize:28, color:"white", lineHeight:1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize:13, color:"#93c5fd", marginTop:4 }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA banner card */}
            <div style={{
              background:"rgba(255,255,255,0.06)",
              border:"1px solid rgba(255,255,255,0.12)",
              borderRadius:20, padding:"20px 24px",
              backdropFilter:"blur(12px)",
              display:"flex", alignItems:"center", justifyContent:"space-between",
            }}>
              <div>
                <div style={{ fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:15, color:"white" }}>
                  Ready to upskill your team?
                </div>
                <div style={{ fontSize:13, color:"#93c5fd", marginTop:4 }}>
                  Free custom program proposal in 24 hrs
                </div>
              </div>
              <a href="#contact" onClick={(e)=>{ e.preventDefault(); scrollTo("#contact"); }}
                style={{
                  padding:"10px 18px", borderRadius:12,
                  background:"#f97316", color:"white",
                  fontFamily:"Sora, sans-serif", fontWeight:600, fontSize:13,
                  textDecoration:"none", flexShrink:0, marginLeft:16,
                  whiteSpace:"nowrap",
                }}
              >
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:"block" }}>
          <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" fill="white" />
        </svg>
      </div>

      {/* Scoped responsive CSS */}
      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
