import api from '@/lib/api';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types';

export default async function CategoryPage({ params, searchParams }: { params: { slug: string }, searchParams: { sort?: string } }) {
  let products: Product[] = [];
  try {
    const res = await api.products.getProducts({ category: params.slug, sort: searchParams.sort || 'newest' });
    products = res.data.content;
  } catch (error) {}

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
          <h3 className="font-bold mb-4">Filtrlər</h3>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Qiymət (AZN)</h4>
            <div className="flex gap-2">
              <input type="number" placeholder="Min" className="w-full p-2 border border-gray-300 rounded text-sm focus-ring" />
              <input type="number" placeholder="Max" className="w-full p-2 border border-gray-300 rounded text-sm focus-ring" />
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Vəziyyəti</h4>
            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> Yeni</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> İşlənmiş</label>
            </div>
          </div>
          
          <button className="w-full py-2 bg-gray-100 text-gray-800 rounded font-medium hover:bg-gray-200 transition text-sm">
            Tətbiq et
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold capitalize">{params.slug}</h1>
          <select className="border border-gray-300 rounded-md py-1 px-2 text-sm focus-ring">
            <option value="newest">Ən yeni</option>
            <option value="price_asc">Qiymət aşağıdan yuxarı</option>
            <option value="price_desc">Qiymət yuxarıdan aşağı</option>
          </select>
        </div>
        
        <ProductGrid products={products} loading={false} />
      </main>
    </div>
  );
}
