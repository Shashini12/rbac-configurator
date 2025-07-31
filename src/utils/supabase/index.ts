// utils/supabase/index.ts
export { supabase, createClient as createBrowserClient } from './client';
export { createServerClient } from './server';
export type { Database } from '@/types/supabase';