import Nav from "~/components/Nav";
import Socials from "~/components/Socials";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import ScrollReveal from "~/components/ScrollReveal";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#content"
        className="from-teal via-navy to-navy focus-visible:text-slate-lightest focus-visible:ring-teal absolute top-0 left-0 z-50 block -translate-x-full rounded bg-linear-to-br px-4 py-3 text-sm font-bold tracking-widest text-white uppercase transition-transform focus-visible:translate-x-0 focus-visible:ring-2 focus-visible:outline-none"
      >
        Skip to Content
      </a>
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* LEFT COLUMN */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <ScrollReveal>
            <div>
              <h1 className="text-slate-lightest text-4xl font-bold tracking-tight sm:text-5xl">
                Ahmed Alhusaini
              </h1>
              <h2 className="text-slate-light mt-3 text-lg font-medium tracking-tight sm:text-xl">
                Freelance Software Dveloper
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I turn ideas into useful digital experiences.
              </p>
              <Nav />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Socials />
          </ScrollReveal>
        </header>

        {/* RIGHT COLUMN */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <ScrollReveal>
              <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
                About
              </h3>
              <div className="text-slate flex flex-col gap-4">
                <p>
                  I am a Software Dveloper with an expertise in turning ideas
                  into useful digital experiences. I do my best work at the
                  intersection of design and Dvelopering, where complex
                  requirements meet clean, scalable code. I take pride in
                  crafting thoughtful, inclusive products with intentional focus
                  on the technical details that elevate the user experience.
                </p>
                <p>
                  Currently, I lead the web presence for{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Tüzemen Textile
                  </span>
                  , where I built and maintain their official platform from the
                  ground up. Parallel to this, I manage the full project
                  lifecycle for freelance applications like{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Menupedia
                  </span>{" "}
                  and{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Hastory
                  </span>
                  , and have created and maintained the web presence for the
                  Finnish youth organization{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Hangflow
                  </span>{" "}
                  for over two years. I ensure accessibility and multi-language
                  support are built into the foundation of every product.
                </p>
                <p>
                  Previously, I have worked on a range of environments—from
                  AI-driven medical tools to dynamic booking systems. These
                  experiences, combined with Bachelor of Science in{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Chemistry
                  </span>{" "}
                  and professional certifications from{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Meta
                  </span>{" "}
                  and{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Google
                  </span>
                  , have shaped how I think about building products that are
                  both technically robust and widely usable.
                </p>
              </div>
            </ScrollReveal>
          </section>

          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <ScrollReveal>
              <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
                Experience
              </h3>
              <div className="group/list">
                <Experience />
              </div>
              <div className="mt-12">
                <a
                  className="text-slate-lightest hover:text-teal focus-visible:text-teal group/link inline-flex items-baseline text-base leading-tight font-medium"
                  href="/Ahmed-Alhusaini-CV.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    View Full{" "}
                    <span className="inline-block">
                      Résumé
                      <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                    </span>
                  </span>
                </a>
              </div>
            </ScrollReveal>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <ScrollReveal>
              <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
                Projects
              </h3>

              <div className="group/list">
                <Projects />
              </div>

              <div className="mt-12">
                <a
                  className="text-slate-lightest hover:text-teal focus-visible:text-teal group/link inline-flex items-center text-base leading-tight font-semibold"
                  href="/archive"
                  aria-label="View Full Project Archive"
                >
                  <span>View Full Project Archive</span>
                  <FiArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transition-none" />
                </a>
              </div>
            </ScrollReveal>
          </section>
        </main>
      </div>
    </div>
  );
}
