import { leftContentVariants, rightContentVariants } from "@/utils/animation";
import { motion } from "framer-motion";
function AboutSection2() {
  return (
    <div className="flex flex-col gap-y-5 md:flex-row container px-5 md:px-10 items-center justify-between pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={leftContentVariants(0.3)}
        className="flex flex-col w-full md:w-1/2 gap-4 md:mr-5 md:pl-5"
      >
        <h1 className="text-black text-3xl md:text-4xl font-manrope pt-10 md:pt-0">
          Discover Oki Nurul Abada: Passionate Backend Developer Ready to
          Impress
        </h1>
        <h1 className="text-black font-manrope text-normal">
          Oki specializes in backend development using the Java Spring Boot
          framework, focusing on creating efficient and scalable applications.
          With a strong foundation in Test-Driven Development (TDD), he is
          dedicated to delivering high-quality code that meets user needs.
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={rightContentVariants(0.3)}
        className="w-full md:w-1/2 pb-10 md:pl-5 flex justify-end"
      >
        <img src="/images/oki.png" alt="" width={450} />
      </motion.div>
    </div>
  );
}

export default AboutSection2;
