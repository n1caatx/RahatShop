export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 flex flex-col h-full animate-pulse">
      <div className="aspect-[4/3] bg-gray-200 shrink-0"></div>
      <div className="p-3 flex flex-col flex-grow">
        <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3 flex-grow"></div>
        <div className="h-3 bg-gray-200 rounded w-1/3 mt-auto mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
}
