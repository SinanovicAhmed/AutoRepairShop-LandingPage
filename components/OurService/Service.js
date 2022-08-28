import Image from 'next/image';

const Service = () => {
  return (
    <div className="w-[80%] m-auto" id="services">
      <h2 className="text-center text-[44px] font-gothic text-bold pb-[75px]" data-aos="fade-up">
        Our <span className="text-[#407AC1]">Services</span>
      </h2>
      <div className="flex lg:justify-around flex-col lg:flex-row items-center">
        <div className="w-[240px] flex flex-col md:flex-row md:w-[100%] lg:flex-col md:justify-between">
          <div className="md:px-[10px]" data-aos="fade-up">
            <h1 className="text-[18px] font-bold text-[#407AC1] pb-[10px]">Auto Mechanic</h1>
            <p className="text-[14px] font-roboto leading-[21px] text-[#00000090] pb-[40px]">
              You can rest assured that we use the highest quality products and equipment to service
              every vehicle
            </p>
          </div>
          <div className="md:px-[10px]" data-aos="fade-up">
            <h1 className="text-[18px] font-bold text-[#407AC1] pb-[10px]">Auto Electric</h1>
            <p className="text-[14px] font-roboto leading-[21px] text-[#00000090] pb-[40px]">
              If you have a dead battery, misfiring starter, or alternator, we are the right choice
              for you
            </p>
          </div>
          <div className="md:px-[10px]" data-aos="fade-up">
            <h1 className="text-[18px] font-bold text-[#407AC1] pb-[10px]">Auto inspection</h1>
            <p className="text-[14px] font-roboto leading-[21px] text-[#00000090] pb-[40px]">
              Sasha`s Auto Repair provides professional auto inspections to keep your vehicle
              operating at its best
            </p>
          </div>
        </div>
        <div className="max-w-[500px] px-[20px]" data-aos="fade">
          <Image src="/car-services.svg" alt="me" width="1964px" height="1646px" loading="lazy" />
        </div>

        <div className="w-[240px] flex flex-col md:flex-row md:w-[100%] lg:flex-col md:justify-between">
          <div className="md:px-[10px]" data-aos="fade-up">
            <h1 className="text-[18px] font-bold text-[#407AC1] pb-[10px]">Oil Change</h1>
            <p className="text-[14px] font-roboto leading-[21px] text-[#00000090] pb-[40px]">
              Proper maintenance and the scheduling of consistent oil changes are essential to the
              longevity of vehicle
            </p>
          </div>
          <div className="md:px-[10px]" data-aos="fade-up">
            <h1 className="text-[18px] font-bold text-[#407AC1] pb-[10px]">Wheel alignment</h1>
            <p className="text-[14px] font-roboto leading-[21px] text-[#00000090] pb-[40px]">
              Wheel alignment refers to the positioning of your wheels relative to the vehicle
              itself
            </p>
          </div>
          <div className="md:px-[10px]" data-aos="fade-up">
            <h1 className="text-[18px] font-bold text-[#407AC1] pb-[10px]">Auto AC Repair</h1>
            <p className="text-[14px] font-roboto leading-[21px] text-[#00000090] pb-[40px]">
              If you are looking for a mechanic who can perform auto AC repairs, look no further
              than Sasha`s Auto Repair
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
