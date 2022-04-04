import React from "react";
import Scrollspy from "react-scrollspy";

import {
  RiHome7Line,
  RiCodeSSlashFill,
  RiUser4Line,
  RiShoppingBasketLine,
  RiBookReadLine,
  RiMessage3Line,
} from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50">
      <nav className="max-w-screen-lg mx-auto flex flex-row items-center justify-between p-2 md:justify-start md:space-x-10 w-min bg-green-100 mt-2 rounded-lg">
        <div className="middle-nav grow">
          <Scrollspy
            items={["home", "work", "about", "contact", "blog", "products"]}
            currentClassName="bg-green-300"
            className="flex justify-center gap-x-1"
          >
            <a className="hover:bg-green-200 p-4 rounded-full" href="#home">
              <RiHome7Line />
            </a>
            <a className="hover:bg-green-200 p-4 rounded-full" href="#work">
              <RiCodeSSlashFill />
            </a>
            <a className="hover:bg-green-200 p-4 rounded-full" href="#about">
              <RiUser4Line />
            </a>
            <a className="hover:bg-green-200 p-4 rounded-full" href="#contact">
              <RiMessage3Line />
            </a>
            <p>|</p>
            <a
              className="hover:bg-green-200 p-4 rounded-full"
              href="https://simplifyingcode.com/"
              target="_blank"
              rel="noreferrer"
            >
              <RiBookReadLine />
            </a>
            <a
              className="hover:bg-green-200 p-4 rounded-full"
              href="https://programmertees.creator-spring.com/"
              target="_blank"
              rel="noreferrer"
            >
              <RiShoppingBasketLine />
            </a>
          </Scrollspy>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
