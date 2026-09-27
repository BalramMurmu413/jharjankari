import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Eye, 
  Layers, 
  FileText, 
  TrendingUp, 
  CheckCircle, 
  X, 
  Calendar, 
  Image as ImageIcon,
  Link as LinkIcon,
  Tag
} from "lucide-react";

const initialPosts = [
  {
    id: "jssc-cgl-2026",
    category: "JSSC",
    title: "JSSC CGL Recruitment 2026: 2000+ पदों पर भर्ती अधिसूचना जारी",
    subtitle: "झारखंड कर्मचारी चयन आयोग (JSSC) संयुक्त स्नातक स्तरीय परीक्षा",
    shortDesc: "JSSC CGL 2026 के तहत ASO और JSA पदों हेतु ऑनलाइन आवेदन शुरू।",
    date: "24 Sep 2026",
    badge: "Hot",
    applyStart: "05 Oct 2026",
    applyEnd: "05 Nov 2026",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "block-bharti-2026",
    category: "Block Bharti",
    title: "झारखंड प्रखंड स्तरीय भर्ती 2026: ब्लॉक कोऑर्डिनेटर पद",
    subtitle: "ग्रामीण विकास विभाग - जिला एवं प्रखंड स्तर पर सीधी भर्ती",
    shortDesc: "रांची और धनबाद ब्लॉक में 340 संविदा पदों पर आवेदन आमंत्रित।",
    date: "26 Sep 2026",
    badge: "New",
    applyStart: "20 Sep 2026",
    applyEnd: "15 Oct 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "jpsc-2026",
    category: "JPSC",
    title: "JPSC Combined Civil Services 2026: 342 प्रशासनिक पद",
    subtitle: "झारखंड लोक सेवा आयोग - प्रशासनिक एवं पुलिस सेवा",
    shortDesc: "डिप्टी कलेक्टर और डीएसपी पदों के लिए विज्ञापन जारी।",
    date: "22 Sep 2026",
    badge: "Upcoming",
    applyStart: "12 Oct 2026",
    applyEnd: "10 Nov 2026",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Dashboard() {
  const [posts, setPosts] = useState(initialPosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "JSSC",
    subtitle: "",
    shortDesc: "",
    badge: "New",
    applyStart: "",
    applyEnd: "",
    image: ""
  });

  // Open Modal for Add
  const handleAddNew = () => {
    setEditingPost(null);
    setFormData({
      title: "",
      category: "JSSC",
      subtitle: "",
      shortDesc: "",
      badge: "New",
      applyStart: "",
      applyEnd: "",
      image: ""
    });
    setIsModalOpen(true);
  };

  // Open Modal for Edit
  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({ ...post });
    setIsModalOpen(true);
  };

  // Delete Action
  const handleDelete = (id) => {
    if (window.confirm("क्या आप वाकई इस पोस्ट को डिलीट करना चाहते हैं?")) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Save (Create or Update)
  const handleSave = (e) => {
    e.preventDefault();
    if (editingPost) {
      setPosts((prev) =>
        prev.map((p) => (p.id === editingPost.id ? { ...p, ...formData } : p))
      );
    } else {
      const newPost = {
        ...formData,
        id: `post-${Date.now()}`,
        date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
      };
      setPosts((prev) => [newPost, ...prev]);
    }
    setIsModalOpen(false);
  };

  // Filtered Posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-[85%] mx-auto py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1.5">
            <Layers className="h-3.5 w-3.5" />
            <span>Admin Control Center</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            JharJankari Post Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            सरकारी नौकरी, योजनाएं और स्थानीय सूचनाओं को प्रबंधित (CRUD) करें।
          </p>
        </div>

        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700 active:scale-95"
        >
          <Plus className="h-4 w-4" />
          <span>नया पोस्ट जोड़ें (Add Post)</span>
        </button>
      </div>

      {/* ================= ANALYTICS STAT CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "कुल सक्रिय पोस्ट्स", value: posts.length, icon: FileText, change: "+3 आज" },
          { label: "JSSC भर्तियां", value: posts.filter(p => p.category === "JSSC").length, icon: Tag, change: "Active" },
          { label: "प्रखंड स्तरीय सूचनाएं", value: posts.filter(p => p.category === "Block Bharti").length, icon: CheckCircle, change: "Updated" },
          { label: "कुल विज़िटर्स", value: "24.8K", icon: TrendingUp, change: "+12% this week" },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/90 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</span>
                <div className="rounded-xl bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</span>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= SEARCH & FILTER BAR ================= */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="पोस्ट शीर्षक या श्रेणी खोजें..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-10 pr-4 text-xs text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/10 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {["All", "JSSC", "Block Bharti", "JPSC", "Sarkari Yojna"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition whitespace-nowrap active:scale-95 ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ================= CRUD DATA TABLE ================= */}
      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-500 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-400">
                <th className="p-4 font-semibold">पोस्ट एवं विवरण</th>
                <th className="p-4 font-semibold">कैटेगरी</th>
                <th className="p-4 font-semibold">आवेदन तिथि</th>
                <th className="p-4 font-semibold">बैज / स्थिति</th>
                <th className="p-4 font-semibold text-right">कार्रवाई (Actions)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    कोई पोस्ट नहीं मिली।
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="hover:bg-slate-50/60 transition-colors dark:hover:bg-slate-800/40"
                  >
                    {/* Title & Image */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.image || "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=120"}
                          alt={post.title}
                          className="h-10 w-10 shrink-0 rounded-xl object-cover border border-slate-200 dark:border-slate-800"
                        />
                        <div className="max-w-md">
                          <p className="font-bold text-slate-900 line-clamp-1 dark:text-white">
                            {post.title}
                          </p>
                          <p className="text-[11px] text-slate-400 line-clamp-1">
                            {post.subtitle}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-4">
                      <span className="rounded-md border border-emerald-500/20 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                        {post.category}
                      </span>
                    </td>

                    {/* Dates */}
                    <td className="p-4 text-xs text-slate-600 dark:text-slate-400">
                      <div><span className="font-semibold text-slate-800 dark:text-slate-200">Start:</span> {post.applyStart || "N/A"}</div>
                      <div><span className="font-semibold text-rose-600 dark:text-rose-400">End:</span> {post.applyEnd || "N/A"}</div>
                    </td>

                    {/* Badge */}
                    <td className="p-4">
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {post.badge || "Standard"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleEdit(post)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-emerald-400"
                          title="Edit"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-rose-600 hover:border-rose-300 hover:bg-rose-50 dark:border-slate-800 dark:bg-slate-900 dark:text-rose-400 dark:hover:bg-rose-950/40"
                          title="Delete"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================= CREATE / EDIT MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-950 dark:text-white">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800">
              <h2 className="text-xl font-bold">
                {editingPost ? "पोस्ट संपादित करें (Edit Post)" : "नई भर्ती / सूचना जोड़ें (Add Post)"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSave} className="space-y-4 pt-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  पोस्ट का मुख्य शीर्षक (Title) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. JSSC CGL 2026 भर्ती अधिसूचना"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                    श्रेणी (Category)
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                  >
                    <option value="JSSC">JSSC</option>
                    <option value="Block Bharti">Block Bharti</option>
                    <option value="JPSC">JPSC</option>
                    <option value="Sarkari Yojna">Sarkari Yojna</option>
                    <option value="Local News">Local News</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                    बैज (Badge)
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="e.g. Hot, New, Trending"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  उप-शीर्षक (Subtitle for Image Overlay)
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="e.g. झारखंड कर्मचारी चयन आयोग संयुक्त परीक्षा"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                    आवेदन प्रारंभ तिथि (Start Date)
                  </label>
                  <input
                    type="text"
                    value={formData.applyStart}
                    onChange={(e) => setFormData({ ...formData, applyStart: e.target.value })}
                    placeholder="e.g. 05 Oct 2026"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                    अंतिम तिथि (Last Date)
                  </label>
                  <input
                    type="text"
                    value={formData.applyEnd}
                    onChange={(e) => setFormData({ ...formData, applyEnd: e.target.value })}
                    placeholder="e.g. 05 Nov 2026"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  इमेज URL (Cover Image Link)
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1 text-slate-700 dark:text-slate-300">
                  संक्षिप्त विवरण (Short Description)
                </label>
                <textarea
                  rows={2}
                  value={formData.shortDesc}
                  onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                  placeholder="होमपेज के कार्ड पर दिखने वाला 2 लाइन का विवरण..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs outline-none focus:border-emerald-600 dark:border-slate-800 dark:bg-slate-900"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300"
                >
                  रद्द करें
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700"
                >
                  {editingPost ? "अपडेट करें (Save Changes)" : "सुरक्षित करें (Publish Post)"}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}