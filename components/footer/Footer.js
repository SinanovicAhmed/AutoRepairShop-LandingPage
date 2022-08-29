import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-[100%] relative">
      <div className="w-[80%] min-h-[400px] pt-[50px] m-auto flex flex-col items-center md:items-start md:flex-row md:justify-between xl:justify-start">
        <div
          className="flex flex-col justify-between w-[200px] h-[120px] xl:mr-[80px]"
          data-aos="fade-up">
          <Image src="/SashaLogo.png" alt="me" width="195px" height="66px" layout="fixed" />
          <div className="flex w-[100%] justify-between">
            <div className="hover:translate-y-[-3px] transition-all">
              <Image src="/blue-icon1.png" alt="me" width="24px" height="24px" layout="fixed" />
            </div>
            <div className="hover:translate-y-[-3px] transition-all">
              <Image src="/blue-icon2.png" alt="me" width="24px" height="24px" layout="fixed" />
            </div>
            <div className="hover:translate-y-[-3px] transition-all">
              <Image src="/blue-icon3.png" alt="me" width="24px" height="24px" layout="fixed" />
            </div>
            <div className="hover:translate-y-[-3px] transition-all">
              <Image src="/blue-icon4.png" alt="me" width="24px" height="24px" layout="fixed" />
            </div>
            <div className="hover:translate-y-[-3px] transition-all">
              <Image src="/blue-icon5.png" alt="me" width="24px" height="24px" layout="fixed" />
            </div>
          </div>
        </div>
        <div className="xl:mr-[50px] leading-8 text-center md:text-start" data-aos="fade-up">
          <h1 className="text-[16px] font-roboto text-[#407AC1] font-semibold">SERVICES</h1>
          <p className="text-[14px] font-roboto text-[#00000090]">Auto mechanic</p>
          <p className="text-[14px] font-roboto text-[#00000090]">Auto electric</p>
          <p className="text-[14px] font-roboto text-[#00000090]">Auto inspection</p>
          <p className="text-[14px] font-roboto text-[#00000090]">Oil change</p>
          <p className="text-[14px] font-roboto text-[#00000090]">Wheel alignment</p>
          <p className="text-[14px] font-roboto text-[#00000090]">Auto AC Repair</p>
        </div>
        <div className="leading-8 text-center md:text-start pb-[40px]" data-aos="fade-up">
          <h1 className="text-[14px] font-roboto text-[#407AC1] font-semibold">CONTACT</h1>
          <p className="text-[14px] font-roboto text-[#00000090]">455 Lentz Ct Lansing, MI 48917</p>
          <p className="text-[14px] font-roboto text-[#00000090]">(517) 897-8136</p>
          <p className="text-[14px] font-roboto text-[#00000090]">sasha@repair.com</p>
          <p className="text-[14px] font-roboto ">Mon - Sun: 9AM - 7PM</p>
        </div>
        <div
          className="hidden xl:block absolute bottom-0 right-0 2xl:right-[150px]"
          data-aos="fade-in">
          <Image src="/footerCar.png" alt="me" width="600px" height="295px" className="z-0" />
        </div>
        <div className="absolute bottom-0 left-0">
          <p className="text-[14px] text-[#00000090]">
            Copyright | © 2022 Sasha's Auto Repair All rights reserved. Made by BlueDuck.at
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
