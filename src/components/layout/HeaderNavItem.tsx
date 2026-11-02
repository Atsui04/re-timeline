import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface HeaderNavItemProps {
  to: string;
  children: ReactNode;
  end?: boolean;
}

function HeaderNavItem({ to, children, end }: HeaderNavItemProps) {
  return (
    <NavLink
      className="text-small-medium text-fg-muted hover:text-fg after:border-b-accent aria-[current=page]:text-fg relative transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-1 after:border-b-2 after:opacity-0 after:transition-opacity after:duration-200 aria-[current=page]:after:opacity-100"
      to={to}
      end={end}
    >
      {children}
    </NavLink>
  );
}

export default HeaderNavItem;
