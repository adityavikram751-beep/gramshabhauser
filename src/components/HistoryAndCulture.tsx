"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Landmark, 
  Sparkles, 
  ShoppingBag, 
  Flame, 
  Clock, 
  Calendar,
  CheckCircle,
  GraduationCap,
  MapPin
} from "lucide-react";

export const HistoryAndCulture: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"origin" | "durgapuja" | "mandir" | "market">("origin");

  return (
    <section id="history" style={{ padding: "clamp(40px, 6vw, 90px) 0", backgroundColor: "#fffdfa" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a" }}>
            <Landmark size={16} />
            <span>{t("hist_badge")}</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#451a03" }}>{t("hist_title")}</h2>
          <p className="section-subtitle" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: "#78350f" }}>{t("hist_subtitle")}</p>
        </div>

        {/* Tab Switcher */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "10px", 
            flexWrap: "wrap", 
            marginBottom: "36px" 
          }}
        >
          {[
            { id: "origin", label: t("hist_tab_origin"), icon: GraduationCap },
            { id: "durgapuja", label: t("hist_tab_durgapuja"), icon: Sparkles },
            { id: "mandir", label: t("hist_tab_mandir"), icon: Flame },
            { id: "market", label: t("hist_tab_market"), icon: ShoppingBag },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: isActive ? "2px solid #d97706" : "1.5px solid #fde68a",
                  backgroundColor: isActive ? "#d97706" : "#ffffff",
                  color: isActive ? "#ffffff" : "#78350f",
                  boxShadow: isActive ? "0 8px 20px rgba(217,119,6,0.25)" : "0 2px 6px rgba(0,0,0,0.04)"
                }}
              >
                <Icon size={17} color={isActive ? "#ffffff" : "#d97706"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: History & Primary School (1917) */}
        {activeTab === "origin" && (
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
              gap: "30px",
              alignItems: "center",
              background: "#ffffff",
              padding: "clamp(20px, 4vw, 36px)",
              borderRadius: "24px",
              border: "1.5px solid #fde68a",
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)"
            }}
          >
            <div>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                {lang === "hi" ? "लंभुआ, सुल्तानपुर (पिन: 227304)" : "Lambhua, Sultanpur (PIN: 227304)"}
              </span>
              <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#451a03", margin: "6px 0 16px 0", lineHeight: 1.3 }}>
                {lang === "hi" 
                  ? "गरायें की पावन माटी व 109 वर्ष पुरानी शिक्षण विरासत" 
                  : "Sacred Soil of Garayen & 109-Year Educational Heritage"}
              </h3>
              <p style={{ color: "#57534e", fontSize: "0.98rem", lineHeight: 1.7, marginBottom: "14px" }}>
                {t("hist_origin_p1")}
              </p>
              <p style={{ color: "#57534e", fontSize: "0.98rem", lineHeight: 1.7, marginBottom: "24px" }}>
                {t("hist_origin_p2")}
              </p>

              {/* Stat badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))", gap: "10px" }}>
                <div style={{ backgroundColor: "#fef3c7", padding: "12px", borderRadius: "12px", textAlign: "center", border: "1px solid #fde68a" }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#92400e", display: "block" }}>
                    {t("hist_origin_stat1")}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#78350f", fontWeight: 600 }}>
                    {t("hist_origin_stat1_label")}
                  </span>
                </div>

                <div style={{ backgroundColor: "#fffbeb", padding: "12px", borderRadius: "12px", textAlign: "center", border: "1px solid #fde68a" }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#d97706", display: "block" }}>
                    {t("hist_origin_stat2")}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#78350f", fontWeight: 600 }}>
                    {t("hist_origin_stat2_label")}
                  </span>
                </div>

                <div style={{ backgroundColor: "#fef3c7", padding: "12px", borderRadius: "12px", textAlign: "center", border: "1px solid #fde68a" }}>
                  <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#92400e", display: "block" }}>
                    {t("hist_origin_stat3")}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#78350f", fontWeight: 600 }}>
                    {t("hist_origin_stat3_label")}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", height: "360px", borderRadius: "20px", overflow: "hidden", border: "2px solid #fde68a", boxShadow: "0 10px 25px rgba(217, 119, 6, 0.1)" }}>
              <Image
                src="/images/school.jpg"
                alt="Primary School Garayen Established 1917"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", backgroundColor: "rgba(69, 26, 3, 0.92)", backdropFilter: "blur(6px)", padding: "14px 18px", borderRadius: "12px", color: "#ffffff" }}>
                <span style={{ color: "#fde68a", fontSize: "0.82rem", fontWeight: 700, display: "block" }}>
                  {lang === "hi" ? "ऐतिहासिक प्राथमिक विद्यालय (स्थापना: 1917 ई.)" : "Historic Primary School (Established 1917 AD)"}
                </span>
                <p style={{ margin: "2px 0 0 0", fontSize: "0.88rem", fontWeight: 600 }}>
                  {lang === "hi" 
                    ? "प्राथमिक विद्यालय गरायें (Ps Garayen) - 109 वर्षों से क्षेत्र में ज्ञान की पावन ज्योति"
                    : "Primary School Garayen - Spreading the beacon of education for 109 years"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Durga Puja */}
        {activeTab === "durgapuja" && (
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
              gap: "30px",
              alignItems: "center",
              background: "#ffffff",
              padding: "clamp(20px, 4vw, 36px)",
              borderRadius: "24px",
              border: "1.5px solid #fde68a",
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)"
            }}
          >
            <div style={{ position: "relative", height: "360px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(217, 119, 6, 0.12)" }}>
              <Image
                src="/images/durgapuja.jpg"
                alt="Lambhua Sultanpur Durga Puja Celebration"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Sparkles size={15} />
                  {lang === "hi" ? "देश का दूसरा सबसे बड़ा दुर्गा पूजा" : "Second Largest Durga Puja in India"}
                </span>
              </div>
            </div>

            <div>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                {lang === "hi" ? "सुल्तानपुर की अद्वितीय पहचान" : "Sultanpur's Renowned Identity"}
              </span>
              <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 1.95rem)", fontWeight: 800, color: "#451a03", margin: "6px 0 16px 0" }}>
                {t("durgapuja_title")}
              </h3>
              <p style={{ color: "#57534e", fontSize: "0.98rem", lineHeight: 1.7, marginBottom: "18px" }}>
                {t("durgapuja_desc")}
              </p>

              {/* Visarjan box */}
              <div style={{ backgroundColor: "#fef3c7", borderLeft: "4px solid #d97706", padding: "14px 18px", borderRadius: "0 12px 12px 0", marginBottom: "20px" }}>
                <span style={{ fontWeight: 700, color: "#92400e", display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.92rem", lineHeight: 1.5 }}>
                  <MapPin size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                  {t("durgapuja_visarjan")}
                </span>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "#fffbeb", color: "#78350f", border: "1px solid #fde68a", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700 }}>
                  {lang === "hi" ? "✓ विजयादशमी से शरद पूर्णिमा तक भव्य मेला" : "✓ Grand carnival from Vijayadashami to Sharad Purnima"}
                </span>
                <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 600 }}>
                  {lang === "hi" ? "✓ भव्य रोशनी व ढाक की धुन" : "✓ Dazzling illumination & Dhak music"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Mandir & Dhopap Dham */}
        {activeTab === "mandir" && (
          <div id="mandir-market">
            {/* Main Mandir Feature */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
                gap: "30px",
                alignItems: "center",
                background: "#ffffff",
                padding: "clamp(20px, 4vw, 36px)",
                borderRadius: "24px",
                border: "1.5px solid #fde68a",
                marginBottom: "26px",
                boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)"
              }}
            >
              <div style={{ position: "relative", height: "360px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(217, 119, 6, 0.12)" }}>
                <Image
                  src="/images/mandir.jpg"
                  alt="Garayen Baba Siddheshwar Mahadev Mandir"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                  <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <Flame size={15} />
                    {lang === "hi" ? "प्राचीन शिव धाम" : "Ancient Shiva Shrine"}
                  </span>
                </div>
              </div>

              <div>
                <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {lang === "hi" ? "आध्यात्मिक आस्था का केंद्र" : "Center of Spiritual Faith"}
                </span>
                <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 1.95rem)", fontWeight: 800, color: "#451a03", margin: "6px 0 16px 0" }}>
                  {t("mandir_title")}
                </h3>
                <p style={{ color: "#57534e", fontSize: "0.98rem", lineHeight: 1.7, marginBottom: "18px" }}>
                  {t("mandir_desc")}
                </p>

                {/* Aarti box */}
                <div style={{ backgroundColor: "#fef3c7", borderLeft: "4px solid #d97706", padding: "14px 18px", borderRadius: "0 12px 12px 0", marginBottom: "20px" }}>
                  <span style={{ fontWeight: 700, color: "#92400e", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem" }}>
                    <Clock size={16} />
                    {t("mandir_aarti")}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ backgroundColor: "#fffbeb", color: "#78350f", border: "1px solid #fde68a", padding: "6px 12px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 600 }}>
                    {lang === "hi" ? "✓ महाशिवरात्रि पर जलाभिषेक" : "✓ Jalabhishek on Mahashivratri"}
                  </span>
                  <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "6px 12px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 600 }}>
                    {lang === "hi" ? "✓ सावन मास में कांवड़ यात्रा" : "✓ Kanwar Yatra in Shravan month"}
                  </span>
                  <span style={{ backgroundColor: "#fffbeb", color: "#78350f", border: "1px solid #fde68a", padding: "6px 12px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 600 }}>
                    {lang === "hi" ? "✓ दीपोत्सव व सुंदरकांड" : "✓ Deepotsav & Sunderkand"}
                  </span>
                </div>
              </div>
            </div>

            {/* Dhopap Dham Card */}
            <div className="card-vip" style={{ border: "1.5px solid #fde68a" }}>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                {lang === "hi" ? "पौराणिक गोमती तीर्थ" : "Mythological Gomti Pilgrimage"}
              </span>
              <h4 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#451a03", margin: "6px 0 10px 0" }}>
                {t("mandir_dhopap_title")}
              </h4>
              <p style={{ color: "#57534e", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "14px" }}>
                {t("mandir_dhopap_desc")}
              </p>
              <div style={{ color: "#d97706", fontSize: "0.88rem", fontWeight: 700 }}>
                {lang === "hi" ? "📍 स्थान: लंभुआ, गोमती नदी तट (सुल्तानपुर)" : "📍 Location: Lambhua, Gomti River Bank (Sultanpur)"}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Market (Haat Bazaar) */}
        {activeTab === "market" && (
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", 
              gap: "30px",
              alignItems: "center",
              background: "#ffffff",
              padding: "clamp(20px, 4vw, 36px)",
              borderRadius: "24px",
              border: "1.5px solid #fde68a",
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)"
            }}
          >
            <div>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                {lang === "hi" ? "ग्रामीण व्यापार व स्वाद" : "Rural Commerce & Flavors"}
              </span>
              <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 1.95rem)", fontWeight: 800, color: "#451a03", margin: "6px 0 16px 0" }}>
                {t("market_title")}
              </h3>
              <p style={{ color: "#57534e", fontSize: "0.98rem", lineHeight: 1.7, marginBottom: "18px" }}>
                {t("market_p1")}
              </p>

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "22px" }}>
                {[
                  t("market_feat1"),
                  t("market_feat2"),
                  t("market_feat3"),
                  lang === "hi" ? "कुम्हारों के शुद्ध मिट्टी के कुल्हड़ व मटके" : "Traditional Clay Pottery & Kulhads",
                  lang === "hi" ? "किसानों के लिए पारंपरिक लोहे के कृषि औज़ार" : "Handcrafted Iron Agricultural Tools"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.92rem", fontWeight: 600, color: "#451a03" }}>
                    <CheckCircle size={17} color="#d97706" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Timing Box */}
              <div style={{ backgroundColor: "#fef3c7", border: "1.5px solid #fde68a", padding: "14px 18px", borderRadius: "14px" }}>
                <span style={{ fontWeight: 700, color: "#92400e", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem" }}>
                  <Calendar size={18} />
                  {t("market_timing")}
                </span>
              </div>
            </div>

            <div style={{ position: "relative", height: "360px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 10px 25px rgba(217, 119, 6, 0.12)" }}>
              <Image
                src="/images/market.jpg"
                alt="Garayen Haat Bazaar with Jalebi Sweets"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", backgroundColor: "rgba(69, 26, 3, 0.88)", backdropFilter: "blur(6px)", padding: "12px 16px", borderRadius: "12px", color: "#ffffff" }}>
                <span style={{ color: "#fde68a", fontSize: "0.82rem", fontWeight: 700, display: "block" }}>
                  {lang === "hi" ? "प्रसिद्ध स्वाद" : "Celebrated Taste"}
                </span>
                <p style={{ margin: "2px 0 0 0", fontSize: "0.88rem", fontWeight: 600 }}>
                  {lang === "hi" 
                    ? "श्री गणेश जलेबी व मिष्ठान भंडार - शुद्ध देसी घी की गरमा-गरम कुरकुरी जलेबी"
                    : "Shri Ganesh Sweets - Fresh crispy jalebis made with pure desi ghee"}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
