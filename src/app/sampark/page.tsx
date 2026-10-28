"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  ShieldAlert,
  Send,
  CheckCircle2,
  Building,
  Ambulance,
  Zap,
  UserCheck,
  PhoneCall,
  MessageSquare,
  Sparkles
} from "lucide-react";

export default function SamparkPage() {
  const { t, lang } = useLanguage();

  const [senderName, setSenderName] = useState("");
  const [senderPhone, setSenderPhone] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderPhone.trim() || !senderMessage.trim()) return;
    setIsSent(true);
  };

  const emergencyContacts = [
    { name: "कोतवाली लंभुआ (पुलिस)", number: "112 / 05362-234100", desc: "24 घंटे आपातकालीन पुलिस सहायता" },
    { name: "सामुदायिक स्वास्थ्य केंद्र (CHC) लंभुआ", number: "108 / 05362-234102", desc: "सरकारी अस्पताल व 24 घंटे एम्बुलेंस" },
    { name: "विद्युत उपकेंद्र लंभुआ (बिजली हेल्पलाइन)", number: "1912 / 94159-01234", desc: "ट्रांसफार्मर व फॉल्ट शिकायत" },
    { name: "महिला सुरक्षा हेल्पलाइन (UP 1090)", number: "1090", desc: "महिला सुरक्षा व त्वरित सहायता" },
    { name: "चाइल्ड हेल्पलाइन (Childline)", number: "1098", desc: "बाल संरक्षण एवं सहायता" },
    { name: "अग्निशमन केंद्र (फायर स्टेशन) सुल्तानपुर", number: "101 / 05362-240101", desc: "आग लगने पर आपातकालीन सेवा" },
  ];

  const adminDirectory = [
    {
      role: "ग्राम प्रधान",
      name: "श्री नीरव सिंह",
      phone: "+91 98380 98765",
      email: "pradhan.garayen@up.gov.in",
      timing: "प्रातः 09:00 से 01:00 (सचिवालय)",
      area: "ग्राम पंचायत गरायें, पिन: 227304"
    },
    {
      role: "ग्राम विकास अधिकारी (Panchayat Sachiv)",
      name: "श्री मनोज कुमार तिवारी",
      phone: "+91 91250 45678",
      email: "sachiv.garayen@up.gov.in",
      timing: "सोमवार व गुरुवार (सचिवालय दिवस)",
      area: "विकास खंड लंभुआ"
    },
    {
      role: "राजस्व लेखपाल",
      name: "श्री आनन्द वर्मा",
      phone: "+91 94500 12345",
      email: "lekhpal.lambhua@up.gov.in",
      timing: "तहसील दिवस व प्रत्येक बुधवार",
      area: "राजस्व वृत्त गरायें, तहसील लंभुआ"
    },
    {
      role: "खंड विकास अधिकारी (BDO, लंभुआ)",
      name: "श्री के. पी. सिंह",
      phone: "05362-234220",
      email: "bdo.lambhua@up.gov.in",
      timing: "प्रातः 10:00 से सायं 05:00",
      area: "ब्लॉक कार्यालय, लंभुआ"
    }
  ];

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "85vh", padding: "50px 0 90px 0" }}>
      <div className="container">

        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#b45309", fontWeight: 700 }}>संपर्क एवं सुझाव (Contact & Suggestions)</span>
        </div>

        {/* Page Top Header */}
        <div style={{ maxWidth: "820px", margin: "0 auto 36px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe", color: "#1e40af" }}>
            <Building size={16} />
            <span>ग्राम पंचायत सचिवालय गरायें (लंभुआ)</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0e3d28", lineHeight: 1.2, marginBottom: "12px" }}>
            संपर्क सूत्र, आधिकारिक ईमेल एवं नागरिक सुझाव फॉर्म
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.6 }}>
            ग्राम सचिवालय गरायें, जनपद सुल्तानपुर (उ.प्र. - 227304) से संपर्क करें, आपातकालीन सेवाएं प्राप्त करें अथवा गाँव के विकास हेतु अपने बहुमूल्य सुझाव भेजें।
          </p>
        </div>

        {/* Key Info Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px", marginBottom: "36px" }}>

          <div className="card-vip" style={{ padding: "24px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#fef3c7", color: "#b45309", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <MapPin size={22} />
            </div>
            <strong style={{ fontSize: "1.05rem", color: "#0e3d28", display: "block", marginBottom: "4px" }}>
              सचिवालय कार्यालय का पता
            </strong>
            <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
              ग्राम पंचायत सचिवालय गरायें, मुख्य मार्ग, विकास खंड लंभुआ, जनपद सुल्तानपुर (उ.प्र.) - <strong>पिन: 227304</strong>
            </p>
          </div>

          <div className="card-vip" style={{ padding: "24px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#ecfdf5", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <Mail size={22} />
            </div>
            <strong style={{ fontSize: "1.05rem", color: "#0e3d28", display: "block", marginBottom: "4px" }}>
              आधिकारिक ईमेल पते
            </strong>
            <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
              सचिवालय: <strong>contact@garayen.up.gov.in</strong><br />
              ग्राम प्रधान: <strong>pradhan.garayen@up.gov.in</strong>
            </p>
          </div>

          <div className="card-vip" style={{ padding: "24px" }}>
            <div style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#fee2e2", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <PhoneCall size={22} />
            </div>
            <strong style={{ fontSize: "1.05rem", color: "#0e3d28", display: "block", marginBottom: "4px" }}>
              हेल्पलाइन व जनसुनवाई समय
            </strong>
            <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
              टोल-फ्री: <strong>1800-227-GARAYEN</strong><br />
              <span style={{ color: "#d97706", fontWeight: 700 }}>प्रत्येक सोमवार: साप्ताहिक जनसुनवाई</span>
            </p>
          </div>

        </div>

        {/* 2-Columns: Suggestions Form & Emergency Directory */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "30px", marginBottom: "40px" }}>

          {/* Column 1: Citizen Suggestion Form */}
          <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "32px", border: "1.5px solid #e7dfcc", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid #f3ece0", paddingBottom: "12px", marginBottom: "20px" }}>
              <MessageSquare size={20} color="#0e3d28" />
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", margin: 0 }}>
                गाँव के विकास हेतु सुझाव भेजें (Suggestion Form)
              </h3>
            </div>

            {isSent ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#dcfce7", color: "#15803d", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px auto" }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#0e3d28", marginBottom: "6px" }}>
                  आपका सुझाव प्राप्त हो गया है!
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", maxWidth: "420px", margin: "0 auto 18px auto" }}>
                  गरायें गाँव के विकास में आपकी सहभागिता के लिए धन्यवाद। ग्राम प्रधान व सचिव महोदय आपके सुझाव की समीक्षा करेंगे।
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSent(false);
                    setSenderName("");
                    setSenderPhone("");
                    setSenderEmail("");
                    setSenderSubject("");
                    setSenderMessage("");
                  }}
                  className="btn btn-primary"
                  style={{ padding: "8px 20px", fontSize: "0.85rem", borderRadius: "8px" }}
                >
                  अन्य सुझाव भेजें
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1f2937", marginBottom: "4px" }}>
                      आपका शुभ नाम *
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="उदा. रमेश कुमार"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1f2937", marginBottom: "4px" }}>
                      मोबाइल नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="98XXXXXXXX"
                      style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1f2937", marginBottom: "4px" }}>
                    ईमेल आईडी (वैकल्पिक)
                  </label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@example.com"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1f2937", marginBottom: "4px" }}>
                    सुझाव का विषय (Subject) *
                  </label>
                  <input
                    type="text"
                    required
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder="उदा. प्राथमिक विद्यालय 1917 में कंप्यूटर लैब स्थापना"
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", outline: "none" }}
                  />
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#1f2937", marginBottom: "4px" }}>
                    विस्तृत सुझाव / संदेश *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder="कृपया गरायें गाँव के विकास, स्वच्छता अथवा शिक्षा हेतु अपना सुझाव लिखें..."
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1.5px solid #d1d5db", fontSize: "0.9rem", resize: "vertical", outline: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px", fontSize: "0.95rem", borderRadius: "10px", backgroundColor: "#0e3d28" }}
                >
                  <Send size={15} />
                  <span>सुझाव प्रेषित करें</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 2: 24x7 Emergency Directory & Officials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Emergency Hotlines */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "26px", border: "1.5px solid #e7dfcc", boxShadow: "0 8px 24px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid #f3ece0", paddingBottom: "10px", marginBottom: "16px" }}>
                <ShieldAlert size={18} color="#b91c1c" />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0e3d28", margin: 0 }}>
                  24x7 आपातकालीन नंबर (Emergency)
                </h4>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                {emergencyContacts.map((em, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", backgroundColor: "#fef2f2", border: "1px solid #fee2e2", borderRadius: "10px" }}>
                    <div>
                      <strong style={{ fontSize: "0.88rem", color: "#991b1b", display: "block" }}>{em.name}</strong>
                      <span style={{ fontSize: "0.74rem", color: "#6b7280" }}>{em.desc}</span>
                    </div>
                    <a
                      href={`tel:${em.number.split(" / ")[0]}`}
                      style={{ backgroundColor: "#dc2626", color: "#ffffff", padding: "5px 12px", borderRadius: "6px", fontSize: "0.82rem", fontWeight: 800, textDecoration: "none" }}
                    >
                      {em.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Officials Directory */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "26px", border: "1.5px solid #e7dfcc", boxShadow: "0 8px 24px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", borderBottom: "1.5px solid #f3ece0", paddingBottom: "10px", marginBottom: "14px" }}>
                <UserCheck size={18} color="#0e3d28" />
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0e3d28", margin: 0 }}>
                  प्रशासनिक पदाधिकारी डायरेक्टरी
                </h4>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {adminDirectory.map((off, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", borderRadius: "10px" }}>
                    <div>
                      <span style={{ fontSize: "0.72rem", color: "#d97706", fontWeight: 700, textTransform: "uppercase" }}>{off.role}</span>
                      <strong style={{ fontSize: "0.95rem", color: "#0e3d28", display: "block" }}>{off.name}</strong>
                      <span style={{ fontSize: "0.74rem", color: "#6b7280" }}>{off.email}</span>
                    </div>
                    <a
                      href={`tel:${off.phone}`}
                      className="btn btn-secondary"
                      style={{ padding: "6px 12px", fontSize: "0.8rem", borderRadius: "6px", borderColor: "#0e3d28", color: "#0e3d28" }}
                    >
                      <Phone size={12} />
                      <span>कॉल करें</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
