import { FiArrowUpRight } from "react-icons/fi";

const experienceData = [
  {
    date: "2023 — Present",
    title: "Freelance Web Developer",
    company: "Freelance",
    link: "https://hangflow.org/",
    description:
      "Build and maintain critical components used to construct frontend pages across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    date: "2023 — Present",
    title: "International Marketing Specialist",
    company: "Tüzemen Textile",
    link: "https://example.com",
    description:
      "Secured new clients through international trips and product presentations. Optimized export and courier logistics for faster global shipping. Managed end-to-end B2B sales cycles from lead generation to after-sales support. ",
    technologies: [
      "Time Managment",
      "Leadership",
      "Communication",
      "Multitasking",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      {experienceData.map((job, index) => (
        <div
          key={index}
          className="group relative mb-12 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50 lg:hover:opacity-100!"
        >
          {/* Hover Background Effect */}
          <div className="lg:group-hover:bg-navy-light/50 absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

          {/* Date Column */}
          <header className="text-slate z-10 mt-1 mb-2 text-xs font-semibold tracking-wide uppercase sm:col-span-2">
            {job.date}
          </header>

          {/* Content Column */}
          <div className="z-10 sm:col-span-6">
            <h3 className="text-slate-lightest leading-snug font-medium">
              <div>
                <a
                  className="group/link text-slate-lightest hover:text-teal focus-visible:text-teal inline-flex items-baseline text-base leading-tight font-medium"
                  href={job.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${job.title} at ${job.company} (opens in a new tab)`}
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>
                    {job.title} ·{" "}
                    <span className="inline-block">
                      {job.company}
                      <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </div>
            </h3>

            <p className="mt-2 text-sm leading-normal">{job.description}</p>

            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {job.technologies.map((tech) => (
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
