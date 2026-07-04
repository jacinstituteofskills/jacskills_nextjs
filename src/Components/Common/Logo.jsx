import Image from "next/image";

/**
 * JacSkills logo (public/jacskills-logo.png, 1774×887, 2:1).
 * Size it with the `className` (set a height + w-auto), e.g. "h-12 w-auto".
 */
export default function Logo({ className = "h-12 w-auto", priority = false }) {
  return (
    <Image
      src="/jacskills-logo.png"
      alt="JacSkills — Services and Courses Institute"
      width={1774}
      height={887}
      priority={priority}
      className={className}
    />
  );
}
