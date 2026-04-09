import { createBrowserClient } from '@supabase/ssr';

const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supaKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supaUrl || !supaKey) {
  console.warn('Supabase URL or Anon Key is missing. Check your .env file.');
}

export const supabase = createBrowserClient(supaUrl, supaKey);