import { useId, type ReactNode } from "react";

interface AboutSectionProps {
  title: string;
  children: ReactNode;
}

function AboutSection({ title, children }: AboutSectionProps) {
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-3">
      <h2
        id={headingId}
        className="text-heading-arc-mobile md:text-heading-arc text-fg"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

export default AboutSection;
