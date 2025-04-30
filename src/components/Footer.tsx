import { SocialMediaList } from "@/utils/SocialMediaList";
import { Button } from "./ui/button";
import { NavProps } from "./section/ContactSection";
const navList = [
  { title: "Home", value: 0 },
  { title: "About me", value: 1 },
  { title: "Projects", value: 4 },
  { title: "Contact me", value: 5 },
];
function Footer({ setCurrentSection }: NavProps) {
  const handleNavClick = (value: number) => {
    setCurrentSection(value);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mb-10">
        <h1 className="text-2xl font-lobster text-white">Abada</h1>
        <div className="hidden md:flex flex-row gap-x-5">
          {navList.map((data) => {
            return (
              <Button
                onClick={() => {
                  handleNavClick(data.value);
                }}
                className="bg-transparent text-white hover:underline"
              >
                {data.title}
              </Button>
            );
          })}
        </div>
        <div className="flex flex-row gap-x-5">
          {SocialMediaList.map((data) => {
            return <>{data.icon}</>;
          })}
        </div>
      </div>
      <hr className="w-full border-t border-gray-300 my-4" />
      <h1 className="text-white font-manrope text-center">
        © 2025 Oki N Abada. All rights reserved.
      </h1>
    </div>
  );
}

export default Footer;
