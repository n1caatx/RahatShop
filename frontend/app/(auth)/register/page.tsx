'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/lib/api';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('Müştəri');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Bütün xanaları doldurun');
      return;
    }
    
    if (password.length < 6) {
      setError('Şifrə ən azı 6 simvol olmalıdır');
      return;
    }

    if (password !== confirmPassword) {
      setError('Şifrələr uyğun gəlmir');
      return;
    }

    try {
      await api.auth.register(email, password, role);
      router.push('/login');
    } catch (err) {
      setError('Qeydiyyat zamanı xəta baş verdi');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">Qeydiyyat</h1>
      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="E-poçt"
          type="email"
          placeholder="E-poçt ünvanınız"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Şifrə"
          type="password"
          placeholder="Şifrəniz (min. 6 simvol)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          label="Şifrənin təkrarı"
          type="password"
          placeholder="Şifrəni yenidən daxil edin"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Hesab növü</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus-ring"
          >
            <option value="Müştəri">Müştəri</option>
            <option value="Satıcı">Satıcı</option>
          </select>
        </div>

        <Button type="submit" variant="primary" className="w-full">
          Qeydiyyat
        </Button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600">
        Artıq hesabınız var?{' '}
        <Link href="/login" className="text-[#0066CC] hover:underline">
          Daxil olun
        </Link>
      </div>
    </div>
  );
}
