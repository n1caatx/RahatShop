import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import { AuthProvider } from '@/hooks/useAuth';

export const metadata = {
  title: 'RahatShop — Axtar. Tap. Al. Sat.',
  description: 'Minlərlə məhsul və mağaza arasından axtardığını tap.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="az">
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <MobileNav />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
