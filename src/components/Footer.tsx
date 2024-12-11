import Image from 'next/image';
import Logo from '../../public/assets/Logo.svg';
import Facebook from '../../public/assets/Facebook.svg';
import Twitter from '../../public/assets/X.svg';
import Feed from '../../public/assets/Feed.svg';

const Footer = () => {
  const today = new Date();

  return (
    <div className="px-5 lg:container lg:px-20 mx-auto">
      {' '}
      <div className="pt-[80px] pb-[40px]">
        <div className="flex items-center justify-center gap-x-[12px]">
          <Image src={Logo} alt="Logo" />
          <p className="font-bold text-[#36485C] text-[17px]">
            {' '}
            © Copyright {today.getFullYear()}
          </p>
        </div>

        <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
          <Image src={Facebook} alt="Facebook" />
          <Image src={Feed} alt="Feed" />
          <Image src={Twitter} alt="Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
