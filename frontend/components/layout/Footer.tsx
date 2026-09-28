import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-[#080b12] text-slate-300">
      {/* RGB top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-150px] top-[-150px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-150px] top-[100px] h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-2xl font-black tracking-tight text-white"
            >
              Rahat<span className="text-blue-400">Shop</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Azərbaycanda rahat və sadə alış-veriş üçün müasir elan
              platforması.
            </p>
          </div>

          {/* RahatShop */}
          <div>
            <h3 className="text-sm font-bold text-white">
              RahatShop
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/haqqimizda"
                className="block text-slate-400 transition hover:text-blue-300"
              >
                Haqqımızda
              </Link>

              <Link
                href="/elaqe"
                className="block text-slate-400 transition hover:text-blue-300"
              >
                Əlaqə
              </Link>

              <Link
                href="/yardim"
                className="block text-slate-400 transition hover:text-blue-300"
              >
                Yardım
              </Link>
            </div>
          </div>

          {/* Alış-veriş */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Alış-veriş
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/elanlar"
                className="block text-slate-400 transition hover:text-blue-300"
              >
                Bütün elanlar
              </Link>

              <Link
                href="/kateqoriyalar"
                className="block text-slate-400 transition hover:text-blue-300"
              >
                Kateqoriyalar
              </Link>

              <Link
                href="/favoriler"
                className="block text-slate-400 transition hover:text-blue-300"
              >
                Sevimlilər
              </Link>
            </div>
          </div>

          {/* Satıcı */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Satıcılar
            </h3>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/yeni-elan"
                className="group flex items-center gap-1 text-slate-400 transition hover:text-blue-300"
              >
                Elan yerləşdir
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/register?role=seller"
                className="block text-slate-400 transition hover:text-blue-300"
              >
                Satıcı hesabı yarat
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          © 2026 RahatShop. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
}
