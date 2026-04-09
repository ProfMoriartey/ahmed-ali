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
          </div>
        </header>

        <main className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
              About
            </h3>
            <p>About section content placeholder.</p>
          </section>

          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
              Experience
            </h3>
            <p>Experience section content placeholder.</p>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <h3 className="text-slate-lightest mb-4 text-sm font-bold tracking-widest uppercase lg:sr-only">
              Projects
            </h3>
            <p>Projects section content placeholder.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
