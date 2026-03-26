import { createClient } from '@supabase/supabase-js';

const supaUrl = 'https://csteoeudjuzyhkhjaszo.supabase.co';
const serviceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdGVvZXVkanV6eWhraGphc3pvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDI0ODYwOSwiZXhwIjoyMDg5ODI0NjA5fQ.hDM8khOLeBVk0xIQzWlDijCW1B-dIl-NTC66sYoaDH0';

const supabase = createClient(supaUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function init() {
  console.log('--- Supabase Admin Initialization ---');

  // 1. Create Admin User
  const { data: userData, error: userError } = await supabase.auth.admin.createUser({
    email: 'admin@test.com',
    password: 'admin123',
    email_confirm: true
  });

  if (userError) {
    if (userError.message.includes('already registered')) {
      console.log('User admin@test.com already exists.');
    } else {
      console.error('Error creating user:', userError.message);
      return;
    }
  } else {
    console.log('User admin@test.com created successfully.');
  }

  // Get user ID (either from creation or by searching)
  let userId = userData?.user?.id;
  if (!userId) {
    const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
    if (listError) {
      console.error('Error listing users:', listError.message);
      return;
    }
    const existingUser = users.find(u => u.email === 'admin@test.com');
    userId = existingUser?.id;
  }

  if (!userId) {
    console.error('Could not find user ID for admin@test.com');
    return;
  }

  // 2. Assign Admin Role in profiles table
  // This will fail if the profiles table doesn't exist yet.
  const { error: profileError } = await supabase
    .from('profiles')
    .upsert({ id: userId, email: 'admin@test.com', role: 'admin' });

  if (profileError) {
    if (profileError.message.includes('does not exist')) {
      console.error('Error: The "profiles" table does not exist yet. Please run the SQL schema in the Supabase dashboard first.');
    } else {
      console.error('Error updating profile:', profileError.message);
    }
  } else {
    console.log('Admin role assigned successfully.');
  }
}

init();
