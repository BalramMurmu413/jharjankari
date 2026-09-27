import React, { useState } from "react";
import { 
  Calendar, 
  Download, 
  ExternalLink, 
  FileText, 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  MapPin, 
  Briefcase, 
  ChevronRight,
  Flame
} from "lucide-react";

// सैंपल डाटा
const postsData = [
  {
    id: "jssc-cgl-2026",
    category: "JSSC",
    title: "JSSC CGL Recruitment 2026: 2000+ पदों पर भर्ती अधिसूचना जारी",
    subtitle: "झारखंड कर्मचारी चयन आयोग (JSSC) संयुक्त स्नातक स्तरीय प्रतियोगिता परीक्षा",
    shortDesc: "JSSC CGL 2026 के तहत सहायक प्रशाखा पदाधिकारी, कनीय सचिवालय सहायक और अन्य पदों हेतु ऑनलाइन आवेदन शुरू।",
    date: "24 Sep 2026",
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    fullDescription: `झारखंड कर्मचारी चयन आयोग (JSSC) ने राज्य सरकार के विभिन्न विभागों में रिक्त सहायक प्रशाखा पदाधिकारी (ASO), कनीय सचिवालय सहायक (JSA) तथा प्रखंड आपूर्ति पदाधिकारी सहित 2000 से अधिक पदों पर सीधी भर्ती हेतु आधिकारिक विज्ञापन जारी कर दिया है। योग्य एवं इच्छुक अभ्यर्थी आयोग की आधिकारिक वेबसाइट के माध्यम से निर्धारित तिथियों के भीतर ऑनलाइन आवेदन कर सकते हैं।`,
    tableData: [
      { label: "Organization", value: "Jharkhand Staff Selection Commission (JSSC)" },
      { label: "Post Name", value: "ASO, JSA, Block Supply Officer, Planning Assistant" },
      { label: "Total Vacancies", value: "2,017 Posts" },
      { label: "Application Start Date", value: "05 October 2026" },
      { label: "Last Date to Apply", value: "05 November 2026" },
      { label: "Fee Payment Last Date", value: "07 November 2026" },
      { label: "Correction Window", value: "10 - 12 November 2026" },
      { label: "Exam Date (Tentative)", value: "December 2026 / January 2027" },
      { label: "Application Fee", value: "Gen/OBC/EWS: ₹100 | SC/ST (Jharkhand): ₹50" },
      { label: "Age Limit", value: "21 to 35 Years (Relaxation as per norms)" },
    ],
    links: [
      { label: "Apply Online (Registration)", url: "https://jssc.nic.in", type: "primary" },
      { label: "Download Official Notification PDF", url: "#download-pdf", type: "download" },
      { label: "Official Website Portal", url: "https://jssc.nic.in", type: "external" },
    ]
  },
  {
    id: "block-bharti-ranchi-2026",
    category: "Block Bharti",
    title: "झारखंड प्रखंड स्तरीय भर्ती 2026: ब्लॉक कोऑर्डिनेटर एवं एकाउंटेंट पद",
    subtitle: "ग्रामीण विकास विभाग - जिला एवं प्रखंड स्तर पर सीधी भर्ती",
    shortDesc: "रांची, धनबाद और बोकारो प्रखंड कार्यालयों में संविदा आधारित 340 पदों पर ऑफलाइन व ऑनलाइन आवेदन आमंत्रित।",
    date: "26 Sep 2026",
    badge: "New",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    fullDescription: `ग्रामीण विकास विभाग, झारखंड सरकार द्वारा सभी 24 जिलों के विभिन्न प्रखंडों में लोकपाल सहायक, ब्लॉक कोऑर्डिनेटर, कंप्यूटर ऑपरेटर एवं एकाउंटेंट के रिक्त पदों पर संविदा के आधार पर नियुक्ति हेतु विज्ञापन जारी किया गया है। स्थानीय प्रखंड के युवाओं को प्राथमिकता दी जाएगी।`,
    tableData: [
      { label: "Department", value: "Rural Development Department, Jharkhand" },
      { label: "Job Location", value: "All 24 Blocks across Jharkhand" },
      { label: "Total Vacancies", value: "340 Posts" },
      { label: "Application Start Date", value: "20 September 2026" },
      { label: "Last Date to Submit", value: "15 October 2026 (5:00 PM)" },
      { label: "Interview / Merit Date", value: "25 October 2026" },
      { label: "Application Fee", value: "₹0 (No Application Fee)" },
      { label: "Eligibility", value: "Graduation / B.Com / PGDCA with 50% marks" },
    ],
    links: [
      { label: "Download Application Form", url: "#form", type: "download" },
      { label: "Official District Notification PDF", url: "#district-pdf", type: "download" },
      { label: "Jharkhand Rural Portal", url: "https://jharkhand.gov.in", type: "external" },
    ]
  },
  {
    id: "jpsc-civil-services-2026",
    category: "JPSC",
    title: "JPSC Combined Civil Services 2026: 342 प्रशासनिक पदों की घोषणा",
    subtitle: "झारखंड लोक सेवा आयोग - प्रशासनिक एवं पुलिस सेवा",
    shortDesc: "डिप्टी कलेक्टर, डीएसपी और वित्त पदाधिकारी पदों के लिए विस्तृत पाठ्यक्रम और परीक्षा कार्यक्रम जारी।",
    date: "22 Sep 2026",
    badge: "Upcoming",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    fullDescription: `झारखंड लोक सेवा आयोग (JPSC) द्वारा 14वीं संयुक्त सिविल सेवा परीक्षा 2026 की अधिसूचना जारी की गई है। प्रशासनिक सेवा, राज्य पुलिस सेवा, कारा सेवा तथा नगर विकास सेवा के अंतर्गत कुल 342 पदों पर चयन किया जाएगा।`,
    tableData: [
      { label: "Commission", value: "Jharkhand Public Service Commission" },
      { label: "Exam Name", value: "JPSC Combined Civil Services 2026" },
      { label: "Total Posts", value: "342 Vacancies" },
      { label: "Online Registration Opens", value: "12 October 2026" },
      { label: "Closing Date", value: "10 November 2026" },
      { label: "Prelims Exam Date", value: "17 January 2027" },
      { label: "Qualification", value: "Bachelor's Degree in any stream" },
    ],
    links: [
      { label: "Apply Online via JPSC", url: "https://jpsc.gov.in", type: "primary" },
      { label: "Download Syllabus & Notification", url: "#syllabus", type: "download" },
    ]
  },
  {
    id: "jharkhand-yojna-2026",
    category: "Sarkari Yojna",
    title: "मुख्यमंत्री मंईयां सम्मान योजना 2026: DBT किस्त स्टेटस एवं नया फॉर्म",
    subtitle: "महिला एवं बाल विकास विभाग, झारखंड",
    shortDesc: "राज्य की सभी पात्र बहनों को प्रतिमाह ₹1000 से ₹2500 की सहायता राशि का नया आवेदन पोर्टल खुला।",
    date: "27 Sep 2026",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop",
    fullDescription: `मुख्यमंत्री मंईयां सम्मान योजना के तहत छूटे हुए सभी आवेदकों के लिए विशेष पंचायत शिविरों का आयोजन किया जा रहा है। आधार लिंक बैंक खाते में राशि सीधे डीबीटी (DBT) के जरिए भेजी जा रही है। पोर्टल से अपना स्टेटस चेक करें।`,
    tableData: [
      { label: "Scheme Name", value: "Mukhyamantri Maiyan Samman Yojana" },
      { label: "Beneficiary", value: "Women aged 18 to 50 years of Jharkhand" },
      { label: "Financial Benefit", value: "Direct DBT into Bank Account" },
      { label: "Camp Start Date", value: "Ongoing" },
      { label: "Documents Required", value: "Aadhaar Card, Ration Card, Bank Passbook" },
    ],
    links: [
      { label: "Check DBT Beneficiary Status", url: "#status", type: "primary" },
      { label: "Download Offline Application Form PDF", url: "#form-pdf", type: "download" },
    ]
  }
];

export default function MainContent() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "JSSC", "Block Bharti", "JPSC", "Sarkari Yojna"];

  const filteredPosts = activeFilter === "All" 
    ? postsData 
    : postsData.filter(post => post.category === activeFilter);

  // ------------------ SINGLE ARTICLE VIEW ------------------
  if (selectedPost) {
    return (
      <div className="w-[80%] mx-auto py-6 animate-in fade-in duration-300">
        {/* Back Button */}
        <button
          onClick={() => setSelectedPost(null)}
          className="inline-flex items-center gap-2 mb-6 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>मुख्य पृष्ठ पर वापस जाएं (Back to Home)</span>
        </button>

        {/* Article Container */}
        <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 md:p-10 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {selectedPost.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
              <Clock className="h-3.5 w-3.5" />
              {selectedPost.date}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
            {selectedPost.title}
          </h1>

          {/* Image with Subtitle Banner on top */}
          <div className="relative mb-8 overflow-hidden rounded-2xl border border-slate-200 shadow-md dark:border-slate-800 group">
            <div className="absolute top-0 inset-x-0 z-10 bg-slate-950/80 backdrop-blur-md px-5 py-3 border-b border-white/10 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400 shrink-0" />
              <p className="text-xs md:text-sm font-semibold text-slate-100 tracking-wide truncate">
                {selectedPost.subtitle}
              </p>
            </div>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="h-64 sm:h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Detailed Description */}
          <div className="mb-10 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>संक्षिप्त विवरण (Overview)</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {selectedPost.fullDescription}
            </p>
          </div>

          {/* Important Dates Table */}
          <div className="mb-10 space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>महत्वपूर्ण विवरण एवं तिथियाँ (Important Details & Dates)</span>
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <tbody>
                  {selectedPost.tableData.map((row, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-200 transition-colors dark:border-slate-800 ${
                        index % 2 === 0
                          ? "bg-slate-50/70 dark:bg-slate-900/60"
                          : "bg-white dark:bg-slate-950/40"
                      } hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20`}
                    >
                      <td className="w-1/3 border-r border-slate-200 p-3.5 font-semibold text-slate-700 dark:border-slate-800 dark:text-slate-300">
                        {row.label}
                      </td>
                      <td className="p-3.5 font-medium text-slate-900 dark:text-slate-100">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Useful Links / Action Buttons */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExternalLink className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>सीधे महत्वपूर्ण लिंक्स (Direct Action Links)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {selectedPost.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between rounded-xl p-3.5 text-xs font-bold transition shadow-sm active:scale-95 ${
                    link.type === "primary"
                      ? "bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-700"
                      : link.type === "download"
                      ? "border border-emerald-500/40 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300"
                      : "border border-slate-200 bg-slate-100 text-slate-700 hover:bg-white dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
                  }`}
                >
                  <span className="truncate pr-2">{link.label}</span>
                  {link.type === "download" ? (
                    <Download className="h-4 w-4 shrink-0" />
                  ) : (
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  )}
                </a>
              ))}
            </div>
          </div>

        </article>
      </div>
    );
  }

  // ------------------ MAIN GRID VIEW ------------------
  return (
    <div className="w-[80%] mx-auto py-4 space-y-8 animate-in fade-in duration-300">
      
      {/* Live Notice / Flash Updates Marquee Bar */}
      <div className="flex items-center gap-3 overflow-hidden rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-2.5 text-xs font-semibold text-amber-900 shadow-sm backdrop-blur-md dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300">
        <span className="flex items-center gap-1 shrink-0 rounded-lg bg-amber-500 px-2 py-0.5 text-[11px] font-black text-white uppercase tracking-wider">
          <Flame className="h-3 w-3" /> Live Alert
        </span>
        <div className="truncate">
          JSSC CGL 2026 आवेदन प्रक्रिया शुरू • झारखंड पुलिस भर्ती शारीरिक परीक्षा का प्रवेश पत्र जारी • मंईयां सम्मान योजना का लाभ सीधे खाते में।
        </div>
      </div>

      {/* Category Selection Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-xl px-4 py-1.5 text-xs font-bold transition active:scale-95 ${
              activeFilter === cat
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "border border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Section Title */}
      <div className="border-b border-slate-200 pb-3 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">
            ताज़ा अपडेट्स एवं भर्तियां (Latest Updates)
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            विस्तृत जानकारी और आवेदन तिथियों के लिए किसी भी बॉक्स पर क्लिक करें।
          </p>
        </div>
        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
          {filteredPosts.length} उपलब्ध
        </span>
      </div>

      {/* Small Notification Boxes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-emerald-500/50"
          >
            {/* Top row: Category tag & Date */}
            <div className="flex items-center justify-between mb-3">
              <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60">
                {post.category}
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                <Clock className="h-3 w-3" />
                {post.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2 dark:text-white dark:group-hover:text-emerald-400 mb-2">
              {post.title}
            </h3>

            {/* Short Description */}
            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed dark:text-slate-400 mb-4">
              {post.shortDesc}
            </p>

            {/* Bottom Row / Call to action */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                विस्तृत विवरण देखें <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {post.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}