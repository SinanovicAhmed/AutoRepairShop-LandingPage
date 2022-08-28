import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
const ScrollBackToTop = () => {
  const [scrollShow, setscrollShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setscrollShow(true);
      } else {
        setscrollShow(false);
      }
    });
  }, []);
  return (
    <>
      {' '}
      <AnimatePresence>
        {scrollShow ? (
          <Link href="#hero">
            <motion.button
              initial={{ y: '50px', opacity: 0 }}
              animate={{ y: '0px', opacity: 1 }}
              exit={{ y: '50px', opacity: 0 }}
              className="w-[50px] h-[50px] bg-[black] rounded-full fixed bottom-5 right-5 z-10">
              <Image
                layout="fill"
                className="object-center object-cover pointer-events-none"
                src="/arrowTop.png"
                alt="arrow"
                quality={100}
              />
              Scroll
            </motion.button>
          </Link>
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollBackToTop;
