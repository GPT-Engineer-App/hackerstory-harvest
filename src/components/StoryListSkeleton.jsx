import { Skeleton } from '@/components/ui/skeleton';

const StoryListSkeleton = () => {
  return (
    <ul className="space-y-4">
      {[...Array(10)].map((_, index) => (
        <li key={index} className="bg-white shadow rounded-lg p-4">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-24" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StoryListSkeleton;
