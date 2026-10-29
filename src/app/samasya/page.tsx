"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Send, 
  CheckCircle2, 
  Camera, 
  Search, 
  FileText, 
  Clock, 
  Phone, 
  PlusCircle, 
  ShieldAlert 
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

  const pastRecords: GrievanceRecord[] = [
    {
      id: "GRY-2026-101",
      name: lang === "hi" ? "श्री दिनेश कुमार वर्मा" : "Shri Dinesh Kumar Verma",
      phone: "98380 43210",
      ward: lang === "hi" ? "वार्ड नं. 6 (प्राथमिक विद्यालय मार्ग)" : "Ward No. 6 (Primary School Road)",
      category: lang === "hi" ? "पेयजल / हैंडपंप खराबी" : "Drinking Water / Handpump Breakdown",
      desc: lang === "hi"
        ? "प्राथमिक विद्यालय गरायें (1917) के सामने लगा इंडिया मार्का-2 हैंडपंप का सिलिंडर खराब हो गया था, जिससे स्कूली बच्चों एवं राहगीरों को पीने के पानी की समस्या हो रही थी।"
        : "The cylinder of India Mark-II handpump outside Primary School Garayen broke down, disrupting drinking water for school children and pedestrians.",
      status: "resolved",
      assignedOfficer: lang === "hi" ? "श्री मनोज कुमार तिवारी" : "Shri Manoj Kumar Tiwari",
      officerRole: lang === "hi" ? "ग्राम विकास अधिकारी (Panchayat Sachiv)" : "Panchayat Secretary (VDO)",
      officerPhone: "+91 91250 45678",
      filedDate: lang === "hi" ? "22 अक्टूबर 2026, 11:30 AM" : "22 Oct 2026, 11:30 AM",
      assignedDate: lang === "hi" ? "23 अक्टूबर 2026, 09:15 AM" : "23 Oct 2026, 09:15 AM",
      inspectionDate: lang === "hi" ? "24 अक्टूबर 2026, 02:00 PM" : "24 Oct 2026, 02:00 PM",
      resolvedDate: lang === "hi" ? "25 अक्टूबर 2026, 04:45 PM" : "25 Oct 2026, 04:45 PM",
      resolutionRemarks: lang === "hi"
        ? "जल निगम मिस्त्री द्वारा नया सिलिंडर व पाइप डालकर हैंडपंप पूर्ण रूप से चालू कर दिया गया है। पानी की गुणवत्ता उत्तम पाई गई।"
        : "Jal Nigam technicians installed a new cylinder and riser pipe. Handpump restored to full operation with tested potable water.",
      priority: "urgent"
    },
    {
      id: "GRY-2026-102",
      name: lang === "hi" ? "श्रीमती सुनैना देवी" : "Smt. Sunaina Devi",
      phone: "97920 87654",
      ward: lang === "hi" ? "वार्ड नं. 3 (शिव मंदिर टोला)" : "Ward No. 3 (Shiv Mandir Hamlet)",
      category: lang === "hi" ? "बिजली / सोलर लाइट" : "Electricity / Solar Street Light",
      desc: lang === "hi"
        ? "शिव मंदिर तिराहे पर स्थापित सोलर स्ट्रीट लाइट की बैटरी चार्ज नहीं हो रही है, जिससे शाम को अंधेरा रहता है।"
        : "The battery of the solar street light installed at the temple crossing is failing to hold charge, causing evening darkness.",
      status: "inspecting",
      assignedOfficer: lang === "hi" ? "अवर अभियंता (विद्युत/सौर ऊर्जा प्रभाग)" : "Junior Engineer (Renewable Energy)",
      officerRole: lang === "hi" ? "तकनीकी अधिकारी, विकास खंड लंभुआ" : "Technical Officer, Lambhua Block",
      officerPhone: "+91 94150 98765",
      filedDate: lang === "hi" ? "25 अक्टूबर 2026, 03:20 PM" : "25 Oct 2026, 03:20 PM",
      assignedDate: lang === "hi" ? "26 अक्टूबर 2026, 10:00 AM" : "26 Oct 2026, 10:00 AM",
      inspectionDate: lang === "hi" ? "27 अक्टूबर 2026, 11:30 AM" : "27 Oct 2026, 11:30 AM",
      resolutionRemarks: lang === "hi"
        ? "स्थलीय निरीक्षण में सोलर पैनल व इन्वर्टर किट की जांच की गई। नई लिथियम बैटरी का इंडेंट ब्लॉक कार्यालय को भेजा गया है, 48 घंटे में स्थापना होगी।"
        : "Field inspection completed. Indent for replacement lithium battery submitted to block office; installation scheduled within 48 hours.",
      priority: "normal"
    },
    {
      id: "GRY-2026-103",
      name: lang === "hi" ? "श्री कमलेश यादव" : "Shri Kamlesh Yadav",
      phone: "94150 65432",
      ward: lang === "hi" ? "वार्ड नं. 1 (मुख्य प्रवेश द्वार टोला)" : "Ward No. 1 (Welcome Gate Hamlet)",
      category: lang === "hi" ? "सड़क / नाली जाम" : "Road / Clogged Drain",
      desc: lang === "hi"
        ? "स्वागत द्वार के पास मुख्य पक्की नाली में मलबे के कारण पानी का निकास अवरुद्ध है और बरसात का पानी सड़क पर बह रहा है।"
        : "Drainage runoff near the Welcome Gate is obstructed by debris, causing overflow onto the paved roadway.",
      status: "assigned",
      assignedOfficer: lang === "hi" ? "श्री नीरव सिंह" : "Shri Neerav Singh",
      officerRole: lang === "hi" ? "ग्राम प्रधान, गरायें" : "Gram Pradhan, Garayen",
      officerPhone: "+91 94510 24891",
      filedDate: lang === "hi" ? "27 अक्टूबर 2026, 01:15 PM" : "27 Oct 2026, 01:15 PM",
      assignedDate: lang === "hi" ? "28 अक्टूबर 2026, 09:30 AM" : "28 Oct 2026, 09:30 AM",
      inspectionDate: lang === "hi" ? "प्रक्रियाधीन (आज सायं निर्धारित)" : "In Progress (Scheduled for inspection)",
      resolutionRemarks: lang === "hi"
        ? "सफाई कर्मी दल को मौके पर भेजा गया है। मलबा हटाकर नाली का बहाव सामान्य किया जा रहा है।"
        : "Sanitation squad deployed on-site to remove silt and debris for free water discharge.",
      priority: "urgent"
    }
  ];

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
        name: lang === "hi" ? "नागरिक (आपकी शिकायत)" : "Citizen (Your Grievance)",
        phone: "98XXXXXXXX",
        ward: lang === "hi" ? "गरायें लंभुआ (सुल्तानपुर)" : "Garayen Lambhua (Sultanpur)",
        category: lang === "hi" ? "सामान्य जनसमस्या" : "Public Civic Grievance",
        desc: lang === "hi" ? "आपकी दर्ज की गई शिकायत संबंधित नोडल अधिकारी को अग्रसारित कर दी गई है।" : "Your grievance has been dispatched to the assigned nodal officer for immediate on-site inspection.",
        status: "registered",
        assignedOfficer: lang === "hi" ? "श्री मनोज कुमार तिवारी" : "Shri Manoj Kumar Tiwari",
        officerRole: lang === "hi" ? "ग्राम विकास अधिकारी (सचिव)" : "Panchayat Secretary (VDO)",
        officerPhone: "+91 91250 45678",
        filedDate: lang === "hi" ? "आज, अभी-अभी" : "Today, Just now",
        assignedDate: lang === "hi" ? "प्रक्रियाधीन" : "In Processing",
        inspectionDate: lang === "hi" ? "शीघ्र निर्धारित" : "Scheduled shortly",
        resolutionRemarks: lang === "hi" ? "पंचायत सचिवालय गरायें द्वारा शिकायत संज्ञान में ली गई है।" : "Acknowledged by Garayen Secretariat.",
        priority: "normal"
      });
    } else {
      setSearchResult(null);
      setSearchError(true);
    }
  };

  return (
    <div style={{ backgroundColor: "#fffdf8", minHeight: "85vh", padding: "40px 0 80px 0" }}>
      <div className="container">

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#78350f", marginBottom: "20px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#d97706", fontWeight: 700, textDecoration: "none" }}>
            {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
          </Link>
          <span>/</span>
          <span style={{ color: "#78350f", fontWeight: 700 }}>
            {lang === "hi" ? "जनसमस्या निवारण एवं ट्रैकर" : "Grievance Portal & Tracker"}
          </span>
        </div>

        {/* Header */}
        <div style={{ maxWidth: "820px", margin: "0 auto 32px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", borderColor: "#fde68a", color: "#92400e" }}>
            <ShieldAlert size={16} />
            <span>{lang === "hi" ? "ऑनलाइन जनसुनवाई 24x7" : "24/7 Digital Grievance Portal"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#78350f", lineHeight: 1.25, marginBottom: "12px" }}>
            {lang === "hi" ? "गरायें ग्राम पंचायत: जनसमस्या समाधान एवं लाइव ट्रैकर" : "Gram Panchayat Garayen: Public Grievance Portal & Live Tracker"}
          </h1>
          <p style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)", color: "#5a4225", lineHeight: 1.6 }}>
            {lang === "hi"
              ? "बिजली, पानी, सड़क, नाली, सफाई या सरकारी योजनाओं से जुड़ी कोई भी समस्या यहाँ दर्ज करें और टोकन नंबर द्वारा लाइव समाधान प्रगति ट्रैक करें।"
              : "Report civic issues regarding power, drinking water, roads, sanitation, or welfare schemes and track real-time resolution with your token ID."}
          </p>
        </div>

        {/* Tab switch */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
          <button
            onClick={() => setActiveTab("form")}
            style={{
              padding: "12px 24px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: activeTab === "form" ? "2px solid #d97706" : "1.5px solid #fde68a",
              backgroundColor: activeTab === "form" ? "#d97706" : "#ffffff",
              color: activeTab === "form" ? "#ffffff" : "#78350f",
              boxShadow: activeTab === "form" ? "0 8px 25px rgba(217, 119, 6, 0.3)" : "none",
              minHeight: "44px"
            }}
          >
            <PlusCircle size={18} />
            <span>{lang === "hi" ? "नई समस्या दर्ज करें (New Grievance)" : "Submit New Grievance"}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("track");
              if (!searchResult && pastRecords.length > 0) {
                setSearchResult(pastRecords[0]);
                setSearchId(pastRecords[0].id);
              }
            }}
            style={{
              padding: "12px 24px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: activeTab === "track" ? "2px solid #d97706" : "1.5px solid #fde68a",
              backgroundColor: activeTab === "track" ? "#d97706" : "#ffffff",
              color: activeTab === "track" ? "#ffffff" : "#78350f",
              boxShadow: activeTab === "track" ? "0 8px 25px rgba(217, 119, 6, 0.3)" : "none",
              minHeight: "44px"
            }}
          >
            <Search size={18} />
            <span>{lang === "hi" ? "शिकायत की स्थिति जांचें (Track Status)" : "Track Resolution Progress"}</span>
          </button>
        </div>

        {/* TAB 1: Grievance Submission Form */}
        {activeTab === "form" && (
          <div style={{ maxWidth: "800px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "24px", padding: "clamp(20px, 4vw, 40px)", border: "1.5px solid #fde68a", boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)" }}>
            <form onSubmit={handleSubmit}>
              
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#451a03", marginBottom: "8px" }}>
                  {lang === "hi" ? "समस्या का प्रकार (Category) *" : "Issue Category *"}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1.5px solid #fde68a", fontSize: "0.95rem", backgroundColor: "#fffdfa", outline: "none", fontWeight: 600, color: "#451a03" }}
                >
                  <option value="bijli">{lang === "hi" ? "बिजली / सोलर स्ट्रीट लाइट की खराबी" : "Electricity / Solar Street Light Fault"}</option>
                  <option value="paani">{lang === "hi" ? "पेयजल / हैंडपंप / नल पाइपलाइन समस्या" : "Drinking Water / Handpump / Tap Water Fault"}</option>
                  <option value="sadak">{lang === "hi" ? "सड़क / खड़ंजा / नाली सफाई" : "Road / Brick Paving / Drainage Issue"}</option>
                  <option value="safai">{lang === "hi" ? "सफाई / कचरा प्रबंधन" : "Sanitation & Garbage Management"}</option>
                  <option value="awas">{lang === "hi" ? "आवास / राशन कार्ड / वृद्धा पेंशन" : "Housing / Ration Card / Pension"}</option>
                  <option value="kisan">{lang === "hi" ? "नहर पानी / खाद-बीज / कृषि समस्या" : "Canal Irrigation / Seeds / Agriculture"}</option>
                  <option value="other">{lang === "hi" ? "अन्य जनसमस्या" : "Other Civic Issues"}</option>
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "16px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "आपका पूरा नाम *" : "Your Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={lang === "hi" ? "उदा. राहुल कुमार" : "e.g., Rahul Kumar"}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", color: "#451a03" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "मोबाइल नंबर *" : "Mobile Number *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="98XXXXXXXX"
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", color: "#451a03" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "वार्ड नंबर / टोला *" : "Ward / Hamlet *"}
                  </label>
                  <select
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", backgroundColor: "#fffdfa", color: "#451a03" }}
                  >
                    <option value="वार्ड 1 - मुख्य प्रवेश द्वार टोला">{lang === "hi" ? "वार्ड 1 - प्रवेश द्वार टोला" : "Ward 1 - Welcome Gate"}</option>
                    <option value="वार्ड 2 - पुराना बाज़ार टोला">{lang === "hi" ? "वार्ड 2 - पुराना बाज़ार टोला" : "Ward 2 - Purana Bazaar"}</option>
                    <option value="वार्ड 3 - शिव मंदिर टोला">{lang === "hi" ? "वार्ड 3 - शिव मंदिर टोला" : "Ward 3 - Shiv Mandir"}</option>
                    <option value="वार्ड 4 - बड़का टोला">{lang === "hi" ? "वार्ड 4 - बड़का टोला" : "Ward 4 - Badka Tola"}</option>
                    <option value="वार्ड 5 - अमृत सरोवर टोला">{lang === "hi" ? "वार्ड 5 - सरोवर टोला" : "Ward 5 - Amrit Sarovar"}</option>
                    <option value="वार्ड 6 - प्राथमिक विद्यालय मार्ग">{lang === "hi" ? "वार्ड 6 - विद्यालय मार्ग" : "Ward 6 - Primary School Road"}</option>
                    <option value="वार्ड 7 - गढ़ी टोला">{lang === "hi" ? "वार्ड 7 - गढ़ी टोला" : "Ward 7 - Gadhi Tola"}</option>
                    <option value="वार्ड 8 - पूरब टोला">{lang === "hi" ? "वार्ड 8 - पूरब टोला" : "Ward 8 - Poorab Tola"}</option>
                    <option value="वार्ड 9 - नहर पुलिया टोला">{lang === "hi" ? "वार्ड 9 - नहर पुलिया टोला" : "Ward 9 - Nahar Puliya"}</option>
                    <option value="वार्ड 10 - पश्चिम टोला">{lang === "hi" ? "वार्ड 10 - पश्चिम टोला" : "Ward 10 - Paschim Tola"}</option>
                    <option value="वार्ड 11 - नई बस्ती">{lang === "hi" ? "वार्ड 11 - नई बस्ती" : "Ward 11 - Southern Border"}</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                  {lang === "hi" ? "समस्या का विवरण (Details) *" : "Detailed Description of Grievance *"}
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={lang === "hi" 
                    ? "कृपया समस्या का स्थान और विवरण विस्तार से लिखें ताकि अधिकारी तुरंत मौके पर पहुंचकर समाधान कर सकें..."
                    : "Please describe the exact location and nature of the issue so assigned officials can inspect and resolve it immediately..."}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.95rem", resize: "vertical", outline: "none", color: "#451a03" }}
                />
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "28px" }}>
                <div>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "10px", border: "1px dashed #d97706", backgroundColor: "#fffbeb", color: "#92400e", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>
                    <Camera size={16} />
                    <span>{photoAttached ? (lang === "hi" ? "✓ फोटो संलग्न है" : "✓ Photo Attached") : (lang === "hi" ? "समस्या की फोटो जोड़ें (वैकल्पिक)" : "Attach Photo (Optional)")}</span>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={() => setPhotoAttached(true)}
                    />
                  </label>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#451a03" }}>
                    {lang === "hi" ? "प्राथमिकता:" : "Urgency:"}
                  </span>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "0.88rem", color: "#451a03" }}>
                    <input
                      type="radio"
                      name="priority"
                      checked={priority === "normal"}
                      onChange={() => setPriority("normal")}
                    />
                    <span>{lang === "hi" ? "सामान्य (Normal)" : "Normal"}</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "0.88rem", color: "#d97706", fontWeight: 700 }}>
                    <input
                      type="radio"
                      name="priority"
                      checked={priority === "urgent"}
                      onChange={() => setPriority("urgent")}
                    />
                    <span>{lang === "hi" ? "अति आवश्यक (Urgent)" : "Urgent"}</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", padding: "14px", fontSize: "1.02rem", borderRadius: "12px" }}
              >
                <Send size={18} />
                <span>{lang === "hi" ? "समस्या दर्ज करें (Submit Grievance)" : "Submit Grievance Now"}</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: Status Tracker */}
        {activeTab === "track" && (
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleLookup(searchId);
              }} 
              style={{ display: "flex", gap: "10px", marginBottom: "18px", flexWrap: "wrap" }}
            >
              <input
                type="text"
                required
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder={lang === "hi" ? "अपनी शिकायत संख्या दर्ज करें (जैसे: GRY-2026-101)" : "Enter Grievance Token ID (e.g., GRY-2026-101)"}
                style={{ flex: 1, minWidth: "220px", padding: "13px 16px", borderRadius: "12px", border: "1.5px solid #fde68a", fontSize: "0.98rem", outline: "none", fontWeight: 600, color: "#451a03" }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "0 24px", borderRadius: "12px", height: "48px" }}
              >
                <Search size={18} />
                <span>{lang === "hi" ? "स्थिति देखें" : "Track Status"}</span>
              </button>
            </form>

            {/* Quick Demo IDs */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "26px", fontSize: "0.85rem" }}>
              <span style={{ color: "#78350f", fontWeight: 600 }}>
                {lang === "hi" ? "डेमो आईडी से जांचें:" : "Try Sample Demo Tickets:"}
              </span>
              {pastRecords.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => {
                    setSearchId(r.id);
                    handleLookup(r.id);
                  }}
                  style={{
                    backgroundColor: "#fef3c7",
                    border: "1px solid #fde68a",
                    color: "#92400e",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "0.82rem",
                    fontWeight: 700
                  }}
                >
                  {r.id}
                </button>
              ))}
            </div>

            {searchError && (
              <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", padding: "16px", borderRadius: "14px", textAlign: "center", marginBottom: "24px", fontWeight: 600 }}>
                {lang === "hi" 
                  ? "यह शिकायत संख्या नहीं मिली। कृपया सही आईडी दर्ज करें अथवा ऊपर दिए गए डेमो आईडी पर क्लिक करें।"
                  : "Tracking ID not found. Please enter a valid token ID or click one of the sample tickets above."}
              </div>
            )}

            {/* Tracked Record Card */}
            {searchResult && (
              <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "clamp(20px, 4vw, 36px)", border: "1.5px solid #fde68a", boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)" }}>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "14px", borderBottom: "1px solid #fde68a", paddingBottom: "18px", marginBottom: "24px" }}>
                  <div>
                    <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase" }}>
                      {lang === "hi" ? "शिकायत संख्या (Complaint ID)" : "Grievance Token ID"}
                    </span>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#451a03", margin: "2px 0 0 0" }}>
                      {searchResult.id}
                    </h3>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <span 
                      style={{ 
                        padding: "6px 14px", 
                        borderRadius: "20px", 
                        fontSize: "0.85rem", 
                        fontWeight: 700,
                        backgroundColor: searchResult.status === "resolved" ? "#dcfce7" : "#fef3c7",
                        color: searchResult.status === "resolved" ? "#166534" : "#92400e",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      {searchResult.status === "resolved" ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                      {searchResult.status === "resolved" ? (lang === "hi" ? "समाधान पूर्ण (Resolved)" : "Resolved") : (lang === "hi" ? "कार्य प्रगति पर (In Progress)" : "In Progress")}
                    </span>
                  </div>
                </div>

                {/* 4-Step Resolution Timeline */}
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 70px), 1fr))", gap: "10px", position: "relative" }}>
                    {[
                      { step: 1, title: lang === "hi" ? "शिकायत दर्ज" : "Logged", state: "completed" },
                      { step: 2, title: lang === "hi" ? "अधिकारी नियुक्त" : "Assigned", state: searchResult.status !== "registered" ? "completed" : "current" },
                      { step: 3, title: lang === "hi" ? "स्थलीय निरीक्षण" : "Inspecting", state: searchResult.status === "inspecting" || searchResult.status === "resolved" ? "completed" : "pending" },
                      { step: 4, title: lang === "hi" ? "समाधान पूर्ण" : "Resolved", state: searchResult.status === "resolved" ? "completed" : "pending" },
                    ].map((st) => (
                      <div key={st.step} style={{ textAlign: "center" }}>
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
                            fontSize: "0.9rem",
                            backgroundColor: st.state === "completed" ? "#16a34a" : st.state === "current" ? "#d97706" : "#e5e7eb",
                            color: st.state === "pending" ? "#9ca3af" : "#ffffff"
                          }}
                        >
                          {st.state === "completed" ? "✓" : st.step}
                        </div>
                        <span style={{ fontSize: "0.76rem", fontWeight: 700, color: st.state === "completed" ? "#166534" : "#451a03", display: "block" }}>
                          {st.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div style={{ backgroundColor: "#fffdfa", padding: "18px", borderRadius: "16px", border: "1px solid #fde68a", marginBottom: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "14px", fontSize: "0.9rem" }}>
                    <div>
                      <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                        {lang === "hi" ? "शिकायतकर्ता" : "Complainant"}
                      </span>
                      <strong style={{ color: "#451a03" }}>{searchResult.name}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                        {lang === "hi" ? "वार्ड / टोला" : "Ward / Hamlet"}
                      </span>
                      <strong style={{ color: "#451a03" }}>{searchResult.ward}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                        {lang === "hi" ? "श्रेणी" : "Category"}
                      </span>
                      <strong style={{ color: "#d97706" }}>{searchResult.category}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                        {lang === "hi" ? "दर्ज दिनांक" : "Logged Date"}
                      </span>
                      <strong style={{ color: "#451a03" }}>{searchResult.filedDate}</strong>
                    </div>
                  </div>

                  <div style={{ marginTop: "16px", borderTop: "1px solid #fde68a", paddingTop: "12px" }}>
                    <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                      {lang === "hi" ? "विवरण" : "Problem Description"}
                    </span>
                    <p style={{ margin: "4px 0 0 0", color: "#57534e", fontSize: "0.92rem", lineHeight: 1.5 }}>
                      {searchResult.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: "14px", backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "10px 14px", borderRadius: "10px", fontSize: "0.85rem", color: "#78350f" }}>
                    <strong>{lang === "hi" ? "प्रभारी अधिकारी:" : "Assigned Officer:"}</strong> {searchResult.assignedOfficer} ({searchResult.officerRole}) • 📞 {searchResult.officerPhone}
                  </div>

                  {searchResult.resolutionRemarks && (
                    <div style={{ marginTop: "10px", backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", padding: "10px 14px", borderRadius: "10px", fontSize: "0.85rem", color: "#166534" }}>
                      <strong>{lang === "hi" ? "निस्तारण आख्या:" : "Resolution Remarks:"}</strong> {searchResult.resolutionRemarks}
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        )}

      </div>

      {/* Instant Success Modal */}
      {createdToken && (
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
              maxWidth: "500px", 
              width: "100%", 
              borderRadius: "24px", 
              padding: "clamp(20px, 4vw, 34px)", 
              textAlign: "center",
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              border: "1.5px solid #fde68a"
            }}
          >
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#fef3c7", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#451a03", marginBottom: "8px" }}>
              {lang === "hi" ? "आपकी शिकायत दर्ज कर ली गई है!" : "Grievance Logged Successfully!"}
            </h3>

            <p style={{ fontSize: "0.9rem", color: "#78350f", marginBottom: "18px" }}>
              {lang === "hi" 
                ? "कृपया इस टोकन संख्या को नोट कर लें, आप स्थिति जांचने के लिए इसका उपयोग कर सकते हैं।"
                : "Please note down this token number to track resolution progress on the portal."}
            </p>

            <div style={{ backgroundColor: "#fffbeb", padding: "14px 20px", borderRadius: "14px", border: "1.5px solid #fde68a", marginBottom: "24px" }}>
              <span style={{ fontSize: "0.78rem", color: "#92400e", fontWeight: 700, display: "block" }}>
                {lang === "hi" ? "शिकायत संख्या (Complaint ID)" : "Tracking Token ID"}
              </span>
              <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#d97706", letterSpacing: "1px" }}>
                {createdToken}
              </span>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  const tok = createdToken;
                  setCreatedToken(null);
                  setActiveTab("track");
                  setSearchId(tok);
                  handleLookup(tok);
                }}
                className="btn btn-primary"
                style={{ padding: "10px 22px", fontSize: "0.9rem" }}
              >
                {lang === "hi" ? "स्थिति जांचें" : "Track Status Now"}
              </button>
              <button
                onClick={() => setCreatedToken(null)}
                className="btn btn-secondary"
                style={{ padding: "10px 20px", fontSize: "0.9rem", border: "1px solid #fde68a" }}
              >
                {lang === "hi" ? "बंद करें" : "Close"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
