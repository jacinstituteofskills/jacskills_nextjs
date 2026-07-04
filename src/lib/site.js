// ─────────────────────────────────────────────────────────────
// Central site config. The WhatsApp number is NOT a secret — it is
// intentionally used on the client (wa.me links), so it lives here.
//
// 👉 Replace WHATSAPP_NUMBER with the real number in FULL INTERNATIONAL
//    format, digits only, no "+", no spaces. e.g. Pakistan 0300-1234567
//    becomes "923001234567".
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "92XXXXXXXXXX"; // TODO: set real number

export const SITE = {
  name: "JacSkills",
  whatsappNumber: WHATSAPP_NUMBER,
  // 👉 Set this to your real production domain (used for SEO / sitemap).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jacskills.com",
};

/**
 * Build a WhatsApp click-to-chat link with an optional pre-filled message.
 * @param {string} [message] text to pre-fill in the chat
 */
export function waLink(message = "") {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Ready-made messages for common CTAs.
export const waMessages = {
  general: "Hi JacSkills 👋, I'd like to know more about your services and courses.",
  service: (title) =>
    `Hi JacSkills 👋, I'm interested in your "${title}" service. Can you share the details?`,
  course: (title) =>
    `Hi JacSkills 👋, I'd like to enroll in the "${title}" course. Can you share the details, fee, and start date?`,
  enroll: "Hi JacSkills 👋, I'd like to enroll in a course. Can you guide me?",
};
