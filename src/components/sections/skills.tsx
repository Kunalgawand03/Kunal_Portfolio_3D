"use client";

import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

/**
 * The tech stack is handled entirely by the 3D keyboard buttons.
 * This section remains intentionally minimal so the 3D experience is the only
 * visual representation, with no HTML grid shown above it.
 */
const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="w-full h-screen md:h-[150dvh] pointer-events-none"
    >
      <SectionHeader id="skills" title="Tech Stack" desc="(hint: press a key)" />
    </SectionWrapper>
  );
};

export default SkillsSection;
