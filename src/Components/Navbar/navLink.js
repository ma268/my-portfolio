import React from "react";

const NavLink = ({ linkName }) => {
  return (
    <li className="hover:bg-gray-100 px-4 py-2 rounded-md">
      <a href={`#${linkName}`}>{linkName}</a>
    </li>
  );
};

export default NavLink;
