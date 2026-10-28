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
      title: "प्रधानमंत्री आवास योजना (ग्रामीण)",
      category: "housing",
      categoryName: "आवास (Housing)",
      desc: "गरायें ग्राम पंचायत के 114 पात्र परिवारों को पक्के आवास निर्माण हेतु ₹1,20,000 की वित्तीय सहायता सीधे बैंक खाते में डीबीटी द्वारा प्रदान की गई। साथ ही ₹12,000 शौचालय निर्माण और 90 दिन की मनरेगा मजदूरी दी जाती है।",
      benefit: "₹1,20,000 सीधा बैंक में",
      status: "114 लाभार्थी लाभान्वित",
      eligibility: "कच्चे मकान में रहने वाले बीपीएल / पात्र गृहस्थी परिवार।",
      docs: "आधार कार्ड, बैंक पासबुक, जॉब कार्ड, आय प्रमाणपत्र।"
    },
    {
      id: "jal",
      title: "हर घर जल - जल जीवन मिशन",
      category: "water",
      categoryName: "पेयजल (Water)",
      desc: "लंभुआ विकास खंड के अंतर्गत गरायें के सभी 11 वार्डों में पाइपलाइन द्वारा 24 घंटे शुद्ध पेयजल की आपूर्ति सुनिश्चित की गई है। फ्लोराइड-मुक्त और रोगाणु-मुक्त पानी हर घर तक पहुंच रहा है।",
      benefit: "24x7 शुद्ध नल जल",
      status: "100% पाइपलाइन पूर्ण",
      eligibility: "ग्राम पंचायत गरायें के सभी निवासी।",
      docs: "निवास प्रमाण अथवा परिवार रजिस्टर नकल।"
    },
    {
      id: "kisan",
      title: "प्रधानमंत्री किसान सम्मान निधि",
      category: "farmer",
      categoryName: "कृषि (Farmer)",
      desc: "गरायें गाँव के 520+ पंजीकृत किसानों को कृषि लागत, खाद व बीज के लिए प्रतिवर्ष ₹6,000 की आर्थिक सहायता (₹2,000 की तीन किस्तों में) सीधे उनके बैंक खातों में दी जा रही है।",
      benefit: "₹6,000 प्रति वर्ष",
      status: "520+ पंजीकृत किसान",
      eligibility: "कृषि भूमि के पंजीकृत भू-स्वामी किसान (e-KYC अनिवार्य)।",
      docs: "खतौनी नकल, आधार कार्ड, बैंक खाता।"
    },
    {
      id: "solar",
      title: "मुख्यमंत्री सौर ऊर्जा स्ट्रीट लाइट योजना",
      category: "energy",
      categoryName: "सौर ऊर्जा (Energy)",
      desc: "गरायें स्वागत द्वार, प्राचीन शिव मंदिर परिक्षेत्र, प्राथमिक विद्यालय और मुख्य चौराहों पर 140 से अधिक स्वचालित सोलर स्ट्रीट लाइटें लगाई गई हैं, जो शाम होते ही स्वतः जल उठती हैं।",
      benefit: "स्वचालित रात्रि प्रकाश",
      status: "140 सोलर लाइटें स्थापित",
      eligibility: "सार्वजनिक मार्ग, तिराहे, मंदिर व विद्यालय मार्ग।",
      docs: "ग्राम पंचायत अनुमोदन।"
    },
    {
      id: "mgnrega",
      title: "मनरेगा (MGNREGA) रोजगार गारंटी",
      category: "employment",
      categoryName: "रोजगार (Employment)",
      desc: "अमृत सरोवर तालाब जीर्णोद्धार, चकमार्ग खड़ंजा निर्माण, वृक्षारोपण एवं नाली सफाई कार्यों में गाँव के अकुशल श्रमिकों को 100 दिन का वैधानिक रोजगार एवं समय पर बैंक भुगतान।",
      benefit: "100 दिन रोजगार गारंटी",
      status: "सक्रिय जॉब कार्ड धारक",
      eligibility: "18 वर्ष से अधिक आयु के ग्रामीण नागरिक।",
      docs: "आधार कार्ड, बैंक खाता, 2 फोटो।"
    },
    {
      id: "pension",
      title: "वृद्धावस्था / निराश्रित महिला पेंशन योजना",
      category: "pension",
      categoryName: "सामाजिक सुरक्षा (Pension)",
      desc: "गरायें के 60 वर्ष से अधिक आयु के वरिष्ठ नागरिकों एवं निराश्रित माताओं को ₹1,000 प्रतिमाह (₹3,000 त्रैमासिक) की सामाजिक पेंशन सीधे बैंक खाते में दी जा रही है।",
      benefit: "₹1,000 प्रतिमाह पेंशन",
      status: "180+ पेंशनभोगी",
      eligibility: "60 वर्ष से अधिक आयु / निराश्रित ग्रामीण नागरिक।",
      docs: "आयु प्रमाण, आधार कार्ड, बैंक पासबुक, आय प्रमाणपत्र।"
    }
  ];

  const filtered = filterCat === "all" ? schemes : schemes.filter(s => s.category === filterCat);

  return (
    <div style={{ backgroundColor: "#fdfcf7", minHeight: "85vh", padding: "60px 0 90px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#b45309", fontWeight: 700 }}>सरकारी योजनाएं (Welfare Schemes)</span>
        </div>

        {/* Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 40px auto", textAlign: "center" }}>
          <div className="vip-badge">
            <Landmark size={16} />
            <span>जनकल्याणकारी योजनाएं 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0e3d28", lineHeight: 1.2, marginBottom: "12px" }}>
            गरायें ग्राम पंचायत: सरकारी कल्याणकारी योजनाएं
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.6 }}>
            विकास खंड लंभुआ एवं उत्तर प्रदेश शासन के सहयोग से गरायें गाँव में संचालित समस्त जनकल्याणकारी योजनाओं की प्रामाणिक जानकारी व पात्रता।
          </p>
        </div>

        {/* Filter buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
          {[
            { id: "all", label: "समस्त योजनाएं" },
            { id: "housing", label: "आवास योजना" },
            { id: "farmer", label: "किसान योजनाएं" },
            { id: "water", label: "पेयजल व स्वच्छता" },
            { id: "energy", label: "सोलर लाइट" },
            { id: "pension", label: "पेंशन योजनाएं" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCat(cat.id)}
              style={{
                padding: "8px 18px",
                borderRadius: "20px",
                fontSize: "0.88rem",
                fontWeight: 700,
                cursor: "pointer",
                border: filterCat === cat.id ? "2px solid #0e3d28" : "1px solid #d1cebe",
                backgroundColor: filterCat === cat.id ? "#0e3d28" : "#ffffff",
                color: filterCat === cat.id ? "#fbbf24" : "#374151",
                transition: "all 0.2s"
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Schemes Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px" }}>
          {filtered.map((s) => (
            <div 
              key={s.id} 
              className="card-vip"
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "12px", fontSize: "0.78rem", fontWeight: 700 }}>
                    {s.categoryName}
                  </span>
                  <span style={{ color: "#15803d", fontSize: "0.8rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                    <CheckCircle2 size={14} color="#16a34a" />
                    {s.status}
                  </span>
                </div>

                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0e3d28", marginBottom: "10px" }}>
                  {s.title}
                </h2>

                <p style={{ color: "#4b5563", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                  {s.desc}
                </p>

                {/* Eligibility & Documents */}
                <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "12px 14px", borderRadius: "12px", fontSize: "0.82rem", marginBottom: "18px" }}>
                  <div style={{ marginBottom: "6px" }}>
                    <strong style={{ color: "#0e3d28" }}>पात्रता: </strong>
                    <span style={{ color: "#4b5563" }}>{s.eligibility}</span>
                  </div>
                  <div>
                    <strong style={{ color: "#0e3d28" }}>आवश्यक दस्तावेज: </strong>
                    <span style={{ color: "#4b5563" }}>{s.docs}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Row */}
              <div style={{ borderTop: "1px solid #f3ece0", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#9ca3af", display: "block" }}>योजना लाभ</span>
                  <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#d97706" }}>
                    {s.benefit}
                  </span>
                </div>

                <Link 
                  href="/samasya"
                  className="btn btn-secondary"
                  style={{ padding: "8px 14px", fontSize: "0.82rem", borderRadius: "8px" }}
                >
                  <span>योजना सहायता ›</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
