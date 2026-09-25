'use client';

import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Bütün xanaları doldurun');
      return;
    }

    try {
      await login(email, password);
      router.push('/');
    } catch (err) {
      setError('E-poçt və ya şifrə yanlışdır');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold text-center mb-6">Daxil ol</h1>
      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="E-poçt"
          type="email"
          placeholder="E-poçt ünvanınız"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Şifrə"
          type="password"
          placeholder="Şifrəniz"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="primary" className="w-full">
          Daxil ol
        </Button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-600">
        Hesabınız yoxdur?{' '}
        <Link href="/register" className="text-[#0066CC] hover:underline">
          Qeydiyyatdan keçin
        </Link>
      </div>
    </div>
  );
}
