import React from "react";
import { Button } from "./ui/button";
import NavButton from "./NavButton";
import { Mail } from "lucide-react";
import { Rocket } from "lucide-react";
import { House, Code, UserRound } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-50 rounded">
      <div>
        <h1 className="text-2xl font-bold font-acme">Gopi Varun</h1>
      </div>
      <div>
        <ul className="flex gap-4">
          <Button>
            <House />
            Home
          </Button>
          <Button>
            <UserRound />
            About
          </Button>
          <Button>
            <Code />
            Portfolio
          </Button>
          <Button>
            <Rocket />
            Projects
          </Button>
        </ul>
      </div>
      <div>
        {/* <div className="px-2 py-1 bg-slate-100 shadow-md rounded-md hover:shadow-lg transition-all duration-300"> */}
        {/* <NavButton label="Contact" /> */}
        <Button>
          <Mail /> Contact Me
        </Button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NavBar;
