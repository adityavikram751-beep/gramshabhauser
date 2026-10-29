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
  const { t, lang } = useLanguage();

  const defaultSlides = [
    {
      id: "dwar",
      image: "/images/dwar.jpg",
      title: lang === "hi" 
        ? "ग्राम पंचायत गरायें (लंभुआ) - आपका हार्दिक स्वागत है" 
        : "Gram Panchayat Garayen (Lambhua) - Warm Welcome",
      caption: lang === "hi" 
        ? "जनपद सुल्तानपुर (उ.प्र.) की पावन व ऐतिहासिक ग्राम पंचायत, पिन कोड: 227304" 
        : "Historical & sacred Gram Panchayat of Sultanpur (U.P.), PIN Code: 227304",
    },
    {
      id: "durgapuja",
      image: "/images/durgapuja.jpg",
      title: lang === "hi" 
        ? "सुल्तानपुर व लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव" 
        : "Historic Durga Puja Festival of Sultanpur & Lambhua",
      caption: lang === "hi" 
        ? "भारत की प्रसिद्ध दुर्गा पूजा व शरद पूर्णिमा पर पावन गोमती तट धोपाप धाम में भव्य विसर्जन" 
        : "Celebrated Durga Puja with sacred immersion at Dhopap Dham on the holy Gomti River",
    },
    {
      id: "aerial",
      image: "/images/hero.jpg",
      title: lang === "hi" 
        ? "गरायें - सुरम्य प्राकृतिक छटा एवं उपजाऊ धरा" 
        : "Garayen - Scenic Natural Landscape & Fertile Land",
      caption: lang === "hi" 
        ? "हरित कृषि से परिपूर्ण, पावन सरोवरों और 109 वर्ष पुराने प्राथमिक विद्यालय (1917) की धरोहर" 
        : "Lush agriculture, pristine ponds, and 109-year-old primary school (est. 1917)",
    },
    {
      id: "mandir",
      image: "/images/mandir.jpg",
      title: lang === "hi" 
        ? "प्राचीन बाबा सिद्धेश्वर महादेव मंदिर" 
        : "Ancient Baba Siddheshwar Mahadev Temple",
      caption: lang === "hi" 
        ? "शताब्दियों पुराना स्वयंभू पावन धाम एवं भव्य दीपोत्सव की अलौकिक अनुभूति" 
        : "Centuries-old swayambhu shrine and divine celebration of Deepotsav",
    },
    {
      id: "market",
      image: "/images/market.jpg",
      title: lang === "hi" 
        ? "गरायें-लंभुआ का ऐतिहासिक साप्ताहिक हाट बाज़ार" 
        : "Historic Weekly Rural Haat Market of Garayen-Lambhua",
      caption: lang === "hi" 
        ? "हस्तशिल्प, ताज़ी जैविक उपज, और प्रसिद्ध देसी घी की गरमा-गरम जलेबी का स्वाद" 
        : "Local handicrafts, fresh farm produce, and famous hot pure-ghee jalebis",
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
    <section id="home" style={{ position: "relative", backgroundColor: "#291204", color: "#ffffff", overflow: "hidden" }}>
      
      {/* Big Hero Banner Image */}
      <div 
        style={{ 
          position: "relative", 
          minHeight: "clamp(540px, 80vh, 720px)", 
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(40px, 6vw, 70px) 0 clamp(80px, 10vw, 120px) 0"
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
          {/* Subtle multi-layer gradient overlays with amber tones */}
          <div 
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(180deg, rgba(69, 26, 3, 0.78) 0%, rgba(41, 18, 4, 0.45) 40%, rgba(41, 18, 4, 0.96) 100%)" 
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
              background: "linear-gradient(135deg, rgba(217, 119, 6, 0.35), rgba(245, 158, 11, 0.25))", 
              border: "1.5px solid #fde68a", 
              backdropFilter: "blur(8px)", 
              padding: "8px 20px", 
              borderRadius: "30px", 
              marginBottom: "18px", 
              boxShadow: "0 4px 20px rgba(217, 119, 6, 0.35)",
              textDecoration: "none",
              color: "#fef3c7",
              fontWeight: 700,
              fontSize: "0.92rem"
            }}
          >
            <Sparkles size={16} color="#fbbf24" />
            <span>{t("hero_badge")}</span>
            <InstagramIcon size={15} color="#fbbf24" />
          </a>

          {/* Majestic Hero Headline */}
          <h1 
            style={{ 
              fontSize: "clamp(2rem, 5.2vw, 4rem)", 
              fontWeight: 800, 
              lineHeight: 1.2, 
              maxWidth: "1000px", 
              margin: "0 auto 16px auto", 
              textShadow: "0 4px 25px rgba(0, 0, 0, 0.85)" 
            }}
          >
            {t("hero_title_prefix")}{" "}
            <span 
              style={{ 
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                position: "relative"
              }}
            >
              {t("hero_title_highlight")}
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            style={{ 
              fontSize: "clamp(0.98rem, 1.8vw, 1.2rem)", 
              maxWidth: "840px", 
              margin: "0 auto 30px auto", 
              color: "#fef3c7", 
              lineHeight: 1.65, 
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              fontWeight: 400
            }}
          >
            {t("hero_subtitle")}
          </p>

          {/* Action CTAs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
            <Link 
              href="/video" 
              className="btn btn-primary"
              style={{ fontSize: "0.95rem", padding: "12px 24px", borderRadius: "30px" }}
            >
              <Play size={17} fill="#ffffff" />
              <span>{t("hero_cta_video")}</span>
            </Link>

            <a
              href="https://www.instagram.com/garaye_garawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ fontSize: "0.95rem", padding: "12px 22px", borderRadius: "30px", backgroundColor: "#ffffff", color: "#d97706", border: "1.5px solid #fde68a" }}
            >
              <InstagramIcon size={17} color="#d97706" />
              <span>{t("hero_cta_insta")}</span>
            </a>

            <Link 
              href="/samasya" 
              className="btn btn-outline-white"
              style={{ fontSize: "0.95rem", padding: "12px 22px", borderRadius: "30px" }}
            >
              <MessageSquareWarning size={17} color="#fbbf24" />
              <span>{t("hero_cta_complain")}</span>
            </Link>

            <Link 
              href="/vikas-nidhi" 
              className="btn btn-primary"
              style={{ fontSize: "0.95rem", padding: "12px 22px", borderRadius: "30px" }}
            >
              <HeartHandshake size={17} color="#ffffff" />
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
                border: "1px solid rgba(253, 230, 138, 0.4)",
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
                    backgroundColor: activeSlide === idx && !customImage ? "#d97706" : "rgba(255,255,255,0.4)",
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
            left: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#ffffff",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)"
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => {
            setCustomImage(null);
            setActiveSlide((prev) => (prev + 1) % defaultSlides.length);
          }}
          style={{
            position: "absolute",
            right: "14px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 20,
            background: "rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#ffffff",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(6px)"
          }}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Floating Key Stats Bar */}
      <div style={{ position: "relative", zIndex: 30, marginTop: "clamp(-40px, -6vw, -55px)", marginBottom: "40px" }}>
        <div className="container">
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", 
              gap: "16px",
              background: "#ffffff",
              padding: "clamp(16px, 3vw, 24px) clamp(16px, 3vw, 28px)",
              borderRadius: "20px",
              boxShadow: "0 15px 35px rgba(217, 119, 6, 0.12)",
              border: "1.5px solid #fde68a"
            }}
          >
            {/* Stat 1: Population */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "14px", backgroundColor: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", flexShrink: 0 }}>
                <Users size={26} />
              </div>
              <div>
                <span style={{ fontSize: "0.82rem", color: "#78350f", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_pop")}
                </span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#451a03", lineHeight: 1.1 }}>
                  {t("hero_stats_pop_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#92400e" }}>
                  {lang === "hi" ? "540+ कुल परिवार" : "540+ Total Families"}
                </span>
              </div>
            </div>

            {/* Stat 2: Literacy */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "14px", backgroundColor: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", flexShrink: 0, border: "1px solid #fde68a" }}>
                <GraduationCap size={26} />
              </div>
              <div>
                <span style={{ fontSize: "0.82rem", color: "#78350f", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_lit")}
                </span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#451a03", lineHeight: 1.1 }}>
                  {t("hero_stats_lit_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#92400e" }}>
                  {lang === "hi" ? "प्रा.वि. स्थापना 1917" : "Pri. School Est. 1917"}
                </span>
              </div>
            </div>

            {/* Stat 3: Wards */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "14px", backgroundColor: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", flexShrink: 0 }}>
                <MapPin size={26} />
              </div>
              <div>
                <span style={{ fontSize: "0.82rem", color: "#78350f", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_wards")}
                </span>
                <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#451a03", lineHeight: 1.1 }}>
                  {t("hero_stats_wards_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#92400e" }}>
                  {lang === "hi" ? "पिन: 227304 (लंभुआ)" : "PIN: 227304 (Lambhua)"}
                </span>
              </div>
            </div>

            {/* Stat 4: Clean Model Panchayat */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "14px", backgroundColor: "#fffbeb", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", flexShrink: 0, border: "1px solid #fde68a" }}>
                <Award size={26} />
              </div>
              <div>
                <span style={{ fontSize: "0.82rem", color: "#78350f", fontWeight: 600, display: "block" }}>
                  {t("hero_stats_clean")}
                </span>
                <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#451a03", lineHeight: 1.1 }}>
                  {t("hero_stats_clean_val")}
                </span>
                <span style={{ fontSize: "0.72rem", color: "#d97706", fontWeight: 700 }}>
                  {lang === "hi" ? "100% विद्युतीकृत" : "100% Electrified"}
                </span>
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
            padding: "16px" 
          }}
        >
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              color: "#1f2937", 
              maxWidth: "520px", 
              width: "100%", 
              borderRadius: "20px", 
              padding: "clamp(20px, 4vw, 28px)", 
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              border: "1.5px solid #fde68a" 
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#451a03" }}>
                {t("custom_img_modal_title")}
              </h3>
              <button 
                onClick={() => setModalOpen(false)}
                style={{ background: "none", border: "none", fontSize: "1.3rem", cursor: "pointer", color: "#78350f", padding: "4px" }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: "0.92rem", color: "#57534e", marginBottom: "16px" }}>
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
                  border: "1.5px solid #fde68a",
                  fontSize: "0.95rem",
                  marginBottom: "18px",
                  outline: "none"
                }}
              />

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end", flexWrap: "wrap" }}>
                {customImage && (
                  <button
                    type="button"
                    onClick={handleResetImage}
                    className="btn btn-secondary"
                    style={{ padding: "10px 18px", fontSize: "0.9rem", border: "1px solid #fde68a" }}
                  >
                    {t("custom_img_reset")}
                  </button>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
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
