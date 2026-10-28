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
      term: "18वीं उत्तर प्रदेश विधानसभा (2022 - 2027)",
      isKey: true,
      tag: "क्षेत्रीय विधायक (190 लंभुआ)",
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
      term: "18वीं लोकसभा सदस्य (2024 - 2029)",
      isKey: true,
      tag: "माननीय सांसद (सुल्तानपुर)",
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
      term: "त्रिस्तरीय पंचायत कार्यकाल (2021 - 2026)",
      isKey: true,
      tag: "ग्राम प्रधान (प्रथम नागरिक)",
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
      term: "क्षेत्र पंचायत प्रमुख (2021 - 2026)",
      isKey: true,
      tag: "ब्लॉक प्रमुख (लंभुआ)",
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
      term: "पंचायती राज प्रशासनिक सेवा",
      isKey: false,
      tag: "ग्राम विकास अधिकारी (VDO)",
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
      term: "राजस्व विभाग, तहसील लंभुआ",
      isKey: false,
      tag: "राजस्व अधिकारी",
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
    <section id="representatives" style={{ padding: "90px 0", backgroundColor: "#fdfcf7" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="vip-badge">
            <ShieldCheck size={16} />
            <span>{t("rep_badge")}</span>
          </div>
          <h2 className="section-title">{t("rep_title")}</h2>
          <p className="section-subtitle">{t("rep_subtitle")}</p>
        </div>

        {/* Top Key Representatives Grid (MLA Sitaram Verma, MP Rambhual Nishad, Pradhan, Block Pramukh) */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "26px",
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
                border: "2px solid #e7dfcc",
                borderRadius: "22px",
                overflow: "hidden",
                padding: "0",
                backgroundColor: "#ffffff"
              }}
            >
              {/* Card Top Banner with Photo */}
              <div style={{ position: "relative", height: "290px", width: "100%", backgroundColor: "#0b2618" }}>
                <Image
                  src={rep.image}
                  alt={rep.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(7, 37, 23, 0.95) 100%)" }} />
                
                {/* Designation badge on image */}
                <div style={{ position: "absolute", top: "14px", left: "14px", zIndex: 5 }}>
                  <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 700, boxShadow: "0 2px 10px rgba(0,0,0,0.3)", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    <ShieldCheck size={13} />
                    {rep.tag}
                  </span>
                </div>

                {/* Verified icon */}
                <div style={{ position: "absolute", top: "14px", right: "14px", zIndex: 5 }}>
                  <span style={{ backgroundColor: "rgba(255,255,255,0.92)", color: "#166534", padding: "3px 9px", borderRadius: "12px", fontSize: "0.72rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <CheckCircle2 size={12} color="#16a34a" />
                    सत्यापित
                  </span>
                </div>

                {/* Name over bottom gradient */}
                <div style={{ position: "absolute", bottom: "14px", left: "18px", right: "18px", zIndex: 5, color: "#ffffff" }}>
                  <span style={{ fontSize: "0.82rem", color: "#fbbf24", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {rep.title}
                  </span>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: "2px 0 0 0", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>
                    {rep.name}
                  </h3>
                </div>
              </div>

              {/* Body Details */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#4b5563", fontSize: "0.85rem", marginBottom: "12px" }}>
                  <MapPin size={15} color="#059669" />
                  <span style={{ fontWeight: 600 }}>{rep.ward}</span>
                </div>

                {/* Quote Box */}
                <div style={{ backgroundColor: "#fbf8ef", borderLeft: "4px solid #d97706", padding: "10px 12px", borderRadius: "0 8px 8px 0", fontSize: "0.88rem", color: "#374151", fontStyle: "italic", marginBottom: "16px", flexGrow: 1, lineHeight: 1.5 }}>
                  {rep.msg}
                </div>

                {/* Term */}
                <div style={{ fontSize: "0.78rem", color: "#6b7280", borderTop: "1px solid #f3ece0", paddingTop: "10px", marginBottom: "14px", fontWeight: 600 }}>
                  कार्यकाल: {rep.term}
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  <a
                    href={`tel:${rep.phone}`}
                    className="btn btn-secondary"
                    style={{ padding: "8px", fontSize: "0.82rem", borderRadius: "8px" }}
                  >
                    <Phone size={14} color="#0e3d28" />
                    <span>{t("call_now")}</span>
                  </a>

                  <button
                    onClick={() => setActiveModalRep(rep.name)}
                    className="btn btn-primary"
                    style={{ padding: "8px", fontSize: "0.82rem", borderRadius: "8px" }}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "24px",
            background: "#ffffff",
            padding: "26px",
            borderRadius: "20px",
            border: "1.5px solid #e2c079",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}
        >
          {reps.filter(r => !r.isKey).map((rep) => (
            <div key={rep.id} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div style={{ position: "relative", width: "66px", height: "66px", borderRadius: "50%", overflow: "hidden", border: "2px solid #d97706", flexShrink: 0, boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Image
                  src={rep.image}
                  alt={rep.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ flexGrow: 1 }}>
                <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "#d97706", textTransform: "uppercase" }}>
                  {rep.title}
                </span>
                <h4 style={{ fontSize: "1.12rem", fontWeight: 800, color: "#0e3d28", margin: "2px 0 4px 0" }}>
                  {rep.name}
                </h4>
                <p style={{ fontSize: "0.82rem", color: "#6b7280", margin: 0, lineHeight: 1.4 }}>
                  {rep.msg}
                </p>
                <div style={{ marginTop: "6px", display: "flex", gap: "12px", fontSize: "0.8rem" }}>
                  <a href={`tel:${rep.phone}`} style={{ color: "#0e3d28", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <Phone size={12} color="#0e3d28" />
                    {rep.phone}
                  </a>
                  <button 
                    onClick={() => setActiveModalRep(rep.name)}
                    style={{ background: "none", border: "none", color: "#d97706", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}
                  >
                    संदेश भेजें
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
            backgroundColor: "rgba(0,0,0,0.7)", 
            zIndex: 1000, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "20px" 
          }}
        >
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              maxWidth: "480px", 
              width: "100%", 
              borderRadius: "20px", 
              padding: "28px", 
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)" 
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "0.8rem", color: "#d97706", fontWeight: 700 }}>सीधा जनसंपर्क</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28" }}>
                  {activeModalRep} को संदेश भेजें
                </h3>
              </div>
              <button 
                onClick={() => setActiveModalRep(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}
              >
                <X size={22} />
              </button>
            </div>

            {msgSent ? (
              <div style={{ textAlign: "center", padding: "30px 10px", color: "#15803d" }}>
                <CheckCircle2 size={48} style={{ margin: "0 auto 12px auto" }} />
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700 }}>आपका संदेश सफलतापूर्वक भेज दिया गया है!</h4>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", marginTop: "6px" }}>प्रतिनिधि कार्यालय आपसे शीघ्र संपर्क करेगा।</p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage}>
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                    आपका नाम
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा. राहुल कुमार (गरायें लंभुआ)"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.92rem" }}
                  />
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                    मोबाइल नंबर
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="98XXXXXXXX"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.92rem" }}
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                    आपका संदेश / विषय
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="गरायें गाँव के विकास अथवा समस्या संबंधित संदेश..."
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #d1d5db", fontSize: "0.92rem", resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ width: "100%", padding: "12px", borderRadius: "10px" }}
                >
                  <Send size={16} />
                  <span>संदेश प्रेषित करें</span>
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
