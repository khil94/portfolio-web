"use client";
import SidebarLayout from "@/layouts/SidebarLayout";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import MainSection from "@/sections/MainSection";
import ProjectSection from "@/sections/ProjectSection";
import SkillSection from "@/sections/SkillSection";

export default function Home() {
  return (
    <main>
      <SidebarLayout>
        <MainSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
      </SidebarLayout>
    </main>
  );
}
