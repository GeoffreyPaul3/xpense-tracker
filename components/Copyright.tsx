import { copyright } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

const Copyright = () => {
  const { link1, link2, copyText, social } = copyright;

  return (
    <div
      className="flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between"
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="200"
    >
      <div className="flex gap-x-6">
        <Link className="hover:text-accent transition" href={link1.href}>
          {link1.name}
        </Link>
        <Link className="hover:text-accent transition" href={link2.href}>
          {link2.name}
        </Link>
      </div>
      <div>{copyText}</div>
      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          const { href, icon } = item;

          return (
            <li key={index}>
              <Link href={href}>
                <Image src={icon} alt="" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
