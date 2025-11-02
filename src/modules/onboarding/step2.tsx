"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Target,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

interface OnboardingStep2Props {
  onNext: () => void;
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
      staggerChildren: 0.15,
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

const stepCardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function OnboardingStep2({
  onNext,
  onPrevious,
  direction,
}: OnboardingStep2Props) {
  const steps = [
    {
      icon: Target,
      title: "1. Identify Your Habits",
      description:
        "Start by adding the habits you want to break. Be specific and honest with yourself about what you want to change.",
      color: "primary",
    },
    {
      icon: Calendar,
      title: "2. Track Daily Progress",
      description:
        "Mark each day you successfully avoid your bad habit. Build momentum and watch your streak grow longer.",
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "3. Celebrate Milestones",
      description:
        "Reach important milestones and unlock achievements. Every small win brings you closer to lasting change.",
      color: "primary",
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
      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-4 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            How Habit Breaker Works
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            A simple, science-backed approach to lasting change
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6 pt-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={stepCardVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50"
              >
                <motion.div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    step.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      step.color === "accent" ? "text-accent" : "text-primary"
                    }`}
                  />
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 pt-8"
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
            <Button
              size="lg"
              onClick={onNext}
              className="group h-12 gap-2 px-8"
            >
              Continue
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
              <motion.div
                className="h-1.5 w-8 rounded-full bg-primary"
                layoutId="progress-indicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
