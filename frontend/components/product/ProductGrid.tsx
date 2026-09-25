import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { Product } from '@/types';
import EmptyState from '@/components/ui/EmptyState';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
}

export default function ProductGrid({ products, loading = false }: ProductGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return <EmptyState title="Məhsul tapılmadı" description="Hal-hazırda heç bir məhsul yoxdur." />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          slug={product.slug}
          price={product.price}
          city={product.city}
          storeName={product.storeName}
          imageUrl={product.imageUrl}
          condition={product.condition}
          promotionType={product.promotionType}
        />
      ))}
    </div>
  );
}
