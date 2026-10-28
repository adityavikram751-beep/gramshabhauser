"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { 
  HeartHandshake, 
  Landmark, 
  QrCode, 
  Copy, 
  Check, 
  Award, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Users, 
  Target, 
  TrendingUp, 
  Download, 
  Printer, 
  X,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const SchemesAndFund: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"schemes" | "fund">("fund");

  // Fund Collection States
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorCity, setDonorCity] = useState("");
  const [donorAmount, setDonorAmount] = useState<number>(1100);
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [certificateData, setCertificateData] = useState<{
    name: string;
    amount: number;
    city: string;
    certId: string;
    date: string;
  } | null>(null);

  const [donorsList, setDonorsList] = useState([
    { name: "श्री रामअवतार सिंह", city: "गारयेन (वार्ड 2)", amount: 11000, date: "आज", note: "स्वागत द्वार निर्माण हेतु" },
    { name: "श्री धर्मेन्द्र पटेल", city: "मुंबई (प्रवासी)", amount: 5100, date: "कल", note: "स्मार्ट क्लास लाइब्रेरी हेतु" },
    { name: "श्रीमती कान्ता देवी", city: "गारयेन (वार्ड 7)", amount: 2100, date: "2 दिन पूर्व", note: "मंदिर लाइटिंग हेतु" },
    { name: "श्री अनिल कुमार यादव", city: "दिल्ली (प्रवासी)", amount: 5000, date: "3 दिन पूर्व", note: "CCTV सुरक्षा कैमरा हेतु" },
    { name: "श्री सतीश चंद्र मिश्र", city: "गारयेन (वार्ड 4)", amount: 1100, date: "4 दिन पूर्व", note: "गौशाला सेवा" },
  ]);

  const totalTarget = 500000;
  const currentCollected = 342500;
  const progressPercent = Math.min(100, Math.round((currentCollected / totalTarget) * 100));

  const handleCopyUpi = () => {
    navigator.clipboard.writeText("garayenvikas@upi");
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName.trim() || !donorAmount) return;

    const newCert = {
      name: donorName,
      amount: donorAmount,
      city: donorCity || "गारयेन",
      certId: `GRY-DON-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : "en-US", { year: "numeric", month: "long", day: "numeric" }),
    };

    setCertificateData(newCert);
    setDonorsList([
      { name: donorName, city: donorCity || "गारयेन", amount: donorAmount, date: "अभी", note: "ग्राम विकास सहयोग" },
      ...donorsList
    ]);
  };

  const schemes = [
    {
      id: "awas",
      title: t("scheme1_title"),
      desc: t("scheme1_desc"),
      benefit: "₹1,20,000 सीधा बैंक में",
      category: "आवास (Housing)",
      status: "148 लाभार्थी लाभान्वित",
    },
    {
      id: "jal",
      title: t("scheme2_title"),
      desc: t("scheme2_desc"),
      benefit: "24x7 नल से शुद्ध जल",
      category: "पेयजल (Water)",
      status: "100% कवरेज पूर्ण",
    },
    {
      id: "kisan",
      title: t("scheme3_title"),
      desc: t("scheme3_desc"),
      benefit: "₹6,000 प्रति वर्ष",
      category: "कृषि (Farmer)",
      status: "680+ किसान पंजीकृत",
    },
    {
      id: "solar",
      title: t("scheme4_title"),
      desc: t("scheme4_desc"),
      benefit: "स्वचालित सौर प्रकाश",
      category: "ऊर्जा (Energy)",
      status: "210 लाइटें स्थापित",
    },
    {
      id: "mgnrega",
      title: t("scheme5_title"),
      desc: t("scheme5_desc"),
      benefit: "100 दिन रोजगार गारंटी",
      category: "रोजगार (Employment)",
      status: "सक्रिय जॉब कार्ड धारक",
    },
  ];

  return (
    <section id="fund" style={{ padding: "90px 0", backgroundColor: "#fdfcf7" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="vip-badge">
            <HeartHandshake size={16} />
            <span>{t("schemes_badge")}</span>
          </div>
          <h2 className="section-title">{t("schemes_title")}</h2>
          <p className="section-subtitle">{t("schemes_subtitle")}</p>
        </div>

        {/* Tab switch: Schemes vs Fund */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
          <button
            onClick={() => setActiveTab("fund")}
            style={{
              padding: "14px 28px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
              border: activeTab === "fund" ? "2px solid #d97706" : "1.5px solid #d1cebe",
              backgroundColor: activeTab === "fund" ? "#d97706" : "#ffffff",
              color: activeTab === "fund" ? "#ffffff" : "#374151",
              boxShadow: activeTab === "fund" ? "0 8px 25px rgba(217, 119, 6, 0.35)" : "none"
            }}
          >
            <HeartHandshake size={20} />
            <span>{t("tab_fund")}</span>
            <span style={{ backgroundColor: activeTab === "fund" ? "rgba(0,0,0,0.2)" : "#fef3c7", color: activeTab === "fund" ? "#ffffff" : "#b45309", padding: "2px 8px", borderRadius: "10px", fontSize: "0.75rem" }}>
              लाइव
            </span>
          </button>

          <button
            onClick={() => setActiveTab("schemes")}
            style={{
              padding: "14px 28px",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.2s ease",
              border: activeTab === "schemes" ? "2px solid #0e3d28" : "1.5px solid #d1cebe",
              backgroundColor: activeTab === "schemes" ? "#0e3d28" : "#ffffff",
              color: activeTab === "schemes" ? "#fbbf24" : "#374151",
              boxShadow: activeTab === "schemes" ? "0 8px 25px rgba(14, 61, 40, 0.25)" : "none"
            }}
          >
            <Landmark size={20} />
            <span>{t("tab_schemes")}</span>
          </button>
        </div>

        {/* ================= FUND COLLECTION PORTAL ================= */}
        {activeTab === "fund" && (
          <div>
            
            {/* Top Fund Progress Banner */}
            <div 
              style={{ 
                background: "linear-gradient(135deg, #072517 0%, #0e3d28 100%)", 
                borderRadius: "24px", 
                padding: "36px", 
                color: "#ffffff", 
                marginBottom: "40px",
                border: "2px solid #e2c079",
                boxShadow: "0 15px 40px rgba(14, 61, 40, 0.25)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "24px" }}>
                <div>
                  <span style={{ backgroundColor: "rgba(217, 119, 6, 0.3)", color: "#fbbf24", padding: "4px 12px", borderRadius: "16px", fontSize: "0.8rem", fontWeight: 700, border: "1px solid rgba(251, 191, 36, 0.4)" }}>
                    {t("fund_badge")}
                  </span>
                  <h3 style={{ fontSize: "2rem", fontWeight: 800, margin: "10px 0 6px 0", color: "#ffffff" }}>
                    {t("fund_title")}
                  </h3>
                  <p style={{ color: "#d1d5db", fontSize: "0.98rem", maxWidth: "700px", lineHeight: 1.6 }}>
                    {t("fund_desc")}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "20px", textAlign: "right" }}>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.08)", padding: "14px 22px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span style={{ fontSize: "0.8rem", color: "#9ca3af", display: "block" }}>{t("fund_raised")}</span>
                    <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fbbf24" }}>
                      ₹{currentCollected.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.08)", padding: "14px 22px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span style={{ fontSize: "0.8rem", color: "#9ca3af", display: "block" }}>{t("fund_target")}</span>
                    <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff" }}>
                      ₹{totalTarget.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", fontWeight: 700, marginBottom: "8px" }}>
                  <span>प्रगति: {progressPercent}% पूर्ण</span>
                  <span>शेष राशि: ₹{(totalTarget - currentCollected).toLocaleString("en-IN")}</span>
                </div>
                <div style={{ height: "14px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "8px", overflow: "hidden" }}>
                  <div 
                    style={{ 
                      width: `${progressPercent}%`, 
                      height: "100%", 
                      background: "linear-gradient(90deg, #d97706, #fbbf24)",
                      borderRadius: "8px",
                      transition: "width 1s ease" 
                    }} 
                  />
                </div>
              </div>
            </div>

            {/* Donation Interface & QR Code Box */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
                gap: "35px",
                marginBottom: "45px" 
              }}
            >
              
              {/* Left: Donation Form */}
              <div 
                style={{ 
                  backgroundColor: "#ffffff", 
                  padding: "32px", 
                  borderRadius: "24px", 
                  border: "1.5px solid #e7dfcc",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)" 
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                  <HeartHandshake size={24} color="#d97706" />
                  <h4 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0e3d28" }}>
                    ग्राम विकास में सहयोग राशि चुनें
                  </h4>
                </div>

                {/* Amount Chips */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginBottom: "22px" }}>
                  {[501, 1100, 2100, 5100, 11000, 21000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDonorAmount(amt)}
                      style={{
                        padding: "10px",
                        borderRadius: "12px",
                        border: donorAmount === amt ? "2px solid #d97706" : "1px solid #d1d5db",
                        backgroundColor: donorAmount === amt ? "#fef3c7" : "#ffffff",
                        color: donorAmount === amt ? "#92400e" : "#374151",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleDonateSubmit}>
                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                      {t("fund_donor_amount")}
                    </label>
                    <input
                      type="number"
                      value={donorAmount}
                      onChange={(e) => setDonorAmount(Number(e.target.value))}
                      required
                      min={10}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #d1d5db", fontSize: "1.1rem", fontWeight: 700, color: "#0e3d28", outline: "none" }}
                    />
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                      {t("fund_donor_name")} *
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                      placeholder="उदा. रमेश कुमार सिंह"
                      style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "0.95rem", outline: "none" }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "22px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                        {t("fund_donor_phone")}
                      </label>
                      <input
                        type="tel"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="98XXXXXXXX"
                        style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "0.95rem", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
                        {t("fund_donor_city")}
                      </label>
                      <input
                        type="text"
                        value={donorCity}
                        onChange={(e) => setDonorCity(e.target.value)}
                        placeholder="गारयेन / शहर"
                        style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "0.95rem", outline: "none" }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: "100%", padding: "14px", fontSize: "1.05rem", borderRadius: "12px" }}
                  >
                    <CheckCircle2 size={18} />
                    <span>{t("fund_submit_donate")}</span>
                  </button>
                </form>
              </div>

              {/* Right: UPI QR Code Box */}
              <div 
                style={{ 
                  backgroundColor: "#ffffff", 
                  padding: "32px", 
                  borderRadius: "24px", 
                  border: "2px solid #e2c079",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", marginBottom: "12px" }}>
                  <QrCode size={26} />
                </div>

                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0e3d28", marginBottom: "4px" }}>
                  {t("fund_qr_title")}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "#6b7280", marginBottom: "18px" }}>
                  PhonePe, Google Pay, Paytm, BHIM या किसी भी UPI ऐप से स्कैन करें
                </p>

                {/* Styled QR Code Box with Mock/SVG QR */}
                <div 
                  style={{ 
                    padding: "16px", 
                    backgroundColor: "#ffffff", 
                    borderRadius: "16px", 
                    border: "2px solid #0e3d28",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    marginBottom: "18px"
                  }}
                >
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=garayenvikas@upi&pn=Garayen%20Gram%20Vikas%20Nidhi&am=${donorAmount}&cu=INR`}
                    alt="Garayen Vikas Nidhi UPI QR Code"
                    width={180}
                    height={180}
                    style={{ display: "block" }}
                  />
                  <span style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#0e3d28", marginTop: "8px" }}>
                    राशि: ₹{donorAmount.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Copyable UPI Box */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#f3f4f6", padding: "8px 16px", borderRadius: "10px", width: "100%", justifyContent: "space-between", marginBottom: "14px" }}>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#1f2937" }}>
                    garayenvikas@upi
                  </span>
                  <button
                    onClick={handleCopyUpi}
                    style={{
                      background: copiedUpi ? "#16a34a" : "#0e3d28",
                      color: "#ffffff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    {copiedUpi ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedUpi ? t("fund_copied") : t("fund_copy_upi")}</span>
                  </button>
                </div>

                <div style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.4 }}>
                  🔒 यह खाता ग्राम पंचायत गारयेन के आधिकारिक बैंक खाते (State Bank of India, Garayen Branch) से सीधे संबद्ध है।
                </div>
              </div>

            </div>

            {/* Wall of Fame / Recent Donors List */}
            <div 
              style={{ 
                backgroundColor: "#ffffff", 
                padding: "28px 32px", 
                borderRadius: "20px", 
                border: "1.5px solid #e7dfcc",
                boxShadow: "0 6px 20px rgba(0,0,0,0.04)" 
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Award size={22} color="#d97706" />
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0e3d28" }}>
                  {t("fund_recent_donors")}
                </h4>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
                {donorsList.map((d, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: "14px 18px", 
                      borderRadius: "14px", 
                      backgroundColor: "#fdfbf7", 
                      border: "1px solid #f1ece1",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0e3d28", margin: 0 }}>
                        {d.name}
                      </h5>
                      <span style={{ fontSize: "0.78rem", color: "#6b7280" }}>
                        {d.city} • {d.date}
                      </span>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "#d97706", fontWeight: 600 }}>
                        {d.note}
                      </span>
                    </div>

                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#166534" }}>
                      ₹{d.amount.toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================= GOVERNMENT SCHEMES ================= */}
        {activeTab === "schemes" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {schemes.map((s) => (
              <div 
                key={s.id} 
                className="card-vip" 
                style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  justifyContent: "space-between" 
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 700 }}>
                      {s.category}
                    </span>
                    <span style={{ color: "#15803d", fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      <CheckCircle2 size={13} color="#16a34a" />
                      {s.status}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", marginBottom: "10px" }}>
                    {s.title}
                  </h4>

                  <p style={{ color: "#4b5563", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "18px" }}>
                    {s.desc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #f3ece0", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "#9ca3af", display: "block" }}>योजना लाभ</span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#d97706" }}>
                      {s.benefit}
                    </span>
                  </div>

                  <a 
                    href="#samasya"
                    style={{ 
                      fontSize: "0.85rem", 
                      fontWeight: 700, 
                      color: "#0e3d28", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "4px" 
                    }}
                  >
                    <span>आवेदन सहायता</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ================= DIGITAL DONATION CERTIFICATE MODAL ================= */}
      {certificateData && (
        <div 
          style={{ 
            position: "fixed", 
            inset: 0, 
            backgroundColor: "rgba(0,0,0,0.8)", 
            zIndex: 1000, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "20px" 
          }}
        >
          <div 
            style={{ 
              backgroundColor: "#fdfbf7", 
              maxWidth: "600px", 
              width: "100%", 
              borderRadius: "20px", 
              border: "4px double #d4af37",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
              overflow: "hidden" 
            }}
          >
            {/* Top Bar with Close button */}
            <div style={{ backgroundColor: "#072517", color: "#ffffff", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fbbf24" }}>
                ✨ डिजिटल दान सम्मान पत्र (VIP Certificate)
              </span>
              <button 
                onClick={() => setCertificateData(null)}
                style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer" }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate Body */}
            <div style={{ padding: "34px 28px", textAlign: "center", position: "relative" }}>
              
              <div style={{ width: "60px", height: "60px", margin: "0 auto 12px auto", position: "relative" }}>
                <img
                  src="/images/seal.jpg"
                  alt="Garayen Seal"
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", border: "2px solid #d4af37" }}
                />
              </div>

              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#b45309", letterSpacing: "1px", textTransform: "uppercase" }}>
                ग्राम पंचायत गारयेन - विकास खण्ड कार्यालय
              </span>

              <h3 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#0e3d28", margin: "4px 0 16px 0" }}>
                ग्राम गौरव सम्मान पत्र
              </h3>

              <p style={{ fontSize: "0.95rem", color: "#4b5563", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 18px auto" }}>
                ससम्मान प्रमाणित किया जाता है कि आदरणीय <strong>{certificateData.name}</strong> ({certificateData.city}) ने गारयेन गाँव के समग्र विकास हेतु <strong>₹{certificateData.amount.toLocaleString("en-IN")}</strong> की पुनीत सहयोग राशि समर्पित की है। ग्राम पंचायत आपके उज्ज्वल भविष्य की कामना करती है।
              </p>

              <div style={{ display: "flex", justifyContent: "space-around", borderTop: "1px dashed #d1cebe", borderBottom: "1px dashed #d1cebe", padding: "12px 0", margin: "16px 0", fontSize: "0.85rem" }}>
                <div>
                  <span style={{ color: "#9ca3af", display: "block" }}>प्रमाणपत्र संख्या</span>
                  <strong style={{ color: "#0e3d28" }}>{certificateData.certId}</strong>
                </div>
                <div>
                  <span style={{ color: "#9ca3af", display: "block" }}>सहयोग दिनांक</span>
                  <strong style={{ color: "#0e3d28" }}>{certificateData.date}</strong>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
                <button
                  onClick={() => window.print()}
                  className="btn btn-secondary"
                  style={{ padding: "10px 20px", fontSize: "0.9rem" }}
                >
                  <Printer size={16} />
                  <span>प्रिंट / सेव करें</span>
                </button>
                <button
                  onClick={() => setCertificateData(null)}
                  className="btn btn-primary"
                  style={{ padding: "10px 22px", fontSize: "0.9rem" }}
                >
                  <span>धन्यवाद (पूर्ण)</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
