"use client";

import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { header } from "@/constants/data";

import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  //Mobile Nav
  const [mobileNav, setMobileNav] = useState(false);

  //header state
  const [isActive, setIsActive] = useState(false);

  //descture header data
  const { logo, btnText } = header;

  //scroll event

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl" : ""
      } py-8 lg:py-4 fixed w-full transition-all z-10 `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" data-aos="fade-down" data-aos-delay="1000">
          <Image src={logo} alt="/" />
        </Link>
        <div
          className="hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <Nav />
        </div>
        <button
          className="btn btn-sm btn-outline hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="1400"
        >
          {btnText}
        </button>
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <AiOutlineClose className="text-3xl text-accent" />
          ) : (
            <AiOutlineMenu className="text-3xl text-accent" />
          )}
        </button>
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[70vw] lg:hidden transition-all bg-pink-400`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
