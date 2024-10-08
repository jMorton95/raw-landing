export const WorkshopPurchaseContentBody = () => {
  return (
    <>
      <hr color="#e5e7eb" className="mb-2 mt-2 h-1/4 mx-auto w-[100%]" />
      <div id="workshop-purchase" className="p-4 font-sans">
        <div className="max-w-3xl mx-auto">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800">
              Products and Services
            </h2>
          </div>
          <hr className="my-4" />
          <div className="grid gap-12">
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Homeworkshop Lathes and Milling Machines
              </h3>
              <div className="mt-4">
                <p className="text-gray-500 text-sm">
                  At RAW engineering we{" "}
                  <a className="font-black text-[#7aa271]" href="/products">
                    supply
                  </a>{" "}
                  and{" "}
                  <a className="font-black text-[#7aa271]" href="/#interests">
                    purchase
                  </a>{" "}
                  quality secondhand lathes, milling machines and accessories
                  for the home workshop machinist. We specialise in myford
                  lathes, milling machines, spare parts and accessories.
                  Whatever you may require for your machine, we will endeavour
                  to supply whatever you require whether that maybe oil for your
                  ways, headstock & gearbox, drive belts, bearings, paints or
                  accessories. If we don't have it in stock we will source it
                  for you at a cost your pocket will like.
                </p>
                <a
                  href="/products"
                  className="font-black text-[#7aa271] text-sm mt-6"
                >
                  Browse our products
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Advertise your unwanted/wanted workshop items for free
            </h3>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">
                Sell your unwanted workshop items for free, keep your listing on
                our site for as long as you need at absolutely no cost to you,
                just email{" "}
                <a
                  className="font-bold text-[#7aa271]"
                  href={`mailto:${import.meta.env.VITE_EMAIL}`}
                >
                  rawengineering01@gmail.com
                </a>{" "}
                with your advert and leave the rest to us. Alternatively if you
                are looking for a machine or simply some advice we will also
                publish this for free, just{" "}
                <a
                  className="font-bold text-[#7aa271]"
                  href={`mailto:${import.meta.env.VITE_EMAIL}`}
                >
                  email
                </a>{" "}
                with your requirements.
              </p>
            </div>
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
        </div>
      </div>
    </>
  );
};
