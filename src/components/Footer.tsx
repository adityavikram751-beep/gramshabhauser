"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Heart, 
  ShieldCheck, 
  Globe, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink 
} from "lucide-react";

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer style={{ backgroundColor: "#061f13", color: "#d1d5db", position: "relative" }}>
      
      {/* Tricolor Strip */}
      <div className="tricolor-strip" />

      <div className="container" style={{ padding: "70px 20px 40px 20px" }}>
        
        {/* Main Footer Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", 
            gap: "40px", 
            marginBottom: "50px" 
          }}
        >
          {/* Col 1: Branding & Emblem */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "54px", height: "54px", borderRadius: "50%", overflow: "hidden", border: "2px solid #d4af37", flexShrink: 0 }}>
                <Image
                  src="/images/seal.jpg"
                  alt="Garayen Seal"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>
                  {t("site_title")}
                </h4>
                <span style={{ fontSize: "0.78rem", color: "#fbbf24", fontWeight: 600 }}>
                  {t("site_tagline")}
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "#9ca3af", lineHeight: 1.6, marginBottom: "20px" }}>
              {t("footer_desc")}
            </p>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(255,255,255,0.08)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.8rem", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.3)" }}>
              <ShieldCheck size={14} />
              <span>सत्यापित आदर्श ग्राम पंचायत पोर्टल</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "18px", borderBottom: "2px solid #d97706", display: "inline-block", paddingBottom: "4px" }}>
              {t("footer_quick_links")}
            </h5>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <li>
                <Link href="/" style={{ color: "#d1d5db", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#fbbf24"} onMouseLeave={e => e.currentTarget.style.color = "#d1d5db"}>
                  › मुख्य पृष्ठ (Home)
                </Link>
              </li>
              <li>
                <Link href="/itihas" style={{ color: "#d1d5db", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#fbbf24"} onMouseLeave={e => e.currentTarget.style.color = "#d1d5db"}>
                  › ऐतिहासिक स्थल (1917 स्कूल, दुर्गा पूजा, मंदिर)
                </Link>
              </li>
              <li>
                <Link href="/gav-jankari" style={{ color: "#d1d5db", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#fbbf24"} onMouseLeave={e => e.currentTarget.style.color = "#d1d5db"}>
                  › गाँव की सम्पूर्ण जानकारी (भूगोल, 11 वार्ड)
                </Link>
              </li>
              <li>
                <Link href="/samasya" style={{ color: "#d1d5db", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#fbbf24"} onMouseLeave={e => e.currentTarget.style.color = "#d1d5db"}>
                  › समस्या समाधान व स्थिति ट्रैकर (Jansunwai)
                </Link>
              </li>
              <li>
                <Link href="/sampark" style={{ color: "#d1d5db", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#fbbf24"} onMouseLeave={e => e.currentTarget.style.color = "#d1d5db"}>
                  › संपर्क, आधिकारिक ईमेल व सुझाव फॉर्म
                </Link>
              </li>
              <li>
                <Link href="/vikas-nidhi" style={{ color: "#d1d5db", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = "#fbbf24"} onMouseLeave={e => e.currentTarget.style.color = "#d1d5db"}>
                  › ग्राम विकास निधि (दान व सहयोग)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Government Portals */}
          <div>
            <h5 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "18px", borderBottom: "2px solid #d97706", display: "inline-block", paddingBottom: "4px" }}>
              सरकारी पोर्टल लिंक
            </h5>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <li>
                <a href="https://panchayat.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>पंचायती राज मंत्रालय (MoPR)</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>पीएम किसान सम्मान निधि</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pmayg.nic.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>पीएम आवास योजना (ग्रामीण)</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://nrega.nic.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>मनरेगा रोजगार पोर्टल</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://up.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>उत्तर प्रदेश शासन आधिकारिक पोर्टल</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Contact */}
          <div>
            <h5 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "18px", borderBottom: "2px solid #d97706", display: "inline-block", paddingBottom: "4px" }}>
              {t("nav_contact")}
            </h5>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem" }}>
              <div style={{ display: "flex", gap: "10px", color: "#9ca3af" }}>
                <MapPin size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>ग्राम सचिवालय गरायें, विकास खंड लंभुआ, सुल्तानपुर, पिन: 227304</span>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "#9ca3af" }}>
                <Phone size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>हेल्पलाइन: 1800-202-GARAYEN</span>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "#9ca3af" }}>
                <Mail size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>contact@garayenpanchayat.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div 
          style={{ 
            borderTop: "1px solid rgba(255,255,255,0.1)", 
            paddingTop: "24px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            flexWrap: "wrap", 
            gap: "14px",
            fontSize: "0.84rem",
            color: "#6b7280"
          }}
        >
          <div>
            {t("footer_rights")}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>ग्राम पंचायत गरायें के विकास व सम्मान हेतु समर्पित</span>
            <Heart size={14} color="#ef4444" fill="#ef4444" />
          </div>
        </div>

      </div>
    </footer>
  );
};
