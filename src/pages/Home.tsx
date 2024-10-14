import { Contact } from "@/components/Contact";
import { ProductList } from "@/components/ProductList";
import { Testimonials } from "@/components/Testimonials";
import { ContentBody } from "@/components/ContentBody";
import workshopTestimonial from "@/data/workshopTestimonial.json";
import { Testimonial } from "@/types/Testimonial";

export const Home = () => {
  const testimonialList: Testimonial[] = workshopTestimonial;
  return (
    <>
      <ProductList />

      <ContentBody />

      <Testimonials
        contentText={"Service Reviews"}
        testimonialList={testimonialList}
      />

      <Contact />
    </>
  );
};
