import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Contact />
      <Footer />
    </>
  );
};
