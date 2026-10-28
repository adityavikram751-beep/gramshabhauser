"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  HeartHandshake, 
  QrCode, 
  Copy, 
  Check, 
  Award, 
  ShieldCheck, 
  Users, 
  Sparkles,
  TrendingUp,
  Download,
  IndianRupee,
  Building,
  Camera,
  BookOpen
} from "lucide-react";


export default function VikasNidhiPage() {
  const { t, lang } = useLanguage();

  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number>(1100);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorCity, setDonorCity] = useState("");
  const [donorProject, setDonorProject] = useState("dwar");

  const [receiptGenerated, setReceiptGenerated] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");

  const targetAmount = 500000;
  const currentRaised = 342500;
  const percentage = Math.round((currentRaised / targetAmount) * 100);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("garayenvikas@upi");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorPhone.trim()) return;

    const rand = Math.floor(1000 + Math.random() * 9000);
    setReceiptNumber(`GRY-DON-2026-${rand}`);
    setReceiptGenerated(true);
  };

  const activeAmount = customAmount ? parseInt(customAmount) || 0 : selectedAmount;

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "85vh", padding: "60px 0 90px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#b45309", fontWeight: 700 }}>ग्राम विकास जन-सहयोग निधि (Vikas Fund)</span>
        </div>

        {/* Header Banner */}
        <div style={{ maxWidth: "840px", margin: "0 auto 40px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", borderColor: "#fde68a", color: "#b45309" }}>
            <HeartHandshake size={16} />
            <span>100% पारदर्शी जन-सहयोग पहल</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0e3d28", lineHeight: 1.2, marginBottom: "12px" }}>
            गरायें ग्राम विकास जन-सहयोग निधि (2026-27)
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.6 }}>
            गाँव की माटी का ऋण चुकाने और गरायें (लंभुआ, सुल्तानपुर) को एक आदर्श व डिजिटल गाँव बनाने के लिए प्रवासी एवं स्थानीय ग्रामवासी अपना अमूल्य सहयोग दें।
          </p>
        </div>

        {/* Progress Tracker Card */}
        <div 
          style={{ 
            maxWidth: "880px", 
            margin: "0 auto 40px auto", 
            backgroundColor: "#ffffff", 
            borderRadius: "20px", 
            padding: "30px", 
            border: "1.5px solid #e7dfcc",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 600 }}>वर्तमान विकास निधि प्रगति</span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#0e3d28" }}>₹3,42,500</span>
                <span style={{ fontSize: "1rem", color: "#6b7280" }}>/ ₹5,00,000 लक्ष्य</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.78rem", color: "#6b7280", display: "block" }}>कुल दानदाता</span>
                <strong style={{ fontSize: "1.3rem", color: "#b45309" }}>148+ परिवार</strong>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.78rem", color: "#6b7280", display: "block" }}>लक्ष्य प्राप्ति</span>
                <strong style={{ fontSize: "1.3rem", color: "#15803d" }}>{percentage}%</strong>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ width: "100%", height: "14px", backgroundColor: "#e5e7eb", borderRadius: "10px", overflow: "hidden", marginBottom: "24px" }}>
            <div 
              style={{ 
                width: `${percentage}%`, 
                height: "100%", 
                background: "linear-gradient(90deg, #15803d, #eab308)", 
                borderRadius: "10px",
                transition: "width 1s ease" 
              }} 
            />
          </div>

          {/* 4 Key Projects Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px", borderTop: "1px solid #f3ece0", paddingTop: "20px" }}>
            {[
              { icon: Building, title: "भव्य स्वागत द्वार", desc: "गरायें मुख्य मार्ग प्रवेश तोरण" },
              { icon: Camera, title: "24x7 CCTV सुरक्षा", desc: "तिराहा व मुख्य चौराहे की निगरानी" },
              { icon: BookOpen, title: "कंप्यूटर लैब (1917 स्कूल)", desc: "प्राथमिक विद्यालय में स्मार्ट क्लास" },
              { icon: Sparkles, title: "अमृत सरोवर सौंदर्यीकरण", desc: "सोलर लाइट व जन विश्राम बेंच" },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "14px", borderRadius: "12px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ backgroundColor: "#0e3d28", color: "#fbbf24", padding: "8px", borderRadius: "8px", flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.88rem", color: "#0e3d28", display: "block" }}>{p.title}</strong>
                    <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>{p.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Donation & Certificate Section */}
        <div style={{ maxWidth: "880px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px" }}>
          
          {/* Left: UPI QR & Details */}
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "20px", 
              padding: "30px", 
              border: "1.5px solid #e7dfcc", 
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              textAlign: "center" 
            }}
          >
            <div className="vip-badge" style={{ margin: "0 auto 16px auto" }}>
              <QrCode size={15} />
              <span>आधिकारिक UPI QR कोड</span>
            </div>

            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px" }}>
              PhonePe / Google Pay / BHIM
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "20px" }}>
              सीधे ग्राम पंचायत गरायें विकास बैंक खाते में सहयोग करें
            </p>

            {/* Generated SVG QR Code representation */}
            <div style={{ display: "inline-block", padding: "16px", backgroundColor: "#ffffff", border: "3px solid #0e3d28", borderRadius: "16px", marginBottom: "16px", boxShadow: "0 6px 18px rgba(0,0,0,0.08)" }}>
              <svg width="190" height="190" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect width="200" height="200" fill="white"/>
                
                {/* Outer finder squares */}
                <rect x="15" y="15" width="50" height="50" rx="6" fill="#0e3d28"/>
                <rect x="23" y="23" width="34" height="34" rx="4" fill="white"/>
                <rect x="29" y="29" width="22" height="22" rx="3" fill="#0e3d28"/>

                <rect x="135" y="15" width="50" height="50" rx="6" fill="#0e3d28"/>
                <rect x="143" y="23" width="34" height="34" rx="4" fill="white"/>
                <rect x="149" y="29" width="22" height="22" rx="3" fill="#0e3d28"/>

                <rect x="15" y="135" width="50" height="50" rx="6" fill="#0e3d28"/>
                <rect x="23" y="143" width="34" height="34" rx="4" fill="white"/>
                <rect x="29" y="149" width="22" height="22" rx="3" fill="#0e3d28"/>

                {/* Simulated QR data blocks */}
                <rect x="75" y="20" width="10" height="25" fill="#1f2937"/>
                <rect x="95" y="15" width="25" height="10" fill="#1f2937"/>
                <rect x="75" y="55" width="35" height="10" fill="#1f2937"/>
                <rect x="15" y="75" width="20" height="15" fill="#1f2937"/>
                <rect x="45" y="80" width="40" height="10" fill="#1f2937"/>
                <rect x="95" y="75" width="15" height="40" fill="#1f2937"/>
                <rect x="120" y="75" width="25" height="15" fill="#1f2937"/>
                <rect x="155" y="75" width="30" height="10" fill="#1f2937"/>
                
                <rect x="15" y="100" width="25" height="15" fill="#1f2937"/>
                <rect x="50" y="100" width="35" height="20" fill="#1f2937"/>
                <rect x="120" y="100" width="20" height="25" fill="#1f2937"/>
                <rect x="150" y="95" width="35" height="20" fill="#1f2937"/>

                <rect x="75" y="125" width="45" height="15" fill="#1f2937"/>
                <rect x="130" y="135" width="20" height="40" fill="#1f2937"/>
                <rect x="160" y="125" width="25" height="15" fill="#1f2937"/>
                <rect x="75" y="150" width="25" height="35" fill="#1f2937"/>
                <rect x="110" y="160" width="15" height="25" fill="#1f2937"/>
                <rect x="160" y="150" width="25" height="35" fill="#1f2937"/>

                {/* Center Badge */}
                <circle cx="100" cy="100" r="18" fill="#d97706" />
                <text x="100" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">₹ GRY</text>
              </svg>
            </div>

            {/* UPI ID Copy button */}
            <div style={{ backgroundColor: "#fef3c7", border: "1.5px solid #fde68a", borderRadius: "12px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "#92400e", display: "block", textAlign: "left" }}>आधिकारिक UPI आईडी:</span>
                <strong style={{ fontSize: "0.95rem", color: "#b45309" }}>garayenvikas@upi</strong>
              </div>
              <button
                type="button"
                onClick={handleCopyUpi}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#b45309",
                  color: "#ffffff",
                  border: "none",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  cursor: "pointer"
                }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "कॉपी हुआ!" : "कॉपी करें"}</span>
              </button>
            </div>

            <div style={{ fontSize: "0.8rem", color: "#6b7280", textAlign: "left" }}>
              <strong>बैंक खाता विवरण:</strong>
              <div>खाता धारक: ग्राम पंचायत गरायें विकास समिति</div>
              <div>बैंक: बैंक ऑफ बड़ौदा (शाखा: लंभुआ, सुल्तानपुर)</div>
              <div>खाता संख्या: 489201000XXXXX | IFSC: BARB0LAMBHU</div>
            </div>
          </div>

          {/* Right: Record Donation & Get Certificate */}
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "20px", 
              padding: "30px", 
              border: "1.5px solid #e7dfcc", 
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
            }}
          >
            {receiptGenerated ? (
              /* VIP Certificate Output */
              <div style={{ textAlign: "center", padding: "10px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#dcfce7", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px auto" }}>
                  <Award size={38} />
                </div>

                <span style={{ fontSize: "0.82rem", color: "#15803d", fontWeight: 700, textTransform: "uppercase" }}>
                  दान रसीद एवं सम्मान पत्र
                </span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0e3d28", margin: "4px 0 10px 0" }}>
                  सहयोग हेतु हार्दिक धन्यवाद!
                </h3>

                {/* Certificate Display Card */}
                <div style={{ backgroundColor: "#fdfbf7", border: "2px dashed #d97706", borderRadius: "16px", padding: "20px", textAlign: "left", marginBottom: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1ece1", paddingBottom: "10px", marginBottom: "12px", fontSize: "0.82rem" }}>
                    <span>रसीद सं.: <strong>{receiptNumber}</strong></span>
                    <span>दिनांक: <strong>28 अक्टूबर 2026</strong></span>
                  </div>

                  <p style={{ fontSize: "0.95rem", color: "#1f2937", lineHeight: 1.6, margin: "0 0 14px 0" }}>
                    प्रमाणित किया जाता है कि <strong>{donorName}</strong> ({donorCity || "गरायें लंभुआ"}) ने ग्राम पंचायत गरायें के समग्र विकास हेतु <strong>₹{activeAmount.toLocaleString()}</strong> की सम्मानजनक राशि का जनसहयोग प्रदान किया है।
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8rem", color: "#6b7280" }}>
                    <span>परियोजना: {donorProject === "dwar" ? "स्वागत द्वार" : donorProject === "camera" ? "CCTV सुरक्षा" : "स्मार्ट कंप्यूटर लैब"}</span>
                    <span style={{ fontWeight: 700, color: "#0e3d28" }}>ग्राम प्रधान / सचिव, गरायें</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-gold"
                  style={{ width: "100%", padding: "12px", fontSize: "0.95rem", marginBottom: "12px" }}
                >
                  <Download size={16} />
                  <span>सम्मान पत्र डाउनलोड / प्रिंट करें</span>
                </button>

                <button
                  type="button"
                  onClick={() => setReceiptGenerated(false)}
                  style={{ background: "none", border: "none", color: "#6b7280", fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline" }}
                >
                  अन्य सहयोग दर्ज करें
                </button>
              </div>
            ) : (
              /* Donation Form */
              <form onSubmit={handleDonateSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
                  <Award size={20} color="#b45309" />
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", margin: 0 }}>
                    सहयोग दर्ज करें व सम्मान पत्र पाएं
                  </h3>
                </div>

                {/* Amount Selector */}
                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "8px" }}>
                    सहयोग राशि चुनें (Select Amount) *
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "10px" }}>
                    {[501, 1100, 2100, 5100].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount("");
                        }}
                        style={{
                          padding: "10px 4px",
                          borderRadius: "10px",
                          border: (!customAmount && selectedAmount === amt) ? "2px solid #0e3d28" : "1px solid #d1d5db",
                          backgroundColor: (!customAmount && selectedAmount === amt) ? "#0e3d28" : "#f9fafb",
                          color: (!customAmount && selectedAmount === amt) ? "#fbbf24" : "#1f2937",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          cursor: "pointer"
                        }}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="अथवा अन्य राशि दर्ज करें (जैसे ₹11,000)"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>

                {/* Donor Name */}
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    आपका शुभ नाम (Full Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="उदा. श्री सुनील कुमार वर्मा"
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>

                {/* Donor Phone & City */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                      मोबाइल नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      placeholder="98XXXXXXXX"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                      शहर / गाँव
                    </label>
                    <input
                      type="text"
                      value={donorCity}
                      onChange={(e) => setDonorCity(e.target.value)}
                      placeholder="लंभुआ / सुल्तानपुर / दिल्ली"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                    />
                  </div>
                </div>

                {/* Project Selection */}
                <div style={{ marginBottom: "22px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    सहयोग किस कार्य हेतु देना चाहते हैं?
                  </label>
                  <select
                    value={donorProject}
                    onChange={(e) => setDonorProject(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", backgroundColor: "#f9fafb", outline: "none" }}
                  >
                    <option value="dwar">गरायें भव्य प्रवेश स्वागत द्वार निर्माण</option>
                    <option value="camera">24x7 मुख्य तिराहा व विद्यालय CCTV सुरक्षा</option>
                    <option value="school">प्राथमिक विद्यालय (1917) कंप्यूटर लैब</option>
                    <option value="general">समग्र ग्राम पंचायत सामान्य विकास</option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ width: "100%", padding: "13px", fontSize: "1rem", borderRadius: "10px" }}
                >
                  <IndianRupee size={16} />
                  <span>सहयोग दर्ज करें व सम्मान पत्र प्राप्त करें (₹{activeAmount.toLocaleString()})</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Wall of Fame / Recent Donors List */}
        <div style={{ maxWidth: "880px", margin: "50px auto 0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0e3d28", margin: 0 }}>
              दानवीर सम्मान पट्टिका (Wall of Fame)
            </h3>
            <span style={{ fontSize: "0.88rem", color: "#6b7280" }}>
              गरायें ग्राम विकास में उल्लेखनीय योगदान देने वाले आदरणीय दानदाता
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {[
              { name: "श्री राजेश प्रताप सिंह", place: "गरायें (वर्तमान: लखनऊ)", amount: "₹21,000", for: "स्वागत द्वार निर्माण" },
              { name: "इंजी. अमित कुमार वर्मा", place: "गरायें (वर्तमान: नोएडा)", amount: "₹15,000", for: "स्मार्ट कंप्यूटर लैब" },
              { name: "श्रीमती गीता देवी", place: "वार्ड नं. 3, शिव मंदिर टोला", amount: "₹11,000", for: "CCTV सुरक्षा प्रणाली" },
              { name: "श्री कमलेश कुमार यादव", place: "वार्ड नं. 1, मुख्य प्रवेश द्वार", amount: "₹5,100", for: "अमृत सरोवर सौंदर्यीकरण" },
              { name: "डॉ. वी. के. तिवारी", place: "लंभुआ, सुल्तानपुर", amount: "₹11,000", for: "विद्यालय विकास" },
              { name: "श्री धर्मेंद्र कुमार निषाद", place: "गरायें, लंभुआ", amount: "₹5,100", for: "स्वागत द्वार" },
            ].map((d, idx) => (
              <div 
                key={idx}
                style={{ 
                  backgroundColor: "#ffffff", 
                  border: "1.5px solid #f1ece1", 
                  borderRadius: "14px", 
                  padding: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "#0e3d28", display: "block" }}>{d.name}</strong>
                  <span style={{ fontSize: "0.78rem", color: "#6b7280", display: "block" }}>{d.place}</span>
                  <span style={{ fontSize: "0.74rem", color: "#b45309", fontWeight: 600 }}>{d.for}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#15803d" }}>{d.amount}</span>
                  <span style={{ fontSize: "0.7rem", color: "#9ca3af", display: "block" }}>सम्मानित</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
