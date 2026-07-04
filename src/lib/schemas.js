import { z } from "zod";

// ── Auth ─────────────────────────────────────────────
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

// ── Public contact form ──────────────────────────────
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name must be under 60 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^03\d{9}$/, "Phone must be 11 digits and start with 03"),
  email: z
    .string()
    .trim()
    .email("Invalid email format")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be under 100 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

// ── Admin resource forms (dynamic) ───────────────────
// Build a zod schema from a ResourceManager `fields` config.
export function buildResourceSchema(fields) {
  const shape = {};
  for (const f of fields) {
    switch (f.type) {
      case "text":
      case "textarea":
        shape[f.name] = f.required
          ? z.string().trim().min(1, `${f.label} is required`)
          : z.string().trim().optional().or(z.literal(""));
        break;
      case "image":
      case "icon":
        shape[f.name] = z.string().optional().or(z.literal(""));
        break;
      case "number":
        shape[f.name] = z.coerce.number().int().default(0);
        break;
      case "checkbox":
        shape[f.name] = z.boolean().default(true);
        break;
      default:
        shape[f.name] = z.any();
    }
  }
  return z.object(shape);
}
