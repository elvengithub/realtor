import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const envFile = fs.readFileSync('.env', 'utf8');
const extractEnv = (key) => {
  const match = envFile.match(new RegExp(`${key}=(.*)`));
  return match ? match[1].trim() : null;
};

const supabaseUrl = extractEnv('NEXT_PUBLIC_SUPABASE_URL');
const supabaseKey = extractEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY');

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const eliteProperties = [
  // Commercial
  {
    title: "Aegis Corporate Center",
    price: 850000000,
    location: "Ortigas Center, Pasig",
    type: "Commercial",
    status: "Available",
    bedrooms: 0,
    bathrooms: 20,
    area_sqft: 45000,
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"],
    description: "A state-of-the-art office tower boasting LEED Platinum certification. The Aegis Center offers 15 floors of class-A corporate space, smart-climate control systems, and executive rooftop boardrooms. Perfect for multinational headquarters."
  },
  {
    title: "The Promenade Retail Strip",
    price: 520000000,
    location: "High Street South, BGC",
    type: "Commercial",
    status: "Rent",
    bedrooms: 0,
    bathrooms: 15,
    area_sqft: 32000,
    images: ["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920"],
    description: "An ultra-premium corner retail block located in the heaviest foot-traffic zone of the district. Currently configured for global luxury brands. Features double-height glass facades and exclusive basement parking."
  },

  // Land
  {
    title: "Palawan Coastal Reserve",
    price: 115000000,
    location: "El Nido, Palawan",
    type: "Land",
    status: "Available",
    bedrooms: 0,
    bathrooms: 0,
    area_sqft: 850000,
    images: ["https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1920"],
    description: "An untouched, 8.5-hectare coastal reserve with 400 meters of pristine white sand beachfront. Zoned for luxury resort development. A once-in-a-generation acquisition opportunity."
  },
  {
    title: "Verdant Highlands Estate Lot",
    price: 65000000,
    location: "Tagaytay Highlands",
    type: "Land",
    status: "Pending",
    bedrooms: 0,
    bathrooms: 0,
    area_sqft: 45000,
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920"],
    description: "A premium, elevated double-lot offering unobstructed 180-degree views of Taal Lake. Located within the most secure golfing enclave in the country. Perfect for a multigenerational family compound."
  },

  // Industrial
  {
    title: "Nexus Logistics Hub",
    price: 340000000,
    location: "Laguna Technopark",
    type: "Industrial",
    status: "Available",
    bedrooms: 0,
    bathrooms: 4,
    area_sqft: 120000,
    images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920"],
    description: "A modern, massive-scale distribution center optimized for e-commerce. Features 12 elevated loading bays, climate-controlled zones, and an integrated 3-story modern administration building."
  },
  {
    title: "Titan Manufacturing Facility",
    price: 925000000,
    location: "Clark Freeport Zone",
    type: "Industrial",
    status: "Available",
    bedrooms: 0,
    bathrooms: 12,
    area_sqft: 350000,
    images: ["https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=1920"],
    description: "An architectural-grade heavy manufacturing plant designed for aerospace or advanced tech assembly. Boasts massive open-span steel roofs, heavy load-bearing flooring, and direct highway access."
  }
];

async function seed() {
  console.log("Injecting elite property data into Supabase...");
  const { data, error } = await supabase.from('properties').insert(eliteProperties).select();
  
  if (error) {
    console.error("Failed to seed:", error);
  } else {
    console.log(`Successfully seeded ${data.length} properties!`);
  }
}

seed();
