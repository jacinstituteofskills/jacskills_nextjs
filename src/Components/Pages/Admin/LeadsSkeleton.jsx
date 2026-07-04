import { Card } from "@/Components/ui/card";

// Shimmer placeholder for the leads list (shown while refreshing).
export default function LeadsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-9 w-56 rounded-lg bg-muted animate-pulse" />
      <ul className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="p-4 md:p-5 gap-0">
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              <div className="flex-1 space-y-2.5">
                <div className="h-5 w-40 bg-muted rounded animate-pulse" />
                <div className="h-4 w-56 bg-muted rounded animate-pulse" />
                <div className="h-3 w-full bg-muted rounded animate-pulse" />
                <div className="h-3 w-2/3 bg-muted rounded animate-pulse" />
                <div className="h-3 w-48 bg-muted rounded animate-pulse mt-1" />
              </div>
              <div className="flex md:flex-col gap-2">
                <div className="h-8 w-28 bg-muted rounded animate-pulse" />
                <div className="h-8 w-28 bg-muted rounded animate-pulse" />
              </div>
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
}
