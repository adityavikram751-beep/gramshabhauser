"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  Phone, 
  PlusCircle, 
  ShieldAlert
} from "lucide-react";

interface GrievanceItem {
  id: string;
  name: { hi: string; en: string };
  phone: string;
  ward: { hi: string; en: string };
  category: { hi: string; en: string };
  desc: { hi: string; en: string };
  status: "registered" | "assigned" | "inspecting" | "resolved";
  assignedOfficer: { hi: string; en: string };
  officerRole: { hi: string; en: string };
  officerPhone: string;
  filedDate: { hi: string; en: string };
  assignedDate: { hi: string; en: string };
  inspectionDate: { hi: string; en: string };
  resolvedDate?: { hi: string; en: string };
  resolutionRemarks?: { hi: string; en: string };
  priority: "normal" | "urgent";
}

const sampleGrievances: GrievanceItem[] = [
  {
    id: "GRY-2026-101",
    name: { hi: "श्री दिनेश कुमार वर्मा", en: "Mr. Dinesh Kumar Verma" },
    phone: "98380 43210",
    ward: { hi: "वार्ड नं. 6 (प्राथमिक विद्यालय मार्ग)", en: "Ward No. 6 (Primary School Road)" },
    category: { hi: "पेयजल / हैंडपंप खराबी", en: "Drinking Water / Handpump Repair" },
    desc: { 
      hi: "प्राथमिक विद्यालय गरायें (1917) के सामने लगा इंडिया मार्का-2 हैंडपंप का सिलिंडर खराब हो गया था, जिससे स्कूली बच्चों एवं राहगीरों को पीने के पानी की समस्या हो रही थी।",
      en: "The India Mark-2 handpump cylinder opposite Garayen Primary School (Est. 1917) had malfunctioned, causing water inconvenience to school children and commuters."
    },
    status: "resolved",
    assignedOfficer: { hi: "श्री मनोज कुमार तिवारी", en: "Mr. Manoj Kumar Tiwari" },
    officerRole: { hi: "ग्राम विकास अधिकारी (Panchayat Sachiv)", en: "Village Development Officer (Panchayat Secretary)" },
    officerPhone: "+91 91250 45678",
    filedDate: { hi: "22 अक्टूबर 2026, 11:30 AM", en: "Oct 22, 2026, 11:30 AM" },
    assignedDate: { hi: "23 अक्टूबर 2026, 09:15 AM", en: "Oct 23, 2026, 09:15 AM" },
    inspectionDate: { hi: "24 अक्टूबर 2026, 02:00 PM", en: "Oct 24, 2026, 02:00 PM" },
    resolvedDate: { hi: "25 अक्टूबर 2026, 04:45 PM", en: "Oct 25, 2026, 04:45 PM" },
    resolutionRemarks: { 
      hi: "जल निगम मिस्त्री द्वारा नया सिलिंडर व पाइप डालकर हैंडपंप पूर्ण रूप से चालू कर दिया गया है। पानी की गुणवत्ता उत्तम पाई गई।",
      en: "Jal Nigam mechanic installed a new cylinder and pipe; the handpump is now fully operational. Water quality tested pure and safe."
    },
    priority: "urgent"
  },
  {
    id: "GRY-2026-102",
    name: { hi: "श्रीमती सुनैना देवी", en: "Mrs. Sunaina Devi" },
    phone: "97920 87654",
    ward: { hi: "वार्ड नं. 3 (शिव मंदिर टोला)", en: "Ward No. 3 (Shiv Mandir Tola)" },
    category: { hi: "बिजली / सोलर लाइट", en: "Electricity / Solar Street Light" },
    desc: { 
      hi: "शिव मंदिर तिराहे पर स्थापित सोलर स्ट्रीट लाइट की बैटरी चार्ज नहीं हो रही है, जिससे शाम को अंधेरा रहता है।",
      en: "The solar street light installed at the Shiv Temple intersection is not charging its battery, causing darkness in the evenings."
    },
    status: "inspecting",
    assignedOfficer: { hi: "अवर अभियंता (विद्युत/सौर ऊर्जा प्रभाग)", en: "Junior Engineer (Electricity & Solar Division)" },
    officerRole: { hi: "तकनीकी अधिकारी, विकास खंड लंभुआ", en: "Technical Officer, Lambhua Block" },
    officerPhone: "+91 94150 98765",
    filedDate: { hi: "25 अक्टूबर 2026, 03:20 PM", en: "Oct 25, 2026, 03:20 PM" },
    assignedDate: { hi: "26 अक्टूबर 2026, 10:00 AM", en: "Oct 26, 2026, 10:00 AM" },
    inspectionDate: { hi: "27 अक्टूबर 2026, 11:30 AM", en: "Oct 27, 2026, 11:30 AM" },
    resolutionRemarks: { 
      hi: "स्थलीय निरीक्षण में सोलर पैनल व इन्वर्टर किट की जांच की गई। नई लिथियम बैटरी का इंडेंट ब्लॉक कार्यालय को भेजा गया है, 48 घंटे में स्थापना होगी।",
      en: "Site inspection conducted for solar panel and inverter kit. New lithium battery indent submitted to block office; installation scheduled within 48 hours."
    },
    priority: "normal"
  },
  {
    id: "GRY-2026-103",
    name: { hi: "श्री कमलेश यादव", en: "Mr. Kamlesh Yadav" },
    phone: "94150 65432",
    ward: { hi: "वार्ड नं. 1 (मुख्य प्रवेश द्वार टोला)", en: "Ward No. 1 (Main Gateway Tola)" },
    category: { hi: "सड़क / नाली जाम", en: "Road / Drainage Clog" },
    desc: { 
      hi: "स्वागत द्वार के पास मुख्य पक्की नाली में मलबे के कारण पानी का निकास अवरुद्ध है और बरसात का पानी सड़क पर बह रहा है।",
      en: "Debris has clogged the main paved drain near the village entrance gateway, causing runoff water to overflow onto the road."
    },
    status: "assigned",
    assignedOfficer: { hi: "श्री नीरव सिंह", en: "Mr. Neerav Singh" },
    officerRole: { hi: "ग्राम प्रधान, गरायें", en: "Gram Pradhan, Garayen" },
    officerPhone: "+91 94510 24891",
    filedDate: { hi: "27 अक्टूबर 2026, 01:15 PM", en: "Oct 27, 2026, 01:15 PM" },
    assignedDate: { hi: "28 अक्टूबर 2026, 09:30 AM", en: "Oct 28, 2026, 09:30 AM" },
    inspectionDate: { hi: "प्रक्रियाधीन (आज सायं निर्धारित)", en: "In Progress (Scheduled for this evening)" },
    resolutionRemarks: { 
      hi: "सफाई कर्मी दल को मौके पर भेजा गया है। मलबा हटाकर नाली का बहाव सामान्य किया जा रहा है।",
      en: "Sanitation squad dispatched to site. Debris is being cleared to restore regular drain flow."
    },
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
      if (cleanToken.startsWith("GRY-2026-")) {
        setActiveItem({
          id: cleanToken,
          name: { hi: "नागरिक (आपकी शिकायत)", en: "Citizen (Your Complaint)" },
          phone: "98XXXXXXXX",
          ward: { hi: "गरायें लंभुआ (सुल्तानपुर)", en: "Garayen, Lambhua (Sultanpur)" },
          category: { hi: "सामान्य जनसमस्या", en: "General Public Grievance" },
          desc: { 
            hi: "आपकी दर्ज की गई शिकायत संबंधित अधिकारी को अग्रसारित कर दी गई है।", 
            en: "Your registered grievance has been forwarded to the concerned nodal officer." 
          },
          status: "registered",
          assignedOfficer: { hi: "श्री मनोज कुमार तिवारी", en: "Mr. Manoj Kumar Tiwari" },
          officerRole: { hi: "ग्राम विकास अधिकारी (सचिव)", en: "Village Development Officer (Secretary)" },
          officerPhone: "+91 91250 45678",
          filedDate: { hi: "आज, अभी-अभी", en: "Today, Just now" },
          assignedDate: { hi: "प्रक्रियाधीन", en: "In Process" },
          inspectionDate: { hi: "प्रक्रियाधीन", en: "In Process" },
          resolutionRemarks: { 
            hi: "शिकायत संज्ञान में ली गई है। 48 घंटे के भीतर स्थलीय निरीक्षण किया जाएगा।", 
            en: "Complaint formally acknowledged. Field inspection will be conducted within 48 hours." 
          },
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
    <div style={{ backgroundColor: "#fffdf8", minHeight: "85vh", padding: "40px 0 80px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280" }}>
            <Link href="/" style={{ color: "#d97706", fontWeight: 700, textDecoration: "none" }}>
              {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
            </Link>
            <span>/</span>
            <Link href="/samasya" style={{ color: "#d97706", fontWeight: 700, textDecoration: "none" }}>
              {lang === "hi" ? "समस्या समाधान" : "Grievance Redressal"}
            </Link>
            <span>/</span>
            <span style={{ color: "#78350f", fontWeight: 700 }}>
              {lang === "hi" ? "लाइव स्थिति जांचें (Tracking)" : "Live Status Tracking"}
            </span>
          </div>

          <Link
            href="/samasya"
            className="btn btn-primary"
            style={{ padding: "6px 14px", fontSize: "0.82rem", borderRadius: "20px" }}
          >
            <PlusCircle size={15} />
            <span>{lang === "hi" ? "नई शिकायत दर्ज करें" : "File New Grievance"}</span>
          </Link>
        </div>

        {/* Page Top Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 30px auto", textAlign: "center" }}>
          <div className="vip-badge">
            <Clock size={16} />
            <span>{lang === "hi" ? "पारदर्शी शिकायत समाधान ट्रैकिंग" : "Transparent Grievance Tracking"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.6rem)", fontWeight: 800, color: "#78350f", lineHeight: 1.25, marginBottom: "10px" }}>
            {lang === "hi" ? "शिकायत की लाइव स्थिति जांचें" : "Track Grievance Live Status"}
          </h1>
          <p style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.02rem)", color: "#5a4225", lineHeight: 1.6 }}>
            {lang === "hi" 
              ? "अपनी शिकायत संख्या दर्ज करके देखें कि आपकी समस्या किस चरण में है, कौन अधिकारी नियुक्त है और कब तक समाधान होगा।"
              : "Enter your complaint ID to view real-time stage updates, assigned nodal officer, and resolution schedule."}
          </p>
        </div>

        {/* Search Bar Container - Responsive */}
        <div 
          style={{ 
            maxWidth: "760px", 
            margin: "0 auto 28px auto", 
            backgroundColor: "#ffffff", 
            borderRadius: "20px", 
            padding: "clamp(18px, 4vw, 24px)", 
            border: "1.5px solid #fde68a",
            boxShadow: "0 8px 30px rgba(217,119,6,0.06)" 
          }}
        >
          <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <input
              type="text"
              required
              value={searchToken}
              onChange={(e) => setSearchToken(e.target.value)}
              placeholder={lang === "hi" ? "अपनी शिकायत संख्या दर्ज करें (जैसे: GRY-2026-101)" : "Enter Complaint ID (e.g. GRY-2026-101)"}
              style={{
                flex: "1 1 240px",
                padding: "12px 16px",
                borderRadius: "10px",
                border: "1.5px solid #d1d5db",
                fontSize: "1rem",
                fontWeight: 700,
                color: "#78350f",
                outline: "none"
              }}
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: "0 26px", borderRadius: "10px", fontSize: "0.95rem" }}
            >
              <Search size={17} />
              <span>{lang === "hi" ? "स्थिति देखें" : "Track Status"}</span>
            </button>
          </form>

          {/* Quick Demo IDs */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "14px", fontSize: "0.82rem" }}>
            <span style={{ color: "#6b7280", fontWeight: 600 }}>
              {lang === "hi" ? "डेमो शिकायत संख्या जांचें:" : "Try Sample Complaint IDs:"}
            </span>
            {sampleGrievances.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setSearchToken(g.id);
                  lookupToken(g.id);
                }}
                style={{
                  backgroundColor: searchToken === g.id ? "#d97706" : "#fef3c7",
                  border: "1px solid #fde68a",
                  color: searchToken === g.id ? "#ffffff" : "#92400e",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  transition: "all 0.2s"
                }}
              >
                {g.id} ({g.status === "resolved" ? (lang === "hi" ? "निस्तारित" : "Resolved") : (lang === "hi" ? "प्रक्रियाधीन" : "In Progress")})
              </button>
            ))}
          </div>

          {errorMsg && (
            <div style={{ marginTop: "14px", backgroundColor: "#fffbeb", border: "1px solid #fde68a", color: "#b45309", padding: "10px", borderRadius: "8px", textAlign: "center", fontSize: "0.88rem", fontWeight: 600 }}>
              {lang === "hi" 
                ? "यह शिकायत संख्या नहीं मिली। कृपया सही टोकन दर्ज करें अथवा ऊपर दिए गए डेमो बटन पर क्लिक करें।"
                : "Complaint ID not found. Please enter a valid token or select one of the demo buttons above."}
            </div>
          )}
        </div>

        {/* Complaint Details & Timeline */}
        {activeItem && (
          <div 
            style={{ 
              maxWidth: "840px", 
              margin: "0 auto", 
              backgroundColor: "#ffffff", 
              borderRadius: "22px", 
              padding: "clamp(20px, 4vw, 32px)", 
              border: "2px solid #fde68a",
              boxShadow: "0 15px 45px rgba(217,119,6,0.08)" 
            }}
          >
            {/* Header of Ticket */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", borderBottom: "1.5px solid #fef3c7", paddingBottom: "18px", marginBottom: "24px" }}>
              <div>
                <span style={{ color: "#d97706", fontWeight: 800, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {lang === "hi" ? "शिकायत संख्या (Complaint ID)" : "Complaint Reference ID"}
                </span>
                <h2 style={{ fontSize: "1.85rem", fontWeight: 900, color: "#78350f", margin: "2px 0 0 0" }}>
                  {activeItem.id}
                </h2>
                <span style={{ fontSize: "0.82rem", color: "#6b7280" }}>
                  {lang === "hi" ? "दर्ज दिनांक: " : "Filed On: "}
                  {lang === "hi" ? activeItem.filedDate.hi : activeItem.filedDate.en}
                </span>
              </div>

              <div>
                <span 
                  style={{ 
                    padding: "6px 14px", 
                    borderRadius: "20px", 
                    fontSize: "0.84rem", 
                    fontWeight: 800,
                    backgroundColor: activeItem.status === "resolved" ? "#dcfce7" : "#fef3c7",
                    color: activeItem.status === "resolved" ? "#166534" : "#92400e",
                    border: activeItem.status === "resolved" ? "1.5px solid #86efac" : "1.5px solid #fde68a",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  {activeItem.status === "resolved" ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                  {activeItem.status === "resolved" 
                    ? (lang === "hi" ? "समस्या समाधान पूर्ण (Resolved)" : "Problem Resolved Successfully") 
                    : (lang === "hi" ? "जांच / कार्य प्रगति पर" : "Inspection / Work In Progress")}
                </span>
              </div>
            </div>

            {/* Stepper - Responsive */}
            <div style={{ marginBottom: "28px" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#78350f", marginBottom: "14px" }}>
                {lang === "hi" ? "समाधान प्रगति विवरण (Resolution Progress)" : "Resolution Progress Details"}
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "10px", position: "relative" }}>
                {[
                  {
                    step: 1,
                    title: lang === "hi" ? "शिकायत दर्ज" : "Complaint Filed",
                    sub: lang === "hi" ? activeItem.filedDate.hi : activeItem.filedDate.en,
                    isDone: true,
                    isCurrent: activeItem.status === "registered"
                  },
                  {
                    step: 2,
                    title: lang === "hi" ? "अधिकारी नियुक्त" : "Officer Assigned",
                    sub: lang === "hi" ? activeItem.assignedDate.hi : activeItem.assignedDate.en,
                    isDone: activeItem.status !== "registered",
                    isCurrent: activeItem.status === "assigned"
                  },
                  {
                    step: 3,
                    title: lang === "hi" ? "स्थलीय निरीक्षण" : "Site Inspection",
                    sub: lang === "hi" ? activeItem.inspectionDate.hi : activeItem.inspectionDate.en,
                    isDone: activeItem.status === "inspecting" || activeItem.status === "resolved",
                    isCurrent: activeItem.status === "inspecting"
                  },
                  {
                    step: 4,
                    title: lang === "hi" ? "समाधान पूर्ण" : "Resolved",
                    sub: activeItem.resolvedDate 
                      ? (lang === "hi" ? activeItem.resolvedDate.hi : activeItem.resolvedDate.en) 
                      : (lang === "hi" ? "प्रतीक्षारत" : "Awaiting"),
                    isDone: activeItem.status === "resolved",
                    isCurrent: false
                  },
                ].map((st) => (
                  <div 
                    key={st.step} 
                    style={{ 
                      backgroundColor: st.isDone ? "#fffdf8" : st.isCurrent ? "#fffbeb" : "#f9fafb",
                      border: st.isDone ? "1.5px solid #fde68a" : st.isCurrent ? "1.5px solid #d97706" : "1px solid #e5e7eb",
                      padding: "12px",
                      borderRadius: "12px",
                      textAlign: "center"
                    }}
                  >
                    <div 
                      style={{ 
                        width: "30px", 
                        height: "30px", 
                        borderRadius: "50%", 
                        margin: "0 auto 6px auto", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        fontWeight: 800,
                        backgroundColor: st.isDone ? "#d97706" : st.isCurrent ? "#f59e0b" : "#d1d5db",
                        color: "#ffffff",
                        fontSize: "0.85rem"
                      }}
                    >
                      {st.isDone ? "✓" : st.step}
                    </div>
                    <strong style={{ fontSize: "0.84rem", color: st.isDone ? "#78350f" : "#1f2937", display: "block" }}>
                      {st.title}
                    </strong>
                    <span style={{ fontSize: "0.72rem", color: "#6b7280", display: "block", marginTop: "2px" }}>
                      {st.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Citizen & Issue Details */}
            <div style={{ backgroundColor: "#fffdf8", border: "1.5px solid #fde68a", borderRadius: "16px", padding: "18px", marginBottom: "22px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "12px", fontSize: "0.88rem", marginBottom: "14px" }}>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.76rem", display: "block" }}>
                    {lang === "hi" ? "शिकायतकर्ता" : "Complainant"}
                  </span>
                  <strong style={{ color: "#1f2937" }}>
                    {lang === "hi" ? activeItem.name.hi : activeItem.name.en}
                  </strong>
                </div>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.76rem", display: "block" }}>
                    {lang === "hi" ? "वार्ड / क्षेत्र" : "Ward / Sector"}
                  </span>
                  <strong style={{ color: "#1f2937" }}>
                    {lang === "hi" ? activeItem.ward.hi : activeItem.ward.en}
                  </strong>
                </div>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.76rem", display: "block" }}>
                    {lang === "hi" ? "श्रेणी" : "Category"}
                  </span>
                  <strong style={{ color: "#d97706" }}>
                    {lang === "hi" ? activeItem.category.hi : activeItem.category.en}
                  </strong>
                </div>
                <div>
                  <span style={{ color: "#6b7280", fontSize: "0.76rem", display: "block" }}>
                    {lang === "hi" ? "प्राथमिकता स्तर" : "Priority"}
                  </span>
                  <strong style={{ color: activeItem.priority === "urgent" ? "#d97706" : "#78350f" }}>
                    {activeItem.priority === "urgent" 
                      ? (lang === "hi" ? "अति आवश्यक (Urgent)" : "Urgent") 
                      : (lang === "hi" ? "सामान्य (Normal)" : "Normal")}
                  </strong>
                </div>
              </div>

              <div style={{ borderTop: "1px solid #fef3c7", paddingTop: "12px" }}>
                <span style={{ color: "#6b7280", fontSize: "0.76rem", display: "block", marginBottom: "3px" }}>
                  {lang === "hi" ? "समस्या विवरण" : "Issue Details"}
                </span>
                <p style={{ margin: 0, color: "#374151", fontSize: "0.92rem", lineHeight: 1.5 }}>
                  {lang === "hi" ? activeItem.desc.hi : activeItem.desc.en}
                </p>
              </div>
            </div>

            {/* Assigned Officer & Remarks Box */}
            <div style={{ backgroundColor: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "16px", padding: "18px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                <div>
                  <span style={{ fontSize: "0.74rem", color: "#d97706", fontWeight: 800, textTransform: "uppercase" }}>
                    {lang === "hi" ? "जिम्मेदार नोडल अधिकारी" : "Assigned Nodal Officer"}
                  </span>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#78350f", margin: "2px 0 0 0" }}>
                    {lang === "hi" ? activeItem.assignedOfficer.hi : activeItem.assignedOfficer.en}
                  </h4>
                  <span style={{ fontSize: "0.82rem", color: "#5a4225" }}>
                    {lang === "hi" ? activeItem.officerRole.hi : activeItem.officerRole.en}
                  </span>
                </div>

                <a
                  href={`tel:${activeItem.officerPhone}`}
                  className="btn btn-secondary"
                  style={{ padding: "7px 12px", fontSize: "0.8rem", borderRadius: "8px" }}
                >
                  <Phone size={13} />
                  <span>{lang === "hi" ? `अधिकारी से बात करें (${activeItem.officerPhone})` : `Call Officer (${activeItem.officerPhone})`}</span>
                </a>
              </div>

              {activeItem.resolutionRemarks && (
                <div style={{ borderTop: "1px solid #fde68a", paddingTop: "10px" }}>
                  <span style={{ fontSize: "0.76rem", color: "#b45309", fontWeight: 700, display: "block" }}>
                    {lang === "hi" ? "कार्रवाई विवरण एवं अंतिम रिपोर्ट (Official Remarks):" : "Action Taken & Official Report:"}
                  </span>
                  <p style={{ margin: "3px 0 0 0", color: "#1f2937", fontSize: "0.9rem", lineHeight: 1.5 }}>
                    {lang === "hi" ? activeItem.resolutionRemarks.hi : activeItem.resolutionRemarks.en}
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
  const { lang } = useLanguage();
  return (
    <Suspense fallback={<div style={{ padding: "60px", textAlign: "center" }}>{lang === "hi" ? "लोड हो रहा है..." : "Loading..."}</div>}>
      <GrievanceStatusContent />
    </Suspense>
  );
}
