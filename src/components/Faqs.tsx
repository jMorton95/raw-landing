import { useState } from "react";

type FaqData = {
  text: string;
  content: string;
  startOpen: boolean;
};

const RenderableFaqs: FaqData[] = [
  {
    text: "What are the event's timings and schedule?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ultrices, ligula ac laoreet congue, nulla libero mollis neque, ut
              dictum eros erat a dui. Fusce fermentum, ex at sollicitudin
              sagittis, eros sapien viverra purus, sed feugiat risus nisi at
              massa. Nulla at nunc efficitur, aliquet sapien id, fermentum erat.
              Donec auctor, metus vel tempor efficitur, leo ligula ultricies
              nulla, in efficitur augue leo a justo.`,
    startOpen: true,
  },
  {
    text: "Are there any transportation or parking options available for attendees?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              pharetra ex ut eros congue, non suscipit orci dapibus. Sed aliquam
              justo et turpis posuere, nec malesuada libero fringilla. Morbi
              pellentesque consectetur purus at egestas. Nulla eget eros et erat
              congue luctus ac a ligula. Praesent elementum odio at velit
              consectetur accumsan.`,
    startOpen: false,
  },
  {
    text: "Is there a dress code or any specific attire required for the event?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
              fringilla, vestibulum neque nec, ornare dui. Integer fermentum
              libero in auctor blandit. Maecenas at lacus luctus, tempor nisl ut,
              varius erat. Phasellus ultricies, nunc a tincidunt luctus, sem
              turpis iaculis purus, nec vestibulum dolor libero vitae lectus.
              Nulla facilisi.`,
    startOpen: false,
  },
  {
    text: "Can I bring a guest or family member to the event?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              consequat nisi a magna hendrerit posuere. Nam ultrices lacus eget
              felis luctus, eget tempor dolor luctus. Sed efficitur mauris nec
              risus pretium, nec venenatis magna feugiat. Mauris tempor enim ac
              lorem fermentum, a hendrerit eros luctus. Integer id ultricies arcu.
              Aenean luctus sit amet sapien vel porta.`,
    startOpen: false,
  },
];

export const Faqs = () => {
  return (
    <div className="font-[sans-serif] divide-y rounded-lg max-w-6xl mx-auto px-4 my-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Frequently asked questions
        </h2>
      </div>
      {RenderableFaqs.map((faq) => (
        <Faq text={faq.text} content={faq.content} startOpen={faq.startOpen} />
      ))}
    </div>
  );
};

const Faq = (props: { text: string; content: string; startOpen: boolean }) => {
  const [open, setOpen] = useState<boolean>(props.startOpen);
  return (
    <div role="accordion">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
      >
        <span className="mr-4">{props.text}</span>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 fill-current ml-auto shrink-0"
            viewBox="0 0 124 124"
          >
            <path
              d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
              data-original="#000000"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 fill-current ml-auto shrink-0"
            viewBox="0 0 42 42"
          >
            <path
              d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
              data-original="#000000"
            />
          </svg>
        )}
      </button>
      <div className={`${!open && "hidden"} py-4`}>
        <p className="text-sm text-gray-800">{props.content}</p>
      </div>
    </div>
  );
};
