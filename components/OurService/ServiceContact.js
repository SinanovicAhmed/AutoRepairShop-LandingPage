import ContactButton from '../assets/ContactButton';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ServiceContact = () => {
  return (
    <div className="w-[100%] relative">
      <div className="absolute bottom-[-100px] xl:bottom-0">
        <Image src="/brand-names.png" alt="me" width="825px" height="42px" />
      </div>
      <div className="w-[80%] flex flex-col lg:flex-row m-auto justify-between items-begin mt-[100px] md:mt-[120px] lg:mt-[140px]">
        <div className="max-w-[650px] lg:pl-[60px]" data-aos="fade-up">
          <h2 className="text-[40px] font-gothic font-bold pb-[34px]" data-aos="fade-up">
            Your Vehicle Can <span className="text-[#407AC1]">Be Up And Running</span> Again In No
            Time
          </h2>
          <p
            className="text-[16px] font-roboto text-[#00000090] pb-[34px] max-w-[450px]"
            data-aos="fade-up">
            Sasha's Auto Repair is an auto repair shop in Lansing, MI, providing auto maintenance
            services for your vehicle. With years of experience in this industry, you can rest
            assured that I will treat you and your vehicle to the best service in the area.
            <br />
            <br />
            As an expert mechanic, I tend to do every job with the utmost care and attention to
            detail, no matter what the issue may be so that your vehicle can be up and running again
            in no time.
          </p>
          <ContactButton mainColor="white" secondaryColor="#407AC1" color="blue" />
        </div>
        <div
          className="mt-[70px] max-w-[420px] lg:mt-[0px] lg:min-w-[340px] lg:pl-[20px] m-auto relative"
          data-aos="fade-left">
          <Image src="/service-mechanic.png" alt="me" width="490px" height="690px" />
          <div className="absolute w-[20%] h-[20%] bottom-0 left-[-35px] lg:left-[-25px] z-665">
            <Image src="/service-star.png" alt="me" width="140px" height="140px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;
