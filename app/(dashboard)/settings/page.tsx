"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/src/lib/supabase";
import { 
  Save, Loader2, Globe, Facebook, Instagram, Linkedin, Mail, Phone, MapPin, 
  Megaphone, Info, BarChart3, Calendar, Image as ImageIcon,
  Link as LinkIcon, Type, AlignLeft, User as UserIcon
} from "lucide-react";

type SectionId = "settings" | "hero" | "intro" | "ecosystem" | "event";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SectionId>("settings");
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const sections: { id: SectionId; label: string; icon: any }[] = [
    { id: "settings", label: "Global Settings", icon: Globe },
    { id: "hero", label: "Hero Section", icon: Megaphone },
    { id: "intro", label: "Introduction", icon: Info },
    { id: "ecosystem", label: "Ecosystem Stats", icon: BarChart3 },
    { id: "event", label: "Upcoming Event", icon: Calendar },
  ];

  function getDefaults(id: SectionId) {
    const defaults: Record<SectionId, any> = {
      settings: {
        branding: { site_name: "Anthony Leuterio", site_description: "Master the Science of Scale", logo_url: "" },
        contact: { email: "support@antonioleuterio.com", phone: "+63 912 345 6789", address: "Cebu City, Philippines" },
        social: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com", youtube: "https://youtube.com" }
      },
      hero: { title: "MASTER THE SCIENCE OF SCALE", subtitle: "", description: "", image: "", cta_text: "Explore Coaching", cta_link: "/coaching" },
      intro: { title: "", subtitle: "", name: "Anthony Leuterio", bio: "", quote: "", image: "" },
      ecosystem: {
        filipino_homes: { title: "Filipino Homes", stat: "", description: "" },
        leuterio_realty: { title: "Leuterio Realty", stat: "", description: "" },
        rent_ph: { title: "Rent.ph", stat: "", description: "" }
      },
      event: { badge: "Live Intensive", title: "", date: "", location: "", description: "", image: "", cta_text: "Secure Your Seat", cta_link: "/events", availability: "" }
    };
    return defaults[id];
  }

  const fetchSectionData = useCallback(async (id: SectionId) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .eq("id", id)
        .single();
      
      if (error && error.code !== "PGRST116") {
        console.error("Error fetching section:", error);
      }
      
      if (data?.content) {
        setSettings(data.content);
      } else {
        setSettings(getDefaults(id));
      }
    } catch (err) {
      console.error("Critical error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSectionData(activeSection);
  }, [activeSection, fetchSectionData]);

  const handleUpdate = (path: string[], value: any) => {
    setSettings((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        current[path[i]] = { ...current[path[i]] };
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  const saveSettings = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("site_content")
      .upsert({ 
        id: activeSection, 
        section: sections.find(s => s.id === activeSection)?.label || activeSection, 
        content: settings 
      });
    
    if (error) alert(error.message);
    setSaving(false);
  };

  const InputField = ({ label, icon: Icon, value, onChange, type = "text" }: any) => (
    <div className="space-y-1">
      <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        {Icon && <Icon className="h-3 w-3" />} {label}
      </label>
      <input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all"
      />
    </div>
  );

  const TextAreaField = ({ label, icon: Icon, value, onChange }: any) => (
    <div className="space-y-1">
      <label className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        {Icon && <Icon className="h-3 w-3" />} {label}
      </label>
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-brand-gold/20 focus:border-brand-gold outline-none transition-all resize-none"
      />
    </div>
  );

  return (
    <div className="flex gap-8 h-[calc(100vh-120px)] overflow-hidden">
      {/* Sidebar Navigation */}
      <div className="w-64 flex flex-col gap-1">
        <h3 className="px-4 text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Content Sections</h3>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
              activeSection === section.id
                ? "bg-brand-gold text-white shadow-md shadow-brand-gold/20 font-semibold"
                : "text-slate-500 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-100"
            }`}
          >
            <section.icon className={`h-5 w-5 ${activeSection === section.id ? "text-white" : "text-slate-400 group-hover:text-brand-gold"}`} />
            <span>{section.label}</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Section Header */}
          <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{sections.find(s => s.id === activeSection)?.label}</h1>
              <p className="text-sm text-slate-500">Edit the content displayed on your landing page</p>
            </div>
            <button
              onClick={saveSettings}
              disabled={saving || loading}
              className="flex items-center gap-2 px-6 py-2 rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-50 bg-brand-gold text-white hover:bg-brand-gold-deep"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {saving ? "Saving Changes..." : "Save Updates"}
            </button>
          </div>

          <div className="p-8">
            {loading ? (
              <div className="flex h-64 items-center justify-center">
                <Loader2 className="animate-spin h-8 w-8 text-brand-gold" />
              </div>
            ) : settings && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {activeSection === "settings" && (
                  <>
                    <div className="grid grid-cols-2 gap-6 pb-6 border-b border-slate-50">
                      <InputField label="Site Name" value={settings.branding.site_name} onChange={(v: string) => handleUpdate(["branding", "site_name"], v)} icon={Type} />
                      <InputField label="Site Description" value={settings.branding.site_description} onChange={(v: string) => handleUpdate(["branding", "site_description"], v)} icon={AlignLeft} />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                      <InputField label="Email Address" value={settings.contact.email} onChange={(v: string) => handleUpdate(["contact", "email"], v)} icon={Mail} />
                      <InputField label="Phone Number" value={settings.contact.phone} onChange={(v: string) => handleUpdate(["contact", "phone"], v)} icon={Phone} />
                      <InputField label="Office Address" value={settings.contact.address} onChange={(v: string) => handleUpdate(["contact", "address"], v)} icon={MapPin} />
                    </div>
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-50">
                      <InputField label="Facebook" value={settings.social.facebook} onChange={(v: string) => handleUpdate(["social", "facebook"], v)} icon={Facebook} />
                      <InputField label="Instagram" value={settings.social.instagram} onChange={(v: string) => handleUpdate(["social", "instagram"], v)} icon={Instagram} />
                      <InputField label="LinkedIn" value={settings.social.linkedin} onChange={(v: string) => handleUpdate(["social", "linkedin"], v)} icon={Linkedin} />
                      <InputField label="YouTube" value={settings.social.youtube} onChange={(v: string) => handleUpdate(["social", "youtube"], v)} icon={LinkIcon} />
                    </div>
                  </>
                )}

                {activeSection === "hero" && (
                  <div className="space-y-6">
                    <InputField label="Main Headline" value={settings.title} onChange={(v: string) => handleUpdate(["title"], v)} icon={Type} />
                    <InputField label="Subtitle / Designation" value={settings.subtitle} onChange={(v: string) => handleUpdate(["subtitle"], v)} icon={AlignLeft} />
                    <TextAreaField label="Hero Description" value={settings.description} onChange={(v: string) => handleUpdate(["description"], v)} icon={AlignLeft} />
                    <div className="grid grid-cols-2 gap-6">
                      <InputField label="Hero Image URL" value={settings.image} onChange={(v: string) => handleUpdate(["image"], v)} icon={ImageIcon} />
                      <InputField label="CTA Button Text" value={settings.cta_text} onChange={(v: string) => handleUpdate(["cta_text"], v)} icon={LinkIcon} />
                    </div>
                  </div>
                )}

                {activeSection === "intro" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <InputField label="Introduction Title" value={settings.title} onChange={(v: string) => handleUpdate(["title"], v)} icon={Type} />
                      <InputField label="Subtitle" value={settings.subtitle} onChange={(v: string) => handleUpdate(["subtitle"], v)} icon={AlignLeft} />
                    </div>
                    <InputField label="Full Name" value={settings.name} onChange={(v: string) => handleUpdate(["name"], v)} icon={UserIcon} />
                    <TextAreaField label="Detailed Bio" value={settings.bio} onChange={(v: string) => handleUpdate(["bio"], v)} icon={AlignLeft} />
                    <TextAreaField label="Personal Quote" value={settings.quote} onChange={(v: string) => handleUpdate(["quote"], v)} icon={Megaphone} />
                    <InputField label="Intro Image URL" value={settings.image} onChange={(v: string) => handleUpdate(["image"], v)} icon={ImageIcon} />
                  </div>
                )}

                {activeSection === "ecosystem" && (
                   <div className="space-y-12">
                     {Object.keys(settings).map((key) => (
                       <div key={key} className="p-6 bg-slate-50/50 rounded-2xl border border-slate-100 space-y-4">
                         <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2 capitalize">{key.replace('_', ' ')}</h3>
                         <div className="grid grid-cols-2 gap-6">
                           <InputField label="Brand Name" value={settings[key].title} onChange={(v: string) => handleUpdate([key, "title"], v)} icon={Type} />
                           <InputField label="Key Stat" value={settings[key].stat} onChange={(v: string) => handleUpdate([key, "stat"], v)} icon={BarChart3} />
                         </div>
                         <TextAreaField label="Short Description" value={settings[key].description} onChange={(v: string) => handleUpdate([key, "description"], v)} icon={AlignLeft} />
                       </div>
                     ))}
                   </div>
                )}

                {activeSection === "event" && (
                  <div className="space-y-6">
                    <InputField label="Event Badge" value={settings.badge} onChange={(v: string) => handleUpdate(["badge"], v)} icon={Megaphone} />
                    <InputField label="Event Title" value={settings.title} onChange={(v: string) => handleUpdate(["title"], v)} icon={Type} />
                    <div className="grid grid-cols-2 gap-6">
                      <InputField label="Date & Time" value={settings.date} onChange={(v: string) => handleUpdate(["date"], v)} icon={Calendar} />
                      <InputField label="Location" value={settings.location} onChange={(v: string) => handleUpdate(["location"], v)} icon={MapPin} />
                    </div>
                    <TextAreaField label="Event Description" value={settings.description} onChange={(v: string) => handleUpdate(["description"], v)} icon={AlignLeft} />
                    <div className="grid grid-cols-2 gap-6">
                      <InputField label="Event Image URL" value={settings.image} onChange={(v: string) => handleUpdate(["image"], v)} icon={ImageIcon} />
                      <InputField label="Availability Info" value={settings.availability} onChange={(v: string) => handleUpdate(["availability"], v)} icon={UserIcon} />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <InputField label="CTA Button Text" value={settings.cta_text} onChange={(v: string) => handleUpdate(["cta_text"], v)} icon={LinkIcon} />
                      <InputField label="CTA Link" value={settings.cta_link} onChange={(v: string) => handleUpdate(["cta_link"], v)} icon={LinkIcon} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
