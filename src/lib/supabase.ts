import { createClient } from '@supabase/supabase-js';

const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supaKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supaUrl, supaKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});