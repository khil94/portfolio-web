import { useScrollSpy } from "@/hooks/useIntersectionObservation";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import MainSection from "@/sections/MainSection";
import ProjectSection from "@/sections/ProjectSection";
import SideBarSection from "@/sections/SideBarSection";
import SkillSection from "@/sections/SkillSection";
import { IHeading } from "@/types/type";
import { useEffect, useState } from "react";
interface IProp {
  children: React.ReactNode[];
}

export default function SidebarLayout() {
  const [headings, setHeadings] = useState<IHeading[]>([]);
  const [visited, setVisited] = useState(new Set());
  const currentIdx = useScrollSpy();

  useEffect(() => {
    const contentHeadings = Array.from(document.querySelectorAll("h2"));
    const headingsData = contentHeadings.map(
      (heading, index) =>
        ({
          id: `section${index}`,
          title: heading.textContent,
        } as IHeading)
    ) as IHeading[];
    setHeadings(headingsData);
  }, []);

  useEffect(() => {
    setVisited(visited.add(currentIdx));
  }, [currentIdx]);

  return (
    <div className="flex w-full">
      <SideBarSection headlings={headings} target={currentIdx} />
      <div className="flex flex-col w-full pl-64 max-sm:pl-0">
        <MainSection />
        <AboutSection
          target={visited.has("section1") || currentIdx === "section1"}
        />
        <SkillSection
          target={visited.has("section2") || currentIdx === "section2"}
        />
        <ProjectSection />

        <ContactSection />
      </div>
    </div>
  );
}
