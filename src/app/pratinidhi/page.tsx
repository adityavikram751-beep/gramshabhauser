"use client";

import React from "react";
import Link from "next/link";
import { Representatives } from "@/components/Representatives";
import { ShieldCheck } from "lucide-react";

export default function PratinidhiPage() {
  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "85vh", padding: "40px 0 80px 0" }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#b45309", fontWeight: 700 }}>जन प्रतिनिधि (Leadership)</span>
        </div>
      </div>
      <Representatives />
    </div>
  );
}
