import React from "react";
import Headshot from "../../assets/img/greyJumperHeadshotWhiteBg.png";
import HeaderSocials from "./HeaderSocials";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  return (
    <header
      id="home"
      className="min-h-screen w-full flex flex-col justify-center bg-white px-6"
    >
      {/* Headshot */}
      <img
        src={Headshot}
        alt="Michael Asaad headshot"
        className="w-28 mx-auto mb-10 rounded-full border border-gray-200"
      />

      {/* Main Content */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Michael Asaad
        </h1>

        <p className="text-2xl text-gray-800 mb-6">
          Software Engineering Team Lead & Product Builder
        </p>

        <p className="text-[18px] leading-[1.7] text-gray-600 max-w-[60ch] mx-auto">
          10+ years building production systems in C# / .NET, React and Azure.
          Currently building a SaaS product focused on simplifying weekly meal
          planning for busy parents.
        </p>
      </div>

      {/* CTAs */}
      <div className="mx-auto flex flex-col gap-4 md:flex-row md:gap-10">
        <a
          href="#work"
          className="px-6 py-3 bg-black text-white rounded-md hover:opacity-80 transition"
        >
          View My Work
        </a>

        <a
          href="#building"
          className="px-6 py-3 text-black underline underline-offset-4 hover:opacity-60 transition"
        >
          See What I’m Building
        </a>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#work"
        className="absolute right-12 bottom-10 rotate-90 text-sm text-gray-400 hidden lg:block"
      >
        Scroll <BsArrowRight className="inline-block ml-2" />
      </a>

      <HeaderSocials />
    </header>
  );
}

export default Header;
