import React from "react";
import PropTypes from "prop-types";

Cta.defaultProps = {
  isSecondary: false,
};

function Cta({ actionName, isSecondary, link, target }) {
  return (
    <a href={`${link}`} target={target}>
      <div
        className={`${
          isSecondary
            ? "bg-green-200 hover:bg-green-300"
            : "bg-green-600 hover:bg-green-700 text-white"
        } px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium cursor-pointer`}
      >
        {actionName}
      </div>
    </a>
  );
}

Cta.propTypes = {
  actionName: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isSecondary: PropTypes.bool,
};

export default Cta;
