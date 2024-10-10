import { Contact } from "@/components/Contact";
import { ProductList } from "@/components/ProductList";
import { Testimonials } from "@/components/Testimonials";
import productTestimonials from "@/data/productTestimonials.json";
import { Testimonial } from "@/types/Testimonial";

export const Products = () => {
  const testimonialList: Testimonial[] = productTestimonials;
  return (
    <>
      <ProductList />

      <Testimonials
        contentText={"Product Reviews"}
        testimonialList={testimonialList}
      />

      <Contact />

      {/* <Faqs /> */}
    </>
  );
};
