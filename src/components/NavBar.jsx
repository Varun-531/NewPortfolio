import React from "react";
import { Button } from "./ui/button";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-100 rounded">
      <div>
        <h1 className="text-2xl font-bold font-aclonica">Gopi Varun</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <NavButton label="Home" active={false} />
          <NavButton label="Portfolio" active={false} />
          <NavButton label="About" active={false} />
          <NavButton label="Projects" active={false} />
        </ul>
      </div>
      <div>
        {/* <div className="px-2 py-1 bg-slate-100 shadow-md rounded-md hover:shadow-lg transition-all duration-300"> */}
        <NavButton label="Contact" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
