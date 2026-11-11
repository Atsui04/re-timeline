import { Link } from "react-router-dom";
import GitHubLink from "./GitHubLink";
import Container from "./Container";
import HeaderNavItem from "./HeaderNavItem";

function Header() {
  return (
    <header className="border-b-border h-14 border-b md:h-16">
      <Container className="flex h-full items-center justify-between">
        <Link to="/" className="text-heading-if-mobile md:text-heading-arc">
          <span className="text-accent">Re</span>:Timeline
        </Link>

        <nav className="flex items-center gap-4 md:gap-6">
          <HeaderNavItem to="/" end>
            Timeline
          </HeaderNavItem>
          <HeaderNavItem to="/about">About</HeaderNavItem>
          <GitHubLink />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
