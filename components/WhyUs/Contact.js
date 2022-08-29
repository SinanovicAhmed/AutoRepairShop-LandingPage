import Image from 'next/image';
import ContactButton from '../assets/ContactButton';

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
            <Image
              src="/locationIcon.png"
              alt="me"
              width="16px"
              height="20px"
              className="m-auto"
              loading="lazy"
              layout="fixed"
            />
            <p className="text-white text-[16px] font-roboto pl-[10px]">
              455 Lentz Ct, Lansing, MI 48917, United States
            </p>
          </div>
          <div className="flex flex-center items-center py-[15px]">
            <Image
              src="/phoneIcon.png"
              alt="me"
              width="19px"
              height="19px"
              className="m-auto"
              loading="lazy"
              layout="fixed"
            />
            <p className="text-white text-[16px] font-roboto pl-[10px]">(517) 897-8136</p>
          </div>
          <div className="flex flex-center items-center py-[15px]">
            <Image
              src="/mailIcon.png"
              alt="me"
              width="19px"
              height="15px"
              className="m-auto"
              loading="lazy"
              layout="fixed"
            />
            <p className="text-white text-[16px] font-roboto pl-[10px]">sasha@repair.com</p>
          </div>
          <div className="flex flex-center items-center pt-[15px] pb-[30px]">
            <Image
              src="/clockIcon.png"
              alt="me"
              width="19px"
              height="19px"
              className="m-auto"
              loading="lazy"
              layout="fixed"
            />
            <p className="text-white text-[16px] font-roboto pl-[10px]">Mon - Sun: 9AM - 7PM</p>
          </div>
          <ContactButton mainColor="white" secondaryColor="#407AC1" color="blue" />
        </div>
        <div
          className="w-[100%] lg:w-[60%] lg:max-w-[600px] flex flex-col pt-[100px] lg:pt-[30px] lg:pl-[20px]"
          data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114018.3083363787!2d-80.19907990878825!3d26.74207405265399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5ccb595adc1%3A0x15efc7b51fe16bde!2sWest%20Palm%20Beach%2C%20Florida%2C%20Sjedinjene%20Ameri%C4%8Dke%20Dr%C5%BEave!5e0!3m2!1sbs!2sba!4v1661724584559!5m2!1sbs!2sba"
            width="100%"
            height="450"
            title="location map"
            loading="lazy"></iframe>
          <div
            className="w-[100%] flex flex-col md:flex-row items-center pt-[25px]"
            data-aos="fade-up">
            <h2 className="w-[100%] md:w-[40%] text-center md:text-start text-white text-[14px] md:text-[16px] font-roboto">
              JOIN US ON SOCIAL MEDIA
            </h2>
            <div className="flex items-center justify-between items-center w-[80%] md:w-[60%] py-[10px]">
              <div className="hover:translate-y-[-3px] transition-all cursor-pointer">
                <Image
                  src="/instaIcon.png"
                  alt="me"
                  width="30px"
                  height="30px"
                  loading="lazy"
                  layout="fixed"
                />
              </div>
              <div className="hover:translate-y-[-3px] transition-all cursor-pointer">
                <Image
                  src="/facebookIcon.png"
                  alt="me"
                  width="30px"
                  height="30px"
                  loading="lazy"
                  layout="fixed"
                />
              </div>
              <div className="hover:translate-y-[-3px] transition-all cursor-pointer">
                <Image
                  src="/pinterestIcon.png"
                  alt="me"
                  width="30px"
                  height="30px"
                  loading="lazy"
                  layout="fixed"
                />
              </div>
              <div className="hover:translate-y-[-3px] transition-all cursor-pointer">
                <Image
                  src="/iconContact.png"
                  alt="me"
                  width="30px"
                  height="30px"
                  loading="lazy"
                  layout="fixed"
                />
              </div>
              <div className="hover:translate-y-[-3px] transition-all cursor-pointer">
                <Image
                  src="/googleIcon.png"
                  alt="me"
                  width="30px"
                  height="30px"
                  loading="lazy"
                  layout="fixed"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
