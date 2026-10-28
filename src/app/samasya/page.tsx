"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  MessageSquareWarning, 
  Send, 
  CheckCircle2, 
  Camera, 
  Search, 
  ArrowRight, 
  ShieldAlert, 
  FileText,
  Clock,
  Phone,
  HelpCircle,
  AlertCircle,
  PlusCircle,
  Calendar,
  MapPin,
  Check
} from "lucide-react";

interface GrievanceRecord {
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

const pastRecords: GrievanceRecord[] = [
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

export default function SamasyaPage() {
  const { t, lang } = useLanguage();

  const [activeTab, setActiveTab] = useState<"form" | "track">("form");

  // Form states
  const [category, setCategory] = useState("bijli");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [ward, setWard] = useState("वार्ड 3 - शिव मंदिर टोला");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"normal" | "urgent">("normal");
  const [photoAttached, setPhotoAttached] = useState(false);
  const [createdToken, setCreatedToken] = useState<string | null>(null);

  // Search states
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState<GrievanceRecord | null>(null);
  const [searchError, setSearchError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim() || !description.trim()) return;

    const rand = Math.floor(100 + Math.random() * 900);
    const token = `GRY-2026-${rand}`;
    setCreatedToken(token);
  };

  const handleLookup = (idToFind: string) => {
    setSearchError(false);
    const clean = idToFind.trim().toUpperCase();
    const found = pastRecords.find(r => r.id.toUpperCase() === clean);
    if (found) {
      setSearchResult(found);
    } else if (clean.startsWith("GRY-2026-")) {
      setSearchResult({
        id: clean,
        name: "नागरिक (आपकी शिकायत)",
        phone: "98XXXXXXXX",
        ward: "गरायें लंभुआ (सुल्तानपुर)",
        category: "सामान्य जनसमस्या",
        desc: "आपकी दर्ज की गई शिकायत संबंधित नोडल अधिकारी को अग्रसारित कर दी गई है।",
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
      setSearchResult(null);
      setSearchError(true);
    }
  };

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "85vh", padding: "50px 0 90px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#b45309", fontWeight: 700 }}>समस्या समाधान पोर्टल (Jansunwai)</span>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: "820px", margin: "0 auto 36px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fee2e2", borderColor: "#fca5a5", color: "#b91c1c" }}>
            <ShieldAlert size={16} />
            <span>24x7 ऑनलाइन जनसुनवाई पोर्टल</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0e3d28", lineHeight: 1.2, marginBottom: "12px" }}>
            गरायें ग्राम पंचायत समस्या समाधान एवं स्थिति ट्रैकर
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.6 }}>
            गाँव की किसी भी समस्या को सीधे ग्राम प्रधान व सचिव तक दर्ज करें अथवा अपनी पुरानी शिकायत संख्या डालकर संपूर्ण प्रगति रिपोर्ट देखें।
          </p>
        </div>

        {/* 2-Option Mode Switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "36px" }}>
          <button
            type="button"
            onClick={() => setActiveTab("form")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 26px",
              borderRadius: "30px",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              border: activeTab === "form" ? "2px solid #b91c1c" : "1.5px solid #d1d5db",
              backgroundColor: activeTab === "form" ? "#b91c1c" : "#ffffff",
              color: activeTab === "form" ? "#ffffff" : "#374151",
              boxShadow: activeTab === "form" ? "0 6px 18px rgba(185,28,28,0.25)" : "none"
            }}
          >
            <PlusCircle size={18} />
            <span>1. नई समस्या दर्ज करें (Grievance Form)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("track");
              if (!searchResult) {
                setSearchId("GRY-2026-101");
                handleLookup("GRY-2026-101");
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 26px",
              borderRadius: "30px",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: "pointer",
              border: activeTab === "track" ? "2px solid #0e3d28" : "1.5px solid #d1d5db",
              backgroundColor: activeTab === "track" ? "#0e3d28" : "#ffffff",
              color: activeTab === "track" ? "#fbbf24" : "#374151",
              boxShadow: activeTab === "track" ? "0 6px 18px rgba(14,61,40,0.25)" : "none"
            }}
          >
            <Search size={18} />
            <span>2. शिकायत ID से पुराने रिकॉर्ड जांचें (Live Tracking)</span>
          </button>
        </div>

        {/* ================= OPTION 1: GRIEVANCE SUBMISSION FORM ================= */}
        {activeTab === "form" && (
          <div 
            style={{ 
              maxWidth: "780px", 
              margin: "0 auto", 
              backgroundColor: "#ffffff", 
              borderRadius: "24px", 
              padding: "38px", 
              border: "1.5px solid #e7dfcc", 
              boxShadow: "0 12px 35px rgba(0,0,0,0.06)" 
            }}
          >
            {createdToken ? (
              /* Success Screen */
              <div style={{ textAlign: "center", padding: "16px 10px" }}>
                <div style={{ width: "68px", height: "68px", borderRadius: "50%", backgroundColor: "#dcfce7", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
                  <CheckCircle2 size={42} />
                </div>
                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px" }}>
                  आपकी शिकायत सफलतापूर्वक दर्ज कर ली गई है!
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#4b5563", maxWidth: "500px", margin: "0 auto 20px auto" }}>
                  शिकायत को ग्राम विकास अधिकारी एवं ग्राम प्रधान को अग्रसारित कर दिया गया है। 48 घंटे में स्थलीय निरीक्षण होगा।
                </p>

                <div style={{ backgroundColor: "#fef3c7", border: "2px solid #fde68a", borderRadius: "16px", padding: "18px 24px", display: "inline-block", marginBottom: "26px" }}>
                  <span style={{ fontSize: "0.82rem", color: "#92400e", fontWeight: 700, display: "block" }}>
                    आपकी शिकायत टोकन संख्या (Complaint ID)
                  </span>
                  <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#b45309" }}>
                    {createdToken}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#78350f", display: "block", marginTop: "2px" }}>
                    कृपया इस टोकन नंबर को नोट कर लें
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("track");
                      setSearchId(createdToken);
                      handleLookup(createdToken);
                    }}
                    className="btn btn-primary"
                    style={{ padding: "12px 24px", fontSize: "0.92rem", borderRadius: "10px", backgroundColor: "#0e3d28" }}
                  >
                    <Search size={16} />
                    <span>इसी पेज पर लाइव स्थिति देखें</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCreatedToken(null);
                      setFullName("");
                      setMobile("");
                      setDescription("");
                      setPhotoAttached(false);
                    }}
                    className="btn btn-secondary"
                    style={{ padding: "12px 20px", fontSize: "0.92rem", borderRadius: "10px" }}
                  >
                    अन्य शिकायत दर्ज करें
                  </button>
                </div>
              </div>
            ) : (
              /* Complaint Input Form */
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid #f3ece0", paddingBottom: "12px", marginBottom: "22px" }}>
                  <FileText size={20} color="#b91c1c" />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", margin: 0 }}>
                    शिकायत पंजीकरण प्रपत्र
                  </h3>
                </div>

                {/* Category */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.88rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    समस्या का प्रकार (Category) *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ width: "100%", padding: "11px 14px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", backgroundColor: "#f9fafb", outline: "none", fontWeight: 600 }}
                  >
                    <option value="bijli">बिजली / सोलर स्ट्रीट लाइट की खराबी</option>
                    <option value="paani">पेयजल / हैंडपंप / नल पाइपलाइन समस्या</option>
                    <option value="sadak">सड़क / खड़ंजा / नाली जाम व जलभराव</option>
                    <option value="safai">सफाई व कचरा प्रबंधन</option>
                    <option value="awas">प्रधानमंत्री आवास / शौचालय / राशन कार्ड</option>
                    <option value="kisan">नहर पानी / खाद-बीज / कृषि समस्या</option>
                    <option value="other">अन्य जनसमस्या</option>
                  </select>
                </div>

                {/* Name, Phone, Ward */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "14px", marginBottom: "18px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                      शिकायतकर्ता का नाम *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="उदा. राहुल कुमार वर्मा"
                      style={{ width: "100%", padding: "11px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                      मोबाइल नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="98XXXXXXXX"
                      style={{ width: "100%", padding: "11px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                      वार्ड / टोला (गरायें) *
                    </label>
                    <select
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                      style={{ width: "100%", padding: "11px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                    >
                      <option value="वार्ड 1 - प्रवेश द्वार टोला">वार्ड 1 - प्रवेश द्वार टोला</option>
                      <option value="वार्ड 2 - पुराना बाज़ार टोला">वार्ड 2 - पुराना बाज़ार टोला</option>
                      <option value="वार्ड 3 - शिव मंदिर टोला">वार्ड 3 - शिव मंदिर टोला</option>
                      <option value="वार्ड 4 - बड़का टोला">वार्ड 4 - बड़का टोला</option>
                      <option value="वार्ड 5 - सरोवर टोला">वार्ड 5 - सरोवर टोला</option>
                      <option value="वार्ड 6 - प्राथमिक विद्यालय मार्ग">वार्ड 6 - प्राथमिक विद्यालय मार्ग</option>
                      <option value="वार्ड 7 - गढ़ी टोला">वार्ड 7 - गढ़ी टोला</option>
                      <option value="वार्ड 8 - पूरब टोला">वार्ड 8 - पूरब टोला</option>
                      <option value="वार्ड 9 - नहर पुलिया टोला">वार्ड 9 - नहर पुलिया टोला</option>
                      <option value="वार्ड 10 - पश्चिम टोला">वार्ड 10 - पश्चिम टोला</option>
                      <option value="वार्ड 11 - दक्षिणी सीमा टोला">वार्ड 11 - दक्षिणी सीमा</option>
                    </select>
                  </div>
                </div>

                {/* Details */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    समस्या का विस्तृत विवरण (Details) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="समस्या का सटीक स्थान व विवरण लिखें ताकि अधिकारी मौके पर पहुंचकर तुरंत निस्तारण कर सकें..."
                    style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", resize: "vertical", outline: "none" }}
                  />
                </div>

                {/* Photo & Priority */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px", marginBottom: "24px" }}>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "10px", border: "1px dashed #d97706", backgroundColor: "#fffbeb", color: "#b45309", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>
                    <Camera size={16} />
                    <span>{photoAttached ? "✓ फोटो संलग्न है" : "समस्या की फोटो जोड़ें"}</span>
                    <input type="file" accept="image/*" style={{ display: "none" }} onChange={() => setPhotoAttached(true)} />
                  </label>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.88rem" }}>
                    <span style={{ fontWeight: 700, color: "#4b5563" }}>प्राथमिकता:</span>
                    <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                      <input type="radio" checked={priority === "normal"} onChange={() => setPriority("normal")} />
                      <span>सामान्य</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer", color: "#dc2626", fontWeight: 700 }}>
                      <input type="radio" checked={priority === "urgent"} onChange={() => setPriority("urgent")} />
                      <span>अति आवश्यक</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "13px", fontSize: "1rem", borderRadius: "12px", backgroundColor: "#b91c1c" }}
                >
                  <Send size={18} />
                  <span>समस्या दर्ज करें (Submit Grievance)</span>
                </button>
              </form>
            )}
          </div>
        )}

        {/* ================= OPTION 2: ID SEARCH & PAST RECORDS ================= */}
        {activeTab === "track" && (
          <div style={{ maxWidth: "820px", margin: "0 auto" }}>
            
            {/* Search Input Box */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "26px", border: "1.5px solid #e7dfcc", boxShadow: "0 8px 30px rgba(0,0,0,0.05)", marginBottom: "26px" }}>
              <span style={{ fontSize: "0.85rem", color: "#0e3d28", fontWeight: 700, display: "block", marginBottom: "8px" }}>
                अपनी शिकायत संख्या (Complaint Token ID) दर्ज करें:
              </span>
              
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "14px" }}>
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="उदा. GRY-2026-101"
                  style={{ flex: "1 1 240px", padding: "12px 16px", borderRadius: "12px", border: "1.5px solid #d1d5db", fontSize: "1rem", fontWeight: 700, color: "#0e3d28", outline: "none" }}
                />
                <button
                  type="button"
                  onClick={() => handleLookup(searchId)}
                  className="btn btn-primary"
                  style={{ padding: "0 26px", borderRadius: "12px", fontSize: "0.95rem" }}
                >
                  <Search size={16} />
                  <span>रिकॉर्ड खोजें</span>
                </button>
              </div>

              {/* Demo IDs */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", fontSize: "0.82rem" }}>
                <span style={{ color: "#6b7280", fontWeight: 600 }}>डेमो शिकायत रिकॉर्ड देखें:</span>
                {pastRecords.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => {
                      setSearchId(r.id);
                      handleLookup(r.id);
                    }}
                    style={{
                      backgroundColor: searchId === r.id ? "#0e3d28" : "#fef3c7",
                      color: searchId === r.id ? "#ffffff" : "#92400e",
                      border: "1px solid #fde68a",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "0.8rem"
                    }}
                  >
                    {r.id} ({r.status === "resolved" ? "निस्तारित" : "प्रगति पर"})
                  </button>
                ))}
              </div>

              {searchError && (
                <div style={{ marginTop: "12px", backgroundColor: "#fee2e2", border: "1px solid #fca5a5", color: "#b91c1c", padding: "10px", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600 }}>
                  यह शिकायत संख्या नहीं मिली। कृपया सही टोकन संख्या दर्ज करें अथवा ऊपर दिए गए डेमो बटन पर क्लिक करें।
                </div>
              )}
            </div>

            {/* Display Found Record with Full Past Details */}
            {searchResult && (
              <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "32px", border: "2px solid #e2c079", boxShadow: "0 15px 45px rgba(0,0,0,0.06)" }}>
                
                {/* Header Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "14px", borderBottom: "1.5px solid #f3ece0", paddingBottom: "16px", marginBottom: "24px" }}>
                  <div>
                    <span style={{ fontSize: "0.78rem", color: "#d97706", fontWeight: 700, textTransform: "uppercase" }}>
                      शिकायत पंजीकरण संख्या (Token ID)
                    </span>
                    <h3 style={{ fontSize: "1.85rem", fontWeight: 900, color: "#0e3d28", margin: "2px 0 0 0" }}>
                      {searchResult.id}
                    </h3>
                    <span style={{ fontSize: "0.82rem", color: "#6b7280" }}>दर्ज दिनांक: {searchResult.filedDate}</span>
                  </div>

                  <div>
                    <span style={{ padding: "6px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 800, backgroundColor: searchResult.status === "resolved" ? "#dcfce7" : "#fef3c7", color: searchResult.status === "resolved" ? "#166534" : "#92400e", border: searchResult.status === "resolved" ? "1.5px solid #86efac" : "1.5px solid #fde68a", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                      {searchResult.status === "resolved" ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                      {searchResult.status === "resolved" ? "समस्या समाधान पूर्ण (Resolved)" : "जांच / कार्य प्रगति पर"}
                    </span>
                  </div>
                </div>

                {/* 4-Step Stepper */}
                <div style={{ marginBottom: "26px" }}>
                  <strong style={{ fontSize: "0.95rem", color: "#0e3d28", display: "block", marginBottom: "14px" }}>
                    समाधान प्रक्रिया प्रगति (Timeline):
                  </strong>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "10px" }}>
                    {[
                      { step: 1, title: "शिकायत दर्ज", date: searchResult.filedDate, done: true },
                      { step: 2, title: "अधिकारी नियुक्त", date: searchResult.assignedDate, done: searchResult.status !== "registered" },
                      { step: 3, title: "स्थलीय निरीक्षण", date: searchResult.inspectionDate, done: searchResult.status === "inspecting" || searchResult.status === "resolved" },
                      { step: 4, title: "समाधान पूर्ण", date: searchResult.resolvedDate || "प्रतीक्षारत", done: searchResult.status === "resolved" },
                    ].map((s) => (
                      <div key={s.step} style={{ backgroundColor: s.done ? "#f0fdf4" : "#f9fafb", border: s.done ? "1.5px solid #86efac" : "1px solid #e5e7eb", padding: "12px", borderRadius: "12px", textAlign: "center" }}>
                        <div style={{ width: "28px", height: "28px", borderRadius: "50%", margin: "0 auto 6px auto", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, backgroundColor: s.done ? "#16a34a" : "#d1d5db", color: "#ffffff", fontSize: "0.85rem" }}>
                          {s.done ? "✓" : s.step}
                        </div>
                        <strong style={{ fontSize: "0.82rem", color: s.done ? "#166534" : "#374151", display: "block" }}>{s.title}</strong>
                        <span style={{ fontSize: "0.72rem", color: "#6b7280", display: "block" }}>{s.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Citizen Details */}
                <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", borderRadius: "14px", padding: "18px", marginBottom: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "0.88rem", marginBottom: "14px" }}>
                    <div>
                      <span style={{ fontSize: "0.76rem", color: "#6b7280", display: "block" }}>शिकायतकर्ता</span>
                      <strong>{searchResult.name}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.76rem", color: "#6b7280", display: "block" }}>वार्ड / क्षेत्र</span>
                      <strong>{searchResult.ward}</strong>
                    </div>
                    <div>
                      <span style={{ fontSize: "0.76rem", color: "#6b7280", display: "block" }}>श्रेणी</span>
                      <strong style={{ color: "#d97706" }}>{searchResult.category}</strong>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #f3ece0", paddingTop: "10px" }}>
                    <span style={{ fontSize: "0.76rem", color: "#6b7280", display: "block", marginBottom: "2px" }}>समस्या विवरण</span>
                    <p style={{ margin: 0, fontSize: "0.92rem", color: "#374151", lineHeight: 1.5 }}>
                      {searchResult.desc}
                    </p>
                  </div>
                </div>

                {/* Assigned Officer Box */}
                <div style={{ backgroundColor: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "#2563eb", fontWeight: 700, textTransform: "uppercase" }}>
                        नियुक्त नोडल अधिकारी (Assigned Nodal Officer)
                      </span>
                      <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1e40af", margin: "2px 0 0 0" }}>
                        {searchResult.assignedOfficer}
                      </h4>
                      <span style={{ fontSize: "0.82rem", color: "#4b5563" }}>
                        {searchResult.officerRole}
                      </span>
                    </div>

                    <a
                      href={`tel:${searchResult.officerPhone}`}
                      className="btn btn-secondary"
                      style={{ padding: "6px 14px", fontSize: "0.82rem", borderRadius: "8px", borderColor: "#2563eb", color: "#1e40af" }}
                    >
                      <Phone size={13} />
                      <span>{searchResult.officerPhone}</span>
                    </a>
                  </div>

                  {searchResult.resolutionRemarks && (
                    <div style={{ borderTop: "1px solid #dbeafe", paddingTop: "10px" }}>
                      <span style={{ fontSize: "0.78rem", color: "#1e40af", fontWeight: 700, display: "block" }}>
                        कार्रवाई एवं अंतिम निस्तारण रिपोर्ट:
                      </span>
                      <p style={{ margin: "3px 0 0 0", color: "#1f2937", fontSize: "0.9rem", lineHeight: 1.5 }}>
                        {searchResult.resolutionRemarks}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
