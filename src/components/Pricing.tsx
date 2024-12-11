import PricingFreeTrial from './PricingFreeTrial';
import PricingBusiness from './PricingBusiness';
import PricingEnterprise from './PricingEnterprise';

const Pricing = () => {
  return (
    <div className="px-5 lg:container lg:px-20 mx-auto">
      <div className="py-[48px] lg:py-[60px]">
        <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
          Flexible plans for you
        </h1>
        <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
          No hidden fees!
        </p>

        <div className="flex flex-col xl:flex-row  gap-y-6 gap-x-[40px] ">
          <PricingFreeTrial />
          <PricingBusiness />
          <PricingEnterprise />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
