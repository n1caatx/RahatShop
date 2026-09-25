import EmptyState from '@/components/ui/EmptyState';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20">
      <EmptyState
        title="Bu səhifəni tapa bilmədik."
        description="Axtardığınız səhifə silinmiş və ya ünvanı dəyişdirilmiş ola bilər."
        actionText="Ana səhifəyə qayıt"
        actionHref="/"
      />
    </div>
  );
}
