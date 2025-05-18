import React from "react";

const NavButton = ({ label, active }) => {
  return (
    <button
      className={`text-blue-500 font-semibold text-lg 
        ${active ? "bg-slate-100 px-2 py-1 rounded" : "cursor-pointer"}`}
    >
      {label}
    </button>
  );
};

export default NavButton;
