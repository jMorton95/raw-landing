import WhatsApp from "/whatsapp.svg";
import Ebay from "/ebay-logo.svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-8 font-[sans-serif] tracking-wide mt-16">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-10">
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">About Us</h4>
            <p className="text-gray-400 text-base">
              We are a family-run business specialising in lathes, milling
              machines, and purchasing complete workshops with personalized
              service.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
                  Online Store
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
                  Workshop Purchasing
                </a>
              </li>
              <li>
                <a
                  href={import.meta.env.VITE_EBAY}
                  target="_blank"
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
                  Ebay Retailer
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-base">
                Wakefield, West Yorkshire
              </li>
              <li className="text-gray-400 text-base">
                England, United Kingdom
              </li>
              <li className="text-gray-400 text-base">
                <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                  {import.meta.env.VITE_EMAIL}
                </a>
              </li>
              <li className="text-gray-400 text-base">
                <a
                  href={import.meta.env.VITE_WA}
                  rel="noopener"
                  target="_blank"
                >
                  +44 7961 695562
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">
              Extra Links
            </h4>
            <ul className="flex items-center flex-wrap gap-y-3 space-x-6">
              <li>
                <a href={import.meta.env.VITE_WA}>
                  <img className="h-8 w-8" src={WhatsApp} />
                </a>
              </li>

              <li>
                <a href={import.meta.env.VITE_EBAY}>
                  <img className="h-7 w-7" src={Ebay} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 px-4 -mx-8 text-center mt-10">
        <p className="text-gray-400 text-base">
          © RAW Engineering. {new Date().getFullYear().toString()}
        </p>
      </div>
    </footer>
  );
};
