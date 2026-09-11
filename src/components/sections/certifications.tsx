"use client";

import { CERTIFICATIONS, type Certificate } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "../ui/badge";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10"
    >
      <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="certifications"
          title="Certifications"
          desc="Tap a certificate to view the full image and details."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const CertificateCard = ({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: (index % 8) * 0.06,
            ease: "easeOut",
          }}
          viewport={{ once: true, margin: "-50px" }}
          className={cn(
            "group relative flex flex-col overflow-hidden rounded-xl border border-border",
            "bg-card text-left cursor-pointer pointer-events-auto",
            "hover:border-primary/40 transition-colors duration-300 shadow-sm hover:shadow-md"
          )}
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <span className="text-white text-xs font-medium flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                View certificate
              </span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-sm font-semibold leading-snug line-clamp-2">
              {cert.title}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
          </div>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="pr-6">{cert.title}</DialogTitle>
          <DialogDescription asChild>
            <div className="flex items-center gap-2 flex-wrap text-sm">
              <span className="font-medium text-foreground">{cert.issuer}</span>
              {cert.date && (
                <Badge variant="secondary" className="font-mono text-xs font-normal">
                  {cert.date}
                </Badge>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full rounded-lg border border-border object-contain max-h-[55vh]"
        />
        <p className="text-sm text-muted-foreground leading-relaxed">
          {cert.description}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default CertificationsSection;
