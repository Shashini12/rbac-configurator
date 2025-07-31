import { createClientServer } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { Login } from '@/components/Login';

export default async function Home() {
  const supabase = createClientServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect('/dashboard');
  }

  return <Login />;
}