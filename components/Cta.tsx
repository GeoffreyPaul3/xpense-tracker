import { cta } from "@/constants/data";
import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi";

const Cta = () => {
  const { title, subtitle, btnText, img1, img2 } = cta;

  return (
    <section className="section bg-cta bg-cover bg-left-top">
      <div className="max-w-[1340px] mx-auto px-[25px]">
        <div className="max-w-[920px] mx-auto text-center">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="h2 text-white mb-6"
          >
            {title}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-2xl lg:text-4xl text-white"
          >
            {subtitle}
          </p>
        </div>
        <div className="flex justify-between">
          <Image
            src={img1}
            alt=""
            className="hidden xl:flex"
            data-aos="zoom-out-right"
            data-aos-delay="700"
          />
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto"
          >
            {btnText} <HiOutlineChevronDown />
          </button>
          <Image
            src={img2}
            alt=""
            data-aos="zoom-out-left"
            data-aos-delay="700"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
