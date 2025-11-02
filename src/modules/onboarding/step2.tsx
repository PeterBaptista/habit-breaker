"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Target,
  TrendingUp,
  Calendar,
} from "lucide-react";

interface OnboardingStep2Props {
  onNext: () => void;
  onPrevious: () => void;
}

export function OnboardingStep2({ onNext, onPrevious }: OnboardingStep2Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            How Habit Breaker Works
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            A simple, science-backed approach to lasting change
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 pt-4">
          <div className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-card-foreground">
                1. Identify Your Habits
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Start by adding the habits you want to break. Be specific and
                honest with yourself about what you want to change.
              </p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-card-foreground">
                2. Track Daily Progress
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Mark each day you successfully avoid your bad habit. Build
                momentum and watch your streak grow longer.
              </p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-card-foreground">
                3. Celebrate Milestones
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Reach important milestones and unlock achievements. Every small
                win brings you closer to lasting change.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-4 pt-8">
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
              <div className="h-1.5 w-8 rounded-full bg-primary" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
