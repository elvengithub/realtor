"use client";
import React, { useState } from 'react';
import { supabase } from '@/src/lib/supabase';
import { X, Save, Loader2, Image as ImageIcon } from 'lucide-react';
import { uploadImage } from '@/src/lib/cms';

interface PropertyEditorModalProps {
  property: any; // null for new
  onClose: () => void;
  onSaveSuccess: () => void;
}

export default function PropertyEditorModal({ property, onClose, onSaveSuccess }: PropertyEditorModalProps) {
  const [data, setData] = useState<any>(property || {
    title: '',
    price: 0,
    location: '',
    type: 'Residential',
    status: 'Available',
    bedrooms: 0,
    bathrooms: 0,
    area_sqft: 0,
    description: '',
    images: []
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = (key: string, value: any) => {
    setData((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSaving(true);
    const result = await uploadImage(file, `property-${Date.now()}`);
    if (!result.success) {
      setError(result.error || "Upload failed");
    } else {
      setData((prev: any) => ({ ...prev, images: [result.data] })); // Currently supporting 1 image for simplicity
      setError(null);
    }
    setSaving(false);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    
    // Ensure numbers are properly cast
    const payload = {
      ...data,
      price: Number(data.price),
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
      area_sqft: Number(data.area_sqft),
    };

    let apiError;
    if (property?.id) {
      const { error } = await supabase.from('properties').update(payload).eq('id', property.id);
      apiError = error;
    } else {
      const { error } = await supabase.from('properties').insert([payload]);
      apiError = error;
    }

    if (apiError) {
      setError(apiError.message);
      setSaving(false);
    } else {
      onSaveSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)' }}>
      <div className="w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col rounded-2xl shadow-2xl" style={{ background: 'var(--bg-base)', border: '1px solid var(--border-color)' }}>
        <div className="p-4 sm:p-6 border-b flex justify-between items-center" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="text-xl font-bold uppercase tracking-widest" style={{ color: 'var(--text-heading)' }}>
            {property ? 'Edit Property' : 'Add Property'}
          </h2>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors" style={{ color: 'var(--text-main)' }}>
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {error && (
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Title</label>
            <input type="text" value={data.title} onChange={e => handleUpdate('title', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Price</label>
              <input type="number" value={data.price} onChange={e => handleUpdate('price', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Location</label>
              <input type="text" value={data.location} onChange={e => handleUpdate('location', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Type</label>
              <select value={data.type} onChange={e => handleUpdate('type', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]">
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Land">Land</option>
                <option value="Industrial">Industrial</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Status</label>
              <select value={data.status} onChange={e => handleUpdate('status', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]">
                <option value="Available">Available</option>
                <option value="Pending">Pending</option>
                <option value="Sold">Sold</option>
                <option value="Rent">Rent</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Bedrooms</label>
              <input type="number" value={data.bedrooms} onChange={e => handleUpdate('bedrooms', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Bathrooms</label>
              <input type="number" value={data.bathrooms} onChange={e => handleUpdate('bathrooms', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Area (Sqft)</label>
              <input type="number" value={data.area_sqft} onChange={e => handleUpdate('area_sqft', e.target.value)} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Description</label>
            <textarea value={data.description} onChange={e => handleUpdate('description', e.target.value)} rows={4} className="w-full px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" style={{ resize: 'none' }} />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>Main Image</label>
            <div className="flex gap-2">
              <input type="text" value={data.images?.[0] || ''} onChange={e => handleUpdate('images', [e.target.value])} placeholder="Image URL" className="flex-1 px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] text-[var(--text-main)] focus:outline-none focus:border-[var(--brand-gold)]" />
              <label className="cursor-pointer flex items-center justify-center px-4 rounded-lg bg-[var(--input-bg)] border border-[var(--border-color)] hover:border-[var(--brand-gold)] transition-colors">
                <ImageIcon size={18} style={{ color: 'var(--brand-gold)' }} />
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>
          </div>

        </div>

        <div className="p-4 sm:p-6 border-t flex justify-end gap-3" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-section)' }}>
          <button onClick={onClose} className="px-6 py-2 rounded-lg font-semibold border border-[var(--border-color)] transition-all hover:bg-[rgba(255,255,255,0.05)]" style={{ color: 'var(--text-main)' }}>
            Cancel
          </button>
          <button onClick={handleSave} disabled={saving} className="px-6 py-2 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95" style={{ background: 'var(--brand-gold)', color: '#000', opacity: saving ? 0.7 : 1 }}>
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {saving ? 'Saving...' : 'Save Property'}
          </button>
        </div>
      </div>
    </div>
  );
}
