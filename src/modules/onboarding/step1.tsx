"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface OnboardingStep1Props {
  onNext: () => void;
}

export function OnboardingStep1({ onNext }: OnboardingStep1Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl space-y-8 text-center">
        {/* Logo/Icon */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
            <Sparkles className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Welcome to Habit Breaker
          </h1>
          <p className="text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">
            Your personal companion for breaking bad habits and building a
            better you
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid gap-4 pt-8 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mb-3 text-4xl">🎯</div>
            <h3 className="mb-2 font-semibold text-card-foreground">
              Track Progress
            </h3>
            <p className="text-sm text-muted-foreground">
              Monitor your journey with detailed insights
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mb-3 text-4xl">💪</div>
            <h3 className="mb-2 font-semibold text-card-foreground">
              Stay Motivated
            </h3>
            <p className="text-sm text-muted-foreground">
              Get reminders and encouragement daily
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mb-3 text-4xl">📊</div>
            <h3 className="mb-2 font-semibold text-card-foreground">
              See Results
            </h3>
            <p className="text-sm text-muted-foreground">
              Visualize your success over time
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 pt-8">
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
              <div className="h-1.5 w-8 rounded-full bg-primary" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
