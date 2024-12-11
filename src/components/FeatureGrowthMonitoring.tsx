import React from 'react';
import Image from 'next/image';
import Feature3 from '../../public/assets/feature-3.svg';
import PinkButton from '../../public/assets/pink-button.svg';

const FeatureGrowthMonitoring = () => {
  return (
    <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
      <Image
        src={Feature3}
        alt="Feature 1 image"
        className="hidden w-1/2 sm:block"
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
        <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">
          Growth Monitoring
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Monitor your sites new subscribers
        </h1>
        <Image
          src={Feature3}
          alt="feature 1 image"
          className="pt-[24px] sm:hidden"
        />
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Stay on top of things and revamp your work process with our
          game-changing feature. Get a birds eye view with our customizable
          dashboard.
        </p>

        <div className="flex w-full gap-x-[24px] text-[#172026">
          <div className="w-1/2 flex flex-col gap-3">
            <h3 className="text-[20px] font-medium ]">100+</h3>
            <p className="text-[#36485C] ">Lorem ipsum dolor sit</p>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <h3 className="text-[20px] font-medium">800+</h3>
            <p className="text-[#36485C]">Conse adipiscing elit</p>
          </div>
        </div>

        <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
          Learn More{' '}
          <span>
            <Image src={PinkButton} alt="Learn more" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default FeatureGrowthMonitoring;
