'use client';
import FaqAccordion from './FaqAccordion';

const Faq = () => {
  return (
    <div className="px-5 lg:container lg:px-20 mx-auto">
      <div className="flex flex-col w-full py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-6">
        <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
          <h3 className="text-[#EB2891] text-[14px] font-medium lg:text-base">
            Frequently Asked Questions
          </h3>
          <h1 className="py-4 text-2xl xl:text-3xl  font-medium text-[#172026] ">
            Lets clarify some of your questions
          </h1>
          <p className="text-[#36485C] pb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>

        <div className="lg:w-2/3">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
