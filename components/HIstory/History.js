import Image from 'next/image';

const History = () => {
  return (
    <div className="w-[100%] h-[650px] md:h-[380px] lg:h-[320px] bg-[#0D0D0D] mb-[140px] ">
      <div className="w-[80%] h-[100%] mt-[115px] relative m-auto flex flex-col md:flex-row items-center justify-start md:justify-between">
        <div className="flex items-center md:pb-[130px]">
          <h2
            className="text-white text-[44px] text-bold font-gothic pl-[16px]"
            data-aos="fade-right">
            <Image src="/history-icon.png" alt="me" width="24px" height="24px" layout="fixed" />{' '}
            Since 1997
          </h2>
        </div>
        <div
          className="w-[320px] h-[130px] sm:w-[350px] sm:h-[160px] bg-[#407AC1] ml-[-160px] sm:ml-[-175px] md:ml-[0px] left-[53%] md:left-4 bottom-0 absolute"
          data-aos="fade-up"></div>
        <div
          className="w-[320px] h-[130px] sm:w-[350px] sm:h-[160px] ml-[-160px] sm:ml-[-175px] md:ml-[0px] left-[50%] md:left-0 bottom-[-12px] absolute"
          data-aos="fade-up">
          <Image src="/history-image.png" alt="me" width="350px" height="211px" />
        </div>
        <div className="flex flex-col lg:flex-row w-[50%] justify-around">
          <div className="flex flex-col items-center py-[20px]" data-aos="fade-left">
            <Image src="/parts-icon.png" alt="me" width="23px" height="20px" layout="fixed" />
            <h1 className="font-gothic text-[24px] font-bold text-white py-[5px]">30,000+</h1>
            <p className="text-white font-roboto text-[16px] text-center">Changed parts yearly</p>
          </div>

          <div className="flex flex-col items-center py-[20px]" data-aos="fade-left">
            <Image src="/clients-icon.png" alt="me" width="26x" height="22px" layout="fixed" />
            <h1 className="font-gothic text-[24px] font-bold text-white py-[5px]">10,000+</h1>
            <p className="text-white font-roboto text-[16px] text-center">Happy Clients</p>
          </div>

          <div className="flex flex-col items-center py-[20px]" data-aos="fade-left">
            <Image src="/vehicles-icon.png" alt="me" width="27px" height="18px" layout="fixed" />
            <h1 className="font-gothic text-[24px] font-bold text-white py-[5px]">15,000+</h1>
            <p className="text-white font-roboto text-[16px] text-center">Fixed Vehicles</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
