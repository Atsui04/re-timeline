import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`m-auto w-300 max-w-full px-8 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
