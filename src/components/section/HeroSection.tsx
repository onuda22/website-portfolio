import { leftContentVariants, rightContentVariants } from "@/utils/animation";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

function HeroSection() {
  // Animation variants for right side iframe

  return (
    <div className="flex container justify-between items-center flex-col md:flex-row gap-2 mx-auto md:px-5 pb-18">
      <motion.div
        className="flex flex-col w-full md:w-1/3 px-4 pt-10 md:pt-0 gap-2 md:gap-4 md:pl-10 mx-auto"
        initial="hidden"
        animate="visible"
        variants={leftContentVariants(0.2)}
      >
        <h1 className="font-manrope text-4xl md:text-5xl text-black">
          Welcome to My Portfolio - Oki N Abada
        </h1>
        <h1 className="text-black font-manrope">
          I am a passionate Backend Developer specializing in Java Spring Boot
          and the TDD Paradigm. My goal is to create efficient and scalable
          applications that solve real-world problems.
        </h1>
        <div>
          <Button variant={"link"}>Contact Me</Button>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 h-120"
        initial="hidden"
        animate="visible"
        variants={rightContentVariants(0.2)}
      >
        <iframe
          className="bg-transparent w-full"
          src="https://my.spline.design/untitled-yrz4ISArv3DPfsXnYnVzDMye/"
          // frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default HeroSection;
