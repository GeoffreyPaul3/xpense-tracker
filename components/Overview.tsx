import { overview } from "@/constants/data";
import Image from "next/image";

const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className="lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]">
      <div className="container mx-auto flex justify-end overflow-hidden">
        <Image 
          src={productImg} 
          alt="" 
          data-aos="fade-up" 
          data-aos-offset="300" 
          />
      </div>
    </section>
  );
};

export default Overview;
