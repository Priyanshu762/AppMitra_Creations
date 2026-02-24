"use client";

import type { PricingPlan } from "@/lib/pricing";

type PricingCardProps = {
  plan: PricingPlan;
  gradient: string;
};

export default function PricingCard({ plan, gradient }: PricingCardProps) {
  return (
    <article className="relative flex h-full flex-col rounded-xl border border-black/8 dark:border-white/8 bg-white dark:bg-black p-5 sm:p-6">
      {/* Popular badge */}
      {plan.popular && (
        <div
          className={`absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${gradient}`}
        >
          Most Popular
        </div>
      )}

      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground">
          {plan.name}
        </h3>

        <p className="text-xl sm:text-2xl font-bold mt-3 text-foreground">
          {plan.price}
        </p>
        {plan.note && (
          <p className="text-xs text-secondary mt-1">{plan.note}</p>
        )}

        <ul className="mt-4 space-y-2 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-secondary text-sm leading-snug">
              <span
                className={`mt-1.5 size-1.5 rounded-full bg-gradient-to-r ${gradient} shrink-0`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`mt-5 inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r ${gradient}`}
        >
          {plan.cta ?? "Get Started"}
        </a>
      </div>
    </article>
  );
}
