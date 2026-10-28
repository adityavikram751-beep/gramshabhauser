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
  name: string;
  phone: string;
  ward: string;
  category: string;
  desc: string;
  status: "registered" | "assigned" | "inspecting" | "resolved";
  assignedTo: string;
  date: string;
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
      name: "श्री दिनेश कुमार वर्मा",
      phone: "98380XXXXX",
      ward: "वार्ड नं. 4 (बड़का टोला)",
      category: "पेयजल / हैंडपंप खराबी",
      desc: "प्राथमिक विद्यालय के पास वाला सरकारी हैंडपंप 4 दिनों से खराब है, पीने के पानी की समस्या हो रही है।",
      status: "resolved",
      assignedTo: "श्री मनोज तिवारी (ग्राम विकास अधिकारी)",
      date: "24 अक्टूबर 2026",
      priority: "urgent"
    },
    {
      id: "GRY-2026-102",
      name: "श्रीमती सुनैना देवी",
      phone: "97920XXXXX",
      ward: "वार्ड नं. 8 (पूरब टोला)",
      category: "बिजली / सोलर लाइट",
      desc: "चौराहे की सोलर स्ट्रीट लाइट की बैटरी काम नहीं कर रही है, रात में अंधेरा रहता है।",
      status: "inspecting",
      assignedTo: "अवर अभियंता (विद्युत प्रभाग)",
      date: "26 अक्टूबर 2026",
      priority: "normal"
    },
    {
      id: "GRY-2026-103",
      name: "श्री कमलेश यादव",
      phone: "94150XXXXX",
      ward: "वार्ड नं. 1 (प्रवेश द्वार)",
      category: "सड़क / नाली जाम",
      desc: "मुख्य खड़ंजे के पास की नाली मलबे से बंद है, पानी सड़क पर बह रहा है।",
      status: "assigned",
      assignedTo: "श्री नीरव सिंह (ग्राम प्रधान)",
      date: "27 अक्टूबर 2026",
      priority: "urgent"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !mobile.trim() || !description.trim()) return;

    const randomNum = Math.floor(100 + Math.random() * 900);
    const createdId = `GRY-2026-${randomNum}`;

    const newGrievance: GrievanceItem = {
      id: createdId,
      name: fullName,
      phone: mobile,
      ward: ward,
      category: getCategoryLabel(category),
      desc: description,
      status: "registered",
      assignedTo: "ग्राम प्रधान / पंचायत सचिवालय गारयेन",
      date: new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : "en-US", { day: "numeric", month: "long", year: "numeric" }),
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

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "bijli": return t("form_cat_bijli");
      case "paani": return t("form_cat_paani");
      case "sadak": return t("form_cat_sadak");
      case "safai": return t("form_cat_safai");
      case "awas": return t("form_cat_awas");
      case "kisan": return t("form_cat_kisan");
      default: return t("form_cat_other");
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
    <section id="samasya" style={{ padding: "90px 0", backgroundColor: "#f6f3ea" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="vip-badge" style={{ backgroundColor: "#fee2e2", borderColor: "#fca5a5", color: "#b91c1c" }}>
            <ShieldAlert size={16} />
            <span>{t("samasya_badge")}</span>
          </div>
          <h2 className="section-title">{t("samasya_title")}</h2>
          <p className="section-subtitle">{t("samasya_subtitle")}</p>
        </div>

        {/* Tab switch: New Complaint vs Track Status */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
          <button
            onClick={() => setActiveTab("new")}
            style={{
              padding: "13px 26px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.98rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
              border: activeTab === "new" ? "2px solid #b91c1c" : "1.5px solid #d1cebe",
              backgroundColor: activeTab === "new" ? "#b91c1c" : "#ffffff",
              color: activeTab === "new" ? "#ffffff" : "#374151",
              boxShadow: activeTab === "new" ? "0 8px 25px rgba(185, 28, 28, 0.25)" : "none"
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
              padding: "13px 26px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.98rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
              border: activeTab === "track" ? "2px solid #0e3d28" : "1.5px solid #d1cebe",
              backgroundColor: activeTab === "track" ? "#0e3d28" : "#ffffff",
              color: activeTab === "track" ? "#fbbf24" : "#374151",
              boxShadow: activeTab === "track" ? "0 8px 25px rgba(14, 61, 40, 0.25)" : "none"
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
              padding: "40px", 
              border: "1.5px solid #e7dfcc",
              boxShadow: "0 15px 40px rgba(0,0,0,0.06)" 
            }}
          >
            <form onSubmit={handleSubmit}>
              
              {/* Category Dropdown */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#1f2937", marginBottom: "8px" }}>
                  {t("form_cat")} *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "12px", border: "1.5px solid #d1d5db", fontSize: "0.95rem", backgroundColor: "#f9fafb", outline: "none", fontWeight: 600 }}
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
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    {t("form_name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="उदा. राहुल कुमार"
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    {t("form_phone")} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="98XXXXXXXX"
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none" }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    {t("form_ward")} *
                  </label>
                  <select
                    value={ward}
                    onChange={(e) => setWard(e.target.value)}
                    style={{ width: "100%", padding: "11px 13px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.92rem", outline: "none" }}
                  >
                    <option value="वार्ड 1 - मुख्य प्रवेश द्वार टोला">वार्ड 1 - प्रवेश द्वार टोला</option>
                    <option value="वार्ड 2 - पुराना बाज़ार टोला">वार्ड 2 - पुराना बाज़ार टोला</option>
                    <option value="वार्ड 3 - प्राचीन शिव मंदिर परिक्षेत्र">वार्ड 3 - शिव मंदिर टोला</option>
                    <option value="वार्ड 4 - बड़का टोला">वार्ड 4 - बड़का टोला</option>
                    <option value="वार्ड 5 - अमृत सरोवर टोला">वार्ड 5 - सरोवर टोला</option>
                    <option value="वार्ड 6 - प्राथमिक विद्यालय मार्ग">वार्ड 6 - विद्यालय मार्ग</option>
                    <option value="वार्ड 7 - गढ़ी टोला">वार्ड 7 - गढ़ी टोला</option>
                    <option value="वार्ड 8 - पूरब टोला">वार्ड 8 - पूरब टोला</option>
                    <option value="वार्ड 9 - नहर पुलिया टोला">वार्ड 9 - नहर पुलिया टोला</option>
                    <option value="वार्ड 10 - पश्चिम टोला">वार्ड 10 - पश्चिम टोला</option>
                    <option value="वार्ड 11 - नई बस्ती">वार्ड 11 - नई बस्ती</option>
                    <option value="वार्ड 12 - दक्षिणी सीमा टोला">वार्ड 12 - दक्षिणी सीमा</option>
                  </select>
                </div>
              </div>

              {/* Problem Description */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                  {t("form_desc")} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="कृपया समस्या का स्थान और विवरण विस्तार से लिखें ताकि अधिकारी तुरंत मौके पर पहुंचकर समाधान कर सकें..."
                  style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.95rem", resize: "vertical", outline: "none" }}
                />
              </div>

              {/* Photo Upload & Urgency */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "28px" }}>
                
                {/* Simulated photo upload */}
                <div>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "10px", border: "1px dashed #d97706", backgroundColor: "#fffbeb", color: "#b45309", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>
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
                    <span style={{ fontSize: "0.8rem", color: "#15803d", marginLeft: "10px", fontWeight: 600 }}>
                      ✓ फोटो संलग्न हो गई
                    </span>
                  )}
                </div>

                {/* Priority Selection */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#4b5563" }}>
                    {t("form_priority")}:
                  </span>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "0.88rem" }}>
                    <input
                      type="radio"
                      name="priority"
                      checked={priority === "normal"}
                      onChange={() => setPriority("normal")}
                    />
                    <span>{t("form_priority_normal")}</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", fontSize: "0.88rem", color: "#dc2626", fontWeight: 700 }}>
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
                style={{ width: "100%", padding: "14px", fontSize: "1.05rem", borderRadius: "12px", backgroundColor: "#b91c1c" }}
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
            <form onSubmit={handleTrackSearch} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
              <input
                type="text"
                required
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder={t("track_input_placeholder")}
                style={{ flex: 1, padding: "14px 18px", borderRadius: "12px", border: "1.5px solid #d1d5db", fontSize: "1rem", outline: "none", fontWeight: 600 }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                style={{ padding: "0 24px", borderRadius: "12px" }}
              >
                <Search size={18} />
                <span>{t("track_search_btn")}</span>
              </button>
            </form>

            {/* Quick Demo IDs */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "30px", fontSize: "0.85rem" }}>
              <span style={{ color: "#6b7280", fontWeight: 600 }}>डेमो आईडी से जांचें:</span>
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
              <div style={{ backgroundColor: "#fee2e2", border: "1px solid #fca5a5", color: "#b91c1c", padding: "16px", borderRadius: "14px", textAlign: "center", marginBottom: "24px", fontWeight: 600 }}>
                यह शिकायत संख्या नहीं मिली। कृपया सही आईडी दर्ज करें अथवा ऊपर दिए गए डेमो आईडी पर क्लिक करें।
              </div>
            )}

            {/* Tracked Item Details */}
            {trackedItem && (
              <div 
                style={{ 
                  backgroundColor: "#ffffff", 
                  borderRadius: "24px", 
                  padding: "36px", 
                  border: "2px solid #e2c079",
                  boxShadow: "0 15px 40px rgba(0,0,0,0.06)" 
                }}
              >
                {/* Header of Ticket */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "14px", borderBottom: "1px solid #f3ece0", paddingBottom: "18px", marginBottom: "24px" }}>
                  <div>
                    <span style={{ color: "#d97706", fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase" }}>
                      शिकायत संख्या (Complaint ID)
                    </span>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0e3d28", margin: "2px 0 0 0" }}>
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
                      {trackedItem.status === "resolved" ? "समाधान पूर्ण (Resolved)" : "कार्य प्रगति पर (In Progress)"}
                    </span>
                  </div>
                </div>

                {/* 4-Step Resolution Timeline */}
                <div style={{ marginBottom: "32px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", position: "relative" }}>
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
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: st.state === "completed" ? "#166534" : "#4b5563", display: "block" }}>
                          {st.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Grid */}
                <div style={{ backgroundColor: "#fdfbf7", padding: "20px", borderRadius: "16px", border: "1px solid #f1ece1", marginBottom: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", fontSize: "0.9rem" }}>
                    <div>
                      <span style={{ color: "#6b7280", display: "block", fontSize: "0.78rem" }}>शिकायतकर्ता</span>
                      <strong style={{ color: "#1f2937" }}>{trackedItem.name}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#6b7280", display: "block", fontSize: "0.78rem" }}>वार्ड / टोला</span>
                      <strong style={{ color: "#1f2937" }}>{trackedItem.ward}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#6b7280", display: "block", fontSize: "0.78rem" }}>श्रेणी</span>
                      <strong style={{ color: "#d97706" }}>{trackedItem.category}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#6b7280", display: "block", fontSize: "0.78rem" }}>दर्ज दिनांक</span>
                      <strong style={{ color: "#1f2937" }}>{trackedItem.date}</strong>
                    </div>
                  </div>

                  <div style={{ marginTop: "16px", borderTop: "1px solid #f3ece0", paddingTop: "12px" }}>
                    <span style={{ color: "#6b7280", display: "block", fontSize: "0.78rem" }}>विवरण</span>
                    <p style={{ margin: "4px 0 0 0", color: "#374151", fontSize: "0.92rem", lineHeight: 1.5 }}>
                      {trackedItem.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: "14px", backgroundColor: "#ecfdf5", padding: "10px 14px", borderRadius: "10px", fontSize: "0.85rem", color: "#065f46" }}>
                    <strong>प्रभारी अधिकारी:</strong> {trackedItem.assignedTo}
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
            padding: "20px" 
          }}
        >
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              maxWidth: "500px", 
              width: "100%", 
              borderRadius: "24px", 
              padding: "34px", 
              textAlign: "center",
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)" 
            }}
          >
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#dcfce7", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
              <CheckCircle2 size={36} />
            </div>

            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px" }}>
              {t("form_success_title")}
            </h3>

            <p style={{ fontSize: "0.9rem", color: "#4b5563", marginBottom: "18px" }}>
              {t("form_track_hint")}
            </p>

            <div style={{ backgroundColor: "#fef3c7", padding: "14px 20px", borderRadius: "14px", border: "1.5px solid #fde68a", marginBottom: "24px" }}>
              <span style={{ fontSize: "0.78rem", color: "#92400e", fontWeight: 700, display: "block" }}>
                {t("form_token_label")}
              </span>
              <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#b45309", letterSpacing: "1px" }}>
                {newTicketId}
              </span>
            </div>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={() => {
                  setNewTicketId(null);
                  setActiveTab("track");
                  setSearchId(newTicketId);
                }}
                className="btn btn-gold"
                style={{ padding: "10px 22px", fontSize: "0.9rem" }}
              >
                स्थिति जांचें
              </button>
              <button
                onClick={() => setNewTicketId(null)}
                className="btn btn-secondary"
                style={{ padding: "10px 20px", fontSize: "0.9rem" }}
              >
                बंद करें
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
