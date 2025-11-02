"use client";

import { OnboardingStep1 } from "@/modules/onboarding/step1";
import { OnboardingStep2 } from "@/modules/onboarding/step2";
import { OnboardingStep3 } from "@/modules/onboarding/step3";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGetStarted = () => {
    navigate("/habits/create");
  };

  return (
    <div className="min-h-screen bg-background">
      {currentStep === 1 && <OnboardingStep1 onNext={handleNext} />}
      {currentStep === 2 && (
        <OnboardingStep2 onNext={handleNext} onPrevious={handlePrevious} />
      )}
      {currentStep === 3 && (
        <OnboardingStep3
          onGetStarted={handleGetStarted}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
}
