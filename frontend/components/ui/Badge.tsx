interface BadgeProps {
  type: string;
}

export default function Badge({ type }: BadgeProps) {
  let bgColor = 'bg-gray-500';
  
  if (type === 'VIP') bgColor = 'bg-yellow-500';
  if (type === 'TOP') bgColor = 'bg-red-500';
  if (type === 'Premium') bgColor = 'bg-orange-500';

  return (
    <span className={`${bgColor} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide shadow-sm`}>
      {type}
    </span>
  );
}
