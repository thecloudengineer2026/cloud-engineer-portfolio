import {
  principles,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[0.18em] text-white uppercase"
          >
            IA<span className="text-cyan-400">.</span>
          </a>

          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-4 text-sm text-slate-300 sm:gap-7">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-cyan-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_right,rgba(8,145,178,0.22),transparent_42%),radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_38%)]"
          />

          <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                Business insight. Cloud execution. Verified outcomes.
              </p>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
                I engineer cloud solutions around the business problem.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                {profile.introduction} My portfolio demonstrates the
                architecture, implementation, testing, tradeoffs, and evidence
                behind each solution.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Explore my work
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
                >
                  View GitHub
                </a>
              </div>
            </div>

            <aside className="self-end rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <p className="text-sm font-medium tracking-widest text-cyan-300 uppercase">
                Current focus
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white">
                {profile.name}
              </h2>

              <p className="mt-2 text-slate-300">{profile.role}</p>

              <p className="mt-6 leading-7 text-slate-400">
                {profile.summary}
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <dt className="text-xs text-slate-500 uppercase">
                    Case studies
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-white">3</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 uppercase">
                    IaC tests
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-white">17</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 uppercase">
                    Focus
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-white">
                    AWS
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section
          id="work"
          className="scroll-mt-24 border-t border-white/10 bg-slate-900/40"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">
                Selected work
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Cloud projects built around real operating problems
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">
                Each case study documents the problem, architecture decisions,
                implementation, validation evidence, limitations, and lessons
                learned.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/70 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-cyan-300">
                      0{index + 1}
                    </span>
                    <span className="h-px w-16 bg-gradient-to-r from-cyan-400/70 to-transparent" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-400">
                    {project.summary}
                  </p>

                  <p className="mt-5 border-l-2 border-cyan-400/50 pl-4 text-sm leading-6 text-slate-300">
                    {project.outcome}
                  </p>

                  <ul
                    className="mt-7 flex flex-wrap gap-2"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                  >
                    View case study
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">
                  Capabilities
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                  Technology in service of outcomes
                </h2>
                <p className="mt-6 leading-7 text-slate-400">
                  Tools matter, but only when they support a secure,
                  understandable, and maintainable solution.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {skillGroups.map((group) => (
                  <article
                    key={group.category}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                  >
                    <h3 className="font-semibold text-white">
                      {group.category}
                    </h3>

                    <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-400">
                      {group.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                          />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="scroll-mt-24 border-y border-white/10 bg-slate-900/40"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">
                Engineering approach
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                The deployment is not the finish line
              </h2>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <article
                  key={principle.title}
                  className="bg-slate-950 p-7"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-8">
            <p className="text-sm font-semibold tracking-widest text-cyan-300 uppercase">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let&apos;s solve the right cloud problem
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I am interested in remote cloud engineering, solutions
              architecture, and technically grounded business-analysis
              opportunities.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Email me
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                LinkedIn
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Designed around evidence, security, and business outcomes.</p>
        </div>
      </footer>
    </div>
  );
}