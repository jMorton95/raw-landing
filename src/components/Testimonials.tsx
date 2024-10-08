type Testimonial = {
  name: string;
  testimonial: string;
  starRating: 1 | 2 | 3 | 4 | 5;
};

const testimonialList: Testimonial[] = [
  {
    name: "stuff",
    testimonial: "things",
    starRating: 5,
  },
];

export const Testimonials = () => {
  return (
    <div className="my-6 mb-12 font-[sans-serif]">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800">Testimonials</h2>
        <p className="text-sm text-gray-800 mt-4 leading-relaxed">
          Veniam proident aute magna anim excepteur et ex consectetur velit
          ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem
          minim. Officia do aliqua adipisicing ullamco in
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl max-md:gap-16 max-md:max-w-lg mx-auto mt-24">
        {testimonialList.map((x, i) => {
          return (
            <div
              key={i}
              className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative pt-12"
            >
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {x.testimonial}
                </p>
              </div>

              <div className="flex justify-center space-x-1 mt-6">
                {Array(x.starRating).map((_, i) => (
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
                {Array(5 - x.starRating).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 fill-[#FFFFFF]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-sm whitespace-nowrap font-bold">
                  {x.name}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
