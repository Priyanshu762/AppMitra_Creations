"use client";

import { pricingCategories } from "@/lib/pricing";
import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-14 sm:py-20 relative overflow-hidden bg-surface/30 dark:bg-black/20 scroll-mt-24"
    >
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container-width">
        {/* Section header - compact */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Service Pricing & Rate Card
          </h2>
          <p className="text-secondary text-sm sm:text-base">
            Flexible pricing tailored to your business needs.
          </p>
        </div>

        {/* Categories - tighter spacing */}
        <div className="space-y-12 sm:space-y-14">
          {pricingCategories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className={`inline-block h-0.5 w-8 rounded-full bg-gradient-to-r ${category.gradient}`}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div
                className={`grid gap-4 sm:gap-5 ${
                  category.plans.length >= 3
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : category.plans.length === 2
                      ? "grid-cols-1 md:grid-cols-2"
                      : "grid-cols-1 max-w-md"
                }`}
              >
                {category.plans.map((plan) => (
                  <PricingCard
                    key={plan.id}
                    plan={plan}
                    gradient={category.gradient}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
