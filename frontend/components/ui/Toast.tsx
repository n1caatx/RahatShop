'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  visible: boolean;
  onClose?: () => void;
}

export default function Toast({ message, type = 'info', visible, onClose }: ToastProps) {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
    if (visible) {
      const timer = setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!show) return null;

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-[#0066CC]'
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in">
      <div className={`${bgColors[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2`}>
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
