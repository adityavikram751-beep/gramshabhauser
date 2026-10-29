"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Globe, 
  Menu, 
  X, 
  HeartHandshake, 
  MessageSquareWarning,
  Clock
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
          now.toLocaleDateString("hi-IN", { weekday: "short", year: "numeric", month: "short", day: "numeric" })
        );
      } else {
        setCurrentTime(
          now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
        );
        setCurrentDate(
          now.toLocaleDateString("en-US", { weekday: "short", year: "numeric", month: "short", day: "numeric" })
        );
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const navItems = [
    { href: "/", label: t("nav_home") },
    { href: "/itihas", label: t("nav_history") },
    { href: "/gav-jankari", label: t("nav_info") },
    { href: "/yojana", label: t("nav_schemes") },
    { href: "/video", label: lang === "hi" ? "वीडियो दर्शन" : "Video Tour" },
    { href: "/samasya", label: t("nav_samasya") },
    { href: "/vikas-nidhi", label: t("nav_fund") },
    { href: "/sampark", label: t("nav_contact") },
  ];

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: "#ffffff", boxShadow: "0 4px 20px rgba(217, 119, 6, 0.12)" }}>

      {/* Top Notification / Government Ribbon in Warm Deep Amber */}
      <div style={{ backgroundColor: "#451a03", color: "#fef3c7", fontSize: "0.82rem", padding: "6px 0", borderBottom: "1px solid rgba(251, 191, 36, 0.2)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fbbf24", fontWeight: 700, fontSize: "clamp(0.74rem, 2.2vw, 0.84rem)" }}>
              <span className="live-dot" />
              {t("state_gov")}
            </span>
            <span className="header-time-desktop" style={{ display: "none", alignItems: "center", gap: "5px", opacity: 0.9, fontSize: "0.78rem" }}>
              <Clock size={12} color="#fbbf24" />
              {currentDate} | {currentTime}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Language Switch Button */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLang}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "linear-gradient(135deg, #d97706, #f59e0b)",
                color: "#ffffff",
                border: "none",
                borderRadius: "20px",
                padding: "4px 12px",
                fontSize: "0.8rem",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(217, 119, 6, 0.35)",
                transition: "all 0.2s ease"
              }}
              title={t("lang_label")}
            >
              <Globe size={13} />
              <span>{t("lang_btn")}</span>
              <span style={{ background: "rgba(0,0,0,0.25)", borderRadius: "10px", padding: "1px 5px", fontSize: "0.72rem" }}>
                {lang === "hi" ? "EN" : "हिं"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding Bar */}
      <div className="container" style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px" }}>
        
        {/* Logo & Emblem */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", minWidth: 0 }}>
          <div 
            style={{ 
              position: "relative", 
              width: "56px", 
              height: "56px", 
              borderRadius: "50%", 
              overflow: "hidden", 
              boxShadow: "0 4px 14px rgba(217,119,6,0.3)", 
              border: "2.5px solid #d97706", 
              flexShrink: 0 
            }}
            className="brand-logo"
          >
            <Image
              src="/images/seal.jpg"
              alt="Gram Panchayat Garayen Official Seal"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
              <h1 style={{ fontSize: "clamp(1.15rem, 3.8vw, 1.55rem)", fontWeight: 800, color: "#d97706", letterSpacing: "-0.2px", margin: 0, lineHeight: 1.15, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {t("site_title")}
              </h1>
              <span style={{ backgroundColor: "#fef3c7", color: "#92400e", fontSize: "0.7rem", padding: "2px 6px", borderRadius: "6px", fontWeight: 800, border: "1px solid #fde68a" }}>
                VIP PORTAL
              </span>
            </div>
            <p style={{ fontSize: "clamp(0.74rem, 2.2vw, 0.84rem)", color: "#5a4225", margin: "2px 0 0 0", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {t("site_tagline")}
            </p>
          </div>
        </Link>

        {/* Desktop Quick Action Buttons */}
        <div style={{ display: "none", alignItems: "center", gap: "10px" }} className="header-cta-desktop">
          <Link 
            href="/vikas-nidhi" 
            className="btn btn-gold"
            style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "20px" }}
          >
            <HeartHandshake size={15} />
            <span>{t("donate_badge")}</span>
          </Link>
          <Link 
            href="/samasya" 
            className="btn btn-primary"
            style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "20px" }}
          >
            <MessageSquareWarning size={15} />
            <span>{t("complain_badge")}</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            background: "#fffbeb",
            border: "1.5px solid #fde68a",
            borderRadius: "10px",
            cursor: "pointer",
            color: "#d97706",
            flexShrink: 0
          }}
          className="mobile-toggle-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Bar - #78350f / Amber Deep */}
      <nav style={{ backgroundColor: "#78350f", borderTop: "1px solid rgba(251, 191, 36, 0.25)" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <ul 
            style={{ 
              display: "flex", 
              listStyle: "none", 
              gap: "2px", 
              padding: 0, 
              margin: 0, 
              flexWrap: "wrap" 
            }}
            className="desktop-nav-list"
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  style={{
                    display: "inline-block",
                    padding: "13px 16px",
                    color: "#fef3c7",
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    transition: "all 0.2s ease",
                    borderBottom: "3px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.borderBottom = "3px solid #fbbf24";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderBottom = "3px solid transparent";
                    e.currentTarget.style.color = "#fef3c7";
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
            backgroundColor: "#451a03",
            padding: "16px 14px",
            borderTop: "1px solid rgba(251, 191, 36, 0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            maxHeight: "80vh",
            overflowY: "auto"
          }}
        >
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "#fef3c7",
                padding: "12px 14px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "1rem",
                borderBottom: "1px solid rgba(251, 191, 36, 0.12)",
                display: "block",
                minHeight: "44px"
              }}
            >
              {item.label}
            </Link>
          ))}

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "12px" }}>
            <Link
              href="/vikas-nidhi"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-gold"
              style={{ padding: "10px", fontSize: "0.85rem", width: "100%" }}
            >
              {t("donate_badge")}
            </Link>
            <Link
              href="/samasya"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ padding: "10px", fontSize: "0.85rem", width: "100%" }}
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
          .header-time-desktop {
            display: flex !important;
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
        @media (max-width: 480px) {
          .brand-logo {
            width: 46px !important;
            height: 46px !important;
          }
        }
      `}</style>
    </header>
  );
};
