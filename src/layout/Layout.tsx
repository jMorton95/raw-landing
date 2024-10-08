import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />

      <Slider />

      <Outlet />

      <Footer />
    </>
  );
};
