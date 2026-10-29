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
      caption: {
        hi: "सुल्तानपुर-लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव ✨ माँ भगवती की असीम कृपा पूरे गरायें गाँव पर बनी रहे। #Garayen #Lambhua #DurgaPuja #Sultanpur",
        en: "Historic Sultanpur-Lambhua Durga Puja festival ✨ Divine blessings of Maa Bhagwati upon all residents of Garayen. #Garayen #Lambhua #DurgaPuja"
      },
      likes: "1,482",
      comments: "138",
      date: { hi: "शरद पूर्णिमा विशेष", en: "Sharad Purnima Special" },
    },
    {
      id: "post2",
      image: "/images/dwar.jpg",
      title: { hi: "गरायें लंभुआ स्वागत द्वार", en: "Garayen Lambhua Gateway" },
      caption: {
        hi: "हमारा पावन गाँव गरायें (पिन: 227304), विकास खंड लंभुआ। हरियाली और सौहार्द्र की पावन धरा। #GarayenDwar #GaonLife #Sultanpur",
        en: "Our sacred village Garayen (PIN: 227304), Lambhua block. Soil of lush greenery and communal harmony. #GarayenDwar #GaonLife"
      },
      likes: "945",
      comments: "64",
      date: { hi: "गाँव प्रवेश मार्ग", en: "Village Entrance" },
    },
    {
      id: "post3",
      image: "/images/hero.jpg",
      title: t("insta_post1_title"),
      caption: {
        hi: "गरायें के लहलहाते सरसों और गेहूं के खेत, शाम का सुहाना नज़ारा 🌾 हमारा प्यारा गरायें। #PindLife #GarayenSultanpur #VillageVibes",
        en: "Lush mustard and wheat fields in Garayen at sunset 🌾 Our beautiful village. #PindLife #GarayenSultanpur #VillageVibes"
      },
      likes: "1,220",
      comments: "92",
      date: { hi: "खेत खलिहान", en: "Lush Farmlands" },
    },
    {
      id: "post4",
      image: "/images/mandir.jpg",
      title: { hi: "प्राचीन सिद्धेश्वर महादेव मंदिर आरती", en: "Ancient Siddheshwar Mahadev Aarti" },
      caption: {
        hi: "हर हर महादेव! 🚩 संध्या आरती दर्शन एवं अमृत सरोवर। गरायें का 400 वर्ष पुराना पावन धाम। #HarHarMahadev #GarayenMandir",
        en: "Har Har Mahadev! 🚩 Evening aarti and holy Amrit Sarovar at 400-year-old Shiva shrine of Garayen. #HarHarMahadev #GarayenMandir"
      },
      likes: "1,890",
      comments: "210",
      date: { hi: "महाआरती दर्शन", en: "Maha Aarti" },
    },
    {
      id: "post5",
      image: "/images/market.jpg",
      title: { hi: "साप्ताहिक ग्रामीण हाट व प्रसिद्ध जलेबी", en: "Weekly Rural Market & Famous Jalebi" },
      caption: {
        hi: "मंगलवार और शुक्रवार को लगने वाला गरायें का देसी हाट बाज़ार। गरमा-गरम शुद्ध जलेबी और ख्वाजा का स्वाद! 🍯 #DesiFood #GarayenHaat",
        en: "Traditional rural haat fair every Tuesday and Friday in Garayen. Enjoy hot desi ghee jalebis! 🍯 #DesiFood #GarayenHaat"
      },
      likes: "830",
      comments: "54",
      date: { hi: "साप्ताहिक हाट", en: "Weekly Market" },
    },
    {
      id: "post6",
      image: "/images/seal.jpg",
      title: t("insta_post3_title"),
      caption: {
        hi: "प्राथमिक विद्यालय गरायें (स्थापना वर्ष 1917)। 109 वर्षों की गौरवशाली शिक्षण परंपरा। #PsGarayen #LambhuaEducation",
        en: "Primary School Garayen (Established 1917). 109 years of proud educational heritage. #PsGarayen #LambhuaEducation"
      },
      likes: "760",
      comments: "48",
      date: { hi: "शिक्षा धरोहर", en: "Heritage Education" },
    },
  ];

  return (
    <section id="instagram-feed" style={{ padding: "clamp(40px, 6vw, 90px) 0", backgroundColor: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div 
            className="vip-badge" 
            style={{ 
              background: "linear-gradient(135deg, rgba(217, 119, 6, 0.15), rgba(225, 48, 108, 0.12))",
              borderColor: "#d97706",
              color: "#d97706"
            }}
          >
            <InstagramIcon size={16} color="#d97706" />
            <span>{t("insta_badge")}</span>
          </div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.7rem)", fontWeight: 800, color: "#451a03" }}>
            {t("insta_title")}
          </h2>
          <p className="section-subtitle" style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", color: "#78350f" }}>
            {t("insta_subtitle")}
          </p>
        </div>

        {/* Profile Banner Card */}
        <div 
          style={{ 
            background: "linear-gradient(135deg, #451a03 0%, #78350f 40%, #b45309 70%, #d97706 100%)",
            borderRadius: "24px",
            padding: "clamp(20px, 4vw, 32px)",
            color: "#ffffff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "36px",
            border: "1.5px solid #fde68a",
            boxShadow: "0 12px 35px rgba(217, 119, 6, 0.2)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ position: "relative", width: "68px", height: "68px", borderRadius: "50%", padding: "3px", background: "#ffffff", flexShrink: 0, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}>
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
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, margin: 0, color: "#ffffff" }}>
                  {lang === "hi" ? "गरायें लंभुआ ✨" : "Garayen Lambhua ✨"}
                </h3>
                <span style={{ backgroundColor: "rgba(255,255,255,0.25)", padding: "2px 8px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: 700 }}>
                  @garaye_garawa
                </span>
              </div>
              <p style={{ margin: "4px 0 0 0", fontSize: "0.9rem", color: "#fef3c7" }}>
                {lang === "hi" 
                  ? "📍 गरायें, लंभुआ, सुल्तानपुर (उ.प्र.) 227304 | गाँव की यादें, संस्कृति व भाईचारा ❤️"
                  : "📍 Garayen, Lambhua, Sultanpur (U.P.) 227304 | Village memories, culture & brotherhood ❤️"}
              </p>
            </div>
          </div>

          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#ffffff",
              color: "#d97706",
              fontWeight: 800,
              padding: "12px 24px",
              borderRadius: "30px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              fontSize: "0.92rem",
              transition: "transform 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <InstagramIcon size={18} color="#d97706" />
            <span>{t("insta_follow_btn")}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Instagram Posts Grid */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", 
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
                border: "1.5px solid #fde68a",
                boxShadow: "0 6px 20px rgba(217, 119, 6, 0.06)"
              }}
            >
              {/* Post Header */}
              <div style={{ padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #fde68a" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden", position: "relative", border: "1.5px solid #d97706" }}>
                    <Image src="/images/seal.jpg" alt="garaye_garawa" fill style={{ objectFit: "cover" }} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#451a03", display: "block", lineHeight: 1.1 }}>
                      garaye_garawa
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "#78350f" }}>
                      {lang === "hi" ? "गरायें, लंभुआ (सुल्तानपुर)" : "Garayen, Lambhua (Sultanpur)"}
                    </span>
                  </div>
                </div>

                <a 
                  href={instaUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#d97706" }}
                  aria-label="View on Instagram"
                >
                  <InstagramIcon size={18} color="#d97706" />
                </a>
              </div>

              {/* Post Image */}
              <div style={{ position: "relative", height: "250px", width: "100%", backgroundColor: "#451a03" }}>
                <Image
                  src={post.image}
                  alt={typeof post.title === "string" ? post.title : (lang === "hi" ? post.title.hi : post.title.en)}
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
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#78350f", fontWeight: 600, fontSize: "0.88rem" }}>
                      <MessageCircle size={18} />
                      {post.comments}
                    </span>
                  </div>

                  <span style={{ fontSize: "0.75rem", color: "#92400e", fontWeight: 600 }}>
                    {typeof post.date === "string" ? post.date : (lang === "hi" ? post.date.hi : post.date.en)}
                  </span>
                </div>

                {/* Caption */}
                <p style={{ fontSize: "0.88rem", color: "#57534e", margin: "0 0 14px 0", lineHeight: 1.5, flexGrow: 1 }}>
                  <strong style={{ color: "#451a03" }}>garaye_garawa</strong>{" "}
                  {typeof post.caption === "string" ? post.caption : (lang === "hi" ? post.caption.hi : post.caption.en)}
                </p>

                {/* Direct Link button */}
                <a
                  href={instaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#fffbeb",
                    border: "1px solid #fde68a",
                    color: "#d97706",
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
                  <span>{lang === "hi" ? "इंस्टाग्राम पर देखें व कमेंट करें" : "View & Comment on Instagram"}</span>
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
