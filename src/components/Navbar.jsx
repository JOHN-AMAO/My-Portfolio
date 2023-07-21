import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [Toggle, setToggle] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} w-full 
      flex items-center py-5 top-0 z-20 bg-primary`}
    >
      <div
        className='w-full flex justify-between 
        items-center max-w-7x1 mx-auto  '
      >
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 1000);
          }}
        >
          <img
            src={logo}
            alt='logo'
            className='w-9 h-9 object-contain'
          />
          <p>John Amao </p>
        </Link>
        <ul
          className='list-none hidden sm:flex
          flex-row gap-10'
        >
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={Toggle ? menu : close}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!Toggle)}
          />
          <div
            className={`${
              Toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0
             mx-4 my-2 min-w-[142px] z-10 rounded-xl`}
          >
            <ul
              className='list-none flex justify-end items-start flex-col
           gap-4'
            >
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  }font-poppins text-[16px] font-medium`}
                  onClick={() => {
                    setActive(Link.title);
                    setToggle(!Toggle);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
