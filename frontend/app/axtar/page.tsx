import api from '@/lib/api';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types';
import EmptyState from '@/components/ui/EmptyState';

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  let products: Product[] = [];
  
  if (query) {
    try {
      const res = await api.products.getProducts({ search: query });
      products = res.data.content;
    } catch (error) {}
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        &quot;{query}&quot; üçün axtarış nəticələri
      </h1>
      
      {products.length > 0 ? (
        <ProductGrid products={products} loading={false} />
      ) : (
        <EmptyState 
          title="Nəticə tapılmadı" 
          description="Axtardığın məhsulu tapa bilmədik. Fərqli sözlərlə yenidən yoxlayın."
          actionText="Ana səhifəyə qayıt"
          actionHref="/"
        />
      )}
    </div>
  );
}
