import { Faqs } from "@/components/Faqs";
import { Testimonials } from "@/components/Testimonials";

type HomeProps = {};

export const Home = ({}: HomeProps) => {
  return (
    <>
      <Faqs />
      <Testimonials />
    </>
  );
};
