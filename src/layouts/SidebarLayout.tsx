import SideBarSection from "@/sections/SideBarSection";
import { IHeading } from "@/types/type";
import { useEffect, useState } from "react";

interface IProp {
  children: React.ReactNode[];
}

export default function SidebarLayout({ children }: IProp) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [headings, setHeadings] = useState<IHeading[]>([]);

  useEffect(() => {
    const contentHeadings = Array.from(document.querySelectorAll("h2"));
    console.log("headlings : ", contentHeadings);
    const headingsData = contentHeadings.map(
      (heading, index) =>
        ({
          id: `section${index}`,
          title: heading.textContent,
        } as IHeading)
    ) as IHeading[];
    setHeadings(headingsData);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionIdx = null;
      sections.forEach((s, i) => {
        const sectionTop = s.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSectionIdx = i;
        }
      });
      setCurrentIdx(currentSectionIdx || 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex w-full">
      <SideBarSection headlings={headings} target={currentIdx} />
      <div className="flex flex-col w-full pl-64 max-sm:pl-0">
        {...children}
      </div>
    </div>
  );
}
