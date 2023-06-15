import { Header } from "../components/shared/Header/Header";
import { Insta } from "components/shared/Insta/Insta";
import { Footer } from "components/shared/Footer/Footer";
import { useEffect } from "react";
import { IS_LOGGED_IN } from "configs/AppConfig";
import router from "next/router";
export const Layout = ({ children }) => {
  useEffect(() => {
    const isLogged =
      typeof window !== "undefined"
        ? window.localStorage.getItem(IS_LOGGED_IN)
        : false;

    // if (!isLogged) {
    //   router.replace("/login");
    // }
  }, []);
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="content">
        {children}
        {/* <Insta /> */}
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};
