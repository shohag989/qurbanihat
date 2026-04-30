export default function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded-md ${className}`}></div>
  );
}

export function AnimalCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Image Skeleton */}
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      
      {/* Content Skeleton */}
      <div className="p-5 flex flex-col flex-grow space-y-4">
        <Skeleton className="h-6 w-3/4" />
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-14" />
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-50 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Skeleton className="h-2 w-8" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export function AnimalDetailSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-8 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <Skeleton className="aspect-[4/3] w-full rounded-[2rem]" />
          <div className="bg-gray-100 p-8 rounded-[2rem]">
            <Skeleton className="h-6 w-48 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-48" />
          </div>
          <div className="bg-gray-100 p-8 rounded-[2rem] space-y-6">
            <Skeleton className="h-20 w-full rounded-2xl" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-24 w-full rounded-2xl" />
              <Skeleton className="h-24 w-full rounded-2xl" />
            </div>
            <Skeleton className="h-16 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
