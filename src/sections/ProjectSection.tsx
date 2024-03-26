import { PROJECT_LIST } from "@/constants/constants";
import { useScrollSpy } from "@/hooks/useIntersectionObservation";
import { useEffect, useState } from "react";
import ProjectDetailSection from "./ProjectDetailSection";

export default function ProjectSection() {
  const currentDetailId = useScrollSpy("h3");
  const [visited, setVisited] = useState(new Set());

  useEffect(() => {
    currentDetailId.length > 0 &&
      setVisited((prev) => prev.add(currentDetailId));
  }, [currentDetailId]);

  return (
    <section
      id="section3"
      className="max-auto px-4 sm:px-6 lg:px-8 lg:pt-32 flex min-h-screen items-center"
    >
      <h2 className="hidden">Project</h2>
      <div className="w-full flex">
        <div className="relative w-full ">
          {PROJECT_LIST.map((v) => {
            return (
              <ProjectDetailSection
                isTarget={visited.has(v.name) || currentDetailId === v.name}
                key={v.name}
                data={v}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
