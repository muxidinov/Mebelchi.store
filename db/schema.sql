-- Supabase / PostgreSQL. SQL Editor'da bir marta ishga tushiring.
create extension if not exists pgcrypto;
create type request_type as enum ('order','inquiry','specialist','kitchen_measure');
create type request_status as enum ('new','contacted','in_progress','completed','cancelled');
create or replace function set_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end $$;

-- HOZIR ISHLATILADIGAN JADVAL: barcha forma so'rovlari (buyurtma, so'rov, maslahat, o'lchov)
create table requests (
  id uuid primary key default gen_random_uuid(),
  order_id text not null unique,
  idempotency_key uuid not null unique,
  type request_type not null,
  status request_status not null default 'new',
  first_name text not null check (char_length(first_name) between 2 and 60),
  last_name text not null check (char_length(last_name) between 2 and 60),
  phone text not null check (phone ~ '^\+998[3-9][0-9]{8}$'),
  city text, address text, landmark text, product_name text, category text, message text,
  room text, budget text, kitchen_size text, preferred_date text, preferred_time text, telegram_username text,
  latitude double precision check (latitude between -90 and 90),
  longitude double precision check (longitude between -180 and 180),
  language text not null default 'uz' check (language in ('uz','ru')),
  source text not null default 'website',
  telegram_sent boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create index requests_status_created_idx on requests (status, created_at desc);
create index requests_type_idx on requests (type);
create trigger requests_updated before update on requests for each row execute function set_updated_at();

-- KELAJAK UCHUN (admin panel / katalogni bazaga ko'chirish): hozir kod ularni ishlatmaydi
create table categories (id uuid primary key default gen_random_uuid(), slug text not null unique, name_uz text not null, name_ru text not null, sort_order int not null default 0, created_at timestamptz not null default now());
create table products (id uuid primary key default gen_random_uuid(), slug text not null unique, category_id uuid not null references categories(id) on delete restrict,
  name_uz text not null, name_ru text not null, description_uz text, description_ru text, material_uz text, material_ru text, dimensions text,
  price numeric(14,2) check (price >= 0), available boolean not null default true, is_custom boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create index products_category_idx on products (category_id);
create trigger products_updated before update on products for each row execute function set_updated_at();
create table product_images (id uuid primary key default gen_random_uuid(), product_id uuid not null references products(id) on delete cascade, path text not null, sort_order int not null default 0, is_cover boolean not null default false);
create index product_images_product_idx on product_images (product_id, sort_order);
create table reviews (id uuid primary key default gen_random_uuid(), name text not null, text_uz text, text_ru text, rating smallint not null check (rating between 1 and 5),
  product_id uuid references products(id) on delete set null, approved boolean not null default false, created_at timestamptz not null default now());
create index reviews_approved_idx on reviews (approved, created_at desc);
create table faq (id uuid primary key default gen_random_uuid(), question_uz text not null, question_ru text not null, answer_uz text not null, answer_ru text not null, sort_order int not null default 0);
create table site_settings (key text primary key, value jsonb not null, updated_at timestamptz not null default now());

-- Xavfsizlik: RLS yoqilgan, siyosat yo'q => faqat server (service role) kirishi mumkin
alter table requests enable row level security; alter table categories enable row level security; alter table products enable row level security;
alter table product_images enable row level security; alter table reviews enable row level security; alter table faq enable row level security; alter table site_settings enable row level security;
