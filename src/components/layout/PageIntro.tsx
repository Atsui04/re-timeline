import type { ReactNode } from "react";

interface PageIntroProps {
  title: ReactNode;
  description: string;
}

function PageIntro({ title, description }: PageIntroProps) {
  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <h1 className="text-heading-main-mobile md:text-heading-main">{title}</h1>
      <p className="text-body text-fg-muted max-w-160">{description}</p>
    </div>
  );
}

export default PageIntro;
