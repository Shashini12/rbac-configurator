'use client';
import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabaseClient } from '@/utils/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '../components/ui/input';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  //const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
}

function toast(arg0: { title: string; description: any; variant: string; }) {
  throw new Error('Function not implemented.');
}
