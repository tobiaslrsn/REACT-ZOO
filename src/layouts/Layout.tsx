import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>

      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
