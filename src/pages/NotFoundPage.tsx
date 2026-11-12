import { Link } from "react-router-dom";
import PageIntro from "../components/layout/PageIntro";

function NotFoundPage() {
  return (
    <>
      <title>404 | Re:Timeline</title>
      <PageIntro
        title={
          <>
            <span className="text-accent">Re</span>:404
          </>
        }
        description="This page doesn’t exist in any timeline. Subaru checked every loop and found nothing here."
      />
      <Link
        to="/"
        className="group text-body text-accent focus-visible:outline-accent inline-flex items-center gap-1 self-start rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 group-hover:-translate-x-1 group-focus-visible:-translate-x-1"
        >
          ←
        </span>
        <span className="group-hover:decoration-accent group-focus-visible:decoration-accent underline decoration-transparent underline-offset-4 transition-colors duration-200">
          Return by Death
        </span>
        <span className="sr-only"> (back to the timeline)</span>
      </Link>
    </>
  );
}

export default NotFoundPage;
