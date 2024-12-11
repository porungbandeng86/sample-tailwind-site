import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const items = [
  {
    question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question:
      'Nemo enim ipsam voluptarem quia voluptas sit aspernatur aui odit aut fugit?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question:
      'Sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem qu?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question:
      'Adipiscing elitminima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
  {
    question: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  },
];

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-y-4">
      {items.map((item, index) => (
        <AccordionItem
          className="bg-[#E3F1FF] px-[16px] rounded-[8px]"
          key={index}
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="text-left font-medium text-[#172026] lg:text-[18px]">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className=" text-[#36485C]">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
