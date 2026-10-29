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
  GraduationCap, 
  Phone,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react";

export default function GavJankariPage() {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"admin" | "demo" | "agri" | "infra">("admin");

  const wards = [
    { 
      no: 1, 
      name: lang === "hi" ? "मुख्य प्रवेश द्वार टोला" : "Main Welcome Gate Hamlet", 
      rep: lang === "hi" ? "श्री कमलेश कुमार यादव" : "Shri Kamlesh Kumar Yadav", 
      households: lang === "hi" ? "48 परिवार" : "48 Households" 
    },
    { 
      no: 2, 
      name: lang === "hi" ? "पुराना बाज़ार टोला" : "Purana Bazaar Hamlet", 
      rep: lang === "hi" ? "श्री दिनेश कुमार गुप्ता" : "Shri Dinesh Kumar Gupta", 
      households: lang === "hi" ? "52 परिवार" : "52 Households" 
    },
    { 
      no: 3, 
      name: lang === "hi" ? "शिव मंदिर टोला" : "Shiv Mandir Hamlet", 
      rep: lang === "hi" ? "श्रीमती सुनैना देवी" : "Smt. Sunaina Devi", 
      households: lang === "hi" ? "55 परिवार" : "55 Households" 
    },
    { 
      no: 4, 
      name: lang === "hi" ? "बड़का टोला" : "Badka Tola Hamlet", 
      rep: lang === "hi" ? "श्री रामसूरत वर्मा" : "Shri Ramsurat Verma", 
      households: lang === "hi" ? "60 परिवार" : "60 Households" 
    },
    { 
      no: 5, 
      name: lang === "hi" ? "अमृत सरोवर टोला" : "Amrit Sarovar Hamlet", 
      rep: lang === "hi" ? "श्री शिवकुमार निषाद" : "Shri Shivkumar Nishad", 
      households: lang === "hi" ? "46 परिवार" : "46 Households" 
    },
    { 
      no: 6, 
      name: lang === "hi" ? "प्राथमिक विद्यालय मार्ग (1917)" : "Primary School Road Hamlet (1917)", 
      rep: lang === "hi" ? "श्री संतोष कुमार तिवारी" : "Shri Santosh Kumar Tiwari", 
      households: lang === "hi" ? "50 परिवार" : "50 Households" 
    },
    { 
      no: 7, 
      name: lang === "hi" ? "गढ़ी टोला" : "Gadhi Tola Hamlet", 
      rep: lang === "hi" ? "श्री अवधेश प्रताप सिंह" : "Shri Awdhesh Pratap Singh", 
      households: lang === "hi" ? "44 परिवार" : "44 Households" 
    },
    { 
      no: 8, 
      name: lang === "hi" ? "पूरब टोला" : "Poorab Tola Hamlet", 
      rep: lang === "hi" ? "श्रीमती उर्मिला देवी" : "Smt. Urmila Devi", 
      households: lang === "hi" ? "47 परिवार" : "47 Households" 
    },
    { 
      no: 9, 
      name: lang === "hi" ? "नहर पुलिया टोला" : "Nahar Puliya Hamlet", 
      rep: lang === "hi" ? "श्री रामअवतार यादव" : "Shri Ramavatar Yadav", 
      households: lang === "hi" ? "42 परिवार" : "42 Households" 
    },
    { 
      no: 10, 
      name: lang === "hi" ? "पश्चिम टोला" : "Paschim Tola Hamlet", 
      rep: lang === "hi" ? "श्री राजेश कुमार वर्मा" : "Shri Rajesh Kumar Verma", 
      households: lang === "hi" ? "49 परिवार" : "49 Households" 
    },
    { 
      no: 11, 
      name: lang === "hi" ? "दक्षिणी सीमा टोला" : "Southern Border Hamlet", 
      rep: lang === "hi" ? "श्री रामसुंदर बिंद" : "Shri Ramsunder Bind", 
      households: lang === "hi" ? "47 परिवार" : "47 Households" 
    },
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
            {lang === "hi" ? "गाँव की सम्पूर्ण जानकारी (Village Info)" : "Village Demographics & Gazette"}
          </span>
        </div>

        {/* Top Header */}
        <div style={{ maxWidth: "860px", margin: "0 auto 32px auto", textAlign: "center" }}>
          <div className="vip-badge">
            <Building size={16} />
            <span>{lang === "hi" ? "आधिकारिक ग्राम पंचायत गजट 2026" : "Official Village Gazette 2026"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#78350f", lineHeight: 1.25, marginBottom: "12px" }}>
            {lang === "hi" ? "ग्राम पंचायत गरायें (लंभुआ, सुल्तानपुर) - सम्पूर्ण परिचय" : "Gram Panchayat Garayen (Lambhua, Sultanpur) - Comprehensive Profile"}
          </h1>
          <p style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)", color: "#5a4225", lineHeight: 1.6 }}>
            {lang === "hi"
              ? "उत्तर प्रदेश के सुल्तानपुर जनपद की लंभुआ तहसील अंतर्गत स्थित गरायें गाँव का आधिकारिक प्रशासनिक, जनसांख्यिकीय, कृषि एवं विकास विवरण।"
              : "Official administrative, demographic, agricultural, and civic development record of Garayen in Lambhua, Sultanpur (UP)."}
          </p>
        </div>

        {/* Big Highlight Banner with Real Image */}
        <div 
          style={{ 
            position: "relative", 
            borderRadius: "22px", 
            overflow: "hidden", 
            height: "clamp(240px, 35vh, 360px)", 
            marginBottom: "36px", 
            border: "2px solid #fde68a",
            boxShadow: "0 15px 40px rgba(217,119,6,0.12)"
          }}
        >
          <Image
            src="/images/dwar.jpg"
            alt="Gram Panchayat Garayen Swagat Dwar"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(41,18,4,0.94) 0%, rgba(41,18,4,0.3) 60%, transparent 100%)" }} />
          
          <div style={{ position: "absolute", bottom: "clamp(16px, 3vw, 28px)", left: "clamp(16px, 3vw, 28px)", right: "clamp(16px, 3vw, 28px)", color: "#ffffff" }}>
            <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.78rem", fontWeight: 700, display: "inline-block", marginBottom: "8px", border: "1px solid #fbbf24" }}>
              {lang === "hi" ? "पिन कोड: 227304 | विधानसभा: 190 लंभुआ" : "PIN Code: 227304 | Assembly: 190 Lambhua"}
            </span>
            <h2 style={{ fontSize: "clamp(1.3rem, 3.2vw, 2.1rem)", fontWeight: 800, margin: "0 0 6px 0" }}>
              {lang === "hi" ? "ग्राम पंचायत गरायें (Garayen / Garawa)" : "Gram Panchayat Garayen (Garawa)"}
            </h2>
            <p style={{ margin: 0, fontSize: "clamp(0.82rem, 1.8vw, 0.95rem)", color: "#fef3c7", maxWidth: "700px", lineHeight: 1.5 }}>
              {lang === "hi"
                ? "1917 से स्थापित ऐतिहासिक प्राथमिक विद्यालय, पावन गोमती तट (धोपाप धाम), प्राचीन सिद्धेश्वर महादेव मंदिर और साप्ताहिक हाट बाज़ार से समृद्ध आदर्श गाँव।"
                : "Historic 1917 Primary School, sacred Gomti banks (Dhopap Dham), ancient Baba Siddheshwar Shiva Temple, and bi-weekly farmers' market."}
            </p>
          </div>
        </div>

        {/* Key At-a-Glance Fact Grid - Responsive */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "14px", marginBottom: "36px" }}>
          {[
            { 
              label: lang === "hi" ? "तहसील / ब्लॉक" : "Tehsil / Block", 
              val: lang === "hi" ? "लंभुआ (Lambhua)" : "Lambhua", 
              sub: lang === "hi" ? "दूरी: ~5 किमी" : "Distance: ~5 km" 
            },
            { 
              label: lang === "hi" ? "जिला मुख्यालय" : "District HQ", 
              val: lang === "hi" ? "सुल्तानपुर (Sultanpur)" : "Sultanpur", 
              sub: lang === "hi" ? "दूरी: ~24 किमी" : "Distance: ~24 km" 
            },
            { 
              label: lang === "hi" ? "कुल जनसंख्या (2026)" : "Total Population (2026)", 
              val: lang === "hi" ? "3,850+ नागरिक" : "3,850+ Residents", 
              sub: lang === "hi" ? "540+ परिवार" : "540+ Households" 
            },
            { 
              label: lang === "hi" ? "साक्षरता दर" : "Literacy Rate", 
              val: "76.8%", 
              sub: lang === "hi" ? "प्रा.वि. स्थापना 1917" : "School Est. 1917" 
            },
            { 
              label: lang === "hi" ? "कुल वार्ड" : "Total Wards", 
              val: lang === "hi" ? "11 वार्ड / टोले" : "11 Wards / Hamlets", 
              sub: lang === "hi" ? "100% विद्युतीकृत" : "100% Electrified" 
            },
            { 
              label: lang === "hi" ? "डाकघर (Post Office)" : "Branch Post Office", 
              val: lang === "hi" ? "शाखा डाकघर गरायें" : "Garayen Post Office", 
              sub: "PIN: 227304" 
            },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#ffffff", border: "1.5px solid #fde68a", borderRadius: "16px", padding: "16px", boxShadow: "var(--shadow-sm)" }}>
              <span style={{ fontSize: "0.76rem", color: "#6b7280", fontWeight: 600, display: "block" }}>{item.label}</span>
              <strong style={{ fontSize: "1.2rem", color: "#78350f", display: "block", margin: "4px 0 2px 0" }}>{item.val}</strong>
              <span style={{ fontSize: "0.74rem", color: "#d97706", fontWeight: 700 }}>{item.sub}</span>
            </div>
          ))}
        </div>

        {/* Tab Switcher - Responsive touch buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
          {[
            { id: "admin", label: lang === "hi" ? "प्रशासनिक व भौगोलिक स्थिति" : "Administration & Geography", icon: MapPin },
            { id: "demo", label: lang === "hi" ? "11 वार्ड व जनसांख्यिकी" : "11 Wards & Demographics", icon: Users },
            { id: "agri", label: lang === "hi" ? "कृषि, बागवानी व बाज़ार" : "Agriculture & Commerce", icon: Wheat },
            { id: "infra", label: lang === "hi" ? "स्कूल, आंगनबाड़ी व अस्पताल" : "Public Facilities", icon: GraduationCap },
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
                  padding: "10px 20px",
                  borderRadius: "25px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: isActive ? "2px solid #d97706" : "1.5px solid #fde68a",
                  backgroundColor: isActive ? "#d97706" : "#ffffff",
                  color: isActive ? "#ffffff" : "#5a4225",
                  boxShadow: isActive ? "0 6px 18px rgba(217,119,6,0.3)" : "none",
                  minHeight: "44px"
                }}
              >
                <Icon size={17} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: Administrative & Geographic Details */}
        {activeTab === "admin" && (
          <div style={{ backgroundColor: "#ffffff", border: "1.5px solid #fde68a", borderRadius: "20px", padding: "clamp(20px, 4vw, 32px)", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#78350f", marginBottom: "16px" }}>
              {lang === "hi" ? "प्रशासनिक संरचना एवं भौगोलिक अवस्थिति" : "Administrative Hierarchy & Location Coordinates"}
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "20px", marginBottom: "24px" }}>
              <div style={{ backgroundColor: "#fffbeb", padding: "16px", borderRadius: "14px", border: "1px solid #fde68a" }}>
                <span style={{ fontSize: "0.78rem", color: "#d97706", fontWeight: 700 }}>
                  {lang === "hi" ? "प्रशासनिक विभाग" : "Administrative Circle"}
                </span>
                <p style={{ margin: "6px 0 0 0", fontSize: "0.92rem", color: "#374151", lineHeight: 1.6 }}>
                  • <strong>{lang === "hi" ? "राज्य:" : "State:"}</strong> {lang === "hi" ? "उत्तर प्रदेश" : "Uttar Pradesh"}<br />
                  • <strong>{lang === "hi" ? "जनपद:" : "District:"}</strong> {lang === "hi" ? "सुल्तानपुर" : "Sultanpur"}<br />
                  • <strong>{lang === "hi" ? "तहसील / ब्लॉक:" : "Tehsil / Block:"}</strong> {lang === "hi" ? "लंभुआ" : "Lambhua"}<br />
                  • <strong>{lang === "hi" ? "थाना / कोतवाली:" : "Police Station:"}</strong> {lang === "hi" ? "कोतवाली लंभुआ (112)" : "Kotwali Lambhua (112)"}
                </p>
              </div>

              <div style={{ backgroundColor: "#fffdf8", padding: "16px", borderRadius: "14px", border: "1px solid #fde68a" }}>
                <span style={{ fontSize: "0.78rem", color: "#d97706", fontWeight: 700 }}>
                  {lang === "hi" ? "निर्वाचन क्षेत्र" : "Constituencies"}
                </span>
                <p style={{ margin: "6px 0 0 0", fontSize: "0.92rem", color: "#374151", lineHeight: 1.6 }}>
                  • <strong>{lang === "hi" ? "विधानसभा:" : "Assembly Constituency:"}</strong> 190 {lang === "hi" ? "लंभुआ (विधायक: श्री सीताराम वर्मा)" : "Lambhua (MLA: Shri Sitaram Verma)"}<br />
                  • <strong>{lang === "hi" ? "संसदीय क्षेत्र:" : "Parliamentary Constituency:"}</strong> 38 {lang === "hi" ? "सुल्तानपुर (सांसद: श्री रामभुआल निषाद)" : "Sultanpur (MP: Shri Rambhual Nishad)"}<br />
                  • <strong>{lang === "hi" ? "डाकघर:" : "Post Office:"}</strong> {lang === "hi" ? "शाखा डाकघर गरायें (पिन: 227304)" : "Garayen Branch Post Office (PIN: 227304)"}
                </p>
              </div>
            </div>

            <p style={{ fontSize: "0.92rem", color: "#5a4225", lineHeight: 1.7, margin: 0 }}>
              {lang === "hi"
                ? "ग्राम पंचायत गरायें, सुल्तानपुर जिला मुख्यालय से दक्षिण-पूर्व दिशा में लगभग 24 किलोमीटर और लंभुआ तहसील से लगभग 5 किलोमीटर की दूरी पर स्थित है। गाँव पक्की डामर सड़क द्वारा लंभुआ मुख्य मार्ग से जुड़ा हुआ है। गाँव में बिजली, पाइपलाइन नल जल, आंगनबाड़ी एवं उच्च प्राथमिक शिक्षा की सुदृढ़ व्यवस्था उपलब्ध है।"
                : "Gram Panchayat Garayen is situated approximately 24 kilometers southeast of Sultanpur district headquarters and 5 kilometers from Lambhua tehsil center. Connected via all-weather paved roads, the village enjoys complete electrification, overhead pipeline water networks, and comprehensive school education facilities."}
            </p>
          </div>
        )}

        {/* TAB 2: 11 Wards & Demographics */}
        {activeTab === "demo" && (
          <div>
            <div style={{ backgroundColor: "#ffffff", border: "1.5px solid #fde68a", borderRadius: "20px", padding: "clamp(20px, 4vw, 32px)", marginBottom: "24px", boxShadow: "var(--shadow-sm)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#78350f", marginBottom: "8px" }}>
                {lang === "hi" ? "ग्राम पंचायत गरायें के समस्त 11 वार्ड / टोले विवरण" : "Detailed Directory of All 11 Wards / Hamlets in Garayen"}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#5a4225", marginBottom: "20px" }}>
                {lang === "hi" 
                  ? "प्रत्येक वार्ड के निर्वाचित सदस्य एवं परिवारों का आधिकारिक विवरण:"
                  : "Elected ward members and household statistics across all 11 wards:"}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "14px" }}>
                {wards.map((w) => (
                  <div key={w.no} style={{ backgroundColor: "#fffdf8", border: "1px solid #fde68a", padding: "14px 18px", borderRadius: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontSize: "0.74rem", backgroundColor: "#d97706", color: "#ffffff", padding: "2px 8px", borderRadius: "10px", fontWeight: 700 }}>
                        {lang === "hi" ? `वार्ड नं. ${w.no}` : `Ward No. ${w.no}`}
                      </span>
                      <strong style={{ fontSize: "0.96rem", color: "#78350f", display: "block", margin: "4px 0 2px 0" }}>
                        {w.name}
                      </strong>
                      <span style={{ fontSize: "0.82rem", color: "#5a4225" }}>
                        {lang === "hi" ? "प्रतिनिधि:" : "Representative:"} {w.rep}
                      </span>
                    </div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#d97706", backgroundColor: "#fef3c7", padding: "4px 10px", borderRadius: "12px", border: "1px solid #fde68a" }}>
                      {w.households}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Agriculture & Market */}
        {activeTab === "agri" && (
          <div style={{ backgroundColor: "#ffffff", border: "1.5px solid #fde68a", borderRadius: "20px", padding: "clamp(20px, 4vw, 32px)", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#78350f", marginBottom: "16px" }}>
              {lang === "hi" ? "कृषि, बागवानी एवं लंभुआ साप्ताहिक हाट बाज़ार" : "Agriculture, Horticulture & Weekly Haat Commerce"}
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "20px", marginBottom: "20px" }}>
              <div style={{ backgroundColor: "#fffbeb", padding: "18px", borderRadius: "14px", border: "1px solid #fde68a" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#78350f", margin: "0 0 8px 0" }}>
                  🌾 {lang === "hi" ? "प्रमुख फसलें एवं कृषि प्रणाली" : "Major Agricultural Crops"}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>
                  • <strong>{lang === "hi" ? "रबी फसल:" : "Rabi (Winter):"}</strong> {lang === "hi" ? "गेहूं, सरसों, चना, मटर, आलू" : "Wheat, Mustard, Gram, Peas, Potato"}<br />
                  • <strong>{lang === "hi" ? "खरीफ फसल:" : "Kharif (Monsoon):"}</strong> {lang === "hi" ? "धान, मक्का, उड़द, तिल, बाजरा" : "Paddy (Rice), Maize, Urad, Sesame"}<br />
                  • <strong>{lang === "hi" ? "जायद फसल:" : "Zaid (Summer):"}</strong> {lang === "hi" ? "सब्जियां, खीरा, तरबूज, हरी खाद" : "Seasonal Greens, Cucumber, Watermelon"}
                </p>
              </div>

              <div style={{ backgroundColor: "#fffdf8", padding: "18px", borderRadius: "14px", border: "1px solid #fde68a" }}>
                <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#78350f", margin: "0 0 8px 0" }}>
                  🥭 {lang === "hi" ? "बागवानी व दुग्ध उत्पादन" : "Horticulture & Dairy"}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>
                  {lang === "hi"
                    ? "गरायें गाँव के लगभग 65 एकड़ क्षेत्र में दशहरी व चौसा आम के समृद्ध बाग हैं। साथ ही 250 से अधिक दुधारू मवेशियों के साथ यहाँ दैनिक 1,200 लीटर से अधिक दूध का उत्पादन होता है।"
                    : "Over 65 acres of Dashahari and Chausa mango orchards flourish in Garayen. A thriving dairy ecosystem produces over 1,200 liters of fresh milk daily."}
                </p>
              </div>
            </div>

            <div style={{ backgroundColor: "#fef3c7", padding: "16px", borderRadius: "12px", border: "1px solid #fde68a" }}>
              <strong style={{ color: "#78350f", fontSize: "0.92rem", display: "block", marginBottom: "4px" }}>
                🍯 {lang === "hi" ? "लंभुआ-गरायें साप्ताहिक हाट बाज़ार:" : "Lambhua-Garayen Bi-Weekly Haat Bazaar:"}
              </strong>
              <span style={{ fontSize: "0.88rem", color: "#5a4225" }}>
                {lang === "hi"
                  ? "प्रत्येक मंगलवार और शुक्रवार को लगने वाला यह बाज़ार किसानों को सीधी बिक्री का अवसर देता है और शुद्ध देसी घी की जलेबी के लिए विख्यात है।"
                  : "Held every Tuesday and Friday, enabling direct farmer-to-consumer sales and celebrated for authentic pure ghee Jalebi sweets."}
              </span>
            </div>
          </div>
        )}

        {/* TAB 4: Public Facilities */}
        {activeTab === "infra" && (
          <div style={{ backgroundColor: "#ffffff", border: "1.5px solid #fde68a", borderRadius: "20px", padding: "clamp(20px, 4vw, 32px)", boxShadow: "var(--shadow-sm)" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#78350f", marginBottom: "16px" }}>
              {lang === "hi" ? "गाँव की प्रमुख सार्वजनिक एवं जनोपयोगी सुविधाएं" : "Public Infrastructure & Essential Services"}
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "16px" }}>
              <div style={{ backgroundColor: "#fffbeb", padding: "16px", borderRadius: "14px", border: "1px solid #fde68a" }}>
                <strong style={{ color: "#78350f", fontSize: "1rem", display: "block", marginBottom: "6px" }}>
                  🏫 1. {lang === "hi" ? "प्राथमिक विद्यालय गरायें (1917)" : "Primary School Garayen (1917)"}
                </strong>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "#5a4225", lineHeight: 1.5 }}>
                  {lang === "hi" ? "स्थान: वार्ड नं. 6 | समय: प्रातः 09:00 से 03:00 | प्रधानाध्यापक संपर्क: +91 94500 23456" : "Location: Ward No. 6 | 09:00 AM - 03:00 PM | Headmaster: +91 94500 23456"}
                </p>
              </div>

              <div style={{ backgroundColor: "#fffdf8", padding: "16px", borderRadius: "14px", border: "1px solid #fde68a" }}>
                <strong style={{ color: "#78350f", fontSize: "1rem", display: "block", marginBottom: "6px" }}>
                  👶 2. {lang === "hi" ? "आंगनबाड़ी केंद्र (वार्ड 3 व 6)" : "Anganwadi Centres (Wards 3 & 6)"}
                </strong>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "#5a4225", lineHeight: 1.5 }}>
                  {lang === "hi" ? "स्थान: शिव मंदिर व स्कूल परिसर | समय: प्रातः 08:30 से 01:00 | संपर्क: +91 97920 34567" : "Location: Temple & School Campus | 08:30 AM - 01:00 PM | Contact: +91 97920 34567"}
                </p>
              </div>

              <div style={{ backgroundColor: "#fffbeb", padding: "16px", borderRadius: "14px", border: "1px solid #fde68a" }}>
                <strong style={{ color: "#78350f", fontSize: "1rem", display: "block", marginBottom: "6px" }}>
                  🏥 3. {lang === "hi" ? "सरकारी अस्पताल (CHC) लंभुआ" : "Government Hospital CHC Lambhua"}
                </strong>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "#5a4225", lineHeight: 1.5 }}>
                  {lang === "hi" ? "स्थान: लंभुआ मुख्य मार्ग (5 किमी) | 24 घंटे आपातकालीन सेवा | एम्बुलेंस: 108" : "Location: Lambhua Main Road (5 km) | 24x7 Emergency Care | Ambulance: 108"}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
