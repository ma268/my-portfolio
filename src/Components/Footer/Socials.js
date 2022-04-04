import React from "react";
import { FiLinkedin, FiGithub, FiInstagram, FiYoutube } from "react-icons/fi";
// import { RiStackOverflowLine } from "react-icons/ri";
import { SiHashnode } from "react-icons/si";

function Socials() {
  return (
    <div className="text-center pt-2">
      <small>Coded By Michael Asaad © {new Date().getFullYear()}</small>
      <div className="pt-4">
        <div className="flex flex-row gap-8 align-middle justify-center">
          <a
            href="https://uk.linkedin.com/in/michaelasaad"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <a href="https://github.com/ma268" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a
            href="https://simplifyingcode.com/"
            target="_blank"
            rel="noreferrer"
          >
            <SiHashnode />
          </a>
          <a
            href="https://www.instagram.com/simplifyingcode/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
          {/* <a
            href="https://stackoverflow.com/users/2921450/ma268?tab=profile"
            target="_blank"
            rel="noreferrer"
          >
            <RiStackOverflowLine />
          </a> */}
          <a
            href="https://www.youtube.com/channel/UCKMmJrwjDwGVACckoFE-D3g"
            target="_blank"
            rel="noreferrer"
          >
            <FiYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socials;
