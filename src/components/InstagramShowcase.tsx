"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Heart, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Share2, 
  MapPin 
} from "lucide-react";

const InstagramIcon = ({ size = 18, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const InstagramShowcase: React.FC = () => {
  const { t, lang } = useLanguage();

  const instaUrl = "https://www.instagram.com/garaye_garawa/";

  const posts = [
    {
      id: "post1",
      image: "/images/durgapuja.jpg",
      title: t("insta_post2_title"),
      caption: "सुल्तानपुर-लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव ✨ माँ भगवती की असीम कृपा पूरे गरायें गाँव पर बनी रहे। #Garayen #Lambhua #DurgaPuja #Sultanpur",
      likes: "1,482",
      comments: "138",
      date: "शरद पूर्णिमा विशेष",
    },
    {
      id: "post2",
      image: "/images/dwar.jpg",
      title: "गरायें लंभुआ स्वागत द्वार",
      caption: "हमारा पावन गाँव गरायें (पिन: 227304), विकास खंड लंभुआ। हरियाली और सौहार्द्र की पावन धरा। #GarayenDwar #GaonLife #Sultanpur",
      likes: "945",
      comments: "64",
      date: "गाँव प्रवेश मार्ग",
    },
    {
      id: "post3",
      image: "/images/hero.jpg",
      title: t("insta_post1_title"),
      caption: "गरायें के लहलहाते सरसों और गेहूं के खेत, शाम का सुहाना नज़ारा 🌾 हमारा प्यारा गरायें। #PindLife #GarayenSultanpur #VillageVibes",
      likes: "1,220",
      comments: "92",
      date: "खेत खलिहान",
    },
    {
      id: "post4",
      image: "/images/mandir.jpg",
      title: "प्राचीन सिद्धेश्वर महादेव मंदिर आरती",
      caption: "हर हर महादेव! 🚩 संध्या आरती दर्शन एवं अमृत सरोवर। गरायें का 400 वर्ष पुराना पावन धाम। #HarHarMahadev #GarayenMandir",
      likes: "1,890",
      comments: "210",
      date: "महाआरती दर्शन",
    },
    {
      id: "post5",
      image: "/images/market.jpg",
      title: "साप्ताहिक ग्रामीण हाट व प्रसिद्ध जलेबी",
      caption: "मंगलवार और शुक्रवार को लगने वाला गरायें का देसी हाट बाज़ार। गरमा-गरम शुद्ध जलेबी और ख्वाजा का स्वाद! 🍯 #DesiFood #GarayenHaat",
      likes: "830",
      comments: "54",
      date: "साप्ताहिक हाट",
    },
    {
      id: "post6",
      image: "/images/seal.jpg",
      title: t("insta_post3_title"),
      caption: "प्राथमिक विद्यालय गरायें (स्थापना वर्ष 1917)। 109 वर्षों की गौरवशाली शिक्षण परंपरा। #PsGarayen #LambhuaEducation",
      likes: "760",
      comments: "48",
      date: "शिक्षा धरोहर",
    },
  ];

  return (
    <section id="instagram-feed" style={{ padding: "90px 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div 
            className="vip-badge" 
            style={{ 
              background: "linear-gradient(135deg, rgba(225, 48, 108, 0.12), rgba(253, 29, 29, 0.12))",
              borderColor: "#e1306c",
              color: "#c13584"
            }}
          >
            <InstagramIcon size={16} color="#c13584" />
            <span>{t("insta_badge")}</span>
          </div>
          <h2 className="section-title">
            {t("insta_title")}
          </h2>
          <p className="section-subtitle">
            {t("insta_subtitle")}
          </p>
        </div>

        {/* Profile Banner Card */}
        <div 
          style={{ 
            background: "linear-gradient(135deg, #405de6 0%, #5851db 25%, #833ab4 50%, #c13584 75%, #e1306c 100%)",
            borderRadius: "24px",
            padding: "24px 32px",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
            boxShadow: "0 12px 35px rgba(193, 53, 132, 0.25)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div style={{ position: "relative", width: "72px", height: "72px", borderRadius: "50%", padding: "3px", background: "#ffffff", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden" }}>
                <Image
                  src="/images/seal.jpg"
                  alt="Garayen Instagram Profile"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                  गरायें लंभुआ ✨
                </h3>
                <span style={{ backgroundColor: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 700 }}>
                  @garaye_garawa
                </span>
              </div>
              <p style={{ margin: "4px 0 0 0", fontSize: "0.92rem", opacity: 0.95 }}>
                📍 गरायें, लंभुआ, सुल्तानपुर (उ.प्र.) 227304 | गाँव की यादें, संस्कृति व भाईचारा ❤️
              </p>
            </div>
          </div>

          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#ffffff",
              color: "#c13584",
              fontWeight: 800,
              padding: "12px 24px",
              borderRadius: "30px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              fontSize: "0.95rem",
              transition: "transform 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <InstagramIcon size={18} color="#c13584" />
            <span>{t("insta_follow_btn")}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Instagram Posts Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", 
            gap: "24px" 
          }}
        >
          {posts.map((post) => (
            <div 
              key={post.id}
              className="card-vip"
              style={{
                padding: "0",
                borderRadius: "20px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                border: "1.5px solid #e7dfcc"
              }}
            >
              {/* Post Header */}
              <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f3ece0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden", position: "relative", border: "1px solid #d4af37" }}>
                    <Image src="/images/seal.jpg" alt="garaye_garawa" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0e3d28", display: "block", lineHeight: 1.1 }}>
                      garaye_garawa
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "#6b7280" }}>
                      गरायें, लंभुआ (सुल्तानपुर)
                    </span>
                  </div>
                </div>

                <a 
                  href={instaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#c13584" }}
                  aria-label="View on Instagram"
                >
                  <InstagramIcon size={18} color="#c13584" />
                </a>
              </div>

              {/* Post Image */}
              <div style={{ position: "relative", height: "260px", width: "100%", backgroundColor: "#0b1f14" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Post Actions & Caption */}
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                
                {/* Actions Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#e11d48", fontWeight: 700, fontSize: "0.88rem" }}>
                      <Heart size={18} fill="#e11d48" />
                      {post.likes}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#4b5563", fontWeight: 600, fontSize: "0.88rem" }}>
                      <MessageCircle size={18} />
                      {post.comments}
                    </span>
                  </div>

                  <span style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 600 }}>
                    {post.date}
                  </span>
                </div>

                {/* Caption */}
                <p style={{ fontSize: "0.88rem", color: "#374151", margin: "0 0 14px 0", lineHeight: 1.5, flexGrow: 1 }}>
                  <strong>garaye_garawa</strong> {post.caption}
                </p>

                {/* Direct Link button */}
                <a
                  href={instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#fdf8ef",
                    border: "1px solid #e2c079",
                    color: "#b45309",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}
                >
                  <span>इंस्टाग्राम पर देखें व कमेंट करें</span>
                  <ExternalLink size={12} />
                </a>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
