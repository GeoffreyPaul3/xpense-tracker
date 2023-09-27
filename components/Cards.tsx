"use client";

import { useState } from "react";

import { product } from "@/constants/data";
import Image from "next/image";

const Cards = () => {
  const [index, setIndex] = useState(1);

  const { cards } = product;

  return (
    <div className="flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]">
      {cards.map((card, cardIndex) => {
        const { icon, title, subtitle, delay } = card;
        return (
          <div 
           key={cardIndex}
           className="flex flex-col 
           gap-y-[30px] lg:flex-row 
           lg:gap-x-[30px]"
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-delay="delay"
          >
            <div
              onClick={() => setIndex(cardIndex)}
              className={`${
                index === cardIndex && "bg-white shadow-2xl"
              } w-[350px] h-[350px]
              flex flex-col 
             justify-center mx-auto p-[65px] 
             text-center items-center rounded-[12px] 
             cursor-pointer transition-all`}
            >
              <div>
                <Image src={icon} alt="" />
              </div>
              <div className="mb-3 text-[30px] font-medium">{title}</div>
              <p className="mb-6 text-light">{subtitle}</p>
              {index === cardIndex && (
                <Image
                  src="/product/cards/arrow.svg"
                  alt=""
                  width={30}
                  height={30}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
