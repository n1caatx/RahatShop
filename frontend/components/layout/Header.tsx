'use client';

import Link from 'next/link';
import { Search, Heart, MessageSquare, User, Plus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="RahatShop" width={32} height={32} />
          <span className="font-bold text-xl hidden sm:block">Rahat<span className="text-[#0066CC]">Shop</span></span>
        </Link>

        {/* Search */}
        <div className="flex-grow max-w-xl hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-[#0066CC] focus-within:bg-white transition-colors">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Axtar..."
            className="bg-transparent border-none outline-none w-full ml-2 text-sm"
          />
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-4 md:gap-6 shrink-0">
          <Link href="/favoriler" className="text-gray-600 hover:text-[#0066CC] transition hidden sm:block">
            <Heart className="w-6 h-6" />
          </Link>
          <Link href="/mesajlar" className="text-gray-600 hover:text-[#0066CC] transition hidden sm:block">
            <MessageSquare className="w-6 h-6" />
          </Link>
          
          {isAuthenticated ? (
            <Link href="/profil" className="text-gray-600 hover:text-[#0066CC] transition hidden sm:block">
              <User className="w-6 h-6" />
            </Link>
          ) : (
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-[#0066CC] hidden sm:block">
              Daxil ol
            </Link>
          )}

          <Link href="/yeni-elan" className="flex items-center gap-1 bg-[#0066CC] text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            <Plus className="w-5 h-5" />
            <span className="hidden sm:block">Sat</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
