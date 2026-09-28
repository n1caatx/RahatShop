interface BadgeProps {
  type: string;
}

export default function Badge({ type }: BadgeProps) {
  let badgeStyle =
    'bg-gradient-to-r from-slate-500 to-slate-600 text-white';

  if (type === 'VIP') {
    badgeStyle =
      'bg-gradient-to-r from-amber-400 to-orange-500 text-white';
  }

  if (type === 'TOP') {
    badgeStyle =
      'bg-gradient-to-r from-rose-500 to-red-600 text-white';
  }

  if (type === 'Premium') {
    badgeStyle =
      'bg-gradient-to-r from-orange-500 to-amber-600 text-white';
  }

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide shadow-sm ${badgeStyle}`}
    >
      {type}
    </span>
  );
}
