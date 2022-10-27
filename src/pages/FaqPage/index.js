/**
 *
 * FaqPage
 *
 */
import React from "react";
import { Layout } from "../../components/shared/Layout";
import { AccordionCard } from "../../components/shared/AccordionCard";
import { ReactComponent as Faq } from "../../assets/Faq.svg";
import { faqs } from "./utils";

export function FaqPage(props) {
  return (
    <Layout>
      <div className="bg-smoke">
        <div className="px-5 md:w-5/6 md:px-0 md:mx-auto">
          {/* SVG */}
          <div className="flex items-center justify-evenly py-16 md:mb-32">
            <Faq />
          </div>
          {/* FAQS */}
          <div className="">
            {faqs?.map((faq) => (
              // INDIVIDUAL CARDS
              <AccordionCard heading={faq.question} key={faq.faqId}>
                <p>{faq.answer}</p>
              </AccordionCard>
            ))}
            {/* HEADING */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
