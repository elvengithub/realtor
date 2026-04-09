"use client";
import React, { useState } from 'react';
import { supabase } from '@/src/lib/supabase';
import { X, Save, Loader2, Image as ImageIcon } from 'lucide-react';
import { uploadImage } from '@/src/lib/cms';

interface InlineEditorModalProps {
  id: string; // The section id (hero, intro, ecosystem, etc)
  initialData: any;
  onClose: () => void;
  onSaveSuccess: (newData: any) => void;
}

export default function InlineEditorModal({ id, initialData, onClose, onSaveSuccess }: InlineEditorModalProps) {
  const [data, setData] = useState<any>(JSON.parse(JSON.stringify(initialData)));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = (keys: string[], value: any) => {
    setData((prev: any) => {
      const next = { ...prev };
      let current = next;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const handleImageUpload = async (keys: string[], file: File) => {
    setSaving(true);
    const result = await uploadImage(file, `${id}-${keys.join('-')}`);
    if (!result.success) {
      setError(result.error?.includes("bucket not found") ? "Create public bucket 'site-images' in Supabase" : `Upload failed: ${result.error}`);
    } else {
      handleUpdate(keys, result.data);
      setError(null);
    }
    setSaving(false);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    const { error: upsertError } = await supabase.from('site_content').upsert({
      id: id,
      section: id.charAt(0).toUpperCase() + id.slice(1),
      content: data
    });

    if (upsertError) {
      setError(upsertError.message);
      setSaving(false);
    } else {
      onSaveSuccess(data);
    }
  };

  const renderField = (keyName: string, value: any, path: string[]) => {
    if (typeof value === 'object' && value !== null) {
      return (
        <div key={keyName} className="mb-4 p-4 border border-[var(--border-color)] rounded-lg bg-[rgba(255,255,255,0.02)]">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--brand-gold)' }}>
            {keyName.replace(/_/g, ' ')}
          </h4>
          {Object.entries(value).map(([subKey, subVal]) => renderField(subKey, subVal, [...path, subKey]))}
        </div>
      );
    }

    const isTextarea = keyName.includes('description') || keyName.includes('bio') || keyName.includes('quote');
    const isImage = keyName.includes('image');

    return (
      <div key={keyName} className="mb-4">
        <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
          {keyName.replace(/_/g, ' ')}
        </label>
        {isTextarea ? (
          <textarea
            value={value || ""}
            onChange={(e) => handleUpdate(path, e.target.value)}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]"
            style={{ resize: 'none' }}
          />
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={value || ""}
              onChange={(e) => handleUpdate(path, e.target.value)}
              className="flex-1 w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]"
            />
            {isImage && (
              <label className="cursor-pointer flex items-center justify-center px-4 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] hover:border-[var(--brand-gold)] transition-colors">
                <ImageIcon size={18} style={{ color: 'var(--brand-gold)' }} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(path, file);
                  }}
                />
              </label>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)' }}>
      <div className="w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col rounded-2xl shadow-2xl" style={{ background: 'var(--bg-base)', border: '1px solid var(--border-color)' }}>
        <div className="p-4 sm:p-6 border-b flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}>
          <div>
            <h2 className="text-xl font-bold uppercase tracking-widest" style={{ color: 'var(--text-heading)' }}>
              Edit {id}
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Make changes to the live website.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors" style={{ color: 'var(--text-main)' }}>
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
              {error}
            </div>
          )}
          {Object.entries(data).map(([key, value]) => renderField(key, value, [key]))}
        </div>

        <div className="p-4 sm:p-6 border-t flex justify-end gap-3" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-section)' }}>
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg font-semibold border border-[var(--border-color)] transition-all hover:bg-[rgba(255,255,255,0.05)]"
            style={{ color: 'var(--text-main)' }}
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
            style={{ background: 'var(--brand-gold)', color: '#000', opacity: saving ? 0.7 : 1 }}
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
