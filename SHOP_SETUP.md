# Shop backend setup (Supabase)

The shop reads products from Supabase and writes guest orders on checkout (no
payment). Without env keys it still works fully — it falls back to the static
catalog in `src/data/shop.ts`, and checkout shows the confirmation but notes the
order was not persisted.

To enable the real backend, do these two steps yourself:

1. **Add env keys.** Copy `.env.example` to `.env` and set:
   - `VITE_SUPABASE_URL` — your project URL
   - `VITE_SUPABASE_ANON_KEY` — your anon/public key

2. **Run the migration + seed** against your Supabase project (SQL editor or CLI):
   - `supabase/migrations/0001_shop.sql` — creates `products`, `orders`,
     `order_items` and the (intentionally permissive, guest-checkout) RLS policies.
   - `supabase/seed.sql` — inserts the 16 products (kept in sync with
     `src/data/shop.ts`; re-runnable, upserts on `slug`).

   With the Supabase CLI: `supabase db push` then run the seed, or paste both
   files into the SQL editor in order.

No payment is integrated. Orders are stored with `status = 'pending_payment'`;
`TODO(payment)` markers in the checkout flow show where Stripe would later attach.
