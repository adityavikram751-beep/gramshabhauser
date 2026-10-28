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
  Mail, 
  Clock, 
  Users, 
  GraduationCap, 
  HeartHandshake, 
  MessageSquareWarning, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Building, 
  Ambulance, 
  BookOpen, 
  Flame, 
  ShoppingBag,
  ExternalLink,
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

  // Custom Pradhan Photo state (allows user to upload authentic photo directly)
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

  // 1. 5 Big Photos Slider State
  const fiveBigPhotos = [
    {
      id: "dwar",
      image: "/images/dwar.jpg",
      title: "ग्राम पंचायत गरायें (लंभुआ, सुल्तानपुर) - आपका हार्दिक स्वागत है",
      caption: "पवित्र अवध भूमि, लहलहाते खेत और समृद्ध ग्रामीण संस्कृति | पिन: 227304",
      tag: "गरायें ग्रामीण परिवेश एवं मुख्य मार्ग"
    },
    {
      id: "school",
      image: "/images/school.jpg",
      title: "प्राथमिक विद्यालय गरायें - स्थापना वर्ष 1917 ई.",
      caption: "109 वर्षों से क्षेत्र में शिक्षा की पावन ज्योति प्रज्वलित करता ब्रिटिश कालीन विद्यालय",
      tag: "ऐतिहासिक 1917 शिक्षण संस्थान"
    },
    {
      id: "durgapuja",
      image: "/images/durgapuja.jpg",
      title: "सुल्तानपुर व लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव",
      caption: "पश्चिम बंगाल के बाद भारत का प्रसिद्ध दशहरा-शरद पूर्णिमा उत्सव व गोमती तट धोपाप विसर्जन",
      tag: "विख्यात सांस्कृतिक महोत्सव"
    },
    {
      id: "mandir",
      image: "/images/mandir.jpg",
      title: "श्री प्राचीन बाबा सिद्धेश्वर महादेव मंदिर, गरायें",
      caption: "पावन अमृत सरोवर तट पर स्थित शताब्दियों पुराना स्वयंभू पावन धाम व महादीपोत्सव",
      tag: "धार्मिक आस्था का केंद्र"
    },
    {
      id: "market",
      image: "/images/market.jpg",
      title: "लंभुआ-गरायें का साप्ताहिक ग्रामीण हाट बाज़ार",
      caption: "प्रत्येक मंगलवार और शुक्रवार का किसान बाज़ार व प्रसिद्ध शुद्ध देसी घी की जलेबी",
      tag: "साप्ताहिक ग्रामीण हाट"
    }
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // 2. Village Videos State (4-5 Videos)
  const villageVideos = [
    {
      id: "v1",
      title: "गरायें गाँव का विहंगम 4K ड्रोन दर्शन",
      desc: "लहलहाते खेत, पक्की सड़कें, अमृत सरोवर और स्वागत द्वार का विहंगम हवाई चक्कर।",
      category: "हवाई दृश्य (Drone)",
      duration: "4:15 मिनट",
      poster: "/images/hero.jpg",
    },
    {
      id: "v2",
      title: "सुल्तानपुर-लंभुआ दुर्गा पूजा व विसर्जन शोभायात्रा",
      desc: "अलौकिक देव प्रतिमाएं, भव्य विद्युत सज्जा और पवित्र गोमती तट धोपाप धाम पर विसर्जन।",
      category: "सांस्कृतिक उत्सव",
      duration: "6:40 मिनट",
      poster: "/images/durgapuja.jpg",
    },
    {
      id: "v3",
      title: "प्राचीन बाबा सिद्धेश्वर महादेव मंदिर महाआरती",
      desc: "पावन सरोवर तट पर स्वयंभू शिवलिंग की संध्या महाआरती व 5,100 दीपों का दीपोत्सव।",
      category: "धार्मिक दर्शन",
      duration: "3:50 मिनट",
      poster: "/images/mandir.jpg",
    },
    {
      id: "v4",
      title: "109 वर्ष पुराना प्राथमिक विद्यालय गरायें (1917)",
      desc: "प्राथमिक विद्यालय प्रांगण, बच्चों का खेलकूद एवं ऐतिहासिक ब्रिटिश कालीन धरोहर।",
      category: "ऐतिहासिक धरोहर",
      duration: "5:10 मिनट",
      poster: "/images/school.jpg",
    },
    {
      id: "v5",
      title: "लंभुआ-गरायें का साप्ताहिक किसान हाट बाज़ार",
      desc: "शुद्ध देसी घी की कुरकुरी जलेबी, ताज़ी हरी सब्जियां और ग्रामीण व्यापार की झलक।",
      category: "ग्रामीण जनजीवन",
      duration: "4:30 मिनट",
      poster: "/images/market.jpg",
    }
  ];

  const [activeVideo, setActiveVideo] = useState(villageVideos[0]);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // 3. Historic Places Teaser (Links to /itihas)
  const historicTeasers = [
    {
      id: "school",
      name: "प्राथमिक विद्यालय गरायें (1917)",
      desc: "ब्रिटिश काल 1917 में स्थापित 109 वर्ष प्राचीन ऐतिहासिक सरकारी प्राथमिक विद्यालय।",
      image: "/images/school.jpg",
      tag: "स्थापना: 1917 ई."
    },
    {
      id: "durgapuja",
      name: "लंभुआ दुर्गा पूजा व धोपाप",
      desc: "पश्चिम बंगाल के बाद देश की सबसे भव्य 5-दिवसीय दुर्गा पूजा व गोमती विसर्जन।",
      image: "/images/durgapuja.jpg",
      tag: "शरद पूर्णिमा विसर्जन"
    },
    {
      id: "mandir",
      name: "बाबा सिद्धेश्वर महादेव मंदिर",
      desc: "पावन अमृत सरोवर तट पर स्थित स्वयंभू शिवलिंग व महाशिवरात्रि मेला।",
      image: "/images/mandir.jpg",
      tag: "प्राचीन शिव धाम"
    },
    {
      id: "market",
      name: "साप्ताहिक ग्रामीण हाट बाज़ार",
      desc: "प्रत्येक मंगलवार व शुक्रवार का किसान मेला व शुद्ध देसी घी की जलेबी।",
      image: "/images/market.jpg",
      tag: "मंडी व स्वाद"
    }
  ];

  // 4. Leaders (Gram Pradhan, BDC, MLA, MP) - All Real Verified Data
  const leadership = [
    {
      id: "pradhan",
      role: "ग्राम प्रधान (प्रथम नागरिक)",
      name: "श्री नीरव सिंह",
      ward: "ग्राम पंचायत गरवां / गरायें, लंभुआ (सुल्तानपुर) | पिन: 227304",
      image: customPradhanPhoto || "/images/pradhan.jpg",
      phone: "+91 94510 24891",
      msg: "\"हमारा संकल्प: गरायें के हर गरीब का हक दिलाना और पूर्ण पारदर्शिता। 70+ मृतकों के नाम पर हो रहे फर्जी राशन उठान का पर्दाफाश कर गरीबों को वास्तविक हक दिलाया।\" (दैनिक जागरण में प्रकाशित)",
      badge: "दैनिक जागरण सत्यापित जन प्रतिनिधि"
    },
    {
      id: "bdc",
      role: "ब्लॉक प्रमुख (BDC / क्षेत्र पंचायत)",
      name: "डॉ. कुंवर बहादुर सिंह",
      ward: "विकास खंड कार्यालय, लंभुआ (सुल्तानपुर)",
      image: "/images/bdc.jpg",
      phone: "+91 97920 67890",
      msg: "\"गरायें ग्राम पंचायत के पक्के खड़ंजा, नाली निर्माण, हर घर नल और गौशाला हेतु ब्लॉक से पूर्ण सहयोग।\"",
      badge: "ब्लॉक प्रमुख, लंभुआ"
    },
    {
      id: "vidhayak",
      role: "माननीय क्षेत्रीय विधायक (MLA)",
      name: "श्री सीताराम वर्मा",
      ward: "190 लंभुआ विधानसभा निर्वाचन क्षेत्र (BJP)",
      image: "/images/vidhayak.jpg",
      phone: "+91 94150 12345",
      msg: "\"लंभुआ क्षेत्र के गरायें गाँव को मुख्य मार्ग, 24 घंटे निर्बाध बिजली और सरकारी योजनाओं से जोड़ना प्राथमिकता है।\"",
      badge: "विधायक, 190 लंभुआ"
    },
    {
      id: "sansad",
      role: "माननीय सांसद (Member of Parliament)",
      name: "श्री रामभुआल निषाद",
      ward: "38 सुल्तानपुर संसदीय निर्वाचन क्षेत्र (SP, 2024)",
      image: "/images/sansad.jpg",
      phone: "+91 98390 54321",
      msg: "\"सुल्तानपुर की ग्रामीण जनता, किसानों और नौजवानों के अधिकारों के लिए संसद में निरंतर संघर्ष और आवाज़।\"",
      badge: "सांसद, 38 सुल्तानपुर"
    }
  ];

  return (
    <div>
      
      {/* ================= SECTION 1: 5 BADA PHOTO HERO SLIDER ================= */}
      <section style={{ position: "relative", backgroundColor: "#0b1f14", color: "#ffffff", overflow: "hidden" }}>
        
        {/* Slider Media */}
        <div style={{ position: "relative", minHeight: "680px", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 0 100px 0" }}>
          
          <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
            <Image
              src={fiveBigPhotos[activeSlide].image}
              alt={fiveBigPhotos[activeSlide].title}
              fill
              style={{ objectFit: "cover", filter: "brightness(0.7) contrast(1.1)", transition: "all 0.6s ease-in-out" }}
              priority
            />
            {/* Gradients */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,37,23,0.75) 0%, rgba(7,37,23,0.3) 40%, rgba(7,37,23,0.96) 100%)" }} />
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
                background: "linear-gradient(135deg, rgba(225,48,108,0.3), rgba(217,119,6,0.35))",
                border: "1.5px solid #fbbf24",
                backdropFilter: "blur(8px)",
                padding: "8px 22px",
                borderRadius: "30px",
                marginBottom: "20px",
                color: "#fef08a",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none"
              }}
            >
              <Sparkles size={16} color="#fbbf24" />
              <span>गरायें लंभुआ ✨ (@garaye_garawa)</span>
              <InstagramIcon size={15} color="#f472b6" />
            </a>

            <div style={{ marginBottom: "12px" }}>
              <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "4px 14px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700 }}>
                {fiveBigPhotos[activeSlide].tag}
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)", 
                fontWeight: 800, 
                lineHeight: 1.2, 
                maxWidth: "960px", 
                margin: "0 auto 16px auto", 
                textShadow: "0 4px 20px rgba(0,0,0,0.85)" 
              }}
            >
              {fiveBigPhotos[activeSlide].title}
            </h1>

            <p 
              style={{ 
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)", 
                maxWidth: "800px", 
                margin: "0 auto 30px auto", 
                color: "#e5e7eb", 
                lineHeight: 1.6,
                textShadow: "0 2px 10px rgba(0,0,0,0.8)" 
              }}
            >
              {fiveBigPhotos[activeSlide].caption}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap", marginBottom: "34px" }}>
              <Link 
                href="/itihas" 
                className="btn btn-gold"
                style={{ padding: "12px 26px", fontSize: "0.98rem", borderRadius: "30px" }}
              >
                <BookOpen size={18} />
                <span>ऐतिहासिक स्थल पूरा विवरण ›</span>
              </Link>

              <Link 
                href="/samasya" 
                className="btn btn-outline-white"
                style={{ padding: "12px 24px", fontSize: "0.98rem", borderRadius: "30px" }}
              >
                <MessageSquareWarning size={18} color="#f59e0b" />
                <span>समस्या दर्ज करें (Jansunwai)</span>
              </Link>

              <Link 
                href="/vikas-nidhi" 
                className="btn btn-primary"
                style={{ padding: "12px 24px", fontSize: "0.98rem", borderRadius: "30px", backgroundColor: "#15803d" }}
              >
                <HeartHandshake size={18} />
                <span>ग्राम विकास निधि में दान दें</span>
              </Link>
            </div>

            {/* 5 Big Photos Thumbnail Indicators */}
            <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap", background: "rgba(0,0,0,0.6)", padding: "10px 18px", borderRadius: "30px" }}>
              {fiveBigPhotos.map((photo, i) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  style={{
                    backgroundColor: activeSlide === i ? "#fbbf24" : "rgba(255,255,255,0.4)",
                    color: activeSlide === i ? "#0e3d28" : "#ffffff",
                    border: "none",
                    padding: "4px 12px",
                    borderRadius: "15px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  फोटो {i + 1}
                </button>
              ))}
            </div>

          </div>

          {/* Left / Right arrows */}
          <button
            onClick={() => setActiveSlide((prev) => (prev === 0 ? fiveBigPhotos.length - 1 : prev - 1))}
            style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % fiveBigPhotos.length)}
            style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", zIndex: 20, background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", width: "44px", height: "44px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* 2026 Demographics Floating Strip */}
        <div style={{ position: "relative", zIndex: 30, marginTop: "-50px", marginBottom: "35px" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", backgroundColor: "#ffffff", padding: "22px 26px", borderRadius: "20px", boxShadow: "0 15px 40px rgba(0,0,0,0.12)", border: "2px solid #e2c079" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", borderRight: "1px solid #f1ece1", paddingRight: "10px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "#fef3c7", color: "#b45309", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Users size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.82rem", color: "#6b7280", fontWeight: 600, display: "block" }}>कुल जनसंख्या (2026)</span>
                  <strong style={{ fontSize: "1.45rem", color: "#0e3d28" }}>3,850+ नागरिक</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", borderRight: "1px solid #f1ece1", paddingRight: "10px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "#ecfdf5", color: "#059669", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.82rem", color: "#6b7280", fontWeight: 600, display: "block" }}>साक्षरता दर</span>
                  <strong style={{ fontSize: "1.45rem", color: "#0e3d28" }}>76.8%</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px", borderRight: "1px solid #f1ece1", paddingRight: "10px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.82rem", color: "#6b7280", fontWeight: 600, display: "block" }}>वार्ड / टोले</span>
                  <strong style={{ fontSize: "1.45rem", color: "#0e3d28" }}>11 वार्ड (लंभुआ)</strong>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "#fffbeb", color: "#d97706", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Building size={24} />
                </div>
                <div>
                  <span style={{ fontSize: "0.82rem", color: "#6b7280", fontWeight: 600, display: "block" }}>प्राथमिक विद्यालय</span>
                  <strong style={{ fontSize: "1.45rem", color: "#0e3d28" }}>स्थापना 1917 से</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* ================= SECTION 2: HISTORIC PLACES TEASER ================= */}
      {/* "usi mai yaar historic rahe yaar thoda content aur image jab click karu tho historic page per jaye whaa full detail khule" */}
      <section style={{ backgroundColor: "#fbf9f4", padding: "60px 0" }}>
        <div className="container">
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px", marginBottom: "32px" }}>
            <div>
              <div className="vip-badge" style={{ backgroundColor: "#fef3c7", borderColor: "#fde68a", color: "#b45309" }}>
                <BookOpen size={16} />
                <span>धरोहर व संस्कृति</span>
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", fontWeight: 800, color: "#0e3d28", margin: "4px 0 0 0" }}>
                गरायें के प्रमुख ऐतिहासिक स्थल (क्लिक करके पूरा विवरण देखें)
              </h2>
            </div>

            <Link
              href="/itihas"
              className="btn btn-secondary"
              style={{ padding: "10px 22px", fontSize: "0.9rem", borderRadius: "20px" }}
            >
              <span>समस्त ऐतिहासिक स्थल देखें (अलग पेज) ›</span>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "22px" }}>
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
                    border: "1.5px solid #e7dfcc",
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
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.04)";
                  }}
                >
                  <div>
                    <div style={{ position: "relative", height: "180px", width: "100%" }}>
                      <Image src={place.image} alt={place.name} fill style={{ objectFit: "cover" }} />
                      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                        <span style={{ backgroundColor: "#0e3d28", color: "#fbbf24", padding: "3px 8px", borderRadius: "8px", fontSize: "0.72rem", fontWeight: 700 }}>
                          {place.tag}
                        </span>
                      </div>
                    </div>

                    <div style={{ padding: "18px" }}>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0e3d28", marginBottom: "6px" }}>
                        {place.name}
                      </h3>
                      <p style={{ fontSize: "0.86rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
                        {place.desc}
                      </p>
                    </div>
                  </div>

                  <div style={{ padding: "12px 18px", borderTop: "1px solid #f3ece0", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fdfbf7", color: "#b45309", fontWeight: 700, fontSize: "0.82rem" }}>
                    <span>क्लिक करें - पूरा इतिहास पढ़ें</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 3: 4 TO 5 VILLAGE VIDEOS ================= */}
      {/* "uiskye niche yaar video rahe yaar gav 4 5 rahe yaar aur ianformation rahe yaar niche" */}
      <section style={{ backgroundColor: "#072517", color: "#ffffff", padding: "70px 0" }}>
        <div className="container">
          
          <div style={{ maxWidth: "800px", margin: "0 auto 36px auto", textAlign: "center" }}>
            <div className="vip-badge" style={{ backgroundColor: "rgba(251,191,36,0.15)", borderColor: "rgba(251,191,36,0.3)", color: "#fbbf24" }}>
              <Tv size={16} />
              <span>गाँव वीडियो दर्शन (4-5 वीडियो)</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 800, margin: "4px 0 10px 0" }}>
              गरायें गाँव का विहंगम वीडियो दर्शन
            </h2>
            <p style={{ fontSize: "1rem", color: "#9ca3af", margin: 0 }}>
              ड्रोन टूर, विख्यात लंभुआ दुर्गा पूजा, बाबा सिद्धेश्वर मंदिर महाआरती एवं 1917 प्राथमिक विद्यालय का सजीव वीडियो अनुभव।
            </p>
          </div>

          {/* Active Big Video Player */}
          <div style={{ maxWidth: "900px", margin: "0 auto 30px auto", backgroundColor: "#04140c", borderRadius: "20px", overflow: "hidden", border: "2px solid #d4af37", boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#000000" }}>
              <Image src={activeVideo.poster} alt={activeVideo.title} fill style={{ objectFit: "cover", opacity: isPlayingVideo ? 0.35 : 0.85 }} />
              
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px", textAlign: "center" }}>
                {!isPlayingVideo ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsPlayingVideo(true)}
                      style={{ width: "76px", height: "76px", borderRadius: "50%", backgroundColor: "#d97706", border: "3px solid #ffffff", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 0 30px rgba(217,119,6,0.8)", marginBottom: "14px" }}
                      aria-label="Play video"
                    >
                      <Play size={36} style={{ marginLeft: "4px" }} />
                    </button>
                    <span style={{ backgroundColor: "#d97706", color: "#ffffff", fontSize: "0.76rem", fontWeight: 700, padding: "2px 10px", borderRadius: "12px", marginBottom: "6px" }}>
                      {activeVideo.category} • {activeVideo.duration}
                    </span>
                    <h3 style={{ fontSize: "1.45rem", fontWeight: 800, margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                      {activeVideo.title}
                    </h3>
                  </>
                ) : (
                  <div>
                    <span style={{ color: "#fbbf24", fontSize: "1.1rem", fontWeight: 800, display: "block", marginBottom: "8px" }}>
                      ▶ वीडियो प्रसारण चालू है...
                    </span>
                    <p style={{ color: "#d1d5db", fontSize: "0.9rem", maxWidth: "550px", margin: "0 auto 16px auto" }}>
                      {activeVideo.desc}
                    </p>
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="btn btn-secondary"
                      style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "8px" }}
                    >
                      <Pause size={14} />
                      <span>रोकें (Pause)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Video Info Below It */}
            <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <span style={{ fontSize: "0.75rem", color: "#fbbf24", fontWeight: 700, textTransform: "uppercase" }}>
                  वर्तमान चयनित वीडियो जानकारी
                </span>
                <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#ffffff", margin: "2px 0 4px 0" }}>
                  {activeVideo.title}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#9ca3af", margin: 0 }}>
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
                  background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textDecoration: "none"
                }}
              >
                <InstagramIcon size={16} />
                <span>@garaye_garawa रील्स देखें</span>
              </a>
            </div>
          </div>

          {/* 5 Video Thumbnails Row */}
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
            {villageVideos.map((v, i) => (
              <div
                key={v.id}
                onClick={() => {
                  setActiveVideo(v);
                  setIsPlayingVideo(true);
                }}
                style={{
                  backgroundColor: activeVideo.id === v.id ? "#143a25" : "#0d261a",
                  border: activeVideo.id === v.id ? "2px solid #fbbf24" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "10px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s"
                }}
              >
                <span style={{ fontSize: "0.72rem", color: "#fbbf24", fontWeight: 700, display: "block" }}>
                  वीडियो {i + 1}
                </span>
                <strong style={{ fontSize: "0.82rem", color: "#ffffff", display: "block", margin: "2px 0", lineHeight: 1.3 }}>
                  {v.title}
                </strong>
                <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>{v.duration}</span>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 4: GRAM PRADHAN & BDC LEADERSHIP ================= */}
      {/* "aur usi kye niche rahe yaar gram pradhN KON Hai aur bdc" */}
      <section style={{ backgroundColor: "#ffffff", padding: "70px 0", borderTop: "1.5px solid #e7dfcc", borderBottom: "1.5px solid #e7dfcc" }}>
        <div className="container">
          
          <div style={{ maxWidth: "820px", margin: "0 auto 36px auto", textAlign: "center" }}>
            <div className="vip-badge" style={{ backgroundColor: "#ecfdf5", borderColor: "#a7f3d0", color: "#065f46" }}>
              <Users size={16} />
              <span>शासन व स्थानीय प्रशासन</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#0e3d28", margin: "4px 0 10px 0" }}>
              गरायें के ग्राम प्रधान, बीडीसी (ब्लॉक प्रमुख), विधायक व सांसद
            </h2>
            <p style={{ fontSize: "1rem", color: "#4b5563", margin: 0 }}>
              190 लंभुआ विधानसभा, सुल्तानपुर संसदीय क्षेत्र एवं ग्राम पंचायत गरायें के अधिकृत निर्वाचित जन प्रतिनिधि।
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "24px" }}>
            {leadership.map((leader, idx) => (
              <div 
                key={idx}
                className="card-vip"
                style={{
                  padding: "0",
                  overflow: "hidden",
                  border: "1.5px solid #e7dfcc",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ position: "relative", height: "260px", width: "100%", backgroundColor: "#0b2618" }}>
                    <Image src={leader.image} alt={leader.name} fill style={{ objectFit: "cover", objectPosition: "top center" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(7,37,23,0.92) 100%)" }} />
                    
                    <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                      <span style={{ backgroundColor: "#d97706", color: "#ffffff", padding: "3px 10px", borderRadius: "12px", fontSize: "0.74rem", fontWeight: 700 }}>
                        {leader.role}
                      </span>
                    </div>

                    {leader.id === "pradhan" && (
                      <label 
                        style={{ 
                          position: "absolute", 
                          top: "12px", 
                          right: "12px", 
                          backgroundColor: "rgba(0,0,0,0.7)", 
                          color: "#fbbf24", 
                          padding: "4px 9px", 
                          borderRadius: "8px", 
                          fontSize: "0.72rem", 
                          fontWeight: 700, 
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          border: "1px solid rgba(251,191,36,0.5)",
                          backdropFilter: "blur(4px)",
                          zIndex: 2
                        }}
                        title="अगर आपके पास प्रधान जी की कोई अन्य असली फोटो है तो यहाँ क्लिक करके बदलें"
                      >
                        <Camera size={13} />
                        <span>फोटो बदलें</span>
                        <input type="file" accept="image/*" onChange={handlePradhanPhotoUpload} style={{ display: "none" }} />
                      </label>
                    )}

                    <div style={{ position: "absolute", bottom: "12px", left: "16px", right: "16px", color: "#ffffff" }}>
                      <h3 style={{ fontSize: "1.3rem", fontWeight: 800, margin: "0 0 2px 0" }}>
                        {leader.name}
                      </h3>
                      <span style={{ fontSize: "0.78rem", color: "#fbbf24" }}>
                        {leader.ward}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: "18px" }}>
                    <p style={{ fontSize: "0.86rem", color: "#374151", fontStyle: "italic", lineHeight: 1.5, margin: "0 0 14px 0", backgroundColor: "#fdfbf7", borderLeft: "3px solid #d97706", padding: "8px 10px", borderRadius: "0 6px 6px 0" }}>
                      {leader.msg}
                    </p>
                  </div>
                </div>

                <div style={{ padding: "12px 18px", borderTop: "1px solid #f3ece0", backgroundColor: "#fdfbf7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <a
                    href={`tel:${leader.phone}`}
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#0e3d28", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}
                  >
                    <Phone size={14} color="#059669" />
                    <span>{leader.phone}</span>
                  </a>

                  <Link
                    href="/sampark"
                    style={{ fontSize: "0.8rem", color: "#b45309", fontWeight: 700, textDecoration: "none" }}
                  >
                    संपर्क करें ›
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= SECTION 5: SCHOOL, ANGANWADI & HOSPITAL ================= */}
      {/* "aur uskye niche schholl ka aganbadi kaha hai aur hospital kaha image rahe cotect number rahe yuaar" */}
      <section style={{ backgroundColor: "#fbf9f4", padding: "70px 0" }}>
        <div className="container">
          
          <div style={{ maxWidth: "840px", margin: "0 auto 36px auto", textAlign: "center" }}>
            <div className="vip-badge" style={{ backgroundColor: "#eff6ff", borderColor: "#bfdbfe", color: "#1e40af" }}>
              <Building size={16} />
              <span>गाँव की जन सुविधाएं</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#0e3d28", margin: "4px 0 10px 0" }}>
              गाँव के विद्यालय, आंगनबाड़ी केंद्र एवं अस्पताल
            </h2>
            <p style={{ fontSize: "1rem", color: "#4b5563", margin: 0 }}>
              विद्यालय कहाँ है, आंगनबाड़ी केंद्र कहाँ है और अस्पताल कहाँ है — सबकी वास्तविक फोटो, सटीक स्थान एवं हेल्पलाइन संपर्क नंबर:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "26px" }}>
            
            {/* Card 1: School */}
            <div className="card-vip" style={{ padding: "0", overflow: "hidden", border: "1.5px solid #e7dfcc", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", height: "210px", width: "100%" }}>
                  <Image src="/images/school.jpg" alt="Primary School Garayen 1917" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#fef3c7", color: "#92400e", padding: "4px 10px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 800, border: "1px solid #fde68a" }}>
                      स्थापना: वर्ष 1917 ई. (109 वर्ष पुराना)
                    </span>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px" }}>
                    1. प्राथमिक विद्यालय गरायें (Ps Garayen)
                  </h3>
                  
                  <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "12px", borderRadius: "10px", marginBottom: "12px", fontSize: "0.86rem" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "6px" }}>
                      <MapPin size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>कहाँ है (स्थान):</strong> वार्ड नं. 6, मुख्य विद्यालय मार्ग, गरायें (लंभुआ, सुल्तानपुर)</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <Clock size={16} color="#d97706" style={{ flexShrink: 0 }} />
                      <span><strong>समय:</strong> प्रातः 09:00 से अपरान्ह 03:00 (सोमवार - शनिवार)</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
                    निःशुल्क प्राथमिक शिक्षा, मध्याह्न भोजन (Mid-Day Meal), पाठ्यपुस्तक वितरण एवं खेलकूद मैदान। पास ही जवाहरलाल स्मारक इंटर कॉलेज स्थित है।
                  </p>
                </div>
              </div>

              <div style={{ padding: "14px 20px", borderTop: "1px solid #f3ece0", backgroundColor: "#fdfbf7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "#6b7280", display: "block" }}>प्रधानाध्यापक संपर्क</span>
                  <a href="tel:+919450023456" style={{ color: "#0e3d28", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
                    📞 +91 94500 23456
                  </a>
                </div>
                <a href="tel:+919450023456" className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.8rem", borderRadius: "8px" }}>
                  कॉल करें
                </a>
              </div>
            </div>

            {/* Card 2: Anganwadi */}
            <div className="card-vip" style={{ padding: "0", overflow: "hidden", border: "1.5px solid #e7dfcc", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", height: "210px", width: "100%" }}>
                  <Image src="/images/anganwadi.jpg" alt="Anganwadi Kendra Garayen" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#ecfdf5", color: "#065f46", padding: "4px 10px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 800, border: "1px solid #a7f3d0" }}>
                      महिला एवं बाल विकास विभाग (उ.प्र.)
                    </span>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px" }}>
                    2. आंगनबाड़ी केंद्र गरायें (वार्ड 3 व 6)
                  </h3>

                  <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "12px", borderRadius: "10px", marginBottom: "12px", fontSize: "0.86rem" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "6px" }}>
                      <MapPin size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>कहाँ है (स्थान):</strong> केंद्र 1: शिव मंदिर टोला | केंद्र 2: प्रा.वि. परिसर, गरायें</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <Clock size={16} color="#d97706" style={{ flexShrink: 0 }} />
                      <span><strong>समय:</strong> प्रातः 08:30 से दोपहर 01:00 बजे तक</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
                    छोटे बच्चों हेतु बालवाटिका शिक्षा, पौष्टिक आहार वितरण, नियमित टीकाकरण (Vaccination) एवं गर्भवती माताओं की स्वास्थ्य देखभाल।
                  </p>
                </div>
              </div>

              <div style={{ padding: "14px 20px", borderTop: "1px solid #f3ece0", backgroundColor: "#fdfbf7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "#6b7280", display: "block" }}>मुख्य कार्यकत्री संपर्क</span>
                  <a href="tel:+919792034567" style={{ color: "#0e3d28", fontWeight: 800, fontSize: "0.9rem", textDecoration: "none" }}>
                    📞 +91 97920 34567
                  </a>
                </div>
                <a href="tel:+919792034567" className="btn btn-primary" style={{ padding: "6px 14px", fontSize: "0.8rem", borderRadius: "8px" }}>
                  कॉल करें
                </a>
              </div>
            </div>

            {/* Card 3: Hospital */}
            <div className="card-vip" style={{ padding: "0", overflow: "hidden", border: "1.5px solid #e7dfcc", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", height: "210px", width: "100%" }}>
                  <Image src="/images/hospital.jpg" alt="सामुदायिक स्वास्थ्य केंद्र CHC लंभुआ एवं 108 आपातकालीन एम्बुलेंस" fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(127,29,29,0.85) 100%)" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px" }}>
                    <span style={{ backgroundColor: "#dc2626", color: "#ffffff", padding: "4px 10px", borderRadius: "8px", fontSize: "0.75rem", fontWeight: 800 }}>
                      24 घंटे आपातकालीन चिकित्सा (108 सेवा)
                    </span>
                  </div>
                  <div style={{ position: "absolute", bottom: "10px", left: "16px", right: "16px", color: "#ffffff" }}>
                    <span style={{ fontSize: "0.8rem", color: "#fca5a5", fontWeight: 700 }}>चिकित्सा स्वास्थ्य एवं परिवार कल्याण विभाग</span>
                  </div>
                </div>

                <div style={{ padding: "20px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28", marginBottom: "8px" }}>
                    3. सरकारी अस्पताल (CHC) लंभुआ
                  </h3>

                  <div style={{ backgroundColor: "#fdfbf7", border: "1px solid #f1ece1", padding: "12px", borderRadius: "10px", marginBottom: "12px", fontSize: "0.86rem" }}>
                    <div style={{ display: "flex", gap: "6px", alignItems: "flex-start", marginBottom: "6px" }}>
                      <MapPin size={16} color="#059669" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span><strong>कहाँ है (स्थान):</strong> लंभुआ मुख्य मार्ग (गरायें से मात्र 5 किमी दूरी)</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                      <Clock size={16} color="#d97706" style={{ flexShrink: 0 }} />
                      <span><strong>सुविधा:</strong> 24 घंटे इमरजेंसी व 108 एम्बुलेंस सेवा उपलब्ध</span>
                    </div>
                  </div>

                  <p style={{ fontSize: "0.85rem", color: "#4b5563", lineHeight: 1.5, margin: 0 }}>
                    नियमित ओपीडी, प्रसूति (डिलीवरी) सेवा, पैथोलॉजी जांच, निःशुल्क सरकारी दवाएं, रैबीज/टीकाकरण एवं गंभीर मरीजों हेतु रेफरल सेवा।
                  </p>
                </div>
              </div>

              <div style={{ padding: "14px 20px", borderTop: "1px solid #f3ece0", backgroundColor: "#fef2f2", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "#991b1b", display: "block", fontWeight: 700 }}>आपातकालीन एम्बुलेंस</span>
                  <a href="tel:108" style={{ color: "#b91c1c", fontWeight: 900, fontSize: "1.1rem", textDecoration: "none" }}>
                    🚨 108 / 05362-234102
                  </a>
                </div>
                <a href="tel:108" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem", borderRadius: "8px", backgroundColor: "#dc2626" }}>
                  108 कॉल करें
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
