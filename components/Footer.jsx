import Image from 'next/image';
import vul_logo from '../public/assets/imgs/Vulcanzy_logo.png';
const Footer = ({}) => {
  return (
    <footer className="flex justify-between bg-black items-center w-full relative text-white">
      <img
        className="h-5 foot_logo md:h-12 w-auto px-4"
        src="https://i.ibb.co/bm1G1Wg/Vulcanzy-logo.png"
        alt="Logo"
      />
      <div className="foot-txt px-4">
        <p>© Copyright GC-NIT Andhra Pradesh 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
