"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Globe, 
  PhoneCall, 
  Clock, 
  Sun, 
  Menu, 
  X, 
  HeartHandshake, 
  MessageSquareWarning,
  ChevronDown
} from "lucide-react";

export const Header: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      if (lang === "hi") {
        setCurrentTime(
          now.toLocaleTimeString("hi-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        );
        setCurrentDate(
          now.toLocaleDateString("hi-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
        );
      } else {
        setCurrentTime(
          now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        );
        setCurrentDate(
          now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })
        );
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
      {/* Tricolor National Strip */}
      <div className="tricolor-strip" />

      {/* Top Notification / Government ribbon */}
      <div style={{ backgroundColor: "#072517", color: "#f3f4f6", fontSize: "0.82rem", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fbbf24", fontWeight: 700 }}>
              <span className="live-dot" />
              {t("state_gov")}
            </span>
            <span style={{ display: "none", alignItems: "center", gap: "6px", opacity: 0.9 }}>
              <Clock size={13} color="#fbbf24" />
              {currentDate} | {currentTime}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#93c5fd" }}>
              <Sun size={13} color="#f59e0b" />
              <span>{t("weather")}</span>
            </div>

            {/* Language Switch Button - VIP style */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLang}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: "linear-gradient(135deg, #d97706, #f59e0b)",
                color: "#ffffff",
                border: "none",
                borderRadius: "20px",
                padding: "4px 14px",
                fontSize: "0.82rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(217, 119, 6, 0.4)",
                transition: "all 0.2s ease"
              }}
              title={t("lang_label")}
            >
              <Globe size={14} />
              <span>{t("lang_btn")}</span>
              <span style={{ background: "rgba(0,0,0,0.2)", borderRadius: "10px", padding: "1px 6px", fontSize: "0.75rem" }}>
                {lang === "hi" ? "EN" : "हिं"}
              </span>
            </button>
          </div>
        </div>
      </div>


      {/* Main Branding Bar */}
      <div className="container" style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
        
        {/* Logo & Emblem */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
          <div style={{ position: "relative", width: "62px", height: "62px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 4px 12px rgba(14,61,40,0.2)", border: "2px solid #d4af37", flexShrink: 0 }}>
            <Image
              src="/images/seal.jpg"
              alt="Gram Panchayat Garayen Official Seal"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <h1 style={{ fontSize: "1.55rem", fontWeight: 800, color: "#0e3d28", letterSpacing: "-0.3px", margin: 0, lineHeight: 1.15 }}>
                {t("site_title")}
              </h1>
              <span style={{ backgroundColor: "#dcfce7", color: "#15803d", fontSize: "0.72rem", padding: "2px 7px", borderRadius: "6px", fontWeight: 700, border: "1px solid #bbf7d0" }}>
                VIP PORTAL
              </span>
            </div>
            <p style={{ fontSize: "0.84rem", color: "#4b5563", margin: "2px 0 0 0", fontWeight: 500 }}>
              {t("site_tagline")}
            </p>
          </div>
        </Link>

        {/* Desktop Quick Action Buttons */}
        <div style={{ display: "none", alignItems: "center", gap: "12px" }} className="header-cta-desktop">
          <Link 
            href="/vikas-nidhi" 
            className="btn btn-gold"
            style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "20px" }}
          >
            <HeartHandshake size={16} />
            <span>{t("donate_badge")}</span>
          </Link>
          <Link 
            href="/samasya" 
            className="btn btn-primary"
            style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "20px" }}
          >
            <MessageSquareWarning size={16} />
            <span>{t("complain_badge")}</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "inline-flex",
            padding: "8px",
            background: "#f3f4f6",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#1f2937"
          }}
          className="mobile-toggle-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Bar */}
      <nav style={{ backgroundColor: "#0e3d28", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <ul 
            style={{ 
              display: "flex", 
              listStyle: "none", 
              gap: "4px", 
              padding: 0, 
              margin: 0, 
              flexWrap: "wrap" 
            }}
            className="desktop-nav-list"
          >
            {[
              { href: "/", label: "मुख्य पृष्ठ" },
              { href: "/itihas", label: "ऐतिहासिक स्थल" },
              { href: "/gav-jankari", label: "गाँव की जानकारी" },
              { href: "/samasya", label: "समस्या समाधान" },
              { href: "/sampark", label: "संपर्क एवं सुझाव" },
              { href: "/vikas-nidhi", label: "ग्राम विकास निधि" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  style={{
                    display: "inline-block",
                    padding: "14px 18px",
                    color: "#f3f4f6",
                    textDecoration: "none",
                    fontSize: "0.96rem",
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                    borderBottom: "3px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.borderBottom = "3px solid #f59e0b";
                    e.currentTarget.style.color = "#fbbf24";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderBottom = "3px solid transparent";
                    e.currentTarget.style.color = "#f3f4f6";
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "#072517",
            padding: "20px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {[
            { href: "/", label: "मुख्य पृष्ठ" },
            { href: "/itihas", label: "ऐतिहासिक स्थल" },
            { href: "/gav-jankari", label: "गाँव की जानकारी" },
            { href: "/samasya", label: "समस्या समाधान" },
            { href: "/sampark", label: "संपर्क एवं सुझाव" },
            { href: "/vikas-nidhi", label: "ग्राम विकास निधि" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "#ffffff",
                padding: "12px 14px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1.05rem",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "block",
              }}
            >
              {item.label}
            </Link>
          ))}

          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Link
              href="/vikas-nidhi"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-gold"
              style={{ flex: 1, padding: "10px" }}
            >
              {t("donate_badge")}
            </Link>
            <Link
              href="/samasya"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ flex: 1, padding: "10px" }}
            >
              {t("complain_badge")}
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 992px) {
          .header-cta-desktop {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        @media (max-width: 991px) {
          .desktop-nav-list {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
};
