import api from '@/lib/api';
import { Store, Product } from '@/types';
import ProductGrid from '@/components/product/ProductGrid';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return { title: `Mağaza | RahatShop` };
}

export default async function StorePage({ params }: { params: { slug: string } }) {
  let store: Store | null = null;
  let products: Product[] = [];

  try {
    const storeRes = await api.stores.getStoreBySlug(params.slug);
    store = storeRes.data;
    
    // In a real app we'd fetch store products
    const prodRes = await api.products.getProducts({ storeId: store.id });
    products = prodRes.data.content;
  } catch (error) {
    return <div className="container mx-auto py-12 text-center">Mağaza tapılmadı.</div>;
  }

  if (!store) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Store Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 shrink-0">
          {store.logoUrl ? <img src={store.logoUrl} alt={store.name} className="w-full h-full rounded-full object-cover" /> : 'Logo'}
        </div>
        <div className="text-center md:text-left flex-grow">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <h1 className="text-2xl font-bold">{store.name}</h1>
            {store.verified && <span className="text-blue-500" title="Təsdiqlənmiş">✓</span>}
          </div>
          <p className="text-gray-600 mb-2">{store.city}</p>
          <p className="text-gray-700 text-sm max-w-2xl">{store.description}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6 flex space-x-6">
        <button className="pb-2 border-b-2 border-[#0066CC] font-medium text-[#0066CC]">Məhsullar</button>
        <button className="pb-2 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">Haqqında</button>
        <button className="pb-2 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700">Rəylər</button>
      </div>

      {/* Products */}
      <ProductGrid products={products} loading={false} />
    </div>
  );
}
