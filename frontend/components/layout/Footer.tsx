import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4">RahatShop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/haqqimizda" className="hover:text-white transition">Haqqımızda</Link></li>
            <li><Link href="/elaqe" className="hover:text-white transition">Əlaqə</Link></li>
            <li><Link href="/qaydalar" className="hover:text-white transition">Qaydalar</Link></li>
            <li><Link href="/mexfilik" className="hover:text-white transition">Məxfilik</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Alıcılar</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nece-almaq" className="hover:text-white transition">Necə almaq olar?</Link></li>
            <li><Link href="/tehlukesizlik" className="hover:text-white transition">Təhlükəsizlik</Link></li>
            <li><Link href="/favoriler" className="hover:text-white transition">Favorilər</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Satıcılar</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/register?role=seller" className="hover:text-white transition">Mağaza yarat</Link></li>
            <li><Link href="/yeni-elan" className="hover:text-white transition">Elan yerləşdir</Link></li>
            <li><Link href="/reklam" className="hover:text-white transition">VIP/TOP</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Dəstək</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/yardim" className="hover:text-white transition">Yardım</Link></li>
            <li><Link href="/sikayet" className="hover:text-white transition">Şikayət</Link></li>
            <li><Link href="/elaqe" className="hover:text-white transition">Əlaqə</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
        © 2024 RahatShop. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
}
