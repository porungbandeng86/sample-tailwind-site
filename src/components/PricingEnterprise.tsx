import React from 'react';

const PricingEnterprise = () => {
  return (
    <div className="w-full md:w-[60%] xl:w-full md:self-center xl:self-stretch rounded-[8px] bg-[#F5F4FF] p-8 flex flex-col lg:justify-between shadow-md">
      <div>
        <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
          Enterprise
        </h3>
        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
          Perfect for big companies
        </p>

        <h2 className="pt-4 text-2xl font-medium lg:text-[32px] text-[#5F7896]">
          Custom
        </h2>

        <p className="pt-4 text-[16px] text-[#36485C] text-sm xl:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className="pt-2 text-[16px] text-[#36485C] text-sm xl:text-base">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
        Contact Us
      </button>
    </div>
  );
};

export default PricingEnterprise;
