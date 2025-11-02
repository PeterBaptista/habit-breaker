"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface OnboardingStep3Props {
  onGetStarted: () => void;
  onPrevious: () => void;
  direction: number;
}

const containerVariants: Variants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const tipVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
    },
  }),
};

export function OnboardingStep3({
  onGetStarted,
  onPrevious,
  direction,
}: OnboardingStep3Props) {
  const tips = [
    {
      title: "Be patient:",
      description:
        "Breaking habits takes time. Don't get discouraged by setbacks.",
    },
    {
      title: "Stay consistent:",
      description:
        "Check in daily to track your progress and maintain momentum.",
    },
    {
      title: "Celebrate wins:",
      description: "Acknowledge every milestone, no matter how small.",
    },
    {
      title: "Replace, don't just remove:",
      description: "Build positive habits to replace the bad ones.",
    },
  ];

  return (
    <motion.div
      custom={direction}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <div className="flex justify-center">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <Check className="h-10 w-10 text-primary" />
            </motion.div>
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            You're All Set!
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Ready to start your journey to a better you?
          </p>
        </motion.div>

        {/* Tips */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="text-xl font-semibold text-card-foreground">
            Tips for Success
          </h3>
          <ul className="space-y-3">
            {tips.map((tip, index) => (
              <motion.li
                key={tip.title}
                custom={index}
                variants={tipVariants}
                initial="hidden"
                animate="visible"
                className="flex gap-3 leading-relaxed text-muted-foreground"
              >
                <motion.span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  ✓
                </motion.span>
                <span>
                  <strong className="text-card-foreground">{tip.title}</strong>{" "}
                  {tip.description}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 pt-4"
        >
          <div className="flex gap-3">
            <Button
              size="lg"
              variant="outline"
              onClick={onPrevious}
              className="h-12 gap-2 px-6 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" onClick={onGetStarted} className="h-12 px-8">
                Start Breaking Habits
              </Button>
            </motion.div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
              <motion.div
                className="h-1.5 w-8 rounded-full bg-primary"
                layoutId="progress-indicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
