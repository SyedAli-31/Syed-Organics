import Container from "@/components/Container";
import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/constants";
import React from "react";

const FaqsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80">
      <Container className="max-w-4xl px-6 sm:px-8 lg:px-10 py-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl">
        <Title className="text-4xl font-extrabold text-green-500 text-center drop-shadow-lg">
          Frequently Asked Questions
        </Title>
        <p className="text-gray-300 text-center mt-2">
          Have questions about <span className="text-green-300 font-semibold">Syed Organics</span>? Find your answers below.
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-full mt-6"
          defaultValue="item-0"
        >
          {faqsData?.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group border-b border-gray-600/50"
            >
              <AccordionTrigger className="text-left text-xl font-semibold text-green-400 group-hover:text-green-300 hover:no-underline hover:scale-[1.02] transition-all duration-300 ease-in-out">
                {faq?.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-lg px-4 py-2">
                {faq?.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FaqsPage;
