import './globals.css';
import { Inter } from 'next/font/google';
import { createClient } from '@/utils/supabase/server';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RBAC Configurator',
  description: 'Role-Based Access Control Management Tool',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100">
          {user && (
            <nav className="bg-white shadow">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <h1 className="text-xl font-bold">RBAC Configurator</h1>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <form action="/auth/signout" method="post">
                      <button className="text-gray-600 hover:text-gray-800" type="submit">
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          )}
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}