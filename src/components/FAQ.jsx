import React from "react";
import { useState } from "react";

function FAQ() {
  const [arrow, SetArrow] = useState(false);

  const data = [
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum unde, magnam ex ipsum voluptates exercitationem perspiciatis sequi excepturi eius quos. Sunt officia placeat amet neque beatae itaque sint iusto optio.",
    },

    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum unde, magnam ex ipsum voluptates exercitationem perspiciatis sequi excepturi eius quos. Sunt officia placeat amet neque beatae itaque sint iusto optio.",
    },

    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum unde, magnam ex ipsum voluptates exercitationem perspiciatis sequi excepturi eius quos. Sunt officia placeat amet neque beatae itaque sint iusto optio.",
    },

    {
      id: 4,
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit ?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum unde, magnam ex ipsum voluptates exercitationem perspiciatis sequi excepturi eius quos. Sunt officia placeat amet neque beatae itaque sint iusto optio.",
    },
  ];

  const [selected, Setselected] = useState(null);

  const HandleClick = (i) => {
    if (selected == i) {
      return Setselected(null);
    }
    Setselected(i);
  };

  return (
    <div className="p-10 ">
      <div className="text-center max-w-lg ml-auto mr-auto ">
        <h1 className="text-4xl font-poppins font-bold lg:text-5xl ">FAQ</h1>
        <p className="text-xl text-zinc-500 font-sfpro pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
      </div>

      <div className=" grid grid-cols-1 gap-20  font-sfpro my-20 sm:grid-cols-2 lg:grid-cols-2 ">
        {data.map((item, i) => (
          <>
            <div className="">
              <div className="justify-between flex items-center ">
                <h1 key={item.id} className="font-bold text-xl">
                  {item.question}
                </h1>

                <svg
                  onClick={() => HandleClick(i)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`ease-in duration-200 w-6 h-6 cursor-pointer ${
                    selected == i ? "rotate-180" : ""
                  }`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <p
                className={`ease-in-out duration-300 pt-5 ${
                  selected == i ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
