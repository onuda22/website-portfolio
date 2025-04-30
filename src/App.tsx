import { useState, useEffect, useRef, JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/section/HeroSection";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import SkillSection from "./components/section/SkillSection";
import ProjectSection from "./components/section/ProjectSection";
import AboutSection from "./components/section/AboutSection";
import AboutSection2 from "./components/section/AboutSection2";
import ContactSection from "./components/section/ContactSection";

function App() {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollPositionRef = useRef<{
    top: number;
    isAtTop: boolean;
    isAtBottom: boolean;
  }>({
    top: 0,
    isAtTop: true,
    isAtBottom: false,
  });

  const sections: { component: JSX.Element; id: string }[] = [
    {
      component: (
        <Layout
          children={<HeroSection />}
          bgColor="bg-background"
          // bgColor={"[url(/images/bghero.jpg)] bg-cover bg-center"}
        />
      ),
      id: "hero",
    },
    {
      component: (
        <Layout
          children={<AboutSection />}
          bgColor={"bg-secondary-foreground"}
        />
      ),
      id: "about",
    },
    {
      component: (
        <Layout children={<AboutSection2 />} bgColor={"bg-secondary"} />
      ),
      id: "about2",
    },
    {
      component: <Layout children={<SkillSection />} bgColor={"bg-white"} />,
      id: "skill",
    },
    {
      component: (
        <Layout children={<ProjectSection />} bgColor={"bg-secondary"} />
      ),
      id: "projects",
    },
    {
      component: (
        <Layout
          children={<ContactSection setCurrentSection={setCurrentSection} />}
          bgColor={"bg-secondary-foreground"}
        />
      ),
      id: "contact",
    },
  ];

  // Check if current section is scrollable
  useEffect(() => {
    if (sectionRef.current) {
      const checkScrollable = () => {
        if (sectionRef.current) {
          const isContentScrollable =
            sectionRef.current.scrollHeight > sectionRef.current.clientHeight;
          setIsScrollable(isContentScrollable);

          // Reset scroll position when changing sections
          sectionRef.current.scrollTop = 0;
          scrollPositionRef.current = {
            top: 0,
            isAtTop: true,
            isAtBottom: false,
          };
        }
      };

      // Check immediately
      checkScrollable();

      // Also check after images might have loaded
      const timeoutId = setTimeout(checkScrollable, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [currentSection]);

  // Handle scroll events within a section
  const handleSectionScroll = () => {
    if (sectionRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = sectionRef.current;
      const isAtTop = scrollTop <= 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 2;

      scrollPositionRef.current = {
        top: scrollTop,
        isAtTop,
        isAtBottom,
      };
    }
  };

  // Handle mouse wheel events
  const handleWheel = (e: WheelEvent) => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    scrollTimeout.current = setTimeout(() => {
      const direction = e.deltaY > 0 ? 1 : -1; // 1 for down, -1 for up

      // If section is scrollable, check if we're at the top or bottom before changing sections
      if (isScrollable) {
        const { isAtTop, isAtBottom } = scrollPositionRef.current;

        // Only change sections if we're at the top/bottom and trying to scroll past it
        if ((direction === -1 && isAtTop) || (direction === 1 && isAtBottom)) {
          const newSection = Math.min(
            Math.max(currentSection + direction, 0),
            sections.length - 1
          );

          if (newSection !== currentSection) {
            e.preventDefault();
            setCurrentSection(newSection);
          }
        }
      } else {
        // If not scrollable, change sections directly
        const newSection = Math.min(
          Math.max(currentSection + direction, 0),
          sections.length - 1
        );

        if (newSection !== currentSection) {
          e.preventDefault();
          setCurrentSection(newSection);
        }
      }
    }, 50);
  };

  useEffect(() => {
    const appElement = appRef.current;
    if (appElement) {
      appElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener("wheel", handleWheel);
      }
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [currentSection, isScrollable]);

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
    <div ref={appRef} className="h-screen">
      <Navbar setCurrentSection={setCurrentSection} />
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[currentSection].id}
          initial="enter"
          animate="center"
          exit="exit"
          variants={pageVariants}
          transition={pageTransition}
          className="h-screen w-full overflow-auto"
          ref={sectionRef}
          onScroll={handleSectionScroll}
        >
          {sections[currentSection].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
