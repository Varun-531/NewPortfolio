import React from "react";
// import { HyperText } from "../components/magicui/hyper-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
// import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "./ui/button";
import { CoolMode } from "./magicui/cool-mode";
import { Mail, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <div>
      <div className="min-h-screen w-full">
        <div className="bg-white p-5 rounded-lg flex justify-between items-center px-20 h-full">
          <div className="flex flex-col gap-3 items-center w-[40%]">
            <TypingAnimation className="text-5xl font-bold my-3">
              👋 Hi! I'am Gopi Varun
            </TypingAnimation>
            <h1 className="text-xl font-bold text-slate-600 text-center">
              Full Stack Developer, currently working at{" "}
              <span className="text-black">Razorpay</span> as Product
              Development Engineer.
            </h1>
            <div className="flex gap-5">
              <CoolMode>
                <a href="#portfolio">
                  <Button className="cursor-pointer">Browse Portfolio</Button>
                </a>
              </CoolMode>
              <Button
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/ch-gopi-varun",
                    "_blank"
                  );
                }}
              >
                <Linkedin />
                Visit My LinkedIn
              </Button>
            </div>
          </div>
          <img
            src="/image.png"
            alt="DP"
            className="w-150 h-150 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
