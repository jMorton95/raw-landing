import { Contact } from "@/components/Contact";
import { Faqs } from "@/components/Faqs";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Slider } from "@/components/Slider";
import { Testimonials } from "@/components/Testimonials";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />

      <Slider />

      <Outlet />

      <Contact />

      <Testimonials />

      <Faqs />

      <Footer />
    </>
  );
};
