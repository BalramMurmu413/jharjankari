import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const jharkhandDistricts = [
    "रांची (Ranchi)", "धनबाद (Dhanbad)", "पूर्वी सिंहभूम", "बोकारो (Bokaro)",
    "हजारीबाग", "देवघर (Deoghar)", "गिरिडीह", "रामगढ़ (Ramgarh)",
    "पलामू (Palamu)", "दुमका (Dumka)", "गढ़वा (Garhwa)", "चतरा (Chatra)",
    "गुमला (Gumla)", "लोहरदगा", "सिमडेगा", "पश्चिमी सिंहभूम",
    "सरायकेला खरसावां", "साहिबगंज", "पाकुड़ (Pakur)", "गोड्डा (Godda)",
    "जामताड़ा", "कोडरमा (Koderma)", "खूंटी (Khunti)", "लातेहार (Latehar)"
  ];

  return (
    <footer className="w-full mt-20 border-t border-slate-200/80 bg-gradient-to from-white via-slate-50 to-slate-100 text-slate-800 transition-colors duration-300 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-200">
      
      {/* 1. Community CTA Banner */}
      <div className="border-b border-slate-200/80 bg-emerald-600/5 py-8 backdrop-blur-md dark:border-slate-800 dark:bg-emerald-950/20">
        <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              🔥 झारखण्ड जॉब्स एवं ताज़ा समाचार अलर्ट
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              सीधे अपने WhatsApp व Telegram पर सूचनाएं पाएं
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              50,000+ से अधिक अभ्यर्थी और नागरिक JharJankari कम्युनिटी से जुड़ चुके हैं।
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-500/20 transition hover:bg-sky-600 active:scale-95"
            >
              <span>Join Telegram Channel</span>
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700 active:scale-95"
            >
              <span>Join WhatsApp Group</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Directory Columns */}
      <div className="w-[85%] mx-auto py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 pr-0 lg:pr-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/25 text-white font-black text-lg">
                ⚡
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  Jhar<span className="text-emerald-600 dark:text-emerald-400">Jankari</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  झारखंड का विश्वसनीय पोर्टल
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              JharJankari.com झारखंड का प्रमुख सूचनात्मक वेब पोर्टल है, जिसका उद्देश्य राज्य के सभी 24 जिलों के नागरिकों, छात्र-छात्राओं और अभ्यर्थियों तक सरकारी योजनाएं, JSSC/JPSC भर्ती, एडमिट कार्ड और परिणाम निष्पक्ष रूप से पहुंचाना है।
            </p>

            <div className="rounded-2xl border border-slate-200/90 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/60 shadow-sm space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <p>📍 <strong>कार्यालय:</strong> लालपुर चौक, सर्कुलर रोड, रांची - 834001</p>
              <p>✉️ <strong>ईमेल:</strong> support@jharjankari.com</p>
            </div>
          </div>

          {/* Sarkari Jobs */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-emerald-500/30 pb-2">
              💼 सरकारी भर्तियां (Jobs)
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                "JSSC CGL Recruitment",
                "JPSC Civil Services Exam",
                "झारखंड पुलिस आरक्षी भर्ती",
                "प्रखंड स्तरीय संविदा भर्ती",
                "JSSC उत्पाद सिपाही",
                "झारखंड शिक्षक भर्ती",
                "स्वास्थ्य विभाग एएनएम/जीएनएम"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#jobs" className="text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 flex items-center gap-1.5">
                    <span className="text-emerald-500">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education & Schemes */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-emerald-500/30 pb-2">
              📄 योजनाएं व रिजल्ट
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                "मंईयां सम्मान योजना",
                "अबुआ आवास योजना लिस्ट",
                "ई-कल्याण छात्रवृत्ति",
                "JAC 10th & 12th Board Result",
                "JSSC Admit Card 2026",
                "झारखंड राशन कार्ड सूची"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#schemes" className="text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 flex items-center gap-1.5">
                    <span className="text-emerald-500">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white border-b border-emerald-500/30 pb-2">
              🌐 आधिकारिक पोर्टल
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "JSSC Portal", url: "https://jssc.nic.in" },
                { name: "JPSC Portal", url: "https://jpsc.gov.in" },
                { name: "JAC Ranchi", url: "https://jac.jharkhand.gov.in" },
                { name: "Jharkhand Rojgar", url: "https://rojgar.jharkhand.gov.in" },
                { name: "e-Kalyan Portal", url: "https://ekalyan.cgg.gov.in" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-[10px] text-slate-400">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. 24 Districts */}
        <div className="rounded-3xl border border-slate-200/90 bg-white/70 p-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 shadow-sm space-y-4">
          <div className="border-b border-slate-200/70 pb-3 dark:border-slate-800">
            <h4 className="text-sm font-black text-slate-900 dark:text-white">
              📍 झारखंड के सभी 24 जिलों का न्यूज़ एवं जॉब हब
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {jharkhandDistricts.map((dist, i) => (
              <a
                key={i}
                href={`#${dist}`}
                className="rounded-xl border border-slate-200/80 bg-slate-50/80 px-2 py-1.5 text-center text-xs font-semibold text-slate-700 transition hover:border-emerald-500/50 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
              >
                {dist}
              </a>
            ))}
          </div>
        </div>

        {/* 4. Disclaimer */}
        <div className="rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4 text-[11px] leading-relaxed text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-amber-300/90">
          <strong>⚠️ अस्वीकरण (Disclaimer):</strong> JharJankari.com किसी भी सरकारी संस्था का आधिकारिक पोर्टल नहीं है। यह एक स्वतंत्र सूचनात्मक मंच है। किसी भी आवेदन को भरने या शुल्क भुगतान से पूर्व संबंधित विभाग की आधिकारिक वेबसाइट से पुष्टि अवश्य करें।
        </div>
      </div>

      {/* 5. Bottom Copyright Bar */}
      <div className="border-t border-slate-200/80 bg-white/90 py-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} JharJankari. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 font-medium">
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#privacy" className="hover:text-emerald-600 transition">Privacy</a>
            <a href="#terms" className="hover:text-emerald-600 transition">Terms</a>
            <button
              onClick={scrollToTop}
              className="rounded-lg border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}