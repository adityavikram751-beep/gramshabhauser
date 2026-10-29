"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  FileText, 
  Users, 
  Sparkles,
  PhoneCall
} from "lucide-react";

export default function YojanaPage() {
  const { t, lang } = useLanguage();
  const [filterCat, setFilterCat] = useState("all");

  const schemes = [
    {
      id: "awas",
      title: lang === "hi" ? "प्रधानमंत्री आवास योजना (ग्रामीण)" : "Pradhan Mantri Awas Yojana (PMAY-G)",
      category: "housing",
      categoryName: lang === "hi" ? "आवास (Housing)" : "Housing Welfare",
      desc: lang === "hi"
        ? "गरायें ग्राम पंचायत के 114 पात्र परिवारों को पक्के आवास निर्माण हेतु ₹1,20,000 की वित्तीय सहायता सीधे बैंक खाते में डीबीटी द्वारा प्रदान की गई। साथ ही ₹12,000 शौचालय निर्माण और 90 दिन की मनरेगा मजदूरी दी जाती है।"
        : "Direct DBT transfer of ₹1,20,000 provided to 114 eligible families in Garayen for pucca house construction, alongside ₹12,000 for sanitation and 90 days MGNREGA wages.",
      benefit: lang === "hi" ? "₹1,20,000 सीधा बैंक में" : "₹1,20,000 Direct Bank Transfer",
      status: lang === "hi" ? "114 लाभार्थी लाभान्वित" : "114 Beneficiaries Supported",
      eligibility: lang === "hi" ? "कच्चे मकान में रहने वाले बीपीएल / पात्र गृहस्थी परिवार।" : "Kutcha house households and eligible BPL rural families.",
      docs: lang === "hi" ? "आधार कार्ड, बैंक पासबुक, जॉब कार्ड, आय प्रमाणपत्र।" : "Aadhaar Card, Bank Passbook, Job Card, Income Certificate."
    },
    {
      id: "jal",
      title: lang === "hi" ? "हर घर जल - जल जीवन मिशन" : "Har Ghar Nal Se Jal - Jal Jeevan Mission",
      category: "water",
      categoryName: lang === "hi" ? "पेयजल (Water)" : "Potable Water Supply",
      desc: lang === "hi"
        ? "लंभुआ विकास खंड के अंतर्गत गरायें के सभी 11 वार्डों में पाइपलाइन द्वारा 24 घंटे शुद्ध पेयजल की आपूर्ति सुनिश्चित की गई है। फ्लोराइड-मुक्त और रोगाणु-मुक्त पानी हर घर तक पहुंच रहा है।"
        : "24/7 treated drinking water supply ensured across all 11 wards of Garayen via an overhead tank pipeline grid under Lambhua Block.",
      benefit: lang === "hi" ? "24x7 शुद्ध नल जल" : "24x7 Treated Tap Water",
      status: lang === "hi" ? "100% पाइपलाइन पूर्ण" : "100% Pipeline Complete",
      eligibility: lang === "hi" ? "ग्राम पंचायत गरायें के सभी निवासी।" : "All permanent households of Gram Panchayat Garayen.",
      docs: lang === "hi" ? "निवास प्रमाण अथवा परिवार रजिस्टर नकल।" : "Proof of Residence or Family Register Record."
    },
    {
      id: "kisan",
      title: lang === "hi" ? "प्रधानमंत्री किसान सम्मान निधि" : "PM Kisan Samman Nidhi Yojana",
      category: "farmer",
      categoryName: lang === "hi" ? "कृषि (Farmer)" : "Farmer Income Support",
      desc: lang === "hi"
        ? "गरायें गाँव के 520+ पंजीकृत किसानों को कृषि लागत, खाद व बीज के लिए प्रतिवर्ष ₹6,00,0 की आर्थिक सहायता (₹2,000 की तीन किस्तों में) सीधे उनके बैंक खातों में दी जा रही है।"
        : "Annual financial support of ₹6,000 in three equal installments transferred directly to 520+ registered farmers in Garayen for fertilizers and seeds.",
      benefit: lang === "hi" ? "₹6,000 प्रति वर्ष" : "₹6,000 Annual Assistance",
      status: lang === "hi" ? "520+ पंजीकृत किसान" : "520+ Registered Farmers",
      eligibility: lang === "hi" ? "कृषि भूमि के पंजीकृत भू-स्वामी किसान (e-KYC अनिवार्य)।" : "Registered landholding farmers with completed e-KYC.",
      docs: lang === "hi" ? "खतौनी नकल, आधार कार्ड, बैंक खाता।" : "Khatauni Land Record, Aadhaar Card, Bank Account."
    },
    {
      id: "solar",
      title: lang === "hi" ? "मुख्यमंत्री सौर ऊर्जा स्ट्रीट लाइट योजना" : "Chief Minister Solar Street Lighting Scheme",
      category: "energy",
      categoryName: lang === "hi" ? "सौर ऊर्जा (Energy)" : "Renewable Solar Energy",
      desc: lang === "hi"
        ? "गरायें स्वागत द्वार, प्राचीन शिव मंदिर परिक्षेत्र, प्राथमिक विद्यालय और मुख्य चौराहों पर 140 से अधिक स्वचालित सोलर स्ट्रीट लाइटें लगाई गई हैं, जो शाम होते ही स्वतः जल उठती हैं।"
        : "Over 140 automated solar street lights installed across Garayen's main entrance, temple road, primary school, and crossroads.",
      benefit: lang === "hi" ? "स्वचालित रात्रि प्रकाश" : "Automated Night Illumination",
      status: lang === "hi" ? "140 सोलर लाइटें स्थापित" : "140 Solar Lights Active",
      eligibility: lang === "hi" ? "सार्वजनिक मार्ग, तिराहे, मंदिर व विद्यालय मार्ग।" : "Public pathways, junctions, shrines and school approach roads.",
      docs: lang === "hi" ? "ग्राम पंचायत अनुमोदन।" : "Panchayat Resolution & Approval."
    },
    {
      id: "mgnrega",
      title: lang === "hi" ? "मनरेगा (MGNREGA) रोजगार गारंटी" : "MGNREGA Rural Employment Guarantee",
      category: "employment",
      categoryName: lang === "hi" ? "रोजगार (Employment)" : "Employment Guarantee",
      desc: lang === "hi"
        ? "अमृत सरोवर तालाब जीर्णोद्धार, चकमार्ग खड़ंजा निर्माण, वृक्षारोपण एवं नाली सफाई कार्यों में गाँव के अकुशल श्रमिकों को 100 दिन का वैधानिक रोजगार एवं समय पर बैंक भुगतान।"
        : "100 days statutory wage employment in lake restoration, brick paving, canal maintenance and plantation works with direct bank payments.",
      benefit: lang === "hi" ? "100 दिन रोजगार गारंटी" : "100 Days Wage Employment",
      status: lang === "hi" ? "सक्रिय जॉब कार्ड धारक" : "Active Job Card Holders",
      eligibility: lang === "hi" ? "18 वर्ष से अधिक आयु के ग्रामीण नागरिक।" : "Adult rural citizens aged 18 and above.",
      docs: lang === "hi" ? "आधार कार्ड, बैंक खाता, 2 फोटो।" : "Aadhaar Card, Bank Passbook, 2 Passport Photos."
    },
    {
      id: "pension",
      title: lang === "hi" ? "वृद्धावस्था / निराश्रित महिला पेंशन योजना" : "Old Age & Destitute Widow Social Pension",
      category: "pension",
      categoryName: lang === "hi" ? "सामाजिक सुरक्षा (Pension)" : "Social Security Pension",
      desc: lang === "hi"
        ? "गरायें के 60 वर्ष से अधिक आयु के वरिष्ठ नागरिकों एवं निराश्रित माताओं को ₹1,000 प्रतिमाह (₹3,000 त्रैमासिक) की सामाजिक पेंशन सीधे बैंक खाते में दी जा रही है।"
        : "Monthly pension of ₹1,000 disbursed quarterly directly into bank accounts of senior citizens aged 60+ and destitute women in Garayen.",
      benefit: lang === "hi" ? "₹1,000 प्रतिमाह पेंशन" : "₹1,000 Monthly Pension",
      status: lang === "hi" ? "180+ पेंशनभोगी" : "180+ Pensioners Enrolled",
      eligibility: lang === "hi" ? "60 वर्ष से अधिक आयु / निराश्रित ग्रामीण नागरिक।" : "Senior citizens aged 60+ or eligible destitute rural women.",
      docs: lang === "hi" ? "आयु प्रमाण, आधार कार्ड, बैंक पासबुक, आय प्रमाणपत्र।" : "Age Proof, Aadhaar Card, Bank Passbook, Income Certificate."
    }
  ];

  const filtered = filterCat === "all" ? schemes : schemes.filter(s => s.category === filterCat);

  const filterButtons = [
    { id: "all", label: lang === "hi" ? "समस्त योजनाएं" : "All Schemes" },
    { id: "housing", label: lang === "hi" ? "आवास योजना" : "Housing" },
    { id: "farmer", label: lang === "hi" ? "किसान योजनाएं" : "Farmer Welfare" },
    { id: "water", label: lang === "hi" ? "पेयजल व स्वच्छता" : "Clean Water" },
    { id: "energy", label: lang === "hi" ? "सोलर लाइट" : "Solar Lighting" },
    { id: "pension", label: lang === "hi" ? "पेंशन योजनाएं" : "Social Pension" },
  ];

  return (
    <div style={{ backgroundColor: "#fffdfa", minHeight: "85vh", padding: "clamp(32px, 5vw, 60px) 0 80px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#78350f", marginBottom: "24px", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#d97706", fontWeight: 700, textDecoration: "none" }}>
            {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
          </Link>
          <span>/</span>
          <span style={{ color: "#78350f", fontWeight: 700 }}>
            {lang === "hi" ? "सरकारी योजनाएं (Welfare Schemes)" : "Government Welfare Schemes"}
          </span>
        </div>

        {/* Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 40px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a" }}>
            <Landmark size={16} />
            <span>{lang === "hi" ? "जनकल्याणकारी योजनाएं 2026" : "Public Welfare Programs 2026"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#451a03", lineHeight: 1.25, marginBottom: "14px" }}>
            {lang === "hi" ? "गरायें ग्राम पंचायत: सरकारी कल्याणकारी योजनाएं" : "Gram Panchayat Garayen: Government Welfare Schemes"}
          </h1>
          <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: "#78350f", lineHeight: 1.6 }}>
            {lang === "hi"
              ? "विकास खंड लंभुआ एवं उत्तर प्रदेश शासन के सहयोग से गरायें गाँव में संचालित समस्त जनकल्याणकारी योजनाओं की प्रामाणिक जानकारी व पात्रता।"
              : "Authentic information, criteria and direct application guidelines for all state and central welfare schemes active in Garayen."}
          </p>
        </div>

        {/* Filter buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}>
          {filterButtons.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                border: filterCat === cat.id ? "2px solid #d97706" : "1px solid #fde68a",
                backgroundColor: filterCat === cat.id ? "#d97706" : "#ffffff",
                color: filterCat === cat.id ? "#ffffff" : "#78350f",
                boxShadow: filterCat === cat.id ? "0 4px 12px rgba(217, 119, 6, 0.25)" : "none",
                transition: "all 0.2s",
                minHeight: "44px"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "24px" }}>
          {filtered.map((s) => (
            <div 
              key={s.id} 
              className="card-vip"
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1.5px solid #fde68a" }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "12px", fontSize: "0.78rem", fontWeight: 700 }}>
                    {s.categoryName}
                  </span>
                  <span style={{ color: "#16a34a", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                    <CheckCircle2 size={14} color="#16a34a" />
                    {s.status}
                  </span>
                </div>

                <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#451a03", marginBottom: "10px", lineHeight: 1.35 }}>
                  {s.title}
                </h2>

                <p style={{ color: "#57534e", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                  {s.desc}
                </p>

                {/* Eligibility & Documents */}
                <div style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "12px 14px", borderRadius: "12px", fontSize: "0.82rem", marginBottom: "18px" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <strong style={{ color: "#78350f" }}>{lang === "hi" ? "पात्रता:" : "Eligibility:"} </strong>
                    <span style={{ color: "#451a03" }}>{s.eligibility}</span>
                  </div>
                  <div>
                    <strong style={{ color: "#78350f" }}>{lang === "hi" ? "आवश्यक दस्तावेज:" : "Required Documents:"} </strong>
                    <span style={{ color: "#451a03" }}>{s.docs}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Row */}
              <div style={{ borderTop: "1px solid #fde68a", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#92400e", display: "block" }}>
                    {lang === "hi" ? "योजना लाभ" : "Entitled Benefit"}
                  </span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#d97706" }}>
                    {s.benefit}
                  </span>
                </div>

                <Link 
                  href="/samasya"
                  className="btn btn-primary"
                  style={{ padding: "8px 16px", fontSize: "0.82rem", borderRadius: "8px" }}
                >
                  <span>{lang === "hi" ? "योजना सहायता ›" : "Apply Assistance ›"}</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
