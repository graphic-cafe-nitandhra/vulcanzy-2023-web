import Image from 'next/image';
import Link from 'next/link';
import vul_logo from '../public/assets/imgs/Vulcanzy_logo.png';
export const Navbar = ({}) => {
  return (
    <div className="home">
      <div className="nav w-full bg-transparent fixed top-0 left-0 text-white text-2xl">
        <ul className="flex justify-between items-center">
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
          <div className="flex w-8/12 justify-between  ">
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
            <li className="mr-10">
              <Link href="/about">About Us</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
