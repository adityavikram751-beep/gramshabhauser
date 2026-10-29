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
  Sparkles,
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

  const keyProjects = [
    { 
      icon: Building, 
      title: { hi: "भव्य स्वागत द्वार", en: "Grand Entrance Gateway" }, 
      desc: { hi: "गरायें मुख्य मार्ग प्रवेश तोरण", en: "Garayen main roadway ceremonial arch" } 
    },
    { 
      icon: Camera, 
      title: { hi: "24x7 CCTV सुरक्षा", en: "24x7 CCTV Security" }, 
      desc: { hi: "तिराहा व मुख्य चौराहे की निगरानी", en: "Intersection & market 24x7 surveillance" } 
    },
    { 
      icon: BookOpen, 
      title: { hi: "कंप्यूटर लैब (1917 स्कूल)", en: "Computer Lab (Est. 1917 School)" }, 
      desc: { hi: "प्राथमिक विद्यालय में स्मार्ट क्लास", en: "Smart digital classroom in primary school" } 
    },
    { 
      icon: Sparkles, 
      title: { hi: "अमृत सरोवर सौंदर्यीकरण", en: "Amrit Sarovar Beautification" }, 
      desc: { hi: "सोलर लाइट व जन विश्राम बेंच", en: "Solar illumination & community benches" } 
    },
  ];

  const recentDonors = [
    { 
      name: { hi: "श्री राजेश प्रताप सिंह", en: "Mr. Rajesh Pratap Singh" }, 
      place: { hi: "गरायें (वर्तमान: लखनऊ)", en: "Garayen (Now: Lucknow)" }, 
      amount: "₹21,000", 
      for: { hi: "स्वागत द्वार निर्माण", en: "Entrance Gateway" } 
    },
    { 
      name: { hi: "इंजी. अमित कुमार वर्मा", en: "Er. Amit Kumar Verma" }, 
      place: { hi: "गरायें (वर्तमान: नोएडा)", en: "Garayen (Now: Noida)" }, 
      amount: "₹15,000", 
      for: { hi: "स्मार्ट कंप्यूटर लैब", en: "Smart Computer Lab" } 
    },
    { 
      name: { hi: "श्रीमती गीता देवी", en: "Mrs. Geeta Devi" }, 
      place: { hi: "वार्ड नं. 3, शिव मंदिर टोला", en: "Ward No. 3, Shiv Mandir Tola" }, 
      amount: "₹11,000", 
      for: { hi: "CCTV सुरक्षा प्रणाली", en: "CCTV Security System" } 
    },
    { 
      name: { hi: "श्री कमलेश कुमार यादव", en: "Mr. Kamlesh Kumar Yadav" }, 
      place: { hi: "वार्ड नं. 1, मुख्य प्रवेश द्वार", en: "Ward No. 1, Main Gateway" }, 
      amount: "₹5,100", 
      for: { hi: "अमृत सरोवर सौंदर्यीकरण", en: "Amrit Sarovar Beautification" } 
    },
    { 
      name: { hi: "डॉ. वी. के. तिवारी", en: "Dr. V. K. Tiwari" }, 
      place: { hi: "लंभुआ, सुल्तानपुर", en: "Lambhua, Sultanpur" }, 
      amount: "₹11,000", 
      for: { hi: "विद्यालय विकास", en: "School Development" } 
    },
    { 
      name: { hi: "श्री धर्मेंद्र कुमार निषाद", en: "Mr. Dharmendra Kumar Nishad" }, 
      place: { hi: "गरायें, लंभुआ", en: "Garayen, Lambhua" }, 
      amount: "₹5,100", 
      for: { hi: "स्वागत द्वार", en: "Entrance Gateway" } 
    },
  ];

  return (
    <div style={{ backgroundColor: "#fffdf8", minHeight: "85vh", padding: "40px 0 80px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#d97706", fontWeight: 700, textDecoration: "none" }}>
            {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
          </Link>
          <span>/</span>
          <span style={{ color: "#78350f", fontWeight: 700 }}>
            {lang === "hi" ? "ग्राम विकास जन-सहयोग निधि (Vikas Fund)" : "Village Development Fund"}
          </span>
        </div>

        {/* Header Banner */}
        <div style={{ maxWidth: "840px", margin: "0 auto 32px auto", textAlign: "center" }}>
          <div className="vip-badge">
            <HeartHandshake size={16} />
            <span>{lang === "hi" ? "100% पारदर्शी जन-सहयोग पहल" : "100% Transparent Community Contribution"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#78350f", lineHeight: 1.25, marginBottom: "12px" }}>
            {lang === "hi" ? "गरायें ग्राम विकास जन-सहयोग निधि (2026-27)" : "Garayen Village Development Fund (2026-27)"}
          </h1>
          <p style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)", color: "#5a4225", lineHeight: 1.6 }}>
            {lang === "hi" 
              ? "गाँव की माटी का ऋण चुकाने और गरायें (लंभुआ, सुल्तानपुर) को एक आदर्श व डिजिटल गाँव बनाने के लिए प्रवासी एवं स्थानीय ग्रामवासी अपना अमूल्य सहयोग दें।"
              : "Contribute your valuable support to develop Garayen (Lambhua, Sultanpur) into a model smart village and give back to your native soil."}
          </p>
        </div>

        {/* Progress Tracker Card - Responsive */}
        <div 
          style={{ 
            maxWidth: "880px", 
            margin: "0 auto 36px auto", 
            backgroundColor: "#ffffff", 
            borderRadius: "20px", 
            padding: "clamp(18px, 4vw, 30px)", 
            border: "1.5px solid #fde68a",
            boxShadow: "0 10px 30px rgba(217,119,6,0.06)" 
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "14px", marginBottom: "16px" }}>
            <div>
              <span style={{ fontSize: "0.84rem", color: "#6b7280", fontWeight: 600 }}>
                {lang === "hi" ? "वर्तमान विकास निधि प्रगति" : "Current Development Fund Progress"}
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)", fontWeight: 900, color: "#d97706" }}>₹3,42,500</span>
                <span style={{ fontSize: "0.95rem", color: "#6b7280" }}>
                  {lang === "hi" ? "/ ₹5,00,000 लक्ष्य" : "/ ₹5,00,000 Target"}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.76rem", color: "#6b7280", display: "block" }}>
                  {lang === "hi" ? "कुल दानदाता" : "Total Donors"}
                </span>
                <strong style={{ fontSize: "1.2rem", color: "#78350f" }}>
                  {lang === "hi" ? "148+ परिवार" : "148+ Families"}
                </strong>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.76rem", color: "#6b7280", display: "block" }}>
                  {lang === "hi" ? "लक्ष्य प्राप्ति" : "Target Achieved"}
                </span>
                <strong style={{ fontSize: "1.2rem", color: "#d97706" }}>{percentage}%</strong>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ width: "100%", height: "14px", backgroundColor: "#fef3c7", borderRadius: "10px", overflow: "hidden", marginBottom: "22px" }}>
            <div 
              style={{ 
                width: `${percentage}%`, 
                height: "100%", 
                background: "linear-gradient(90deg, #d97706, #fbbf24)", 
                borderRadius: "10px",
                transition: "width 1s ease" 
              }} 
            />
          </div>

          {/* 4 Key Projects Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: "12px", borderTop: "1px solid #fef3c7", paddingTop: "18px" }}>
            {keyProjects.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} style={{ backgroundColor: "#fffdf8", border: "1px solid #fde68a", padding: "12px", borderRadius: "12px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <div style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "8px", borderRadius: "8px", flexShrink: 0 }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.86rem", color: "#78350f", display: "block" }}>
                      {lang === "hi" ? p.title.hi : p.title.en}
                    </strong>
                    <span style={{ fontSize: "0.74rem", color: "#6b7280" }}>
                      {lang === "hi" ? p.desc.hi : p.desc.en}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Donation & Certificate Section - Responsive Grid */}
        <div style={{ maxWidth: "880px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "26px" }}>
          
          {/* Left: UPI QR & Details */}
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "20px", 
              padding: "clamp(20px, 4vw, 30px)", 
              border: "1.5px solid #fde68a", 
              boxShadow: "0 10px 30px rgba(217,119,6,0.06)",
              textAlign: "center" 
            }}
          >
            <div className="vip-badge" style={{ margin: "0 auto 14px auto" }}>
              <QrCode size={15} />
              <span>{lang === "hi" ? "आधिकारिक UPI QR कोड" : "Official UPI QR Code"}</span>
            </div>

            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#78350f", marginBottom: "6px" }}>
              PhonePe / Google Pay / BHIM
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "18px" }}>
              {lang === "hi" ? "सीधे ग्राम पंचायत गरायें विकास बैंक खाते में सहयोग करें" : "Contribute directly to Gram Panchayat Garayen Development Account"}
            </p>

            {/* Generated SVG QR Code representation */}
            <div style={{ display: "inline-block", padding: "14px", backgroundColor: "#ffffff", border: "3px solid #d97706", borderRadius: "16px", marginBottom: "16px", boxShadow: "0 6px 18px rgba(217,119,6,0.15)" }}>
              <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="white"/>
                
                {/* Outer finder squares */}
                <rect x="15" y="15" width="50" height="50" rx="6" fill="#d97706"/>
                <rect x="23" y="23" width="34" height="34" rx="4" fill="white"/>
                <rect x="29" y="29" width="22" height="22" rx="3" fill="#d97706"/>

                <rect x="135" y="15" width="50" height="50" rx="6" fill="#d97706"/>
                <rect x="143" y="23" width="34" height="34" rx="4" fill="white"/>
                <rect x="149" y="29" width="22" height="22" rx="3" fill="#d97706"/>

                <rect x="15" y="135" width="50" height="50" rx="6" fill="#d97706"/>
                <rect x="23" y="143" width="34" height="34" rx="4" fill="white"/>
                <rect x="29" y="149" width="22" height="22" rx="3" fill="#d97706"/>

                {/* Simulated QR blocks */}
                <rect x="75" y="20" width="10" height="25" fill="#451a03"/>
                <rect x="95" y="15" width="25" height="10" fill="#451a03"/>
                <rect x="75" y="55" width="35" height="10" fill="#451a03"/>
                <rect x="15" y="75" width="20" height="15" fill="#451a03"/>
                <rect x="45" y="80" width="40" height="10" fill="#451a03"/>
                <rect x="95" y="75" width="15" height="40" fill="#451a03"/>
                <rect x="120" y="75" width="25" height="15" fill="#451a03"/>
                <rect x="155" y="75" width="30" height="10" fill="#451a03"/>
                
                <rect x="15" y="100" width="25" height="15" fill="#451a03"/>
                <rect x="50" y="100" width="35" height="20" fill="#451a03"/>
                <rect x="120" y="100" width="20" height="25" fill="#451a03"/>
                <rect x="150" y="95" width="35" height="20" fill="#451a03"/>

                <rect x="75" y="125" width="45" height="15" fill="#451a03"/>
                <rect x="130" y="135" width="20" height="40" fill="#451a03"/>
                <rect x="160" y="125" width="25" height="15" fill="#451a03"/>
                <rect x="75" y="150" width="25" height="35" fill="#451a03"/>
                <rect x="110" y="160" width="15" height="25" fill="#451a03"/>
                <rect x="160" y="150" width="25" height="35" fill="#451a03"/>

                {/* Center Badge */}
                <circle cx="100" cy="100" r="18" fill="#d97706" />
                <text x="100" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">₹ GRY</text>
              </svg>
            </div>

            {/* UPI ID Copy button */}
            <div style={{ backgroundColor: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "12px", padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div>
                <span style={{ fontSize: "0.72rem", color: "#92400e", display: "block", textAlign: "left" }}>
                  {lang === "hi" ? "आधिकारिक UPI आईडी:" : "Official UPI ID:"}
                </span>
                <strong style={{ fontSize: "0.92rem", color: "#d97706" }}>garayenvikas@upi</strong>
              </div>
              <button
                type="button"
                onClick={handleCopyUpi}
                className="btn btn-primary"
                style={{ padding: "6px 12px", fontSize: "0.78rem", borderRadius: "8px" }}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? (lang === "hi" ? "कॉपी हुआ!" : "Copied!") : (lang === "hi" ? "कॉपी करें" : "Copy")}</span>
              </button>
            </div>

            <div style={{ fontSize: "0.78rem", color: "#6b7280", textAlign: "left", lineHeight: 1.5 }}>
              <strong>{lang === "hi" ? "बैंक खाता विवरण:" : "Bank Account Details:"}</strong>
              <div>{lang === "hi" ? "खाता धारक: ग्राम पंचायत गरायें विकास समिति" : "Holder: Gram Panchayat Garayen Vikas Samiti"}</div>
              <div>{lang === "hi" ? "बैंक: बैंक ऑफ बड़ौदा (शाखा: लंभुआ, सुल्तानपुर)" : "Bank: Bank of Baroda (Lambhua Branch, Sultanpur)"}</div>
              <div>{lang === "hi" ? "खाता संख्या: 489201000XXXXX | IFSC: BARB0LAMBHU" : "A/C: 489201000XXXXX | IFSC: BARB0LAMBHU"}</div>
            </div>
          </div>

          {/* Right: Record Donation & Get Certificate */}
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              borderRadius: "20px", 
              padding: "clamp(20px, 4vw, 30px)", 
              border: "1.5px solid #fde68a", 
              boxShadow: "0 10px 30px rgba(217,119,6,0.06)" 
            }}
          >
            {receiptGenerated ? (
              /* VIP Certificate Output */
              <div style={{ textAlign: "center", padding: "8px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#fef3c7", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px auto" }}>
                  <Award size={36} />
                </div>

                <span style={{ fontSize: "0.8rem", color: "#d97706", fontWeight: 800, textTransform: "uppercase" }}>
                  {lang === "hi" ? "दान रसीद एवं सम्मान पत्र" : "Donation Receipt & Certificate of Honor"}
                </span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#78350f", margin: "4px 0 10px 0" }}>
                  {lang === "hi" ? "सहयोग हेतु हार्दिक धन्यवाद!" : "Thank You for Your Generous Support!"}
                </h3>

                {/* Certificate Display Card */}
                <div style={{ backgroundColor: "#fffdf8", border: "2px dashed #d97706", borderRadius: "14px", padding: "16px", textAlign: "left", marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #fef3c7", paddingBottom: "8px", marginBottom: "10px", fontSize: "0.8rem" }}>
                    <span>{lang === "hi" ? "रसीद सं.: " : "Receipt No: "}<strong>{receiptNumber}</strong></span>
                    <span>{lang === "hi" ? "दिनांक: " : "Date: "}<strong>{lang === "hi" ? "28 अक्टूबर 2026" : "Oct 28, 2026"}</strong></span>
                  </div>

                  <p style={{ fontSize: "0.92rem", color: "#1f2937", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                    {lang === "hi" ? (
                      <>प्रमाणित किया जाता है कि <strong>{donorName}</strong> ({donorCity || "गरायें लंभुआ"}) ने ग्राम पंचायत गरायें के समग्र विकास हेतु <strong>₹{activeAmount.toLocaleString()}</strong> की सम्मानजनक राशि का जनसहयोग प्रदान किया है।</>
                    ) : (
                      <>This certifies that <strong>{donorName}</strong> ({donorCity || "Garayen, Lambhua"}) has contributed <strong>₹{activeAmount.toLocaleString()}</strong> towards the holistic development of Gram Panchayat Garayen.</>
                    )}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.78rem", color: "#6b7280" }}>
                    <span>
                      {lang === "hi" ? "परियोजना: " : "Project: "}
                      {donorProject === "dwar" 
                        ? (lang === "hi" ? "स्वागत द्वार" : "Entrance Gateway") 
                        : donorProject === "camera" 
                        ? (lang === "hi" ? "CCTV सुरक्षा" : "CCTV Security") 
                        : (lang === "hi" ? "स्मार्ट कंप्यूटर लैब" : "Smart Computer Lab")}
                    </span>
                    <span style={{ fontWeight: 700, color: "#78350f" }}>
                      {lang === "hi" ? "ग्राम प्रधान / सचिव, गरायें" : "Gram Pradhan / Secretary, Garayen"}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="btn btn-gold"
                  style={{ width: "100%", padding: "12px", fontSize: "0.92rem", marginBottom: "10px" }}
                >
                  <Download size={16} />
                  <span>{lang === "hi" ? "सम्मान पत्र डाउनलोड / प्रिंट करें" : "Download / Print Certificate"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setReceiptGenerated(false)}
                  style={{ background: "none", border: "none", color: "#d97706", fontSize: "0.85rem", cursor: "pointer", textDecoration: "underline", fontWeight: 700 }}
                >
                  {lang === "hi" ? "अन्य सहयोग दर्ज करें" : "Record Another Donation"}
                </button>
              </div>
            ) : (
              /* Donation Form */
              <form onSubmit={handleDonateSubmit}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <Award size={20} color="#d97706" />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#78350f", margin: 0 }}>
                    {lang === "hi" ? "सहयोग दर्ज करें व सम्मान पत्र पाएं" : "Record Donation & Get Certificate"}
                  </h3>
                </div>

                {/* Amount Selector - Responsive */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                    {lang === "hi" ? "सहयोग राशि चुनें (Select Amount) *" : "Select Contribution Amount *"}
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 65px), 1fr))", gap: "8px", marginBottom: "10px" }}>
                    {[501, 1100, 2100, 5100].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amt);
                          setCustomAmount("");
                        }}
                        style={{
                          padding: "9px 4px",
                          borderRadius: "10px",
                          border: (!customAmount && selectedAmount === amt) ? "2px solid #d97706" : "1px solid #d1d5db",
                          backgroundColor: (!customAmount && selectedAmount === amt) ? "#d97706" : "#fffdf8",
                          color: (!customAmount && selectedAmount === amt) ? "#ffffff" : "#1f2937",
                          fontWeight: 700,
                          fontSize: "0.88rem",
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
                    placeholder={lang === "hi" ? "अथवा अन्य राशि दर्ज करें (जैसे ₹11,000)" : "Or enter custom amount (e.g. ₹11,000)"}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>

                {/* Donor Name */}
                <div style={{ marginBottom: "12px" }}>
                  <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 700, color: "#1f2937", marginBottom: "5px" }}>
                    {lang === "hi" ? "आपका शुभ नाम (Full Name) *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder={lang === "hi" ? "उदा. श्री सुनील कुमार वर्मा" : "e.g. Sunil Kumar Verma"}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>

                {/* Donor Phone & City - Responsive */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))", gap: "10px", marginBottom: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 700, color: "#1f2937", marginBottom: "5px" }}>
                      {lang === "hi" ? "मोबाइल नंबर *" : "Mobile Number *"}
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
                    <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 700, color: "#1f2937", marginBottom: "5px" }}>
                      {lang === "hi" ? "शहर / गाँव" : "City / Village"}
                    </label>
                    <input
                      type="text"
                      value={donorCity}
                      onChange={(e) => setDonorCity(e.target.value)}
                      placeholder={lang === "hi" ? "लंभुआ / सुल्तानपुर" : "Lambhua / Sultanpur"}
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                    />
                  </div>
                </div>

                {/* Project Selection */}
                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.84rem", fontWeight: 700, color: "#1f2937", marginBottom: "5px" }}>
                    {lang === "hi" ? "सहयोग किस कार्य हेतु देना चाहते हैं?" : "Select Development Purpose:"}
                  </label>
                  <select
                    value={donorProject}
                    onChange={(e) => setDonorProject(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "0.88rem", backgroundColor: "#fffdf8", outline: "none" }}
                  >
                    <option value="dwar">
                      {lang === "hi" ? "गरायें भव्य प्रवेश स्वागत द्वार निर्माण" : "Garayen Grand Entrance Gateway Construction"}
                    </option>
                    <option value="camera">
                      {lang === "hi" ? "24x7 मुख्य तिराहा व विद्यालय CCTV सुरक्षा" : "24x7 Main Intersection & School CCTV Surveillance"}
                    </option>
                    <option value="school">
                      {lang === "hi" ? "प्राथमिक विद्यालय (1917) कंप्यूटर लैब" : "Primary School (Est. 1917) Smart Computer Lab"}
                    </option>
                    <option value="general">
                      {lang === "hi" ? "समग्र ग्राम पंचायत सामान्य विकास" : "Holistic Gram Panchayat General Development"}
                    </option>
                  </select>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px", fontSize: "0.95rem", borderRadius: "10px" }}
                >
                  <IndianRupee size={16} />
                  <span>
                    {lang === "hi" 
                      ? `सहयोग दर्ज करें व सम्मान पत्र पाएं (₹${activeAmount.toLocaleString()})`
                      : `Submit & Get Certificate (₹${activeAmount.toLocaleString()})`}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Wall of Fame / Recent Donors List - Responsive */}
        <div style={{ maxWidth: "880px", margin: "40px auto 0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#78350f", margin: 0 }}>
              {lang === "hi" ? "दानवीर सम्मान पट्टिका (Wall of Fame)" : "Wall of Honor (Distinguished Donors)"}
            </h3>
            <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
              {lang === "hi" 
                ? "गरायें ग्राम विकास में उल्लेखनीय योगदान देने वाले आदरणीय दानदाता"
                : "Honoring citizens & patrons who contributed generously to Garayen village development"}
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "14px" }}>
            {recentDonors.map((d, idx) => (
              <div 
                key={idx}
                style={{ 
                  backgroundColor: "#ffffff", 
                  border: "1.5px solid #fde68a", 
                  borderRadius: "14px", 
                  padding: "14px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <strong style={{ fontSize: "0.92rem", color: "#78350f", display: "block" }}>
                    {lang === "hi" ? d.name.hi : d.name.en}
                  </strong>
                  <span style={{ fontSize: "0.76rem", color: "#6b7280", display: "block" }}>
                    {lang === "hi" ? d.place.hi : d.place.en}
                  </span>
                  <span style={{ fontSize: "0.74rem", color: "#d97706", fontWeight: 700 }}>
                    {lang === "hi" ? d.for.hi : d.for.en}
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "1.05rem", fontWeight: 900, color: "#d97706" }}>{d.amount}</span>
                  <span style={{ fontSize: "0.68rem", color: "#9ca3af", display: "block" }}>
                    {lang === "hi" ? "सम्मानित" : "Honored"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
