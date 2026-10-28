"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Building, 
  MapPin, 
  Users, 
  Wheat, 
  ShieldCheck, 
  GraduationCap, 
  HeartHandshake, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  Sparkles,
  TreePine,
  Train,
  Droplets,
  Sun
} from "lucide-react";

export default function GavJankariPage() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"admin" | "demo" | "agri" | "infra">("admin");

  const wards = [
    { no: 1, name: "मुख्य प्रवेश द्वार टोला", rep: "श्री कमलेश कुमार यादव", households: "48 परिवार" },
    { no: 2, name: "पुराना बाज़ार टोला", rep: "श्री दिनेश कुमार गुप्ता", households: "52 परिवार" },
    { no: 3, name: "शिव मंदिर टोला", rep: "श्रीमती सुनैना देवी", households: "55 परिवार" },
    { no: 4, name: "बड़का टोला", rep: "श्री रामसूरत वर्मा", households: "60 परिवार" },
    { no: 5, name: "अमृत सरोवर टोला", rep: "श्री शिवकुमार निषाद", households: "46 परिवार" },
    { no: 6, name: "प्राथमिक विद्यालय मार्ग (1917)", rep: "श्री संतोष कुमार तिवारी", households: "50 परिवार" },
    { no: 7, name: "गढ़ी टोला", rep: "श्री अवधेश प्रताप सिंह", households: "44 परिवार" },
    { no: 8, name: "पूरब टोला", rep: "श्रीमती उर्मिला देवी", households: "47 परिवार" },
    { no: 9, name: "नहर पुलिया टोला", rep: "श्री रामअवतार यादव", households: "42 परिवार" },
    { no: 10, name: "पश्चिम टोला", rep: "श्री राजेश कुमार वर्मा", households: "49 परिवार" },
    { no: 11, name: "दक्षिणी सीमा टोला", rep: "श्री रामसुंदर बिंद", households: "47 परिवार" },
  ];

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "85vh", padding: "50px 0 90px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#b45309", fontWeight: 700 }}>गरायें गाँव की सम्पूर्ण जानकारी</span>
        </div>

        {/* Top Header */}
        <div style={{ maxWidth: "860px", margin: "0 auto 36px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#ecfdf5", borderColor: "#a7f3d0", color: "#065f46" }}>
            <Building size={16} />
            <span>आधिकारिक ग्राम पंचायत गजट 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0e3d28", lineHeight: 1.2, marginBottom: "12px" }}>
            ग्राम पंचायत गरायें (लंभुआ, सुल्तानपुर) - सम्पूर्ण परिचय
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.6 }}>
            उत्तर प्रदेश के सुल्तानपुर जनपद की लंभुआ तहसील अंतर्गत स्थित गरायें गाँव का आधिकारिक प्रशासनिक, जनसांख्यिकीय, कृषि एवं विकास विवरण।
          </p>
        </div>

        {/* Big Highlight Banner with Real Image */}
        <div 
          style={{ 
            position: "relative", 
            borderRadius: "24px", 
            overflow: "hidden", 
            height: "360px", 
            marginBottom: "40px", 
            border: "2px solid #e7dfcc",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)"
          }}
        >
          <Image
            src="/images/dwar.jpg"
            alt="Gram Panchayat Garayen Swagat Dwar"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,37,23,0.92) 0%, rgba(7,37,23,0.3) 60%, transparent 100%)" }} />
          
          <div style={{ position: "absolute", bottom: "30px", left: "30px", right: "30px", color: "#ffffff" }}>
            <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700, display: "inline-block", marginBottom: "8px" }}>
              पिन कोड: 227304 | विधानसभा: 190 लंभुआ
            </span>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, margin: "0 0 6px 0" }}>
              ग्राम पंचायत गरायें (Garayen / Garawa)
            </h2>
            <p style={{ margin: 0, fontSize: "0.95rem", color: "#f3f4f6", maxWidth: "700px", lineHeight: 1.5 }}>
              1917 से स्थापित ऐतिहासिक प्राथमिक विद्यालय, पावन गोमती तट (धोपाप धाम), प्राचीन सिद्धेश्वर महादेव मंदिर और साप्ताहिक हाट बाज़ार से समृद्ध आदर्श गाँव।
            </p>
          </div>
        </div>

        {/* Key At-a-Glance Fact Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {[
            { label: "तहसील / ब्लॉक", val: "लंभुआ (Lambhua)", sub: "दूरी: ~5 किमी" },
            { label: "जिला मुख्यालय", val: "सुल्तानपुर (Sultanpur)", sub: "दूरी: ~24 किमी" },
            { label: "कुल जनसंख्या (2026)", val: "3,850+ नागरिक", sub: "540+ परिवार" },
            { label: "साक्षरता दर", val: "76.8%", sub: "प्रा.वि. स्थापना 1917" },
            { label: "कुल वार्ड", val: "11 वार्ड / टोले", sub: "100% विद्युतीकृत" },
            { label: "डाकघर (Post Office)", val: "शाखा डाकघर गरायें", sub: "पिन: 227304" },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#ffffff", border: "1.5px solid #e7dfcc", borderRadius: "16px", padding: "18px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <span style={{ fontSize: "0.78rem", color: "#6b7280", fontWeight: 600, display: "block" }}>{item.label}</span>
              <strong style={{ fontSize: "1.25rem", color: "#0e3d28", display: "block", margin: "4px 0 2px 0" }}>{item.val}</strong>
              <span style={{ fontSize: "0.75rem", color: "#b45309", fontWeight: 600 }}>{item.sub}</span>
            </div>
          ))}
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
          {[
            { id: "admin", label: "प्रशासनिक व भौगोलिक स्थिति", icon: MapPin },
            { id: "demo", label: "11 वार्ड व जनसांख्यिकी", icon: Users },
            { id: "agri", label: "कृषि, बागवानी व बाज़ार", icon: Wheat },
            { id: "infra", label: "स्कूल, आंगनबाड़ी व अस्पताल", icon: GraduationCap },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 22px",
                  borderRadius: "25px",
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: isActive ? "2px solid #0e3d28" : "1.5px solid #d1cebe",
                  backgroundColor: isActive ? "#0e3d28" : "#ffffff",
                  color: isActive ? "#fbbf24" : "#374151",
                  boxShadow: isActive ? "0 6px 18px rgba(14,61,40,0.2)" : "none"
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Administrative Details */}
        {activeTab === "admin" && (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "34px", border: "1.5px solid #e7dfcc", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0e3d28", marginBottom: "18px" }}>
              प्रशासनिक एवं भौगोलिक परिचय
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "26px" }}>
              <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "18px", borderRadius: "14px" }}>
                <strong style={{ fontSize: "0.95rem", color: "#0e3d28", display: "block", marginBottom: "10px" }}>
                  🏛️ शासन एवं प्रशासनिक संरचना
                </strong>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem", color: "#4b5563", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li><strong>गाँव का नाम:</strong> गरायें (Garayen / Garawa)</li>
                  <li><strong>ग्राम पंचायत:</strong> गरायें</li>
                  <li><strong>विकास खंड (Block):</strong> लंभुआ</li>
                  <li><strong>तहसील:</strong> लंभुआ</li>
                  <li><strong>जनपद:</strong> सुल्तानपुर (उत्तर प्रदेश)</li>
                  <li><strong>पिन कोड:</strong> 227304</li>
                  <li><strong>विधानसभा:</strong> 190 लंभुआ (विधायक: श्री सीताराम वर्मा - BJP)</li>
                  <li><strong>संसदीय क्षेत्र:</strong> सुल्तानपुर (सांसद: श्री रामभुआल निषाद - सपा 2024)</li>
                </ul>
              </div>

              <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "18px", borderRadius: "14px" }}>
                <strong style={{ fontSize: "0.95rem", color: "#0e3d28", display: "block", marginBottom: "10px" }}>
                  📍 भौगोलिक स्थिति व आवागमन
                </strong>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "0.9rem", color: "#4b5563", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <li><strong>निकटतम शहर:</strong> लंभुआ (5 किमी) एवं सुल्तानपुर (24 किमी)</li>
                  <li><strong>निकटतम हाईवे:</strong> NH-731 (लखनऊ-वाराणसी राष्ट्रीय राजमार्ग)</li>
                  <li><strong>निकटतम रेलवे स्टेशन:</strong> लंभुआ रेलवे स्टेशन (LBA - 5 किमी)</li>
                  <li><strong>जंक्शन रेलवे स्टेशन:</strong> सुल्तानपुर जंक्शन (SLN - 24 किमी)</li>
                  <li><strong>पवित्र नदी:</strong> गोमती नदी (धोपाप धाम तीर्थ परिक्षेत्र)</li>
                  <li><strong>जलवायु:</strong> समशीतोष्ण, उपजाऊ गंगा-गोमती कछार क्षेत्र</li>
                </ul>
              </div>
            </div>

            <div style={{ backgroundColor: "#eff6ff", border: "1.5px solid #bfdbfe", padding: "18px", borderRadius: "14px" }}>
              <strong style={{ color: "#1e40af", fontSize: "0.95rem", display: "block", marginBottom: "4px" }}>
                ग्राम पंचायत सचिवालय संपर्क:
              </strong>
              <p style={{ margin: 0, fontSize: "0.88rem", color: "#1e3a8a", lineHeight: 1.5 }}>
                ग्राम सचिवालय गरायें, मुख्य मार्ग, विकास खंड लंभुआ, सुल्तानपुर (227304) | हेल्पलाइन: 1800-227-GARAYEN | ईमेल: contact@garayen.up.gov.in
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: 11 Wards & Demographics */}
        {activeTab === "demo" && (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "34px", border: "1.5px solid #e7dfcc", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}>
              <div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0e3d28", margin: 0 }}>
                  ग्राम पंचायत गरायें के समस्त 11 वार्ड
                </h3>
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                  कुल 540+ परिवार एवं 3,850+ नागरिक
                </span>
              </div>
              <span style={{ backgroundColor: "#dcfce7", color: "#15803d", padding: "4px 12px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700 }}>
                11 निर्वाचित वार्ड सदस्य
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {wards.map((w) => (
                <div key={w.no} style={{ backgroundColor: "#fdfbf7", border: "1.5px solid #f1ece1", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                    <span style={{ backgroundColor: "#0e3d28", color: "#fbbf24", padding: "2px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 800 }}>
                      वार्ड नं. {w.no}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>{w.households}</span>
                  </div>
                  <strong style={{ fontSize: "0.95rem", color: "#0e3d28", display: "block" }}>{w.name}</strong>
                  <span style={{ fontSize: "0.8rem", color: "#b45309", fontWeight: 600 }}>वार्ड प्रतिनिधि: {w.rep}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Agriculture & Market */}
        {activeTab === "agri" && (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "34px", border: "1.5px solid #e7dfcc", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0e3d28", marginBottom: "16px" }}>
              कृषि, बागवानी एवं ग्रामीण अर्थव्यवस्था
            </h3>
            <p style={{ color: "#4b5563", fontSize: "1rem", lineHeight: 1.6, marginBottom: "24px" }}>
              गरायें गाँव की भूमि अत्यंत उपजाऊ है। शारदा सहायक नहर प्रणाली और राजकीय नलकूपों के कारण यहाँ वर्ष भर तीन फसलें (रबी, खरीफ व जायद) उगाई जाती हैं।
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
              <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "20px", borderRadius: "14px" }}>
                <strong style={{ fontSize: "1.05rem", color: "#0e3d28", display: "block", marginBottom: "8px" }}>
                  🌾 प्रमुख फसलें
                </strong>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  गेहूं, धान (बासमती व सांभा), लाही (सरसों), चना, मटर, उड़द और हरी मौसमी सब्जियां। 520 से अधिक पंजीकृत किसान पीएम किसान सम्मान निधि का लाभ प्राप्त कर रहे हैं।
                </p>
              </div>

              <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "20px", borderRadius: "14px" }}>
                <strong style={{ fontSize: "1.05rem", color: "#0e3d28", display: "block", marginBottom: "8px" }}>
                  🥭 आम के बगीचे
                </strong>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  गरायें गाँव के चारों ओर दशहरी, लंगड़ा, चौंसा और मल्लिका आम के घने बगीचे हैं, जिनकी सुगंध गर्मियों में पूरे गाँव को महकाती है।
                </p>
              </div>

              <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "20px", borderRadius: "14px" }}>
                <strong style={{ fontSize: "1.05rem", color: "#0e3d28", display: "block", marginBottom: "8px" }}>
                  🛍️ साप्ताहिक हाट बाज़ार
                </strong>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                  प्रत्येक मंगलवार और शुक्रवार को लंभुआ-गरायें का साप्ताहिक किसान बाज़ार सजता है, जहां की शुद्ध देसी घी की जलेबी क्षेत्र में प्रसिद्ध है।
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: School, Anganwadi, Hospital */}
        {activeTab === "infra" && (
          <div style={{ backgroundColor: "#ffffff", borderRadius: "20px", padding: "34px", border: "1.5px solid #e7dfcc", boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#0e3d28", marginBottom: "20px" }}>
              शिक्षा, बाल विकास एवं स्वास्थ्य सुविधाएं
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "24px" }}>
              
              {/* Primary School Card */}
              <div style={{ backgroundColor: "#fdfbf7", border: "1.5px solid #e7dfcc", borderRadius: "16px", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "180px", width: "100%" }}>
                  <Image src="/images/school.jpg" alt="Primary School Garayen 1917" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "18px" }}>
                  <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "2px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>
                    स्थापना वर्ष: 1917 ई. (109 वर्ष प्राचीन)
                  </span>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0e3d28", margin: "6px 0 6px 0" }}>
                    प्राथमिक विद्यालय गरायें (Ps Garayen)
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#4b5563", margin: "0 0 10px 0" }}>
                    स्थान: मुख्य मार्ग गरायें | प्रधानाध्यापक: श्री अरविंद कुमार वर्मा
                  </p>
                  <span style={{ fontSize: "0.82rem", color: "#0e3d28", fontWeight: 700 }}>
                    📞 संपर्क: +91 94500 23456
                  </span>
                </div>
              </div>

              {/* Anganwadi Card */}
              <div style={{ backgroundColor: "#fdfbf7", border: "1.5px solid #e7dfcc", borderRadius: "16px", overflow: "hidden" }}>
                <div style={{ position: "relative", height: "180px", width: "100%" }}>
                  <Image src="/images/anganwadi.jpg" alt="Anganwadi Kendra Garayen" fill style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "18px" }}>
                  <span style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "2px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>
                    महिला एवं बाल विकास विभाग
                  </span>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0e3d28", margin: "6px 0 6px 0" }}>
                    आंगनबाड़ी केंद्र गरायें (वार्ड 3 व 6)
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#4b5563", margin: "0 0 10px 0" }}>
                    स्थान: शिव मंदिर टोला व प्रा.वि. परिसर | कार्यकत्री: श्रीमती अनीता देवी
                  </p>
                  <span style={{ fontSize: "0.82rem", color: "#0e3d28", fontWeight: 700 }}>
                    📞 संपर्क: +91 97920 34567
                  </span>
                </div>
              </div>

              {/* Hospital Card */}
              <div style={{ backgroundColor: "#fdfbf7", border: "1.5px solid #e7dfcc", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ backgroundColor: "#fee2e2", color: "#b91c1c", padding: "2px 8px", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>
                    24x7 आपातकालीन स्वास्थ्य सेवा
                  </span>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0e3d28", margin: "8px 0 8px 0" }}>
                    सामुदायिक स्वास्थ्य केंद्र (CHC) लंभुआ
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#4b5563", margin: "0 0 12px 0", lineHeight: 1.5 }}>
                    गरायें से 5 किमी की दूरी पर स्थित मुख्य सरकारी अस्पताल। प्रसव सेवा, पैथोलॉजी लैब, ओपीडी, इमरजेंसी वार्ड एवं 108 एम्बुलेंस सुविधा।
                  </p>
                  <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", padding: "10px", borderRadius: "10px", marginBottom: "12px" }}>
                    <strong style={{ fontSize: "0.85rem", color: "#991b1b", display: "block" }}>
                      🚨 24 घंटे एम्बुलेंस: 108 / 102
                    </strong>
                    <span style={{ fontSize: "0.8rem", color: "#7f1d1d" }}>
                      अस्पताल फोन: 05362-234102
                    </span>
                  </div>
                </div>

                <a
                  href="tel:108"
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "10px", fontSize: "0.88rem", borderRadius: "8px", backgroundColor: "#b91c1c" }}
                >
                  <Phone size={14} />
                  <span>एम्बुलेंस (108) तुरंत कॉल करें</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
