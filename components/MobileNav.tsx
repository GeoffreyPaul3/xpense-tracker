import Link from "next/link";

import { nav } from "@/constants/data";

const MobileNav = () => {
  return (
    <div className="bg-accent/95 w-full h-full">
      <ul className="h-full flex flex-col justify-center items-center gap-y-8">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index} className="text-4xl font-semibold">
              <Link href={href} className="link text-white text-xl">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
