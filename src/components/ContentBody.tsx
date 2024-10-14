export const ContentBody = () => {
  return (
    <div id="services" className="bg-white mt-12 p-8 font-[sans-serif]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-gray-800 text-4xl font-extrabold relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-main after:left-0 after:right-0 after:mx-auto after:rounded-full">
          Our services
        </h2>
        <div className="mt-12">
          <p className="text-gray-500 text-base">
            At RAW engineering we{" "}
            <a className="font-black text-[#7aa271]" href="/products">
              supply
            </a>{" "}
            and purchase quality secondhand lathes, milling machines and
            accessories for the home workshop machinist. We specialise in myford
            lathes, milling machines, spare parts and accessories. Whatever you
            may require for your machine, we will endeavour to supply whatever
            you require whether that maybe oil for your ways, headstock &
            gearbox, drive belts, bearings, paints or accessories. If we don't
            have it in stock we will source it for you at a cost your pocket
            will like.
          </p>
        </div>

        <div>
          <h3 className="mt-4 text-lg font-bold text-gray-800">
            Engineering Projects
          </h3>
          <div className="mt-4">
            <p className="text-gray-500 text-sm">
              RAW Engineering can now offer bespoke engineering services from
              milling to lathe work, from one off projects to batch work{" "}
              <a className="font-black text-[#7aa271]" href="#contact">
                contact us
              </a>{" "}
              with your drawings and we will supply you with a quote.
            </p>
          </div>
        </div>

        <div className="flex max-sm:flex-col justify-center gap-6 mt-12">
          <button
            type="button"
            className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-main bg-main hover:bg-transparent hover:text-main transition-all duration-300"
          >
            <a href="#contact">Contact us</a>
          </button>
          <button
            type="button"
            className="text-gray-800 min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            <a href="#products">Products</a>
          </button>
        </div>
      </div>
    </div>
  );
};
