'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';

import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/elan/${product.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/70"
    >
      {/* RGB hover glow */}
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-cyan-400/0 via-blue-500/50 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <span className="text-xs font-medium text-slate-400">
              Şəkil yoxdur
            </span>
          </div>
        )}

        {/* Image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Favorite */}
        <button
          type="button"
          aria-label="Sevimlilərə əlavə et"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-slate-500 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:text-rose-500"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-sm font-semibold leading-5 text-slate-800 transition-colors group-hover:text-slate-950">
            {product.title}
          </h3>
        </div>

        <p className="text-lg font-black tracking-tight text-blue-600">
          {product.price?.toLocaleString('az-AZ')} AZN
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">
            {product.location || 'Bakı'}
          </span>
        </div>
      </div>

      {/* Bottom RGB line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}
