import { EDUCATION } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="education"
          title="Education"
          desc="My academic journey."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative">
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border hidden md:block -translate-x-1/2" />

          {EDUCATION.map((edu, index) => (
            <div key={edu.id} className="relative">
              <EducationCard education={edu} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: (typeof EDUCATION)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                <CardTitle className="text-xl font-bold tracking-tight">
                  {education.degree}
                </CardTitle>
              </div>
              <div className="text-base font-medium text-muted-foreground">
                {education.institution}
                {education.location ? ` · ${education.location}` : ""}
              </div>
            </div>
            <Badge variant="secondary" className="w-fit font-mono text-xs font-normal shrink-0">
              {education.startDate ? `${education.startDate} - ` : ""}
              {education.endDate}
            </Badge>
          </div>
        </CardHeader>
        {(education.score || (education.description && education.description.length > 0)) && (
          <CardContent className="space-y-4">
            {education.score && (
              <Badge className="font-mono text-xs font-normal">
                {education.score}
              </Badge>
            )}
            {education.description && education.description.length > 0 && (
              <ul className="list-disc list-outside ml-4 space-y-2 text-base text-muted-foreground leading-relaxed">
                {education.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
};

export default EducationSection;
