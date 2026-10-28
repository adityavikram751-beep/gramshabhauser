"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "hi" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  hi: {
    // Top Bar & Meta
    site_title: "ग्राम पंचायत गरायें",
    site_tagline: "विकास खण्ड: लंभुआ | जनपद: सुल्तानपुर (उ.प्र.) - 227304",
    state_gov: "पंचायती राज विभाग | उत्तर प्रदेश शासन",
    helpline: "ग्राम सचिवालय गरायें: 1800-227-GARAYEN | लंभुआ कोतवाली: 112 | एम्बुलेंस: 108",
    weather: "गरायें (लंभुआ): 26°C सुखद धूप | AQI: 42 उत्तम",
    lang_btn: "English में देखें",
    lang_label: "भाषा बदलें",
    
    // Navigation
    nav_home: "मुख्य पृष्ठ",
    nav_representatives: "जन प्रतिनिधि",
    nav_history: "इतिहास व संस्कृति",
    nav_mandir_market: "मंदिर, मेला व बाज़ार",
    nav_schemes: "सरकारी योजनाएं",
    nav_fund: "ग्राम विकास निधि",
    nav_videos: "गाँव वीडियो व दर्शन",
    nav_insta: "इंस्टाग्राम फीड ✨",
    nav_samasya: "समस्या समाधान",
    nav_contact: "संपर्क सूत्र",
    donate_badge: "सहयोग करें",
    complain_badge: "शिकायत दर्ज करें",

    // Hero Section
    hero_badge: "✨ सुल्तानपुर का गौरव - गरायें लंभुआ (@garaye_garawa)",
    hero_title_prefix: "पावन भूमि ग्राम पंचायत",
    hero_title_highlight: "गरायें (लंभुआ)",
    hero_subtitle: "सुल्तानपुर जनपद के लंभुआ तहसील की ऐतिहासिक माटी, 1917 से स्थापित प्राथमिक विद्यालय, विख्यात दुर्गा पूजा महोत्सव और आधुनिक डिजिटल पंचायत का संगम।",
    hero_cta_video: "गाँव का वीडियो देखें",
    hero_cta_complain: "अपनी समस्या दर्ज करें",
    hero_cta_fund: "ग्राम विकास निधि में दान दें",
    hero_cta_insta: "इंस्टाग्राम @garaye_garawa",
    hero_stats_pop: "कुल जनसंख्या (2026)",
    hero_stats_pop_val: "3,850+",
    hero_stats_lit: "साक्षरता दर",
    hero_stats_lit_val: "76.8%",
    hero_stats_wards: "कुल वार्ड / मोहल्ले",
    hero_stats_wards_val: "11 वार्ड",
    hero_stats_clean: "स्वच्छता व रैंकिंग",
    hero_stats_clean_val: "आदर्श ग्राम पंचायत",

    // Banner Selector
    banner_dwar: "गरायें भव्य प्रवेश द्वार (Swagat Dwar)",
    banner_aerial: "गरायें विहंगम दृश्य (Aerial View)",
    banner_durgapuja: "लंभुआ-गरायें दुर्गा पूजा महोत्सव",
    banner_market: "साप्ताहिक ग्रामीण हाट बाज़ार",
    banner_mandir: "प्राचीन शिव मंदिर व दीपोत्सव",
    custom_img_btn: "अपनी फोटो लगाएं",
    custom_img_modal_title: "कस्टम गाँव की फोटो लगाएं",
    custom_img_desc: "आप गरायें अथवा इंस्टाग्राम (@garaye_garawa) की कोई भी फोटो का URL डालकर यहाँ लाइव देख सकते हैं:",
    custom_img_placeholder: "https://उदाहरण.com/गरायें-की-फोटो.jpg",
    custom_img_apply: "फोटो अपडेट करें",
    custom_img_reset: "डिफ़ॉल्ट रीसेट करें",

    // Representatives - REAL DATA 2024-2026
    rep_badge: "सच्चे जनसेवक व प्रशासनिक अधिकारी",
    rep_title: "हमारे निर्वाचित जन प्रतिनिधि एवं प्रशासनिक अधिकारी",
    rep_subtitle: "190 लंभुआ विधानसभा, सुल्तानपुर संसदीय क्षेत्र एवं गरायें ग्राम पंचायत के समर्पित प्रतिनिधि।",
    
    // MLA
    vidhayak_title: "माननीय विधायक (MLA, 190 लंभुआ)",
    vidhayak_name: "श्री सीताराम वर्मा",
    vidhayak_ward: "190 लंभुआ विधानसभा निर्वाचन क्षेत्र (BJP)",
    vidhayak_msg: "\"लंभुआ क्षेत्र के गरायें गाँव को मुख्य मार्ग से जोड़ने, ग्रामीण विद्युतीकरण और जल जीवन मिशन के तहत हर घर नल पहुंचाने के लिए हम संकल्पबद्ध हैं।\"",

    // MP
    sansad_title: "माननीय सांसद (MP, सुल्तानपुर)",
    sansad_name: "श्री रामभुआल निषाद",
    sansad_ward: "सुल्तानपुर संसदीय निर्वाचन क्षेत्र (SP - 2024)",
    sansad_msg: "\"सुल्तानपुर की ग्रामीण जनता, किसानों और नौजवानों के अधिकारों और समग्र विकास के लिए संसद से लेकर गाँव तक निरंतर सेवा जारी है।\"",

    // Block Pramukh
    pramukh_title: "ब्लॉक प्रमुख (Block Pramukh, लंभुआ)",
    pramukh_name: "कुंवर बहादुर सिंह",
    pramukh_ward: "विकास खंड कार्यालय - लंभुआ, सुल्तानपुर",
    pramukh_msg: "\"ब्लॉक स्तर से गरायें ग्राम पंचायत के लिए खड़ंजा, नाली निर्माण और गौशाला प्रबंधन हेतु बजट प्राथमिकता से आवंटित किया जा रहा है।\"",

    // Gram Pradhan
    pradhan_title: "ग्राम प्रधान (Gram Pradhan, गरायें)",
    pradhan_name: "श्री नीरव सिंह",
    pradhan_ward: "ग्राम पंचायत गरवां / गरायें (पिन: 227304)",
    pradhan_msg: "\"हमारा उद्देश्य गरायें गाँव के प्रत्येक नागरिक का हक दिलाना, पारदर्शिता बनाना और गाँव को आदर्श बनाना है। 70+ मृतकों के नाम पर फर्जी राशन उठान बंद कराकर जरूरतमंदों को राशन दिलाया।\"",

    // Panchayat Sachiv
    sachiv_title: "ग्राम विकास अधिकारी (Panchayat Sachiv)",
    sachiv_name: "श्री मनोज कुमार तिवारी",
    sachiv_ward: "सचिवालय गरायें, विकास खंड लंभुआ",
    sachiv_msg: "\"परिवार रजिस्टर नकल, जन्म-मृत्यु प्रमाण पत्र और आवास योजनाओं का पारदर्शी डिजिटलीकरण सुनिश्चित है।\"",

    // Lekhpal
    lekhpal_title: "राजस्व लेखपाल (Lekhpal, लंभुआ)",
    lekhpal_name: "श्री आनन्द वर्मा",
    lekhpal_ward: "राजस्व वृत्त गरायें, तहसील लंभुआ",
    lekhpal_msg: "\"भू-अभिलेख, खतौनी, कृषक दुर्घटना बीमा एवं वरासत प्रकरणों का समयबद्ध निस्तारण किया जाता है।\"",

    contact_rep_btn: "संपर्क करें",
    call_now: "कॉल करें",
    whatsapp_msg: "व्हाट्सएप संदेश",
    office_time: "कार्यालय समय",
    office_time_val: "सोमवार - शनिवार: प्रातः 10:00 से सायं 5:00",

    // History & Culture
    hist_badge: "सुल्तानपुर व लंभुआ की ऐतिहासिक धरोहर",
    hist_title: "गरायें (लंभुआ) का गौरवशाली इतिहास व संस्कृति",
    hist_subtitle: "1917 का ऐतिहासिक प्राथमिक विद्यालय, सुल्तानपुर का विश्वप्रसिद्ध दुर्गा पूजा महोत्सव और पावन गोमती तट धोपाप धाम का सानिध्य।",
    hist_tab_origin: "इतिहास व विद्यालय (1917)",
    hist_tab_durgapuja: "विख्यात दुर्गा पूजा",
    hist_tab_mandir: "पवित्र मंदिर व धोपाप",
    hist_tab_market: "लंभुआ-गरायें हाट बाज़ार",

    hist_origin_p1: "उत्तर प्रदेश के सुल्तानपुर जिले की लंभुआ तहसील में स्थित 'गरायें' (Garayen / Garawa) एक समृद्ध और ऐतिहासिक गाँव है। यह गाँव अपनी उपजाऊ कृषि भूमि, आम के बगीचों और सौहार्द्रपूर्ण सामाजिक जीवन के लिए जाना जाता है। गाँव का पिन कोड 227304 है और इसका डाकघर गरायें में ही स्थित है।",
    hist_origin_p2: "गाँव की सबसे बड़ी ऐतिहासिक उपलब्धि यहाँ का 'प्राथमिक विद्यालय गरायें' (Ps Garayen) है, जिसकी स्थापना ब्रिटिश काल में वर्ष 1917 में हुई थी। 109 वर्षों से अधिक समय से यह विद्यालय क्षेत्र के बच्चों को प्राथमिक शिक्षा प्रदान कर राष्ट्र निर्माण में सहयोग दे रहा है। पास ही जवाहरलाल स्मारक इंटर कॉलेज उच्च शिक्षा का केंद्र है।",
    hist_origin_stat1: "1917 ई.",
    hist_origin_stat1_label: "प्राथमिक विद्यालय गरायें की स्थापना",
    hist_origin_stat2: "227304",
    hist_origin_stat2_label: "गरायें आधिकारिक पिन कोड",
    hist_origin_stat3: "190 लंभुआ",
    hist_origin_stat3_label: "विधानसभा निर्वाचन क्षेत्र",

    // Durga Puja
    durgapuja_title: "सुल्तानपुर व लंभुआ का ऐतिहासिक दुर्गा पूजा महोत्सव",
    durgapuja_desc: "सुल्तानपुर जिले की दुर्गा पूजा पूरे भारत में पश्चिम बंगाल के बाद सबसे भव्य और प्रसिद्ध मानी जाती है। विजयादशमी के बाद शुरू होकर शरद पूर्णिमा तक चलने वाले इस महोत्सव में गरायें और लंभुआ के सैकड़ों पंडालों में माँ दुर्गा के अलौकिक विग्रह स्थापित होते हैं।",
    durgapuja_visarjan: "पावन धोपाप धाम (गोमती तट): शरद पूर्णिमा पर ऐतिहासिक गोमती नदी के धोपाप धाम में भव्य शोभायात्रा के साथ प्रतिमाओं का विसर्जन होता है।",

    // Mandir
    mandir_title: "श्री प्राचीन सिद्धेश्वर महादेव मंदिर, गरायें",
    mandir_desc: "गाँव के पावन सरोवर के समीप स्थित प्राचीन शिवलिंग जहां महाशिवरात्रि और सावन मास में गरायें एवं आसपास के श्रद्धालु जलाभिषेक करते हैं।",
    mandir_aarti: "दैनिक आरती: प्रातः 5:30 (मंगला) एवं सायं 7:00 (संध्या आरती)",
    mandir_dhopap_title: "धोपाप धाम (पौराणिक तीर्थ, लंभुआ)",
    mandir_dhopap_desc: "त्रेतायुग में लंका विजय के उपरांत भगवान श्रीराम ने ब्रह्महत्या दोष निवारण हेतु गोमती के इसी तट पर स्नान किया था। गरायें के लोगों के लिए यह परम पावन तीर्थ है।",

    // Market
    market_title: "लंभुआ-गरायें का साप्ताहिक ग्रामीण हाट बाज़ार",
    market_subtitle: "प्रत्येक मंगलवार और शुक्रवार को लगने वाला क्षेत्र का प्रमुख किसान व ग्रामीण बाज़ार।",
    market_p1: "गरायें और लंभुआ के इस बाज़ार में शुद्ध देसी घी की गरमा-गरम जलेबी, स्थानीय किसानों द्वारा उगाई गई ताज़ी हरी सब्जियाँ, मिट्टी के बर्तन और पारंपरिक कृषि उपकरण उपलब्ध होते हैं।",
    market_feat1: "प्रसिद्ध देसी घी की जलेबी व ख्वाजा",
    market_feat2: "गरायें किसानों की सीधी ताज़ी उपज",
    market_feat3: "मिट्टी के कुल्हड़ व ग्रामीण हस्तशिल्प",
    market_timing: "हाट समय: प्रत्येक मंगलवार व शुक्रवार दोपहर 1:00 से रात्रि 8:00 तक",

    // Instagram Section
    insta_badge: "सोशल मीडिया से जुड़ें",
    insta_title: "गरायें लंभुआ ✨ ऑफिशियल इंस्टाग्राम (@garaye_garawa)",
    insta_subtitle: "गाँव के ताज़ा रील्स, फ़ोटो, त्यौहार, खेलकूद और सांस्कृतिक कार्यक्रमों को इंस्टाग्राम पर देखें व फॉलो करें।",
    insta_handle: "@garaye_garawa",
    insta_follow_btn: "इंस्टाग्राम पर फॉलो करें",
    insta_post1_title: "🌾 गरायें गाँव के खेतों का सुरम्य सूर्यास्त",
    insta_post2_title: "🚩 लंभुआ दुर्गा पूजा व विसर्जन शोभायात्रा",
    insta_post3_title: "🏫 प्राथमिक विद्यालय गरायें (स्थापना 1917)",
    insta_post4_title: "🏏 गरायें प्रीमियर लीग (GPL) क्रिकेट टूर्नामेंट",

    // Video Section
    video_badge: "गाँव दर्शन व ड्रोन दृश्य",
    video_title: "गरायें गाँव का विहंगम वीडियो दर्शन",
    video_subtitle: "लहलहाते खेत, पावन मंदिर, लंभुआ मार्ग और गरायें गाँव के जनजीवन का सजीव अनुभव करें।",
    video_play: "वीडियो चलाएं",
    video_pause: "रोकें",
    video_add_btn: "+ अपना गाँव का वीडियो लिंक जोड़ें",
    video_drone_tour: "गरायें गाँव का विहंगम हवाई चक्कर",
    video_temple_tour: "लंभुआ दुर्गा पूजा महोत्सव व आरती",
    video_market_tour: "गरायें-लंभुआ साप्ताहिक बाज़ार मेला",
    video_school_tour: "प्राथमिक विद्यालय गरायें (1917) व खेल",

    // Schemes & Fund
    schemes_badge: "विकास व लोक कल्याण",
    schemes_title: "सरकारी योजनाएं एवं गरायें ग्राम विकास निधि",
    schemes_subtitle: "लंभुआ विकास खंड अंतर्गत संचालित जनकल्याणकारी योजनाएं एवं पारदर्शी जनसहयोग पोर्टल।",
    tab_schemes: "सरकारी योजनाएं (Government Schemes)",
    tab_fund: "गरायें विकास निधि (Fund Collection)",

    // Scheme cards
    scheme1_title: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    scheme1_desc: "गरायें ग्राम पंचायत के 114 पात्र परिवारों को पक्के आवास हेतु ₹1,20,000 की राशि सीधे बैंक खाते में हस्तांतरित।",
    scheme2_title: "हर घर जल - जल जीवन मिशन",
    scheme2_desc: "लंभुआ ब्लॉक अंतर्गत गरायें के सभी वार्डों में ओवरहेड टैंक पाइपलाइन द्वारा 24 घंटे शुद्ध पेयजल आपूर्ति।",
    scheme3_title: "प्रधानमंत्री किसान सम्मान निधि",
    scheme3_desc: "गाँव के 520+ पंजीकृत लघु एवं सीमांत किसानों को प्रतिवर्ष ₹6,000 की सम्मान राशि सीधे डीबीटी द्वारा प्राप्त।",
    scheme4_title: "सोलर स्ट्रीट लाइट परियोजना",
    scheme4_desc: "गरायें प्रवेश द्वार, शिव मंदिर मार्ग एवं मुख्य चौराहों पर 140 से अधिक स्वचालित सोलर लाइटें स्थापित।",
    scheme5_title: "मनरेगा (MGNREGA) रोजगार गारंटी",
    scheme5_desc: "अमृत सरोवर सौंदर्यीकरण, चकमार्ग खड़ंजा एवं पौधरोपण में स्थानीय जॉब कार्ड धारकों को नियमित रोजगार।",

    // Fund Collection
    fund_badge: "पारदर्शी जनसहयोग",
    fund_title: "गरायें ग्राम विकास निधि (2026-27)",
    fund_desc: "गरायें मुख्य द्वार (Swagat Dwar), मुख्य तिराहे पर 24x7 CCTV सुरक्षा कैमरे और प्राथमिक विद्यालय में स्मार्ट कंप्यूटर लैब की स्थापना के लिए जनसहयोग आमंत्रित है।",
    fund_target: "लक्ष्य राशि",
    fund_raised: "एकत्रित सहयोग",
    fund_donors: "कुल दानदाता",
    fund_donate_btn: "अभी सहयोग करें (Donate Now)",
    fund_qr_title: "आधिकारिक UPI क्यूआर कोड से सहयोग करें",
    fund_upi_id: "UPI ID: garayenvikas@upi",
    fund_copy_upi: "UPI ID कॉपी करें",
    fund_copied: "कॉपी हो गया!",
    fund_donor_name: "आपका शुभ नाम",
    fund_donor_phone: "मोबाइल नंबर",
    fund_donor_city: "गाँव / शहर (लंभुआ / सुल्तानपुर / प्रवासी)",
    fund_donor_amount: "सहयोग राशि (₹)",
    fund_submit_donate: "सहयोग दर्ज करें व सम्मान पत्र प्राप्त करें",
    fund_recent_donors: "हाल ही के प्रमुख दानदाता (Wall of Fame)",

    // Jansunwai / Samasya Portal
    samasya_badge: "ऑनलाइन जनसुनवाई 24x7",
    samasya_title: "अपनी समस्या दर्ज करें व समाधान पाएं",
    samasya_subtitle: "बिजली, पानी, सड़क, नाली या आवास से जुड़ी कोई भी समस्या सीधे प्रधान जी एवं पंचायत सचिव तक पहुंचाएं।",
    tab_new_samasya: "नई समस्या दर्ज करें (New Grievance)",
    tab_track_samasya: "शिकायत की स्थिति जांचें (Track Status)",
    
    form_cat: "समस्या का प्रकार (Category)",
    form_cat_bijli: "बिजली / सोलर स्ट्रीट लाइट की खराबी",
    form_cat_paani: "पेयजल / हैंडपंप / नल पाइपलाइन समस्या",
    form_cat_sadak: "सड़क / खड़ंजा / नाली सफाई",
    form_cat_safai: "सफाई / कचरा प्रबंधन",
    form_cat_awas: "आवास / राशन कार्ड / वृद्धा पेंशन",
    form_cat_kisan: "नहर पानी / खाद-बीज / कृषि समस्या",
    form_cat_other: "अन्य जनसमस्या",
    form_name: "आपका पूरा नाम",
    form_phone: "मोबाइल नंबर",
    form_ward: "वार्ड नंबर / टोला (गरायें लंभुआ)",
    form_desc: "समस्या का विवरण (Details)",
    form_photo: "समस्या की फोटो जोड़ें (वैकल्पिक)",
    form_priority: "प्राथमिकता (Priority)",
    form_priority_normal: "सामान्य (Normal)",
    form_priority_urgent: "अति आवश्यक (Urgent)",
    form_submit: "समस्या दर्ज करें (Submit Grievance)",
    form_success_title: "आपकी शिकायत सफलतापूर्वक दर्ज कर ली गई है!",
    form_token_label: "शिकायत संख्या (Complaint ID)",
    form_track_hint: "कृपया इस संख्या को नोट कर लें, आप स्थिति जांचने के लिए इसका उपयोग कर सकते हैं।",

    track_input_label: "अपनी शिकायत संख्या दर्ज करें",
    track_input_placeholder: "जैसे: GRY-2026-101",
    track_search_btn: "स्थिति देखें",
    track_timeline_step1: "शिकायत दर्ज",
    track_timeline_step2: "अधिकारी नियुक्त",
    track_timeline_step3: "मौके पर स्थलीय निरीक्षण",
    track_timeline_step4: "समाधान पूर्ण (Resolved)",

    // Contact
    contact_badge: "सहायता व मार्गदर्शन",
    contact_title: "संपर्क सूत्र एवं आपातकालीन सेवाएं",
    contact_subtitle: "ग्राम पंचायत सचिवालय गरायें (लंभुआ, सुल्तानपुर) में आपका सदैव स्वागत है।",
    contact_address_title: "सचिवालय कार्यालय का पता",
    contact_address: "ग्राम पंचायत सचिवालय गरायें, विकास खंड लंभुआ, जनपद सुल्तानपुर, उत्तर प्रदेश - पिन: 227304",
    contact_email: "ईमेल: contact@garayen.up.gov.in",
    contact_helpline_title: "आपातकालीन व प्रशासनिक नंबर",
    police: "कोतवाली लंभुआ / पुलिस",
    ambulance: "सामुदायिक स्वास्थ्य केंद्र लंभुआ (एम्बुलेंस)",
    fire: "अग्निशमन केंद्र सुल्तानपुर",
    bijli: "विद्युत उपकेंद्र लंभुआ",
    women_help: "महिला सुरक्षा हेल्पलाइन",
    child_help: "चाइल्ड हेल्पलाइन",

    // Feedback
    feedback_title: "सुझाव अथवा संदेश भेजें",
    feedback_name: "आपका नाम",
    feedback_phone: "फ़ोन नंबर",
    feedback_msg: "आपका संदेश",
    feedback_send: "संदेश भेजें",
    feedback_success: "आपका संदेश सचिवालय को प्राप्त हो गया है। धन्यवाद!",

    // Footer
    footer_desc: "ग्राम पंचायत गरायें, विकास खंड लंभुआ, जनपद सुल्तानपुर (उत्तर प्रदेश) - समृद्ध विरासत, पारदर्शी सुशासन एवं डिजिटल ग्राम का प्रतीक।",
    footer_rights: "सर्वाधिकार सुरक्षित © 2026 ग्राम पंचायत गरायें (लंभुआ)।",
    footer_quick_links: "त्वरित लिंक",
    footer_portal: "डिजिटल भारत | राष्ट्रीय पंचायती राज पोर्टल",
  },
  en: {
    // Top Bar & Meta
    site_title: "Gram Panchayat Garayen",
    site_tagline: "Block: Lambhua | District: Sultanpur (U.P.) - 227304",
    state_gov: "Department of Panchayati Raj | Govt. of Uttar Pradesh",
    helpline: "Garayen Secretariat: 1800-227-GARAYEN | Police: 112 | Ambulance: 108",
    weather: "Garayen (Lambhua): 26°C Sunny | AQI: 42 Pristine",
    lang_btn: "हिंदी में बदलें",
    lang_label: "Switch Language",

    // Navigation
    nav_home: "Home",
    nav_representatives: "Representatives",
    nav_history: "History & Heritage",
    nav_mandir_market: "Temples & Market",
    nav_schemes: "Govt Schemes",
    nav_fund: "Village Vikas Fund",
    nav_videos: "Village Video & Tour",
    nav_insta: "Instagram Feed ✨",
    nav_samasya: "Grievance Redressal",
    nav_contact: "Contact Directory",
    donate_badge: "Contribute",
    complain_badge: "File Grievance",

    // Hero Section
    hero_badge: "✨ Pride of Sultanpur - Garayen Lambhua (@garaye_garawa)",
    hero_title_prefix: "Welcome to Sacred Soil of",
    hero_title_highlight: "Garayen (Lambhua)",
    hero_subtitle: "The historic land of Lambhua Tehsil in Sultanpur, home to the century-old Primary School (Est. 1917), renowned Durga Puja festival, and smart digital panchayat.",
    hero_cta_video: "Watch Village Video Tour",
    hero_cta_complain: "Report an Issue / Grievance",
    hero_cta_fund: "Contribute to Village Fund",
    hero_cta_insta: "Instagram @garaye_garawa",
    hero_stats_pop: "Total Population (2026)",
    hero_stats_pop_val: "3,850+",
    hero_stats_lit: "Literacy Rate",
    hero_stats_lit_val: "76.8%",
    hero_stats_wards: "Total Wards",
    hero_stats_wards_val: "11 Wards",
    hero_stats_clean: "Cleanliness Status",
    hero_stats_clean_val: "Model Smart Village",

    // Banner Selector
    banner_dwar: "Garayen Welcome Gate (Swagat Dwar)",
    banner_aerial: "Panoramic Aerial View of Garayen",
    banner_durgapuja: "Lambhua-Garayen Durga Puja Festival",
    banner_market: "Weekly Rural Haat Bazaar",
    banner_mandir: "Ancient Shiv Mandir & Deepotsav",
    custom_img_btn: "Add Custom Photo",
    custom_img_modal_title: "Set Custom Village Photo",
    custom_img_desc: "Enter any photo URL from Garayen or Instagram (@garaye_garawa) to preview live:",
    custom_img_placeholder: "https://example.com/village-photo.jpg",
    custom_img_apply: "Update Photo",
    custom_img_reset: "Reset Default",

    // Representatives - REAL DATA 2024-2026
    rep_badge: "Leadership & Public Service",
    rep_title: "Our People's Representatives & Officials",
    rep_subtitle: "Elected leaders and administrative officers serving 190 Lambhua Assembly, Sultanpur Parliamentary Constituency and Garayen Panchayat.",

    // MLA
    vidhayak_title: "Hon'ble MLA (190 Lambhua)",
    vidhayak_name: "Shri Sitaram Verma",
    vidhayak_ward: "190 Lambhua Assembly Constituency (BJP)",
    vidhayak_msg: "\"We are fully committed to road connectivity, uninterrupted electricity, and piped tap water under Jal Jeevan Mission for Garayen.\"",

    // MP
    sansad_title: "Hon'ble Member of Parliament (MP, Sultanpur)",
    sansad_name: "Shri Rambhual Nishad",
    sansad_ward: "Sultanpur Parliamentary Constituency (SP - 2024)",
    sansad_msg: "\"Dedicated to advocating for the welfare of farmers, rural youth, and inclusive progress of Sultanpur from Parliament to villages.\"",

    // Block Pramukh
    pramukh_title: "Block Pramukh (Lambhua)",
    pramukh_name: "Kunwar Bahadur Singh",
    pramukh_ward: "Block Development Office - Lambhua, Sultanpur",
    pramukh_msg: "\"Priority budget allocation for brick paving, drainage networks, and Gaushala development in Garayen Gram Panchayat.\"",

    // Gram Pradhan
    pradhan_title: "Village Head (Gram Pradhan, Garayen)",
    pradhan_name: "Shri Neerav Singh",
    pradhan_ward: "Gram Panchayat Garayen (PIN: 227304)",
    pradhan_msg: "\"Our pledge is to deliver 100% benefits of government welfare programs to every family and make Garayen a model village.\"",

    // Panchayat Sachiv
    sachiv_title: "Panchayat Secretary (VDO)",
    sachiv_name: "Shri Manoj Kumar Tiwari",
    sachiv_ward: "Garayen Secretariat, Lambhua Block",
    sachiv_msg: "\"Ensuring transparent digital records, birth/death certificates, and direct beneficiary transfers without intermediaries.\"",

    // Lekhpal
    lekhpal_title: "Revenue Inspector (Lekhpal, Lambhua)",
    lekhpal_name: "Shri Anand Verma",
    lekhpal_ward: "Revenue Circle Garayen, Tehsil Lambhua",
    lekhpal_msg: "\"Time-bound land records (Khatauni), farmer accidental insurance processing, and prompt resolution of inheritance cases.\"",

    contact_rep_btn: "Get in Touch",
    call_now: "Call Directly",
    whatsapp_msg: "WhatsApp Message",
    office_time: "Office Hours",
    office_time_val: "Monday - Saturday: 10:00 AM to 5:00 PM",

    // History & Culture
    hist_badge: "Historical Heritage of Sultanpur & Lambhua",
    hist_title: "Glorious Heritage & Culture of Garayen",
    hist_subtitle: "The century-old Primary School (Est. 1917), Sultanpur's renowned Durga Puja festival, and proximity to sacred Dhopap Dham on the Gomti River.",
    hist_tab_origin: "Origin & School (1917)",
    hist_tab_durgapuja: "Renowned Durga Puja",
    hist_tab_mandir: "Temples & Dhopap Dham",
    hist_tab_market: "Lambhua-Garayen Haat",

    hist_origin_p1: "Located in the Lambhua tehsil of Sultanpur district, Uttar Pradesh, Garayen (often known as Garaye / Garawa) is a prosperous agricultural hamlet with fertile lands, mango groves, and rich community traditions. Its postal PIN is 227304, served by its own branch post office.",
    hist_origin_p2: "The village's most treasured landmark is Primary School Garayen (Ps Garayen), founded under British rule in 1917. For over 109 years, this institution has nurtured generations of young minds. Nearby Jawaharlal Smarak Inter College stands as a beacon for secondary education.",
    hist_origin_stat1: "1917 AD",
    hist_origin_stat1_label: "Primary School Garayen Established",
    hist_origin_stat2: "227304",
    hist_origin_stat2_label: "Garayen Official PIN Code",
    hist_origin_stat3: "190 Lambhua",
    hist_origin_stat3_label: "Assembly Constituency",

    // Durga Puja
    durgapuja_title: "Historic Durga Puja Festival of Sultanpur & Lambhua",
    durgapuja_desc: "Sultanpur's Durga Puja is celebrated as one of India's grandest festivals after West Bengal. Starting after Vijayadashami and continuing until Sharad Purnima, magnificent idols of Maa Durga are worshipped across Lambhua and Garayen.",
    durgapuja_visarjan: "Sacred Dhopap Dham (Gomti Banks): On Sharad Purnima, grand processions conclude with the sacred immersion at Dhopap Dham on the Gomti River.",

    // Mandir
    mandir_title: "Ancient Siddheshwar Mahadev Temple, Garayen",
    mandir_desc: "Situated near the village pond, where devotees offer water during Mahashivratri and Shravan.",
    mandir_aarti: "Daily Aarti: 5:30 AM (Mangala) & 7:00 PM (Evening Aarti)",
    mandir_dhopap_title: "Dhopap Dham (Epic Pilgrimage, Lambhua)",
    mandir_dhopap_desc: "Lord Rama bathed on the banks of Gomti River here to cleanse himself after defeating Ravana. It remains a sacred pilgrimage for the people of Garayen.",

    // Market
    market_title: "Lambhua-Garayen Weekly Haat Bazaar",
    market_subtitle: "The region's bustling farmers' market held every Tuesday and Friday.",
    market_p1: "Featuring crispy, hot pure ghee Jalebi and Khaja sweets, fresh farm-harvested vegetables, earthenware kulhads, and forged agricultural implements.",
    market_feat1: "Pure Desi Ghee Jalebi & Khaja Stalls",
    market_feat2: "Direct Organic Farm-Fresh Produce",
    market_feat3: "Traditional Pottery & Rural Handicrafts",
    market_timing: "Market Timings: Every Tuesday & Friday from 1:00 PM to 8:00 PM",

    // Instagram Section
    insta_badge: "Connect on Social Media",
    insta_title: "Garayen Lambhua ✨ Official Instagram (@garaye_garawa)",
    insta_subtitle: "Watch and follow the latest reels, photos, sports events, festivals, and village celebrations directly on Instagram.",
    insta_handle: "@garaye_garawa",
    insta_follow_btn: "Follow on Instagram",
    insta_post1_title: "🌾 Golden Sunset over Garayen Crop Fields",
    insta_post2_title: "🚩 Lambhua Durga Puja & Immersion Procession",
    insta_post3_title: "🏫 Primary School Garayen (Established 1917)",
    insta_post4_title: "🏏 Garayen Premier League (GPL) Tournament",

    // Video Section
    video_badge: "Drone Tour & Village Life",
    video_title: "Cinematic Drone & Video Showcase",
    video_subtitle: "Experience the crop fields, sacred temple bells, Lambhua road, and joyful rural life of Garayen.",
    video_play: "Play Tour",
    video_pause: "Pause",
    video_add_btn: "+ Add Custom Video Link",
    video_drone_tour: "Garayen Panoramic Aerial Drone Circuit",
    video_temple_tour: "Lambhua Durga Puja Festival & Aarti",
    video_market_tour: "Garayen-Lambhua Weekly Haat Moments",
    video_school_tour: "Primary School Garayen (1917) & Sports",

    // Schemes & Fund
    schemes_badge: "Progress & Welfare",
    schemes_title: "Government Schemes & Village Vikas Nidhi",
    schemes_subtitle: "Welfare programs implemented under Lambhua Block and our transparent community fund portal.",
    tab_schemes: "Government Schemes",
    tab_fund: "Village Vikas Nidhi (Fund)",

    // Scheme cards
    scheme1_title: "PM Awas Yojana (Rural)",
    scheme1_desc: "114 eligible families received direct financial assistance of ₹1,20,000 each for pucca housing in Garayen.",
    scheme2_title: "Har Ghar Jal - Jal Jeevan Mission",
    scheme2_desc: "24/7 treated drinking water supply provided across all wards via overhead pipeline network in Lambhua Block.",
    scheme3_title: "PM Kisan Samman Nidhi",
    scheme3_desc: "Over 520 registered small and marginal farmers receive ₹6,000 annual direct income support via DBT.",
    scheme4_title: "Solar Street Light Project",
    scheme4_desc: "140 automatic solar street lights installed across Garayen welcome gate, temple path, and crossroads.",
    scheme5_title: "MGNREGA Rural Employment",
    scheme5_desc: "Guaranteed wage employment created in Amrit Sarovar pond restoration, tree planting, and brick paving.",

    // Fund Collection
    fund_badge: "Transparent Community Philanthropy",
    fund_title: "Garayen Village Vikas Nidhi (2026-27)",
    fund_desc: "Community contributions invited for erecting the Grand Welcome Gate (Garayen Swagat Dwar), 24x7 security CCTV cameras, and a smart computer lab at Primary School.",
    fund_target: "Target Fund",
    fund_raised: "Funds Raised",
    fund_donors: "Total Donors",
    fund_donate_btn: "Contribute to Village Fund",
    fund_qr_title: "Contribute via Official UPI QR Code",
    fund_upi_id: "UPI ID: garayenvikas@upi",
    fund_copy_upi: "Copy UPI ID",
    fund_copied: "Copied!",
    fund_donor_name: "Your Full Name",
    fund_donor_phone: "Mobile Number",
    fund_donor_city: "Village / City (Lambhua / Sultanpur / NRI)",
    fund_donor_amount: "Contribution Amount (₹)",
    fund_submit_donate: "Record Contribution & Get VIP Certificate",
    fund_recent_donors: "Recent Generous Contributors (Wall of Fame)",

    // Jansunwai / Samasya Portal
    samasya_badge: "Online Jansunwai 24x7",
    samasya_title: "Report an Issue & Track Resolution",
    samasya_subtitle: "Submit grievances related to electricity, water, roads, sanitation, or schemes directly to the Pradhan and Secretary.",
    tab_new_samasya: "Submit New Grievance",
    tab_track_samasya: "Track Grievance Status",

    form_cat: "Issue Category",
    form_cat_bijli: "Electricity / Solar Street Light Fault",
    form_cat_paani: "Drinking Water / Handpump / Tap Pipeline",
    form_cat_sadak: "Road / Brick Paving / Drain Cleaning",
    form_cat_safai: "Garbage & Sanitation Management",
    form_cat_awas: "Housing / Ration Card / Pension",
    form_cat_kisan: "Canal Irrigation / Seeds / Agriculture",
    form_cat_other: "Other Grievances",
    form_name: "Your Full Name",
    form_phone: "Mobile Number",
    form_ward: "Ward Number / Hamlet (Garayen Lambhua)",
    form_desc: "Detailed Description of Problem",
    form_photo: "Upload Photo Proof (Optional)",
    form_priority: "Urgency Level",
    form_priority_normal: "Normal",
    form_priority_urgent: "Urgent",
    form_submit: "Submit Grievance Now",
    form_success_title: "Your Grievance Has Been Registered Successfully!",
    form_token_label: "Grievance Tracking ID",
    form_track_hint: "Please note down this token ID to check real-time resolution progress.",

    track_input_label: "Enter Your Grievance Tracking ID",
    track_input_placeholder: "e.g., GRY-2026-101",
    track_search_btn: "Check Status",
    track_timeline_step1: "Grievance Registered",
    track_timeline_step2: "Official Assigned",
    track_timeline_step3: "On-Site Physical Inspection",
    track_timeline_step4: "Issue Successfully Resolved",

    // Contact
    contact_badge: "Help & Information",
    contact_title: "Contact Directory & Emergency Numbers",
    contact_subtitle: "You are always welcome at Gram Panchayat Secretariat Garayen (Lambhua, Sultanpur).",
    contact_address_title: "Secretariat Address",
    contact_address: "Gram Panchayat Secretariat Garayen, Block Lambhua, District Sultanpur, Uttar Pradesh - PIN: 227304",
    contact_email: "Email: contact@garayen.up.gov.in",
    contact_helpline_title: "Emergency & Administrative Numbers",
    police: "Kotwali Lambhua / Police",
    ambulance: "Community Health Centre Lambhua (Ambulance)",
    fire: "Fire Station Sultanpur",
    bijli: "Electricity Substation Lambhua",
    women_help: "Women Safety Helpline",
    child_help: "Child Protection",

    // Feedback
    feedback_title: "Send a Message or Suggestion",
    feedback_name: "Your Name",
    feedback_phone: "Phone Number",
    feedback_msg: "Your Message",
    feedback_send: "Send Message",
    feedback_success: "Your message has been received. Thank you!",

    // Footer
    footer_desc: "Gram Panchayat Garayen, Block Lambhua, District Sultanpur (Uttar Pradesh) - A beacon of rural heritage, transparent governance, and digital empowerment.",
    footer_rights: "All Rights Reserved © 2026 Gram Panchayat Garayen (Lambhua).",
    footer_quick_links: "Quick Navigation",
    footer_portal: "Digital India | National Panchayati Raj Portal",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "hi",
  setLang: () => {},
  toggleLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("hi");

  useEffect(() => {
    const saved = localStorage.getItem("garayen_lang") as Language | null;
    if (saved === "hi" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("garayen_lang", newLang);
  };

  const toggleLang = () => {
    const nextLang = lang === "hi" ? "en" : "hi";
    setLang(nextLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["hi"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
