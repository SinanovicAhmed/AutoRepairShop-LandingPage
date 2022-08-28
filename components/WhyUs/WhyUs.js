import Image from 'next/image';
import Card from './Card';

const WhyUs = () => {
  return (
    <div className="w-[100%] relative">
      <Image
        layout="fill"
        className="object-center object-cover pointer-events-none"
        src="/CarBg.png"
        alt="car background"
        quality={100}
      />
      <div className="w-[80%] max-w-[1400px] m-auto pt-[175px]">
        <h1
          className="text-center lg:text-start text-[40px] text-white font-gothic font-bold mb-[50px]"
          data-aos="fade-right">
          Why <span className="text-[#407AC1]">Choose</span> Us?
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between w-[100%] pb-[150px]">
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
