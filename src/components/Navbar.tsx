import React from "react";
import { Button } from "./ui/button";
type NavProps = {
  setCurrentSection: (section: number) => void;
};
function Navbar({ setCurrentSection }: NavProps) {
  const navList = [
    { title: "Home", value: 0 },
    { title: "About me", value: 1 },
    { title: "Projects", value: 2 },
    { title: "Contact me", value: 3 },
  ];
  return (
    <div className="w-full flex px-20 bg-white justify-between z-100 py-2">
      <div className="flex gap-3 items-center">
        <p className="px-3 font-lobster text-2xl">Abada</p>
        {navList.map((data) => {
          return (
            <Button
              onClick={() => {
                setCurrentSection(data.value);
              }}
              variant={"ghost"}
            >
              {data.title}
            </Button>
          );
        })}
      </div>
      <div>
        <Button>Send</Button>
      </div>
    </div>
  );
}

export default Navbar;
