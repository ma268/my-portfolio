import React from "react";
import PropTypes from "prop-types";

function Cta({ actionName, link, target, variant }) {
  const baseClasses =
    "transition duration-200 ease-in-out";

  const variants = {
    primary:
      "px-6 py-3 bg-black text-white rounded-md hover:opacity-80",

    minimal:
      "text-black underline underline-offset-4 hover:opacity-60",

    outline:
      "px-6 py-3 border border-black rounded-md hover:bg-black hover:text-white",
  };

  return (
    <a
      href={link}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant || "primary"]}`}
    >
      {actionName}
    </a>
  );
}

Cta.propTypes = {
  actionName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "minimal", "outline"]),
};

export default Cta;
