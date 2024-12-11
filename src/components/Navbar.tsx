import React from 'react';
import Image from 'next/image';
import Logo from '../../public/assets/Logo.svg';
import User from '../../public/assets/User.svg';
import Menu from '../../public/assets/Menu.svg';
import { ThemeSwitcher } from './theme/theme-switcher';

const navLinks = [
  { name: 'Features' },
  { name: 'Pricing' },
  { name: 'Enterprise' },
  { name: 'Careers' },
];

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between py-[16px] px-[20px] lg:container lg:mx-auto ">
      {/* logo and navlinks */}
      <div className="flex items-center">
        <Image src={Logo} alt="logo" />
        <div className="hidden lg:flex pl-[74px] gap-[56px]">
          {navLinks.map((item, index) => (
            <p key={index} className=" font-medium cursor-pointer">
              {item.name}
            </p>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="flex items-center gap-2">
        {/* <p className="hidden lg:block font-medium text-[#36485c] pr-[56px]">
          Open an Account
        </p> */}
        <ThemeSwitcher />

        <div className="flex items-center gap-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium  lg:block">Sign in</span>
        </div>

        <Image src={Menu} alt="Menu" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
