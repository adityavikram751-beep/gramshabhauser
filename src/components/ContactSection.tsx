"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  PhoneCall, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  Shield, 
  HeartPulse, 
  Flame, 
  Zap, 
  Baby, 
  Navigation
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const emergencyNumbers = [
    { title: t("police"), num: "112", icon: Shield, color: "#1e40af", bg: "#eff6ff" },
    { title: t("ambulance"), num: "108", icon: HeartPulse, color: "#dc2626", bg: "#fef2f2" },
    { title: t("fire"), num: "101", icon: Flame, color: "#ea580c", bg: "#fff7ed" },
    { title: t("bijli"), num: "1912", icon: Zap, color: "#d97706", bg: "#fffbeb" },
    { title: t("women_help"), num: "1090", icon: Shield, color: "#7c3aed", bg: "#f5f3ff" },
    { title: t("child_help"), num: "1098", icon: Baby, color: "#059669", bg: "#ecfdf5" },
  ];

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !msg.trim()) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setPhone("");
      setMsg("");
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: "90px 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="vip-badge">
            <PhoneCall size={16} />
            <span>{t("contact_badge")}</span>
          </div>
          <h2 className="section-title">{t("contact_title")}</h2>
          <p className="section-subtitle">{t("contact_subtitle")}</p>
        </div>

        {/* 24x7 Emergency Hotlines Grid */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", marginBottom: "18px", display: "flex", alignItems: "center", gap: "8px" }}>
            <AlertCircle size={20} color="#dc2626" />
            <span>{t("contact_helpline_title")} (24x7 निःशुल्क सेवा)</span>
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
            {emergencyNumbers.map((em, idx) => {
              const Icon = em.icon;
              return (
                <a
                  key={idx}
                  href={`tel:${em.num}`}
                  style={{
                    backgroundColor: em.bg,
                    border: `1.5px solid ${em.color}25`,
                    borderRadius: "16px",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: em.color, flexShrink: 0, boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.8rem", color: "#4b5563", fontWeight: 600, display: "block" }}>
                      {em.title}
                    </span>
                    <strong style={{ fontSize: "1.3rem", color: em.color, fontWeight: 800 }}>
                      {em.num}
                    </strong>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Information & Feedback Form Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "35px" 
          }}
        >
          
          {/* Left: Office Address & Landmark Card */}
          <div 
            style={{ 
              backgroundColor: "#fdfbf7", 
              borderRadius: "24px", 
              padding: "36px", 
              border: "1.5px solid #e7dfcc" 
            }}
          >
            <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase" }}>
              ग्राम सचिवालय
            </span>
            <h4 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0e3d28", margin: "4px 0 16px 0" }}>
              {t("contact_address_title")}
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "26px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={20} color="#059669" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#1f2937", fontSize: "0.95rem", display: "block" }}>पता</strong>
                  <span style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {t("contact_address")}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Clock size={20} color="#d97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#1f2937", fontSize: "0.95rem", display: "block" }}>{t("office_time")}</strong>
                  <span style={{ color: "#4b5563", fontSize: "0.9rem" }}>
                    {t("office_time_val")}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Mail size={20} color="#2563eb" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#1f2937", fontSize: "0.95rem", display: "block" }}>ईमेल</strong>
                  <span style={{ color: "#4b5563", fontSize: "0.9rem" }}>
                    {t("contact_email")}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Mock Village Map Card */}
            <div 
              style={{ 
                borderRadius: "16px", 
                overflow: "hidden", 
                border: "2px solid #e2c079",
                position: "relative",
                height: "190px",
                backgroundColor: "#e8f5e9"
              }}
            >
              <div style={{ position: "absolute", inset: 0, opacity: 0.25, backgroundImage: "radial-gradient(#15803d 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              
              {/* Landmark Pins */}
              <div style={{ position: "absolute", top: "25px", left: "30px", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#ffffff", padding: "4px 10px", borderRadius: "14px", boxShadow: "0 2px 6px rgba(0,0,0,0.15)", fontSize: "0.78rem", fontWeight: 700, color: "#0e3d28" }}>
                <MapPin size={14} color="#ea580c" />
                <span>प्राचीन शिव मंदिर</span>
              </div>

              <div style={{ position: "absolute", bottom: "30px", left: "45px", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#ffffff", padding: "4px 10px", borderRadius: "14px", boxShadow: "0 2px 6px rgba(0,0,0,0.15)", fontSize: "0.78rem", fontWeight: 700, color: "#0e3d28" }}>
                <Navigation size={14} color="#059669" />
                <span>अमृत सरोवर व पार्क</span>
              </div>

              <div style={{ position: "absolute", top: "50%", right: "30px", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#0e3d28", padding: "6px 12px", borderRadius: "14px", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", fontSize: "0.82rem", fontWeight: 800, color: "#fbbf24" }}>
                <MapPin size={16} color="#fbbf24" />
                <span>सचिवालय (Panchayat Bhawan)</span>
              </div>
            </div>
          </div>

          {/* Right: Message / Feedback Form */}
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "24px", 
              padding: "36px", 
              border: "1.5px solid #e7dfcc",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
            }}
          >
            <h4 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0e3d28", marginBottom: "6px" }}>
              {t("feedback_title")}
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "20px" }}>
              गाँव के विकास अथवा किसी सेवा के संबंध में अपना विचार या संदेश सीधे साझा करें।
            </p>

            {sent ? (
              <div style={{ backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", padding: "30px", borderRadius: "16px", textAlign: "center", color: "#065f46" }}>
                <CheckCircle2 size={42} style={{ margin: "0 auto 10px auto" }} />
                <h5 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{t("feedback_success")}</h5>
                <p style={{ fontSize: "0.85rem", color: "#047857", marginTop: "4px" }}>सचिवालय टीम आपसे संपर्क करेगी।</p>
              </div>
            ) : (
              <form onSubmit={handleSendFeedback}>
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                    {t("feedback_name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="आपका पूरा नाम"
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                    {t("feedback_phone")} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98XXXXXXXX"
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                    {t("feedback_msg")} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="अपना संदेश यहाँ लिखें..."
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none", resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px", borderRadius: "10px" }}
                >
                  <Send size={16} />
                  <span>{t("feedback_send")}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
