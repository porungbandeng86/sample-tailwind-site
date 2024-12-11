import React from 'react';
import Image from 'next/image';
import BlurArrow from '../../public/assets/blue-button.svg';
import Gradient from '../../public/assets/Gradient.svg';
import HeroImage from '../../public/assets/Image.svg';
import Google from '../../public/assets/Google.svg';
import Slack from '../../public/assets/Slack.svg';
import Truspilot from '../../public/assets/Trustpilot.svg';
import Cnn from '../../public/assets/CNN.svg';
import Clutch from '../../public/assets/Clutch.svg';

const Hero = () => {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-2xl  font-medium text-[#172026] lg:text-4xl xl:text-[64px] xl:leading-[72px]">
          Start monitoring your website like a pro
        </h1>
        <p className="text-center pt-6 text-[#36485C] text-sm lg:text-[18px] lg:leading-7">
          Get a birds eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency!
        </p>

        {/* buttons */}
        <div className="flex w-full pt-8 pb-8 justify-center gap-x-6 text-xs md:text-sm lg:text-base ">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
            Try for free
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            View Pricing
            <span>
              <Image src={BlurArrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

      {/* hero image */}
      <div className="relative flex h-full w-full justify-center  ">
        {/* gradient */}
        <Image
          src={Gradient}
          alt="gradient"
          className="min-h-[500px]  w-full object-cover lg:h-auto"
          priority
        />

        {/* hero image */}
        <div className="absolute bottom-5 flex flex-col w-full items-center ">
          <Image
            src={HeroImage}
            alt="hero image"
            className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:h-[550px]  xl:-mb-28 xl:h-auto xl:w-[70%]  "
          />
          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-white text-center lg:text-[18px]">
              Trusted by these companies
            </p>
            <div className="grid grid-cols-3 justify-center justify-items-center px-5 align-middle lg:grid-cols-5 ">
              <Image src={Google} alt="google" />
              <Image src={Slack} alt="slack" />
              <Image src={Truspilot} alt="truspilot" className="self-center" />
              <Image src={Cnn} alt="cnn" />
              <Image src={Clutch} alt="clutch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
