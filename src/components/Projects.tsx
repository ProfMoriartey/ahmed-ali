import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";

const projectsData = [
  {
    title: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    technologies: ["React", "Express", "Spotify API", "Styled Components"],
    link: "https://example.com",
    github: "https://github.com",
    image: "/projects/project-1.jpg",
  },
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2"],
    link: "https://example.com",
    image: "/projects/project-2.jpg",
  },
];

export default function Projects() {
  return (
    <div>
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="group relative mb-12 grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
        >
          {/* Hover Background Effect */}
          <div className="lg:group-hover:bg-navy-light/50 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

          {/* Image Column */}
          <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={100}
              className="border-slate-light/10 group-hover:border-slate-light/30 rounded border-2 transition"
            />
          </div>

          {/* Content Column */}
          <div className="z-10 sm:order-2 sm:col-span-6">
            <h3 className="text-slate-lightest leading-snug font-medium">
              <div>
                <a
                  className="group/link text-slate-lightest hover:text-teal focus-visible:text-teal inline-flex items-baseline text-base leading-tight font-medium"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} (opens in a new tab)`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {project.title}
                    <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                  </span>
                </a>
              </div>
            </h3>

            <p className="mt-2 text-sm leading-normal">{project.description}</p>

            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <li key={tech} className="mt-2 mr-1.5">
                  <div className="bg-teal/10 text-teal flex items-center rounded-full px-3 py-1 text-xs leading-5 font-medium">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
