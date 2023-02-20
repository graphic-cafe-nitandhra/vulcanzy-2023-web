import Image from 'next/image';
import vul_logo from '../public/assets/imgs/Vulcanzy_logo.png';
const Footer = ({}) => {
  return (
    <footer className="flex justify-between bg-black items-center w-full relative text-white">
      <Image
        className="h-5 foot_logo md:h-12 w-auto px-4"
        src={vul_logo}
        alt="Logo"
      ></Image>
      <div className="foot-txt px-4">
        <p>© Copyright GC-NIT Andhra Pradesh 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
