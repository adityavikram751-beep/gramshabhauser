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
    <section id="history" style={{ padding: "90px 0", backgroundColor: "#f6f3ea" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="vip-badge">
            <Landmark size={16} />
            <span>{t("hist_badge")}</span>
          </div>
          <h2 className="section-title">{t("hist_title")}</h2>
          <p className="section-subtitle">{t("hist_subtitle")}</p>
        </div>

        {/* Tab Switcher */}
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "12px", 
            flexWrap: "wrap", 
            marginBottom: "40px" 
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
                  padding: "12px 24px",
                  borderRadius: "30px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  border: isActive ? "2px solid #d97706" : "1.5px solid #d1cebe",
                  backgroundColor: isActive ? "#0e3d28" : "#ffffff",
                  color: isActive ? "#fbbf24" : "#374151",
                  boxShadow: isActive ? "0 8px 20px rgba(14,61,40,0.2)" : "0 2px 6px rgba(0,0,0,0.04)"
                }}
              >
                <Icon size={18} color={isActive ? "#fbbf24" : "#b45309"} />
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
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "35px",
              alignItems: "center",
              background: "#ffffff",
              padding: "40px",
              borderRadius: "24px",
              border: "1.5px solid #e2c079",
              boxShadow: "0 12px 35px rgba(0,0,0,0.06)"
            }}
          >
            <div>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                लंभुआ, सुल्तानपुर (पिन: 227304)
              </span>
              <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#0e3d28", margin: "6px 0 18px 0" }}>
                गरायें की पावन माटी व 109 वर्ष पुरानी शिक्षण विरासत
              </h3>
              <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "16px" }}>
                {t("hist_origin_p1")}
              </p>
              <p style={{ color: "#4b5563", fontSize: "1.02rem", lineHeight: 1.7, marginBottom: "26px" }}>
                {t("hist_origin_p2")}
              </p>

              {/* Stat badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
                <div style={{ backgroundColor: "#fef3c7", padding: "14px", borderRadius: "14px", textAlign: "center", border: "1px solid #fde68a" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#92400e", display: "block" }}>
                    {t("hist_origin_stat1")}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "#78350f", fontWeight: 600 }}>
                    {t("hist_origin_stat1_label")}
                  </span>
                </div>

                <div style={{ backgroundColor: "#ecfdf5", padding: "14px", borderRadius: "14px", textAlign: "center", border: "1px solid #a7f3d0" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#065f46", display: "block" }}>
                    {t("hist_origin_stat2")}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "#064e3b", fontWeight: 600 }}>
                    {t("hist_origin_stat2_label")}
                  </span>
                </div>

                <div style={{ backgroundColor: "#eff6ff", padding: "14px", borderRadius: "14px", textAlign: "center", border: "1px solid #bfdbfe" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1e40af", display: "block" }}>
                    {t("hist_origin_stat3")}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "#1e3a8a", fontWeight: 600 }}>
                    {t("hist_origin_stat3_label")}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ position: "relative", height: "420px", borderRadius: "20px", overflow: "hidden", border: "3px solid #e7dfcc", boxShadow: "0 15px 35px rgba(0,0,0,0.12)" }}>
              <Image
                src="/images/school.jpg"
                alt="Primary School Garayen Established 1917"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", backgroundColor: "rgba(7, 37, 23, 0.88)", backdropFilter: "blur(6px)", padding: "14px 18px", borderRadius: "12px", color: "#ffffff" }}>
                <span style={{ color: "#fbbf24", fontSize: "0.82rem", fontWeight: 700, display: "block" }}>
                  ऐतिहासिक प्राथमिक विद्यालय (स्थापना: 1917 ई.)
                </span>
                <p style={{ margin: "2px 0 0 0", fontSize: "0.92rem", fontWeight: 600 }}>
                  प्राथमिक विद्यालय गरायें (Ps Garayen) - 109 वर्षों से क्षेत्र में ज्ञान की पावन ज्योति
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Durga Puja (Real Sultanpur/Lambhua Festival) */}
        {activeTab === "durgapuja" && (
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "35px",
              alignItems: "center",
              background: "#ffffff",
              padding: "36px",
              borderRadius: "24px",
              border: "2px solid #e2c079",
              boxShadow: "0 12px 35px rgba(0,0,0,0.06)"
            }}
          >
            <div style={{ position: "relative", height: "420px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}>
              <Image
                src="/images/durgapuja.jpg"
                alt="Lambhua Sultanpur Durga Puja Celebration"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                <span style={{ backgroundColor: "#dc2626", color: "#ffffff", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <Sparkles size={15} />
                  देश का दूसरा सबसे बड़ा दुर्गा पूजा
                </span>
              </div>
            </div>

            <div>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                सुल्तानपुर की अद्वितीय पहचान
              </span>
              <h3 style={{ fontSize: "1.95rem", fontWeight: 800, color: "#0e3d28", margin: "6px 0 16px 0" }}>
                {t("durgapuja_title")}
              </h3>
              <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "18px" }}>
                {t("durgapuja_desc")}
              </p>

              {/* Visarjan box */}
              <div style={{ backgroundColor: "#fef3c7", borderLeft: "4px solid #d97706", padding: "14px 18px", borderRadius: "0 12px 12px 0", marginBottom: "22px" }}>
                <span style={{ fontWeight: 700, color: "#92400e", display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  <MapPin size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                  {t("durgapuja_visarjan")}
                </span>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ backgroundColor: "#fee2e2", color: "#991b1b", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700 }}>
                  ✓ विजयादशमी से शरद पूर्णिमा तक भव्य मेला
                </span>
                <span style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600 }}>
                  ✓ भव्य रोशनी व ढाक की धुन
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
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                gap: "35px",
                alignItems: "center",
                background: "#ffffff",
                padding: "36px",
                borderRadius: "24px",
                border: "2px solid #e2c079",
                marginBottom: "30px",
                boxShadow: "0 12px 35px rgba(0,0,0,0.06)"
              }}
            >
              <div style={{ position: "relative", height: "400px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}>
                <Image
                  src="/images/mandir.jpg"
                  alt="Garayen Baba Siddheshwar Mahadev Mandir"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", top: "16px", left: "16px" }}>
                  <span style={{ backgroundColor: "#ea580c", color: "#ffffff", padding: "6px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    <Flame size={15} />
                    प्राचीन शिव धाम
                  </span>
                </div>
              </div>

              <div>
                <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  आध्यात्मिक आस्था का केंद्र
                </span>
                <h3 style={{ fontSize: "1.95rem", fontWeight: 800, color: "#0e3d28", margin: "6px 0 16px 0" }}>
                  {t("mandir_title")}
                </h3>
                <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "18px" }}>
                  {t("mandir_desc")}
                </p>

                {/* Aarti box */}
                <div style={{ backgroundColor: "#fef3c7", borderLeft: "4px solid #d97706", padding: "14px 18px", borderRadius: "0 12px 12px 0", marginBottom: "22px" }}>
                  <span style={{ fontWeight: 700, color: "#92400e", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem" }}>
                    <Clock size={16} />
                    {t("mandir_aarti")}
                  </span>
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <span style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600 }}>
                    ✓ महाशिवरात्रि पर जलाभिषेक
                  </span>
                  <span style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600 }}>
                    ✓ सावन मास में कांवड़ यात्रा
                  </span>
                  <span style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "6px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600 }}>
                    ✓ दीपोत्सव व सुंदरकांड
                  </span>
                </div>
              </div>
            </div>

            {/* Dhopap Dham Card */}
            <div className="card-vip" style={{ border: "2px solid #e2c079" }}>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase" }}>
                पौराणिक गोमती तीर्थ
              </span>
              <h4 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0e3d28", margin: "6px 0 10px 0" }}>
                {t("mandir_dhopap_title")}
              </h4>
              <p style={{ color: "#4b5563", fontSize: "0.98rem", lineHeight: 1.6, marginBottom: "14px" }}>
                {t("mandir_dhopap_desc")}
              </p>
              <div style={{ color: "#059669", fontSize: "0.88rem", fontWeight: 600 }}>
                📍 स्थान: लंभुआ, गोमती नदी तट (सुल्तानपुर)
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Market (Haat Bazaar) */}
        {activeTab === "market" && (
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "35px",
              alignItems: "center",
              background: "#ffffff",
              padding: "36px",
              borderRadius: "24px",
              border: "2px solid #e2c079",
              boxShadow: "0 12px 35px rgba(0,0,0,0.06)"
            }}
          >
            <div>
              <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                ग्रामीण व्यापार व स्वाद
              </span>
              <h3 style={{ fontSize: "1.95rem", fontWeight: 800, color: "#0e3d28", margin: "6px 0 16px 0" }}>
                {t("market_title")}
              </h3>
              <p style={{ color: "#4b5563", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "20px" }}>
                {t("market_p1")}
              </p>

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                {[
                  t("market_feat1"),
                  t("market_feat2"),
                  t("market_feat3"),
                  "कुम्हारों के शुद्ध मिट्टी के कुल्हड़ व मटके",
                  "किसानों के लिए पारंपरिक लोहे के कृषि औज़ार"
                ].map((feat, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600, color: "#1f2937" }}>
                    <CheckCircle size={18} color="#059669" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Timing Box */}
              <div style={{ backgroundColor: "#ecfdf5", border: "1.5px solid #a7f3d0", padding: "14px 18px", borderRadius: "14px" }}>
                <span style={{ fontWeight: 700, color: "#065f46", display: "flex", alignItems: "center", gap: "8px", fontSize: "0.95rem" }}>
                  <Calendar size={18} />
                  {t("market_timing")}
                </span>
              </div>
            </div>

            <div style={{ position: "relative", height: "420px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 35px rgba(0,0,0,0.15)" }}>
              <Image
                src="/images/market.jpg"
                alt="Garayen Haat Bazaar with Jalebi Sweets"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px", backgroundColor: "rgba(0, 0, 0, 0.78)", backdropFilter: "blur(6px)", padding: "12px 16px", borderRadius: "12px", color: "#ffffff" }}>
                <span style={{ color: "#fbbf24", fontSize: "0.82rem", fontWeight: 700, display: "block" }}>
                  प्रसिद्ध स्वाद
                </span>
                <p style={{ margin: "2px 0 0 0", fontSize: "0.9rem", fontWeight: 600 }}>
                  श्री गणेश जलेबी व मिष्ठान भंडार - शुद्ध देसी घी की गरमा-गरम कुरकुरी जलेबी
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
