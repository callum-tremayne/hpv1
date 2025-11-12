"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "inverted";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "default",
}: SectionHeadingProps) {
  const isInverted = tone === "inverted";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-semibold uppercase tracking-wider",
            isInverted ? "text-primary-foreground/80" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          isInverted ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "sm:text-lg",
            isInverted ? "text-primary-foreground/90" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
