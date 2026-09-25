'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, PlusCircle, Heart, User } from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Ana səhifə', href: '/', icon: Home },
    { name: 'Axtar', href: '/axtar', icon: Search },
    { name: 'Sat', href: '/yeni-elan', icon: PlusCircle, isMain: true },
    { name: 'Favorilər', href: '/favoriler', icon: Heart },
    { name: 'Profil', href: '/profil', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link key={item.name} href={item.href} className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-[#0066CC]' : 'text-gray-500'}`}>
              <Icon className={item.isMain ? 'w-8 h-8' : 'w-6 h-6'} strokeWidth={item.isMain ? 2 : 1.5} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
