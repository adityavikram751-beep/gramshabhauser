"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Play, 
  Pause, 
  Tv, 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  MessageSquareWarning, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Building, 
  BookOpen, 
  Camera
} from "lucide-react";

// Standalone Instagram Icon
const InstagramIcon = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Home() {
  const { t, lang } = useLanguage();

  // Custom Pradhan Photo state
  const [customPradhanPhoto, setCustomPradhanPhoto] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("garayen_pradhan_photo");
      if (saved) setCustomPradhanPhoto(saved);
    }
  }, []);

  const handlePradhanPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPradhanPhoto(result);
          if (typeof window !== "undefined") {
            localStorage.setItem("garayen_pradhan_photo", result);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 1. 5 Big Photos Slider State (Bilingual)
  const fiveBigPhotos = [
    {
      id: "dwar",
      image: "/images/dwar.jpg",
      title: lang === "hi" 
        ? "ग्राम पंचायत गरायें (लंभुआ, सुल्तानपुर) - आपका हार्दिक स्वागत है"
        : "Welcome to Gram Panchayat Garayen (Lambhua, Sultanpur)",
      caption: lang === "hi"
        ? "पवित्र अवध भूमि, लहलहाते खेत और समृद्ध ग्रामीण संस्कृति | पिन: 227304"
        : "Sacred Awadh soil, lush green fields and rich rural traditions | PIN: 227304",
      tag: lang === "hi" ? "गरायें ग्रामीण परिवेश एवं मुख्य मार्ग" : "Garayen Scenic Countryside & Main Gateway"
    },
    {
      id: "school",
      image: "/images/school.jpg",
      title: lang === "hi"
        ? "प्राथमिक विद्यालय गरायें - स्थापना वर्ष 1917 ई."
        : "Primary School Garayen - Established in 1917 AD",
      caption: lang === "hi"
        ? "109 वर्षों से क्षेत्र में शिक्षा की पावन ज्योति प्रज्वलित करता ब्रिटिश कालीन विद्यालय"
        : "Over 109 years of enlightening young minds with quality foundational education",
      tag: lang === "hi" ? "ऐतिहासिक 1917 शिक्षण संस्थान" : "Historic 1917 Primary Institution"
    },
    {
      id: "durgapuja",
      image: "/images/durgapuja.jpg",
      title: lang === "hi"
        ? "सुल्तानपुर व लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव"
        : "Historic Durga Puja Festival of Sultanpur & Lambhua",
      caption: lang === "hi"
        ? "पश्चिम बंगाल के बाद भारत का प्रसिद्ध दशहरा-शरद पूर्णिमा उत्सव व गोमती तट धोपाप विसर्जन"
        : "India's celebrated festival with divine pandals and sacred Gomti immersion at Dhopap Dham",
      tag: lang === "hi" ? "विख्यात सांस्कृतिक महोत्सव" : "Celebrated Cultural Festival"
    },
    {
      id: "mandir",
      image: "/images/mandir.jpg",
      title: lang === "hi"
        ? "श्री प्राचीन बाबा सिद्धेश्वर महादेव मंदिर, गरायें"
        : "Shri Ancient Baba Siddheshwar Mahadev Temple, Garayen",
      caption: lang === "hi"
        ? "पावन अमृत सरोवर तट पर स्थित शताब्दियों पुराना स्वयंभू पावन धाम व महादीपोत्सव"
        : "Centuries-old sacred shrine of Lord Shiva by the holy Amrit Sarovar lake with Deepotsav",
      tag: lang === "hi" ? "धार्मिक आस्था का केंद्र" : "Spiritual Heritage Sanctuary"
    },
    {
      id: "market",
      image: "/images/market.jpg",
      title: lang === "hi"
        ? "लंभुआ-गरायें का साप्ताहिक ग्रामीण हाट बाज़ार"
        : "Lambhua-Garayen Weekly Rural Haat Bazaar",
      caption: lang === "hi"
        ? "प्रत्येक मंगलवार और शुक्रवार का किसान बाज़ार व प्रसिद्ध शुद्ध देसी घी की जलेबी"
        : "Bi-weekly farmers' marketplace every Tuesday & Friday with crisp pure ghee Jalebi sweets",
      tag: lang === "hi" ? "साप्ताहिक ग्रामीण हाट" : "Weekly Rural Marketplace"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // 2. Village Videos State (Bilingual)
  const villageVideos = [
    {
      id: "v1",
      title: lang === "hi" ? "गरायें गाँव का विहंगम 4K ड्रोन दर्शन" : "Panoramic 4K Aerial Drone Tour of Garayen",
      desc: lang === "hi" ? "लहलहाते खेत, पक्की सड़कें, अमृत सरोवर और स्वागत द्वार का विहंगम हवाई चक्कर।" : "Lush mustard-wheat fields, paved roads, Amrit Sarovar and grand Welcome Gateway.",
      category: lang === "hi" ? "हवाई दृश्य (Drone)" : "Aerial View (Drone)",
      duration: lang === "hi" ? "4:15 मिनट" : "4:15 min",
      poster: "/images/hero.jpg",
    },
    {
      id: "v2",
      title: lang === "hi" ? "सुल्तानपुर-लंभुआ दुर्गा पूजा व विसर्जन शोभायात्रा" : "Sultanpur-Lambhua Durga Puja & Grand Immersion",
      desc: lang === "hi" ? "अलौकिक देव प्रतिमाएं, भव्य विद्युत सज्जा और पवित्र गोमती तट धोपाप धाम पर विसर्जन।" : "Divine deities, majestic illumination, and sacred immersion at holy Dhopap Dham on Gomti River.",
      category: lang === "hi" ? "सांस्कृतिक उत्सव" : "Cultural Festival",
      duration: lang === "hi" ? "6:40 मिनट" : "6:40 min",
      poster: "/images/durgapuja.jpg",
    },
    {
      id: "v3",
      title: lang === "hi" ? "प्राचीन बाबा सिद्धेश्वर महादेव मंदिर महाआरती" : "Ancient Baba Siddheshwar Mahadev Maha Aarti",
      desc: lang === "hi" ? "पावन सरोवर तट पर स्वयंभू शिवलिंग की संध्या महाआरती व 5,100 दीपों का दीपोत्सव।" : "Evening Aarti of self-manifested Shivalinga and grand celebration with 5,100 lamps.",
      category: lang === "hi" ? "धार्मिक दर्शन" : "Spiritual Tour",
      duration: lang === "hi" ? "3:50 मिनट" : "3:50 min",
      poster: "/images/mandir.jpg",
    },
    {
      id: "v4",
      title: lang === "hi" ? "109 वर्ष पुराना प्राथमिक विद्यालय गरायें (1917)" : "109-Year-Old Primary School Garayen (Est. 1917)",
      desc: lang === "hi" ? "प्राथमिक विद्यालय प्रांगण, बच्चों का खेलकूद एवं ऐतिहासिक ब्रिटिश कालीन धरोहर।" : "School campus, educational activities, and British-era historical classrooms.",
      category: lang === "hi" ? "ऐतिहासिक धरोहर" : "Historic Heritage",
      duration: lang === "hi" ? "5:10 मिनट" : "5:10 min",
      poster: "/images/school.jpg",
    },
    {
      id: "v5",
      title: lang === "hi" ? "लंभुआ-गरायें का साप्ताहिक किसान हाट बाज़ार" : "Lambhua-Garayen Weekly Farmers' Haat Bazaar",
      desc: lang === "hi" ? "शुद्ध देसी घी की कुरकुरी जलेबी, ताज़ी हरी सब्जियां और ग्रामीण व्यापार की झलक।" : "Hot crispy Desi Ghee Jalebi, fresh farm produce, pottery, and vibrant village life.",
      category: lang === "hi" ? "ग्रामीण जनजीवन" : "Rural Commerce",
      duration: lang === "hi" ? "4:30 मिनट" : "4:30 min",
      poster: "/images/market.jpg",
    }
  ];

  const [activeVideo, setActiveVideo] = useState(villageVideos[0]);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Keep active video in sync when language toggles
  useEffect(() => {
    setActiveVideo(prev => villageVideos.find(v => v.id === prev.id) || villageVideos[0]);
  }, [lang]);

  // 3. Historic Places Teaser (Bilingual)
  const historicTeasers = [
    {
      id: "school",
      name: lang === "hi" ? "प्राथमिक विद्यालय गरायें (1917)" : "Primary School Garayen (1917)",
      desc: lang === "hi" ? "ब्रिटिश काल 1917 में स्थापित 109 वर्ष प्राचीन ऐतिहासिक सरकारी प्राथमिक विद्यालय।" : "Founded in 1917 under British era, a 109-year-old historic primary education institution.",
      image: "/images/school.jpg",
      tag: lang === "hi" ? "स्थापना: 1917 ई." : "Est. 1917 AD"
    },
    {
      id: "durgapuja",
      name: lang === "hi" ? "लंभुआ दुर्गा पूजा व धोपाप" : "Lambhua Durga Puja & Dhopap",
      desc: lang === "hi" ? "पश्चिम बंगाल के बाद देश की सबसे भव्य 5-दिवसीय दुर्गा पूजा व गोमती विसर्जन।" : "One of India's grandest Durga Puja festivals with holy immersion at Dhopap Dham on Gomti River.",
      image: "/images/durgapuja.jpg",
      tag: lang === "hi" ? "शरद पूर्णिमा विसर्जन" : "Sharad Purnima Immersion"
    },
    {
      id: "mandir",
      name: lang === "hi" ? "बाबा सिद्धेश्वर महादेव मंदिर" : "Baba Siddheshwar Mahadev Temple",
      desc: lang === "hi" ? "पावन अमृत सरोवर तट पर स्थित स्वयंभू शिवलिंग व महाशिवरात्रि मेला।" : "Ancient temple featuring self-manifested Shivalinga beside the sacred Amrit Sarovar.",
      image: "/images/mandir.jpg",
      tag: lang === "hi" ? "प्राचीन शिव धाम" : "Ancient Shiva Sanctuary"
    },
    {
      id: "market",
      name: lang === "hi" ? "साप्ताहिक ग्रामीण हाट बाज़ार" : "Weekly Rural Haat Bazaar",
      desc: lang === "hi" ? "प्रत्येक मंगलवार व शुक्रवार का किसान मेला व शुद्ध देसी घी की जलेबी।" : "Bi-weekly bustling farmers' fair every Tuesday and Friday with traditional sweets and crafts.",
      image: "/images/market.jpg",
      tag: lang === "hi" ? "मंडी व स्वाद" : "Bazaar & Flavors"
    }
  ];

  // 4. Leaders (Bilingual)
  const leadership = [
    {
      id: "pradhan",
      role: lang === "hi" ? "ग्राम प्रधान (प्रथम नागरिक)" : "Village Head (Gram Pradhan)",
      name: lang === "hi" ? "श्री नीरव सिंह" : "Shri Neerav Singh",
      ward: lang === "hi" ? "ग्राम पंचायत गरवां / गरायें, लंभुआ (सुल्तानपुर) | पिन: 227304" : "Gram Panchayat Garayen, Lambhua (Sultanpur) | PIN: 227304",
      image: customPradhanPhoto || "/images/pradhan.jpg",
      phone: "+91 94510 24891",
      msg: lang === "hi" 
        ? "\"हमारा संकल्प: गरायें के हर गरीब का हक दिलाना और पूर्ण पारदर्शिता। 70+ मृतकों के नाम पर हो रहे फर्जी राशन उठान का पर्दाफाश कर गरीबों को वास्तविक हक दिलाया।\" (दैनिक जागरण में प्रकाशित)"
        : "\"Our pledge: To protect the rights of every needy villager with complete transparency. Successfully resolved 70+ fraudulent ration records to ensure grains reach the truly impoverished.\" (Published in Dainik Jagran)",
      badge: lang === "hi" ? "दैनिक जागरण सत्यापित जन प्रतिनिधि" : "Dainik Jagran Verified Leader"
    },
    {
      id: "bdc",
      role: lang === "hi" ? "ब्लॉक प्रमुख (BDC / क्षेत्र पंचायत)" : "Block Pramukh (Lambhua Block)",
      name: lang === "hi" ? "डॉ. कुंवर बहादुर सिंह" : "Dr. Kunwar Bahadur Singh",
      ward: lang === "hi" ? "विकास खंड कार्यालय, लंभुआ (सुल्तानपुर)" : "Block Development Office, Lambhua (Sultanpur)",
      image: "/images/bdc.jpg",
      phone: "+91 97920 67890",
      msg: lang === "hi"
        ? "\"गरायें ग्राम पंचायत के पक्के खड़ंजा, नाली निर्माण, हर घर नल और गौशाला हेतु ब्लॉक से पूर्ण सहयोग।\""
        : "\"Full block-level budgetary support for brick paving, modern drains, Har Ghar Jal pipelines and Gaushala development in Garayen.\"",
      badge: lang === "hi" ? "ब्लॉक प्रमुख, लंभुआ" : "Block Pramukh, Lambhua"
    },
    {
      id: "vidhayak",
      role: lang === "hi" ? "माननीय क्षेत्रीय विधायक (MLA)" : "Hon'ble MLA (190 Lambhua)",
      name: lang === "hi" ? "श्री सीताराम वर्मा" : "Shri Sitaram Verma",
      ward: lang === "hi" ? "190 लंभुआ विधानसभा निर्वाचन क्षेत्र (BJP)" : "190 Lambhua Assembly Constituency (BJP)",
      image: "/images/vidhayak.jpg",
      phone: "+91 94150 12345",
      msg: lang === "hi"
        ? "\"लंभुआ क्षेत्र के गरायें गाँव को मुख्य मार्ग, 24 घंटे निर्बाध बिजली और सरकारी योजनाओं से जोड़ना प्राथमिकता है।\""
        : "\"Connecting Garayen with all-weather roads, 24-hour reliable power, and state welfare programs remains our top priority.\"",
      badge: lang === "hi" ? "विधायक, 190 लंभुआ" : "MLA, 190 Lambhua"
    },
    {
      id: "sansad",
      role: lang === "hi" ? "माननीय सांसद (Member of Parliament)" : "Hon'ble Member of Parliament (MP)",
      name: lang === "hi" ? "श्री रामभुआल निषाद" : "Shri Rambhual Nishad",
      ward: lang === "hi" ? "38 सुल्तानपुर संसदीय निर्वाचन क्षेत्र (SP, 2024)" : "38 Sultanpur Parliamentary Constituency (SP, 2024)",
      image: "/images/sansad.jpg",
      phone: "+91 98390 54321",
      msg: lang === "hi"
        ? "\"सुल्तानपुर की ग्रामीण जनता, किसानों और नौजवानों के अधिकारों के लिए संसद में निरंतर संघर्ष और आवाज़।\""
        : "\"Committed to championing the aspirations of rural Sultanpur's farmers and youth from Parliament to village soil.\"",
      badge: lang === "hi" ? "सांसद, 38 सुल्तानपुर" : "MP, 38 Sultanpur"
    }
  ];

  return (
    <div>
      
      {/* ================= SECTION 1: 5 BADA PHOTO HERO SLIDER ================= */}
      <section style={{ position: "relative", backgroundColor: "#291204", color: "#ffffff", overflow: "hidden" }}>
        
        {/* Slider Media */}
        <div style={{ position: "relative", minHeight: "clamp(520px, 75vh, 680px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 0 80px 0" }}>
          
          <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
            <Image
              src={fiveBigPhotos[activeSlide].image}
              alt={fiveBigPhotos[activeSlide].title}
              fill
              style={{ objectFit: "cover", filter: "brightness(0.68) contrast(1.1)", transition: "all 0.6s ease-in-out" }}
              priority
            />
            {/* Warm Amber Royal Gradients */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(41,18,4,0.8) 0%, rgba(41,18,4,0.35) 40%, rgba(41,18,4,0.96) 100%)" }} />
          </div>

          {/* Hero Content */}
          <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            
            {/* Instagram VIP Pill */}
            <a
              href="https://www.instagram.com/garaye_garawa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "linear-gradient(135deg, rgba(217,119,6,0.35), rgba(245,158,11,0.25))",
                border: "1.5px solid #fbbf24",
                backdropFilter: "blur(8px)",
                padding: "8px 20px",
                borderRadius: "30px",
                marginBottom: "16px",
                color: "#fef08a",
                fontWeight: 700,
                fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)",
                textDecoration: "none"
              }}
            >
              <Sparkles size={16} color="#fbbf24" />
              <span>{lang === "hi" ? "गरायें लंभुआ ✨ (@garaye_garawa)" : "Garayen Lambhua ✨ (@garaye_garawa)"}</span>
              <InstagramIcon size={15} color="#fbbf24" />
            </a>

            <div style={{ marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 14px", borderRadius: "20px", fontSize: "0.82rem", fontWeight: 700, boxShadow: "0 2px 10px rgba(217,119,6,0.4)" }}>
                {fiveBigPhotos[activeSlide].tag}
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: "clamp(1.75rem, 4.5vw, 3.4rem)", 
                fontWeight: 800, 
                lineHeight: 1.2, 
                maxWidth: "960px", 
                margin: "0 auto 14px auto", 
                textShadow: "0 4px 20px rgba(0,0,0,0.85)" 
              }}
            >
              {fiveBigPhotos[activeSlide].title}
            </h1>

            <p 
              style={{ 
                fontSize: "clamp(0.92rem, 1.8vw, 1.15rem)", 
                maxWidth: "800px", 
                margin: "0 auto 26px auto", 
                color: "#fef3c7", 
                lineHeight: 1.6,
                textShadow: "0 2px 10px rgba(0,0,0,0.8)" 
              }}
            >
              {fiveBigPhotos[activeSlide].caption}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap", marginBottom: "28px" }}>
              <Link 
                href="/itihas" 
                className="btn btn-gold"
                style={{ padding: "12px 24px", fontSize: "0.95rem", borderRadius: "30px" }}
              >
                <BookOpen size={17} />
                <span>{lang === "hi" ? "ऐतिहासिक स्थल पूरा विवरण ›" : "Explore Historic Places ›"}</span>
              </Link>

              <Link 
                href="/samasya" 
                className="btn btn-outline-white"
                style={{ padding: "12px 22px", fontSize: "0.95rem", borderRadius: "30px" }}
              >
                <MessageSquareWarning size={17} color="#fbbf24" />
                <span>{lang === "hi" ? "समस्या दर्ज करें (Jansunwai)" : "File Grievance (Jansunwai)"}</span>
              </Link>

              <Link 
                href="/vikas-nidhi" 
                className="btn btn-primary"
                style={{ padding: "12px 22px", fontSize: "0.95rem", borderRadius: "30px" }}
              >
                <HeartHandshake size={17} />
                <span>{lang === "hi" ? "ग्राम विकास निधि में दान दें" : "Contribute to Village Fund"}</span>
              </Link>
            </div>

            {/* 5 Big Photos Thumbnail Indicators */}
            <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "8px", flexWrap: "wrap", background: "rgba(0,0,0,0.65)", padding: "8px 16px", borderRadius: "30px", border: "1px solid rgba(251,191,36,0.3)" }}>
              {fiveBigPhotos.map((photo, i) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  style={{
                    backgroundColor: activeSlide === i ? "#d97706" : "rgba(255,255,255,0.3)",
                    color: activeSlide === i ? "#ffffff" : "#fef3c7",
                    border: activeSlide === i ? "1px solid #fbbf24" : "none",
                    padding: "4px 12px",
                    borderRadius: "15px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {lang === "hi" ? `फोटो ${i + 1}` : `Photo ${i + 1}`}
                </button>
              ))}
            </div>

          </div>

          {/* Left / Right arrows */}
          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? fiveBigPhotos.length - 1 : prev - 1))}
            style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(41,18,4,0.65)", border: "1.5px solid #d97706", color: "#ffffff", width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(6px)" }}
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % fiveBigPhotos.length)}
            style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(41,18,4,0.65)", border: "1.5px solid #d97706", color: "#ffffff", width: "42px", height: "42px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(6px)" }}
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* 2026 Demographics Floating Strip */}
        <div style={{ position: "relative", zIndex: 30, marginTop: "-40px", marginBottom: "30px" }}>
          <div className="container">
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", 
                gap: "14px", 
                backgroundColor: "#ffffff", 
                padding: "20px 24px", 
                borderRadius: "20px", 
                boxShadow: "0 15px 40px rgba(217,119,6,0.15)", 
                border: "2px solid #fde68a" 
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "6px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#fef3c7", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Users size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                    {lang === "hi" ? "कुल जनसंख्या (2026)" : "Total Population (2026)"}
                  </span>
                  <strong style={{ fontSize: "1.35rem", color: "#78350f" }}>
                    {lang === "hi" ? "3,850+ नागरिक" : "3,850+ Residents"}
                  </strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "6px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#fffbeb", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                    {lang === "hi" ? "साक्षरता दर" : "Literacy Rate"}
                  </span>
                  <strong style={{ fontSize: "1.35rem", color: "#78350f" }}>76.8%</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "6px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#fef3c7", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                    {lang === "hi" ? "वार्ड / टोले" : "Wards / Hamlets"}
                  </span>
                  <strong style={{ fontSize: "1.35rem", color: "#78350f" }}>
                    {lang === "hi" ? "11 वार्ड (लंभुआ)" : "11 Wards (Lambhua)"}
                  </strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "6px" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", backgroundColor: "#fffbeb", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Building size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 600, display: "block" }}>
                    {lang === "hi" ? "प्राथमिक विद्यालय" : "Primary School"}
                  </span>
                  <strong style={{ fontSize: "1.35rem", color: "#78350f" }}>
                    {lang === "hi" ? "स्थापना 1917 से" : "Established in 1917"}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* ================= SECTION 2: HISTORIC PLACES TEASER ================= */}
      <section style={{ backgroundColor: "#fffdf8", padding: "50px 0" }}>
        <div className="container">
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "14px", marginBottom: "28px" }}>
            <div>
              <div className="vip-badge">
                <BookOpen size={16} />
                <span>{lang === "hi" ? "धरोहर व संस्कृति" : "Heritage & Culture"}</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.3rem)", fontWeight: 800, color: "#78350f", margin: "4px 0 0 0" }}>
                {lang === "hi" ? "गरायें के प्रमुख ऐतिहासिक स्थल" : "Key Historic Places of Garayen"}
              </h2>
            </div>

            <Link
              href="/itihas"
              className="btn btn-secondary"
              style={{ padding: "10px 20px", fontSize: "0.88rem", borderRadius: "20px" }}
            >
              <span>{lang === "hi" ? "समस्त ऐतिहासिक स्थल देखें (अलग पेज) ›" : "Explore All Historic Landmarks ›"}</span>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "20px" }}>
            {historicTeasers.map((place) => (
              <Link
                key={place.id}
                href="/itihas"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  className="card-vip"
                  style={{
                    padding: "0",
                    overflow: "hidden",
                    border: "1.5px solid #fde68a",
                    borderRadius: "18px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.borderColor = "#d97706";
                    e.currentTarget.style.boxShadow = "0 14px 35px rgba(217,119,6,0.18)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#fde68a";
                    e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  }}
                >
                  <div>
                    <div style={{ position: "relative", height: "180px", width: "100%" }}>
                      <Image src={place.image} alt={place.name} fill style={{ objectFit: "cover" }} />
                      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                        <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "3px 9px", borderRadius: "8px", fontSize: "0.72rem", fontWeight: 700, boxShadow: "0 2px 6px rgba(0,0,0,0.3)" }}>
                          {place.tag}
                        </span>
                      </div>
                    </div>

                    <div style={{ padding: "16px" }}>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#78350f", marginBottom: "6px" }}>
                        {place.name}
                      </h3>
                      <p style={{ fontSize: "0.86rem", color: "#5a4225", lineHeight: 1.5, margin: 0 }}>
                        {place.desc}
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: "12px 16px", borderTop: "1px solid #fef3c7", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fffbeb", color: "#b45309", fontWeight: 700, fontSize: "0.82rem" }}>
                    <span>{lang === "hi" ? "क्लिक करें - पूरा इतिहास पढ़ें" : "Click to Read Full History"}</span>
                    <ArrowRight size={14} color="#d97706" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 3: 4 TO 5 VILLAGE VIDEOS ================= */}
      <section style={{ backgroundColor: "#291204", color: "#ffffff", padding: "60px 0" }}>
        <div className="container">
          
          <div style={{ maxWidth: "800px", margin: "0 auto 32px auto", textAlign: "center" }}>
            <div className="vip-badge" style={{ backgroundColor: "rgba(217,119,6,0.2)", borderColor: "#d97706", color: "#fbbf24" }}>
              <Tv size={16} />
              <span>{lang === "hi" ? "गाँव वीडियो दर्शन (4-5 वीडियो)" : "Village Video Tour (5 Videos)"}</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, margin: "4px 0 8px 0", color: "#ffffff" }}>
              {lang === "hi" ? "गरायें गाँव का विहंगम वीडियो दर्शन" : "Scenic Video Showcase of Garayen"}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#fef3c7", margin: 0, opacity: 0.9 }}>
              {lang === "hi"
                ? "ड्रोन टूर, विख्यात लंभुआ दुर्गा पूजा, बाबा सिद्धेश्वर मंदिर महाआरती एवं 1917 प्राथमिक विद्यालय का सजीव वीडियो अनुभव।"
                : "Experience aerial drone tours, Durga Puja celebrations, temple Aarti, and our historic 1917 primary school."}
            </p>
          </div>

          {/* Active Big Video Player */}
          <div style={{ maxWidth: "900px", margin: "0 auto 26px auto", backgroundColor: "#180a02", borderRadius: "20px", overflow: "hidden", border: "2.5px solid #d97706", boxShadow: "0 20px 50px rgba(0,0,0,0.6)" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#000000" }}>
              <Image src={activeVideo.poster} alt={activeVideo.title} fill style={{ objectFit: "cover", opacity: isPlayingVideo ? 0.35 : 0.85 }} />
              
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px", textAlign: "center" }}>
                {!isPlayingVideo ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "#d97706", border: "3px solid #ffffff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 0 30px rgba(217,119,6,0.8)", marginBottom: "12px", transition: "transform 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      aria-label="Play video"
                    >
                      <Play size={34} style={{ marginLeft: "4px" }} fill="#ffffff" />
                    </button>
                    <span style={{ backgroundColor: "#d97706", color: "#ffffff", fontSize: "0.75rem", fontWeight: 700, padding: "3px 12px", borderRadius: "12px", marginBottom: "6px" }}>
                      {activeVideo.category} • {activeVideo.duration}
                    </span>
                    <h3 style={{ fontSize: "clamp(1.15rem, 3vw, 1.45rem)", fontWeight: 800, margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.85)" }}>
                      {activeVideo.title}
                    </h3>
                  </>
                ) : (
                  <div>
                    <span style={{ color: "#fbbf24", fontSize: "1.05rem", fontWeight: 800, display: "block", marginBottom: "6px" }}>
                      ▶ {lang === "hi" ? "वीडियो प्रसारण चालू है..." : "Video Playing..."}
                    </span>
                    <p style={{ color: "#e5e7eb", fontSize: "0.88rem", maxWidth: "550px", margin: "0 auto 14px auto" }}>
                      {activeVideo.desc}
                    </p>
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="btn btn-secondary"
                      style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "8px" }}
                    >
                      <Pause size={14} />
                      <span>{lang === "hi" ? "रोकें (Pause)" : "Pause Video"}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Video Info Below It */}
            <div style={{ padding: "18px 22px", borderTop: "1px solid rgba(251,191,36,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <span style={{ fontSize: "0.74rem", color: "#fbbf24", fontWeight: 700, textTransform: "uppercase" }}>
                  {lang === "hi" ? "वर्तमान चयनित वीडियो जानकारी" : "Current Video Track"}
                </span>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", margin: "2px 0 4px 0" }}>
                  {activeVideo.title}
                </h4>
                <p style={{ fontSize: "0.84rem", color: "#d1d5db", margin: 0 }}>
                  {activeVideo.desc}
                </p>
              </div>

              <a
                href="https://www.instagram.com/garaye_garawa/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "linear-gradient(135deg, #d97706, #f59e0b)",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 2px 10px rgba(217,119,6,0.4)"
                }}
              >
                <InstagramIcon size={16} />
                <span>{lang === "hi" ? "@garaye_garawa रील्स देखें" : "Watch @garaye_garawa Reels"}</span>
              </a>
            </div>
          </div>

          {/* 5 Video Thumbnails Row - Responsive Wrap */}
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: "10px" }}>
            {villageVideos.map((v, i) => (
              <div
                key={v.id}
                onClick={() => {
                  setActiveVideo(v);
                  setIsPlayingVideo(true);
                }}
                style={{
                  backgroundColor: activeVideo.id === v.id ? "#3d1b06" : "#1a0b02",
                  border: activeVideo.id === v.id ? "2px solid #d97706" : "1px solid rgba(251,191,36,0.2)",
                  borderRadius: "12px",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s"
                }}
              >
                <span style={{ fontSize: "0.72rem", color: "#fbbf24", fontWeight: 700, display: "block" }}>
                  {lang === "hi" ? `वीडियो ${i + 1}` : `Video ${i + 1}`}
                </span>
                <strong style={{ fontSize: "0.8rem", color: "#ffffff", display: "block", margin: "2px 0", lineHeight: 1.3 }}>
                  {v.title}
                </strong>
                <span style={{ fontSize: "0.7rem", color: "#fef3c7", opacity: 0.8 }}>{v.duration}</span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 4: GRAM PRADHAN & BDC LEADERSHIP ================= */}
      <section style={{ backgroundColor: "#ffffff", padding: "60px 0", borderTop: "1.5px solid #fde68a", borderBottom: "1.5px solid #fde68a" }}>
        <div className="container">
          
          <div style={{ maxWidth: "820px", margin: "0 auto 32px auto", textAlign: "center" }}>
            <div className="vip-badge">
              <Users size={16} />
              <span>{lang === "hi" ? "शासन व स्थानीय प्रशासन" : "Governance & Administration"}</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#78350f", margin: "4px 0 8px 0" }}>
              {lang === "hi" 
                ? "गरायें के ग्राम प्रधान, बीडीसी (ब्लॉक प्रमुख), विधायक व सांसद" 
                : "Village Head, Block Pramukh, MLA & Member of Parliament"}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#5a4225", margin: 0 }}>
              {lang === "hi"
                ? "190 लंभुआ विधानसभा, सुल्तानपुर संसदीय क्षेत्र एवं ग्राम पंचायत गरायें के अधिकृत निर्वाचित जन प्रतिनिधि।"
                : "Elected public representatives serving 190 Lambhua Assembly, Sultanpur Constituency and Garayen Panchayat."}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "22px" }}>
            {leadership.map((leader, idx) => (
              <div 
                key={idx}
                className="card-vip"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  border: "1.5px solid #fde68a",
                  borderRadius: "18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ position: "relative", height: "250px", width: "100%", backgroundColor: "#291204" }}>
                    <Image src={leader.image} alt={leader.name} fill style={{ objectFit: "cover", objectPosition: "top center" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(41,18,4,0.94) 100%)" }} />
                    
                    <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                      <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "3px 10px", borderRadius: "12px", fontSize: "0.72rem", fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                        {leader.role}
                      </span>
                    </div>

                    {leader.id === "pradhan" && (
                      <label 
                        style={{ 
                          position: "absolute", 
                          top: "12px", 
                          right: "12px", 
                          backgroundColor: "rgba(0,0,0,0.75)", 
                          color: "#fbbf24", 
                          padding: "4px 9px", 
                          borderRadius: "8px", 
                          fontSize: "0.72rem", 
                          fontWeight: 700, 
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          border: "1px solid rgba(251,191,36,0.6)",
                          backdropFilter: "blur(4px)",
                          zIndex: 2
                        }}
                        title={lang === "hi" ? "प्रधान जी की असली फोटो बदलें" : "Upload Pradhan's Photo"}
                      >
                        <Camera size={13} />
                        <span>{lang === "hi" ? "फोटो बदलें" : "Update Photo"}</span>
                        <input type="file" accept="image/*" onChange={handlePradhanPhotoUpload} style={{ display: "none" }} />
                      </label>
                    )}

                    <div style={{ position: "absolute", bottom: "12px", left: "16px", right: "16px", color: "#ffffff" }}>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 800, margin: "0 0 2px 0" }}>
                        {leader.name}
                      </h3>
                      <span style={{ fontSize: "0.78rem", color: "#fbbf24" }}>
                        {leader.ward}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: "16px" }}>
                    <p style={{ fontSize: "0.85rem", color: "#374151", fontStyle: "italic", lineHeight: 1.5, margin: "0 0 12px 0", backgroundColor: "#fffdf8", borderLeft: "3.5px solid #d97706", padding: "8px 10px", borderRadius: "0 6px 6px 0" }}>
                      {leader.msg}
                    </p>
                  </div>
                </div>

                <div style={{ padding: "12px 16px", borderTop: "1px solid #fef3c7", backgroundColor: "#fffbeb", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <a
                    href={`tel:${leader.phone}`}
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#78350f", fontWeight: 700, fontSize: "0.84rem", textDecoration: "none" }}
                  >
                    <Phone size={14} color="#d97706" />
                    <span>{leader.phone}</span>
                  </a>

                  <Link
                    href="/sampark"
                    style={{ fontSize: "0.8rem", color: "#d97706", fontWeight: 700, textDecoration: "none" }}
                  >
                    {lang === "hi" ? "संपर्क करें ›" : "Contact Now ›"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 5: SCHOOL, ANGANWADI & HOSPITAL ================= */}
      <section style={{ backgroundColor: "#fffdf8", padding: "60px 0" }}>
        <div className="container">
          
          <div style={{ maxWidth: "840px", margin: "0 auto 32px auto", textAlign: "center" }}>
            <div className="vip-badge">
              <Building size={16} />
              <span>{lang === "hi" ? "गाँव की जन सुविधाएं" : "Essential Village Facilities"}</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#78350f", margin: "4px 0 8px 0" }}>
              {lang === "hi" ? "गाँव के विद्यालय, आंगनबाड़ी केंद्र एवं अस्पताल" : "Schools, Anganwadi Centres & Healthcare Facilities"}
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#5a4225", margin: 0 }}>
              {lang === "hi" 
                ? "विद्यालय कहाँ है, आंगनबाड़ी केंद्र कहाँ है और अस्पताल कहाँ है — सबकी वास्तविक फोटो, सटीक स्थान एवं हेल्पलाइन संपर्क नंबर:"
                : "Exact locations, direct helplines, operating hours and photographs of public facilities in Garayen:"}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "22px" }}>
            
            {/* Card 1: School */}
            <div className="card-vip" style={{ padding: "0", overflow: "hidden", border: "1.5px solid #fde68a", borderRadius: "18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                  <Image src="/images/school.jpg" alt="Primary School Garayen 1917" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 10px", borderRadius: "8px", fontSize: "0.74rem", fontWeight: 800 }}>
                      {lang === "hi" ? "स्थापना: वर्ष 1917 ई. (109 वर्ष पुराना)" : "Est. 1917 AD (109 Years Heritage)"}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "18px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#78350f", marginBottom: "8px" }}>
                    {lang === "hi" ? "1. प्राथमिक विद्यालय गरायें (Ps Garayen)" : "1. Primary School Garayen (Ps Garayen)"}
                  </h3>
                  
                  <div style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "12px", borderRadius: "10px", marginBottom: "12px", fontSize: "0.85rem" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "6px" }}>
                      <MapPin size={16} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>{lang === "hi" ? "स्थान:" : "Location:"}</strong> {lang === "hi" ? "वार्ड नं. 6, मुख्य विद्यालय मार्ग, गरायें" : "Ward No. 6, Main School Road, Garayen"}</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <Clock size={16} color="#d97706" style={{ flexShrink: 0 }} />
                      <span><strong>{lang === "hi" ? "समय:" : "Hours:"}</strong> {lang === "hi" ? "प्रातः 09:00 से अपरान्ह 03:00 (सोम-शनि)" : "09:00 AM - 03:00 PM (Mon-Sat)"}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#5a4225", lineHeight: 1.5, margin: 0 }}>
                    {lang === "hi"
                      ? "निःशुल्क प्राथमिक शिक्षा, मध्याह्न भोजन (Mid-Day Meal), पाठ्यपुस्तक वितरण एवं खेलकूद मैदान। पास ही जवाहरलाल स्मारक इंटर कॉलेज स्थित है।"
                      : "Free primary education, Mid-Day Meals, textbooks and sports grounds. Jawaharlal Smarak Inter College is located nearby."}
                  </p>
                </div>
              </div>

              <div style={{ padding: "12px 18px", borderTop: "1px solid #fef3c7", backgroundColor: "#fffdf8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "#6b7280", display: "block" }}>
                    {lang === "hi" ? "प्रधानाध्यापक संपर्क" : "Headmaster Helpline"}
                  </span>
                  <a href="tel:+919450023456" style={{ color: "#78350f", fontWeight: 800, fontSize: "0.88rem", textDecoration: "none" }}>
                    📞 +91 94500 23456
                  </a>
                </div>
                <a href="tel:+919450023456" className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.8rem", borderRadius: "8px" }}>
                  {lang === "hi" ? "कॉल करें" : "Call Now"}
                </a>
              </div>
            </div>

            {/* Card 2: Anganwadi */}
            <div className="card-vip" style={{ padding: "0", overflow: "hidden", border: "1.5px solid #fde68a", borderRadius: "18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                  <Image src="/images/anganwadi.jpg" alt="Anganwadi Kendra Garayen" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 10px", borderRadius: "8px", fontSize: "0.74rem", fontWeight: 800 }}>
                      {lang === "hi" ? "महिला एवं बाल विकास विभाग (उ.प्र.)" : "Women & Child Development (UP)"}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "18px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#78350f", marginBottom: "8px" }}>
                    {lang === "hi" ? "2. आंगनबाड़ी केंद्र गरायें (वार्ड 3 व 6)" : "2. Anganwadi Centre Garayen (Wards 3 & 6)"}
                  </h3>

                  <div style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "12px", borderRadius: "10px", marginBottom: "12px", fontSize: "0.85rem" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "6px" }}>
                      <MapPin size={16} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>{lang === "hi" ? "स्थान:" : "Location:"}</strong> {lang === "hi" ? "केंद्र 1: शिव मंदिर टोला | केंद्र 2: प्रा.वि. परिसर" : "Centre 1: Shiv Mandir | Centre 2: Primary School"}</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <Clock size={16} color="#d97706" style={{ flexShrink: 0 }} />
                      <span><strong>{lang === "hi" ? "समय:" : "Hours:"}</strong> {lang === "hi" ? "प्रातः 08:30 से दोपहर 01:00 बजे तक" : "08:30 AM - 01:00 PM"}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#5a4225", lineHeight: 1.5, margin: 0 }}>
                    {lang === "hi"
                      ? "छोटे बच्चों हेतु बालवाटिका शिक्षा, पौष्टिक आहार वितरण, नियमित टीकाकरण (Vaccination) एवं गर्भवती माताओं की स्वास्थ्य देखभाल।"
                      : "Early childhood education, nutrition packages, infant vaccination drives, and healthcare support for expectant mothers."}
                  </p>
                </div>
              </div>

              <div style={{ padding: "12px 18px", borderTop: "1px solid #fef3c7", backgroundColor: "#fffdf8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "#6b7280", display: "block" }}>
                    {lang === "hi" ? "मुख्य कार्यकत्री संपर्क" : "Chief Worker Helpline"}
                  </span>
                  <a href="tel:+919792034567" style={{ color: "#78350f", fontWeight: 800, fontSize: "0.88rem", textDecoration: "none" }}>
                    📞 +91 97920 34567
                  </a>
                </div>
                <a href="tel:+919792034567" className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.8rem", borderRadius: "8px" }}>
                  {lang === "hi" ? "कॉल करें" : "Call Now"}
                </a>
              </div>
            </div>

            {/* Card 3: Hospital */}
            <div className="card-vip" style={{ padding: "0", overflow: "hidden", border: "1.5px solid #fde68a", borderRadius: "18px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                  <Image src="/images/hospital.jpg" alt="Community Health Centre Lambhua CHC" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(69,26,3,0.85) 100%)" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 10px", borderRadius: "8px", fontSize: "0.74rem", fontWeight: 800 }}>
                      {lang === "hi" ? "24 घंटे आपातकालीन चिकित्सा (108 सेवा)" : "24x7 Emergency Medical Care (Dial 108)"}
                    </span>
                  </div>
                  <div style={{ position: "absolute", bottom: "10px", left: "16px", right: "16px", color: "#ffffff" }}>
                    <span style={{ fontSize: "0.78rem", color: "#fef08a", fontWeight: 700 }}>
                      {lang === "hi" ? "चिकित्सा स्वास्थ्य एवं परिवार कल्याण विभाग" : "Medical Health & Family Welfare Department"}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "18px" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#78350f", marginBottom: "8px" }}>
                    {lang === "hi" ? "3. सरकारी अस्पताल (CHC) लंभुआ" : "3. Government Hospital (CHC) Lambhua"}
                  </h3>

                  <div style={{ backgroundColor: "#fffbeb", border: "1px solid #fde68a", padding: "12px", borderRadius: "10px", marginBottom: "12px", fontSize: "0.85rem" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "6px" }}>
                      <MapPin size={16} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>{lang === "hi" ? "स्थान:" : "Location:"}</strong> {lang === "hi" ? "लंभुआ मुख्य मार्ग (गरायें से मात्र 5 किमी दूरी)" : "Lambhua Main Road (5 km from Garayen)"}</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <Clock size={16} color="#d97706" style={{ flexShrink: 0 }} />
                      <span><strong>{lang === "hi" ? "सुविधा:" : "Services:"}</strong> {lang === "hi" ? "24 घंटे इमरजेंसी व 108 एम्बुलेंस सेवा" : "24/7 Emergency & 108 Ambulance"}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#5a4225", lineHeight: 1.5, margin: 0 }}>
                    {lang === "hi"
                      ? "नियमित ओपीडी, प्रसूति (डिलीवरी) सेवा, पैथोलॉजी जांच, निःशुल्क सरकारी दवाएं, रैबीज/टीकाकरण एवं गंभीर मरीजों हेतु रेफरल सेवा।"
                      : "Regular OPD, delivery care, pathology laboratory, free medicines, vaccination, and emergency ambulance referral."}
                  </p>
                </div>
              </div>

              <div style={{ padding: "12px 18px", borderTop: "1px solid #fef3c7", backgroundColor: "#fffdf8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "#b45309", display: "block", fontWeight: 700 }}>
                    {lang === "hi" ? "आपातकालीन एम्बुलेंस" : "Emergency Ambulance"}
                  </span>
                  <a href="tel:108" style={{ color: "#d97706", fontWeight: 900, fontSize: "1.05rem", textDecoration: "none" }}>
                    🚨 108 / 05362-234102
                  </a>
                </div>
                <a href="tel:108" className="btn btn-primary" style={{ padding: "7px 14px", fontSize: "0.82rem", borderRadius: "8px" }}>
                  {lang === "hi" ? "108 कॉल करें" : "Dial 108"}
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
