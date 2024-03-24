import { PROJECT_LIST } from "@/constants/constants";
import { IProject } from "@/types/type";
import { useState } from "react";
import ProjectDetailSection from "./ProjectDetailSection";

export default function ProjectSection() {
  const [currentProject, setCurrentProject] = useState<IProject>();

  return (
    <section
      id="section3"
      className="max-auto px-4 sm:px-6 lg:px-8 lg:pt-32 flex min-h-screen items-center"
    >
      <h2 className="hidden">Project</h2>
      <div className="w-full flex">
        <div className="relative w-full ">
          {PROJECT_LIST.map((v) => {
            return <ProjectDetailSection data={v} />;
          })}
        </div>
      </div>
    </section>
  );
}
