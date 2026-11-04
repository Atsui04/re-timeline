import type { ReactNode } from "react";

const variants = {
  default: "border-border text-fg-muted",
  branch: "border-what-if text-what-if bg-what-if/12",
  accent: "border-accent text-accent",
};

interface BadgeProps {
  children: ReactNode;
  variant: keyof typeof variants;
}

function Badge({ children, variant }: BadgeProps) {
  return (
    <span
      className={`text-small-regular rounded-md border px-2 py-1 ${variants[variant]}`}
    >
      [{children}]
    </span>
  );
}

export default Badge;
