import { DiscoverList } from "@/utils/DiscoverList";
import Card from "../Card";
function AboutSection() {
  return (
    <div className="flex flex-col container px-5 md:px-30 gap-y-12 pb-20">
      <h1 className="text-white text-3xl md:text-4xl  md:w-3/5 font-manrope pt-10 md:pt-0 ">
        Discover Oki's streamlined development process from concept to
        completion.
      </h1>
      <div className="grid grid-cols-1 grid-row-4 md:grid-cols-4 md:grid-row-1 gap-10">
        {DiscoverList.map((data, index) => {
          const delay = 0.2 + index * 0.2;
          return (
            <Card
              key={index}
              title={data.title}
              describe={data.describe}
              link={data.link}
              delay={delay}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutSection;
