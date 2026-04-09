import Nav from "~/components/Nav";
import Socials from "~/components/Socials";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-slate-lightest text-4xl font-bold tracking-tight sm:text-5xl">
              Your Name
            </h1>
            <h2 className="text-slate-light mt-3 text-lg font-medium tracking-tight sm:text-xl">
              Senior Frontend Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
            <Nav />
          </div>

          <Socials />
        </header>

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
              About
            </h3>
            <p className="mb-4">
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising agency, a start-up, a huge
              corporation, and a student-led design studio.
            </p>
          </section>

          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
              Experience
            </h3>
            <div className="bg-navy-light/50 h-96 rounded p-6">
              <p>Experience content coming soon.</p>
            </div>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
              Projects
            </h3>
            <div className="bg-navy-light/50 h-96 rounded p-6">
              <p>Projects content coming soon.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
