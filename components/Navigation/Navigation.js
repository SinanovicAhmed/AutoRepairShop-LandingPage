import Image from 'next/image';
import HamburgerMenu from './Hamburger';
import ContactButton from '../assets/ContactButton';
import Link from 'next/link';
const Navigation = () => {
  return (
    <>
      <div id="hero" className="w-[1px] h-[1px] absolute top-0"></div>
      <div className="w-100% bg-white sticky top-0 z-10 drop-shadow-lg">
        <div className="w-[80%] max-w-[1400px] h-[70px] m-auto mt-[10px] flex justify-between items-center">
          <Image src="/SashaLogo.png" alt="me" width="196" height="66" priority layout="fixed" />
          <div className="hidden w-[40%] min-w-[400px] lg:flex items-center justify-around font-gothic font-bold text-[16px]">
            <Link href="#services">
              <a className="hover:border-b-2 border-[#407AC1] transition-all duration-75">
                SERVICES
              </a>
            </Link>
            <Link href="#about">
              <a className="hover:border-b-2 border-[#407AC1] transition-all duration-75">
                ABOUT US
              </a>
            </Link>
            <Link href="#contact">
              <a className="hover:border-b-2 border-[#407AC1] transition-all duration-75">
                GET IN TOUCH
              </a>
            </Link>
          </div>
          <span className="hidden lg:flex">
            <ContactButton mainColor="black" secondaryColor="white" color="black" />
          </span>
          <HamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Navigation;
