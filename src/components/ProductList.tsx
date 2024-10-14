import productJson from "@/data/products.json";

type Category = "machine" | "part" | string;

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
  link: string;
  category: Category;
};

export const ProductList = () => {
  const products: Product[] = productJson.sort((a, b) => {
    if (a.category === "machine") return -1;
    if (b.category === "machine") return 1;
    if (a.category === "part") return -1;
    if (b.category === "part") return 1;

    if (a.description.length > b.description.length) return 1;
    if (a.description.length < b.description.length) return -1;

    return 0;
  });
  return (
    <>
      <hr color="#e5e7eb" className="mb-2 mt-2 h-1/4 mx-auto w-[100%]" />

      <div
        id="products"
        className="font-[sans-serif] py-4 px-4 mx-auto lg:max-w-[95rem] sm:max-w-full"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Machines & Replacements
        </h2>
        <h3 className="text-1xl font-bold text-gray-600 mb-6">
          5% Discount applies if you call us directly at{" "}
          <a
            className="text-1xl font-bold mb-6 text-main"
            href={`tel:${import.meta.env.VITE_TELEPHONE}`}
          >
            {import.meta.env.VITE_PHONE}
          </a>
        </h3>

        <h4 className="text-1xl font-bold text-gray-700 mb-6">
          Machines and workshops always wanted.
          <a href="#contact" className="text-1xl font-bold text-main mb-6">
            {"   "} Please contact now
          </a>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((x, i) => {
            return (
              <div
                key={i}
                className={`bg-white shadow-md overflow-hidden rounded-lg hover:-translate-y-2 transition-all relative`}
              >
                <div className="w-full cursor-pointer h-[260px] p-0 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                  <a href={x.link} target="_blank" rel="noopener">
                    <img
                      src={x.image}
                      alt={x.name}
                      className="h-full w-full object-contain"
                    />
                  </a>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex gap-4">
                    <h4 className="text-lg font-bold text-gray-800">
                      £{x.price}
                    </h4>

                    <h4 className="text-lg font-bold text-gray-800"></h4>

                    <h3 className="text-lg font-bold text-gray-800">
                      {x.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mt-4">{x.description}</p>

                  <div className="flex gap-2 mt-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      For £{x.price * import.meta.env.VITE_DISCOUNT}
                    </h3>
                    <h4 className="text-lg font-bold text-gray-800">call</h4>
                    <a
                      href={`tel:${import.meta.env.VITE_TELEPHONE}`}
                      className="text-lg font-bold text-main"
                    >
                      {import.meta.env.VITE_PHONE}
                    </a>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <svg
                      className="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      className="w-4 fill-[#facc15]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
