import Image from 'next/image';
import ContactButton from '../ContactButton';

const Contact = () => {
  return (
    <div className="w-[100%] bg-background">
      <div
        className="w-[80%] max-w-[1400px] m-auto pb-[150px] flex flex-col lg:flex-row justify-between items-center"
        id="contact">
        <div
          className="flex flex-col items-start justify-between w-[100%] lg:w-[40%]"
          data-aos="fade-right">
          <h1 className="text-white text-[40px] font-gothic pt-[90px]">Get In Touch</h1>
          <p className='text-["#FFFFFF90"] text-white text-[16px] py-[19px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus quam in pharetra,
            malesuada nec. Faucibus quisque quis a quam. Semper arcu ac.
          </p>
          <div className="flex flex-center items-center py-[15px]">
            <Image src="/locationIcon.png" alt="me" width="16px" height="20px" className="m-auto" />
            <p className="text-white text-[16px] font-roboto pl-[10px]">
              455 Lentz Ct, Lansing, MI 48917, United States
            </p>
          </div>
          <div className="flex flex-center items-center py-[15px]">
            <Image src="/phoneIcon.png" alt="me" width="19px" height="19px" className="m-auto" />
            <p className="text-white text-[16px] font-roboto pl-[10px]">(517) 897-8136</p>
          </div>
          <div className="flex flex-center items-center py-[15px]">
            <Image src="/mailIcon.png" alt="me" width="19px" height="15px" className="m-auto" />
            <p className="text-white text-[16px] font-roboto pl-[10px]">sasha@repair.com</p>
          </div>
          <div className="flex flex-center items-center pt-[15px] pb-[30px]">
            <Image src="/clockIcon.png" alt="me" width="19px" height="19px" className="m-auto" />
            <p className="text-white text-[16px] font-roboto pl-[10px]">Mon - Sun: 9AM - 7PM</p>
          </div>
          <ContactButton mainColor="white" secondaryColor="#407AC1" color="blue" />
        </div>
        <div
          className="w-[80%] lg:w-[60%] lg:max-w-[600px] flex flex-col pt-[100px] lg:pt-[30px] lg:pl-[20px]"
          data-aos="fade-up">
          <Image src="/map.png" alt="me" width="620px" height="540px" />
          <div
            className="w-[100%] flex flex-col md:flex-row items-center pt-[25px]"
            data-aos="fade-up">
            <h2 className="w-[100%] md:w-[40%] text-center md:text-start text-white text-[14px] md:text-[16px] font-roboto">
              JOIN US ON SOCIAL MEDIA
            </h2>
            <div className="flex items-center justify-between items-center w-[80%] md:w-[60%]">
              <Image src="/instaIcon.png" alt="me" width="30px" height="30px" />
              <Image src="/facebookIcon.png" alt="me" width="30px" height="30px" />
              <Image src="/pinterestIcon.png" alt="me" width="30px" height="30px" />
              <Image src="/iconContact.png" alt="me" width="30px" height="30px" />
              <Image src="/googleIcon.png" alt="me" width="30px" height="30px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
