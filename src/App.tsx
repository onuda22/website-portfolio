import { useState, useEffect, useRef, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import AboutSection2 from "./components/AboutSection2";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";

function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);

  const sections: { component: JSX.Element; id: string }[] = [
    {
      component: (
        <Layout
          children={<HeroSection />}
          bgColor="bg-[url(/images/bghero.jpg)] bg-cover bg-center"
          // bgColor={"[url(/images/bghero.jpg)] bg-cover bg-center"}
        />
      ),
      id: "hero",
    },
    {
      component: <Layout children={<AboutSection />} bgColor={"white"} />,
      id: "about",
    },
    {
      component: <Layout children={<AboutSection2 />} bgColor={"secondary"} />,
      id: "about2",
    },
    {
      component: <Layout children={<SkillSection />} bgColor={"white"} />,
      id: "skill",
    },
    {
      component: <Layout children={<ProjectSection />} bgColor={"secondary"} />,
      id: "projects",
    },
    {
      component: (
        <Layout
          children={<ContactSection />}
          bgColor={"secondary-foreground"}
        />
      ),
      id: "contact",
    },
  ];

  const appRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Handle scroll events
  const handleScroll = (e: WheelEvent) => {
    e.preventDefault();

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      const direction = e.deltaY > 0 ? 1 : -1;
      const newSection = Math.min(
        Math.max(currentSection + direction, 0),
        sections.length - 1
      );

      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
    }, 50);
  };

  useEffect(() => {
    const appElement = appRef.current;
    if (appElement) {
      appElement.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener("wheel", handleScroll);
      }
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [currentSection]);

  const pageVariants = {
    enter: {
      opacity: 0,
      y: 100,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -100,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.2,
  };

  return (
    <div ref={appRef} className="h-screen overflow-hidden">
      <Navbar setCurrentSection={setCurrentSection} />
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[currentSection].id}
          initial="enter"
          animate="center"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="h-screen w-full"
        >
          {sections[currentSection].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
