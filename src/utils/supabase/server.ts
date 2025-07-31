// utils/supabase/server.ts
import { createServerClient as createSupabaseServerClient, type CookieOptions } from '@supabase/ssr'
import type { Database } from '@/types/supabase'
import { cookies } from 'next/headers'

export function createServerClient() {
  // Get the cookies instance - synchronous, no await needed
  const cookieStore = cookies()
  
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing Supabase environment variables')
  }

  return createSupabaseServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component
            // This can be ignored if you have middleware refreshing user sessions
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component
            // This can be ignored if you have middleware refreshing user sessions
          }
        }
      }
    }
  )
}