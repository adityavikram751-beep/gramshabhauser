"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  Building,
  UserCheck,
  PhoneCall,
  MessageSquare,
  Phone
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
    { 
      name: lang === "hi" ? "कोतवाली लंभुआ (पुलिस)" : "Kotwali Lambhua (Police)", 
      number: "112 / 05362-234100", 
      desc: lang === "hi" ? "24 घंटे आपातकालीन पुलिस सुरक्षा एवं कानून व्यवस्था" : "24/7 Emergency police protection and law enforcement" 
    },
    { 
      name: lang === "hi" ? "सामुदायिक स्वास्थ्य केंद्र (CHC) लंभुआ" : "Community Health Centre (CHC) Lambhua", 
      number: "108 / 05362-234102", 
      desc: lang === "hi" ? "सरकारी अस्पताल, इमरजेंसी वार्ड व 24 घंटे 108 एम्बुलेंस" : "Government hospital, 24/7 emergency & 108 ambulance" 
    },
    { 
      name: lang === "hi" ? "विद्युत उपकेंद्र लंभुआ (बिजली हेल्पलाइन)" : "Electricity Substation Lambhua", 
      number: "1912 / 94159-01234", 
      desc: lang === "hi" ? "बिजली आपूर्ति, ट्रांसफार्मर खराबी व लाइन फॉल्ट शिकायत" : "Power breakdown, transformer fault & line complaints" 
    },
    { 
      name: lang === "hi" ? "महिला सुरक्षा हेल्पलाइन (UP 1090)" : "Women Safety Helpline (UP 1090)", 
      number: "1090", 
      desc: lang === "hi" ? "महिला सुरक्षा, परामर्श व त्वरित गोपनीय सहायता" : "Women protection, counseling & confidential response" 
    },
    { 
      name: lang === "hi" ? "चाइल्ड हेल्पलाइन (Childline 1098)" : "Child Protection Helpline (1098)", 
      number: "1098", 
      desc: lang === "hi" ? "अनाथ, असहाय बच्चों के संरक्षण व आपातकालीन मदद" : "Protection and emergency rescue for vulnerable children" 
    },
    { 
      name: lang === "hi" ? "अग्निशमन केंद्र (फायर स्टेशन) सुल्तानपुर" : "Fire Station Sultanpur", 
      number: "101 / 05362-240101", 
      desc: lang === "hi" ? "आग लगने पर त्वरित दमकल एवं आपदा प्रबंधन सेवा" : "Emergency fire brigade and disaster response team" 
    },
  ];

  const adminDirectory = [
    {
      role: lang === "hi" ? "ग्राम प्रधान (प्रथम नागरिक)" : "Village Head (Gram Pradhan)",
      name: lang === "hi" ? "श्री नीरव सिंह" : "Shri Neerav Singh",
      phone: "+91 94510 24891",
      email: "pradhan.garayen@up.gov.in",
      timing: lang === "hi" ? "प्रातः 09:00 से 01:00 (सचिवालय)" : "09:00 AM - 01:00 PM (Secretariat)",
      area: lang === "hi" ? "ग्राम पंचायत गरायें, पिन: 227304" : "Gram Panchayat Garayen, PIN: 227304"
    },
    {
      role: lang === "hi" ? "ग्राम विकास अधिकारी (Panchayat Sachiv)" : "Panchayat Secretary (VDO)",
      name: lang === "hi" ? "श्री मनोज कुमार तिवारी" : "Shri Manoj Kumar Tiwari",
      phone: "+91 91250 45678",
      email: "sachiv.garayen@up.gov.in",
      timing: lang === "hi" ? "सोमवार व गुरुवार (सचिवालय दिवस)" : "Monday & Thursday (Secretariat Days)",
      area: lang === "hi" ? "विकास खंड लंभुआ" : "Lambhua Block Development"
    },
    {
      role: lang === "hi" ? "राजस्व लेखपाल" : "Revenue Inspector (Lekhpal)",
      name: lang === "hi" ? "श्री आनन्द वर्मा" : "Shri Anand Verma",
      phone: "+91 94500 12345",
      email: "lekhpal.lambhua@up.gov.in",
      timing: lang === "hi" ? "तहसील दिवस व प्रत्येक बुधवार" : "Tehsil Diwas & Every Wednesday",
      area: lang === "hi" ? "राजस्व वृत्त गरायें, तहसील लंभुआ" : "Revenue Circle Garayen, Lambhua"
    },
    {
      role: lang === "hi" ? "खंड विकास अधिकारी (BDO, लंभुआ)" : "Block Development Officer (BDO)",
      name: lang === "hi" ? "श्री के. पी. सिंह" : "Shri K. P. Singh",
      phone: "05362-234220",
      email: "bdo.lambhua@up.gov.in",
      timing: lang === "hi" ? "प्रातः 10:00 से सायं 05:00" : "10:00 AM - 05:00 PM",
      area: lang === "hi" ? "ब्लॉक कार्यालय, लंभुआ" : "Block Headquarters, Lambhua"
    }
  ];

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
            {lang === "hi" ? "संपर्क एवं सुझाव (Contact & Suggestions)" : "Contact & Citizen Directory"}
          </span>
        </div>

        {/* Page Top Header */}
        <div style={{ maxWidth: "820px", margin: "0 auto 32px auto", textAlign: "center" }}>
          <div className="vip-badge">
            <Building size={16} />
            <span>{lang === "hi" ? "ग्राम पंचायत सचिवालय गरायें (लंभुआ)" : "Gram Panchayat Secretariat Garayen"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#78350f", lineHeight: 1.25, marginBottom: "12px" }}>
            {lang === "hi" ? "संपर्क सूत्र, आधिकारिक ईमेल एवं नागरिक सुझाव फॉर्म" : "Contact Directory, Official Email & Citizen Feedback"}
          </h1>
          <p style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)", color: "#5a4225", lineHeight: 1.6 }}>
            {lang === "hi"
              ? "ग्राम सचिवालय गरायें, जनपद सुल्तानपुर (उ.प्र. - 227304) से संपर्क करें, आपातकालीन सेवाएं प्राप्त करें अथवा गाँव के विकास हेतु अपने बहुमूल्य सुझाव भेजें।"
              : "Reach out to the Garayen Panchayat Secretariat, connect with 24/7 emergency helplines, or submit suggestions for village progress."}
          </p>
        </div>

        {/* Key Info Cards - Responsive */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", gap: "16px", marginBottom: "32px" }}>

          <div className="card-vip" style={{ padding: "20px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "#fef3c7", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <MapPin size={22} />
            </div>
            <strong style={{ fontSize: "1.02rem", color: "#78350f", display: "block", marginBottom: "4px" }}>
              {lang === "hi" ? "सचिवालय कार्यालय का पता" : "Secretariat Office Address"}
            </strong>
            <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
              {lang === "hi"
                ? "ग्राम पंचायत सचिवालय गरायें, मुख्य मार्ग, विकास खंड लंभुआ, जनपद सुल्तानपुर (उ.प्र.) - पिन: 227304"
                : "Gram Panchayat Secretariat Garayen, Main Road, Lambhua Block, Sultanpur (UP) - PIN: 227304"}
            </p>
          </div>

          <div className="card-vip" style={{ padding: "20px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "#fffbeb", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <Mail size={22} />
            </div>
            <strong style={{ fontSize: "1.02rem", color: "#78350f", display: "block", marginBottom: "4px" }}>
              {lang === "hi" ? "आधिकारिक ईमेल पते" : "Official Email Addresses"}
            </strong>
            <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
              {lang === "hi" ? "सचिवालय:" : "Secretariat:"} <strong>contact@garayen.up.gov.in</strong><br />
              {lang === "hi" ? "ग्राम प्रधान:" : "Village Head:"} <strong>pradhan.garayen@up.gov.in</strong>
            </p>
          </div>

          <div className="card-vip" style={{ padding: "20px" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", backgroundColor: "#fef3c7", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px" }}>
              <PhoneCall size={22} />
            </div>
            <strong style={{ fontSize: "1.02rem", color: "#78350f", display: "block", marginBottom: "4px" }}>
              {lang === "hi" ? "हेल्पलाइन व जनसुनवाई समय" : "Helpline & Public Grievance Hours"}
            </strong>
            <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
              {lang === "hi" ? "टोल-फ्री:" : "Toll-Free:"} <strong>1800-227-GARAYEN</strong><br />
              <span style={{ color: "#d97706", fontWeight: 700 }}>
                {lang === "hi" ? "प्रत्येक सोमवार: साप्ताहिक जनसुनवाई" : "Every Monday: Public Grievance Day"}
              </span>
            </p>
          </div>

        </div>

        {/* 2-Column Section: Suggestion Form & Directory */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "28px", marginBottom: "40px" }}>

          {/* Left: Citizen Suggestion Form */}
          <div className="card-vip" style={{ padding: "clamp(20px, 4vw, 32px)", border: "1.5px solid #fde68a" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <MessageSquare size={22} color="#d97706" />
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#78350f", margin: 0 }}>
                {lang === "hi" ? "गाँव विकास सुझाव एवं संदेश प्रेषण" : "Submit Village Development Suggestions"}
              </h2>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#5a4225", lineHeight: 1.5, marginBottom: "20px" }}>
              {lang === "hi" 
                ? "गाँव के विकास अथवा किसी सेवा के संबंध में अपना विचार या संदेश सीधे साझा करें।"
                : "Share your constructive ideas or feedback directly with the Gram Panchayat Secretariat."}
            </p>

            {isSent ? (
              <div style={{ backgroundColor: "#ecfdf5", border: "1.5px solid #a7f3d0", padding: "26px", borderRadius: "16px", textAlign: "center" }}>
                <CheckCircle2 size={46} color="#16a34a" style={{ margin: "0 auto 12px auto" }} />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#166534", marginBottom: "6px" }}>
                  {lang === "hi" ? "आपका सुझाव सफलतापूर्वक दर्ज कर लिया गया है!" : "Your Suggestion Has Been Received!"}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#15803d", margin: "0 0 16px 0" }}>
                  {lang === "hi"
                    ? "ग्राम पंचायत सचिवालय आपकी सलाह पर विचार करेगा। जनहित में योगदान के लिए धन्यवाद।"
                    : "The Panchayat Secretariat will review your feedback. Thank you for contributing to our village."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSent(false);
                    setSenderName("");
                    setSenderPhone("");
                    setSenderMessage("");
                  }}
                  className="btn btn-primary"
                  style={{ padding: "8px 20px", fontSize: "0.86rem" }}
                >
                  {lang === "hi" ? "नया सुझाव भेजें" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "आपका नाम *" : "Your Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={lang === "hi" ? "उदा. राहुल कुमार" : "e.g., Rahul Kumar"}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", color: "#451a03" }}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "12px", marginBottom: "14px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                      {lang === "hi" ? "मोबाइल नंबर *" : "Mobile Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="98XXXXXXXX"
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", color: "#451a03" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                      {lang === "hi" ? "ईमेल पता (वैकल्पिक)" : "Email Address (Optional)"}
                    </label>
                    <input
                      type="email"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="email@example.com"
                      style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", color: "#451a03" }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "14px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "विषय" : "Subject"}
                  </label>
                  <input
                    type="text"
                    value={senderSubject}
                    onChange={(e) => setSenderSubject(e.target.value)}
                    placeholder={lang === "hi" ? "उदा. प्राथमिक विद्यालय में वृक्षारोपण सुझाव" : "e.g., Tree Plantation Drive at School"}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", color: "#451a03" }}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#451a03", marginBottom: "6px" }}>
                    {lang === "hi" ? "आपका सुझाव / संदेश *" : "Your Suggestion / Message *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    placeholder={lang === "hi" ? "गाँव के विकास अथवा किसी सेवा के संबंध में अपना विचार या संदेश सीधे साझा करें..." : "Share your constructive ideas or feedback for village development..."}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1.5px solid #fde68a", fontSize: "0.92rem", outline: "none", resize: "vertical", color: "#451a03" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "12px", fontSize: "1rem", borderRadius: "10px" }}
                >
                  <Send size={16} />
                  <span>{lang === "hi" ? "सुझाव प्रेषित करें" : "Submit Suggestion Now"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Emergency & Administrative Contacts */}
          <div>
            {/* Emergency Contacts */}
            <div className="card-vip" style={{ padding: "clamp(18px, 4vw, 26px)", border: "1.5px solid #fde68a", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <PhoneCall size={20} color="#d97706" />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#78350f", margin: 0 }}>
                  {lang === "hi" ? "24x7 आपातकालीन हेल्पलाइन नंबर" : "24/7 Emergency Helpline Directory"}
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                {emergencyContacts.map((c, i) => (
                  <div key={i} style={{ backgroundColor: "#fffdf8", border: "1px solid #fde68a", padding: "10px 14px", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <div>
                      <strong style={{ fontSize: "0.88rem", color: "#451a03", display: "block" }}>{c.name}</strong>
                      <span style={{ fontSize: "0.76rem", color: "#6b7280" }}>{c.desc}</span>
                    </div>
                    <a href={`tel:${c.number.split(" ")[0]}`} style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 10px", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 800, textDecoration: "none" }}>
                      📞 {c.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Administrative Directory */}
            <div className="card-vip" style={{ padding: "clamp(18px, 4vw, 26px)", border: "1.5px solid #fde68a" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <UserCheck size={20} color="#d97706" />
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#78350f", margin: 0 }}>
                  {lang === "hi" ? "सचिवालय प्रशासनिक अधिकारी निर्देशिका" : "Administrative Officers Directory"}
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
                {adminDirectory.map((officer, i) => (
                  <div key={i} style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "12px 14px", borderRadius: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "4px" }}>
                      <span style={{ fontSize: "0.75rem", backgroundColor: "#fef3c7", color: "#92400e", padding: "2px 8px", borderRadius: "8px", fontWeight: 700 }}>
                        {officer.role}
                      </span>
                      <a href={`tel:${officer.phone}`} style={{ fontSize: "0.82rem", color: "#d97706", fontWeight: 800, textDecoration: "none" }}>
                        📞 {officer.phone}
                      </a>
                    </div>
                    <strong style={{ fontSize: "0.95rem", color: "#78350f", display: "block", margin: "4px 0 2px 0" }}>
                      {officer.name}
                    </strong>
                    <span style={{ fontSize: "0.76rem", color: "#5a4225", display: "block" }}>
                      {officer.area} • {officer.timing}
                    </span>
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
