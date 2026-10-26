import React from "react";
import PropTypes from "prop-types";

function Cta({ actionName, link, target, variant }) {
  const baseClasses =
    "transition duration-200 ease-in-out";

  const variants = {
    primary:
      "px-6 py-3 bg-accent text-white rounded-md hover:bg-accent-dark",

    minimal:
      "text-accent underline underline-offset-4 hover:text-accent-dark",

    outline:
      "px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-white",
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
