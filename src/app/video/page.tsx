"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Play, 
  Pause, 
  Tv, 
  PlusCircle
} from "lucide-react"; 

// Standalone Instagram Icon
const InstagramIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20, color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function VideoTourPage() {
  const { t, lang } = useLanguage();

  const [activeVideoId, setActiveVideoId] = useState("drone");
  const [isPlaying, setIsPlaying] = useState(false);
  const [customUrl, setCustomUrl] = useState("");
  const [activeEmbedUrl, setActiveEmbedUrl] = useState<string | null>(null);

  const videoTracks = [
    {
      id: "drone",
      title: { 
        hi: "गरायें गाँव का विहंगम ड्रोन दर्शन (4K Aerial Tour)", 
        en: "Panoramic Drone Tour of Garayen Village (4K Aerial)" 
      },
      category: { hi: "हवाई दृश्य (Drone)", en: "Aerial View (Drone)" },
      duration: { hi: "4:15 मिनट", en: "4:15 min" },
      desc: { 
        hi: "लहलहाते सरसों व गेहूं के खेत, मुख्य प्रवेश द्वार (Swagat Dwar), पक्की सड़कें, अमृत सरोवर और गरायें गाँव की हरियाली का मनोरम विहंगम दृश्य।",
        en: "Lush mustard and wheat fields, grand entrance gateway, paved roads, Amrit Sarovar pond, and scenic green landscapes of Garayen village."
      },
      poster: "/images/hero.jpg",
    },
    {
      id: "durgapuja",
      title: { 
        hi: "सुल्तानपुर-लंभुआ ऐतिहासिक दुर्गा पूजा व विसर्जन शोभायात्रा", 
        en: "Historic Sultanpur-Lambhua Durga Puja & Grand Immersion Procession" 
      },
      category: { hi: "सांस्कृतिक उत्सव", en: "Cultural Festival" },
      duration: { hi: "6:40 मिनट", en: "6:40 min" },
      desc: { 
        hi: "पश्चिम बंगाल जैसी प्रसिद्ध सुल्तानपुर दुर्गा पूजा के भव्य पंडाल, अलौकिक विग्रह और पवित्र गोमती तट (धोपाप धाम) पर महाविसर्जन की झांकियां।",
        en: "Celebrated grand pandals of Sultanpur Durga Puja, divine idols, and grand immersion carnival on the sacred banks of Gomti River at Dhopap."
      },
      poster: "/images/durgapuja.jpg",
    },
    {
      id: "mandir",
      title: { 
        hi: "प्राचीन सिद्धेश्वर महादेव मंदिर गरायें - महाआरती व दीपोत्सव", 
        en: "Ancient Siddheshwar Mahadev Temple Garayen - Maha Aarti & Deepotsav" 
      },
      category: { hi: "धार्मिक दर्शन", en: "Devotional Heritage" },
      duration: { hi: "3:50 मिनट", en: "3:50 min" },
      desc: { 
        hi: "पावन सरोवर तट पर स्थित स्वयंभू शिवलिंग, सावन मास की कांवड़ यात्रा और देव दीपावली पर 5,100 दीपों का महादीपोत्सव।",
        en: "Swayambhu Shivling on sacred pond banks, holy Shravan Kanwar yatra, and grand celebration of 5,100 earthen lamps on Dev Deepawali."
      },
      poster: "/images/mandir.jpg",
    },
    {
      id: "school",
      title: { 
        hi: "109 वर्ष पुराना प्राथमिक विद्यालय गरायें (स्थापना: 1917 ई.)", 
        en: "109-Year-Old Primary School Garayen (Established 1917 AD)" 
      },
      category: { hi: "ऐतिहासिक धरोहर", en: "Historical Landmark" },
      duration: { hi: "5:10 मिनट", en: "5:10 min" },
      desc: { 
        hi: "ब्रिटिश काल 1917 से संचालित ऐतिहासिक प्राथमिक विद्यालय, प्रांगण, खेलकूद प्रतियोगिताएं और सुल्तानपुर के होनहार विद्यार्थियों की झलक।",
        en: "Historic school operational since British era 1917, lush playground, sports meets, and glimpses of bright students of Sultanpur district."
      },
      poster: "/images/dwar.jpg",
    },
    {
      id: "market",
      title: { 
        hi: "लंभुआ-गरायें का साप्ताहिक ग्रामीण हाट बाज़ार मेला", 
        en: "Weekly Rural Haat & Farmers Market Fair at Lambhua-Garayen" 
      },
      category: { hi: "ग्रामीण जनजीवन", en: "Rural Village Life" },
      duration: { hi: "4:30 मिनट", en: "4:30 min" },
      desc: { 
        hi: "शुद्ध देसी घी की गरमा-गरम जलेबी, ताज़ी हरी सब्जियाँ, मिट्टी के बर्तन और पारंपरिक ग्रामीण मेल-मिलाप का जीवंत दृश्य।",
        en: "Fresh hot jalebis, farm-fresh vegetables, earthen pottery, and vibrant community culture of the traditional weekly village fair."
      },
      poster: "/images/market.jpg",
    }
  ];

  const currentTrack = videoTracks.find(v => v.id === activeVideoId) || videoTracks[0];

  const handleCustomEmbed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) return;

    let embed = customUrl.trim();
    if (embed.includes("watch?v=")) {
      const vid = embed.split("watch?v=")[1]?.split("&")[0];
      embed = `https://www.youtube.com/embed/${vid}?autoplay=1`;
    } else if (embed.includes("youtu.be/")) {
      const vid = embed.split("youtu.be/")[1]?.split("?")[0];
      embed = `https://www.youtube.com/embed/${vid}?autoplay=1`;
    }
    setActiveEmbedUrl(embed);
    setIsPlaying(true);
  };

  return (
    <div style={{ backgroundColor: "#291204", minHeight: "85vh", color: "#fef3c7", padding: "40px 0 80px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#fbbf24", marginBottom: "20px" }}>
          <Link href="/" style={{ color: "#fbbf24", fontWeight: 700, textDecoration: "none" }}>
            {lang === "hi" ? "मुख्य पृष्ठ" : "Home"}
          </Link>
          <span>/</span>
          <span style={{ color: "#ffffff", fontWeight: 700 }}>
            {lang === "hi" ? "गाँव दर्शन व ड्रोन वीडियो" : "Village Tour & Drone Videos"}
          </span>
        </div>

        {/* Page Top Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 32px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "rgba(217,119,6,0.2)", borderColor: "#d97706", color: "#fbbf24" }}>
            <Tv size={16} />
            <span>{lang === "hi" ? "4K अल्ट्रा एचडी वीडियो दर्शन" : "4K Ultra HD Video Tour"}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "12px" }}>
            {lang === "hi" ? "गरायें (लंभुआ) विहंगम वीडियो व ड्रोन दर्शन" : "Garayen (Lambhua) Aerial & Scenic Video Tour"}
          </h1>
          <p style={{ fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)", color: "#fef3c7", opacity: 0.9, lineHeight: 1.6 }}>
            {lang === "hi" 
              ? "घर बैठे गरायें गाँव के प्राकृतिक सौंदर्य, लहलहाते खेतों, ऐतिहासिक 1917 विद्यालय और विख्यात लंभुआ दुर्गा पूजा के दिव्य दर्शन करें।"
              : "Experience the scenic beauty, lush mustard and wheat fields, 1917 heritage school, and famous Lambhua Durga Puja right from your screen."}
          </p>
        </div>

        {/* Video Player Display - Responsive */}
        <div 
          style={{ 
            maxWidth: "960px", 
            margin: "0 auto 36px auto", 
            backgroundColor: "#180a02", 
            borderRadius: "22px", 
            overflow: "hidden", 
            border: "2.5px solid #d97706",
            boxShadow: "0 25px 60px rgba(0,0,0,0.6)" 
          }}
        >
          {/* Media Frame */}
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#000000" }}>
            {activeEmbedUrl ? (
              <iframe
                src={activeEmbedUrl}
                title="Garayen Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            ) : (
              <>
                <Image
                  src={currentTrack.poster}
                  alt={lang === "hi" ? currentTrack.title.hi : currentTrack.title.en}
                  fill
                  style={{ objectFit: "cover", opacity: isPlaying ? 0.3 : 0.85 }}
                  priority
                />

                {/* Video Play Overlay */}
                <div 
                  style={{ 
                    position: "absolute", 
                    inset: 0, 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center",
                    background: isPlaying ? "none" : "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                    padding: "20px"
                  }}
                >
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      style={{
                        width: "76px",
                        height: "76px",
                        borderRadius: "50%",
                        backgroundColor: "#d97706",
                        border: "3.5px solid #ffffff",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 0 35px rgba(217,119,6,0.8)",
                        marginBottom: "14px",
                        transition: "transform 0.2s ease"
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      aria-label="Play video"
                    >
                      <Play size={36} fill="#ffffff" style={{ marginLeft: "4px" }} />
                    </button>
                  )}

                  {!isPlaying && (
                    <div style={{ textAlign: "center" }}>
                      <span style={{ backgroundColor: "#d97706", color: "#ffffff", fontSize: "0.78rem", fontWeight: 700, padding: "3px 12px", borderRadius: "20px", display: "inline-block", marginBottom: "6px" }}>
                        {lang === "hi" ? currentTrack.category.hi : currentTrack.category.en} • {lang === "hi" ? currentTrack.duration.hi : currentTrack.duration.en}
                      </span>
                      <h2 style={{ fontSize: "clamp(1.15rem, 3.2vw, 1.55rem)", fontWeight: 800, color: "#ffffff", maxWidth: "700px", margin: "0 auto" }}>
                        {lang === "hi" ? currentTrack.title.hi : currentTrack.title.en}
                      </h2>
                    </div>
                  )}

                  {isPlaying && (
                    <div style={{ textAlign: "center", padding: "18px", backgroundColor: "rgba(0,0,0,0.75)", borderRadius: "16px", border: "1px solid #d97706" }}>
                      <p style={{ fontSize: "1.05rem", color: "#fbbf24", fontWeight: 700, margin: "0 0 8px 0" }}>
                        {lang === "hi" ? "▶ वीडियो प्रसारण प्रारंभ..." : "▶ Video Broadcast Active..."}
                      </p>
                      <p style={{ fontSize: "0.88rem", color: "#e5e7eb", maxWidth: "550px", margin: "0 auto 14px auto" }}>
                        {lang === "hi" ? currentTrack.desc.hi : currentTrack.desc.en}
                      </p>
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="btn btn-secondary"
                        style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "8px" }}
                      >
                        <Pause size={14} />
                        <span>{lang === "hi" ? "रोकें (Pause)" : "Pause Video"}</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Video Metadata Row */}
          <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(251,191,36,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "14px" }}>
            <div>
              <span style={{ fontSize: "0.76rem", color: "#fbbf24", fontWeight: 700, textTransform: "uppercase" }}>
                {lang === "hi" ? "वर्तमान चयनित वीडियो" : "Currently Selected Video"}
              </span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#ffffff", margin: "2px 0 4px 0" }}>
                {lang === "hi" ? currentTrack.title.hi : currentTrack.title.en}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "#d1d5db", margin: 0, maxWidth: "600px" }}>
                {lang === "hi" ? currentTrack.desc.hi : currentTrack.desc.en}
              </p>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
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
                  padding: "10px 18px",
                  borderRadius: "10px",
                  fontSize: "0.84rem",
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
        </div>

        {/* Video Playlist Grid - Responsive */}
        <div style={{ maxWidth: "960px", margin: "0 auto 40px auto" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fbbf24", marginBottom: "16px" }}>
            {lang === "hi" ? "गाँव वीडियो लाइब्रेरी (All Video Clips)" : "Village Video Library (All Clips)"}
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "16px" }}>
            {videoTracks.map((vt) => (
              <div
                key={vt.id}
                onClick={() => {
                  setActiveVideoId(vt.id);
                  setActiveEmbedUrl(null);
                  setIsPlaying(true);
                }}
                style={{
                  backgroundColor: activeVideoId === vt.id ? "#3d1b06" : "#1a0b02",
                  border: activeVideoId === vt.id ? "2px solid #d97706" : "1px solid rgba(251,191,36,0.18)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "140px" }}>
                  <Image
                    src={vt.poster}
                    alt={lang === "hi" ? vt.title.hi : vt.title.en}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", bottom: "8px", right: "8px", backgroundColor: "#d97706", color: "#ffffff", fontSize: "0.72rem", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>
                    {lang === "hi" ? vt.duration.hi : vt.duration.en}
                  </div>
                </div>

                <div style={{ padding: "14px" }}>
                  <span style={{ fontSize: "0.74rem", color: "#fbbf24", fontWeight: 700 }}>
                    {lang === "hi" ? vt.category.hi : vt.category.en}
                  </span>
                  <h4 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#ffffff", margin: "3px 0 5px 0", lineHeight: 1.3 }}>
                    {lang === "hi" ? vt.title.hi : vt.title.en}
                  </h4>
                  <span style={{ fontSize: "0.78rem", color: "#fbbf24", fontWeight: 700 }}>
                    {lang === "hi" ? "▶ अभी देखें" : "▶ Watch Now"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Video Embed Tool */}
        <div 
          style={{ 
            maxWidth: "760px", 
            margin: "0 auto", 
            backgroundColor: "#1a0b02", 
            borderRadius: "20px", 
            padding: "clamp(18px, 4vw, 26px)", 
            border: "1.5px solid #d97706",
            textAlign: "center" 
          }}
        >
          <div className="vip-badge" style={{ backgroundColor: "rgba(217,119,6,0.2)", borderColor: "#d97706", color: "#fbbf24", margin: "0 auto 12px auto" }}>
            <PlusCircle size={15} />
            <span>{lang === "hi" ? "कस्टम वीडियो लिंक जोड़ें" : "Add Custom Video Link"}</span>
          </div>

          <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
            {lang === "hi" 
              ? "गरायें का कोई भी YouTube अथवा Instagram वीडियो यहाँ देखें" 
              : "Play Any Garayen YouTube or Instagram Video Here"}
          </h3>
          <p style={{ fontSize: "0.86rem", color: "#d1d5db", maxWidth: "560px", margin: "0 auto 18px auto" }}>
            {lang === "hi" 
              ? "यदि आपके पास गरायें या लंभुआ का कोई यूट्यूब वीडियो लिंक है, तो उसे यहाँ पेस्ट करें और तुरंत बड़ी स्क्रीन पर देखें:"
              : "Have a YouTube or reel link of Garayen / Lambhua? Paste it below to watch directly on the player:"}
          </p>

          <form onSubmit={handleCustomEmbed} style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <input
              type="url"
              required
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              style={{
                flex: "1 1 240px",
                maxWidth: "460px",
                padding: "11px 15px",
                borderRadius: "10px",
                border: "1.5px solid rgba(251,191,36,0.3)",
                backgroundColor: "#0d0401",
                color: "#ffffff",
                fontSize: "0.92rem",
                outline: "none"
              }}
            />
            <button
              type="submit"
              className="btn btn-gold"
              style={{ padding: "0 22px", borderRadius: "10px", fontSize: "0.92rem" }}
            >
              <Play size={16} />
              <span>{lang === "hi" ? "स्क्रीन पर चलाएं" : "Play on Screen"}</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
