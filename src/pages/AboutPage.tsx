import AboutSection from "../components/about/AboutSection";
import PageIntro from "../components/layout/PageIntro";
import Badge from "../components/ui/Badge";

function AboutPage() {
  const tags = ["React", "TypeScript", "Vite", "Tailwind CSS"];

  return (
    <>
      <PageIntro
        title={
          <>
            <span className="text-accent">Re</span>:About
          </>
        }
        description="A fan-made interactive timeline of the Re:Zero universe. Built as a portfolio project to practice frontend development."
      />
      <div className="flex max-w-180 flex-col gap-10">
        <AboutSection title="How it works">
          <p className="text-fg-muted text-body">
            Switch between release order and chronological order. Turn on IF
            stories to see the branches where Subaru makes a different decision.
            Anime only hides content that exists only in the light novels, so
            you can browse without spoilers.
          </p>
        </AboutSection>
        <AboutSection title="Sources & credits">
          <p className="text-fg-muted text-body">
            Arc names and facts are based on the Re:Zero Wiki. Descriptions are
            written by me. Re:Zero © Tappei Nagatsuki / Kadokawa / White Fox.
            This is an unofficial fan project and is not affiliated with the
            rights holders.
          </p>
        </AboutSection>
        <AboutSection title="Built with">
          <div className="flex flex-col gap-4">
            <ul className="flex items-center gap-3">
              {tags.map((t) => (
                <li key={t}>
                  <Badge variant="default">{t}</Badge>
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/Atsui04/re-timeline"
              rel="noopener noreferrer"
              target="_blank"
              className="group text-body text-accent focus-visible:outline-accent inline-flex items-center gap-1 self-start rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <span className="group-hover:decoration-accent group-focus-visible:decoration-accent underline decoration-transparent underline-offset-4 transition-colors duration-200">
                Source code on GitHub
              </span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
              >
                →
              </span>
              <span className="sr-only">opens in a new tab</span>
            </a>
          </div>
        </AboutSection>
      </div>
    </>
  );
}

export default AboutPage;
