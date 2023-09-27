import { footer } from "@/constants/data";

import Copyright from "./Copyright";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { logo, links, legal, newsletter, form } = footer;

  return (
    <footer className="pt-[142px] pb-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8">
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300">
            <Image src={logo} alt="" />
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="500">
            <div className="text-2xl uppercase font-medium mb-6">Links</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <Link
                      className="font-medium hover:text-accent transition-all"
                      href={href}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="700">
            <div className="text-2xl uppercase font-medium mb-6">Legal</div>
            <ul className="flex flex-col gap-y-3">
              {links.map((item, index) => {
                const { href, name } = item;
                return (
                  <li key={index}>
                    <Link
                      className="font-medium hover:text-accent transition-all"
                      href={href}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="900">
            <div className="text-2xl uppercase font-medium mb-6">
              {newsletter.title}
            </div>
            <div className="text-xl text-light mb-[18px]">
              {newsletter.subtitle}
            </div>
            <form className="max-w-[349px] mb-[10px]">
              <div className="h-[62px] p-[7px] flex border border-dark rounded-lg">
                <input
                  className="w-full h-full pl-6 border-none outline-none placeholder:text-dark"
                  type="text"
                  placeholder={form.placeholder}
                />
                <button className="btn btn-sm bg-accent hover:bg-accentHover w-[102px] text-white">
                  {form.btnText}
                </button>
              </div>
            </form>
            <span className="text-sm text-light">{form.smallText}</span>
          </div>
        </div>
        <hr />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;