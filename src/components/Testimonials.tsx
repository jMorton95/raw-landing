import { Testimonial } from "@/types/Testimonial";

export const Testimonials = (props: {
  contentText: string;
  testimonialList: Testimonial[];
}) => {
  return (
    <>
      <hr color="#e5e7eb" className="mb-2 mt-2 h-1/4 mx-auto w-[100%]" />

      <div className="my-12 font-[sans-serif]">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800">
            {props.contentText}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-6 max-w-6xl max-md:gap-4 max-md:max-w-lg mx-auto mt-12">
          {props.testimonialList.map((x, i) => (
            <div
              key={i}
              className="md:w-full flex flex-col justify-between rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative p-6 pt-4 md:pt-12"
            >
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {x.testimonial}
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-6">
                {[...Array(x.starRating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
                {[...Array(5 - x.starRating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 fill-[#0000005f]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">
                  {x.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
