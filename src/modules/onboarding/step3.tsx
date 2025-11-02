"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

interface OnboardingStep3Props {
  onGetStarted: () => void;
  onPrevious: () => void;
}

export function OnboardingStep3({
  onGetStarted,
  onPrevious,
}: OnboardingStep3Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
              <Check className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            You're All Set!
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Ready to start your journey to a better you?
          </p>
        </div>

        {/* Tips */}
        <div className="space-y-4 rounded-2xl border border-border bg-card p-8">
          <h3 className="text-xl font-semibold text-card-foreground">
            Tips for Success
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                ✓
              </span>
              <span>
                <strong className="text-card-foreground">Be patient:</strong>{" "}
                Breaking habits takes time. Don't get discouraged by setbacks.
              </span>
            </li>
            <li className="flex gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                ✓
              </span>
              <span>
                <strong className="text-card-foreground">
                  Stay consistent:
                </strong>{" "}
                Check in daily to track your progress and maintain momentum.
              </span>
            </li>
            <li className="flex gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                ✓
              </span>
              <span>
                <strong className="text-card-foreground">
                  Celebrate wins:
                </strong>{" "}
                Acknowledge every milestone, no matter how small.
              </span>
            </li>
            <li className="flex gap-3 leading-relaxed text-muted-foreground">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                ✓
              </span>
              <span>
                <strong className="text-card-foreground">
                  Replace, don't just remove:
                </strong>{" "}
                Build positive habits to replace the bad ones.
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 pt-4">
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
            <Button size="lg" onClick={onGetStarted} className="h-12 px-8">
              Start Breaking Habits
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
              <div className="h-1.5 w-1.5 rounded-full bg-muted" />
              <div className="h-1.5 w-8 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
