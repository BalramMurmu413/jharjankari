import React, { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Clock, 
  Briefcase, 
  Newspaper, 
  MapPin, 
  GraduationCap, 
  Flame, 
  Bell, 
  Tv, 
  Compass 
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSizeLevel, setFontSizeLevel] = useState(1); // 0: Small, 1: Normal, 2: Large
  const [currentTime, setCurrentTime] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  // 1. Live Real-Time Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleString("en-IN", options));
    };

    updateClock();
    const timerId = setInterval(updateClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  // 2. Dark Mode Toggle Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // 3. Text Size Modifier (A- / A / A+)
  const handleFontSizeChange = (level) => {
    setFontSizeLevel(level);
    const htmlElement = document.documentElement;
    if (level === 0) {
      htmlElement.style.fontSize = "14px";
    } else if (level === 1) {
      htmlElement.style.fontSize = "16px";
    } else if (level === 2) {
      htmlElement.style.fontSize = "18px";
    }
  };

  // Menu items list for the 2-column drawer
  const menuItems = [
    { id: 1, name: "झारखंड समाचार (News)", icon: Newspaper, count: "Latest" },
    { id: 2, name: "सरकारी नौकरी (Govt Jobs)", icon: Briefcase, count: "Hot" },
    { id: 3, name: "स्थानीय खबरें (Local News)", icon: MapPin, count: "24 Dists" },
    { id: 4, name: "योजनाएं (Sarkari Yojna)", icon: GraduationCap, count: "New" },
    { id: 5, name: "ट्रेंडिंग अलर्ट्स (Trending)", icon: Flame, count: "Viral" },
    { id: 6, name: "लाइव बुलेटिन (Live TV)", icon: Tv, count: "Live" },
    { id: 7, name: "पर्यटन और संस्कृति (Explore)", icon: Compass, count: "Popular" },
    { id: 8, name: "सूचनाएं व रिजल्ट (Results)", icon: Bell, count: "Updates" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/90 dark:text-slate-100">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* ================= LEFT SECTION: LOGO + NAME & SUBTITLE ================= */}
          <a href="#" className="flex items-center gap-3.5 group select-none">
            {/* Logo Image */}
            <div className="relative flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5 shadow-md shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=120&auto=format&fit=crop&q=80"
                alt="JharJankari Logo"
                className="h-full w-full rounded-[14px] object-cover"
              />
            </div>

            {/* Brand Title + Column Layout Text */}
            <div className="flex flex-col justify-center">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5">
                Jhar<span className="text-emerald-600 dark:text-emerald-400">Jankari</span>
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 -mt-0.5">
                News <span className="text-emerald-500">•</span> Job <span className="text-emerald-500">•</span> Local News Jharkhand
              </span>
            </div>
          </a>

          {/* ================= CENTER: LIVE REAL-TIME CLOCK ================= */}
          <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/70 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-inner backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
            <Clock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 animate-spin-slow" />
            <span className="tabular-nums font-semibold tracking-wide">{currentTime || "Loading time..."}</span>
          </div>

          {/* ================= RIGHT CONTROLS: FONT RESIZE, THEME, HAMBURGER ================= */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Text Resizer (A- / A / A+) */}
            <div className="hidden sm:flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-800 dark:bg-slate-900">
              <button
                type="button"
                onClick={() => handleFontSizeChange(0)}
                title="Decrease font size"
                className={`rounded-lg px-2 py-1 text-xs font-bold transition ${
                  fontSizeLevel === 0 
                    ? "bg-white text-emerald-600 shadow-sm dark:bg-slate-800 dark:text-emerald-400" 
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => handleFontSizeChange(1)}
                title="Default font size"
                className={`rounded-lg px-2 py-1 text-xs font-bold transition ${
                  fontSizeLevel === 1 
                    ? "bg-white text-emerald-600 shadow-sm dark:bg-slate-800 dark:text-emerald-400" 
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => handleFontSizeChange(2)}
                title="Increase font size"
                className={`rounded-lg px-2 py-1 text-xs font-bold transition ${
                  fontSizeLevel === 2 
                    ? "bg-white text-emerald-600 shadow-sm dark:bg-slate-800 dark:text-emerald-400" 
                    : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                A+
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
      {/* Top Floating / Fixed Theme Toggle Button (Desktop Screen) */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setDarkMode((prev) => !prev)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-300 bg-white/90 text-slate-800 shadow-xl shadow-emerald-950/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-500 active:scale-95 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100 dark:hover:border-emerald-400"
          aria-label="Toggle Dark and Light Mode"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <Sun className="h-6 w-6 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-in spin-in-90 duration-300" />
          ) : (
            <Moon className="h-6 w-6 text-slate-700 animate-in spin-in-90 duration-300" />
          )}
        </button>
      </div> */}

            {/* Hamburger Trigger Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
              aria-label="Open Navigation Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Real-time bar for small devices */}
        <div className="flex md:hidden items-center justify-center border-t border-slate-200/50 py-1 text-[11px] font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">
          <Clock className="mr-1.5 h-3 w-3 text-emerald-600 dark:text-emerald-400" />
          <span>{currentTime}</span>
        </div>
      </header>

      {/* ================= FULL-WIDTH RIGHT-TO-LEFT SLIDE DRAWER ================= */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Right to Left Slide Container (Full Width) */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-full flex-col bg-white/95 backdrop-blur-2xl transition-transform duration-500 ease-out dark:bg-slate-950/95 dark:text-white ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Close (Cross) Button */}
        <div className="flex h-20 items-center justify-between border-b border-slate-200/80 px-6 sm:px-10 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold text-lg shadow-md shadow-emerald-600/30">
              ⚡
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                JharJankari Quick Navigation
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                झारखंड की हर एक अपडेट, नौकरी और ताज़ा खबरें
              </p>
            </div>
          </div>

          {/* Cross Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 active:scale-95"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Content: 2-Column Buttons / Cards with GLOW effect */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10">
         
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Select Category
            </p>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isSelected = activeMenu === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`group relative flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 active:scale-[0.98] ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-50/80 shadow-[0_0_25px_rgba(16,185,129,0.45)] ring-2 ring-emerald-500/50 dark:border-emerald-400 dark:bg-emerald-950/30 dark:shadow-[0_0_30px_rgba(52,211,153,0.35)]"
                        : "border-slate-200/90 bg-white hover:border-emerald-300 hover:bg-slate-50/80 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:hover:border-slate-700 dark:hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon with glow background */}
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                          isSelected
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/50"
                            : "bg-slate-100 text-slate-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-emerald-950 dark:group-hover:text-emerald-300"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                          {item.name}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          ताज़ा और प्रमाणित जानकारी
                        </p>
                      </div>
                    </div>

                    {/* Tag badge */}
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                        isSelected
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-slate-200/80 bg-slate-50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50 sm:px-10">
          <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>© JharJankari 2026 • All Rights Reserved</span>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:underline">Privacy</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
          <nav className="w-full m-auto mb-5 flex items-center justify-around px-4 py-3 rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900/70">
            {/* Home */}
            <Link 
              to="/" 
              className="group relative px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <span>Home</span>
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-emerald-400" />
            </Link>  

            {/* About */}
            <Link 
              to="/about" 
              className="group relative px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <span>Job Alert</span>
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-emerald-400" />
            </Link>  

            {/* Register */}
            <Link 
              to="/register" 
              className="group relative px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <span>News</span>
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 group-hover:scale-x-100 dark:bg-emerald-400" />
            </Link>  

            
          </nav>
        </div>
    </>
  );
}
    