"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Play, 
  MessageSquareWarning, 
  HeartHandshake, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  GraduationCap, 
  MapPin, 
  Award,
  Sparkles,
  Camera,
  Home as HomeIcon
} from "lucide-react";

const InstagramIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const HeroSlider: React.FC = () => {
  const { t } = useLanguage();

  const defaultSlides = [
    {
      id: "dwar",
      image: "/images/dwar.jpg",
      title: "ग्राम पंचायत गरायें (लंभुआ) - आपका हार्दिक स्वागत है",
      caption: "जनपद सुल्तानपुर (उ.प्र.) की पावन व ऐतिहासिक ग्राम पंचायत, पिन कोड: 227304",
    },
    {
      id: "durgapuja",
      image: "/images/durgapuja.jpg",
      title: "सुल्तानपुर व लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव",
      caption: "भारत की प्रसिद्ध दुर्गा पूजा व शरद पूर्णिमा पर पावन गोमती तट धोपाप धाम में भव्य विसर्जन",
    },
    {
      id: "aerial",
      image: "/images/hero.jpg",
      title: "गरायें - सुरम्य प्राकृतिक छटा एवं उपजाऊ धरा",
      caption: "हरित कृषि से परिपूर्ण, पावन सरोवरों और 109 वर्ष पुराने प्राथमिक विद्यालय (1917) की धरोहर",
    },
    {
      id: "mandir",
      image: "/images/mandir.jpg",
      title: "प्राचीन बाबा सिद्धेश्वर महादेव मंदिर",
      caption: "शताब्दियों पुराना स्वयंभू पावन धाम एवं भव्य दीपोत्सव की अलौकिक अनुभूति",
    },
    {
      id: "market",
      image: "/images/market.jpg",
      title: "गरायें-लंभुआ का ऐतिहासिक साप्ताहिक हाट बाज़ार",
      caption: "हस्तशिल्प, ताज़ी जैविक उपज, और प्रसिद्ध देसी घी की गरमा-गरम जलेबी का स्वाद",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [customImage, setCustomImage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [customInput, setCustomInput] = useState("");

  // Auto slide every 6 seconds if not custom
  useEffect(() => {
    if (customImage) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % defaultSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [customImage, defaultSlides.length]);

  const currentImgSrc = customImage || defaultSlides[activeSlide].image;

  const handleApplyCustomImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (customInput.trim()) {
      setCustomImage(customInput.trim());
      setModalOpen(false);
    }
  };

  const handleResetImage = () => {
    setCustomImage(null);
    setCustomInput("");
    setModalOpen(false);
  };

  return (
    <section id="home" style={{ position: "relative", backgroundColor: "#0b1f14", color: "#ffffff", overflow: "hidden" }}>
      
      {/* Big Hero Banner Image with smooth transition */}
      <div 
        style={{ 
          position: "relative", 
          minHeight: "700px", 
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 0 100px 0"
        }}
      >
        {/* Background Image Layer */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
          <Image
            src={currentImgSrc}
            alt="Gram Panchayat Garayen Lambhua Landscape"
            fill
            style={{ 
              objectFit: "cover", 
              filter: "brightness(0.72) contrast(1.1)",
              transition: "all 0.8s ease-in-out" 
            }}
            priority
          />
          {/* Subtle multi-layer gradient overlays for royal look & readable text */}
          <div 
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(180deg, rgba(7, 37, 23, 0.75) 0%, rgba(7, 37, 23, 0.4) 40%, rgba(7, 37, 23, 0.96) 100%)" 
            }} 
          />
          <div 
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.65) 100%)" 
            }} 
          />
        </div>

        {/* Hero Content Box */}
        <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
          
          {/* VIP Badge with Instagram link */}
          <a
            href="https://www.instagram.com/garaye_garawa/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              background: "linear-gradient(135deg, rgba(225, 48, 108, 0.25), rgba(217, 119, 6, 0.3))", 
              border: "1.5px solid #fbbf24", 
              backdropFilter: "blur(8px)", 
              padding: "8px 22px", 
              borderRadius: "30px", 
              marginBottom: "20px", 
              boxShadow: "0 4px 20px rgba(245, 158, 11, 0.3)",
              textDecoration: "none",
              color: "#fef08a",
              fontWeight: 700,
              fontSize: "0.95rem"
            }}
          >
            <Sparkles size={16} color="#fbbf24" />
            <span>{t("hero_badge")}</span>
            <InstagramIcon size={15} color="#f472b6" />
          </a>

          {/* Majestic Hero Headline */}
          <h1 
            style={{ 
              fontSize: "clamp(2.3rem, 5.5vw, 4.2rem)", 
              fontWeight: 800, 
              lineHeight: 1.18, 
              maxWidth: "1000px", 
              margin: "0 auto 18px auto", 
              textShadow: "0 4px 25px rgba(0, 0, 0, 0.85)" 
            }}
          >
            {t("hero_title_prefix")}{" "}
            <span 
              style={{ 
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                position: "relative"
              }}
            >
              {t("hero_title_highlight")}
            </span>
          </h1>

          {/* Subtitle with real Lambhua, Sultanpur info */}
          <p 
            style={{ 
              fontSize: "clamp(1.02rem, 1.8vw, 1.25rem)", 
              maxWidth: "840px", 
              margin: "0 auto 32px auto", 
              color: "#e5e7eb", 
              lineHeight: 1.65, 
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              fontWeight: 400
            }}
          >
            {t("hero_subtitle")}
          </p>

          {/* Action CTAs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "36px" }}>
            <Link 
              href="/video" 
              className="btn btn-gold"
              style={{ fontSize: "1rem", padding: "12px 26px", borderRadius: "30px" }}
            >
              <Play size={18} fill="#ffffff" />
              <span>{t("hero_cta_video")}</span>
            </Link>

            <a
              href="https://www.instagram.com/garaye_garawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: "1rem", padding: "12px 24px", borderRadius: "30px", backgroundColor: "#ffffff", color: "#c13584" }}
            >
              <InstagramIcon size={18} />
              <span>{t("hero_cta_insta")}</span>
            </a>

            <Link 
              href="/samasya" 
              className="btn btn-outline-white"
              style={{ fontSize: "1rem", padding: "12px 24px", borderRadius: "30px" }}
            >
              <MessageSquareWarning size={18} color="#f59e0b" />
              <span>{t("hero_cta_complain")}</span>
            </Link>

            <Link 
              href="/vikas-nidhi" 
              className="btn btn-primary"
              style={{ fontSize: "1rem", padding: "12px 24px", borderRadius: "30px", backgroundColor: "#15803d" }}
            >
              <HeartHandshake size={18} color="#86efac" />
              <span>{t("hero_cta_fund")}</span>
            </Link>
          </div>

          {/* Slider navigation & Custom Image button */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            
            {/* Custom Image Modal Trigger */}
            <button
              onClick={() => setModalOpen(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                color: "#ffffff",
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                backdropFilter: "blur(6px)",
                transition: "all 0.2s ease"
              }}
              title="Custom village photo"
            >
              <Camera size={15} color="#fbbf24" />
              <span>{t("custom_img_btn")}</span>
              {customImage && (
                <span style={{ background: "#22c55e", width: "8px", height: "8px", borderRadius: "50%" }} />
              )}
            </button>

            {/* Slide thumb indicators */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.5)", padding: "6px 14px", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.2)" }}>
              {defaultSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCustomImage(null);
                    setActiveSlide(idx);
                  }}
                  style={{
                    width: activeSlide === idx && !customImage ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "5px",
                    backgroundColor: activeSlide === idx && !customImage ? "#f59e0b" : "rgba(255,255,255,0.4)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Carousel arrows */}
        <button
          onClick={() => {
            setCustomImage(null);
            setActiveSlide((prev) => (prev === 0 ? defaultSlides.length - 1 : prev - 1));
          }}
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#ffffff",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)"
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => {
            setCustomImage(null);
            setActiveSlide((prev) => (prev + 1) % defaultSlides.length);
          }}
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#ffffff",
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)"
          }}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Floating VIP Key Stats Bar (Accurate Demographics 2026) */}
      <div style={{ position: "relative", zIndex: 30, marginTop: "-55px", marginBottom: "40px" }}>
        <div className="container">
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
              gap: "18px",
              background: "#ffffff",
              padding: "24px 28px",
              borderRadius: "20px",
              boxShadow: "0 20px 45px rgba(0,0,0,0.15)",
              border: "2px solid #e2c079"
            }}
          >
            {/* Stat 1: Population 2026 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", borderRight: "1px solid #f1ece1", paddingRight: "12px" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", backgroundColor: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", color: "#b45309", flexShrink: 0 }}>
                <Users size={28} />
              </div>
              <div>
                <span style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_pop")}
                </span>
                <span style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0e3d28", lineHeight: 1.1 }}>
                  {t("hero_stats_pop_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>540+ कुल परिवार</span>
              </div>
            </div>

            {/* Stat 2: Literacy */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", borderRight: "1px solid #f1ece1", paddingRight: "12px" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", backgroundColor: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", color: "#059669", flexShrink: 0 }}>
                <GraduationCap size={28} />
              </div>
              <div>
                <span style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_lit")}
                </span>
                <span style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0e3d28", lineHeight: 1.1 }}>
                  {t("hero_stats_lit_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>प्रा.वि. स्थापना 1917</span>
              </div>
            </div>

            {/* Stat 3: Wards */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", borderRight: "1px solid #f1ece1", paddingRight: "12px" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", backgroundColor: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563eb", flexShrink: 0 }}>
                <MapPin size={28} />
              </div>
              <div>
                <span style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_wards")}
                </span>
                <span style={{ fontSize: "1.65rem", fontWeight: 800, color: "#0e3d28", lineHeight: 1.1 }}>
                  {t("hero_stats_wards_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>पिन: 227304 (लंभुआ)</span>
              </div>
            </div>

            {/* Stat 4: Clean Model Panchayat */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "14px", backgroundColor: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", flexShrink: 0 }}>
                <Award size={28} />
              </div>
              <div>
                <span style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_clean")}
                </span>
                <span style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0e3d28", lineHeight: 1.1 }}>
                  {t("hero_stats_clean_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#16a34a", fontWeight: 700 }}>100% विद्युतीकृत</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Custom Image Upload / URL Modal */}
      {modalOpen && (
        <div 
          style={{ 
            position: "fixed", 
            inset: 0, 
            backgroundColor: "rgba(0,0,0,0.75)", 
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
              color: "#1f2937", 
              maxWidth: "520px", 
              width: "100%", 
              borderRadius: "18px", 
              padding: "28px", 
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)" 
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0e3d28" }}>
                {t("custom_img_modal_title")}
              </h3>
              <button 
                onClick={() => setModalOpen(false)}
                style={{ background: "none", border: "none", fontSize: "1.3rem", cursor: "pointer", color: "#9ca3af" }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: "0.92rem", color: "#4b5563", marginBottom: "16px" }}>
              {t("custom_img_desc")}
            </p>

            <form onSubmit={handleApplyCustomImage}>
              <input
                type="url"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder={t("custom_img_placeholder")}
                required
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid #d1d5db",
                  fontSize: "0.95rem",
                  marginBottom: "18px",
                  outline: "none"
                }}
              />

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                {customImage && (
                  <button
                    type="button"
                    onClick={handleResetImage}
                    className="btn btn-secondary"
                    style={{ padding: "10px 18px", fontSize: "0.9rem" }}
                  >
                    {t("custom_img_reset")}
                  </button>
                )}
                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ padding: "10px 22px", fontSize: "0.9rem" }}
                >
                  {t("custom_img_apply")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
