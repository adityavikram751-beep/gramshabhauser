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
    { 
      name: { hi: "श्री रामअवतार सिंह", en: "Mr. Ramavtar Singh" }, 
      city: { hi: "गरायें (वार्ड 2)", en: "Garayen (Ward 2)" }, 
      amount: 11000, 
      date: { hi: "आज", en: "Today" }, 
      note: { hi: "स्वागत द्वार निर्माण हेतु", en: "For Entrance Gateway Construction" } 
    },
    { 
      name: { hi: "श्री धर्मेन्द्र पटेल", en: "Mr. Dharmendra Patel" }, 
      city: { hi: "मुंबई (प्रवासी)", en: "Mumbai (NRI/Migrant)" }, 
      amount: 5100, 
      date: { hi: "कल", en: "Yesterday" }, 
      note: { hi: "स्मार्ट क्लास लाइब्रेरी हेतु", en: "For Smart Class Library" } 
    },
    { 
      name: { hi: "श्रीमती कान्ता देवी", en: "Mrs. Kanta Devi" }, 
      city: { hi: "गरायें (वार्ड 7)", en: "Garayen (Ward 7)" }, 
      amount: 2100, 
      date: { hi: "2 दिन पूर्व", en: "2 days ago" }, 
      note: { hi: "मंदिर लाइटिंग हेतु", en: "For Temple Illumination" } 
    },
    { 
      name: { hi: "श्री अनिल कुमार यादव", en: "Mr. Anil Kumar Yadav" }, 
      city: { hi: "दिल्ली (प्रवासी)", en: "Delhi (Migrant)" }, 
      amount: 5000, 
      date: { hi: "3 दिन पूर्व", en: "3 days ago" }, 
      note: { hi: "CCTV सुरक्षा कैमरा हेतु", en: "For CCTV Security Camera" } 
    },
    { 
      name: { hi: "श्री सतीश चंद्र मिश्र", en: "Mr. Satish Chandra Mishra" }, 
      city: { hi: "गरायें (वार्ड 4)", en: "Garayen (Ward 4)" }, 
      amount: 1100, 
      date: { hi: "4 दिन पूर्व", en: "4 days ago" }, 
      note: { hi: "गौशाला सेवा", en: "For Gaushala Service" } 
    },
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
      city: donorCity || (lang === "hi" ? "गरायें" : "Garayen"),
      certId: `GRY-DON-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString(lang === "hi" ? "hi-IN" : "en-US", { year: "numeric", month: "long", day: "numeric" }),
    };

    setCertificateData(newCert);
    setDonorsList([
      { 
        name: { hi: donorName, en: donorName }, 
        city: { hi: donorCity || "गरायें", en: donorCity || "Garayen" }, 
        amount: donorAmount, 
        date: { hi: "अभी", en: "Just now" }, 
        note: { hi: "ग्राम विकास सहयोग", en: "Village Development Contribution" } 
      },
      ...donorsList
    ]);
  };

  const schemes = [
    {
      id: "awas",
      title: t("scheme1_title"),
      desc: t("scheme1_desc"),
      benefit: { hi: "₹1,20,000 सीधा बैंक में", en: "₹1,20,000 Direct in Bank" },
      category: { hi: "आवास (Housing)", en: "Housing" },
      status: { hi: "148 लाभार्थी लाभान्वित", en: "148 Families Benefited" },
    },
    {
      id: "jal",
      title: t("scheme2_title"),
      desc: t("scheme2_desc"),
      benefit: { hi: "24x7 नल से शुद्ध जल", en: "24x7 Clean Tap Water" },
      category: { hi: "पेयजल (Water)", en: "Drinking Water" },
      status: { hi: "100% कवरेज पूर्ण", en: "100% Coverage Completed" },
    },
    {
      id: "kisan",
      title: t("scheme3_title"),
      desc: t("scheme3_desc"),
      benefit: { hi: "₹6,000 प्रति वर्ष", en: "₹6,000 Annual Assistance" },
      category: { hi: "कृषि (Farmer)", en: "Agriculture" },
      status: { hi: "680+ किसान पंजीकृत", en: "680+ Registered Farmers" },
    },
    {
      id: "solar",
      title: t("scheme4_title"),
      desc: t("scheme4_desc"),
      benefit: { hi: "स्वचालित सौर प्रकाश", en: "Automatic Solar Lighting" },
      category: { hi: "ऊर्जा (Energy)", en: "Clean Energy" },
      status: { hi: "210 लाइटें स्थापित", en: "210 Lights Installed" },
    },
    {
      id: "mgnrega",
      title: t("scheme5_title"),
      desc: t("scheme5_desc"),
      benefit: { hi: "100 दिन रोजगार गारंटी", en: "100 Days Guaranteed Work" },
      category: { hi: "रोजगार (Employment)", en: "Rural Employment" },
      status: { hi: "सक्रिय जॉब कार्ड धारक", en: "Active Job Card Holders" },
    },
  ];

  return (
    <section id="fund" style={{ padding: "clamp(40px, 6vw, 90px) 0", backgroundColor: "#fffdfa" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a" }}>
            <HeartHandshake size={16} />
            <span>{t("schemes_badge")}</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#451a03" }}>{t("schemes_title")}</h2>
          <p className="section-subtitle" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: "#78350f" }}>{t("schemes_subtitle")}</p>
        </div>

        {/* Tab switch: Schemes vs Fund */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
          <button
            onClick={() => setActiveTab("fund")}
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
              border: activeTab === "fund" ? "2px solid #d97706" : "1.5px solid #fde68a",
              backgroundColor: activeTab === "fund" ? "#d97706" : "#ffffff",
              color: activeTab === "fund" ? "#ffffff" : "#78350f",
              boxShadow: activeTab === "fund" ? "0 8px 25px rgba(217, 119, 6, 0.3)" : "none"
            }}
          >
            <HeartHandshake size={19} />
            <span>{t("tab_fund")}</span>
            <span style={{ backgroundColor: activeTab === "fund" ? "rgba(0,0,0,0.2)" : "#fef3c7", color: activeTab === "fund" ? "#ffffff" : "#92400e", padding: "2px 8px", borderRadius: "10px", fontSize: "0.75rem" }}>
              {lang === "hi" ? "लाइव" : "Live"}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("schemes")}
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
              border: activeTab === "schemes" ? "2px solid #d97706" : "1.5px solid #fde68a",
              backgroundColor: activeTab === "schemes" ? "#d97706" : "#ffffff",
              color: activeTab === "schemes" ? "#ffffff" : "#78350f",
              boxShadow: activeTab === "schemes" ? "0 8px 25px rgba(217, 119, 6, 0.3)" : "none"
            }}
          >
            <Landmark size={19} />
            <span>{t("tab_schemes")}</span>
          </button>
        </div>

        {/* ================= FUND COLLECTION PORTAL ================= */}
        {activeTab === "fund" && (
          <div>
            
            {/* Top Fund Progress Banner */}
            <div 
              style={{ 
                background: "linear-gradient(135deg, #291204 0%, #78350f 100%)", 
                borderRadius: "24px", 
                padding: "clamp(24px, 4vw, 36px)", 
                color: "#ffffff", 
                marginBottom: "36px",
                border: "2px solid #fde68a",
                boxShadow: "0 15px 40px rgba(69, 26, 3, 0.25)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "20px", marginBottom: "24px" }}>
                <div>
                  <span style={{ backgroundColor: "rgba(217, 119, 6, 0.35)", color: "#fde68a", padding: "4px 12px", borderRadius: "16px", fontSize: "0.8rem", fontWeight: 700, border: "1px solid rgba(253, 230, 138, 0.4)" }}>
                    {t("fund_badge")}
                  </span>
                  <h3 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)", fontWeight: 800, margin: "10px 0 6px 0", color: "#ffffff" }}>
                    {t("fund_title")}
                  </h3>
                  <p style={{ color: "#fef3c7", fontSize: "0.95rem", maxWidth: "700px", lineHeight: 1.6 }}>
                    {t("fund_desc")}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.08)", padding: "12px 20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span style={{ fontSize: "0.8rem", color: "#fde68a", display: "block" }}>{t("fund_raised")}</span>
                    <span style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#fbbf24" }}>
                      ₹{currentCollected.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div style={{ backgroundColor: "rgba(255,255,255,0.08)", padding: "12px 20px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <span style={{ fontSize: "0.8rem", color: "#fde68a", display: "block" }}>{t("fund_target")}</span>
                    <span style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, color: "#ffffff" }}>
                      ₹{totalTarget.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", fontWeight: 700, marginBottom: "8px", flexWrap: "wrap", gap: "6px" }}>
                  <span>
                    {lang === "hi" ? `प्रगति: ${progressPercent}% पूर्ण` : `Progress: ${progressPercent}% Achieved`}
                  </span>
                  <span>
                    {lang === "hi" ? `शेष राशि: ₹${(totalTarget - currentCollected).toLocaleString("en-IN")}` : `Remaining: ₹${(totalTarget - currentCollected).toLocaleString("en-IN")}`}
                  </span>
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
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 310px), 1fr))", 
                gap: "28px",
                marginBottom: "40px" 
              }}
            >
              
              {/* Left: Donation Form */}
              <div 
                style={{ 
                  backgroundColor: "#ffffff", 
                  padding: "clamp(20px, 4vw, 32px)", 
                  borderRadius: "24px", 
                  border: "1.5px solid #fde68a",
                  boxShadow: "0 8px 25px rgba(217, 119, 6, 0.06)" 
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                  <HeartHandshake size={24} color="#d97706" />
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#451a03" }}>
                    {lang === "hi" ? "ग्राम विकास में सहयोग राशि चुनें" : "Select Contribution Amount"}
                  </h4>
                </div>

                {/* Amount Chips */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(85px, 1fr))", gap: "8px", marginBottom: "20px" }}>
                  {[501, 1100, 2100, 5100, 11000, 21000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDonorAmount(amt)}
                      style={{
                        padding: "10px 6px",
                        borderRadius: "12px",
                        border: donorAmount === amt ? "2px solid #d97706" : "1px solid #fde68a",
                        backgroundColor: donorAmount === amt ? "#fef3c7" : "#ffffff",
                        color: donorAmount === amt ? "#92400e" : "#78350f",
                        fontWeight: 700,
                        fontSize: "0.92rem",
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
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                      {t("fund_donor_amount")}
                    </label>
                    <input
                      type="number"
                      value={donorAmount}
                      onChange={(e) => setDonorAmount(Number(e.target.value))}
                      required
                      min={10}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "1.1rem", fontWeight: 700, color: "#451a03", outline: "none" }}
                    />
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                      {t("fund_donor_name")} *
                    </label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      required
                      placeholder={lang === "hi" ? "उदा. रमेश कुमार सिंह" : "e.g. Ramesh Kumar Singh"}
                      style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.95rem", outline: "none" }}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", marginBottom: "20px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                        {t("fund_donor_phone")}
                      </label>
                      <input
                        type="tel"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        placeholder="98XXXXXXXX"
                        style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.95rem", outline: "none" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#451a03", marginBottom: "6px" }}>
                        {t("fund_donor_city")}
                      </label>
                      <input
                        type="text"
                        value={donorCity}
                        onChange={(e) => setDonorCity(e.target.value)}
                        placeholder={lang === "hi" ? "गरायें / शहर" : "Garayen / City"}
                        style={{ width: "100%", padding: "12px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.95rem", outline: "none" }}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", padding: "14px", fontSize: "1.02rem", borderRadius: "12px" }}
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
                  padding: "clamp(20px, 4vw, 32px)", 
                  borderRadius: "24px", 
                  border: "1.5px solid #fde68a",
                  boxShadow: "0 8px 25px rgba(217, 119, 6, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center"
                }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", color: "#d97706", marginBottom: "12px" }}>
                  <QrCode size={26} />
                </div>

                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#451a03", marginBottom: "4px" }}>
                  {t("fund_qr_title")}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "#78350f", marginBottom: "18px" }}>
                  {lang === "hi" ? "PhonePe, Google Pay, Paytm, BHIM या किसी भी UPI ऐप से स्कैन करें" : "Scan using PhonePe, Google Pay, Paytm, BHIM or any UPI app"}
                </p>

                {/* Styled QR Code Box */}
                <div 
                  style={{ 
                    padding: "16px", 
                    backgroundColor: "#ffffff", 
                    borderRadius: "16px", 
                    border: "2px solid #d97706",
                    boxShadow: "0 8px 25px rgba(217, 119, 6, 0.15)",
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
                  <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 800, color: "#d97706", marginTop: "8px" }}>
                    {lang === "hi" ? `राशि: ₹${donorAmount.toLocaleString("en-IN")}` : `Amount: ₹${donorAmount.toLocaleString("en-IN")}`}
                  </span>
                </div>

                {/* Copyable UPI Box */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "8px 16px", borderRadius: "10px", width: "100%", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "#451a03" }}>
                    garayenvikas@upi
                  </span>
                  <button
                    onClick={handleCopyUpi}
                    style={{
                      background: copiedUpi ? "#16a34a" : "#d97706",
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

                <div style={{ fontSize: "0.8rem", color: "#78350f", lineHeight: 1.4 }}>
                  🔒 {lang === "hi" ? "यह खाता ग्राम पंचायत गरायें के आधिकारिक बैंक खाते (State Bank of India, Garayen Branch) से सीधे संबद्ध है।" : "This account is linked to the official Gram Panchayat Garayen SBI account."}
                </div>
              </div>

            </div>

            {/* Wall of Fame / Recent Donors List */}
            <div 
              style={{ 
                backgroundColor: "#ffffff", 
                padding: "clamp(20px, 4vw, 32px)", 
                borderRadius: "20px", 
                border: "1.5px solid #fde68a",
                boxShadow: "0 6px 20px rgba(217, 119, 6, 0.05)" 
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Award size={22} color="#d97706" />
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#451a03" }}>
                  {t("fund_recent_donors")}
                </h4>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "14px" }}>
                {donorsList.map((d, i) => (
                  <div 
                    key={i} 
                    style={{ 
                      padding: "14px 18px", 
                      borderRadius: "14px", 
                      backgroundColor: "#fffdfa", 
                      border: "1px solid #fde68a",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    <div>
                      <h5 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#451a03", margin: 0 }}>
                        {lang === "hi" ? d.name.hi : d.name.en}
                      </h5>
                      <span style={{ fontSize: "0.78rem", color: "#78350f" }}>
                        {lang === "hi" ? d.city.hi : d.city.en} • {lang === "hi" ? d.date.hi : d.date.en}
                      </span>
                      <span style={{ display: "block", fontSize: "0.75rem", color: "#d97706", fontWeight: 600 }}>
                        {lang === "hi" ? d.note.hi : d.note.en}
                      </span>
                    </div>

                    <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#d97706", flexShrink: 0 }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>
            {schemes.map((s) => (
              <div 
                key={s.id} 
                className="card-vip" 
                style={{ 
                  display: "flex", 
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: "1.5px solid #fde68a"
                }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "6px" }}>
                    <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 700 }}>
                      {lang === "hi" ? s.category.hi : s.category.en}
                    </span>
                    <span style={{ color: "#16a34a", fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      <CheckCircle2 size={13} color="#16a34a" />
                      {lang === "hi" ? s.status.hi : s.status.en}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#451a03", marginBottom: "10px" }}>
                    {s.title}
                  </h4>

                  <p style={{ color: "#57534e", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "18px" }}>
                    {s.desc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid #fde68a", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", color: "#78350f", display: "block" }}>
                      {lang === "hi" ? "योजना लाभ" : "Scheme Benefit"}
                    </span>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#d97706" }}>
                      {lang === "hi" ? s.benefit.hi : s.benefit.en}
                    </span>
                  </div>

                  <a 
                    href="/samasya"
                    style={{ 
                      fontSize: "0.85rem", 
                      fontWeight: 700, 
                      color: "#d97706", 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "4px" 
                    }}
                  >
                    <span>{lang === "hi" ? "आवेदन सहायता" : "Apply Assistance"}</span>
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
              backgroundColor: "#fffdfa", 
              maxWidth: "600px", 
              width: "100%", 
              borderRadius: "20px", 
              border: "3px double #d97706", 
              boxShadow: "0 25px 60px rgba(0,0,0,0.4)", 
              overflow: "hidden" 
            }}
          >
            {/* Top Bar with Close button */}
            <div style={{ backgroundColor: "#451a03", color: "#ffffff", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fde68a" }}>
                ✨ {lang === "hi" ? "डिजिटल दान सम्मान पत्र (VIP Certificate)" : "Digital VIP Contribution Certificate"}
              </span>
              <button 
                onClick={() => setCertificateData(null)}
                style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", padding: "4px" }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Certificate Body */}
            <div style={{ padding: "clamp(20px, 4vw, 34px) 24px", textAlign: "center", position: "relative" }}>
              
              <div style={{ width: "60px", height: "60px", margin: "0 auto 12px auto", position: "relative" }}>
                <img
                  src="/images/seal.jpg"
                  alt="Garayen Seal"
                  style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", border: "2px solid #d97706" }}
                />
              </div>

              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#d97706", letterSpacing: "1px", textTransform: "uppercase" }}>
                {lang === "hi" ? "ग्राम पंचायत गरायें - विकास खण्ड कार्यालय" : "Gram Panchayat Garayen - Block Office"}
              </span>

              <h3 style={{ fontSize: "clamp(1.3rem, 3vw, 1.7rem)", fontWeight: 800, color: "#451a03", margin: "4px 0 16px 0" }}>
                {lang === "hi" ? "ग्राम गौरव सम्मान पत्र" : "Village Honor Certificate"}
              </h3>

              <p style={{ fontSize: "0.92rem", color: "#57534e", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 18px auto" }}>
                {lang === "hi" 
                  ? `ससम्मान प्रमाणित किया जाता है कि आदरणीय ${certificateData.name} (${certificateData.city}) ने गरायें गाँव के समग्र विकास हेतु ₹${certificateData.amount.toLocaleString("en-IN")} की पुनीत सहयोग राशि समर्पित की है। ग्राम पंचायत आपके उज्ज्वल भविष्य की कामना करती है।`
                  : `This is to gratefully certify that ${certificateData.name} (${certificateData.city}) has contributed ₹${certificateData.amount.toLocaleString("en-IN")} towards the development of Gram Panchayat Garayen. We extend our deepest gratitude.`}
              </p>

              <div style={{ display: "flex", justifyContent: "space-around", borderTop: "1px dashed #fde68a", borderBottom: "1px dashed #fde68a", padding: "12px 0", margin: "16px 0", fontSize: "0.85rem", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <span style={{ color: "#78350f", display: "block" }}>{lang === "hi" ? "प्रमाणपत्र संख्या" : "Certificate ID"}</span>
                  <strong style={{ color: "#451a03" }}>{certificateData.certId}</strong>
                </div>
                <div>
                  <span style={{ color: "#78350f", display: "block" }}>{lang === "hi" ? "सहयोग दिनांक" : "Date"}</span>
                  <strong style={{ color: "#451a03" }}>{certificateData.date}</strong>
                </div>
              </div>

              {/* Action buttons */}
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px", flexWrap: "wrap" }}>
                <button
                  onClick={() => window.print()}
                  className="btn btn-secondary"
                  style={{ padding: "10px 20px", fontSize: "0.88rem", border: "1px solid #fde68a" }}
                >
                  <Printer size={16} />
                  <span>{lang === "hi" ? "प्रिंट / सेव करें" : "Print / Save"}</span>
                </button>
                <button
                  onClick={() => setCertificateData(null)}
                  className="btn btn-primary"
                  style={{ padding: "10px 22px", fontSize: "0.88rem" }}
                >
                  <span>{lang === "hi" ? "धन्यवाद (पूर्ण)" : "Done / Thank You"}</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
