"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Play, 
  Pause, 
  Tv, 
  Maximize2, 
  PlusCircle, 
  Check, 
  Share2, 
  Film,
  Sparkles,
  ExternalLink
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
      title: "गरायें गाँव का विहंगम ड्रोन दर्शन (4K Aerial Tour)",
      category: "हवाई दृश्य (Drone)",
      duration: "4:15 मिनट",
      desc: "लहलहाते सरसों व गेहूं के खेत, मुख्य प्रवेश द्वार (Swagat Dwar), पक्की सड़कें, अमृत सरोवर और गरायें गाँव की हरियाली का मनोरम विहंगम दृश्य।",
      poster: "/images/hero.jpg",
    },
    {
      id: "durgapuja",
      title: "सुल्तानपुर-लंभुआ ऐतिहासिक दुर्गा पूजा व विसर्जन शोभायात्रा",
      category: "सांस्कृतिक उत्सव",
      duration: "6:40 मिनट",
      desc: "पश्चिम बंगाल जैसी प्रसिद्ध सुल्तानपुर दुर्गा पूजा के भव्य पंडाल, अलौकिक विग्रह और पवित्र गोमती तट (धोपाप धाम) पर महाविसर्जन की झांकियां।",
      poster: "/images/durgapuja.jpg",
    },
    {
      id: "mandir",
      title: "प्राचीन सिद्धेश्वर महादेव मंदिर गरायें - महाआरती व दीपोत्सव",
      category: "धार्मिक दर्शन",
      duration: "3:50 मिनट",
      desc: "पावन सरोवर तट पर स्थित स्वयंभू शिवलिंग, सावन मास की कांवड़ यात्रा और देव दीपावली पर 5,100 दीपों का महादीपोत्सव।",
      poster: "/images/mandir.jpg",
    },
    {
      id: "school",
      title: "109 वर्ष पुराना प्राथमिक विद्यालय गरायें (स्थापना: 1917 ई.)",
      category: "ऐतिहासिक धरोहर",
      duration: "5:10 मिनट",
      desc: "ब्रिटिश काल 1917 से संचालित ऐतिहासिक प्राथमिक विद्यालय, प्रांगण, खेलकूद प्रतियोगिताएं और सुल्तानपुर के होनहार विद्यार्थियों की झलक।",
      poster: "/images/dwar.jpg",
    },
    {
      id: "market",
      title: "लंभुआ-गरायें का साप्ताहिक ग्रामीण हाट बाज़ार मेला",
      category: "ग्रामीण जनजीवन",
      duration: "4:30 मिनट",
      desc: "शुद्ध देसी घी की गरमा-गरम जलेबी, ताज़ी हरी सब्जियाँ, मिट्टी के बर्तन और पारंपरिक ग्रामीण मेल-मिलाप का जीवंत दृश्य।",
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
    <div style={{ backgroundColor: "#0b1e14", minHeight: "85vh", color: "#f3f4f6", padding: "60px 0 90px 0" }}>
      <div className="container">
        
        {/* Breadcrumb Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#9ca3af", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#fbbf24", fontWeight: 600 }}>मुख्य पृष्ठ</Link>
          <span>/</span>
          <span style={{ color: "#d1d5db", fontWeight: 700 }}>गाँव दर्शन व ड्रोन वीडियो</span>
        </div>

        {/* Page Top Header */}
        <div style={{ maxWidth: "800px", margin: "0 auto 36px auto", textAlign: "center" }}>
          <div className="vip-badge" style={{ backgroundColor: "rgba(251,191,36,0.15)", borderColor: "rgba(251,191,36,0.3)", color: "#fbbf24" }}>
            <Tv size={16} />
            <span>4K अल्ट्रा एचडी वीडियो दर्शन</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.2, marginBottom: "12px" }}>
            गरायें (लंभुआ) विहंगम वीडियो व ड्रोन दर्शन
          </h1>
          <p style={{ fontSize: "1.05rem", color: "#9ca3af", lineHeight: 1.6 }}>
            घर बैठे गरायें गाँव के प्राकृतिक सौंदर्य, लहलहाते खेतों, ऐतिहासिक 1917 विद्यालय और विख्यात लंभुआ दुर्गा पूजा के दिव्य दर्शन करें।
          </p>
        </div>

        {/* Video Player Display */}
        <div 
          style={{ 
            maxWidth: "960px", 
            margin: "0 auto 40px auto", 
            backgroundColor: "#06150d", 
            borderRadius: "24px", 
            overflow: "hidden", 
            border: "2px solid #d4af37",
            boxShadow: "0 25px 60px rgba(0,0,0,0.5)" 
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
                  alt={currentTrack.title}
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
                    padding: "24px"
                  }}
                >
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      style={{
                        width: "84px",
                        height: "84px",
                        borderRadius: "50%",
                        backgroundColor: "#d97706",
                        border: "4px solid #ffffff",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 0 35px rgba(217,119,6,0.8)",
                        marginBottom: "16px",
                        transition: "transform 0.2s ease"
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      aria-label="Play video"
                    >
                      <Play size={40} style={{ marginLeft: "4px" }} />
                    </button>
                  )}

                  {!isPlaying && (
                    <div style={{ textAlign: "center" }}>
                      <span style={{ backgroundColor: "#d97706", color: "#ffffff", fontSize: "0.78rem", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", display: "inline-block", marginBottom: "8px" }}>
                        {currentTrack.category} • {currentTrack.duration}
                      </span>
                      <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff", maxWidth: "700px", margin: "0 auto" }}>
                        {currentTrack.title}
                      </h2>
                    </div>
                  )}

                  {isPlaying && (
                    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "rgba(0,0,0,0.7)", borderRadius: "16px" }}>
                      <p style={{ fontSize: "1.1rem", color: "#fbbf24", fontWeight: 700, margin: "0 0 10px 0" }}>
                        ▶ वीडियो प्रसारण प्रारंभ...
                      </p>
                      <p style={{ fontSize: "0.9rem", color: "#d1d5db", maxWidth: "550px", margin: "0 auto 16px auto" }}>
                        {currentTrack.desc}
                      </p>
                      <button
                        onClick={() => setIsPlaying(false)}
                        className="btn btn-secondary"
                        style={{ padding: "8px 18px", fontSize: "0.85rem", borderRadius: "8px" }}
                      >
                        <Pause size={14} />
                        <span>रोकें (Pause)</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Video Metadata Row */}
          <div style={{ padding: "24px 30px", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span style={{ fontSize: "0.8rem", color: "#fbbf24", fontWeight: 700, textTransform: "uppercase" }}>
                वर्तमान चयनित वीडियो
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", margin: "2px 0 6px 0" }}>
                {currentTrack.title}
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#9ca3af", margin: 0, maxWidth: "600px" }}>
                {currentTrack.desc}
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
                  gap: "8px",
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "#ffffff",
                  padding: "10px 18px",
                  borderRadius: "12px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  textDecoration: "none"
                }}
              >
                <InstagramIcon size={18} />
                <span>@garaye_garawa रील्स देखें</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video Playlist Grid */}
        <div style={{ maxWidth: "960px", margin: "0 auto 50px auto" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>
            गाँव वीडियो लाइब्रेरी (All Video Clips)
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "18px" }}>
            {videoTracks.map((vt) => (
              <div
                key={vt.id}
                onClick={() => {
                  setActiveVideoId(vt.id);
                  setActiveEmbedUrl(null);
                  setIsPlaying(true);
                }}
                style={{
                  backgroundColor: activeVideoId === vt.id ? "#143a25" : "#0d261a",
                  border: activeVideoId === vt.id ? "2px solid #fbbf24" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "140px" }}>
                  <Image
                    src={vt.poster}
                    alt={vt.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", bottom: "8px", right: "8px", backgroundColor: "rgba(0,0,0,0.8)", color: "#ffffff", fontSize: "0.72rem", padding: "2px 8px", borderRadius: "4px", fontWeight: 700 }}>
                    {vt.duration}
                  </div>
                </div>

                <div style={{ padding: "14px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#fbbf24", fontWeight: 700 }}>
                    {vt.category}
                  </span>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", margin: "4px 0 6px 0", lineHeight: 1.3 }}>
                    {vt.title}
                  </h4>
                  <span style={{ fontSize: "0.78rem", color: "#10b981", fontWeight: 600 }}>
                    ▶ अभी देखें
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
            backgroundColor: "#0d261a", 
            borderRadius: "20px", 
            padding: "28px", 
            border: "1px solid rgba(251,191,36,0.3)",
            textAlign: "center" 
          }}
        >
          <div className="vip-badge" style={{ backgroundColor: "rgba(251,191,36,0.15)", borderColor: "rgba(251,191,36,0.3)", color: "#fbbf24", margin: "0 auto 12px auto" }}>
            <PlusCircle size={15} />
            <span>कस्टम वीडियो लिंक जोड़ें</span>
          </div>

          <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", marginBottom: "6px" }}>
            गरायें का कोई भी YouTube अथवा Instagram वीडियो यहाँ देखें
          </h3>
          <p style={{ fontSize: "0.88rem", color: "#9ca3af", maxWidth: "560px", margin: "0 auto 20px auto" }}>
            यदि आपके पास गरायें या लंभुआ का कोई यूट्यूब वीडियो लिंक है, तो उसे यहाँ पेस्ट करें और तुरंत बड़ी स्क्रीन पर देखें:
          </p>

          <form onSubmit={handleCustomEmbed} style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            <input
              type="url"
              required
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              style={{
                flex: "1 1 300px",
                maxWidth: "460px",
                padding: "12px 16px",
                borderRadius: "12px",
                border: "1.5px solid rgba(255,255,255,0.2)",
                backgroundColor: "#06150d",
                color: "#ffffff",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
            <button
              type="submit"
              className="btn btn-gold"
              style={{ padding: "0 24px", borderRadius: "12px", fontSize: "0.95rem" }}
            >
              <Play size={16} />
              <span>स्क्रीन पर चलाएं</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
