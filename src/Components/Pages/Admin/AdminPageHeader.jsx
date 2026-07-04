// Shared header for admin content pages (monochrome, clean).
export default function AdminPageHeader({ icon: Icon, title, description }) {
  return (
    <header className="flex items-start gap-4">
      {Icon && (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
          <Icon className="h-6 w-6" />
        </span>
      )}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
      </div>
    </header>
  );
}
