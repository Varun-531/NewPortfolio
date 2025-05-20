import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ContactSection = () => {
  const handleClick = (e) => {
    e.preventDefault();
    toast.success("Your message has been sent. I'll get back to you soon.");
    e.target.reset();
  };

  return (
    // <div className="flex gap-3 justify-center items-center">
    //   <img src="/Inbox.svg" height={100} width={400} alt="Inbox" />
    //   <div className="flex flex-col justify-center items-center w-1/2">
    //     <h1 className="text-3xl font-bold">Contact me</h1>
    //     <p className="text-xl text-center font-semibold text-slate-500">
    //       I'm always looking for new and exciting opportunities to work on
    //       projects and collaborate with others.
    //     </p>
    //     <Textarea placeholder="Enter your message" />
    //   </div>
    // </div>
    <div>
      <div className="flex gap-10 justify-center items-center">
        <div className="w-150 flex flex-col gap-2">
          <h1 className="text-3xl font-bold py-2">Contact me!</h1>
          <p className="text-md font-semibold text-start text-slate-600">
            I'm always looking for new and exciting opportunities to work on
            projects and collaborate with others.
          </p>
          <div className="flex justify-center items-center">
            <img src="/Inbox.svg" height={100} width={400} alt="Inbox" />
          </div>
          <p className="text-sm text-start text-slate-600 font-semibold">
            Or send the mail to{" "}
            <a href="mailto:contact@sahilgupta.xyz" className="text-blue-500">
              chvarun2908@gmail.com
            </a>
          </p>
        </div>
        <form onSubmit={handleClick} className="flex flex-col gap-4 w-100">
          <p className="text-sm text-start text-slate-600 font-semibold">
            Fill the form below to get in touch with me.
          </p>

          <Label htmlFor="name">Name</Label>
          <Input type="text" placeholder="Name" id="name" />
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label>Who are you? 🤔</Label>
          <RadioGroup defaultValue="Student">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Student" id="Student" />
              <Label htmlFor="Student">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Recruiter" id="Recruiter" />
              <Label htmlFor="Recruiter">Recruiter</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Other" id="Other" />
              <Label htmlFor="Other">Other</Label>
            </div>
          </RadioGroup>
          <Label htmlFor="message">Your message</Label>
          <Textarea
            placeholder="Message"
            id="message"
            className="resize-none h-32"
          />
          <Button type="submit">
            <Send />
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
