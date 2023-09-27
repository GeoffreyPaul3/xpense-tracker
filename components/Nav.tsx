import { nav } from "@/constants/data";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-x-10">
        {nav.map((item, index) => {
          const { href, name } = item;
          return (
            <li key={index}>
              <Link 
                href={href}
                className="hover:text-accent transition-all" 
              >
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
};

export default Nav;
