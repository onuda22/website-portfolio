import RowIcon from "@/assets/RowIcon";
import { Button } from "./ui/button";
interface ProjectProps {
  title: string;
  describe: string;
  stack: string[];
  link: string;
  image: string;
}
function ProjectCard({ title, describe, stack, link, image }: ProjectProps) {
  return (
    <div className="flex flex-col gap-4 mb-5">
      <img src={image} width={"100%"} />
      <h1 className="text-2xl font-manrope">{title}</h1>
      <h1 className="text-normal font-manrope">{describe}</h1>
      <div className="flex flex-wrap gap-2">
        {stack.map((data) => {
          return (
            <h1 className="text-black font-bold py-1 px-4 bg-black/5 rounded-md border border-solid border-black/10">
              {data}
            </h1>
          );
        })}
      </div>
      <div>
        <Button
          variant={"secondary"}
          size={"sm"}
          onClick={() => {
            return link;
          }}
          className="text-black font-semibold"
        >
          View project <RowIcon color="black" />
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;
