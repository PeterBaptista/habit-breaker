"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { OnboardingStep1 } from "@/modules/onboarding/step1";
import { OnboardingStep2 } from "@/modules/onboarding/step2";
import { OnboardingStep3 } from "@/modules/onboarding/step3";
import { useNavigate } from "react-router-dom";
import { defaultHomeRoute } from "@/routes";

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentStep < 3) {
      setDirection(1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGetStarted = () => {
    navigate(defaultHomeRoute);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        {currentStep === 1 && (
          <OnboardingStep1
            key="step1"
            onNext={handleNext}
            direction={direction}
          />
        )}
        {currentStep === 2 && (
          <OnboardingStep2
            key="step2"
            onNext={handleNext}
            onPrevious={handlePrevious}
            direction={direction}
          />
        )}
        {currentStep === 3 && (
          <OnboardingStep3
            key="step3"
            onGetStarted={handleGetStarted}
            onPrevious={handlePrevious}
            direction={direction}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
