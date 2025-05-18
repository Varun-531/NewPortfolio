import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <div className="flex gap-3 px-50">
      <img src="/Inbox.svg" height={100} width={400} alt="Inbox" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Contact me</h1>
        <p className="text-xl text-center font-semibold text-slate-500">
          I'm always looking for new and exciting opportunities to work on
          projects and collaborate with others.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
