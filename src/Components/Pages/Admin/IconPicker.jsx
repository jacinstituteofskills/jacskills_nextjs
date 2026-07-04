"use client";

import { useMemo, useState } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ICON_OPTIONS, getIcon } from "@/lib/icons";

/**
 * Searchable icon picker that shows both the icon and its name.
 * Renders inline (expands below the trigger) so it never gets clipped
 * inside the dialog's scroll area.
 */
export default function IconPicker({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const Selected = getIcon(value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? ICON_OPTIONS.filter((k) => k.includes(q)) : ICON_OPTIONS;
  }, [query]);

  return (
    <div className="rounded-lg border bg-transparent">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-3 h-9 text-sm"
      >
        {Selected ? (
          <Selected className="h-4 w-4 shrink-0" />
        ) : (
          <span className="text-muted-foreground">—</span>
        )}
        <span className="flex-1 text-left truncate">{value || "No icon"}</span>
        {value && (
          <span
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
            }}
            className="text-muted-foreground hover:text-destructive"
            aria-label="Clear icon"
          >
            <X className="h-4 w-4" />
          </span>
        )}
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Panel */}
      {open && (
        <div className="border-t p-2">
          <div className="relative mb-2">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${ICON_OPTIONS.length} icons…`}
              className="pl-8 h-8"
            />
          </div>

          <div className="max-h-52 overflow-y-auto grid grid-cols-3 sm:grid-cols-4 gap-1">
            {filtered.map((key) => {
              const Icon = getIcon(key);
              const active = key === value;
              return (
                <button
                  key={key}
                  type="button"
                  title={key}
                  onClick={() => {
                    onChange(key);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`flex flex-col items-center gap-1 rounded-md p-2 ${
                    active
                      ? "bg-foreground text-background"
                      : "hover:bg-muted text-foreground"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="w-full truncate text-center text-[10px] leading-tight">
                    {key}
                  </span>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-xs text-muted-foreground py-6">
                No icons match “{query}”.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
