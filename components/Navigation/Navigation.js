import Image from 'next/image';
import HamburgerMenu from './Hamburger';
import ContactButton from '../assets/ContactButton';
import Link from 'next/link';
const Navigation = () => {
  return (
    <div className="w-[80%] max-w-[1400px] h-[70px] m-auto mt-[10px] flex justify-between items-center">
      <Image src="/SashaLogo.png" alt="me" width="196" height="66" priority />
      <ul className="hidden w-[40%] min-w-[400px] lg:flex items-center justify-around font-gothic font-bold text-[16px]">
        <Link href="#services">
          <a>SERVICES</a>
        </Link>
        <Link href="#about">
          <a>ABOUT US</a>
        </Link>
        <Link href="#contact">
          <a>GET IN TOUCH</a>
        </Link>
      </ul>
      <span className="hidden lg:flex">
        <ContactButton mainColor="black" secondaryColor="white" color="black" />
      </span>
      <HamburgerMenu />
    </div>
  );
};

export default Navigation;
