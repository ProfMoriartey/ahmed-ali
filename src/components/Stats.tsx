"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reduceMotion || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value, suffix]);

  // Server-rendered with the final value so it reads correctly without JS
  return (
    <span ref={ref} dir="ltr" className="tabular-nums">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const t = useTranslations("Home.about");
  const stats = t.raw("stats") as Stat[];

  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          // column-reverse + justify-end pins the numbers to the top of each
          // cell, so they line up even when a label wraps to two lines
          className="group flex flex-col-reverse justify-end"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <dt className="text-slate mt-1 text-xs leading-snug font-medium tracking-wide uppercase">
            {stat.label}
          </dt>
          <dd className="text-slate-lightest group-hover:text-teal text-3xl font-bold tracking-tight transition-colors duration-300">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </dd>
        </motion.div>
      ))}
    </dl>
  );
}
