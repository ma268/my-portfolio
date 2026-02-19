import React from "react";
import { FiLinkedin, FiGithub, FiYoutube } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";

function Socials() {
  return (
    <div className="flex flex-col items-center gap-8">

      <div className="flex gap-8 text-gray-500 text-xl">
        <a
          href="https://uk.linkedin.com/in/michaelasaad"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition"
        >
          <FiLinkedin />
        </a>

        <a
          href="https://github.com/ma268"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition"
        >
          <FiGithub />
        </a>

        <a
          href="https://simplifyingcode.com/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition"
        >
          <SiHashnode />
        </a>

        <a
          href="https://www.youtube.com/channel/UCKMmJrwjDwGVACckoFE-D3g"
          target="_blank"
          rel="noreferrer"
          className="hover:text-black transition"
        >
          <FiYoutube />
        </a>
      </div>

    </div>
  );
}

export default Socials;
