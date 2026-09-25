import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import Badge from '@/components/ui/Badge';

interface ProductCardProps {
  id: string;
  title: string;
  slug: string;
  price: number;
  city: string;
  storeName?: string;
  imageUrl?: string;
  condition: string;
  promotionType?: string;
}

export default function ProductCard({
  id, title, slug, price, city, storeName, imageUrl, condition, promotionType
}: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition flex flex-col relative h-full">
      {promotionType && (
        <div className="absolute top-2 left-2 z-10">
          <Badge type={promotionType} />
        </div>
      )}
      <button className="absolute top-2 right-2 z-10 p-1.5 bg-white/80 rounded-full text-gray-500 hover:text-red-500 hover:bg-white transition">
        <Heart className="w-5 h-5" />
      </button>

      <Link href={`/mehsul/${slug}`} className="block relative aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition duration-300" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">Şəkil yoxdur</div>
        )}
      </Link>

      <Link href={`/mehsul/${slug}`} className="p-3 flex flex-col flex-grow">
        <div className="font-bold text-lg text-[#0066CC] mb-1">
          {price.toLocaleString('az-AZ')} AZN
        </div>
        <h3 className="text-sm text-gray-900 font-medium mb-2 line-clamp-2 leading-snug flex-grow">
          {title}
        </h3>
        <div className="text-xs text-gray-500 flex flex-col gap-0.5 mt-auto">
          <span>{city}</span>
          {storeName && <span className="font-medium text-gray-700">{storeName}</span>}
        </div>
      </Link>
    </div>
  );
}
