import React from "react";

const NavButton = ({ label, active }) => {
  return (
    <a href={`#${label.toLowerCase()}`} className="no-underline">
      <button
        className={`text-blue-500 font-semibold text-lg ${
          active ? "bg-gray-900 text-white" : ""
        } px-3 py-1 rounded-md hover:bg-gray-200 transition-all`}
      >
        {label}
      </button>
    </a>
  );
};

export default NavButton;
