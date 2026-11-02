import { Link } from "react-router-dom";
import GitHubLink from "./GitHubLink";
import Container from "./Container";

function Footer() {
  return (
    <footer className="border-t-border border-t py-8">
      <Container className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="font-space text-base/[24px] font-semibold">
            <span className="text-accent">Re</span>:Timeline
          </p>
          <nav className="flex items-center gap-6">
            <Link
              className="text-small-medium text-fg-muted hover:text-fg transition-colors duration-200"
              to="/"
            >
              Timeline
            </Link>
            <Link
              className="text-small-medium text-fg-muted hover:text-fg transition-colors duration-200"
              to="/about"
            >
              About
            </Link>
            <GitHubLink />
          </nav>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-small-regular text-fg-muted">
            Fan Project. Re:Zero © Tappei Nagatsuki / Kadokawa / White Fox. Not
            affiliated with the rights holders.
          </p>
          <p className="text-small-regular text-fg-muted">
            &copy; 2026 Markiian Bushko
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
