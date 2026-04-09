import Nav from "~/components/Nav";
import Socials from "~/components/Socials";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import ScrollReveal from "~/components/ScrollReveal"; // 1. Add import
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
                Your Name
              </h1>
              <h2 className="text-slate-light mt-3 text-lg font-medium tracking-tight sm:text-xl">
                Senior Frontend Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, pixel-perfect digital experiences for the
                web.
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
                  Back in 2012, I decided to try my hand at creating custom
                  Tumblr themes and tumbled head first into the rabbit hole of
                  coding and web development. Fast-forward to today, and I’ve
                  had the privilege of building software for an{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    advertising agency
                  </span>
                  , a{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    start-up
                  </span>
                  , a huge corporation, and a student-led design studio.
                </p>
                <p>
                  My main focus these days is building accessible, inclusive
                  products and digital experiences at{" "}
                  <span className="text-slate-lightest hover:text-teal focus-visible:text-teal font-medium">
                    Upstatement
                  </span>{" "}
                  for a variety of clients.
                </p>
                <p>
                  When I'm not at the computer, I'm usually hanging out with my
                  wife and two cats, or running around Eorzea searching for the
                  next great adventure.
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
                  href="/resume.pdf"
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
