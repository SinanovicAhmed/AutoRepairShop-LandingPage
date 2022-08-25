import Image from 'next/image';
import { useState } from 'react';
import ContactSVG from './ContactSVG';
import HamburgerMenu from './Hamburger';
const Navigation = () => {
  const [hoverIcon, setHoverIcon] = useState(false);

  return (
    <div className="w-[80%] max-w-[1400px] h-[70px] m-auto mt-[10px] flex justify-between items-center">
      <Image src="/SashaLogo.png" alt="me" width="196" height="66" />
      <ul className="hidden w-[40%] min-w-[400px] lg:flex items-center justify-around font-gothic font-bold text-[16px]">
        <li>SERVICES</li>
        <li>ABOUT US</li>
        <li>GET IN TOUCH</li>
      </ul>
      <button
        onMouseEnter={() => {
          setHoverIcon(true);
        }}
        onMouseLeave={() => {
          setHoverIcon(false);
        }}
        className="hidden lg:flex justify-center items-center px-[36px] py-[12px] border-solid border-[1px] border-black hover:bg-[#0D0D0D] hover:text-white transition-colors">
        <p className="m-0 p-0 font-gothic font-[16px] font-bold pr-[8px]">Call us</p>
        <ContactSVG width="12px" height="12px" fill={hoverIcon ? 'white' : 'black'} />
      </button>
      <HamburgerMenu />
    </div>
  );
};

export default Navigation;
