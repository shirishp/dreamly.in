import React from "react";
import { Mail, Moon, Star } from "lucide-react";

export default function Features() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Star className="h-8 w-8 text-yellow-400" />}
          title="Personalized Stories"
          description="Tales crafted around your child's interests, age, and preferences"
        />
        <FeatureCard
          icon={<Mail className="h-8 w-8 text-blue-400" />}
          title="Daily Delivery"
          description="A fresh story every evening, right in time for bedtime"
        />
        <FeatureCard
          icon={<Moon className="h-8 w-8 text-purple-400" />}
          title="Sleep-Promoting"
          description="Gentle narratives designed to help your child wind down"
        />
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}
