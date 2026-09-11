import { ACHIEVEMENTS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Trophy, ExternalLink } from "lucide-react";
import Link from "next/link";

const AchievementsSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="achievements"
          title="Achievements"
          desc="Hackathons and competitions I'm proud of."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <AchievementCard key={achievement.id} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: (typeof ACHIEVEMENTS)[0];
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
      className="h-full"
    >
      <Card
        className={cn(
          "bg-card text-card-foreground border-border h-full flex flex-col",
          "hover:border-primary/20 transition-colors duration-300",
          "shadow-sm hover:shadow-md"
        )}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary shrink-0">
              <Trophy className="w-4.5 h-4.5" />
            </span>
            {achievement.date && (
              <Badge variant="secondary" className="font-mono text-xs font-normal ml-auto">
                {achievement.date}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg font-bold tracking-tight leading-snug">
            {achievement.title}
          </CardTitle>
          <div className="text-sm font-medium text-muted-foreground">
            {achievement.organization}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 justify-between gap-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {achievement.description}
          </p>
          {achievement.proofUrl && (
            <Link href={achievement.proofUrl} target="_blank" rel="noopener">
              <Button variant="outline" size="sm" className="gap-2 w-full">
                View Proof on LinkedIn
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AchievementsSection;
