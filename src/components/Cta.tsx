import Image from 'next/image';
import Arrow from '../../public/assets/arrow.png';

const Cta = () => {
  return (
    <div className="px-5 lg:container lg:px-20 mx-auto">
      <div className="w-full rounded-[16px] py-[56px] px-[32px] text-center  lg:my-[60px]  lg:py-[89px] bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 ">
        <h3 className="text-white   text-2xl lg:text-4xl   xl:text-5xl leading-normal font-medium  ">
          Monitor your website like a pro
        </h3>
        <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
          Join over 800+ happy site owners boosting productivity and efficiency!
        </p>

        <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
          <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium">
            Try for free
          </button>

          <button className="flex w-full items-center justify-center  gap-x-3 mt-[32px] text-white font-medium lg:w-fit lg:mt-0">
            Contact Sales{' '}
            <span>
              <Image src={Arrow} alt="Learn More" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
