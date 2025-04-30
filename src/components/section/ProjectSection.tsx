import { ProjectList } from "@/utils/ProjectList";
import ProjectCard from "../ProjectCard";

function ProjectSection() {
  return (
    <div className="flex w-full flex-col container justify-center items-center mx-auto gap-4 overflow-hidden px-4 pb-30 pt-8">
      <h1 className="font-manrope font-bold">Portfolio</h1>
      <h1 className="text-4xl text-black font-manrope font-bold text-center py-5">
        Explore My Exciting Projects
      </h1>
      <h1 className="text-normal font-manrope text-center">
        A showcase of my development skills and creativity.
      </h1>
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-4 pt-12">
        {ProjectList.map((item, index) => {
          const delay = 0.2 + index * 0.2;
          return (
            <ProjectCard
              title={item.title}
              describe={item.describe}
              image={item.image}
              link={item.link}
              stack={item.stack}
              delay={delay}
            />
          );
        })}
      </div>
      <div className="">
        <button className="text-black font-bold py-1 px-4 bg-black/5 rounded-md border border-solid border-black/10">
          View All
        </button>
      </div>
    </div>
  );
}

export default ProjectSection;
