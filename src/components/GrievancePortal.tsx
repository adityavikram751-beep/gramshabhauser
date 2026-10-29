"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  MessageSquareWarning, 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  Camera, 
  Send, 
  FileCheck, 
  User, 
  Phone, 
  MapPin, 
  Sparkles,
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
  assignedTo: { hi: string; en: string };
  date: { hi: string; en: string };
  priority: "normal" | "urgent";
}

export const GrievancePortal: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"new" | "track">("new");

  // Form states
  const [category, setCategory] = useState("bijli");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [ward, setWard] = useState("वार्ड 3 - शिव मंदिर टोला");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<"normal" | "urgent">("normal");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // Success modal
  const [newTicketId, setNewTicketId] = useState<string | null>(null);

  // Tracking state
  const [searchId, setSearchId] = useState("");
  const [trackedItem, setTrackedItem] = useState<GrievanceItem | null>(null);
  const [searchError, setSearchError] = useState(false);

  // Sample database of grievances
  const [grievanceList, setGrievanceList] = useState<GrievanceItem[]>([
    {
      id: "GRY-2026-101",
      name: { hi: "श्री दिनेश कुमार वर्मा", en: "Mr. Dinesh Kumar Verma" },
      phone: "98380XXXXX",
      ward: { hi: "वार्ड नं. 4 (बड़का टोला)", en: "Ward No. 4 (Barka Tola)" },
      category: { hi: "पेयजल / हैंडपंप खराबी", en: "Water / Handpump Repair" },
      desc: { 
        hi: "प्राथमिक विद्यालय के पास वाला सरकारी हैंडपंप 4 दिनों से खराब है, पीने के पानी की समस्या हो रही है।",
        en: "Public handpump near primary school is broken for 4 days, causing drinking water problem."
      },
      status: "resolved",
      assignedTo: { hi: "श्री मनोज तिवारी (ग्राम विकास अधिकारी)", en: "Mr. Manoj Tiwari (VDO)" },
      date: { hi: "24 अक्टूबर 2026", en: "Oct 24, 2026" },
      priority: "urgent"
    },
    {
      id: "GRY-2026-102",
      name: { hi: "श्रीमती सुनैना देवी", en: "Mrs. Sunaina Devi" },
      phone: "97920XXXXX",
      ward: { hi: "वार्ड नं. 8 (पूरब टोला)", en: "Ward No. 8 (Poorab Tola)" },
      category: { hi: "बिजली / सोलर लाइट", en: "Electricity / Solar Street Light" },
      desc: { 
        hi: "चौराहे की सोलर स्ट्रीट लाइट की बैटरी काम नहीं कर रही है, रात में अंधेरा रहता है।",
        en: "Solar light battery at the main crossing is faulty, causing darkness at night."
      },
      status: "inspecting",
      assignedTo: { hi: "अवर अभियंता (विद्युत प्रभाग)", en: "Junior Engineer (Electricity Div.)" },
      date: { hi: "26 अक्टूबर 2026", en: "Oct 26, 2026" },
      priority: "normal"
    },
    {
      id: "GRY-2026-103",
      name: { hi: "श्री कमलेश यादव", en: "Mr. Kamlesh Yadav" },
      phone: "94150XXXXX",
      ward: { hi: "वार्ड नं. 1 (प्रवेश द्वार)", en: "Ward No. 1 (Entrance Gateway)" },
      category: { hi: "सड़क / नाली जाम", en: "Road / Drainage Clog" },
      desc: { 
        hi: "मुख्य खड़ंजे के पास की नाली मलबे से बंद है, पानी सड़क पर बह रहा है।",
        en: "Drainage near main paved road is clogged with debris, causing runoff on road."
      },
      status: "assigned",
      assignedTo: { hi: "श्री नीरव सिंह (ग्राम प्रधान)", en: "Mr. Neerav Singh (Gram Pradhan)" },
      date: { hi: "27 अक्टूबर 2026", en: "Oct 27, 2026" },
      priority: "urgent"
    }
  ]);

  const wardsList = [
    { id: "w1", hi: "वार्ड 1 - प्रवेश द्वार टोला", en: "Ward 1 - Entrance Gateway Tola" },
    { id: "w2", hi: "वार्ड 2 - पुराना बाज़ार टोला", en: "Ward 2 - Old Market Tola" },
    { id: "w3", hi: "वार्ड 3 - शिव मंदिर टोला", en: "Ward 3 - Shiv Temple Tola" },
    { id: "w4", hi: "वार्ड 4 - बड़का टोला", en: "Ward 4 - Barka Tola" },
    { id: "w5", hi: "वार्ड 5 - सरोवर टोला", en: "Ward 5 - Sarovar Tola" },
    { id: "w6", hi: "वार्ड 6 - विद्यालय मार्ग", en: "Ward 6 - School Road" },
    { id: "w7", hi: "वार्ड 7 - गढ़ी टोला", en: "Ward 7 - Garhi Tola" },
    { id: "w8", hi: "वार्ड 8 - पूरब टोला", en: "Ward 8 - Poorab Tola" },
    { id: "w9", hi: "वार्ड 9 - नहर पुलिया टोला", en: "Ward 9 - Canal Bridge Tola" },
    { id: "w10", hi: "वार्ड 10 - पश्चिम टोला", en: "Ward 10 - Paschim Tola" },
    { id: "w11", hi: "वार्ड 11 - नई बस्ती", en: "Ward 11 - Nayi Basti" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim() || !description.trim()) return;

    const randomNum = Math.floor(100 + Math.random() * 900);
    const createdId = `GRY-2026-${randomNum}`;

    const newGrievance: GrievanceItem = {
      id: createdId,
      name: { hi: fullName, en: fullName },
      phone: mobile,
      ward: { hi: ward, en: ward },
      category: {
        hi: getCategoryLabelHi(category),
        en: getCategoryLabelEn(category)
      },
      desc: { hi: description, en: description },
      status: "registered",
      assignedTo: { 
        hi: "ग्राम प्रधान / पंचायत सचिवालय गरायें", 
        en: "Gram Pradhan / Panchayat Secretariat" 
      },
      date: {
        hi: new Date().toLocaleDateString("hi-IN", { day: "numeric", month: "long", year: "numeric" }),
        en: new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
      },
      priority: priority
    };

    setGrievanceList([newGrievance, ...grievanceList]);
    setNewTicketId(createdId);
    setTrackedItem(newGrievance);

    // Reset form
    setFullName("");
    setMobile("");
    setDescription("");
    setPhotoPreview(null);
  };

  const getCategoryLabelHi = (cat: string) => {
    switch (cat) {
      case "bijli": return "बिजली / सोलर लाइट";
      case "paani": return "पेयजल / हैंडपंप";
      case "sadak": return "सड़क / खड़ंजा / नाली";
      case "safai": return "साफ-सफाई व कूड़ा निस्तारण";
      case "awas": return "आवास / शौचालय योजना";
      case "kisan": return "किसान सम्मान व कृषि समस्या";
      default: return "अन्य सामान्य समस्या";
    }
  };

  const getCategoryLabelEn = (cat: string) => {
    switch (cat) {
      case "bijli": return "Electricity & Solar Lights";
      case "paani": return "Drinking Water & Handpumps";
      case "sadak": return "Roads, Pavements & Drains";
      case "safai": return "Sanitation & Waste Management";
      case "awas": return "Housing & Sanitation Scheme";
      case "kisan": return "PM-Kisan & Agriculture Issues";
      default: return "Other Community Grievance";
    }
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError(false);
    const found = grievanceList.find(g => g.id.toLowerCase().trim() === searchId.toLowerCase().trim());
    if (found) {
      setTrackedItem(found);
    } else {
      setTrackedItem(null);
      setSearchError(true);
    }
  };

  const loadDemoTicket = (id: string) => {
    setSearchId(id);
    const found = grievanceList.find(g => g.id === id);
    if (found) {
      setTrackedItem(found);
      setSearchError(false);
    }
  };

  return (
    <section id="samasya" style={{ padding: "clamp(40px, 6vw, 90px) 0", backgroundColor: "#fffdfa" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", borderColor: "#fde68a", color: "#92400e" }}>
            <ShieldAlert size={16} />
            <span>{t("samasya_badge")}</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#451a03" }}>{t("samasya_title")}</h2>
          <p className="section-subtitle" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: "#78350f" }}>{t("samasya_subtitle")}</p>
        </div>

        {/* Tab switch: New Complaint vs Track Status */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
          <button
            onClick={() => setActiveTab("new")}
            style={{
              padding: "12px 24px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
              border: activeTab === "new" ? "2px solid #d97706" : "1.5px solid #fde68a",
              backgroundColor: activeTab === "new" ? "#d97706" : "#ffffff",
              color: activeTab === "new" ? "#ffffff" : "#78350f",
              boxShadow: activeTab === "new" ? "0 8px 25px rgba(217, 119, 6, 0.3)" : "none"
            }}
          >
            <MessageSquareWarning size={18} />
            <span>{t("tab_new_samasya")}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("track");
              if (!trackedItem && grievanceList.length > 0) {
                setTrackedItem(grievanceList[0]);
                setSearchId(grievanceList[0].id);
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
              transition: "all 0.2s ease",
              border: activeTab === "track" ? "2px solid #d97706" : "1.5px solid #fde68a",
              backgroundColor: activeTab === "track" ? "#d97706" : "#ffffff",
              color: activeTab === "track" ? "#ffffff" : "#78350f",
              boxShadow: activeTab === "track" ? "0 8px 25px rgba(217, 119, 6, 0.3)" : "none"
            }}
          >
            <Search size={18} />
            <span>{t("tab_track_samasya")}</span>
          </button>
        </div>

        {/* ================= TAB 1: NEW GRIEVANCE FORM ================= */}
        {activeTab === "new" && (
          <div 
            style={{ 
              maxWidth: "800px", 
              margin: "0 auto", 
              backgroundColor: "#ffffff", 
              borderRadius: "24px", 
              padding: "clamp(20px, 4vw, 40px)", 
              border: "1.5px solid #fde68a",
              boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)" 
            }}
          >
            <form onSubmit={handleSubmit}>
              
              {/* Category Dropdown */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#451a03", marginBottom: "8px" }}>
                  {t("form_cat")} *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1.5px solid #fde68a", fontSize: "0.95rem", backgroundColor: "#fffdfa", outline: "none", fontWeight: 600, color: "#451a03" }}
                >
                  <option value="bijli">{t("form_cat_bijli")}</option>
                  <option value="paani">{t("form_cat_paani")}</option>
                  <option value="sadak">{t("form_cat_sadak")}</option>
                  <option value="safai">{t("form_cat_safai")}</option>
                  <option value="awas">{t("form_cat_awas")}</option>
                  <option value="kisan">{t("form_cat_kisan")}</option>
                  <option value="other">{t("form_cat_other")}</option>
                </select>
              </div>

              {/* Citizen Details Row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "16px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {t("form_name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={lang === "hi" ? "उदा. राहुल कुमार" : "e.g. Rahul Kumar"}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {t("form_phone")} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="98XXXXXXXX"
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {t("form_ward")} *
                  </label>
                  <select
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", backgroundColor: "#fffdfa", color: "#451a03" }}
                  >
                    {wardsList.map((w) => (
                      <option key={w.id} value={lang === "hi" ? w.hi : w.en}>
                        {lang === "hi" ? w.hi : w.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Problem Description */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                  {t("form_desc")} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={lang === "hi" 
                    ? "कृपया समस्या का स्थान और विवरण विस्तार से लिखें ताकि अधिकारी तुरंत मौके पर पहुंचकर समाधान कर सकें..." 
                    : "Please describe the problem and exact location so officers can inspect and resolve it promptly..."}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.95rem", resize: "vertical", outline: "none" }}
                />
              </div>

              {/* Photo Upload & Urgency */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "28px" }}>
                
                {/* Simulated photo upload */}
                <div>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "10px", border: "1px dashed #d97706", backgroundColor: "#fffbeb", color: "#92400e", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>
                    <Camera size={16} />
                    <span>{t("form_photo")}</span>
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setPhotoPreview(URL.createObjectURL(e.target.files[0]));
                        }
                      }}
                    />
                  </label>
                  {photoPreview && (
                    <span style={{ fontSize: "0.8rem", color: "#16a34a", marginLeft: "10px", fontWeight: 600 }}>
                      {lang === "hi" ? "✓ फोटो संलग्न हो गई" : "✓ Photo attached"}
                    </span>
                  )}
                </div>

                {/* Priority Selection */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#451a03" }}>
                    {t("form_priority")}:
                  </span>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "0.88rem", color: "#451a03" }}>
                    <input
                      type="radio"
                      name="priority"
                      checked={priority === "normal"}
                      onChange={() => setPriority("normal")}
                    />
                    <span>{t("form_priority_normal")}</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "0.88rem", color: "#d97706", fontWeight: 700 }}>
                    <input
                      type="radio"
                      name="priority"
                      checked={priority === "urgent"}
                      onChange={() => setPriority("urgent")}
                    />
                    <span>{t("form_priority_urgent")}</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", padding: "14px", fontSize: "1.02rem", borderRadius: "12px" }}
              >
                <Send size={18} />
                <span>{t("form_submit")}</span>
              </button>
            </form>
          </div>
        )}

        {/* ================= TAB 2: TRACK STATUS ================= */}
        {activeTab === "track" && (
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            
            {/* Search Box */}
            <form onSubmit={handleTrackSearch} style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
              <input
                type="text"
                required
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder={t("track_input_placeholder")}
                style={{ flex: 1, minWidth: "220px", padding: "13px 16px", borderRadius: "12px", border: "1.5px solid #fde68a", fontSize: "0.98rem", outline: "none", fontWeight: 600 }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "0 24px", borderRadius: "12px", height: "48px" }}
              >
                <Search size={18} />
                <span>{t("track_search_btn")}</span>
              </button>
            </form>

            {/* Quick Demo IDs */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "30px", fontSize: "0.85rem" }}>
              <span style={{ color: "#78350f", fontWeight: 600 }}>
                {lang === "hi" ? "डेमो आईडी से जांचें:" : "Try Sample Demo IDs:"}
              </span>
              {["GRY-2026-101", "GRY-2026-102", "GRY-2026-103"].map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => loadDemoTicket(id)}
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
                  {id}
                </button>
              ))}
            </div>

            {searchError && (
              <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", color: "#b91c1c", padding: "16px", borderRadius: "14px", textAlign: "center", marginBottom: "24px", fontWeight: 600 }}>
                {lang === "hi" 
                  ? "यह शिकायत संख्या नहीं मिली। कृपया सही आईडी दर्ज करें अथवा ऊपर दिए गए डेमो आईडी पर क्लिक करें।"
                  : "Complaint ID not found. Please enter a valid ID or click one of the demo buttons above."}
              </div>
            )}

            {/* Tracked Item Details */}
            {trackedItem && (
              <div 
                style={{ 
                  backgroundColor: "#ffffff", 
                  borderRadius: "24px", 
                  padding: "clamp(20px, 4vw, 36px)", 
                  border: "1.5px solid #fde68a",
                  boxShadow: "0 10px 30px rgba(217, 119, 6, 0.06)" 
                }}
              >
                {/* Header of Ticket */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "14px", borderBottom: "1px solid #fde68a", paddingBottom: "18px", marginBottom: "24px" }}>
                  <div>
                    <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase" }}>
                      {lang === "hi" ? "शिकायत संख्या (Complaint ID)" : "Complaint ID"}
                    </span>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#451a03", margin: "2px 0 0 0" }}>
                      {trackedItem.id}
                    </h3>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <span 
                      style={{ 
                        padding: "6px 14px", 
                        borderRadius: "20px", 
                        fontSize: "0.85rem", 
                        fontWeight: 700,
                        backgroundColor: trackedItem.status === "resolved" ? "#dcfce7" : "#fef3c7",
                        color: trackedItem.status === "resolved" ? "#166534" : "#92400e",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      {trackedItem.status === "resolved" ? <CheckCircle2 size={16} /> : <Clock size={16} />}
                      {trackedItem.status === "resolved" 
                        ? (lang === "hi" ? "समाधान पूर्ण (Resolved)" : "Problem Resolved")
                        : (lang === "hi" ? "कार्य प्रगति पर (In Progress)" : "Work In Progress")}
                    </span>
                  </div>
                </div>

                {/* 4-Step Resolution Timeline */}
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 70px), 1fr))", gap: "10px", position: "relative" }}>
                    {[
                      { step: 1, title: t("track_timeline_step1"), state: "completed" },
                      { step: 2, title: t("track_timeline_step2"), state: trackedItem.status !== "registered" ? "completed" : "current" },
                      { step: 3, title: t("track_timeline_step3"), state: trackedItem.status === "inspecting" || trackedItem.status === "resolved" ? "completed" : "pending" },
                      { step: 4, title: t("track_timeline_step4"), state: trackedItem.status === "resolved" ? "completed" : "pending" },
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
                      <strong style={{ color: "#451a03" }}>
                        {lang === "hi" ? trackedItem.name.hi : trackedItem.name.en}
                      </strong>
                    </div>
                    <div>
                      <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                        {lang === "hi" ? "वार्ड / टोला" : "Ward / Area"}
                      </span>
                      <strong style={{ color: "#451a03" }}>
                        {lang === "hi" ? trackedItem.ward.hi : trackedItem.ward.en}
                      </strong>
                    </div>
                    <div>
                      <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                        {lang === "hi" ? "श्रेणी" : "Category"}
                      </span>
                      <strong style={{ color: "#d97706" }}>
                        {lang === "hi" ? trackedItem.category.hi : trackedItem.category.en}
                      </strong>
                    </div>
                    <div>
                      <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                        {lang === "hi" ? "दर्ज दिनांक" : "Date Filed"}
                      </span>
                      <strong style={{ color: "#451a03" }}>
                        {lang === "hi" ? trackedItem.date.hi : trackedItem.date.en}
                      </strong>
                    </div>
                  </div>

                  <div style={{ marginTop: "16px", borderTop: "1px solid #fde68a", paddingTop: "12px" }}>
                    <span style={{ color: "#78350f", display: "block", fontSize: "0.78rem" }}>
                      {lang === "hi" ? "विवरण" : "Description"}
                    </span>
                    <p style={{ margin: "4px 0 0 0", color: "#57534e", fontSize: "0.92rem", lineHeight: 1.5 }}>
                      {lang === "hi" ? trackedItem.desc.hi : trackedItem.desc.en}
                    </p>
                  </div>

                  <div style={{ marginTop: "14px", backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "10px 14px", borderRadius: "10px", fontSize: "0.85rem", color: "#78350f" }}>
                    <strong>{lang === "hi" ? "प्रभारी अधिकारी: " : "Officer-in-charge: "}</strong>
                    {lang === "hi" ? trackedItem.assignedTo.hi : trackedItem.assignedTo.en}
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

      </div>

      {/* Instant Success Modal */}
      {newTicketId && (
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
              {t("form_success_title")}
            </h3>

            <p style={{ fontSize: "0.9rem", color: "#78350f", marginBottom: "18px" }}>
              {t("form_track_hint")}
            </p>

            <div style={{ backgroundColor: "#fffbeb", padding: "14px 20px", borderRadius: "14px", border: "1.5px solid #fde68a", marginBottom: "24px" }}>
              <span style={{ fontSize: "0.78rem", color: "#92400e", fontWeight: 700, display: "block" }}>
                {t("form_token_label")}
              </span>
              <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#d97706", letterSpacing: "1px" }}>
                {newTicketId}
              </span>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => {
                  setNewTicketId(null);
                  setActiveTab("track");
                  setSearchId(newTicketId);
                }}
                className="btn btn-primary"
                style={{ padding: "10px 22px", fontSize: "0.9rem" }}
              >
                {lang === "hi" ? "स्थिति जांचें" : "Track Status"}
              </button>
              <button
                onClick={() => setNewTicketId(null)}
                className="btn btn-secondary"
                style={{ padding: "10px 20px", fontSize: "0.9rem", border: "1px solid #fde68a" }}
              >
                {lang === "hi" ? "बंद करें" : "Close"}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
