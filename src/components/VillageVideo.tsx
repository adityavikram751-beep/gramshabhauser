"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Video, 
  Sparkles, 
  Film, 
  CheckCircle2, 
  PlusCircle, 
  X,
  Tv
} from "lucide-react";

export const VillageVideo: React.FC = () => {
  const { t, lang } = useLanguage();

  const videoChapters = [
    {
      id: "drone",
      title: t("video_drone_tour"),
      duration: "04:15",
      thumb: "/images/hero.jpg",
      desc: "आकाश से गारयेन गाँव का विहंगम दृश्य, लहलहाते सरसों-गेहूं के खेत और पक्की संपर्क सड़कें।",
      youtubeId: "dQw4w9WgXcQ", // fallback placeholder or embed
    },
    {
      id: "temple",
      title: t("video_temple_tour"),
      duration: "03:40",
      thumb: "/images/mandir.jpg",
      desc: "400 वर्ष प्राचीन शिव मंदिर में संध्या महाआरती, शंखनाद और दीपोत्सव का आध्यात्मिक दर्शन।",
      youtubeId: "",
    },
    {
      id: "market",
      title: t("video_market_tour"),
      duration: "05:12",
      thumb: "/images/market.jpg",
      desc: "साप्ताहिक ग्रामीण हाट में गरमा-गरम जलेबी, जैविक ताज़ी सब्जियां और लोक संस्कृति।",
      youtubeId: "",
    },
    {
      id: "school",
      title: t("video_school_tour"),
      duration: "02:50",
      thumb: "/images/seal.jpg",
      desc: "डिजिटल स्मार्ट क्लास, खेलकूद मैदान और प्राथमिक विद्यालय के बच्चों का प्रातःकालीन प्रार्थना सत्र।",
      youtubeId: "",
    },
  ];

  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const [inputUrl, setInputUrl] = useState("");

  const currentChapter = videoChapters[activeChapter];

  // Extract YouTube ID if valid
  const getYoutubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : null;
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setCustomVideoUrl(inputUrl.trim());
      setIsPlaying(true);
      setCustomModalOpen(false);
    }
  };

  const customEmbed = customVideoUrl ? getYoutubeEmbedUrl(customVideoUrl) : null;

  return (
    <section id="video-tour" style={{ padding: "90px 0", backgroundColor: "#072517", color: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="vip-badge" style={{ background: "rgba(245, 158, 11, 0.2)", borderColor: "#f59e0b", color: "#fef08a" }}>
            <Video size={16} />
            <span>{t("video_badge")}</span>
          </div>
          <h2 className="section-title" style={{ color: "#ffffff" }}>
            {t("video_title")}
          </h2>
          <p className="section-subtitle" style={{ color: "#d1d5db" }}>
            {t("video_subtitle")}
          </p>
        </div>

        {/* Video Player Box & Playlist Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr", 
            gap: "30px", 
            backgroundColor: "#0d3822", 
            borderRadius: "26px", 
            padding: "24px", 
            border: "1.5px solid rgba(226, 192, 121, 0.4)",
            boxShadow: "0 25px 60px rgba(0,0,0,0.4)" 
          }}
        >
          {/* Main Video Screen */}
          <div 
            style={{ 
              position: "relative", 
              width: "100%", 
              aspectRatio: "16 / 9", 
              maxHeight: "560px", 
              borderRadius: "20px", 
              overflow: "hidden", 
              backgroundColor: "#000000",
              boxShadow: "0 15px 40px rgba(0,0,0,0.6)"
            }}
          >
            {customEmbed ? (
              <iframe
                src={customEmbed}
                title="Garayen Custom Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none" }}
              />
            ) : (
              <>
                {/* Background Image / Video Simulation Frame */}
                <Image
                  src={currentChapter.thumb}
                  alt={currentChapter.title}
                  fill
                  style={{ 
                    objectFit: "cover", 
                    filter: isPlaying ? "brightness(0.95)" : "brightness(0.65)" 
                  }}
                />

                {/* Ambient Video Simulation Overlay */}
                {isPlaying && (
                  <div 
                    style={{ 
                      position: "absolute", 
                      inset: 0, 
                      background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
                      pointerEvents: "none"
                    }}
                  >
                    {/* Live playing badge */}
                    <div style={{ position: "absolute", top: "20px", left: "20px", zIndex: 10, display: "flex", alignItems: "center", gap: "8px", background: "rgba(220, 38, 38, 0.9)", padding: "5px 12px", borderRadius: "16px", fontSize: "0.8rem", fontWeight: 700 }}>
                      <span className="live-dot" style={{ backgroundColor: "#ffffff" }} />
                      VIDEO PLAYING (4K ULTRA-HD)
                    </div>

                    {/* Subtitle Bar at bottom */}
                    <div style={{ position: "absolute", bottom: "75px", left: "20px", right: "20px", textAlign: "center" }}>
                      <span style={{ backgroundColor: "rgba(0,0,0,0.75)", color: "#fef08a", padding: "6px 18px", borderRadius: "20px", fontSize: "0.95rem", fontWeight: 600, display: "inline-block" }}>
                        🎥 {currentChapter.desc}
                      </span>
                    </div>
                  </div>
                )}

                {/* Big Center Play Button (if paused) */}
                {!isPlaying && (
                  <div 
                    style={{ 
                      position: "absolute", 
                      inset: 0, 
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      zIndex: 10,
                      gap: "14px"
                    }}
                  >
                    <button
                      onClick={() => setIsPlaying(true)}
                      style={{
                        width: "84px",
                        height: "84px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #d97706, #f59e0b)",
                        border: "4px solid rgba(255,255,255,0.7)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 10px 35px rgba(217, 119, 6, 0.6)",
                        transition: "all 0.3s ease"
                      }}
                      aria-label="Play Video"
                    >
                      <Play size={36} fill="#ffffff" style={{ marginLeft: "4px" }} />
                    </button>
                    <span style={{ fontSize: "1.1rem", fontWeight: 700, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                      {currentChapter.title}
                    </span>
                  </div>
                )}

                {/* Player Bottom Bar Controls */}
                <div 
                  style={{ 
                    position: "absolute", 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    padding: "16px 20px", 
                    background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.9) 100%)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    zIndex: 20
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer" }}
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause size={22} /> : <Play size={22} fill="#ffffff" />}
                    </button>

                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer" }}
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>

                    <span style={{ fontSize: "0.85rem", color: "#d1d5db" }}>
                      01:24 / {currentChapter.duration}
                    </span>
                  </div>

                  {/* Scrubber bar */}
                  <div style={{ flex: 1, margin: "0 20px", height: "5px", backgroundColor: "rgba(255,255,255,0.25)", borderRadius: "3px", position: "relative", cursor: "pointer" }}>
                    <div style={{ width: isPlaying ? "35%" : "0%", height: "100%", backgroundColor: "#f59e0b", borderRadius: "3px", transition: "width 0.3s" }} />
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ backgroundColor: "rgba(255,255,255,0.15)", padding: "2px 8px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 700 }}>
                      4K UHD
                    </span>
                    <button 
                      onClick={() => {
                        const elem = document.getElementById("video-tour");
                        if (elem) elem.scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer" }}
                    >
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Chapter Selector & Add Video Action */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fbbf24" }}>
                गाँव दर्शन वीडियो सूची (Village Video Chapters)
              </h3>
              
              <button
                onClick={() => setCustomModalOpen(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#ffffff",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "0.84rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <PlusCircle size={15} color="#fbbf24" />
                <span>{t("video_add_btn")}</span>
              </button>
            </div>

            {/* Video Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px" }}>
              {videoChapters.map((ch, idx) => {
                const isActive = activeChapter === idx && !customVideoUrl;
                return (
                  <div
                    key={ch.id}
                    onClick={() => {
                      setCustomVideoUrl(null);
                      setActiveChapter(idx);
                      setIsPlaying(true);
                    }}
                    style={{
                      display: "flex",
                      gap: "12px",
                      padding: "12px",
                      borderRadius: "14px",
                      backgroundColor: isActive ? "rgba(217, 119, 6, 0.2)" : "rgba(255,255,255,0.06)",
                      border: isActive ? "1.5px solid #f59e0b" : "1px solid rgba(255,255,255,0.1)",
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ position: "relative", width: "90px", height: "60px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                      <Image
                        src={ch.thumb}
                        alt={ch.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <span style={{ position: "absolute", bottom: "3px", right: "4px", backgroundColor: "rgba(0,0,0,0.8)", fontSize: "0.68rem", padding: "1px 4px", borderRadius: "4px", fontWeight: 700 }}>
                        {ch.duration}
                      </span>
                    </div>

                    <div style={{ overflow: "hidden" }}>
                      <h4 style={{ fontSize: "0.9rem", fontWeight: 700, color: isActive ? "#fbbf24" : "#ffffff", margin: "0 0 3px 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {ch.title}
                      </h4>
                      <p style={{ fontSize: "0.78rem", color: "#9ca3af", margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: 1.3 }}>
                        {ch.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Embed Custom Video Link Modal */}
      {customModalOpen && (
        <div 
          style={{ 
            position: "fixed", 
            inset: 0, 
            backgroundColor: "rgba(0,0,0,0.8)", 
            zIndex: 1000, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "20px" 
          }}
        >
          <div 
            style={{ 
              backgroundColor: "#ffffff", 
              color: "#1f2937", 
              maxWidth: "500px", 
              width: "100%", 
              borderRadius: "20px", 
              padding: "28px", 
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)" 
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Tv size={24} color="#dc2626" />
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0e3d28" }}>
                  गाँव का यूट्यूब वीडियो जोड़ें
                </h3>
              </div>
              <button 
                onClick={() => setCustomModalOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}
              >
                <X size={22} />
              </button>
            </div>

            <p style={{ fontSize: "0.9rem", color: "#4b5563", marginBottom: "16px" }}>
              आप गारयेन गाँव का कोई भी YouTube वीडियो (ड्रोन शॉट, मेला, स्कूल कार्यक्रम आदि) का लिंक यहाँ पेस्ट करें:
            </p>

            <form onSubmit={handleCustomSubmit}>
              <input
                type="url"
                required
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="उदा. https://www.youtube.com/watch?v=..."
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1.5px solid #d1d5db",
                  fontSize: "0.95rem",
                  marginBottom: "18px",
                  outline: "none"
                }}
              />

              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
                {customVideoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setCustomVideoUrl(null);
                      setCustomModalOpen(false);
                    }}
                    className="btn btn-secondary"
                    style={{ padding: "10px 18px", fontSize: "0.9rem" }}
                  >
                    रीसेट करें
                  </button>
                )}
                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ padding: "10px 22px", fontSize: "0.9rem" }}
                >
                  वीडियो चलाएं
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
