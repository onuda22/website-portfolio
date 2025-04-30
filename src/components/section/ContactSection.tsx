import { ContactList } from "@/utils/ContactList";
import Footer from "../Footer";

export interface NavProps {
  setCurrentSection: (section: number) => void;
}
function ContactSection({ setCurrentSection }: NavProps) {
  return (
    <div className="flex container justify-between flex-col gap-6 mx-auto md:px-5 pb-18 px-4">
      <h1 className="text-3xl font-manrope text-white">
        Let's Connect and Collaborate
      </h1>
      <div className="flex w-full flex-col md:flex-row justify-between gap-4">
        {ContactList.map((item) => {
          return (
            <div className="w-[250px] space-y-5 ">
              {item.icon}
              <h1 className="text-2xl font-manrope text-semibold text-white">
                {item.title}
              </h1>
              <h1 className="text-white font-manrope">{item.desc}</h1>
              <h1 className="text-white underline">{item.link}</h1>
            </div>
          );
        })}
      </div>
      <Footer setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default ContactSection;
