# Anthony Gerard Orais Leuterio | Global Real Estate Coaching Platform

1.  **Main Website**: A high-performance **Next.js 15** application (App Router) for showcase and lead generation.
2.  **Admin Panel**: A separate Next.js dashboard for managing properties and inquiries.
3.  **Supabase Backend**: A scalable database and authentication layer shared by both applications.

---

## 🚀 How to Run

### 1. Main Website (Portfolio)
The main website is located in the root directory.
```bash
# Install dependencies

# Install dependencies
npm install

# Start development server
npm run dev
```

**Route Structure:**
- `/` - Home
- `/coaching` - Coaching Overview (Sub-routes: `/core`, `/programs`, `/testimonials`)
- `/programs` - Training Programs (Sub-routes: `/leads-accelerator`, `/bootcamp`, `/roadmap`)
- `/coaches` - Meet the Team
- `/blog` - Content Hub
- `/about` - Biography

### 2. Admin Panel (Dashboard)
The admin panel is located in the `admin/` directory.
```bash
# Navigate to admin directory
cd admin

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔐 Authentication & Security

### Admin Access
The Admin Panel is protected by **Supabase Auth** and Next.js **Middleware**.
- **Login Page**: Accessible at `/login`.
- **Route Protection**: All dashboard routes (`/`, `/properties`, `/inquiries`) require an authenticated session. Unauthenticated users are automatically redirected to the login page.
- **Logout**: Secured logout functionality via the Sidebar.

### Test Credentials
For development and testing purposes, you can use the following accounts:
- **Admin**: `admin@test.com` / `admin123`
- **User**: `user@test.com` / `user123`

*Note: You must create these users in your Supabase dashboard first (see Database Setup).*

### User Roles & Profiles
The database includes a `profiles` table linked to `auth.users` via a trigger.
- **Roles**: `admin` and `user`.
- **Automatic Profiling**: New sign-ups automatically create a entry in the `profiles` table.
- **Access Control**: RLS (Row Level Security) policies ensure that users can only view their own profile data.

---

## 🗄 Database Setup (Supabase)

1.  Create a project on [Supabase.com](https://supabase.com).
2.  Run the contents of `supabase/supabase_schema.sql` in the **SQL Editor**. This will:
    - Create `properties`, `inquiries`, and `profiles` tables.
    - Setup **RLS Policies** for public and admin access.
    - Create the **handle_new_user** trigger for automated profile creation.
3.  Add your project credentials to `admin/.env.local`:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 🛠 Tech Stack

### Main Website
- **React 18** + **TypeScript**
- **Vite** (Ultra-fast build tool)
- **Vanilla CSS** (Custom Design System)

### Admin Panel
- **Next.js 16** (App Router & Turbopack)
- **Tailwind CSS 4**
- **Supabase SSR** (Server-Side Rendering Auth)

---

## 📁 Project Structure
- `admin/`: Next.js admin dashboard.
- `app/`: Main website (Next.js App Router).
- `src/`: Shared components, contexts, and hooks.
- `supabase/`: Database schemas and initialization scripts.
- `public/`: Static assets and media.
- `legacy/`: Legacy HTML/CSS/JS files for reference.

---
© 2026 Anthony Gerard Orais Leuterio. All rights reserved.
