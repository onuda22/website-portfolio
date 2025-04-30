import { logoList } from "@/assets/logo";
import { motion } from "framer-motion";

function SkillSection() {
  return (
    <div className="flex w-full flex-col container justify-center items-center mx-auto gap-8 overflow-hidden">
      <h1 className="text-2xl text-black font-manrope font-bold text-center">
        Skills & Technologies
      </h1>

      <div className="w-full relative">
        <motion.div
          className="flex flex-row gap-10 mb-6"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...logoList, ...logoList].map((data, index) => (
            <motion.img
              key={`logo-1-${index}`}
              src={data}
              width={"140px"}
              className="object-contain"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SkillSection;
