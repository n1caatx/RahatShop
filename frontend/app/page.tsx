import api from '@/lib/api';
import ProductGrid from '@/components/product/ProductGrid';
import { Product } from '@/types';
import Link from 'next/link';

export default async function Home() {
  let products: Product[] = [];
  try {
    const res = await api.products.getProducts({ sort: 'newest', size: 8 });
    products = res.data.content;
  } catch {
    // Graceful fallback for SSR when API is offline
  }

  const categories = [
    { name: 'Elektronika', icon: '📱' },
    { name: 'Geyim', icon: '👕' },
    { name: 'Ev və bağ', icon: '🏡' },
    { name: 'Avtomobil', icon: '🚗' },
    { name: 'Daşınmaz əmlak', icon: '🏢' },
    { name: 'İş elanları', icon: '💼' },
    { name: 'Xidmətlər', icon: '🛠' },
    { name: 'Uşaq aləmi', icon: '🧸' },
    { name: 'Heyvanlar', icon: '🐕' },
    { name: 'Hobbi və asudə', icon: '🎨' },
    { name: 'İdman', icon: '⚽' },
    { name: 'Gözəllik və sağlamlıq', icon: '💄' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <section className="text-center py-12 mb-8 bg-white rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nə axtarırsansa, Rahat tap.</h1>
        <p className="text-lg text-gray-600 mb-8">Minlərlə məhsul və mağaza arasından axtardığını tap.</p>
        <div className="max-w-2xl mx-auto">
          <form action="/axtar" method="GET" className="flex">
            <input
              type="text"
              name="q"
              placeholder="Məhsul, mağaza və ya kateqoriya axtar..."
              className="w-full px-6 py-4 rounded-l-lg border border-gray-300 focus-ring"
            />
            <button type="submit" className="px-8 py-4 bg-[#0066CC] text-white rounded-r-lg hover:bg-blue-700 transition">
              Axtar
            </button>
          </form>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Kateqoriyalar</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <Link key={index} href={`/kateqoriya/${cat.name.toLowerCase()}`} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="text-sm text-center font-medium">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* New Products */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Yeni elanlar</h2>
          <Link href="/axtar" className="text-[#0066CC] hover:underline">Hamısına bax</Link>
        </div>
        <ProductGrid products={products} loading={false} />
      </section>

      {/* Promo */}
      <section className="bg-blue-50 rounded-lg p-8 text-center flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#0066CC] mb-4">Mağaza yarat və satışlarını artır!</h2>
        <p className="text-gray-700 mb-6 max-w-lg">Öz onlayn mağazanızı RahatShop-da açaraq minlərlə potensial alıcıya çatın.</p>
        <Link href="/(auth)/register?role=seller" className="px-6 py-3 bg-[#0066CC] text-white font-medium rounded-lg hover:bg-blue-700 transition">
          Mağaza Yarat
        </Link>
      </section>
    </div>
  );
}
