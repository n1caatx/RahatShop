'use client';

import Link from 'next/link';
import {
  Search,
  Heart,
  MessageSquare,
  User,
  Plus,
} from 'lucide-react';
import Image from 'next/image';

import { useAuth } from '@/hooks/useAuth';

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="container mx-auto flex h-[68px] items-center justify-between gap-4 px-4">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
              <Image
                src="/logo.svg"
                alt="RahatShop"
                width={27}
                height={27}
              />
            </div>
          </div>

          <span className="hidden text-xl font-bold tracking-tight text-slate-900 sm:block">
            Rahat<span className="text-blue-600">Shop</span>
          </span>
        </Link>

        {/* Search */}
        <div className="hidden max-w-xl flex-1 md:flex">
          <div className="group flex w-full items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 transition-all duration-300 focus-within:border-blue-300 focus-within:bg-white focus-within:shadow-sm">
            <Search className="h-[18px] w-[18px] text-slate-400 transition-colors group-focus-within:text-blue-600" />

            <input
              type="text"
              placeholder="Məhsul, mağaza və ya kateqoriya axtar..."
              className="ml-3 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1">
          <Link
            href="/favoriler"
            aria-label="Sevimlilər"
            className="hidden rounded-xl p-2.5 text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 sm:block"
          >
            <Heart className="h-[19px] w-[19px]" />
          </Link>

          <Link
            href="/mesajlar"
            aria-label="Mesajlar"
            className="hidden rounded-xl p-2.5 text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 sm:block"
          >
            <MessageSquare className="h-[19px] w-[19px]" />
          </Link>

          {isAuthenticated ? (
            <Link
              href="/profil"
              aria-label="Profil"
              className="rounded-xl p-2.5 text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900"
            >
              <User className="h-[19px] w-[19px]" />
            </Link>
          ) : (
            <Link
              href="/login"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:block"
            >
              Daxil ol
            </Link>
          )}

          <Link
            href="/yeni-elan"
            className="ml-1 flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/25"
          >
            <Plus className="h-[17px] w-[17px]" />
            <span className="hidden sm:block">Sat</span>
          </Link>
        </div>
      </div>

      {/* RGB line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      <div className="-mt-px h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </header>
  );
}
