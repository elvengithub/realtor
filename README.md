# Anthony Leuterio | Real Estate Coaching Platform

A Next.js 15 application with Supabase backend for Anthony Leuterio's real estate coaching business.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

Visit `http://localhost:3000`

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/       # Protected dashboard routes
│   ├── (public)/          # Public pages (coaching, programs, etc.)
│   └── api/               # API routes
├── src/
│   ├── components/        # React components
│   ├── context/           # React context providers
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities (Supabase, CMS)
│   └── middleware.ts      # Auth middleware
├── supabase/              # Database schemas
└── public/                # Static assets
```

---

## 🔐 Authentication

- Powered by **Supabase Auth** with SSR support
- Dashboard routes protected by middleware
- Login at `/login`

---

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Supabase** (Database & Auth)
- **Framer Motion**
- **Lucide React**

---

## 🗄 Supabase Setup

1. Create a project on [Supabase.com](https://supabase.com)
2. Run `supabase/supabase_schema.sql` in the SQL Editor
3. Run `node supabase/init_supabase.js` to initialize the admin user (after configuring the service role key)
4. Use the following credentials for testing:

### 🔗 Connection Details
- **Supabase URL**: `https://csteoeudjuzyhkhjaszo.supabase.co`
- **Anon Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNzdGVvZXVkanV6eWhraGphc3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyNDg2MDksImV4cCI6MjA4OTgyNDYwOX0.R2IsssIzOYjDMQiu_0Ona6zjI3COy2ui_swbFpFaroU`

### 👤 Default Admin Account
- **Email**: `admin@leuterio.com`
- **Password**: `admin123`

---

## 📝 Routes

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/coaching` | Coaching Overview |
| `/coaching/core` | Core Coaching |
| `/coaching/programs` | Programs |
| `/coaching/testimonials` | Testimonials |
| `/programs/bootcamp` | Prospecting Bootcamp |
| `/programs/leads-accelerator` | Leads Accelerator |
| `/programs/roadmap` | Recruiting Roadmap |
| `/coaches` | Our Coaches |
| `/blog` | Blog |
| `/about` | Biography |
| `/dashboard` | Dashboard (Protected) |
| `/properties` | Properties (Protected) |
| `/settings` | CMS Settings (Protected) |
| `/login` | Login |

---

© 2026 Anthony Leuterio. All rights reserved.
