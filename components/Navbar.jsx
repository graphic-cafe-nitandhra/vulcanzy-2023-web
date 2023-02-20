import Image from 'next/image';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import vul_logo from '../public/assets/imgs/Vulcanzy_logo.png';
export const Navbar = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const expand = () => {
    if (isOpen) {
      document.querySelector('.menu').classList.add('hidden');
    } else {
      document.querySelector('.menu ').classList.remove('hidden');
    }
  };

  return (
    <div className="home">
      <div className="bg-black md:bg-transparent md:bg-gradient-to-b from-black to-transparent w-full fixed top-0 left-0 text-white text-2xl z-10 ">
        <ul className="flex flex-wrap justify-between md:items-center flex-col md:flex-row items-start">
          <li className="flex-column text-center ml-10">
            <Link href="/">
              <Image
                className="mt-5"
                src={vul_logo}
                alt="Logo"
                width={151}
                height={53}
              ></Image>
              <label>Vulcanzy</label>
            </Link>
          </li>
          <div className="menu text-center md:flex flex-wrap md:w-8/12 w-full mr-10 justify-between flex-col md:flex-row hidden gap-6 duration-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/sponsors">Sponsors</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="">
              <Link href="/about">About Us</Link>
            </li>
          </div>
          <li className="absolute top-8 right-5 min-[920px]:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} onToggle={expand} />
          </li>
        </ul>
      </div>
    </div>
  );
};
