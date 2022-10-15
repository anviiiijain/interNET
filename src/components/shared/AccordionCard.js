/**
 *
 * AccordionCard
 *
 */
import React, { useState } from "react";
import { ReactComponent as DownArrowIcon } from "../../assets/DownArrowIcon.svg";

export function AccordionCard(props) {
  const { heading, children } = props;
  const [active, setActive] = useState(false);

  return (
    <div>
      {/* HEADING */}
      <div
        className="flex justify-between pb-3 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <div className=" flex-1 font-semibold text-secondary text-xl md:text-2xl">
          {heading}
        </div>
        <DownArrowIcon
          className={`mt-0.5 transform transition-transform duration-1000 ${
            active === true ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* HIDDEN CONTENT */}
      <div
        className={`text-sm md:text-lg text-justify text-gray-600 w-10/12 transform transition-all ease-in-out overflow-hidden ${
          active === true ? "max-h-96 duration-1000" : "max-h-0 duration-500"
        }`}
      >
        {children}
      </div>
      <hr className="my-3" />
    </div>
  );
}
