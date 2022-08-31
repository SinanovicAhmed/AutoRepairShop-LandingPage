import ContactButton from '../assets/ContactButton';
import Image from 'next/image';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="flex flex-col items-center lg:items-start md:flex-row justify-between w-[80%] max-w-[1400px] m-auto mt-[20px] md:mt-[70px] relative">
      <div className="max-w-[450px] lg:w-[40%] lg:min-w-[450px] pt-[50px]" data-aos="fade-right">
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
          <Link href="#services">
            <button className="flex items-center ml-[25px] hover:ml-[30px] transition-all drop-shadow-md">
              <p className="pr-[11px] font-gothic font-[16px] font-bold text-black">Services</p>

              <Image
                src="/arrow.svg"
                alt="me"
                width="10px"
                height="20px"
                className="animate-bounce"
                layout="fixed"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-around pt-[50px] md:pt-[0px] xl:flex-row lg:justify-between lg:w-[50%] lg:min-w-[450px]">
        <div
          className="flex md:ml-[20px] lg:ml-[0px] h-[100px] mb-[20px] min-w-[223px] xl:mb-0 justify-between items-center flex-col"
          data-aos="fade-down">
          <Image src="/Star.png" alt="me" width="29px" height="29px" layout="fixed" />
          <p className="font-roboto text-[#00000090] text-center">
            Profiessional Approach to Work <br /> & Respect for Reservations
          </p>
        </div>
        <div
          className="flex md:ml-[20px] lg:ml-[0px] h-[100px] min-w-[223px] justify-between items-center flex-col"
          data-aos="fade-down">
          <Image src="/avatars.png" alt="me" width="128px" height="37px" layout="fixed" />
          <p className="font-roboto text-[#00000090] text-center">
            Profiessional Approach to Work <br /> & Respect for Reservations
          </p>
        </div>
      </div>
      <div
        className="hidden lg:block absolute w-[80%] max-w-[950px] mt-[35px] right-[-100px] bottom-[-140px]"
        data-aos="fade-left">
        <Image src="/Car.png" alt="me" width="934px" height="398px" />
      </div>
    </div>
  );
};

export default Hero;
