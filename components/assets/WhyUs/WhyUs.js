import Image from 'next/image';
import Card from './Card';
import Contact from './Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {
  return (
    <div clasName="w-[100%] bg-" style={{ backgroundImage: 'url(CarBg.png)' }}>
      <div className="w-[80%] max-w-[1400px] m-auto pt-[175px]">
        <h1
          className="text-center md:text-start text-[40px] text-white font-gothic font-bold mb-[50px]"
          data-aos="fade-right">
          Why <span className="text-[#407AC1]">Choose</span> Us?
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between w-[100%] pb-[150px]">
          <Card
            image="/heartIcon.png"
            header="Trusted & Experienced"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus quam in pharetra,
              malesuada nec. Faucibus quisque quis a quam. Semper arcu ac."
          />
          <Card
            image="/calendarIcon.png"
            header="Respect For Reservation"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus quam in pharetra, malesuada nec. Faucibus quisque quis a quam. Semper arcu ac."
          />
          <Card
            image="/peopleIcon.png"
            header="Educated staff"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus quam in pharetra,
              malesuada nec. Faucibus quisque quis a quam. Semper arcu ac."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
