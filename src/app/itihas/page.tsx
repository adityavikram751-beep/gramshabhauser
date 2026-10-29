"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Landmark, 
  MapPin, 
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
      name: lang === "hi" ? "प्राथमिक विद्यालय गरायें (स्थापना: वर्ष 1917 ई.)" : "Primary School Garayen (Established 1917 AD)",
      tag: lang === "hi" ? "109 वर्ष प्राचीन ऐतिहासिक शिक्षण संस्थान" : "109-Year-Old Historic Educational Heritage",
      shortDesc: lang === "hi" 
        ? "ब्रिटिश काल में वर्ष 1917 में स्थापित यह विद्यालय गरायें और लंभुआ क्षेत्र की सबसे प्राचीन व गौरवशाली शिक्षण धरोहर है।"
        : "Founded in 1917 during British rule, this school represents the most venerable and proud learning legacy of Garayen and Lambhua.",
      fullHistory: lang === "hi"
        ? "उत्तर प्रदेश के सुल्तानपुर जिले की लंभुआ तहसील में स्थित प्राथमिक विद्यालय गरायें (Ps Garayen) की स्थापना ब्रिटिश शासनकाल में वर्ष 1917 ईस्वी में हुई थी। 109 वर्षों से अधिक समय से यह विद्यालय ग्रामीण अंचल के बच्चों को निःशुल्क एवं गुणवत्तापूर्ण प्राथमिक शिक्षा प्रदान कर रहा है। यहाँ से शिक्षित होकर अनेक छात्र शिक्षक, प्रशासनिक अधिकारी, सेना के जवान एवं सफल किसान बनकर राष्ट्र निर्माण में योगदान दे रहे हैं। विद्यालय परिसर में पक्का भवन, हरा-भरा प्रांगण और राष्ट्रीय ध्वज स्तंभ स्थापित है।"
        : "Located in Lambhua Tehsil of Sultanpur District, Uttar Pradesh, Primary School Garayen (Ps Garayen) was established in 1917 during British rule. For over 109 years, it has provided free, quality elementary education to children from rural families. Alumni have served as educators, civil administrators, defense personnel, and progressive agriculturists nationwide.",
      significance: lang === "hi"
        ? "क्षेत्र का सबसे पुराना प्राथमिक विद्यालय, जिसने शिक्षा की पावन ज्योति जगाई।"
        : "The oldest elementary learning center of the region, pioneering rural literacy.",
      timing: lang === "hi"
        ? "सोमवार से शनिवार: प्रातः 09:00 से अपरान्ह 03:00 बजे तक"
        : "Monday - Saturday: 09:00 AM to 03:00 PM",
      location: lang === "hi"
        ? "वार्ड नं. 6, प्राथमिक विद्यालय मार्ग, गरायें (लंभुआ, सुल्तानपुर)"
        : "Ward No. 6, Primary School Road, Garayen (Lambhua, Sultanpur)",
      image: "/images/school.jpg",
      keyFacts: lang === "hi" ? [
        "स्थापना वर्ष: 1917 ई. (109 वर्ष पूर्ण)",
        "सैकड़ों पूर्व छात्र आज देश भर में सेवारत",
        "डिजिटल स्मार्ट क्लास व कंप्यूटर लैब प्रस्तावित",
        "पुस्तकालय व खेलकूद मैदान की सुविधा"
      ] : [
        "Founded in 1917 AD (Over 109 years of excellence)",
        "Thousands of alumni serving across India",
        "Smart digital classroom & computer lab underway",
        "Library and spacious sports grounds"
      ]
    },
    {
      id: "durgapuja",
      name: lang === "hi" ? "सुल्तानपुर व लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव" : "Historic Durga Puja Festival of Sultanpur & Lambhua",
      tag: lang === "hi" ? "पश्चिम बंगाल के बाद देश की सबसे भव्य दुर्गा पूजा" : "India's Grandest Celebration after West Bengal",
      shortDesc: lang === "hi"
        ? "विजयादशमी से शरद पूर्णिमा तक चलने वाला विख्यात उत्सव, जिसमें अलौकिक प्रतिमाएं और धोपाप धाम में महाविसर्जन होता है।"
        : "Renowned 5-day cultural festival extending from Vijayadashami to Sharad Purnima with sacred Gomti immersion.",
      fullHistory: lang === "hi"
        ? "सुल्तानपुर जिले और लंभुआ क्षेत्र का दुर्गा पूजा महोत्सव पूरे भारतवर्ष में अद्वितीय है। जहाँ पूरे देश में विजयादशमी को प्रतिमाओं का विसर्जन हो जाता है, वहीं सुल्तानपुर में विजयादशमी के बाद से असली उत्सव का प्रारंभ होता है और यह शरद पूर्णिमा तक पूरे 5 दिनों तक चलता है। लंभुआ और गरायें में भव्य पंडाल, विद्युत सज्जा और ढाक की थाप पर माँ दुर्गा की पूजा-अर्चना होती है। शरद पूर्णिमा के दिन लाखों श्रद्धालुओं की उपस्थिति में पावन गोमती तट धोपाप धाम में भव्य शोभायात्रा के साथ प्रतिमाओं का विसर्जन किया जाता है।"
        : "Sultanpur district's Durga Puja is celebrated as a cultural marvel. While idols are typically immersed on Vijayadashami across India, celebrations in Sultanpur and Lambhua commence on Dashami and continue vibrantly until Sharad Purnima. Thousands gather as elaborately crafted idols are worshipped with traditional Dhaak drums, culminating in grand immersion at Dhopap Dham on the holy Gomti River.",
      significance: lang === "hi"
        ? "राष्ट्रीय स्तर पर प्रसिद्ध सांस्कृतिक धरोहर और अखंड जनआस्था का प्रतीक।"
        : "A nationally acclaimed cultural festival symbolizing regional unity and heritage.",
      timing: lang === "hi"
        ? "वार्षिक आयोजन: अश्विन शुक्ल दशमी (विजयादशमी) से शरद पूर्णिमा तक"
        : "Annual Festival: Ashwin Shukla Dashami to Sharad Purnima",
      location: lang === "hi"
        ? "लंभुआ मुख्य चौक, गरायें व विसर्जन स्थल: धोपाप धाम (गोमती तट)"
        : "Lambhua Central Square, Garayen & Immersion Ghat: Dhopap Dham (Gomti River)",
      image: "/images/durgapuja.jpg",
      keyFacts: lang === "hi" ? [
        "5 दिनों तक चलने वाला देश का अनूठा दुर्गा पूजा उत्सव",
        "सैकड़ों विशाल पंडालों में अलौकिक देव प्रतिमाएं",
        "शरद पूर्णिमा पर गोमती के पावन धोपाप धाम में विसर्जन",
        "लाखों श्रद्धालुओं का महाकुंभ जैसा समागम"
      ] : [
        "Unique 5-day celebration extending past Vijayadashami",
        "Hundreds of illuminated pandals with exquisite deities",
        "Sacred immersion at Dhopap Dham on Sharad Purnima",
        "Convergence of hundreds of thousands of devotees"
      ]
    },
    {
      id: "mandir",
      name: lang === "hi" ? "श्री प्राचीन बाबा सिद्धेश्वर महादेव मंदिर, गरायें" : "Shri Ancient Baba Siddheshwar Mahadev Temple, Garayen",
      tag: lang === "hi" ? "शताब्दियों पुराना स्वयंभू शिव धाम व सरोवर" : "Centuries-Old Self-Manifested Shiva Shrine & Lake",
      shortDesc: lang === "hi"
        ? "गाँव के पावन सरोवर तट पर स्थित स्वयंभू शिवलिंग, जहां महाशिवरात्रि और सावन मास में हजारों भक्त जलाभिषेक करते हैं।"
        : "Ancient temple on the banks of Amrit Sarovar where devotees offer prayers during Mahashivratri and Shravan.",
      fullHistory: lang === "hi"
        ? "गरायें गाँव के अमृत सरोवर के समीप स्थित बाबा सिद्धेश्वर महादेव मंदिर शताब्दियों पुराना पवित्र धार्मिक स्थल है। मान्यता है कि यहाँ स्थापित शिवलिंग स्वयंभू है और जो भी भक्त यहाँ सच्चे मन से जलाभिषेक करते हैं, उनकी सभी मनोकामनाएं पूर्ण होती हैं। महाशिवरात्रि पर यहाँ विशाल मेला लगता है और सावन के महीने में कांवड़ियों का तांता लगा रहता है। देव दीपावली और कार्तिक पूर्णिमा पर सरोवर के चारों ओर 5,100 दीप जलाकर भव्य महादीपोत्सव मनाया जाता है।"
        : "Nestled alongside Amrit Sarovar in Garayen, the Baba Siddheshwar Mahadev Temple is revered as centuries old. Devotees believe the lingam is Svayambhu (self-manifested), fulfilling heartfelt prayers. The shrine witnesses grand fairs on Mahashivratri, holy processions of Kanwariyas during Shravan, and magnificent Deepotsav illuminations with 5,100 earthen lamps on Kartik Purnima.",
      significance: lang === "hi"
        ? "ग्राम पंचायत गरायें के समस्त नागरिकों का प्रमुख आराध्य व आध्यात्मिक केंद्र।"
        : "Central spiritual anchor and cherished deity for the residents of Garayen.",
      timing: lang === "hi"
        ? "दैनिक मंगला आरती: प्रातः 5:30 बजे | संध्या आरती: सायं 7:00 बजे"
        : "Morning Aarti: 05:30 AM | Evening Aarti: 07:00 PM",
      location: lang === "hi"
        ? "वार्ड नं. 3, शिव मंदिर टोला, गरायें (लंभुआ, सुल्तानपुर)"
        : "Ward No. 3, Shiv Mandir Hamlet, Garayen (Lambhua, Sultanpur)",
      image: "/images/mandir.jpg",
      keyFacts: lang === "hi" ? [
        "प्राचीन स्वयंभू पाषाण शिवलिंग",
        "अमृत सरोवर के पवित्र तट पर सुरम्य प्रांगण",
        "सावन मास में अखंड रुद्राभिषेक व कांवड़ यात्रा",
        "देव दीपावली पर 5,100 दीपों का महादीपोत्सव"
      ] : [
        "Ancient self-manifested stone Shivalinga",
        "Scenic courtyard beside the pristine Amrit Sarovar",
        "Elaborate Rudrabhishek & Kanwar processions in Shravan",
        "Grand Deepotsav festival with 5,100 lamps"
      ]
    },
    {
      id: "dhopap",
      name: lang === "hi" ? "पौराणिक तीर्थ धोपाप धाम (गोमती तट, लंभुआ)" : "Mythological Dhopap Dham (Gomti Banks, Lambhua)",
      tag: lang === "hi" ? "त्रेतायुगीन श्रीराम पावन ब्रह्महत्या मुक्ति तीर्थ" : "Treta Yuga Holy Pilgrimage of Lord Rama",
      shortDesc: lang === "hi"
        ? "लंका विजय के उपरांत भगवान श्रीराम ने ब्रह्महत्या दोष निवारण हेतु गोमती के इसी तट पर पावन स्नान किया था।"
        : "Lord Rama bathed on the banks of Gomti here following the battle of Lanka, sanctifying this revered pilgrimage.",
      fullHistory: lang === "hi"
        ? "पौराणिक मान्यताओं के अनुसार, त्रेतायुग में रावण वध के पश्चात भगवान श्रीराम ने महर्षि वशिष्ठ के निर्देशानुसार गोमती नदी के इसी पवित्र तट पर स्नान कर ब्रह्महत्या के दोष से मुक्ति पाई थी, इसीलिए इस स्थान का नाम 'धोपाप' (पापों को धोने वाला धाम) पड़ा। लंभुआ तहसील के निकट स्थित यह तीर्थ गरायें के लोगों के लिए परम पूज्य है। ज्येष्ठ दशहरा और कार्तिक पूर्णिमा पर यहाँ लाखों श्रद्धालु स्नान-दान हेतु आते हैं।"
        : "According to sacred legends from the Ramayana, Lord Rama bathed in the Gomti River at this site under the guidance of Sage Vashistha to cleanse himself following the Lanka war, giving the pilgrimage the sacred name 'Dhopap' (the cleanser of sins). Located nearby in Lambhua, it serves as a cherished spiritual refuge and witness to bathing fairs on Jyeshtha Dussehra and Kartik Purnima.",
      significance: lang === "hi"
        ? "रामायण कालीन ऐतिहासिक व पौराणिक तीर्थ स्थल।"
        : "An epic Ramayana-era sacred riverside pilgrimage.",
      timing: lang === "hi"
        ? "सूर्योदय से सूर्यास्त तक (विशेष पर्व: गंगा दशहरा व कार्तिक पूर्णिमा)"
        : "Sunrise to Sunset (Special festive fairs on Ganga Dussehra & Kartik Purnima)",
      location: lang === "hi"
        ? "धोपाप धाम, गोमती नदी तट, लंभुआ (सुल्तानपुर) - गरायें से निकट"
        : "Dhopap Dham, Gomti River Banks, Lambhua (Sultanpur) - near Garayen",
      image: "/images/hero.jpg",
      keyFacts: lang === "hi" ? [
        "त्रेतायुग में भगवान श्रीराम का पावन स्नान स्थल",
        "गोमती नदी का विहंगम व शांत प्राकृतिक तट",
        "दुर्गा पूजा प्रतिमाओं का मुख्य महाविसर्जन घाट",
        "ज्येष्ठ दशहरा पर विशाल प्रांतीय स्नान मेला"
      ] : [
        "Lord Rama's legendary holy bathing ghat from Treta Yuga",
        "Panoramic and serene natural riverbanks of Gomti",
        "Main immersion ghat for regional Durga Puja festival",
        "Historic pilgrim gathering on Jyeshtha Ganga Dussehra"
      ]
    },
    {
      id: "market",
      name: lang === "hi" ? "लंभुआ-गरायें का ऐतिहासिक साप्ताहिक हाट बाज़ार" : "Lambhua-Garayen Historic Weekly Haat Bazaar",
      tag: lang === "hi" ? "पारंपरिक किसान मेला, ग्रामीण व्यापार व देसी जलेबी" : "Farmers' Marketplace, Rural Commerce & Jalebi Sweets",
      shortDesc: lang === "hi"
        ? "प्रत्येक मंगलवार और शुक्रवार को लगने वाला क्षेत्र का प्रमुख किसान बाज़ार, प्रसिद्ध शुद्ध देसी घी की जलेबी व हस्तशिल्प।"
        : "Bi-weekly community bazaar every Tuesday and Friday featuring pure ghee Jalebi sweets, produce, and pottery.",
      fullHistory: lang === "hi"
        ? "लंभुआ और गरायें की सीमा पर लगने वाला यह साप्ताहिक हाट बाज़ार कई दशकों से ग्रामीण अर्थव्यवस्था और मेल-मिलाप का केंद्र है। सप्ताह में दो दिन (प्रत्येक मंगलवार और शुक्रवार) क्षेत्र के किसान अपनी ताज़ी सब्जियां, अनाज और गुड़ सीधे उपभोक्ताओं को बेचते हैं। यहाँ की शुद्ध देसी घी की गरमा-गरम कुरकुरी जलेबी और ख्वाजा मिठाई पूरे सुल्तानपुर जिले में प्रसिद्ध है। इसके अतिरिक्त कुम्हारों के मिट्टी के कुल्हड़, मटके और लोहारों के कृषि औजार भी उपलब्ध होते हैं।"
        : "Operating for several decades, this bi-weekly open-air marketplace is the economic and social heartbeat of Lambhua and Garayen. Held every Tuesday and Friday, local farmers offer fresh organic vegetables, pulses, grains, and jaggery directly to patrons. The market is famed for sizzling pure desi ghee Jalebi and Khaja sweets, earthenware kulhads, and handcrafted agricultural ironware.",
      significance: lang === "hi"
        ? "स्थानीय किसानों व कारीगरों की आजीविका और सांस्कृतिक मिलन का केंद्र।"
        : "Economic livelihood center for regional farmers and traditional craftspeople.",
      timing: lang === "hi"
        ? "प्रत्येक मंगलवार व शुक्रवार: दोपहर 1:00 बजे से रात्रि 8:30 बजे तक"
        : "Every Tuesday & Friday: 01:00 PM to 08:30 PM",
      location: lang === "hi"
        ? "मुख्य बाज़ार तिराहा, गरायें-लंभुआ मार्ग, पिन: 227304"
        : "Main Bazaar Junction, Garayen-Lambhua Road, PIN: 227304",
      image: "/images/market.jpg",
      keyFacts: lang === "hi" ? [
        "प्रसिद्ध शुद्ध देसी घी की कुरकुरी जलेबी व ख्वाजा",
        "किसानों की सीधी जैविक व ताज़ी हरी उपज",
        "मिट्टी के पारंपरिक बर्तन, कुल्हड़ व ग्रामीण हस्तशिल्प",
        "दर्जनों गाँवों के किसानों व ग्रामीणों का संगम"
      ] : [
        "Celebrated pure desi ghee crispy Jalebi & Khaja confections",
        "Farm-direct fresh harvests and seasonal produce",
        "Handcrafted clay pottery, matkas, and forged farm tools",
        "Social hub connecting dozens of surrounding rural villages"
      ]
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
            {lang === "hi" ? "ऐतिहासिक स्थल (Historic Places)" : "Historic Places & Landmarks"}
          </span>
        </div>

        {/* Page Header */}
        <div style={{ maxWidth: "860px", margin: "0 auto 36px auto", textAlign: "center" }}>
          <div className="vip-badge">
            <Landmark size={16} />
            <span>{lang === "hi" ? "धरोहर एवं सांस्कृतिक इतिहास" : "Heritage & Cultural Legacy"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#78350f", lineHeight: 1.25, marginBottom: "12px" }}>
            {lang === "hi" ? "गरायें व लंभुआ के प्रमुख ऐतिहासिक स्थल" : "Historic Landmarks of Garayen & Lambhua"}
          </h1>
          <p style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)", color: "#5a4225", lineHeight: 1.6 }}>
            {lang === "hi"
              ? "1917 का प्राथमिक विद्यालय, विख्यात लंभुआ दुर्गा पूजा, सिद्धेश्वर महादेव मंदिर व पौराणिक धोपाप धाम का प्रामाणिक इतिहास। किसी भी स्थल पर क्लिक करके पूरा विवरण देखें:"
              : "Authentic chronicles of the 1917 Primary School, celebrated Durga Puja, Siddheshwar Mahadev Temple and legendary Dhopap Dham. Click any landmark to read full history:"}
          </p>
        </div>

        {/* Places Grid - Fully Responsive */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "24px" }}>
          {places.map((place) => (
            <div
              key={place.id}
              onClick={() => setSelectedPlace(place)}
              className="card-vip"
              style={{
                padding: "0",
                overflow: "hidden",
                border: "1.5px solid #fde68a",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                transition: "transform 0.25s, box-shadow 0.25s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#d97706";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(217,119,6,0.18)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#fde68a";
                e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              }}
            >
              <div>
                <div style={{ position: "relative", height: "210px", width: "100%" }}>
                  <Image src={place.image} alt={place.name} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,0.35)" }}>
                      {place.tag}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#78350f", marginBottom: "8px", lineHeight: 1.35 }}>
                    {place.name}
                  </h2>
                  <p style={{ fontSize: "0.88rem", color: "#5a4225", lineHeight: 1.6, margin: 0 }}>
                    {place.shortDesc}
                  </p>
                </div>
              </div>

              <div style={{ padding: "14px 20px", borderTop: "1px solid #fef3c7", backgroundColor: "#fffbeb", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#d97706", fontWeight: 700, fontSize: "0.84rem" }}>
                <span>{lang === "hi" ? "क्लिक करें - पूरा इतिहास पढ़ें ›" : "Click to Read Full History ›"}</span>
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Detail Modal */}
      {selectedPlace && (
        <div 
          style={{ 
            position: "fixed", 
            inset: 0, 
            backgroundColor: "rgba(0,0,0,0.78)", 
            zIndex: 1000, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "16px",
            overflowY: "auto"
          }}
          onClick={() => setSelectedPlace(null)}
        >
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              maxWidth: "760px", 
              width: "100%", 
              borderRadius: "24px", 
              overflow: "hidden", 
              boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              border: "2px solid #d97706",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column"
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div style={{ backgroundColor: "#291204", color: "#ffffff", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Landmark size={18} color="#fbbf24" />
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fbbf24" }}>
                  {lang === "hi" ? "ऐतिहासिक स्थल विस्तृत विवरण" : "Historic Landmark Detailed Profile"}
                </span>
              </div>
              <button
                onClick={() => setSelectedPlace(null)}
                style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", padding: "4px" }}
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body with Scroll */}
            <div style={{ padding: "24px", overflowY: "auto" }}>
              
              <div style={{ position: "relative", height: "240px", width: "100%", borderRadius: "14px", overflow: "hidden", marginBottom: "20px" }}>
                <Image src={selectedPlace.image} alt={selectedPlace.name} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: "10px", left: "10px" }}>
                  <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 12px", borderRadius: "16px", fontSize: "0.78rem", fontWeight: 700 }}>
                    {selectedPlace.tag}
                  </span>
                </div>
              </div>

              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.85rem)", fontWeight: 800, color: "#78350f", marginBottom: "14px", lineHeight: 1.3 }}>
                {selectedPlace.name}
              </h2>

              {/* Info Badges */}
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "20px", fontSize: "0.86rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#5a4225", backgroundColor: "#fffbeb", padding: "6px 12px", borderRadius: "10px", border: "1px solid #fde68a" }}>
                  <MapPin size={16} color="#d97706" />
                  <span>{selectedPlace.location}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#5a4225", backgroundColor: "#fffbeb", padding: "6px 12px", borderRadius: "10px", border: "1px solid #fde68a" }}>
                  <Clock size={16} color="#d97706" />
                  <span>{selectedPlace.timing}</span>
                </div>
              </div>

              {/* Full History */}
              <div style={{ marginBottom: "22px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#78350f", marginBottom: "8px" }}>
                  {lang === "hi" ? "ऐतिहासिक पृष्ठभूमि एवं विवरण" : "Historical Background & Overview"}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.75, margin: 0 }}>
                  {selectedPlace.fullHistory}
                </p>
              </div>

              {/* Significance */}
              <div style={{ backgroundColor: "#fffdf8", borderLeft: "4px solid #d97706", padding: "12px 16px", borderRadius: "0 10px 10px 0", marginBottom: "22px" }}>
                <strong style={{ fontSize: "0.9rem", color: "#78350f", display: "block", marginBottom: "2px" }}>
                  {lang === "hi" ? "महत्व व विशेषता:" : "Cultural & Historic Significance:"}
                </strong>
                <span style={{ fontSize: "0.92rem", color: "#5a4225" }}>
                  {selectedPlace.significance}
                </span>
              </div>

              {/* Key Facts list */}
              <div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#78350f", marginBottom: "10px" }}>
                  {lang === "hi" ? "प्रमुख तथ्य एवं विशेषताएं" : "Key Facts & Highlights"}
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "10px" }}>
                  {selectedPlace.keyFacts.map((fact, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#374151" }}>
                      <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0 }} />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div style={{ padding: "14px 24px", borderTop: "1px solid #fde68a", backgroundColor: "#fffbeb", display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={() => setSelectedPlace(null)}
                className="btn btn-primary"
                style={{ padding: "8px 22px", fontSize: "0.88rem" }}
              >
                {lang === "hi" ? "बंद करें (Close)" : "Close Window"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
