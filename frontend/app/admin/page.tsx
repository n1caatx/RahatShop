'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState({ users: 0, products: 0, stores: 0, promotions: 0 });

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || !user?.roles?.includes('ADMIN'))) {
      router.push('/login');
    } else if (isAuthenticated) {
      // Mock fetch
      setStats({ users: 1520, products: 3450, stores: 89, promotions: 45 });
    }
  }, [isAuthenticated, isLoading, user, router]);

  if (isLoading || !isAuthenticated) return <div className="p-8 text-center">Yüklənir...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-1">İstifadəçilər</div>
          <div className="text-3xl font-bold text-gray-900">{stats.users}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-1">Məhsullar</div>
          <div className="text-3xl font-bold text-gray-900">{stats.products}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-1">Mağazalar</div>
          <div className="text-3xl font-bold text-gray-900">{stats.stores}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="text-gray-500 text-sm mb-1">Aktiv promosyonlar</div>
          <div className="text-3xl font-bold text-gray-900">{stats.promotions}</div>
        </div>
      </div>
    </div>
  );
}
