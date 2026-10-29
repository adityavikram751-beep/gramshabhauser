"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Heart, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink 
} from "lucide-react";

export const Footer: React.FC = () => {
  const { t, lang } = useLanguage();

  return (
    <footer style={{ backgroundColor: "#291204", color: "#fef3c7", position: "relative", borderTop: "2px solid #d97706" }}>
      <div className="container" style={{ padding: "60px 20px 30px 20px" }}>
        
        {/* Main Footer Grid - Fully Responsive */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", 
            gap: "36px", 
            marginBottom: "40px" 
          }}
        >
          {/* Col 1: Branding & Emblem */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", border: "2px solid #d97706", flexShrink: 0, boxShadow: "0 4px 12px rgba(217,119,6,0.3)" }}>
                <Image
                  src="/images/seal.jpg"
                  alt="Garayen Seal"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>
                  {t("site_title")}
                </h4>
                <span style={{ fontSize: "0.78rem", color: "#fbbf24", fontWeight: 700 }}>
                  {t("site_tagline")}
                </span>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "#d1d5db", lineHeight: 1.6, marginBottom: "18px" }}>
              {t("footer_desc")}
            </p>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(217,119,6,0.18)", padding: "6px 14px", borderRadius: "20px", fontSize: "0.78rem", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.4)" }}>
              <ShieldCheck size={14} />
              <span>{lang === "hi" ? "सत्यापित आदर्श ग्राम पंचायत पोर्टल" : "Verified Smart Village Portal"}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#ffffff", marginBottom: "16px", borderBottom: "2px solid #d97706", display: "inline-block", paddingBottom: "4px" }}>
              {t("footer_quick_links")}
            </h5>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <li>
                <Link href="/" style={{ color: "#e5e7eb", textDecoration: "none", transition: "color 0.2s" }}>
                  › {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link href="/itihas" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                  › {t("nav_history")} ({lang === "hi" ? "1917 स्कूल, दुर्गा पूजा, मंदिर" : "1917 School, Durga Puja, Temple"})
                </Link>
              </li>
              <li>
                <Link href="/gav-jankari" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                  › {t("nav_info")} ({lang === "hi" ? "भूगोल, 11 वार्ड" : "Geography, 11 Wards"})
                </Link>
              </li>
              <li>
                <Link href="/yojana" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                  › {t("nav_schemes")}
                </Link>
              </li>
              <li>
                <Link href="/samasya" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                  › {t("nav_samasya")} ({lang === "hi" ? "जनसुनवाई व स्थिति" : "Grievance & Status"})
                </Link>
              </li>
              <li>
                <Link href="/sampark" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                  › {t("nav_contact")}
                </Link>
              </li>
              <li>
                <Link href="/vikas-nidhi" style={{ color: "#e5e7eb", textDecoration: "none" }}>
                  › {t("nav_fund")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Government Portals */}
          <div>
            <h5 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#ffffff", marginBottom: "16px", borderBottom: "2px solid #d97706", display: "inline-block", paddingBottom: "4px" }}>
              {lang === "hi" ? "सरकारी पोर्टल लिंक" : "Official Govt Portals"}
            </h5>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.86rem" }}>
              <li>
                <a href="https://panchayat.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>{lang === "hi" ? "पंचायती राज मंत्रालय (MoPR)" : "Ministry of Panchayati Raj (MoPR)"}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>{lang === "hi" ? "पीएम किसान सम्मान निधि" : "PM Kisan Samman Nidhi"}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://pmayg.nic.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>{lang === "hi" ? "पीएम आवास योजना (ग्रामीण)" : "PM Awas Yojana (Rural)"}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://nrega.nic.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>{lang === "hi" ? "मनरेगा रोजगार पोर्टल" : "MGNREGA Rural Employment Portal"}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://up.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#9ca3af", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <span>{lang === "hi" ? "उत्तर प्रदेश शासन आधिकारिक पोर्टल" : "Government of Uttar Pradesh Portal"}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Contact */}
          <div>
            <h5 style={{ fontSize: "1.02rem", fontWeight: 800, color: "#ffffff", marginBottom: "16px", borderBottom: "2px solid #d97706", display: "inline-block", paddingBottom: "4px" }}>
              {t("nav_contact")}
            </h5>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.86rem" }}>
              <div style={{ display: "flex", gap: "10px", color: "#d1d5db" }}>
                <MapPin size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  {lang === "hi" 
                    ? "ग्राम सचिवालय गरायें, विकास खंड लंभुआ, सुल्तानपुर, पिन: 227304"
                    : "Panchayat Secretariat Garayen, Lambhua Block, Sultanpur, PIN: 227304"}
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "#d1d5db" }}>
                <Phone size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  {lang === "hi" ? "हेल्पलाइन: 1800-202-GARAYEN" : "Helpline: 1800-202-GARAYEN"}
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", color: "#d1d5db" }}>
                <Mail size={16} color="#fbbf24" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>contact@garayenpanchayat.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div 
          style={{ 
            borderTop: "1px solid rgba(251, 191, 36, 0.15)", 
            paddingTop: "20px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            flexWrap: "wrap", 
            gap: "12px",
            fontSize: "0.82rem",
            color: "#9ca3af"
          }}
        >
          <div>
            {t("footer_rights")}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fbbf24" }}>
            <span>
              {lang === "hi" 
                ? "ग्राम पंचायत गरायें के विकास व सम्मान हेतु समर्पित" 
                : "Dedicated to the pride & development of Gram Panchayat Garayen"}
            </span>
            <Heart size={14} color="#ef4444" fill="#ef4444" />
          </div>
        </div>

      </div>
    </footer>
  );
};
