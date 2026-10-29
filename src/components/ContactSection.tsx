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
    <section id="contact" style={{ padding: "clamp(40px, 6vw, 90px) 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a" }}>
            <PhoneCall size={16} />
            <span>{t("contact_badge")}</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#451a03" }}>{t("contact_title")}</h2>
          <p className="section-subtitle" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: "#78350f" }}>{t("contact_subtitle")}</p>
        </div>

        {/* 24x7 Emergency Hotlines Grid */}
        <div style={{ marginBottom: "45px" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#451a03", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <AlertCircle size={20} color="#d97706" />
            <span>
              {t("contact_helpline_title")} {lang === "hi" ? "(24x7 निःशुल्क सेवा)" : "(24x7 Toll-Free)"}
            </span>
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "14px" }}>
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
                    padding: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", color: em.color, flexShrink: 0, boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "#57534e", fontWeight: 600, display: "block" }}>
                      {em.title}
                    </span>
                    <strong style={{ fontSize: "1.2rem", color: em.color, fontWeight: 800 }}>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
            gap: "28px" 
          }}
        >
          
          {/* Left: Office Address & Landmark Card */}
          <div 
            style={{ 
              backgroundColor: "#fffdfa", 
              borderRadius: "24px", 
              padding: "clamp(20px, 4vw, 36px)", 
              border: "1.5px solid #fde68a",
              boxShadow: "0 6px 20px rgba(217, 119, 6, 0.05)"
            }}
          >
            <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase" }}>
              {lang === "hi" ? "ग्राम सचिवालय" : "Panchayat Secretariat"}
            </span>
            <h4 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 800, color: "#451a03", margin: "4px 0 16px 0" }}>
              {t("contact_address_title")}
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={20} color="#d97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#451a03", fontSize: "0.95rem", display: "block" }}>
                    {lang === "hi" ? "पता" : "Address"}
                  </strong>
                  <span style={{ color: "#57534e", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {t("contact_address")}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Clock size={20} color="#d97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#451a03", fontSize: "0.95rem", display: "block" }}>{t("office_time")}</strong>
                  <span style={{ color: "#57534e", fontSize: "0.9rem" }}>
                    {t("office_time_val")}
                  </span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Mail size={20} color="#d97706" style={{ marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <strong style={{ color: "#451a03", fontSize: "0.95rem", display: "block" }}>
                    {lang === "hi" ? "ईमेल" : "Email"}
                  </strong>
                  <span style={{ color: "#57534e", fontSize: "0.9rem" }}>
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
                border: "1.5px solid #fde68a",
                position: "relative",
                height: "190px",
                backgroundColor: "#fffbeb"
              }}
            >
              <div style={{ position: "absolute", inset: 0, opacity: 0.35, backgroundImage: "radial-gradient(#d97706 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              
              {/* Landmark Pins */}
              <div style={{ position: "absolute", top: "20px", left: "20px", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#ffffff", padding: "4px 10px", borderRadius: "14px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", fontSize: "0.76rem", fontWeight: 700, color: "#451a03", border: "1px solid #fde68a" }}>
                <MapPin size={13} color="#d97706" />
                <span>{lang === "hi" ? "प्राचीन शिव मंदिर" : "Ancient Shiva Temple"}</span>
              </div>

              <div style={{ position: "absolute", bottom: "24px", left: "24px", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#ffffff", padding: "4px 10px", borderRadius: "14px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", fontSize: "0.76rem", fontWeight: 700, color: "#451a03", border: "1px solid #fde68a" }}>
                <Navigation size={13} color="#d97706" />
                <span>{lang === "hi" ? "अमृत सरोवर व पार्क" : "Amrit Sarovar & Park"}</span>
              </div>

              <div style={{ position: "absolute", top: "50%", right: "20px", transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: "6px", backgroundColor: "#451a03", padding: "6px 12px", borderRadius: "14px", boxShadow: "0 4px 12px rgba(69, 26, 3, 0.25)", fontSize: "0.8rem", fontWeight: 800, color: "#fde68a" }}>
                <MapPin size={15} color="#d97706" />
                <span>{lang === "hi" ? "सचिवालय (पंचायत भवन)" : "Secretariat (Panchayat Bhawan)"}</span>
              </div>
            </div>
          </div>

          {/* Right: Message / Feedback Form */}
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "24px", 
              padding: "clamp(20px, 4vw, 36px)", 
              border: "1.5px solid #fde68a",
              boxShadow: "0 6px 20px rgba(217, 119, 6, 0.05)" 
            }}
          >
            <h4 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.45rem)", fontWeight: 800, color: "#451a03", marginBottom: "6px" }}>
              {t("feedback_title")}
            </h4>
            <p style={{ fontSize: "0.9rem", color: "#78350f", marginBottom: "20px" }}>
              {lang === "hi" 
                ? "गाँव के विकास अथवा किसी सेवा के संबंध में अपना विचार या संदेश सीधे साझा करें।"
                : "Share your views, questions, or ideas regarding village development and public services directly."}
            </p>

            {sent ? (
              <div style={{ backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", padding: "30px", borderRadius: "16px", textAlign: "center", color: "#065f46" }}>
                <CheckCircle2 size={42} style={{ margin: "0 auto 10px auto" }} />
                <h5 style={{ fontSize: "1.15rem", fontWeight: 700 }}>{t("feedback_success")}</h5>
                <p style={{ fontSize: "0.85rem", color: "#047857", marginTop: "4px" }}>
                  {lang === "hi" ? "सचिवालय टीम आपसे संपर्क करेगी।" : "The secretariat team will contact you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendFeedback}>
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                    {t("feedback_name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === "hi" ? "आपका पूरा नाम" : "Your Full Name"}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                    {t("feedback_phone")} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98XXXXXXXX"
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                    {t("feedback_msg")} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder={lang === "hi" ? "अपना संदेश यहाँ लिखें..." : "Type your message here..."}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", resize: "vertical" }}
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
