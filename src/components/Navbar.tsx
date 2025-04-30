import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { NavProps } from "./section/ContactSection";

function Navbar({ setCurrentSection }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navList = [
    { title: "Home", value: 0 },
    { title: "About me", value: 1 },
    { title: "Projects", value: 4 },
    { title: "Contact me", value: 5 },
  ];

  const handleNavClick = (value: number) => {
    setCurrentSection(value);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full bg-white z-50 relative">
      {/* Desktop and Mobile Header */}
      <div className="w-full flex px-4 md:px-20 justify-between items-center py-4">
        <div className="flex items-center">
          <p className="font-lobster text-2xl">Abada</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navList.map((data) => (
            <Button
              key={data.value}
              onClick={() => handleNavClick(data.value)}
              variant="ghost"
            >
              {data.title}
            </Button>
          ))}
          <div className="ml-2">
            <Button>Send</Button>
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md z-50">
          <div className="flex flex-col p-4">
            {navList.map((data) => (
              <Button
                key={data.value}
                onClick={() => handleNavClick(data.value)}
                variant="ghost"
                className="justify-start py-3"
              >
                {data.title}
              </Button>
            ))}
            <div className="mt-4">
              <Button className="w-full">Send</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
