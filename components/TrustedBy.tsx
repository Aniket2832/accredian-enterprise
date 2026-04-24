"use client";

const COMPANIES = [
  { name: "Tata Consultancy",  abbr: "TCS",       color: "#1a56db" },
  { name: "Infosys",           abbr: "Infosys",   color: "#007cc3" },
  { name: "Wipro",             abbr: "Wipro",     color: "#5d0f94" },
  { name: "HCL Technologies",  abbr: "HCL",       color: "#e2231a" },
  { name: "Cognizant",         abbr: "Cognizant", color: "#1e4d8c" },
  { name: "Accenture",         abbr: "Accenture", color: "#a100ff" },
  { name: "Capgemini",         abbr: "Capgemini", color: "#003189" },
  { name: "IBM India",         abbr: "IBM",       color: "#1f70c1" },
  { name: "Tech Mahindra",     abbr: "Tech M",    color: "#e31837" },
  { name: "Mphasis",           abbr: "Mphasis",   color: "#00407a" },
  { name: "L&T Technology",    abbr: "L&T Tech",  color: "#004b87" },
  { name: "Hexaware",          abbr: "Hexaware",  color: "#0077c8" },
];

// Duplicate for seamless loop
const TRACK = [...COMPANIES, ...COMPANIES];

export default function TrustedBy() {
  return (
    <section style={{ background: "#f8f9ff", padding: "64px 0 60px", overflow: "hidden" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 40, padding: "0 24px" }}>
        <p style={{
          fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "#94a3b8", marginBottom: 10,
        }}>
          Trusted By
        </p>
        <h2 style={{
          fontFamily: "Sora, sans-serif", fontWeight: 700,
          fontSize: "clamp(22px, 3vw, 32px)",
          color: "var(--blue-deep)",
        }}>
          500+ Leading Companies Across India
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", marginTop: 8 }}>
          From Fortune 500s to fast-growing startups — teams trust Accredian Enterprise.
        </p>
      </div>

      {/* Marquee track */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Fade edges */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 120,
          background: "linear-gradient(to right, #f8f9ff, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 120,
          background: "linear-gradient(to left, #f8f9ff, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />

        <div style={{
          display: "flex",
          gap: 20,
          width: "max-content",
          animation: "marquee 30s linear infinite",
          padding: "8px 0",
        }}>
          {TRACK.map((co, i) => (
            <div key={`${co.abbr}-${i}`} style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "white",
              border: "1.5px solid #e2e8f0",
              borderRadius: 14,
              padding: "12px 22px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              flexShrink: 0,
              minWidth: 140,
              transition: "box-shadow 0.2s",
            }}>
              {/* Logo placeholder — colored initial badge */}
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: co.color + "15",
                border: `1.5px solid ${co.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 800,
                color: co.color,
                flexShrink: 0,
                fontFamily: "Sora, sans-serif",
                letterSpacing: "-0.02em",
              }}>
                {co.abbr.slice(0, 2).toUpperCase()}
              </div>
              <span style={{
                fontSize: 13, fontWeight: 600,
                color: "#334155",
                fontFamily: "DM Sans, sans-serif",
                whiteSpace: "nowrap",
              }}>
                {co.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <p style={{
        textAlign: "center", fontSize: 13, color: "#94a3b8",
        marginTop: 32, padding: "0 24px",
      }}>
        + 488 more companies in IT, BFSI, Healthcare, Manufacturing & Retail
      </p>
    </section>
  );
}
