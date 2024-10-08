import { Testimonials } from "@/components/Testimonials";
import { WorkshopPurchaseContentBody } from "@/components/WorkshopPurchaseContentBody";
import workshopTestimonial from "@/data/workshopTestimonial.json";
import { Testimonial } from "@/types/Testimonial";

export const Home = () => {
  const testimonialList: Testimonial[] = workshopTestimonial;
  return (
    <>
      <WorkshopPurchaseContentBody />
      <Testimonials
        contentText={"Service Reviews"}
        testimonialList={testimonialList}
      />
    </>
  );
};
