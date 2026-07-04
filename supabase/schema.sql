-- ───────────────────────────────────────────────────────────────
-- JacSkills — Supabase schema
-- Run this in: Supabase Dashboard → SQL Editor → New query → Run
-- Safe to re-run (uses IF NOT EXISTS / ON CONFLICT).
-- ───────────────────────────────────────────────────────────────

-- ============================================================
-- 1. Contact form submissions (leads)
-- ============================================================
create table if not exists public.contacts (
  id         uuid primary key default gen_random_uuid(),
  name       text        not null,
  phone      text        not null,
  email      text,
  subject    text        not null,
  message    text        not null,
  status     text        not null default 'unread',  -- 'unread' | 'read'
  created_at timestamptz not null default now()
);
create index if not exists contacts_created_at_idx on public.contacts (created_at desc);
create index if not exists contacts_status_idx on public.contacts (status);

-- ============================================================
-- 2. Services (admin-managed)
-- ============================================================
create table if not exists public.services (
  id          uuid primary key default gen_random_uuid(),
  title       text        not null,
  description text        not null default '',
  image_url   text,
  icon        text,                        -- icon key, see src/lib/icons.js
  sort_order  int         not null default 0,
  is_active   boolean     not null default true,
  created_at  timestamptz not null default now()
);
create index if not exists services_sort_idx on public.services (sort_order, created_at);

-- ============================================================
-- 3. Courses (admin-managed)
-- ============================================================
create table if not exists public.courses (
  id          uuid primary key default gen_random_uuid(),
  title       text        not null,
  description text        not null default '',
  image_url   text,
  icon        text,
  sort_order  int         not null default 0,
  is_active   boolean     not null default true,
  created_at  timestamptz not null default now()
);
create index if not exists courses_sort_idx on public.courses (sort_order, created_at);

-- ============================================================
-- 4. Team members (admin-managed)
-- ============================================================
create table if not exists public.team_members (
  id          uuid primary key default gen_random_uuid(),
  name        text        not null,
  role        text        not null default '',
  bio         text        not null default '',
  image_url   text,
  sort_order  int         not null default 0,
  is_active   boolean     not null default true,
  created_at  timestamptz not null default now()
);
create index if not exists team_sort_idx on public.team_members (sort_order, created_at);

-- ───────────────────────────────────────────────────────────────
-- Row Level Security: lock every table down completely.
-- We enable RLS but add NO policies for the anon/authenticated roles,
-- so those roles can do NOTHING. All reads/writes happen exclusively
-- through the backend using the service_role key (which bypasses RLS).
-- Even if the anon key ever leaked, these tables stay inaccessible.
-- ───────────────────────────────────────────────────────────────
alter table public.contacts     enable row level security;
alter table public.services     enable row level security;
alter table public.courses      enable row level security;
alter table public.team_members enable row level security;

-- ============================================================
-- 5. Storage bucket for uploaded images (public read)
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;
-- Uploads happen server-side with the service_role key (bypasses policies).
-- Because the bucket is public, the resulting image URLs are readable by
-- browsers. No extra storage policies are required.

-- ───────────────────────────────────────────────────────────────
-- 6. Seed content (the site's current content). Runs once — the WHERE
--    NOT EXISTS guards keep it from duplicating on re-run.
-- ───────────────────────────────────────────────────────────────
insert into public.services (title, icon, image_url, description, sort_order)
select * from (values
  ('Shopify Store Creation','shopify','https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=800&auto=format&fit=crop&q=60','We help you design and launch a fully functional Shopify store from scratch, tailored to your niche and branding — theme customization, product setup, payment integration, and a UI optimized for conversions.',10),
  ('Shopify Store Management','store','https://images.unsplash.com/photo-1688561807403-ba262590f86f?w=800&auto=format&fit=crop&q=60','We keep your store running seamlessly — product updates, inventory, app integrations, order tracking, and customer-support optimization — so you can focus on growth.',20),
  ('Digital Marketing','marketing','https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=800&auto=format&fit=crop&q=60','SEO, social media management, paid ads, and email marketing designed to grow brand awareness, generate leads, and improve ROI.',30),
  ('Real Estate Consultancy & Marketing','building','https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60','Property marketing, investment guidance, and client handling. We help agents and investors promote listings, close deals, and maximize ROI.',40),
  ('Custom Website Development','code','https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?w=800&auto=format&fit=crop&q=60','Fully customized websites built with modern tech — responsive design, fast loading, SEO optimization, and scalability that drive real results.',50),
  ('IT Consultation','handshake','https://images.unsplash.com/photo-1637855195094-992d3d578f42?w=800&auto=format&fit=crop&q=60','Expert advice on system implementation, software selection, security, and IT strategy to streamline processes and adopt the right technology.',60)
) as v
where not exists (select 1 from public.services);

insert into public.courses (title, icon, image_url, description, sort_order)
select * from (values
  ('Expert Level Real Estate Training','building','https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60','Expert-level knowledge in real estate investment, property management, market analysis, and client handling, with practical strategies to maximize returns.',10),
  ('Digital Marketing Essentials','marketing','https://images.unsplash.com/photo-1657812670261-7b76ba04525c?w=800&auto=format&fit=crop&q=60','Master SEO, social media, content marketing, Google Ads, and email campaigns with hands-on projects that make you campaign-ready.',20),
  ('Shopify Store Creation & Management','shopify','https://images.unsplash.com/photo-1688561807440-8a57dfa77ee3?w=800&auto=format&fit=crop&q=60','Set up, customize, and manage a Shopify store from scratch — themes, listings, payments, optimization, and automation to scale your eCommerce business.',30),
  ('IT Skills & Productivity Tools','keyboard','https://images.unsplash.com/photo-1649433391420-542fcd3835ea?w=800&auto=format&fit=crop&q=60','Boost workplace efficiency — typing speed, Microsoft Word, Excel for data analysis, and PowerPoint for impactful presentations.',40),
  ('IELTS Preparation Course','language','https://images.unsplash.com/photo-1660927059794-152d06e11016?w=800&auto=format&fit=crop&q=60','Comprehensive IELTS prep across listening, reading, writing, and speaking, with expert lessons and practice tests to hit a high band score.',50),
  ('Web Development','code','https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?w=800&auto=format&fit=crop&q=60','Full-stack development with HTML, CSS, JavaScript, React, Node, Express, and MongoDB — real-world projects that make you job-ready.',60)
) as v
where not exists (select 1 from public.courses);

insert into public.team_members (name, role, image_url, bio, sort_order)
select * from (values
  ('Hussnain Ali','Managing Director','/Hussnain.jpeg','A strategic leader responsible for operations and long-term planning. Hussnain ensures smooth execution, strong governance, and sustainable growth.',10),
  ('Ashfaq Ahmed','Chief Executive Officer (CEO)','/Ashfaq.jpeg','A visionary entrepreneur passionate about innovation and team building. Ashfaq leads JacSkills with a results-driven mindset focused on impact and growth.',20),
  ('Mirza','Principal',null,'An academic leader committed to practical, industry-relevant education. Mirza bridges the gap between learning and real-world professional success.',30),
  ('Habib Ur Rehman','Marketing Director',null,'A creative, data-driven marketer specializing in brand building, audience engagement, and strategic outreach to drive visibility and growth.',40)
) as v
where not exists (select 1 from public.team_members);

-- ───────────────────────────────────────────────────────────────
-- 7. Create your single admin user (login only — no public signup):
--   Supabase Dashboard → Authentication → Users → "Add user"
--   • enter the admin email + a strong password
--   • tick "Auto Confirm User"
-- That account is what you'll use to log in at /login.
-- ───────────────────────────────────────────────────────────────
