import React from "react";

const NavLink = ({ linkName }) => {
  return (
    <li>
      <a
        href={`#${linkName}`}
        className="text-sm tracking-wide text-gray-700 relative group"
      >
        {linkName}
        <span className="absolute left-0 -bottom-1 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
};

export default NavLink;
