// Pure-CSS shimmer skeleton for the services / courses detail grids.
const CardGridSkeleton = ({ title = "Loading", count = 6 }) => {
  return (
    <section className="px-4 md:px-8 py-8 md:py-12 bg-[var(--offwhite)]">
      {/* Heading placeholder */}
      <div className="flex flex-col items-center mb-10">
        <div className="h-9 w-56 rounded-lg bg-[var(--gray-light)] animate-pulse" />
        <div className="mt-3 h-4 w-80 max-w-full rounded bg-[var(--gray-light)] animate-pulse" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="bg-[var(--white)] p-4 rounded-2xl shadow-md flex flex-col"
          >
            <div className="w-full h-52 rounded-lg bg-[var(--gray-light)] animate-pulse" />
            <div className="mt-4 h-10 w-10 rounded-full bg-[var(--gray-light)] animate-pulse" />
            <div className="mt-4 h-6 w-3/4 rounded bg-[var(--gray-light)] animate-pulse" />
            <div className="mt-3 space-y-2">
              <div className="h-3 w-full rounded bg-[var(--gray-light)] animate-pulse" />
              <div className="h-3 w-full rounded bg-[var(--gray-light)] animate-pulse" />
              <div className="h-3 w-2/3 rounded bg-[var(--gray-light)] animate-pulse" />
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">{title}…</span>
    </section>
  );
};

export default CardGridSkeleton;
