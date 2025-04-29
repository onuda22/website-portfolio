import { JSX } from "react";

interface LayoutProps {
  children: JSX.Element;
  bgColor: string;
}
function Layout({ children, bgColor }: LayoutProps) {
  return (
    <div
      className={`flex items-center justify-content-center min-h-screen ${bgColor}`}
    >
      {children}
    </div>
  );
}

export default Layout;
