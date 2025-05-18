import React from "react";
import dev from "../assets/dev.svg";
// import { HyperText } from "../components/magicui/hyper-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "./ui/button";
const HeroSection = () => {
  return (
    <div>
      <div className="min-h-screen w-full">
        <div className="bg-slate-100 m-10 p-5 rounded-lg flex justify-between items-center px-20 h-full">
          <div className="flex flex-col gap-3 items-center w-[40%]">
            <h1
              //   startOnView={true}
              //   duration={100}
              className="text-5xl font-bold my-3"
            >
              👋 Hi! I'am <span className="text-blue-500">Gopi Varun</span>
            </h1>
            <h1 className="text-xl font-bold text-slate-600 text-center">
              Full Stack Developer, currently working at{" "}
              <span className="text-black">Razorpay</span> as Product
              Development Engineer.
            </h1>
            <Button className="cursor-pointer">Browse Portfolio</Button>
          </div>
          <img src={dev} height="auto" width={400} alt="developer" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
