"use client";

import React from "react";
import Link from "next/link";
import { Representatives } from "@/components/Representatives";
import { useLanguage } from "@/context/LanguageContext";

export default function PratinidhiPage() {
  const { lang } = useLanguage();

  return (
    <div style={{ backgroundColor: "#fffdfa", minHeight: "85vh", padding: "clamp(30px, 5vw, 50px) 0 80px 0" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#78350f", marginBottom: "20px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#d97706", fontWeight: 700 }}>
            {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
          </Link>
          <span>/</span>
          <span style={{ color: "#78350f", fontWeight: 700 }}>
            {lang === "hi" ? "जन प्रतिनिधि (Leadership)" : "Elected Representatives"}
          </span>
        </div>
      </div>
      <Representatives />
    </div>
  );
}
