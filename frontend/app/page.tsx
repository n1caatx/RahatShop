import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Search,
  Sparkles,
  Store,
  Users,
} from 'lucide-react';

import CategoryCarousel from '@/components/home/CategoryCarousel';
import ProductGrid from '@/components/product/ProductGrid';
import { getProducts } from '@/lib/api';
import { Product } from '@/types';

export default async function HomePage() {
  let products: Product[] = [];

  try {
    products = await getProducts({
      sort: 'createdAt',
      order: 'desc',
      limit: 8,
    });
  } catch {
    products = [];
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =========================
          BACKGROUND ATMOSPHERE
      ========================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-[80px] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute right-[-180px] top-[300px] h-[420px] w-[420px] rounded-full bg-violet-400/10 blur-3xl" />

        <div className="absolute left-1/2 top-[850px] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      {/* =========================
          HERO
      ========================== */}
      <section className="container mx-auto px-4 pb-16 pt-10 sm:pt-14">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-cyan-400/40 via-blue-500/50 to-violet-500/40 p-[1px] shadow-[0_25px_80px_rgba(37,99,235,0.10)]">
          {/* RGB glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-violet-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[29px] bg-white">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute right-[-120px] top-[-160px] h-[400px] w-[400px] rounded-full bg-blue-500/8 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-180px] left-[-100px] h-[380px] w-[380px] rounded-full bg-violet-500/7 blur-3xl" />

            <div className="relative px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-4xl text-center">
                {/* Small badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                  Azərbaycanda rahat alış-veriş
                </div>

                {/* Title */}
                <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Nə axtarırsansa,
                  <span className="block text-gradient">
                    Rahat tap.
                  </span>
                </h1>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Minlərlə elan arasında axtar, müqayisə et və sənə
                  uyğun məhsulu rahatlıqla tap.
                </p>

                {/* Search */}
                <form
                  action="/axtar"
                  className="mx-auto mt-9 flex max-w-3xl flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/90 p-2 shadow-[0_15px_45px_rgba(15,23,42,0.08)] sm:flex-row"
                >
                  <div className="flex flex-1 items-center rounded-xl bg-white px-4">
                    <Search className="h-5 w-5 shrink-0 text-slate-400" />

                    <input
                      name="q"
                      type="text"
                      placeholder="Məhsul, mağaza və ya kateqoriya axtar..."
                      className="ml-3 h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30"
                  >
                    <Search className="h-4 w-4" />
                    Axtar
                  </button>
                </form>

                {/* Stats */}
                <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Aktiv elanlar
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    Real istifadəçilər
                  </div>

                  <div className="flex items-center gap-2">
                    <Store className="h-4 w-4 text-violet-500" />
                    Mağazalar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CATEGORIES
      ========================== */}
      <section className="container mx-auto px-4 pb-16">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Kəşf et
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Kateqoriyalar
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Kateqoriyalar arasında rahat şəkildə kəşf et
            </p>
          </div>

          <Link
            href="/kateqoriyalar"
            className="hidden items-center gap-1 text-sm font-semibold text-slate-500 transition hover:text-blue-600 sm:flex"
          >
            Hamısına bax
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* AUTO CATEGORY CAROUSEL */}
        <CategoryCarousel />
      </section>

      {/* =========================
          PRODUCTS
      ========================== */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/60 via-white/30 to-transparent" />

        <div className="container relative mx-auto px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Yeni əlavə olunanlar
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Yeni elanlar
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Platformaya ən son əlavə edilən məhsullar
              </p>
            </div>

            <Link
              href="/elanlar"
              className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600 sm:flex"
            >
              Hamısına bax
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ProductGrid products={products} />
        </div>
      </section>

      {/* =========================
          SELLER CTA
      ========================== */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-cyan-400/35 via-blue-500/45 to-violet-500/40 p-[1px] shadow-[0_25px_70px_rgba(37,99,235,0.10)]">
          <div className="relative overflow-hidden rounded-[27px] bg-gradient-to-br from-white via-slate-50 to-blue-50">
            {/* Glow */}
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[320px] w-[320px] rounded-full bg-blue-400/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-120px] left-[20%] h-[280px] w-[280px] rounded-full bg-violet-400/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-12">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm">
                  <Store className="h-3.5 w-3.5" />
                  Satıcılar üçün
                </div>

                <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                  Məhsulunu RahatShop-da sat
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                  Elanını yarat, məhsulunu nümayiş etdir və daha çox
                  alıcıya çat.
                </p>
              </div>

              <Link
                href="/register?role=seller"
                className="group flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/30"
              >
                Elan yerləşdir

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
