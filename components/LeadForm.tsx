"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Building2, Mail, Phone, User, Users, BookOpen } from "lucide-react";

const PROGRAMS = [
  "Full Stack Development",
  "Data Science & AI",
  "Product Management",
  "Cloud & DevOps",
  "Business Analytics",
  "Leadership & Management",
  "Custom Program",
];

const SIZES = ["1–50", "51–200", "201–500", "500–1000", "1000+"];

const inputStyle = {
  width: "100%",
  padding: "12px 16px 12px 42px",
  borderRadius: 12,
  border: "1.5px solid #e2e8f0",
  fontSize: 14,
  color: "#0f172a",
  background: "white",
  outline: "none",
  fontFamily: "DM Sans, sans-serif",
  transition: "border-color 0.2s",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  fontSize: 13,
  fontWeight: 600,
  color: "#374151",
  marginBottom: 6,
  display: "block",
  fontFamily: "Sora, sans-serif",
};

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "", company: "", email: "",
    phone: "", size: "", program: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = async () => {
    const { name, company, email, phone } = form;
    if (!name || !company || !email || !phone) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "88px 0",
        background: "linear-gradient(135deg, #0a1f5c 0%, #1a3a8f 55%, #1e40af 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position:"absolute", top:-80, right:-80, width:400, height:400,
        borderRadius:"50%", background:"radial-gradient(circle, rgba(96,165,250,0.15), transparent)",
        pointerEvents:"none",
      }} />
      <div style={{
        position:"absolute", bottom:-60, left:-60, width:300, height:300,
        borderRadius:"50%", background:"radial-gradient(circle, rgba(249,115,22,0.12), transparent)",
        pointerEvents:"none",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <div className="lead-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>

          {/* LEFT — Copy */}
          <div style={{ color: "white" }}>
            <p style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#fb923c", marginBottom: 12,
            }}>
              Partner With Us
            </p>
            <h2 style={{
              fontFamily: "Sora, sans-serif", fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 42px)",
              lineHeight: 1.2, marginBottom: 20, color: "white",
            }}>
              Let's Build Your Team's Future Together
            </h2>
            <p style={{ fontSize: 16, color: "#bfdbfe", lineHeight: 1.75, marginBottom: 36 }}>
              Tell us a bit about your organization and we'll get back within 24 hours
              with a tailored program recommendation — completely free.
            </p>

            {/* Trust points */}
            {[
              "No commitment required",
              "Custom proposal in 24 hours",
              "Dedicated L&D manager assigned",
              "Programs starting from ₹499/employee",
            ].map((point) => (
              <div key={point} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                <CheckCircle2 size={16} style={{ color:"#34d399", flexShrink:0 }} />
                <span style={{ fontSize:14, color:"#e0f2fe" }}>{point}</span>
              </div>
            ))}
          </div>

          {/* RIGHT — Form */}
          <div style={{
            background:"white",
            borderRadius:24,
            padding:"40px 36px",
            boxShadow:"0 24px 64px rgba(0,0,0,0.2)",
          }}>
            {success ? (
              /* Success state */
              <div style={{ textAlign:"center", padding:"32px 0" }}>
                <div style={{
                  width:72, height:72, borderRadius:"50%",
                  background:"#f0fdf4", border:"2px solid #bbf7d0",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  margin:"0 auto 20px",
                }}>
                  <CheckCircle2 size={36} style={{ color:"#16a34a" }} />
                </div>
                <h3 style={{
                  fontFamily:"Sora, sans-serif", fontWeight:700,
                  fontSize:22, color:"#0f172a", marginBottom:10,
                }}>
                  Request Received!
                </h3>
                <p style={{ fontSize:15, color:"#64748b", lineHeight:1.7, marginBottom:24 }}>
                  Our enterprise team will reach out within <strong>24 hours</strong> with
                  a custom program proposal for {form.company || "your organization"}.
                </p>
                <button
                  onClick={() => { setSuccess(false); setForm({ name:"", company:"", email:"", phone:"", size:"", program:"" }); }}
                  style={{
                    padding:"11px 24px", borderRadius:12,
                    background:"var(--blue-deep)", color:"white",
                    fontFamily:"Sora, sans-serif", fontWeight:600, fontSize:14,
                    border:"none", cursor:"pointer",
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily:"Sora, sans-serif", fontWeight:700,
                  fontSize:20, color:"#0f172a", marginBottom:6,
                }}>
                  Get a Free Program Proposal
                </h3>
                <p style={{ fontSize:13, color:"#64748b", marginBottom:28 }}>
                  Fill in the details below — takes under 2 minutes.
                </p>

                <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
                  {/* Name + Company */}
                  <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                    <div>
                      <label style={labelStyle}>Your Name *</label>
                      <div style={{ position:"relative" }}>
                        <User size={15} style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#94a3b8" }} />
                        <input
                          style={inputStyle}
                          placeholder="Rajesh Mehta"
                          value={form.name}
                          onChange={e => handleChange("name", e.target.value)}
                          onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; }}
                          onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Company *</label>
                      <div style={{ position:"relative" }}>
                        <Building2 size={15} style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#94a3b8" }} />
                        <input
                          style={inputStyle}
                          placeholder="Tata Consultancy"
                          value={form.company}
                          onChange={e => handleChange("company", e.target.value)}
                          onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; }}
                          onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="form-row" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
                    <div>
                      <label style={labelStyle}>Work Email *</label>
                      <div style={{ position:"relative" }}>
                        <Mail size={15} style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#94a3b8" }} />
                        <input
                          style={inputStyle}
                          placeholder="you@company.com"
                          type="email"
                          value={form.email}
                          onChange={e => handleChange("email", e.target.value)}
                          onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; }}
                          onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <div style={{ position:"relative" }}>
                        <Phone size={15} style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#94a3b8" }} />
                        <input
                          style={inputStyle}
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={e => handleChange("phone", e.target.value)}
                          onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; }}
                          onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Team size */}
                  <div>
                    <label style={labelStyle}>Team Size</label>
                    <div style={{ position:"relative" }}>
                      <Users size={15} style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#94a3b8", zIndex:1 }} />
                      <select
                        style={{ ...inputStyle, appearance:"none", cursor:"pointer", color: form.size ? "#0f172a" : "#94a3b8" }}
                        value={form.size}
                        onChange={e => handleChange("size", e.target.value)}
                        onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; }}
                      >
                        <option value="">Select team size</option>
                        {SIZES.map(s => <option key={s} value={s}>{s} employees</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Program interest */}
                  <div>
                    <label style={labelStyle}>Program Interest</label>
                    <div style={{ position:"relative" }}>
                      <BookOpen size={15} style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)", color:"#94a3b8", zIndex:1 }} />
                      <select
                        style={{ ...inputStyle, appearance:"none", cursor:"pointer", color: form.program ? "#0f172a" : "#94a3b8" }}
                        value={form.program}
                        onChange={e => handleChange("program", e.target.value)}
                        onFocus={e => { e.currentTarget.style.borderColor = "#2563eb"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = "#e2e8f0"; }}
                      >
                        <option value="">Select a program</option>
                        {PROGRAMS.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div style={{
                      padding:"10px 14px", borderRadius:10,
                      background:"#fff1f2", border:"1px solid #fecdd3",
                      color:"#be123c", fontSize:13,
                    }}>
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                      padding:"14px 0", borderRadius:14,
                      background: loading ? "#94a3b8" : "var(--orange)",
                      color:"white",
                      fontFamily:"Sora, sans-serif", fontWeight:700, fontSize:15,
                      border:"none", cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: loading ? "none" : "0 4px 16px rgba(249,115,22,0.35)",
                      transition:"all 0.2s",
                      width:"100%",
                    }}
                  >
                    {loading ? (
                      <><Loader2 size={16} style={{ animation:"spin 1s linear infinite" }} /> Submitting...</>
                    ) : (
                      <><Send size={16} /> Get My Free Proposal</>
                    )}
                  </button>

                  <p style={{ textAlign:"center", fontSize:12, color:"#94a3b8" }}>
                    By submitting, you agree to our Privacy Policy. No spam, ever.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .lead-grid { grid-template-columns: 1fr 1.2fr; }
        @media (max-width: 900px) {
          .lead-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
