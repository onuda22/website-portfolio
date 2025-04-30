import BoxIcon from "@/assets/BoxIcon";
import React from "react";
import { Button } from "./ui/button";
import RowIcon from "@/assets/RowIcon";

interface CardProps {
  title: string;
  describe: string;
  link: string;
}
function Card({ title, describe, link }: CardProps) {
  return (
    <div className="flex flex-col gap-y-5 min-h-[250px]">
      <div className="flex flex-col gap-y-4 md:gap-y-4">
        <BoxIcon />
        <h1 className="text-white text-2xl font-manrope">{title}</h1>
        <h1 className="text-white text-normal font-manrope flex-grow">
          {describe}
        </h1>
      </div>
      <div>
        <Button
          variant={"secondary"}
          size={"sm"}
          onClick={() => {
            return link;
          }}
        >
          Learn More <RowIcon />
        </Button>
      </div>
    </div>
  );
}

export default Card;
