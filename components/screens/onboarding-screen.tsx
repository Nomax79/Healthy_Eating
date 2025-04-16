"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

export function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Personalized Meal Plans",
      description: "Get customized meal plans based on your health goals, dietary preferences, and nutritional needs.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Track Your Nutrition",
      description:
        "Monitor your daily intake of calories, protein, carbs, and fats to stay on track with your health goals.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      title: "Smart Food Recommendations",
      description: "Discover healthy food options tailored to your diet plan and preferences.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={currentStep === 0 ? "invisible" : ""}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full w-8 ${index === currentStep ? "bg-green-600" : "bg-gray-200"}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={currentStep === steps.length - 1 ? "invisible" : ""}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <img
                src={steps[currentStep].image || "/placeholder.svg"}
                alt={steps[currentStep].title}
                className="w-48 h-48 mb-6"
              />

              <h1 className="text-2xl font-bold text-green-700 mb-3">{steps[currentStep].title}</h1>

              <p className="text-muted-foreground mb-8">{steps[currentStep].description}</p>

              {currentStep === steps.length - 1 ? (
                <Link href="/" className="w-full">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              ) : (
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={nextStep}>
                  Continue
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </CardContent>
          </Card>

          {currentStep !== steps.length - 1 && (
            <div className="mt-6 text-center">
              <Link href="/" className="text-sm text-muted-foreground hover:text-green-700">
                Skip Introduction
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
