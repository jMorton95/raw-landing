import productJson from "@/data/products.json";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";

type Category = "machine" | "part" | "paint" | "oil" | string;

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
  link: string;
  category: Category;
};

export const ProductList = () => {
  const products: Product[] = productJson.sort((i, j) =>
    i.price > j.price ? -1 : 1
  );

  const categorisedProducts: Array<{ key: string; items: Product[] }> = [
    {
      key: "Lathes & Milling Machines",
      items: products.filter((x) => x.category === "machine"),
    },
    {
      key: "Spare Parts",
      items: products.filter((x) => x.category === "part"),
    },
    {
      key: "Paints",
      items: products.filter((x) => x.category === "paint"),
    },
    {
      key: "Oils",
      items: products.filter((x) => x.category === "oil"),
    },
  ];

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

        {categorisedProducts.map((category) => {
          return (
            <>
              <h3
                key={category.key + "-header"}
                className="text-3xl font-bold text-gray-700 my-6"
              >
                {category.key}
              </h3>
              <div className="hidden lg:block">
                <RenderScrollerProductList
                  name={category.key}
                  items={category.items}
                  key={category.key}
                />
              </div>
              <div className="block lg:hidden">
                <StaticProductList
                  key={"mobile" + category.key}
                  items={category.items}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const RenderScrollerProductList = (props: {
  name: string;
  items: Product[];
}) => {
  if (props.items.length <= 10)
    return (
      <ScrollerProductList
        key={"list" + props.name + 0}
        name={props.name}
        index={0}
        items={props.items}
      />
    );

  const children: ReactNode[] = [];

  for (let i = 0; i < Math.ceil(props.items.length / 10); i++) {
    const currItems = props.items.slice(i, 10);
    if (currItems.length >= 3) {
      children.push(
        <ScrollerProductList
          key={"list" + props.name + i}
          name={props.name}
          index={i}
          items={currItems}
        />
      );
    } else {
      children.push(
        <StaticProductList key={props.name + i} items={currItems} />
      );
    }
  }

  return children;
};

const ScrollerProductList = (props: {
  name: string;
  index: number;
  items: Product[];
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const container = scrollContainerRef.current;
    if (
      container?.offsetLeft !== undefined &&
      container?.scrollLeft !== undefined
    ) {
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container?.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (
      container?.offsetLeft !== undefined &&
      container?.scrollLeft !== undefined
    ) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setIsAtStart(container.scrollLeft === 0);

      setIsAtEnd(
        container.scrollLeft + container.clientWidth >= container.scrollWidth
      );
    }
  };

  useLayoutEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);

      handleScroll();

      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div
      key={"item" + props.name + props.index}
      className="relative w-full overflow-x-hidden cursor-grab select-none my-4"
    >
      {!isAtStart && (
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      )}
      {!isAtEnd && (
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
      <div
        ref={scrollContainerRef}
        className={`w-full overflow-x-hidden cursor-${
          isDragging ? "grabbing" : "grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex space-x-4 px-4">
          <div className="flex space-x-4 px-4">
            {props.items.map((x, i) => {
              return (
                <div
                  key={x.name + i}
                  className={`w-[400px] max-w-[400px] select-none bg-white shadow-md overflow-hidden hover:-translate-y-2 transition-all relative`}
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
                    <p className="text-gray-600 text-sm mt-4">
                      {x.description}
                    </p>

                    <div className="flex gap-2 mt-4">
                      <h3 className="text-lg font-bold text-gray-800">
                        For £
                        {(x.price * import.meta.env.VITE_DISCOUNT).toFixed(2)}
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
      </div>
    </div>
  );
};

const StaticProductList = (props: { key: string; items: Product[] }) => {
  return (
    <div
      id={props.key}
      key={props.key + "-items"}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {props.items.map((x, i) => {
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
                <h4 className="text-lg font-bold text-gray-800">£{x.price}</h4>

                <h4 className="text-lg font-bold text-gray-800"></h4>

                <h3 className="text-lg font-bold text-gray-800">{x.name}</h3>
              </div>
              <p className="text-gray-600 text-sm mt-4">{x.description}</p>

              <div className="flex gap-2 mt-4">
                <h3 className="text-lg font-bold text-gray-800">
                  For £{(x.price * import.meta.env.VITE_DISCOUNT).toFixed(2)}
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
  );
};
