"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-linear-to-b from-background via-background to-background/90">
      <div className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-72 w-72 rounded-full bg-primary/20 blur-3xl md:w-md" />
      </div>
      <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A Unique & Digital Way to Show You Care
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
            Create a personalised webpage as a heartfelt gift for any occasion.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/create">
            <Button
              size="lg"
              data-cta="create-hero"
              className="w-full sm:w-auto cursor-pointer flex items-center gap-2"
            >
              <FilePlus className="h-5 w-5" aria-hidden="true" />
              Create Your Page
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
