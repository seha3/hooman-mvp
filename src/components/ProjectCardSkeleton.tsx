export default function ProjectCardSkeleton() {
  return (
    <div
      className="p-5 rounded-xl border-4 border-border bg-card brutal-shadow animate-pulse
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
    >
      <div className="h-5 w-48 bg-muted rounded mb-3" />
      <div className="h-4 w-full bg-muted/90 rounded mb-2" />
      <div className="h-4 w-3/4 bg-muted/80 rounded mb-6" />
      <div className="flex justify-between">
        <div className="h-4 w-24 bg-muted/80 rounded" />
        <div className="h-4 w-28 bg-muted/80 rounded" />
      </div>
    </div>
  );
}
