import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { Product } from '@/types';
import EmptyState from '@/components/ui/EmptyState';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export default function ProductGrid({
  products,
  loading = false,
}: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm">
        <EmptyState
          title="Məhsul tapılmadı"
          description="Hal-hazırda heç bir məhsul yoxdur."
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
