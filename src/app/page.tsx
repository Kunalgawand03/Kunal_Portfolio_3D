"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import EducationSection from "@/components/sections/education";
import ProjectsSection from "@/components/sections/projects";
import AchievementsSection from "@/components/sections/achievements";
import CertificationsSection from "@/components/sections/certifications";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <AchievementsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
