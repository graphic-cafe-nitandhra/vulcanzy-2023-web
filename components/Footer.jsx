import Image from 'next/image';
import vul_logo from '../public/assets/imgs/Vulcanzy_logo.png';
export const Footer = ({}) => {
  return (
    <footer className="flex bg-black items-center w-full relative text-white">
      <div className="absolute left-0">
        <Image
          className="h-5 foot_logo md:h-12 w-auto px-4"
          src={vul_logo}
          alt="Logo"
        ></Image>
      </div>
      <div className="absolute foot-txt right-0 px-4">
        <p>© Copyright GC-NIT Andhra Pradesh 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
