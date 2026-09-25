import Link from 'next/link';

interface StoreCardProps {
  name: string;
  slug: string;
  city: string;
  logoUrl?: string;
  productCount: number;
  verified?: boolean;
}

export default function StoreCard({ name, slug, city, logoUrl, productCount, verified }: StoreCardProps) {
  return (
    <Link href={`/magaza/${slug}`} className="flex items-center p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shrink-0 overflow-hidden mr-4">
        {logoUrl ? <img src={logoUrl} alt={name} className="w-full h-full object-cover" /> : <span className="text-gray-400 text-xs">Logo</span>}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <h3 className="font-bold text-gray-900">{name}</h3>
          {verified && <span className="text-blue-500 text-sm">✓</span>}
        </div>
        <p className="text-sm text-gray-500 mb-1">{city}</p>
        <p className="text-xs text-[#0066CC] font-medium">{productCount} məhsul</p>
      </div>
    </Link>
  );
}
