'use client';

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const experiences = [
  {
    company: "FoodZapp",
    role: "Senior Software Developer · React Native",
    period: "Oct 2024 — Present",
    context:
      "Scaling a remote-first food delivery marketplace with rider tracking and loyalty growth loops for the MENA region.",
    highlights: [
      "Implemented real-time order orchestration with Socket.io and geofencing, lifting delivery transparency metrics.",
      "Set up experimentation pipelines and analytics dashboards that increased repeat orders by 18%.",
    ],
    icon: "/icons/food.svg",
  },
  {
    company: "Mobile Programming LLC",
    role: "Senior Software Developer · React Native",
    period: "Jul 2023 — Sep 2024",
    context:
      "Consulted across hospitality, property, and fintech programs, translating enterprise requirements into resilient mobile suites.",
    highlights: [
      "Delivered property and financial management apps with secure authentication and payment gateway integrations.",
      "Mentored a squad of five engineers, refining Redux-Saga patterns and automating CI/CD releases.",
    ],
    icon: "/icons/innovation.svg",
  },
  {
    company: "Tippr",
    role: "Senior Software Developer · React Native",
    period: "Nov 2021 — Jul 2023",
    context:
      "Led the mobile roadmap for luxury hospitality partners including Atlantis Dubai and Raffles worldwide.",
    highlights: [
      "Crafted immersive guest experience modules with smart-room controls and concierge integrations.",
      "Scaled a shared design system and Redux state graph to support multi-brand deployments without regressions.",
    ],
    icon: "/icons/hospitality.svg",
  },
  {
    company: "PingB.in",
    role: "React Native Developer",
    period: "Nov 2020 — Nov 2021",
    context:
      "Built rich communication and live streaming features for a social commerce startup in Ahmedabad.",
    highlights: [
      "Integrated Agora.io streaming and interactive UI animations that boosted engagement across community rooms.",
      "Hardened release quality with Firebase analytics, automated QA dashboards, and crash-free sessions above 99%.",
    ],
    icon: "/icons/health.svg",
  },
  {
    company: "Webiots Technologies",
    role: "React Native Developer",
    period: "May 2019 — Nov 2020",
    context:
      "Delivered cross-platform retail and IoT experiences for enterprise clients across Surat and beyond.",
    highlights: [
      "Implemented BLE-powered device modules with Redux-Saga orchestration for seamless hardware sync.",
      "Launched Android and iOS apps with sub 0.5% crash rates across six major releases.",
    ],
    icon: "/icons/mobility.svg",
  },
];

const projects = [
  {
    title: "Zee5 Media Streaming",
    blurb:
      "Enterprise OTT experience delivering video, live events, and push campaigns for millions of viewers across India.",
    stats: ["React Native + Redux-Saga", "Agora live streaming", "1 yr 5 mos"],
    palette: "from-violet-400 via-indigo-400 to-sky-500",
  },
  {
    title: "Atlantis Dubai Hospitality",
    blurb:
      "Luxury hospitality management suite featuring in-room dining, door lock integrations, and passport scanning flows.",
    stats: ["React Native", "Smart-room IoT", "1 yr"],
    palette: "from-cyan-400 via-emerald-400 to-teal-500",
  },
  {
    title: "Raffles Hotel Experience",
    blurb:
      "Guest engagement platform enabling service requests, concierge chat, and dynamic personalization at scale.",
    stats: ["Redux state orchestration", "Multi-brand design system", "11 mos"],
    palette: "from-rose-400 via-amber-300 to-pink-500",
  },
  {
    title: "Asenta Property Management",
    blurb:
      "Property owners manage listings, bookings, and analytics through secure, data-rich mobile dashboards.",
    stats: ["React Native", "RESTful APIs", "9 mos"],
    palette: "from-blue-400 via-slate-400 to-cyan-500",
  },
  {
    title: "MoneySync Financial",
    blurb:
      "Pharmacy finance app tracking sales, payments, and reports with real-time dashboards and user auth.",
    stats: ["HIPAA-aligned", "Payments & invoices", "9 mos"],
    palette: "from-amber-400 via-lime-400 to-emerald-400",
  },
  {
    title: "HealthSafe Healthcare",
    blurb:
      "Digital healthcare platform for appointment scheduling, teleconsultations, and treatment management.",
    stats: ["React Native", "Zoom SDK", "6 mos"],
    palette: "from-purple-400 via-fuchsia-400 to-cyan-400",
  },
];

const skills = [
  {
    category: "Frameworks & Libraries",
    items: ["React Native", "React.js", "Redux", "Redux-Saga", "Bootstrap", "BLE"],
  },
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    category: "Mobile Platforms",
    items: ["Android SDK", "iOS (Xcode)", "App Store", "Play Console"],
  },
  {
    category: "Tools & APIs",
    items: ["Git", "Firebase", "Agora.io", "Zoom SDK", "Socket.io", "REST APIs"],
  },
];

const professionalStrengths = [
  "Deep understanding of React and React Native internals with a focus on performance tuning.",
  "Proficient in architecting complex state with Redux and Redux-Saga across large applications.",
  "Write clean, reusable code and review for maintainability across fast-moving squads.",
  "Strong problem-solving and debugging skills for production-critical issues.",
  "Design user interfaces that deliver seamless, intuitive experiences for global audiences.",
  "Track evolving ecosystem updates to keep products modern and secure.",
  "Troubleshoot and optimize for scalability while safeguarding user experience and accessibility.",
  "Ship to both Play Store and App Store with rigorous release management.",
  "Lead and mentor developers, guiding squads toward predictable, high-quality delivery.",
];

const contactChannels = [
  {
    label: "Email",
    value: "ksawale62@gmail.com",
    href: "mailto:ksawale62@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 7802877996",
    href: "tel:+917802877996",
  },
  {
    label: "GitHub",
    value: "github.com/krixs3112",
    href: "https://github.com/krixs3112",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/krishna-s-bb1417175",
    href: "https://in.linkedin.com/in/krishna-s-bb1417175?trk=profile-badge",
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-32 px-6 pb-32 pt-12 sm:px-10 lg:px-16">
      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
        defer
        type="text/javascript"
      />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-20 top-[-160px] h-64 w-64 rounded-full bg-cyan-500/40 blur-[140px]" />
        <div className="absolute right-[-120px] top-24 h-80 w-80 rounded-full bg-purple-500/30 blur-[160px]" />
        <div className="absolute bottom-[-160px] left-1/4 h-72 w-72 rounded-full bg-emerald-500/30 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.85),transparent_65%)]" />
      </div>

      <header className="flex flex-col gap-16 pt-8">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <Image src="/ks-logo.svg" alt="KS monogram" width={40} height={40} />
            <span className="text-sm uppercase tracking-[0.32em] text-slate-300">
              Krishna Sawale
            </span>
          </div>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <Link href="#work" className="transition hover:text-white">
              Experience
            </Link>
            <Link href="#projects" className="transition hover:text-white">
              Projects
            </Link>
            <Link href="#skills" className="transition hover:text-white">
              Skills
            </Link>
            <Link href="#contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
          <Link
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            Let’s collaborate
          </Link>
        </nav>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              React Native · 5.5+ yrs · Product Builder
            </span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              Crafted mobile journeys that scale—from streaming to hospitality to fintech.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              I’m Krishna Sawale, a React Native developer with 5.5+ years shipping production apps for healthcare, hospitality, fintech, and food delivery brands. I handle end-to-end delivery—from UI polish and animations to Redux-Saga architectures, native integrations, and store releases.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_60px_-20px_rgba(129,140,248,0.9)] transition hover:shadow-[0_24px_70px_-24px_rgba(59,130,246,0.9)]"
              >
                View signature work
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-white"
              >
                Schedule a conversation
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex h-80 w-80 items-center justify-center rounded-[36px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-[2px] shadow-[0_25px_80px_-40px_rgba(59,130,246,0.6)]">
              <div className="relative flex h-full w-full items-center justify-center rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                <div className="absolute inset-6 rounded-[28px] border border-white/10" />
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    React Native Developer
                  </span>
                  <p className="px-10 text-lg font-semibold text-white">
                    Specialized in Redux-Saga, device integrations, and delightful motion for global teams.
                  </p>
                  <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
                    Pune · Remote-friendly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section id="work" className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Experience worth trusting</h2>
          <p className="max-w-2xl text-base text-slate-300">
            A journey across startups and enterprise partners, delivering resilient React Native apps for streaming, hospitality, logistics, and finance.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 p-3">
                  <Image
                    src={experience.icon}
                    alt="Domain icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
                    {experience.period}
                  </span>
                  <span className="text-xl font-semibold text-white">
                    {experience.role}
                  </span>
                  <span className="text-sm text-slate-300">{experience.company}</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{experience.context}</p>
              <ul className="flex flex-col gap-2 text-sm text-slate-200">
                {experience.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-left before:mt-[6px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:to-indigo-400"
                  >
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Signature work</h2>
          <p className="max-w-2xl text-base text-slate-300">
            Product stories showcasing complex state management, third-party integrations, and crafted user journeys.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.palette}`} />
              <div className="mt-2 flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{project.blurb}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Expertise stack</h2>
          <p className="max-w-2xl text-base text-slate-300">
            Core languages, frameworks, and toolsets powering dependable releases across Android and iOS.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skillset) => (
            <article
              key={skillset.category}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/[0.04] to-transparent p-8 shadow-[0_20px_50px_-40px_rgba(148,163,184,0.7)]"
            >
              <h3 className="text-lg font-semibold text-white">{skillset.category}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {skillset.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Professional strengths</h2>
          <p className="max-w-2xl text-base text-slate-300">
            Principles and practices that make collaborations smooth, outcome-driven, and maintainable.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {professionalStrengths.map((strength) => (
            <div
              key={strength}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-slate-200"
            >
              {strength}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">How I partner</h2>
          <p className="max-w-2xl text-base text-slate-300">
            I embed with design, product, and backend teams to shape roadmaps, de-risk launches, and leave your codebase stronger than I found it.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-8">
            <h3 className="text-lg font-semibold text-white">Discovery & Vision</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Clarify user journeys, align on success metrics, and transform product ideas into a technical blueprint.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-8">
            <h3 className="text-lg font-semibold text-white">Build & Iterate</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Deliver pixel-perfect experiences with clean architecture, automated testing, and CI/CD baked in.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.08] p-8">
            <h3 className="text-lg font-semibold text-white">Scale & Empower</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Coach teams, codify reusable patterns, and hand off with documentation so you can keep shipping confidently.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Let’s build what’s next</h2>
          <p className="max-w-2xl text-base text-slate-300">
            Share a brief about your roadmap or the outcomes you’re chasing. I typically respond within a business day with next steps.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Start a project</h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Share a quick brief over email with the problem you’re solving, timeline expectations, and the tech stack you’re working with. I’ll follow up with discovery questions or a proposal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:ksawale62@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-[0_24px_70px_-24px_rgba(59,130,246,0.9)]"
              >
                Email Krishna
              </Link>
              <Link
                href="tel:+917802877996"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Call directly
              </Link>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              Typical response within 24 hours
            </div>
          </div>
          <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/70 p-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-white">Ways to reach me</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                Prefer async collaboration, yet always ready for focused syncs with founders, product leaders, and engineering teams.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {contactChannels.map((channel) => (
                <li key={channel.label} className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {channel.label}
                  </span>
                  <Link
                    href={channel.href}
                    className="text-lg font-semibold text-white transition hover:text-cyan-300"
                  >
                    {channel.value}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size="large"
                data-theme="dark"
                data-type="HORIZONTAL"
                data-vanity="krishna-s-bb1417175"
                data-version="v1"
              >
                <a
                  className="badge-base__link LI-simple-link text-sm"
                  href="https://in.linkedin.com/in/krishna-s-bb1417175?trk=profile-badge"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
              Open to senior React Native roles, product engineering squads, and consulting engagements worldwide.
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} Krishna Sawale. Crafted with care in React Native and Next.js.
        </span>
        <div className="flex gap-6">
          <Link href="#work" className="transition hover:text-white">
            Experience
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
