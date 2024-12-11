import React from 'react';
import FeatureGrowthMonitoring from './FeatureGrowthMonitoring';
import FeatureCustomerSupport from './FeatureCustomerSupport';
import FeatureSalesMonitoring from './FeatureSalesMonitoring';

const Features = () => {
  return (
    <div className="px-5 lg:container lg:px-20 mx-auto">
      <div className="flex flex-col gap-y-[64px] py-[56px] lg:gap-y-[0px] xl:py-[120px] xl:gap-y-[80px] ">
        <FeatureSalesMonitoring />
        <FeatureCustomerSupport />
        <FeatureGrowthMonitoring />
      </div>
    </div>
  );
};

export default Features;
