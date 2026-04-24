"use client";

import { Share2, MessageCircle, Globe, Mail, Phone, MapPin } from "lucide-react";

const LINKS = {
  Company: ["About Accredian", "Careers", "Press Kit", "Blog"],
  Programs: ["Full Stack Dev", "Data Science & AI", "Product Management", "Leadership"],
  Support: ["Contact Us", "Help Center", "Refund Policy", "Privacy Policy"],
};

const SOCIAL = [
  { icon: Share2,         href: "#", label: "LinkedIn"  },
  { icon: MessageCircle, href: "#", label: "Twitter"   },
  { icon: Globe,          href: "#", label: "YouTube"   },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      background: "#050f2e",
      color: "white",
      padding: "72px 0 0",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 40px" }}>

        {/* Top grid */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr",
          gap: 48,
          paddingBottom: 56,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
              <div style={{
                width:36, height:36, borderRadius:10,
                background:"#1a3a8f",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontFamily:"Sora, sans-serif", fontWeight:800, fontSize:16, color:"white",
              }}>
                A
              </div>
              <div>
                <div style={{ fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:18, color:"white" }}>
                  Accredian
                </div>
                <div style={{ fontSize:10, color:"#fb923c", fontWeight:700, letterSpacing:"0.08em" }}>
                  ENTERPRISE
                </div>
              </div>
            </div>

            <p style={{ fontSize:14, color:"#94a3b8", lineHeight:1.75, marginBottom:24, maxWidth:280 }}>
              India's leading corporate learning platform — delivering IIT & IIM-backed
              programs that build future-ready workforces.
            </p>

            {/* Contact info */}
            <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:28 }}>
              {[
                { icon: Mail, text: "enterprise@accredian.com" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: MapPin, text: "Bengaluru, Karnataka, India" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <Icon size={14} style={{ color:"#60a5fa", flexShrink:0 }} />
                  <span style={{ fontSize:13, color:"#94a3b8" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display:"flex", gap:10 }}>
              {SOCIAL.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width:36, height:36, borderRadius:9,
                    background:"rgba(255,255,255,0.07)",
                    border:"1px solid rgba(255,255,255,0.12)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    transition:"background 0.2s",
                    textDecoration:"none",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }}
                >
                  <Icon size={16} style={{ color:"#94a3b8" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{
                fontFamily:"Sora, sans-serif", fontWeight:700,
                fontSize:13, color:"white",
                textTransform:"uppercase", letterSpacing:"0.08em",
                marginBottom:20,
              }}>
                {heading}
              </h4>
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {links.map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontSize:14, color:"#94a3b8",
                      textDecoration:"none",
                      transition:"color 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display:"flex", flexWrap:"wrap",
          alignItems:"center", justifyContent:"space-between",
          padding:"24px 0",
          gap:12,
        }}>
          <p style={{ fontSize:13, color:"#475569" }}>
            © 2025 Accredian | A Brand of{" "}
            <span style={{ color:"#64748b" }}>FullStack Education Pvt. Ltd.</span>
            {" "}All rights reserved.
          </p>
          <div style={{ display:"flex", gap:20 }}>
            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(item => (
              <a
                key={item}
                href="#"
                style={{ fontSize:12, color:"#475569", textDecoration:"none" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#475569"; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
