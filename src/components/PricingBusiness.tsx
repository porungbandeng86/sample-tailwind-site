import Image from 'next/image';
import Check from '../../public/assets/check.svg';

const PricingBusiness = () => {
  return (
    <div className="w-full md:w-[60%] xl:w-full md:self-center xl:self-stretch  rounded-[8px] bg-[#4328EB] p-8 flex flex-col shadow-md">
      <div className="mb-auto">
        <h3 className="font-medium text-white text-[18px] lg:text-xl">
          Business
        </h3>
        <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
          Perfect for small businesses
        </p>

        <h2 className="pt-4 text-2xl font-medium text-white lg:text-[32px]">
          500$<span className="text-[#F4F8FA]">/mo</span>
        </h2>

        <ul className="flex flex-col gap-y-2 pt-4 text-[#F4F8FA] text-sm xl:text-base ">
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
          <li className="flex items-center gap-x-2">
            <span>
              <Image src={Check} alt="included" />
            </span>
            Lorem ipsum dolor sit amet
          </li>
        </ul>
      </div>
      <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium  ">
        Get Started
      </button>
    </div>
  );
};

export default PricingBusiness;
