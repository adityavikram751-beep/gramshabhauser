"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  UserCheck, 
  MapPin, 
  Calendar, 
  Phone, 
  ArrowLeft, 
  PlusCircle, 
  ShieldCheck,
  Check,
  Building
} from "lucide-react";

interface GrievanceItem {
  id: string;
  name: string;
  phone: string;
  ward: string;
  category: string;
  desc: string;
  status: "registered" | "assigned" | "inspecting" | "resolved";
  assignedOfficer: string;
  officerRole: string;
  officerPhone: string;
  filedDate: string;
  assignedDate: string;
  inspectionDate: string;
  resolvedDate?: string;
  resolutionRemarks?: string;
  priority: "normal" | "urgent";
}

const sampleGrievances: GrievanceItem[] = [
  {
    id: "GRY-2026-101",
    name: "श्री दिनेश कुमार वर्मा",
    phone: "98380 43210",
    ward: "वार्ड नं. 6 (प्राथमिक विद्यालय मार्ग)",
    category: "पेयजल / हैंडपंप खराबी",
    desc: "प्राथमिक विद्यालय गरायें (1917) के सामने लगा इंडिया मार्का-2 हैंडपंप का सिलिंडर खराब हो गया था, जिससे स्कूली बच्चों एवं राहगीरों को पीने के पानी की समस्या हो रही थी।",
    status: "resolved",
    assignedOfficer: "श्री मनोज कुमार तिवारी",
    officerRole: "ग्राम विकास अधिकारी (Panchayat Sachiv)",
    officerPhone: "+91 91250 45678",
    filedDate: "22 अक्टूबर 2026, 11:30 AM",
    assignedDate: "23 अक्टूबर 2026, 09:15 AM",
    inspectionDate: "24 अक्टूबर 2026, 02:00 PM",
    resolvedDate: "25 अक्टूबर 2026, 04:45 PM",
    resolutionRemarks: "जल निगम मिस्त्री द्वारा नया सिलिंडर व पाइप डालकर हैंडपंप पूर्ण रूप से चालू कर दिया गया है। पानी की गुणवत्ता उत्तम पाई गई।",
    priority: "urgent"
  },
  {
    id: "GRY-2026-102",
    name: "श्रीमती सुनैना देवी",
    phone: "97920 87654",
    ward: "वार्ड नं. 3 (शिव मंदिर टोला)",
    category: "बिजली / सोलर लाइट",
    desc: "शिव मंदिर तिराहे पर स्थापित सोलर स्ट्रीट लाइट की बैटरी चार्ज नहीं हो रही है, जिससे शाम को अंधेरा रहता है।",
    status: "inspecting",
    assignedOfficer: "अवर अभियंता (विद्युत/सौर ऊर्जा प्रभाग)",
    officerRole: "तकनीकी अधिकारी, विकास खंड लंभुआ",
    officerPhone: "+91 94150 98765",
    filedDate: "25 अक्टूबर 2026, 03:20 PM",
    assignedDate: "26 अक्टूबर 2026, 10:00 AM",
    inspectionDate: "27 अक्टूबर 2026, 11:30 AM",
    resolutionRemarks: "स्थलीय निरीक्षण में सोलर पैनल व इन्वर्टर किट की जांच की गई। नई लिथियम बैटरी का इंडेंट ब्लॉक कार्यालय को भेजा गया है, 48 घंटे में स्थापना होगी।",
    priority: "normal"
  },
  {
    id: "GRY-2026-103",
    name: "श्री कमलेश यादव",
    phone: "94150 65432",
    ward: "वार्ड नं. 1 (मुख्य प्रवेश द्वार टोला)",
    category: "सड़क / नाली जाम",
    desc: "स्वागत द्वार के पास मुख्य पक्की नाली में मलबे के कारण पानी का निकास अवरुद्ध है और बरसात का पानी सड़क पर बह रहा है।",
    status: "assigned",
    assignedOfficer: "श्री नीरव सिंह",
    officerRole: "ग्राम प्रधान, गरायें",
    officerPhone: "+91 98380 98765",
    filedDate: "27 अक्टूबर 2026, 01:15 PM",
    assignedDate: "28 अक्टूबर 2026, 09:30 AM",
    inspectionDate: "प्रक्रियाधीन (आज सायं निर्धारित)",
    resolutionRemarks: "सफाई कर्मी दल को मौके पर भेजा गया है। मलबा हटाकर नाली का बहाव सामान्य किया जा रहा है।",
    priority: "urgent"
  }
];

function GrievanceStatusContent() {
  const { t, lang } = useLanguage();
  const searchParams = useSearchParams();
  const urlId = searchParams.get("id");

  const [searchToken, setSearchToken] = useState(urlId || "GRY-2026-101");
  const [activeItem, setActiveItem] = useState<GrievanceItem | null>(null);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    if (urlId) {
      setSearchToken(urlId);
      lookupToken(urlId);
    } else {
      lookupToken("GRY-2026-101");
    }
  }, [urlId]);

  const lookupToken = (token: string) => {
    setErrorMsg(false);
    const cleanToken = token.trim().toUpperCase();
    const found = sampleGrievances.find(g => g.id.toUpperCase() === cleanToken);
    if (found) {
      setActiveItem(found);
    } else {
      // If user created a mock token like GRY-2026-849 in the other page
      if (cleanToken.startsWith("GRY-2026-")) {
        setActiveItem({
          id: cleanToken,
          name: "नागरिक (आपकी शिकायत)",
          phone: "98XXXXXXXX",
          ward: "गरायें लंभुआ (सुल्तानपुर)",
          category: "सामान्य जनसमस्या",
          desc: "आपकी दर्ज की गई शिकायत संबंधित अधिकारी को अग्रसारित कर दी गई है।",
          status: "registered",
          assignedOfficer: "श्री मनोज कुमार तिवारी",
          officerRole: "ग्राम विकास अधिकारी (सचिव)",
          officerPhone: "+91 91250 45678",
          filedDate: "आज, अभी-अभी",
          assignedDate: "प्रक्रियाधीन",
          inspectionDate: "प्रक्रियाधीन",
          resolutionRemarks: "शिकायत संज्ञान में ली गई है। 48 घंटे के भीतर स्थलीय निरीक्षण किया जाएगा।",
          priority: "urgent"
        });
      } else {
        setActiveItem(null);
        setErrorMsg(true);
      }
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    lookupToken(searchToken);
  };

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "85vh", padding: "60px 0 90px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280" }}>
            <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
            <span>/</span>
            <Link href="/samasya" style={{ color: "#0e3d28", fontWeight: 600 }}>समस्या समाधान</Link>
            <span>/</span>
            <span style={{ color: "#b45309", fontWeight: 700 }}>लाइव स्थिति जांचें (Tracking)</span>
          </div>

          <Link
            href="/samasya"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              backgroundColor: "#fee2e2",
              color: "#b91c1c",
              border: "1px solid #fca5a5",
              padding: "6px 14px",
              borderRadius: "20px",
              fontSize: "0.82rem",
              fontWeight: 700,
              textDecoration: "none"
            }}
          >
            <PlusCircle size={15} />
            <span>नई शिकायत दर्ज करें</span>
          </Link>
        </div>

        {/* Page Top Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 35px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe", color: "#1e40af" }}>
            <Clock size={16} />
            <span>पारदर्शी शिकायत समाधान ट्रैकिंग</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 800, color: "#0e3d28", lineHeight: 1.2, marginBottom: "10px" }}>
            शिकायत की लाइव स्थिति जांचें (Live Grievance Tracking)
          </h1>
          <p style={{ fontSize: "1.02rem", color: "#4b5563", lineHeight: 1.6 }}>
            अपनी शिकायत संख्या दर्ज करके देखें कि आपकी समस्या किस चरण में है, कौन अधिकारी नियुक्त है और कब तक समाधान होगा।
          </p>
        </div>

        {/* Search Bar Container */}
        <div 
          style={{ 
            maxWidth: "760px", 
            margin: "0 auto 30px auto", 
            backgroundColor: "#ffffff", 
            borderRadius: "20px", 
            padding: "24px", 
            border: "1.5px solid #e7dfcc",
            boxShadow: "0 8px 30px rgba(0,0,0,0.05)" 
          }}
        >
          <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="text"
              required
              value={searchToken}
              onChange={(e) => setSearchToken(e.target.value)}
              placeholder="अपनी शिकायत संख्या दर्ज करें (जैसे: GRY-2026-101)"
              style={{
                flex: "1 1 280px",
                padding: "14px 18px",
                borderRadius: "12px",
                border: "1.5px solid #d1d5db",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#0e3d28",
                outline: "none"
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: "0 28px", borderRadius: "12px", fontSize: "1rem" }}
            >
              <Search size={18} />
              <span>स्थिति देखें</span>
            </button>
          </form>

          {/* Quick Demo IDs */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginTop: "16px", fontSize: "0.85rem" }}>
            <span style={{ color: "#6b7280", fontWeight: 600 }}>डेमो शिकायत संख्या जांचें:</span>
            {sampleGrievances.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setSearchToken(g.id);
                  lookupToken(g.id);
                }}
                style={{
                  backgroundColor: searchToken === g.id ? "#0e3d28" : "#fef3c7",
                  border: "1px solid #fde68a",
                  color: searchToken === g.id ? "#ffffff" : "#92400e",
                  padding: "5px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  transition: "all 0.2s"
                }}
              >
                {g.id} ({g.status === "resolved" ? "निस्तारित" : "प्रक्रियाधीन"})
              </button>
            ))}
          </div>

          {errorMsg && (
            <div style={{ marginTop: "16px", backgroundColor: "#fee2e2", border: "1px solid #fca5a5", color: "#b91c1c", padding: "12px", borderRadius: "10px", textAlign: "center", fontSize: "0.9rem", fontWeight: 600 }}>
              यह शिकायत संख्या नहीं मिली। कृपया सही टोकन दर्ज करें अथवा ऊपर दिए गए डेमो बटन पर क्लिक करें।
            </div>
          )}
        </div>

        {/* ================= COMPLAINT DETAILS & TIMELINE ================= */}
        {activeItem && (
          <div 
            style={{ 
              maxWidth: "840px", 
              margin: "0 auto", 
              backgroundColor: "#ffffff", 
              borderRadius: "24px", 
              padding: "36px", 
              border: "2px solid #e2c079",
              boxShadow: "0 15px 45px rgba(0,0,0,0.06)" 
            }}
          >
            {/* Header of Ticket */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", borderBottom: "1.5px solid #f3ece0", paddingBottom: "20px", marginBottom: "30px" }}>
              <div>
                <span style={{ color: "#d97706", fontWeight: 800, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  शिकायत संख्या (Complaint ID)
                </span>
                <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#0e3d28", margin: "2px 0 0 0" }}>
                  {activeItem.id}
                </h2>
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                  दर्ज दिनांक: {activeItem.filedDate}
                </span>
              </div>

              <div>
                <span 
                  style={{ 
                    padding: "8px 18px", 
                    borderRadius: "30px", 
                    fontSize: "0.9rem", 
                    fontWeight: 800,
                    backgroundColor: activeItem.status === "resolved" ? "#dcfce7" : "#fef3c7",
                    color: activeItem.status === "resolved" ? "#166534" : "#92400e",
                    border: activeItem.status === "resolved" ? "1.5px solid #86efac" : "1.5px solid #fde68a",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  {activeItem.status === "resolved" ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                  {activeItem.status === "resolved" ? "समस्या समाधान पूर्ण (Resolved)" : "जांच / कार्य प्रगति पर (In Progress)"}
                </span>
              </div>
            </div>

            {/* 4-Step Visual Progress Stepper */}
            <div style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0e3d28", marginBottom: "18px" }}>
                समाधान प्रगति विवरण (Resolution Progress)
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px", position: "relative" }}>
                {[
                  {
                    step: 1,
                    title: "शिकायत दर्ज",
                    sub: activeItem.filedDate,
                    isDone: true,
                    isCurrent: activeItem.status === "registered"
                  },
                  {
                    step: 2,
                    title: "अधिकारी नियुक्त",
                    sub: activeItem.assignedDate,
                    isDone: activeItem.status !== "registered",
                    isCurrent: activeItem.status === "assigned"
                  },
                  {
                    step: 3,
                    title: "स्थलीय निरीक्षण",
                    sub: activeItem.inspectionDate,
                    isDone: activeItem.status === "inspecting" || activeItem.status === "resolved",
                    isCurrent: activeItem.status === "inspecting"
                  },
                  {
                    step: 4,
                    title: "समाधान पूर्ण",
                    sub: activeItem.resolvedDate || "प्रतीक्षारत",
                    isDone: activeItem.status === "resolved",
                    isCurrent: false
                  },
                ].map((st) => (
                  <div 
                    key={st.step} 
                    style={{ 
                      backgroundColor: st.isDone ? "#f0fdf4" : st.isCurrent ? "#fffbeb" : "#f9fafb",
                      border: st.isDone ? "1.5px solid #86efac" : st.isCurrent ? "1.5px solid #fde68a" : "1px solid #e5e7eb",
                      padding: "16px",
                      borderRadius: "14px",
                      textAlign: "center"
                    }}
                  >
                    <div 
                      style={{ 
                        width: "36px", 
                        height: "36px", 
                        borderRadius: "50%", 
                        margin: "0 auto 8px auto", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        fontWeight: 800,
                        backgroundColor: st.isDone ? "#16a34a" : st.isCurrent ? "#d97706" : "#d1d5db",
                        color: "#ffffff",
                        fontSize: "0.95rem"
                      }}
                    >
                      {st.isDone ? "✓" : st.step}
                    </div>
                    <strong style={{ fontSize: "0.9rem", color: st.isDone ? "#166534" : "#1f2937", display: "block" }}>
                      {st.title}
                    </strong>
                    <span style={{ fontSize: "0.75rem", color: "#6b7280", display: "block", marginTop: "2px" }}>
                      {st.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Citizen & Issue Details */}
            <div style={{ backgroundColor: "#fdfbf7", border: "1.5px solid #f1ece1", borderRadius: "18px", padding: "24px", marginBottom: "26px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", fontSize: "0.92rem", marginBottom: "18px" }}>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.8rem", display: "block" }}>शिकायतकर्ता</span>
                  <strong style={{ color: "#1f2937" }}>{activeItem.name}</strong>
                </div>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.8rem", display: "block" }}>वार्ड / क्षेत्र</span>
                  <strong style={{ color: "#1f2937" }}>{activeItem.ward}</strong>
                </div>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.8rem", display: "block" }}>श्रेणी</span>
                  <strong style={{ color: "#d97706" }}>{activeItem.category}</strong>
                </div>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.8rem", display: "block" }}>प्राथमिकता स्तर</span>
                  <strong style={{ color: activeItem.priority === "urgent" ? "#dc2626" : "#166534" }}>
                    {activeItem.priority === "urgent" ? "अति आवश्यक (Urgent)" : "सामान्य (Normal)"}
                  </strong>
                </div>
              </div>

              <div style={{ borderTop: "1px solid #f3ece0", paddingTop: "14px" }}>
                <span style={{ color: "#6b7280", fontSize: "0.8rem", display: "block", marginBottom: "4px" }}>समस्या विवरण</span>
                <p style={{ margin: 0, color: "#374151", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {activeItem.desc}
                </p>
              </div>
            </div>

            {/* Assigned Officer & Remarks Box */}
            <div style={{ backgroundColor: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: "18px", padding: "22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                <div>
                  <span style={{ fontSize: "0.78rem", color: "#2563eb", fontWeight: 700, textTransform: "uppercase" }}>
                    जिम्मेदार नोडल अधिकारी (Assigned Nodal Officer)
                  </span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e40af", margin: "2px 0 0 0" }}>
                    {activeItem.assignedOfficer}
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "#4b5563" }}>
                    {activeItem.officerRole}
                  </span>
                </div>

                <a
                  href={`tel:${activeItem.officerPhone}`}
                  className="btn btn-secondary"
                  style={{ padding: "8px 14px", fontSize: "0.82rem", borderRadius: "8px", borderColor: "#2563eb", color: "#1e40af" }}
                >
                  <Phone size={14} />
                  <span>अधिकारी से बात करें ({activeItem.officerPhone})</span>
                </a>
              </div>

              {activeItem.resolutionRemarks && (
                <div style={{ borderTop: "1px solid #dbeafe", paddingTop: "12px" }}>
                  <span style={{ fontSize: "0.8rem", color: "#1e40af", fontWeight: 700, display: "block" }}>
                    कार्रवाई विवरण एवं अंतिम रिपोर्ट (Official Remarks):
                  </span>
                  <p style={{ margin: "4px 0 0 0", color: "#1f2937", fontSize: "0.92rem", lineHeight: 1.5 }}>
                    {activeItem.resolutionRemarks}
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default function GrievanceStatusPage() {
  return (
    <Suspense fallback={<div style={{ padding: "60px", textAlign: "center" }}>लोड हो रहा है...</div>}>
      <GrievanceStatusContent />
    </Suspense>
  );
}
