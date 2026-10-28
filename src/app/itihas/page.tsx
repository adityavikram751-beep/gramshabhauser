"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Landmark, 
  Sparkles, 
  Flame, 
  ShoppingBag, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Clock, 
  X, 
  ArrowRight,
  BookOpen,
  CheckCircle2
} from "lucide-react";

interface HistoricPlace {
  id: string;
  name: string;
  tag: string;
  shortDesc: string;
  fullHistory: string;
  significance: string;
  timing: string;
  location: string;
  image: string;
  keyFacts: string[];
}

export default function ItihasPage() {
  const { t, lang } = useLanguage();
  const [selectedPlace, setSelectedPlace] = useState<HistoricPlace | null>(null);

  const places: HistoricPlace[] = [
    {
      id: "school",
      name: "प्राथमिक विद्यालय गरायें (स्थापना: वर्ष 1917 ई.)",
      tag: "109 वर्ष प्राचीन ऐतिहासिक शिक्षण संस्थान",
      shortDesc: "ब्रिटिश काल में वर्ष 1917 में स्थापित यह विद्यालय गरायें और लंभुआ क्षेत्र की सबसे प्राचीन व गौरवशाली शिक्षण धरोहर है।",
      fullHistory: "उत्तर प्रदेश के सुल्तानपुर जिले की लंभुआ तहसील में स्थित प्राथमिक विद्यालय गरायें (Ps Garayen) की स्थापना ब्रिटिश शासनकाल में वर्ष 1917 ईस्वी में हुई थी। 109 वर्षों से अधिक समय से यह विद्यालय ग्रामीण अंचल के बच्चों को निःशुल्क एवं गुणवत्तापूर्ण प्राथमिक शिक्षा प्रदान कर रहा है। यहाँ से शिक्षित होकर अनेक छात्र शिक्षक, प्रशासनिक अधिकारी, सेना के जवान एवं सफल किसान बनकर राष्ट्र निर्माण में योगदान दे रहे हैं। विद्यालय परिसर में पक्का भवन, हरा-भरा प्रांगण और राष्ट्रीय ध्वज स्तंभ स्थापित है।",
      significance: "क्षेत्र का सबसे पुराना प्राथमिक विद्यालय, जिसने शिक्षा की पावन ज्योति जगाई।",
      timing: "सोमवार से शनिवार: प्रातः 09:00 से अपरान्ह 03:00 बजे तक",
      location: "वार्ड नं. 6, प्राथमिक विद्यालय मार्ग, गरायें (लंभुआ, सुल्तानपुर)",
      image: "/images/school.jpg",
      keyFacts: [
        "स्थापना वर्ष: 1917 ई. (109 वर्ष पूर्ण)",
        "सैकड़ों पूर्व छात्र आज देश भर में सेवारत",
        "डिजिटल स्मार्ट क्लास व कंप्यूटर लैब प्रस्तावित",
        "पुस्तकालय व खेलकूद मैदान की सुविधा"
      ]
    },
    {
      id: "durgapuja",
      name: "सुल्तानपुर व लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव",
      tag: "पश्चिम बंगाल के बाद देश की सबसे भव्य दुर्गा पूजा",
      shortDesc: "विजयादशमी से शरद पूर्णिमा तक चलने वाला विख्यात उत्सव, जिसमें अलौकिक प्रतिमाएं और धोपाप धाम में महाविसर्जन होता है।",
      fullHistory: "सुल्तानपुर जिले और लंभुआ क्षेत्र का दुर्गा पूजा महोत्सव पूरे भारतवर्ष में अद्वितीय है। जहाँ पूरे देश में विजयादशमी को प्रतिमाओं का विसर्जन हो जाता है, वहीं सुल्तानपुर में विजयादशमी के बाद से असली उत्सव का प्रारंभ होता है और यह शरद पूर्णिमा तक पूरे 5 दिनों तक चलता है। लंभुआ और गरायें में भव्य पंडाल, विद्युत सज्जा और ढाक की थाप पर माँ दुर्गा की पूजा-अर्चना होती है। शरद पूर्णिमा के दिन लाखों श्रद्धालुओं की उपस्थिति में पावन गोमती तट धोपाप धाम में भव्य शोभायात्रा के साथ प्रतिमाओं का विसर्जन किया जाता है।",
      significance: "राष्ट्रीय स्तर पर प्रसिद्ध सांस्कृतिक धरोहर और अखंड जनआस्था का प्रतीक।",
      timing: "वार्षिक आयोजन: अश्विन शुक्ल दशमी (विजयादशमी) से शरद पूर्णिमा तक",
      location: "लंभुआ मुख्य चौक, गरायें व विसर्जन स्थल: धोपाप धाम (गोमती तट)",
      image: "/images/durgapuja.jpg",
      keyFacts: [
        "5 दिनों तक चलने वाला देश का अनूठा दुर्गा पूजा उत्सव",
        "सैकड़ों विशाल पंडालों में अलौकिक देव प्रतिमाएं",
        "शरद पूर्णिमा पर गोमती के पावन धोपाप धाम में विसर्जन",
        "लाखों श्रद्धालुओं का महाकुंभ जैसा समागम"
      ]
    },
    {
      id: "mandir",
      name: "श्री प्राचीन बाबा सिद्धेश्वर महादेव मंदिर, गरायें",
      tag: "शताब्दियों पुराना स्वयंभू शिव धाम व सरोवर",
      shortDesc: "गाँव के पावन सरोवर तट पर स्थित स्वयंभू शिवलिंग, जहां महाशिवरात्रि और सावन मास में हजारों भक्त जलाभिषेक करते हैं।",
      fullHistory: "गरायें गाँव के अमृत सरोवर के समीप स्थित बाबा सिद्धेश्वर महादेव मंदिर शताब्दियों पुराना पवित्र धार्मिक स्थल है। मान्यता है कि यहाँ स्थापित शिवलिंग स्वयंभू है और जो भी भक्त यहाँ सच्चे मन से जलाभिषेक करते हैं, उनकी सभी मनोकामनाएं पूर्ण होती हैं। महाशिवरात्रि पर यहाँ विशाल मेला लगता है और सावन के महीने में कांवड़ियों का तांता लगा रहता है। देव दीपावली और कार्तिक पूर्णिमा पर सरोवर के चारों ओर 5,100 दीप जलाकर भव्य महादीपोत्सव मनाया जाता है।",
      significance: "ग्राम पंचायत गरायें के समस्त नागरिकों का प्रमुख आराध्य व आध्यात्मिक केंद्र।",
      timing: "दैनिक मंगला आरती: प्रातः 5:30 बजे | संध्या आरती: सायं 7:00 बजे",
      location: "वार्ड नं. 3, शिव मंदिर टोला, गरायें (लंभुआ, सुल्तानपुर)",
      image: "/images/mandir.jpg",
      keyFacts: [
        "प्राचीन स्वयंभू पाषाण शिवलिंग",
        "अमृत सरोवर के पवित्र तट पर सुरम्य प्रांगण",
        "सावन मास में अखंड रुद्राभिषेक व कांवड़ यात्रा",
        "देव दीपावली पर 5,100 दीपों का महादीपोत्सव"
      ]
    },
    {
      id: "dhopap",
      name: "पौराणिक तीर्थ धोपाप धाम (गोमती तट, लंभुआ)",
      tag: "त्रेतायुगीन श्रीराम पावन ब्रह्महत्या मुक्ति तीर्थ",
      shortDesc: "लंका विजय के उपरांत भगवान श्रीराम ने ब्रह्महत्या दोष निवारण हेतु गोमती के इसी तट पर पावन स्नान किया था।",
      fullHistory: "पौराणिक मान्यताओं के अनुसार, त्रेतायुग में रावण वध के पश्चात भगवान श्रीराम ने महर्षि वशिष्ठ के निर्देशानुसार गोमती नदी के इसी पवित्र तट पर स्नान कर ब्रह्महत्या के दोष से मुक्ति पाई थी, इसीलिए इस स्थान का नाम 'धोपाप' (पापों को धोने वाला धाम) पड़ा। लंभुआ तहसील के निकट स्थित यह तीर्थ गरायें के लोगों के लिए परम पूज्य है। ज्येष्ठ दशहरा और कार्तिक पूर्णिमा पर यहाँ लाखों श्रद्धालु स्नान-दान हेतु आते हैं।",
      significance: "रामायण कालीन ऐतिहासिक व पौराणिक तीर्थ स्थल।",
      timing: "सूर्योदय से सूर्यास्त तक (विशेष पर्व: गंगा दशहरा व कार्तिक पूर्णिमा)",
      location: "धोपाप धाम, गोमती नदी तट, लंभुआ (सुल्तानपुर) - गरायें से निकट",
      image: "/images/hero.jpg",
      keyFacts: [
        "त्रेतायुग में भगवान श्रीराम का पावन स्नान स्थल",
        "गोमती नदी का विहंगम व शांत प्राकृतिक तट",
        "दुर्गा पूजा प्रतिमाओं का मुख्य महाविसर्जन घाट",
        "ज्येष्ठ दशहरा पर विशाल प्रांतीय स्नान मेला"
      ]
    },
    {
      id: "market",
      name: "लंभुआ-गरायें का ऐतिहासिक साप्ताहिक हाट बाज़ार",
      tag: "पारंपरिक किसान मेला, ग्रामीण व्यापार व देसी जलेबी",
      shortDesc: "प्रत्येक मंगलवार और शुक्रवार को लगने वाला क्षेत्र का प्रमुख किसान बाज़ार, प्रसिद्ध शुद्ध देसी घी की जलेबी व हस्तशिल्प।",
      fullHistory: "लंभुआ और गरायें की सीमा पर लगने वाला यह साप्ताहिक हाट बाज़ार कई दशकों से ग्रामीण अर्थव्यवस्था और मेल-मिलाप का केंद्र है। सप्ताह में दो दिन (प्रत्येक मंगलवार और शुक्रवार) क्षेत्र के किसान अपनी ताज़ी सब्जियां, अनाज और गुड़ सीधे उपभोक्ताओं को बेचते हैं। यहाँ की शुद्ध देसी घी की गरमा-गरम कुरकुरी जलेबी और ख्वाजा मिठाई पूरे सुल्तानपुर जिले में प्रसिद्ध है। इसके अतिरिक्त कुम्हारों के मिट्टी के कुल्हड़, मटके और लोहारों के कृषि औजार भी उपलब्ध होते हैं।",
      significance: "स्थानीय किसानों व कारीगरों की आजीविका और सांस्कृतिक मिलन का केंद्र।",
      timing: "प्रत्येक मंगलवार व शुक्रवार: दोपहर 1:00 बजे से रात्रि 8:30 बजे तक",
      location: "मुख्य बाज़ार तिराहा, गरायें-लंभुआ मार्ग, पिन: 227304",
      image: "/images/market.jpg",
      keyFacts: [
        "प्रसिद्ध शुद्ध देसी घी की कुरकुरी जलेबी व ख्वाजा",
        "किसानों की सीधी जैविक व ताज़ी हरी उपज",
        "मिट्टी के पारंपरिक बर्तन, कुल्हड़ व ग्रामीण हस्तशिल्प",
        "दर्जनों गाँवों के किसानों व ग्रामीणों का संगम"
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: "#fdfbf7", minHeight: "85vh", padding: "50px 0 90px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#6b7280", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#0e3d28", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#b45309", fontWeight: 700 }}>ऐतिहासिक स्थल (Historic Places)</span>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: "860px", margin: "0 auto 40px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "#fef3c7", borderColor: "#fde68a", color: "#b45309" }}>
            <Landmark size={16} />
            <span>धरोहर एवं सांस्कृतिक इतिहास</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#0e3d28", lineHeight: 1.2, marginBottom: "12px" }}>
            गरायें व लंभुआ के प्रमुख ऐतिहासिक स्थल
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#4b5563", lineHeight: 1.6 }}>
            1917 का प्राथमिक विद्यालय, विख्यात लंभुआ दुर्गा पूजा, सिद्धेश्वर महादेव मंदिर व पौराणिक धोपाप धाम का प्रामाणिक इतिहास। किसी भी स्थल पर क्लिक करके पूरा विवरण देखें:
          </p>
        </div>

        {/* Places Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
          {places.map((place) => (
            <div
              key={place.id}
              onClick={() => setSelectedPlace(place)}
              className="card-vip"
              style={{
                cursor: "pointer",
                padding: "0",
                overflow: "hidden",
                border: "1.5px solid #e7dfcc",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.25s ease, box-shadow 0.25s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)";
              }}
            >
              <div>
                {/* Image Frame */}
                <div style={{ position: "relative", height: "220px", width: "100%", backgroundColor: "#0b2618" }}>
                  <Image
                    src={place.image}
                    alt={place.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#0e3d28", color: "#fbbf24", padding: "4px 10px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 700, border: "1px solid #d4af37" }}>
                      {place.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px", lineHeight: 1.3 }}>
                    {place.name}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, margin: "0 0 14px 0" }}>
                    {place.shortDesc}
                  </p>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.8rem", color: "#6b7280" }}>
                    <MapPin size={14} color="#059669" />
                    <span>{place.location}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div style={{ padding: "14px 20px", borderTop: "1px solid #f3ece0", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fdfbf7" }}>
                <span style={{ fontSize: "0.85rem", color: "#b45309", fontWeight: 700 }}>
                  क्लिक करें - पूरा इतिहास व गैलरी देखें
                </span>
                <ArrowRight size={16} color="#b45309" />
              </div>
            </div>
          ))}
        </div>

        {/* ================= FULL DETAIL MODAL ================= */}
        {selectedPlace && (
          <div 
            style={{ 
              position: "fixed", 
              inset: 0, 
              backgroundColor: "rgba(0,0,0,0.8)", 
              zIndex: 1000, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              padding: "20px",
              backdropFilter: "blur(4px)"
            }}
            onClick={() => setSelectedPlace(null)}
          >
            <div 
              style={{ 
                backgroundColor: "#ffffff", 
                maxWidth: "760px", 
                width: "100%", 
                maxHeight: "90vh", 
                overflowY: "auto", 
                borderRadius: "24px", 
                border: "2px solid #d4af37",
                boxShadow: "0 25px 60px rgba(0,0,0,0.3)" 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Header */}
              <div style={{ position: "relative", height: "300px", width: "100%", backgroundColor: "#000000" }}>
                <Image
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,37,23,0.95) 0%, transparent 60%)" }} />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPlace(null)}
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    border: "1.5px solid rgba(255,255,255,0.4)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>

                <div style={{ position: "absolute", bottom: "20px", left: "24px", right: "24px", color: "#ffffff" }}>
                  <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "3px 10px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 700, display: "inline-block", marginBottom: "6px" }}>
                    {selectedPlace.tag}
                  </span>
                  <h2 style={{ fontSize: "1.65rem", fontWeight: 800, margin: 0, lineHeight: 1.25 }}>
                    {selectedPlace.name}
                  </h2>
                </div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "28px" }}>
                
                {/* Full History */}
                <div style={{ marginBottom: "22px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <BookOpen size={18} color="#b45309" />
                    <span>ऐतिहासिक विवरण एवं पृष्ठभूमि</span>
                  </h4>
                  <p style={{ fontSize: "0.98rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>
                    {selectedPlace.fullHistory}
                  </p>
                </div>

                {/* Key Facts Box */}
                <div style={{ backgroundColor: "#fdfbf7", border: "1.5px solid #f1ece1", borderRadius: "16px", padding: "18px", marginBottom: "22px" }}>
                  <strong style={{ fontSize: "0.92rem", color: "#0e3d28", display: "block", marginBottom: "10px" }}>
                    ⭐ प्रमुख विशेषताएं एवं तथ्य:
                  </strong>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
                    {selectedPlace.keyFacts.map((fact, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.88rem", color: "#4b5563" }}>
                        <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timing & Location */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", borderTop: "1px solid #f3ece0", paddingTop: "16px", fontSize: "0.88rem", color: "#4b5563" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Clock size={16} color="#d97706" />
                    <span><strong>समय:</strong> {selectedPlace.timing}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <MapPin size={16} color="#059669" />
                    <span><strong>स्थान:</strong> {selectedPlace.location}</span>
                  </div>
                </div>

                {/* Close action */}
                <div style={{ marginTop: "24px", textAlign: "right" }}>
                  <button
                    type="button"
                    onClick={() => setSelectedPlace(null)}
                    className="btn btn-primary"
                    style={{ padding: "10px 24px", fontSize: "0.9rem", borderRadius: "10px" }}
                  >
                    बंद करें (Close)
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
