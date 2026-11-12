import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 py-12">
        <Container className="flex flex-col gap-8 md:gap-12">
          <Outlet />
        </Container>
      </main>
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export default AppLayout;
