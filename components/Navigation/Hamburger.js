import { useState } from 'react';
import Image from 'next/image';
import ContactSVG from '../assets/ContactSVG';
import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';
const HamburgerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <div
        className="lg:hidden"
        onClick={() => {
          setActive(!active);
        }}>
        <Image
          src="/menuicon.svg"
          alt="me"
          width="25px"
          height="25px"
          className="cursor-pointer"
          layout="fixed"
        />
      </div>
      <AnimatePresence>
        {active && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute z-10 right-0 top-[70px] bg-white w-screen flex-col shadow-lg shadow-black-20/5 p-[20px] lg:hidden">
            <Link href="#services">
              <a className="mb-[15px] w-full flex justify-center font-gothic font-bold text-[16px] hover:cursor-pointer">
                SERVICES
              </a>
            </Link>
            <Link href="#about">
              <a className="my-[15px] w-full flex justify-center font-gothic font-bold text-[16px] hover:cursor-pointer">
                ABOUT US
              </a>
            </Link>
            <Link href="#contact">
              <a className="my-[15px] w-full flex justify-center font-gothic font-bold text-[16px] hover:cursor-pointer">
                GET IN TOUCH
              </a>
            </Link>
            <li className="my-[15px] w-full flex justify-center items-center px-[15px] py-[5px] bg-[#0D0D0D] font-gothic rounded hover:cursor-pointer hover:bg-[#272727] transition-colors">
              <p className="m-0 p-0 font-gothic font-[16px] font-bold text-white pr-[8px]">
                CALL US
              </p>
              <ContactSVG width="12px" height="12px" fill="white" />
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
export default HamburgerMenu;
