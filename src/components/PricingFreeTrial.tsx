import Image from 'next/image';
import Check from '../../public/assets/check.svg';

const PricingFreeTrial = () => {
  return (
    <div className="w-full md:w-[60%] xl:w-full md:self-center xl:self-stretch   rounded-[8px] bg-[#F5F4FF] p-8 flex flex-col lg:justify-between shadow-md">
      <div>
        <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
          Free Trial
        </h3>
        <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
          Perfect for testing the waters
        </p>

        <h2 className="pt-4 text-2xl font-medium lg:text-[32px]">
          <span className="text-[#5F7896]">0$/mo</span>
        </h2>

        <ul className="flex flex-col gap-y-2 pt-4 text-[#5F7896] text-sm xl:text-base  ">
          <li className="flex items-center gap-x-2">
            <span>
              <Image src={Check} alt="included" />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex items-center gap-x-2">
            <span>
              <Image src={Check} alt="included" />
            </span>
            Lorem ipsum dolor sit amet
          </li>
          <li className="flex items-center gap-x-2">
            <span>
              <Image src={Check} alt="included" />
            </span>
            Lorem ipsum dolor sit amet
          </li>
        </ul>
      </div>
      <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
        Start Trial
      </button>
    </div>
  );
};

export default PricingFreeTrial;
