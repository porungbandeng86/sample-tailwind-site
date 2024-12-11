import React from 'react';
import Image from 'next/image';
import Feature1 from '../../public/assets/feature-1.svg';
import BlueButton from '../../public/assets/blue-button.svg';
import FeatureListItem from './FeatureListItem';

const items = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
];

const FeatureSalesMonitoring = () => {
  return (
    <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
      <Image
        src={Feature1}
        alt="Feature 1 image"
        className="hidden w-1/2 sm:block"
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
        <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
          Sales Monitoring
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Simplify your sales monitoring
        </h1>
        <Image
          src={Feature1}
          alt="feature 1 image"
          className="pt-[24px]   sm:hidden"
        />
        <p className="py-[24px] text-[#36485C] lg:text-[18px]">
          Stay on top of things and revamp your work process with our
          game-changing feature. Get a birds eye view with our customizable
          dashboard.
        </p>

        <ul className="flex flex-col gap-y-3 lg:text-[18px]">
          {items.map((item, index) => (
            <FeatureListItem key={index} text={item} />
          ))}
        </ul>

        <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
          Learn More{' '}
          <span>
            <Image src={BlueButton} alt="Learn more" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default FeatureSalesMonitoring;
