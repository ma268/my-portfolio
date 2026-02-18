import React from "react";
import { Cta } from "../Common";
import Headshot from "../../assets/img/greyJumperHeadshot.png";
import HeaderSocials from "./HeaderSocials";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <header
      id="home"
      className="h-screen w-full flex flex-col place-content-center"
    >
      <img
        src={Headshot}
        alt="Michael Asaad headshot"
        className="w-32 mx-auto my-4 rounded-full ring-4 ring-green-200"
      />

      <div className="mb-10 text-center">
        <p className="font-extrabold text-6xl mb-4">Michael Asaad</p>

        <p className="text-2xl font-semibold mb-4">
          Software Engineering Team Lead & Product Builder
        </p>

        <p className="text-xl max-w-2xl mx-auto">
          10+ years building and delivering production systems in C# / .NET,
          React and Azure.
          <br />
          Currently building a SaaS product focused on helping busy parents
          simplify weekly meal planning.
        </p>
      </div>

      <div className="mx-auto flex gap-x-3">
        <Cta actionName="View My Work" link="#work" />
        <Cta actionName="See What I’m Building" link="#building" isSecondary />
      </div>

      <a
        href="#work"
        id="scroll_down"
        className="absolute right-12 rotate-90 font-light invisible lg:visible"
      >
        Scroll Down <BsArrowRight className="inline-block" />
      </a>

      <HeaderSocials />
    </header>
  );
}

export default Header;
