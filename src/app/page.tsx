"use client";
import SidebarLayout from "@/layouts/SidebarLayout";
import MainSection from "@/sections/MainSection";
import TestSection from "@/sections/TestSection";

export default function Home() {
  return (
    <main>
      <SidebarLayout>
        <MainSection />
        <TestSection />
      </SidebarLayout>
    </main>
  );
}
