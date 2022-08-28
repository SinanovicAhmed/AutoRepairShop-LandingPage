import { useState } from 'react';
import ContactSVG from './ContactSVG';
const ContactButton = (props) => {
  const [hoverIcon, setHoverIcon] = useState(false);
  const style =
    props.color === 'black'
      ? 'border-black hover:bg-black hover:text-white'
      : 'bg-[#407AC1] text-white hover:border-solid hover:border-[1px] hover:border-[#407AC1] hover:text-[#407AC1] hover:bg-white';
  return (
    <button
      onMouseEnter={() => {
        setTimeout(() => {
          setHoverIcon(true);
        }, 100);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setHoverIcon(false);
        }, 100);
      }}
      className={`flex justify-center items-center px-[36px] py-[12px] border-solid border-[1px] ${style} transition-color delay-100 duration-150`}>
      <p className="m-0 p-0 font-gothic font-[16px] font-bold pr-[8px]">Call us</p>
      <ContactSVG
        width="12px"
        height="12px"
        fill={hoverIcon ? props.secondaryColor : props.mainColor}
      />
    </button>
  );
};
export default ContactButton;
