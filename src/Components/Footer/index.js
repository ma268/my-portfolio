import React from "react";
import Logo from "../Navbar/Logo";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-green-200 p-20 border-t-4 border-green-100">
      <Logo />
      <Socials />
    </footer>
  );
};

export default Footer;
