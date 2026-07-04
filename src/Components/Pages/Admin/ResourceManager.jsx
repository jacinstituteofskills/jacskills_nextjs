"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Pencil, Trash2, EyeOff, GripVertical, ArrowUpDown } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Card } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { Checkbox } from "@/Components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/Components/ui/dialog";

import {
  createItem,
  updateItem,
  deleteItem,
  reorderItems,
} from "@/Components/actions/adminContent";
import { getIcon } from "@/lib/icons";
import { buildResourceSchema } from "@/lib/schemas";
import AdminImageField from "./AdminImageField";
import ConfirmDialog from "./ConfirmDialog";
import IconPicker from "./IconPicker";

const ResourceManager = ({ table, items = [], fields, labelField, addLabel }) => {
  const router = useRouter();
  const schema = useMemo(() => buildResourceSchema(fields), [fields]);

  const [editing, setEditing] = useState(null); // row | "new" | null
  const [confirmTarget, setConfirmTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [serverError, setServerError] = useState("");

  // Local, reorderable copy of the list (kept in sync with server data).
  const [list, setList] = useState(items);
  const [dragIndex, setDragIndex] = useState(null);
  const [overIndex, setOverIndex] = useState(null);
  const [reorderMode, setReorderMode] = useState(false);
  const [orderDirty, setOrderDirty] = useState(false);
  const [savingOrder, startOrderTransition] = useTransition();
  // Sync with server data, but never clobber an in-progress reorder.
  useEffect(() => {
    if (!reorderMode) setList(items);
  }, [items, reorderMode]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const blankValues = useMemo(() => {
    const base = {};
    fields.forEach((f) => {
      base[f.name] = f.type === "checkbox" ? true : f.type === "number" ? 0 : "";
    });
    return base;
  }, [fields]);

  const openNew = () => {
    setServerError("");
    reset(blankValues);
    setEditing("new");
  };

  const openEdit = (row) => {
    setServerError("");
    const values = { ...blankValues };
    fields.forEach((f) => {
      if (row[f.name] !== undefined && row[f.name] !== null) values[f.name] = row[f.name];
    });
    reset(values);
    setEditing(row);
  };

  const closeEditor = () => {
    setEditing(null);
    setServerError("");
  };

  const onSubmit = async (values) => {
    setServerError("");
    const res =
      editing === "new"
        ? await createItem(table, values)
        : await updateItem(table, editing.id, values);
    if (res?.error) {
      setServerError(res.error);
      return;
    }
    closeEditor();
    router.refresh();
  };

  const confirmDelete = async () => {
    if (!confirmTarget) return;
    setDeleting(true);
    await deleteItem(table, confirmTarget.id);
    setDeleting(false);
    setConfirmTarget(null);
    router.refresh();
  };

  // ── Reorder mode + drag & drop ──────────────────────────
  const startReorder = () => {
    setReorderMode(true);
    setOrderDirty(false);
  };

  const cancelReorder = () => {
    setReorderMode(false);
    setOrderDirty(false);
    setList(items); // revert any unsaved dragging
  };

  const saveOrder = () => {
    startOrderTransition(async () => {
      const res = await reorderItems(table, list.map((i) => i.id));
      if (!res?.error) {
        setReorderMode(false);
        setOrderDirty(false);
        router.refresh();
      }
    });
  };

  const commitReorder = () => {
    if (dragIndex === null || overIndex === null || dragIndex === overIndex) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }
    const updated = [...list];
    const [moved] = updated.splice(dragIndex, 1);
    updated.splice(overIndex, 0, moved);
    const renumbered = updated.map((it, idx) => ({ ...it, sort_order: (idx + 1) * 10 }));
    setList(renumbered);
    setDragIndex(null);
    setOverIndex(null);
    setOrderDirty(true);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <p className="text-sm text-muted-foreground">
            {list.length} {list.length === 1 ? "item" : "items"}
          </p>
          {reorderMode && (
            <p className="text-xs text-muted-foreground/80">
              Drag the cards to rearrange, then click Save order.
            </p>
          )}
        </div>

        <div className="flex gap-2">
          {reorderMode ? (
            <>
              <Button variant="outline" onClick={cancelReorder} disabled={savingOrder}>
                Cancel
              </Button>
              <Button onClick={saveOrder} disabled={savingOrder || !orderDirty}>
                {savingOrder ? "Saving…" : "Save order"}
              </Button>
            </>
          ) : (
            <>
              {list.length > 1 && (
                <Button variant="outline" onClick={startReorder}>
                  <ArrowUpDown />
                  Reorder
                </Button>
              )}
              <Button onClick={openNew}>
                <Plus />
                Add {addLabel}
              </Button>
            </>
          )}
        </div>
      </div>

      {/* List */}
      {list.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">Nothing here yet.</p>
          <div className="mt-4 flex justify-center">
            <Button onClick={openNew}>
              <Plus />
              Add {addLabel}
            </Button>
          </div>
        </Card>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {list.map((row, index) => {
            const Icon = getIcon(row.icon);
            const isDragging = dragIndex === index;
            const isOver = overIndex === index && dragIndex !== index;
            return (
              <li
                key={row.id}
                draggable={reorderMode}
                onDragStart={() => reorderMode && setDragIndex(index)}
                onDragEnter={() => reorderMode && dragIndex !== null && setOverIndex(index)}
                onDragOver={(e) => reorderMode && e.preventDefault()}
                onDrop={(e) => {
                  if (!reorderMode) return;
                  e.preventDefault();
                  commitReorder();
                }}
                onDragEnd={() => {
                  setDragIndex(null);
                  setOverIndex(null);
                }}
                className={`transition ${reorderMode ? "cursor-grab active:cursor-grabbing" : ""} ${
                  isDragging ? "opacity-40" : ""
                } ${isOver ? "ring-2 ring-foreground rounded-xl" : ""}`}
              >
                <Card className="p-0 gap-0 overflow-hidden group h-full">
                  {/* Media */}
                  <div className="relative h-48 bg-muted">
                    {row.image_url ? (
                      <img
                        src={row.image_url}
                        alt={row[labelField]}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                        {Icon ? <Icon className="h-8 w-8" /> : <span>No image</span>}
                      </div>
                    )}
                    {row.is_active === false && (
                      <Badge variant="secondary" className="absolute top-2 left-2 gap-1 shadow-sm">
                        <EyeOff className="h-3 w-3" /> Hidden
                      </Badge>
                    )}
                    {/* Drag handle (only in reorder mode) */}
                    {reorderMode && (
                      <span className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-md bg-background text-foreground cursor-grab active:cursor-grabbing shadow">
                        <GripVertical className="h-4 w-4" />
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground leading-snug line-clamp-1">
                        {row[labelField]}
                      </h3>
                      {typeof row.sort_order === "number" && (
                        <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                          #{row.sort_order}
                        </span>
                      )}
                    </div>
                    {row.role && (
                      <p className="text-sm text-muted-foreground font-medium mt-0.5">
                        {row.role}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1 flex-1">
                      {row.description || row.bio}
                    </p>

                    {reorderMode ? (
                      <div className="mt-4 flex items-center gap-2 border-t pt-3 text-sm text-muted-foreground">
                        <GripVertical className="h-4 w-4" />
                        Drag to reorder
                      </div>
                    ) : (
                      <div className="mt-4 flex gap-2 border-t pt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => openEdit(row)}
                        >
                          <Pencil />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => setConfirmTarget(row)}
                        >
                          <Trash2 />
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      )}

      {/* Add / Edit dialog */}
      <Dialog open={!!editing} onOpenChange={(open) => !open && closeEditor()}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editing === "new" ? `Add ${addLabel}` : `Edit ${addLabel}`}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            {serverError && (
              <p className="rounded-lg bg-destructive/10 text-destructive px-3 py-2 text-sm">
                {serverError}
              </p>
            )}

            {fields.map((f) => (
              <div key={f.name} className="space-y-1.5">
                {f.type !== "checkbox" && (
                  <Label htmlFor={f.name}>
                    {f.label}
                    {f.required && <span className="text-destructive"> *</span>}
                  </Label>
                )}

                {f.type === "text" && (
                  <Input id={f.name} {...register(f.name)} placeholder={f.placeholder} />
                )}

                {f.type === "textarea" && (
                  <Textarea id={f.name} rows={4} {...register(f.name)} placeholder={f.placeholder} />
                )}

                {f.type === "number" && (
                  <Input id={f.name} type="number" {...register(f.name)} />
                )}

                {f.type === "icon" && (
                  <Controller
                    name={f.name}
                    control={control}
                    render={({ field }) => (
                      <IconPicker value={field.value} onChange={field.onChange} />
                    )}
                  />
                )}

                {f.type === "image" && (
                  <Controller
                    name={f.name}
                    control={control}
                    render={({ field }) => (
                      <AdminImageField value={field.value} onChange={field.onChange} />
                    )}
                  />
                )}

                {f.type === "checkbox" && (
                  <Controller
                    name={f.name}
                    control={control}
                    render={({ field }) => (
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={f.name}
                          checked={!!field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label htmlFor={f.name}>{f.label}</Label>
                      </div>
                    )}
                  />
                )}

                {errors[f.name] && (
                  <p className="text-xs text-destructive">{errors[f.name].message}</p>
                )}
              </div>
            ))}

            <DialogFooter className="mt-2">
              <Button type="button" variant="outline" size="sm" onClick={closeEditor} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" size="sm" disabled={isSubmitting}>
                {isSubmitting ? "Saving…" : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <ConfirmDialog
        open={!!confirmTarget}
        onOpenChange={(open) => !open && setConfirmTarget(null)}
        title={`Delete ${addLabel.toLowerCase()}?`}
        description={
          confirmTarget
            ? `“${confirmTarget[labelField]}” will be permanently removed. This cannot be undone.`
            : ""
        }
        loading={deleting}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default ResourceManager;
