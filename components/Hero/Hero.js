import ContactButton from '../assets/ContactButton';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:items-start md:flex-row justify-between w-[80%] max-w-[1400px] m-auto mt-[70px]  relative">
      <div className="max-w-[450px] lg:w-[40%] lg:min-w-[450px] pt-[50px]">
        <h1 className="text-[44px] font-bold font-gothic pb-[25px] leading-[123%]">
          Your Trusted Expert Mehanic, Based in <br />
          <span className="text-[#407AC1] font-gothic">Lansing</span>, MI
        </h1>
        <p className="font-roboto text-[16px] text-[#00000090] pb-[25px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus quam in pharetra,
          malesuada nec. Faucibus quisque quis a quam. Semper arcu ac.
        </p>
        <div className="flex items-center">
          <ContactButton mainColor="black" secondaryColor="white" color="black" />
          <button className="flex items-center pl-[23px]">
            <p className="pr-[11px] font-gothic font-[16px] font-bold text-[#407AC1]">Services</p>
            <Image
              src="/arrow.svg"
              alt="me"
              width="10px"
              height="20px"
              className="animate-bounce"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-around lg:flex-row lg:justify-between lg:w-[50%] lg:min-w-[450px]">
        <div className="flex h-[100px] mb-[20px] min-w-[223px] lg:mb-0 justify-between items-center flex-col">
          <Image src="/star.png" alt="me" width="29px" height="29px" />
          <p className="font-roboto text-[#00000090] text-center">
            Profiessional Approach to Work <br /> & Respect for Reservations
          </p>
        </div>
        <div className="flex h-[100px] min-w-[223px] justify-between items-center flex-col">
          <Image src="/avatars.svg" alt="me" width="165px" height="33px" />
          <p className="font-roboto text-[#00000090] text-center">
            Profiessional Approach to Work <br /> & Respect for Reservations
          </p>
        </div>
      </div>
      <div className="hidden lg:block absolute w-[80%] max-w-[950px] mt-[35px] right-[-100px] bottom-[-110px]">
        <Image src="/Car.png" alt="me" width="930px" height="400px" />
      </div>
    </div>
  );
};

export default Hero;
