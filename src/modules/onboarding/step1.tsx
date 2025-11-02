"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface OnboardingStep1Props {
  onNext: () => void;
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

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function OnboardingStep1({ onNext, direction }: OnboardingStep1Props) {
  return (
    <motion.div
      custom={direction}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-2xl space-y-8 text-center">
        {/* Logo/Icon */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="h-10 w-10 text-primary" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Welcome to Habit Breaker
          </h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Your personal companion for breaking bad habits and building a
            better you
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid gap-4 pt-8 md:grid-cols-3"
        >
          {[
            {
              emoji: "🎯",
              title: "Track Progress",
              desc: "Monitor your journey with detailed insights",
            },
            {
              emoji: "💪",
              title: "Stay Motivated",
              desc: "Get reminders and encouragement daily",
            },
            {
              emoji: "📊",
              title: "See Results",
              desc: "Visualize your success over time",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="mb-3 text-4xl">{feature.emoji}</div>
              <h3 className="mb-2 font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4 pt-8"
        >
          <Button
            size="lg"
            onClick={onNext}
            className="group h-12 gap-2 px-8 text-base"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1.5">
              <motion.div
                className="h-1.5 w-8 rounded-full bg-primary"
                layoutId="progress-indicator"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
