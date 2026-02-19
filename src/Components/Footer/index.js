import React from "react";
import Logo from "../Navbar/Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-40">
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center gap-8">

        <Logo />

        <Socials />

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Michael Asaad
        </p>

      </div>
    </footer>
  );
};

export default Footer;
