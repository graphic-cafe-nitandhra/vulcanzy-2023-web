import Image from 'next/image';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import vul_logo from '../public/assets/imgs/Vulcanzy_logo.png';

const Navbar = ({}) => {
  const [isOpen, setOpen] = useState(false);
  const expand = () => {
    if (isOpen) {
      document.querySelector('.menu').classList.add('hidden');
    } else {
      document.querySelector('.menu ').classList.remove('hidden');
    }
  };

  return (
    <div className="home font-elMassir">
      <div className="bg-black md:bg-transparent md:bg-gradient-to-b from-black to-transparent w-full fixed top-0 left-0 text-white text-2xl z-10 ">
        <ul className="flex flex-wrap justify-between md:items-center flex-col md:flex-row items-start p-3">
          <li className="flex w-full md:w-auto justify-between items-center">
            <Link href="/" className="flex flex-col items-center">
              <img
                className="h-10 md:h-20 w-auto"
                src="./assets/imgs/Vulcanzy_logo.png"
                alt="Logo"
              />
              <label>Vulcanzy</label>
            </Link>
            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} onToggle={expand} />
            </div>
          </li>
          <div
            className={`menu text-center ${
              isOpen ? 'flex' : 'hidden'
            } md:flex flex-wrap md:w-8/12 w-full justify-between flex-col md:flex-row gap-3 duration-600`}
          >
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
