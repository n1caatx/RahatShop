import api from '@/lib/api';
import { Product } from '@/types';
import Button from '@/components/ui/Button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  let title = 'Məhsul';
  let description = 'RahatShop məhsulu';
  try {
    const res = await api.products.getProductBySlug(params.slug);
    title = `${res.data.title} | RahatShop`;
    description = res.data.description?.substring(0, 160) || '';
  } catch (error) {}
  
  return { title, description };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  let product: Product | null = null;
  try {
    const res = await api.products.getProductBySlug(params.slug);
    product = res.data;
  } catch (error) {
    return <div className="container mx-auto py-12 text-center">Məhsul tapılmadı.</div>;
  }

  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Image Gallery */}
        <div className="bg-gray-100 rounded-lg aspect-[4/3] relative flex items-center justify-center overflow-hidden">
          {product.imageUrl ? (
             <Image src={product.imageUrl} alt={product.title} fill className="object-cover" />
          ) : (
            <span className="text-gray-400">Şəkil yoxdur</span>
          )}
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <button className="p-2 text-gray-400 hover:text-red-500 transition">
              <Heart className="w-6 h-6" />
            </button>
          </div>
          
          <div className="text-3xl font-bold text-[#0066CC]">
            {product.price.toLocaleString('az-AZ')} AZN
          </div>
          
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{product.condition}</span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{product.city}</span>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="font-semibold text-lg mb-1">{product.storeName || 'Şəxsi satıcı'}</div>
            <Link href={`/magaza/${product.storeSlug || ''}`} className="text-sm text-[#0066CC] hover:underline mb-4 inline-block">
              Satıcının bütün elanları
            </Link>
            <div className="space-y-2">
               <Button variant="primary" className="w-full">Satıcı ilə əlaqə</Button>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg text-sm text-yellow-800">
             <strong>Diqqət:</strong> Ödəniş etməzdən əvvəl məhsulu və satıcını yoxlayın.
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold mb-4">Məhsul haqqında</h2>
        <div className="text-gray-700 whitespace-pre-wrap">{product.description || 'Məlumat daxil edilməyib.'}</div>
      </div>
    </div>
  );
}
