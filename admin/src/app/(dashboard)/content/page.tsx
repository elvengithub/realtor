"use client";

import { useState, useEffect } from "react";
import { fetchAllContent, uploadImage, updateRecord } from "@/lib/cms";
import { Save, Loader2, Image as ImageIcon } from "lucide-react";

interface ContentSection {
  id: string;
  section: string;
  content: any;
}

export default function ContentPage() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    const result = await fetchAllContent();
    if (result.success) {
      setSections(result.data);
    } else {
      console.error(result.error);
    }
    setLoading(false);
  }

  const handleUpdateContent = (id: string, key: string, value: string) => {
    setSections(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, content: { ...s.content, [key]: value } };
      }
      return s;
    }));
  };

  const saveSection = async (section: ContentSection) => {
    setSaving(section.id);
    const result = await updateRecord("site_content", section.id, { content: section.content });
    
    if (!result.success) {
      alert(result.error);
    }
    setSaving(null);
  };

  const handleImageUpload = async (id: string, key: string, file: File) => {
    setSaving(id);
    const result = await uploadImage(file, `${id}-${key}`);

    if (!result.success) {
      if (result.error?.includes("bucket not found")) {
        alert("Please create a public bucket named 'site-images' in your Supabase Storage dashboard.");
      } else {
        alert(result.error);
      }
      setSaving(null);
      return;
    }

    handleUpdateContent(id, key, result.data);
    setSaving(null);
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="animate-spin h-8 w-8 text-slate-900" />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Site Content</h1>
        <p className="text-slate-500 mt-1">Manage the text and images across your website</p>
        <p className="text-xs text-amber-600 font-medium mt-2 bg-amber-50 inline-block px-2 py-1 rounded">
          Tip: Ensure you have created a public bucket named 'site-images' in Supabase Storage.
        </p>
      </div>

      <div className="grid gap-8">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">{section.section}</h2>
              <button
                onClick={() => saveSection(section)}
                disabled={saving === section.id}
                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors disabled:opacity-50"
              >
                {saving === section.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                {saving === section.id ? "Saving..." : "Save Changes"}
              </button>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(section.content).map(([key, value]: [string, any]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-slate-700 capitalize mb-1">
                    {key.replace(/_/g, ' ')}
                  </label>
                  
                  {typeof value === 'object' && value !== null ? (
                    <div className="pl-4 border-l-2 border-slate-100 space-y-4 py-2">
                       {Object.keys(value).map((subKey) => (
                         <div key={subKey}>
                           <label className="block text-xs font-medium text-slate-500 capitalize mb-1">
                             {subKey.replace(/_/g, ' ')}
                           </label>
                           <input
                              type="text"
                              value={value[subKey]}
                              onChange={(e) => {
                                const newContent = { ...section.content };
                                newContent[key] = { ...newContent[key], [subKey]: e.target.value };
                                setSections(prev => prev.map(s => s.id === section.id ? { ...s, content: newContent } : s));
                              }}
                              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-slate-500 focus:border-slate-500 text-sm"
                            />
                         </div>
                       ))}
                    </div>
                  ) : (
                    <>
                      {key.includes('description') || key.includes('bio') || key.includes('quote') ? (
                        <textarea
                          value={value as string}
                          onChange={(e) => handleUpdateContent(section.id, key, e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-slate-500 focus:border-slate-500 text-sm"
                        />
                      ) : (
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={value as string}
                            onChange={(e) => handleUpdateContent(section.id, key, e.target.value)}
                            className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:ring-slate-500 focus:border-slate-500 text-sm"
                          />
                          {key.includes('image') && (
                            <label className="cursor-pointer bg-slate-100 hover:bg-slate-200 p-2 rounded-lg transition-colors border border-slate-300">
                              <ImageIcon className="h-5 w-5 text-slate-600" />
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handleImageUpload(section.id, key, file);
                                }}
                              />
                            </label>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
