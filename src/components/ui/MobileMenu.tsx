import { Menu } from "lucide-react";
import { Button } from "./Button"
import { ModeToggle } from "./ModeToggle"

export default function MobileMenu() {

    return (
      <div className="flex items-center justify-between bg-[#dee2ef] dark:bg-[#2A2A2E] dark:text-[#F2E9E4]">
        <div className="flex justify-start">
        <Menu className="h-7 w-7 hover:stroke-[#FCA311] dark:stroke-[#F4F4F9] dark:hover:stroke-[#FCA311] m-2"/>
        </div>
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="lg"
            className=" dark:bg-[#F4F4F9] bg-[#111827] text-[#ffffff] dark:text-black hover:bg-[#FCA311] hover:text-black dark:hover:bg-[#FCA311] dark:hover:text-black"
          >Client Login</Button>
        <div className="m-1">{ModeToggle()}</div>
      </div>
      </div>
    );
  }
