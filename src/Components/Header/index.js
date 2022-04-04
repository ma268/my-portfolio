import React from "react";
import { Cta } from "../Common";
import Headshot from "../../assets/img/greyJumperHeadshot.png";

function Header() {
  return (
    <header
      id="home"
      className="h-screen w-full flex flex-col place-content-center"
    >
      <img
        src={Headshot}
        alt="headshot"
        className="w-32 mx-auto my-4 rounded-full ring-4 ring-green-200"
      />
      <div className="mb-10 text-center">
        <p className="font-extrabold text-6xl mb-7">Michael Asaad</p>
        <p className=" text-xl">
          A pharmacist turned FullStack Software Engineer with over seven years
          of experience.
          <br /> Currently working at{" "}
          <a
            className=" text-green-600 hover:text-green-700"
            href="https://www.taina.tech/"
            target="_blank"
            rel="noreferrer"
          >
            TAINA Technology
          </a>{" "}
          &#38; creator of{" "}
          <a
            className=" text-green-600 hover:text-green-700"
            href="https://simplifyingcode.com/"
            target="_blank"
            rel="noreferrer"
          >
            SimplifyingCode.com
          </a>
        </p>
      </div>
      <div className="mx-auto flex gap-x-3">
        <Cta actionName="Contact me" link="#contact" />
        <Cta
          actionName="Dowload my free ebook"
          link="https://simplifyingcode.com/simplifying-code-welcome"
          isSecondary
          target="_blank"
        />
      </div>
      <a href="#work" alt="Scroll Down" id="scoll_down" className="">
        Scroll Down
      </a>
    </header>
  );
}

export default Header;
