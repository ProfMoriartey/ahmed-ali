"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
};

interface ProjectCardProps {
  project: Project;
  index: number;
  viewLabel: string;
  opensInNewTab: string;
  technologiesLabel: string;
}

const MAX_TILT = 5; // degrees
const spring = { stiffness: 180, damping: 18, mass: 0.6 };

export default function ProjectCard({
  project,
  index,
  viewLabel,
  opensInNewTab,
  technologiesLabel,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  // Pointer position over the card, normalised to -0.5 … 0.5
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(
    useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]),
    spring,
  );
  const rotateY = useSpring(
    useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]),
    spring,
  );

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <article
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="group relative mb-16 grid transition-all lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
      >
        {/* Hover Background Effect */}
        <div className="lg:group-hover:bg-navy-light/50 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        {/* Screenshot */}
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="border-slate-light/10 group-hover:border-teal/40 relative z-10 aspect-[15/8] overflow-hidden rounded-lg border-2 shadow-lg shadow-black/20 transition-colors duration-300"
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
          />
          <div className="from-navy/90 via-navy/20 absolute inset-0 flex items-end bg-linear-to-t to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="bg-teal text-navy inline-flex translate-y-2 items-center gap-1 rounded-full px-3 py-1 text-xs font-bold transition-transform duration-300 group-hover:translate-y-0">
              {viewLabel}
              <FiArrowUpRight className="h-3.5 w-3.5 rtl:rotate-270" />
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="z-10 mt-5">
          <h3 className="text-slate-lightest leading-snug font-medium">
            <a
              className="group/link text-slate-lightest hover:text-teal focus-visible:text-teal group-hover:text-teal inline-flex items-baseline text-lg leading-tight font-semibold transition-colors"
              href={project.link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} (${opensInNewTab})`}
            >
              {/* Makes the whole card (screenshot included) clickable */}
              <span className="absolute -inset-x-4 -inset-y-4 z-20 rounded-lg lg:-inset-x-6" />
              <span>
                {project.title}
                <FiArrowUpRight className="ms-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none rtl:rotate-270 rtl:group-hover:-translate-x-1" />
              </span>
            </a>
          </h3>

          <p className="mt-2 text-sm leading-normal">{project.description}</p>

          <ul className="mt-2 flex flex-wrap" aria-label={technologiesLabel}>
            {project.technologies.map((tech) => (
              <li key={tech} className="me-1.5 mt-2">
                <div className="bg-teal/10 text-teal flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </motion.div>
  );
}
