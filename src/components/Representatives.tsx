"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Send,
  X,
  Award
} from "lucide-react";

export const Representatives: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeModalRep, setActiveModalRep] = useState<string | null>(null);
  const [msgSent, setMsgSent] = useState(false);

  const reps = [
    {
      id: "vidhayak",
      title: t("vidhayak_title"),
      name: t("vidhayak_name"),
      ward: t("vidhayak_ward"),
      image: "/images/vidhayak.jpg",
      phone: "+91 94150 12345",
      whatsapp: "919415012345",
      email: "mla.lambhua@up.gov.in",
      msg: t("vidhayak_msg"),
      term: {
        hi: "18वीं उत्तर प्रदेश विधानसभा (2022 - 2027)",
        en: "18th Uttar Pradesh Legislative Assembly (2022 - 2027)"
      },
      isKey: true,
      tag: {
        hi: "क्षेत्रीय विधायक (190 लंभुआ)",
        en: "MLA (190 Lambhua Constituency)"
      },
    },
    {
      id: "sansad",
      title: t("sansad_title"),
      name: t("sansad_name"),
      ward: t("sansad_ward"),
      image: "/images/sansad.jpg",
      phone: "+91 98390 54321",
      whatsapp: "919839054321",
      email: "mp.sultanpur@sansad.nic.in",
      msg: t("sansad_msg"),
      term: {
        hi: "18वीं लोकसभा सदस्य (2024 - 2029)",
        en: "Member of Parliament, 18th Lok Sabha (2024 - 2029)"
      },
      isKey: true,
      tag: {
        hi: "माननीय सांसद (सुल्तानपुर)",
        en: "Member of Parliament (Sultanpur)"
      },
    },
    {
      id: "pradhan",
      title: t("pradhan_title"),
      name: t("pradhan_name"),
      ward: t("pradhan_ward"),
      image: "/images/pradhan.jpg",
      phone: "+91 94510 24891",
      whatsapp: "919451024891",
      email: "pradhan.garayen@up.gov.in",
      msg: t("pradhan_msg"),
      term: {
        hi: "त्रिस्तरीय पंचायत कार्यकाल (2021 - 2026)",
        en: "Three-Tier Panchayat Tenure (2021 - 2026)"
      },
      isKey: true,
      tag: {
        hi: "ग्राम प्रधान (प्रथम नागरिक)",
        en: "Gram Pradhan (First Citizen)"
      },
    },
    {
      id: "pramukh",
      title: t("pramukh_title"),
      name: t("pramukh_name"),
      ward: t("pramukh_ward"),
      image: "/images/bdc.jpg",
      phone: "+91 97920 67890",
      whatsapp: "919792067890",
      email: "pramukh.lambhua@up.gov.in",
      msg: t("pramukh_msg"),
      term: {
        hi: "क्षेत्र पंचायत प्रमुख (2021 - 2026)",
        en: "Block Panchayat Chief (2021 - 2026)"
      },
      isKey: true,
      tag: {
        hi: "ब्लॉक प्रमुख (लंभुआ)",
        en: "Block Pramukh (Lambhua)"
      },
    },
    {
      id: "sachiv",
      title: t("sachiv_title"),
      name: t("sachiv_name"),
      ward: t("sachiv_ward"),
      image: "/images/seal.jpg",
      phone: "+91 91250 45678",
      whatsapp: "919125045678",
      email: "vdo.garayen@up.gov.in",
      msg: t("sachiv_msg"),
      term: {
        hi: "पंचायती राज प्रशासनिक सेवा",
        en: "Panchayati Raj Administrative Service"
      },
      isKey: false,
      tag: {
        hi: "ग्राम विकास अधिकारी (VDO)",
        en: "Village Development Officer (VDO)"
      },
    },
    {
      id: "lekhpal",
      title: t("lekhpal_title"),
      name: t("lekhpal_name"),
      ward: t("lekhpal_ward"),
      image: "/images/seal.jpg",
      phone: "+91 96160 23456",
      whatsapp: "919616023456",
      email: "lekhpal.lambhua@up.gov.in",
      msg: t("lekhpal_msg"),
      term: {
        hi: "राजस्व विभाग, तहसील लंभुआ",
        en: "Revenue Dept, Tehsil Lambhua"
      },
      isKey: false,
      tag: {
        hi: "राजस्व अधिकारी (लेखपाल)",
        en: "Revenue Officer (Lekhpal)"
      },
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
      setActiveModalRep(null);
    }, 2000);
  };

  return (
    <section id="representatives" style={{ padding: "clamp(40px, 6vw, 90px) 0", backgroundColor: "#fffdfa" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a" }}>
            <ShieldCheck size={16} />
            <span>{t("rep_badge")}</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#451a03" }}>{t("rep_title")}</h2>
          <p className="section-subtitle" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: "#78350f" }}>{t("rep_subtitle")}</p>
        </div>

        {/* Top Key Representatives Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", 
            gap: "24px",
            marginBottom: "35px"
          }}
        >
          {reps.filter(r => r.isKey).map((rep) => (
            <div 
              key={rep.id} 
              className="card-vip" 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                border: "1.5px solid #fde68a",
                borderRadius: "20px",
                overflow: "hidden",
                padding: "0",
                backgroundColor: "#ffffff",
                boxShadow: "0 6px 20px rgba(217, 119, 6, 0.08)"
              }}
            >
              {/* Card Top Banner with Photo */}
              <div style={{ position: "relative", height: "280px", width: "100%", backgroundColor: "#451a03" }}>
                <Image
                  src={rep.image}
                  alt={rep.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(69, 26, 3, 0.96) 100%)" }} />
                
                {/* Designation badge on image */}
                <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 5 }}>
                  <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 700, boxShadow: "0 2px 10px rgba(0,0,0,0.3)", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    <ShieldCheck size={13} />
                    {lang === "hi" ? rep.tag.hi : rep.tag.en}
                  </span>
                </div>

                {/* Verified icon */}
                <div style={{ position: "absolute", top: "14px", right: "14px", zIndex: 5 }}>
                  <span style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#78350f", padding: "3px 9px", borderRadius: "12px", fontSize: "0.72rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <CheckCircle2 size={12} color="#d97706" />
                    {lang === "hi" ? "सत्यापित" : "Verified"}
                  </span>
                </div>

                {/* Name over bottom gradient */}
                <div style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px", zIndex: 5, color: "#ffffff" }}>
                  <span style={{ fontSize: "0.82rem", color: "#fef3c7", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {rep.title}
                  </span>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "2px 0 0 0", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>
                    {rep.name}
                  </h3>
                </div>
              </div>

              {/* Body Details */}
              <div style={{ padding: "18px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#78350f", fontSize: "0.85rem", marginBottom: "12px" }}>
                  <MapPin size={15} color="#d97706" />
                  <span style={{ fontWeight: 600 }}>{rep.ward}</span>
                </div>

                {/* Quote Box */}
                <div style={{ backgroundColor: "#fffbeb", borderLeft: "4px solid #d97706", padding: "10px 12px", borderRadius: "0 8px 8px 0", fontSize: "0.88rem", color: "#451a03", fontStyle: "italic", marginBottom: "16px", flexGrow: 1, lineHeight: 1.5 }}>
                  {rep.msg}
                </div>

                {/* Term */}
                <div style={{ fontSize: "0.78rem", color: "#92400e", borderTop: "1px solid #fef3c7", paddingTop: "10px", marginBottom: "14px", fontWeight: 600 }}>
                  {lang === "hi" ? "कार्यकाल: " : "Tenure: "}
                  {lang === "hi" ? rep.term.hi : rep.term.en}
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <a
                    href={`tel:${rep.phone}`}
                    className="btn btn-secondary"
                    style={{ padding: "8px 10px", fontSize: "0.82rem", borderRadius: "8px", border: "1px solid #fde68a" }}
                  >
                    <Phone size={14} color="#d97706" />
                    <span>{t("call_now")}</span>
                  </a>

                  <button
                    onClick={() => setActiveModalRep(rep.name)}
                    className="btn btn-primary"
                    style={{ padding: "8px 10px", fontSize: "0.82rem", borderRadius: "8px" }}
                  >
                    <Mail size={14} />
                    <span>{t("contact_rep_btn")}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Administrative Officers (Sachiv & Lekhpal) Row */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
            gap: "24px",
            background: "#ffffff",
            padding: "24px",
            borderRadius: "20px",
            border: "1.5px solid #fde68a",
            boxShadow: "0 6px 20px rgba(217, 119, 6, 0.06)"
          }}
        >
          {reps.filter(r => !r.isKey).map((rep) => (
            <div key={rep.id} style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ position: "relative", width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: "2px solid #d97706", flexShrink: 0, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Image
                  src={rep.image}
                  alt={rep.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flexGrow: 1, minWidth: "180px" }}>
                <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#d97706", textTransform: "uppercase" }}>
                  {rep.title}
                </span>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#451a03", margin: "2px 0 4px 0" }}>
                  {rep.name}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#57534e", margin: 0, lineHeight: 1.4 }}>
                  {rep.msg}
                </p>
                <div style={{ marginTop: "6px", display: "flex", gap: "12px", fontSize: "0.8rem", flexWrap: "wrap" }}>
                  <a href={`tel:${rep.phone}`} style={{ color: "#78350f", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <Phone size={12} color="#d97706" />
                    {rep.phone}
                  </a>
                  <button 
                    onClick={() => setActiveModalRep(rep.name)}
                    style={{ background: "none", border: "none", color: "#d97706", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}
                  >
                    {lang === "hi" ? "संदेश भेजें" : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Contact Leader Modal */}
      {activeModalRep && (
        <div 
          style={{ 
            position: "fixed", 
            inset: 0, 
            backgroundColor: "rgba(0,0,0,0.75)", 
            zIndex: 1000, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "16px" 
          }}
        >
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              maxWidth: "480px", 
              width: "100%", 
              borderRadius: "20px", 
              padding: "clamp(20px, 4vw, 28px)", 
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
              border: "1.5px solid #fde68a"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "#d97706", fontWeight: 700 }}>
                  {lang === "hi" ? "सीधा जनसंपर्क" : "Direct Connect"}
                </span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#451a03" }}>
                  {lang === "hi" ? `${activeModalRep} को संदेश भेजें` : `Message ${activeModalRep}`}
                </h3>
              </div>
              <button 
                onClick={() => setActiveModalRep(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#78350f", padding: "4px" }}
              >
                <X size={22} />
              </button>
            </div>

            {msgSent ? (
              <div style={{ textAlign: "center", padding: "30px 10px", color: "#16a34a" }}>
                <CheckCircle2 size={48} style={{ margin: "0 auto 12px auto" }} />
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  {lang === "hi" ? "आपका संदेश सफलतापूर्वक भेज दिया गया है!" : "Your message has been sent successfully!"}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#78350f", marginTop: "6px" }}>
                  {lang === "hi" ? "प्रतिनिधि कार्यालय आपसे शीघ्र संपर्क करेगा।" : "The representative's office will get back to you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage}>
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "आपका नाम" : "Your Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === "hi" ? "उदा. राहुल कुमार (गरायें लंभुआ)" : "e.g. Rahul Kumar (Garayen, Lambhua)"}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #fde68a", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "मोबाइल नंबर" : "Mobile Number"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="98XXXXXXXX"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #fde68a", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "आपका संदेश / विषय" : "Your Message / Subject"}
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={lang === "hi" ? "गरायें गाँव के विकास अथवा समस्या संबंधित संदेश..." : "Message regarding Garayen development or community issue..."}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #fde68a", fontSize: "0.92rem", resize: "vertical", outline: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px", borderRadius: "10px", fontSize: "0.95rem" }}
                >
                  <Send size={16} />
                  <span>{lang === "hi" ? "संदेश प्रेषित करें" : "Send Message"}</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
