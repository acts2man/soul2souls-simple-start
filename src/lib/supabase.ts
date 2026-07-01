import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase browser client for the shop.
 *
 * Reads VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from the environment. When
 * either is missing (e.g. local dev before the user has added keys), `supabase`
 * is null and every caller falls back to the static catalog in src/data/shop.ts
 * — so the shop always renders. See src/lib/shop.ts and the checkout route.
 */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string)
  : null;
