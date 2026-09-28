'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Baby,
  Car,
  Dumbbell,
  Gamepad2,
  Home,
  Laptop,
  PawPrint,
  Shirt,
  Smartphone,
  Sofa,
  Sparkles,
  Wrench,
} from 'lucide-react';

const categories = [
  {
    name: 'Elektronika',
    icon: Laptop,
    description: 'Telefon, kompüter və texnika',
    color: 'from-blue-500/15 to-cyan-500/10',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  {
    name: 'Telefon',
    icon: Smartphone,
    description: 'Smartfon və aksesuarlar',
    color: 'from-violet-500/15 to-fuchsia-500/10',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
  },
  {
    name: 'Avtomobil',
    icon: Car,
    description: 'Maşın və ehtiyat hissələri',
    color: 'from-emerald-500/15 to-teal-500/10',
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    name: 'Ev və bağ',
    icon: Home,
    description: 'Ev əşyaları və bağ',
    color: 'from-orange-500/15 to-amber-500/10',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-50',
  },
  {
    name: 'Mebel',
    icon: Sofa,
    description: 'Mebel və interyer',
    color: 'from-rose-500/15 to-pink-500/10',
    iconColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
  {
    name: 'Geyim',
    icon: Shirt,
    description: 'Geyim və aksesuarlar',
    color: 'from-cyan-500/15 to-blue-500/10',
    iconColor: 'text-cyan-600',
    iconBg: 'bg-cyan-50',
  },
  {
    name: 'Oyun',
    icon: Gamepad2,
    description: 'Konsol, oyun və aksesuar',
    color: 'from-purple-500/15 to-violet-500/10',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-50',
  },
  {
    name: 'İdman',
    icon: Dumbbell,
    description: 'İdman və fitness məhsulları',
    color: 'from-red-500/15 to-orange-500/10',
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
  },
  {
    name: 'Uşaq',
    icon: Baby,
    description: 'Uşaq məhsulları və oyuncaqlar',
    color: 'from-pink-500/15 to-rose-500/10',
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-50',
  },
  {
    name: 'Heyvanlar',
    icon: PawPrint,
    description: 'Ev heyvanları və aksesuarlar',
    color: 'from-amber-500/15 to-yellow-500/10',
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  {
    name: 'Xidmətlər',
    icon: Wrench,
    description: 'Müxtəlif xidmətlər',
    color: 'from-slate-500/15 to-blue-500/10',
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-50',
  },
  {
    name: 'Digər',
    icon: Sparkles,
    description: 'Digər məhsul və elanlar',
    color: 'from-indigo-500/15 to-cyan-500/10',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
  },
];

export default function CategoryCarousel() {
  /*
   * Eyni siyahını iki dəfə yan-yana qoyuruq.
   * CSS animasiyası birinci siyahı bitəndə ikinci
   * siyahının eyni hissəsinə keçir və loop hiss olunmur.
   */
  const duplicatedCategories = [...categories, ...categories];

  return (
    <div className="relative overflow-hidden rounded-[26px]">
      {/* Sol fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-slate-100 via-slate-100/80 to-transparent sm:w-24" />

      {/* Sağ fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-slate-100 via-slate-100/80 to-transparent sm:w-24" />

      {/* RGB ambient glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 bg-gradient-to-r from-cyan-400/5 via-blue-500/5 to-violet-500/5 blur-3xl" />

      <div className="category-marquee flex w-max gap-4 py-2">
        {duplicatedCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <Link
              key={`${category.name}-${index}`}
              href={`/kateqoriya/${category.name.toLowerCase()}`}
              className={`group relative w-[190px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${category.color} p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 sm:w-[210px]`}
            >
              {/* Top RGB glow */}
              <div className="absolute left-5 right-5 top-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-30 transition-all duration-300 group-hover:opacity-100" />

              {/* Background circle */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/70 blur-2xl transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${category.iconBg} shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-2`}
                >
                  <Icon
                    className={`h-5 w-5 ${category.iconColor}`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-slate-900">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="mt-1 min-h-[40px] text-[11px] leading-5 text-slate-500">
                  {category.description}
                </p>

                {/* Button */}
                <div className="mt-4 flex items-center text-[11px] font-semibold text-slate-400 transition-colors group-hover:text-blue-600">
                  Bax

                  <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              {/* Bottom RGB */}
              <div className="absolute bottom-0 left-5 right-5 h-[2px] scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}