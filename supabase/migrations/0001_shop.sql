-- Soul2SoulsJazz shop schema (products, orders, order_items).
--
-- Guest checkout, no payment: orders are created with status 'pending_payment'
-- and no Stripe/charge is attached. See supabase/seed.sql for the product rows.

create extension if not exists "pgcrypto";

create table if not exists products (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  name        text not null,
  price_cents int not null,
  description text,
  image       text,
  sort_order  int,
  in_stock    boolean not null default true
);

create table if not exists orders (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),
  email            text,
  full_name        text,
  shipping_address jsonb,
  subtotal_cents   int,
  status           text not null default 'pending_payment'
);

create table if not exists order_items (
  id               uuid primary key default gen_random_uuid(),
  order_id         uuid references orders(id) on delete cascade,
  product_slug     text,
  name             text,
  qty              int not null,
  unit_price_cents int not null
);

-- Row Level Security.
--
-- NOTE: these policies are intentionally permissive for now to support an
-- anonymous, guest, no-account storefront: anyone may read the catalog and
-- create an order. TIGHTEN LATER — e.g. once real payment + auth exist, restrict
-- order INSERTs (server-side/edge function, rate limiting) and never expose
-- order reads to anon.
alter table products    enable row level security;
alter table orders      enable row level security;
alter table order_items enable row level security;

-- Anyone can read the product catalog.
create policy "products_anon_select" on products
  for select using (true);

-- Guest checkout: anyone can create orders + their line items.
create policy "orders_anon_insert" on orders
  for insert with check (true);

create policy "order_items_anon_insert" on order_items
  for insert with check (true);
