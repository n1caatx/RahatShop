import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-ring disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500 hover:shadow-md',
    secondary:
      'bg-slate-100 text-slate-800 hover:bg-slate-200',
    outline:
      'border border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700',
    ghost:
      'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
