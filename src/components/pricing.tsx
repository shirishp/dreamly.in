import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "199",
    unit: "month",
    features: [
      "1 story per day",
      "Basic personalization",
      "Email delivery",
      "Web access to story archive",
    ],
  },
  {
    name: "Quarterly",
    price: "499",
    unit: "3 months",
    features: [
      "2 stories per day",
      "Advanced personalization",
      "Priority email delivery",
      "Unlimited story archive access",
      "Custom illustrations",
      "Parent dashboard",
    ],
    popular: true,
  },
  {
    name: "Yearly",
    price: "999",
    unit: "year",
    features: [
      "3 stories per day",
      "Multiple child profiles",
      "Premium personalization",
      "Audio narration",
      "All Enhanced features",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <div id="pricing" className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Story Package
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start with a 7-day free trial, cancel anytime
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-b from-purple-600 to-indigo-700 text-white shadow-xl scale-105"
                  : "bg-white text-gray-900 shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-purple-200 px-4 py-1 text-sm font-semibold text-purple-800">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight">
                    ₹{plan.price}
                  </span>
                  <span className="ml-1 text-xl">/{plan.unit}</span>
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check
                        className={`h-5 w-5 ${plan.popular ? "text-purple-200" : "text-purple-600"} mr-3`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-full px-4 py-3 font-semibold transition-colors ${
                    plan.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
