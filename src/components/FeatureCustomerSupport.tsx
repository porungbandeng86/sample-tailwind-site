import React from 'react';
import Image from 'next/image';
import Feature2 from '../../public/assets/feature-2.svg';
import GreenButton from '../../public/assets/green-button.svg';
import FeatureListItem from './FeatureListItem';

const items = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
];

const FeatureCustomerSupport = () => {
  return (
    <div className="flex flex-col gap-x-6 sm:flex-row">
      <Image
        src={Feature2}
        alt="Feature 1 image"
        className="hidden w-1/2 sm:block"
      />
      <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
        <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
          Customer Support
        </h3>
        <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Get in touch with your customers
        </h1>
        <Image
          src={Feature2}
          alt="feature 1 image"
          className="pt-[24px] sm:hidden"
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

        <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
          Learn More{' '}
          <span>
            <Image src={GreenButton} alt="Learn more" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default FeatureCustomerSupport;
