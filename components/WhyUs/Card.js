import Image from 'next/image';
const Card = (props) => {
  const image = props.image;
  const paragraph = props.paragraph;
  const header = props.header;
  return (
    <div
      className="max-w-[360px] flex flex-col items-start justify-stretch bg-black px-[17px] shadow-lg shadow-[#FFFFFF10] md:shadow-none mx-[10px] my-[10px] md:my-[0px]"
      data-aos="fade-up">
      <div className="pt-[40px]">
        <Image src={image} alt="me" width="32px" height="27px" className="m-auto" />
      </div>
      <h1 className="text-[20px] text-white font-gothic font-bold pt-[26px] pb-[20px]">{header}</h1>
      <p className="text-[#FFFFFF90] text-[16px] font-roboto pb-[40px]">{paragraph}</p>
    </div>
  );
};

export default Card;
