"use client";

import { useState, useRef } from "react";
import { Upload, Link2, X } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { uploadImage } from "@/Components/actions/adminContent";

/**
 * Image input supporting BOTH a pasted URL and a file upload.
 * Uploaded files go to Supabase Storage via a server action.
 */
const AdminImageField = ({ value, onChange }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef(null);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await uploadImage(fd);
      if (res?.error) setError(res.error);
      else onChange(res.url);
    } catch {
      setError("Upload failed.");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  return (
    <div className="space-y-2">
      {value && (
        <div className="relative inline-block">
          <img
            src={value}
            alt="preview"
            className="h-24 w-24 object-cover rounded-lg border"
          />
          <Button
            type="button"
            size="icon-xs"
            variant="destructive"
            onClick={() => onChange("")}
            className="absolute -top-2 -right-2 rounded-full"
            aria-label="Remove image"
          >
            <X />
          </Button>
        </div>
      )}

      <div className="relative">
        <Link2 className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="url"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste an image URL"
          className="pl-8"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
        >
          <Upload />
          {uploading ? "Uploading…" : "Upload file"}
        </Button>
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} className="hidden" />
        <span className="text-xs text-muted-foreground">or paste a link above</span>
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

export default AdminImageField;
