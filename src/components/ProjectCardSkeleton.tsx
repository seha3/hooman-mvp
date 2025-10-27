export default function ProjectCardSkeleton() {
  return (
    <div className="p-5 border border-border rounded-xl bg-card animate-pulse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
      <div className="h-5 w-48 bg-neutral-200 rounded mb-3" />
      <div className="h-4 w-full bg-neutral-200 rounded mb-2" />
      <div className="h-4 w-3/4 bg-neutral-200 rounded mb-6" />
      <div className="flex justify-between">
        <div className="h-4 w-24 bg-neutral-200 rounded" />
        <div className="h-4 w-28 bg-neutral-200 rounded" />
      </div>
    </div>
  );
}
