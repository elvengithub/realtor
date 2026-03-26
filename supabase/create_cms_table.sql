-- Site Content Table
CREATE TABLE IF NOT EXISTS site_content (
  id TEXT PRIMARY KEY,
  section TEXT NOT NULL,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

-- Allow public read
CREATE POLICY "Public read site_content" ON site_content
  FOR SELECT USING (true);

-- Allow admin full access
CREATE POLICY "Admin write site_content" ON site_content
  FOR ALL USING (auth.uid() IS NOT NULL);

-- 3. STORAGE SETUP (Manual Step in Supabase Dashboard)
-- Create a public bucket named 'site-images'
-- Enable public access to 'site-images' bucket

-- 4. INSERT INITIAL SEED DATA
INSERT INTO site_content (id, section, content) VALUES
('hero', 'Hero Section', '{
  "title": "MASTER THE SCIENCE OF SCALE",
  "subtitle": "2024 International Realtor of the Year (NAR)",
  "description": "The world''s most elite entrepreneurs and leaders rely on Anthony Leuterio''s proven frameworks to accelerate growth, maximize impact, and secure their legacy.",
  "image": "/assets/ton1.jpg",
  "cta_text": "Explore Coaching",
  "cta_link": "/coaching"
}'::jsonb),
('intro', 'Brand Introduction', '{
  "title": "The Architect of Modern Real Estate",
  "subtitle": "Founder of Filipino Homes & Leuterio Realty",
  "name": "Anthony \"Tonton\" Leuterio",
  "bio": "Anthony \"Tonton\" Leuterio is not just an entrepreneur; he is a movement builder. As the founder of the largest real estate ecosystem in the Philippines, he has empowered over 14,000 agents to achieve financial independence.",
  "quote": "My philosophy is simple: God first, then family, then business. When you build with this foundation, success isn''t just a goal—it''s an inevitability.",
  "image": "/assets/ton1.jpg"
}'::jsonb),
('ecosystem', 'Ecosystem Stats', '{
  "filipino_homes": {
    "title": "Filipino Homes",
    "stat": "14,000+ LICENSED AGENTS",
    "description": "The largest comprehensive real estate solutions portal in the Philippines, connecting thousands of properties to global buyers."
  },
  "leuterio_realty": {
    "title": "Leuterio Realty",
    "stat": "100+ OFFICES NATIONWIDE",
    "description": "The country''s fastest-growing real estate brand, recognized globally for excellence in brokerage and consultation."
  },
  "rent_ph": {
    "title": "Rent.ph",
    "stat": "TOP RENTAL PORTAL",
    "description": "The pioneer digital rental platform in the Philippines, revolutionizing how property management and leasing connect."
  }
}'::jsonb),
('event', 'Upcoming Event', '{
  "badge": "Live Intensive",
  "title": "The Edge 2024: Global Summit",
  "date": "November 15-17, 2024",
  "location": "Dubai, UAE",
  "description": "Join Anthony Leuterio and the world''s most elite real estate strategists for a three-day intensive designed to redefine your market position. This is where global legacies are architected.",
  "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000",
  "cta_text": "Secure Your Seat",
  "cta_link": "/events",
  "availability": "Limited to 100 Elite Delegates",
  "day": "15",
  "month": "Nov 2024"
}'::jsonb),
('settings', 'Global Settings', '{
  "branding": {
    "site_name": "Anthony Leuterio",
    "site_description": "Master the Science of Scale",
    "logo_url": ""
  },
  "contact": {
    "email": "support@antonioleuterio.com",
    "phone": "+63 912 345 6789",
    "address": "Cebu City, Philippines"
  },
  "social": {
    "facebook": "https://facebook.com",
    "instagram": "https://instagram.com",
    "linkedin": "https://linkedin.com",
    "youtube": "https://youtube.com"
  }
}'::jsonb)
ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content, section = EXCLUDED.section;
