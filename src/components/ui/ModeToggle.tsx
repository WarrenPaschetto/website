import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";


export function ModeToggle() {
  const { setTheme } = useTheme()
  const [light, setLight] = React.useState(false)

  return (
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setLight(!light)
            if(!light) {
              setTheme("dark")
            } else {
              setTheme("light")
          }
        }}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:bg-white hover:stroke-[#FCA311]" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:stroke-[#F2E9E4] dark:hover:stroke-[#FCA311]"/>
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
};

