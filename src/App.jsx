import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ArrowDown,
    ArrowUpRight,
    Download,
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    ExternalLink,
    LockKeyhole,
    Code2,
    GraduationCap,
    BriefcaseBusiness,
    Award,
} from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Reveal from "./components/Reveal.jsx";
import {
    profile,
    experience,
    projects,
    skills,
    education,
    certifications,
} from "./data/content.js";
gsap.registerPlugin(ScrollTrigger);
function Heading({ n, kicker, title, sub }) {
    return (
        <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow">
                {n} / {kicker}
            </p>
            <h2 className="section-title">{title}</h2>
            {sub && (
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">{sub}</p>
            )}
        </Reveal>
    );
}
function App() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-copyline", {
                y: 55,
                opacity: 0,
                duration: 1,
                stagger: 0.13,
                ease: "power4.out",
                delay: 0.15,
            });
            gsap.from(".hero-intro", {
                y: 22,
                opacity: 0,
                duration: 0.8,
                delay: 0.75,
            });
            gsap.utils.toArray(".gsap-reveal").forEach((el) =>
                gsap.fromTo(
                    el,
                    { y: 48, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.85,
                        ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 86%", once: true },
                    },
                ),
            );
            gsap.to(".float-orb-a", {
                y: -38,
                x: 22,
                duration: 6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".float-orb-b", {
                y: 32,
                x: -18,
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }, document.body);
        return () => ctx.revert();
    }, []);
    return (
        <div className="min-h-screen overflow-hidden bg-ink text-white">
            <div className="ambient-bg" aria-hidden="true">
                <i className="float-orb-a" />
                <i className="float-orb-b" />
                <i className="orbit orbit-a" />
                <i className="orbit orbit-b" />
                <i className="grid-glow" />
            </div>
            <Navbar />
            <main>
                <section
                    id="home"
                    className="wrap relative flex min-h-[850px] items-center pb-24 pt-36"
                >
                    <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
                        <div>
                            <p className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.03] px-4 py-2 font-mono text-[10px] uppercase tracking-[.18em] text-zinc-300">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                Open to opportunities
                            </p>
                            <h1 className="max-w-4xl text-[clamp(3.2rem,8vw,7rem)] font-extrabold leading-[.98] tracking-[-.075em]">
                                <span className="hero-copyline block">Building Digital</span>
                                <span className="hero-copyline block text-gradient">
                                    Experiences<span className="text-violet">.</span>
                                </span>
                                <span className="hero-copyline mt-5 block text-[clamp(1.35rem,3vw,2.2rem)] font-semibold tracking-[-.04em] text-zinc-400">
                                    I'm {profile.name} — {profile.role}.
                                </span>
                            </h1>
                            <p className="hero-intro mt-8 max-w-xl text-base leading-8 text-zinc-400">
                                {profile.intro}
                            </p>
                            <div className="hero-intro mt-9 flex flex-wrap gap-3">
                                <a href="#projects" className="primary-btn">
                                    Explore my work <ArrowUpRight size={16} />
                                </a>
                                <a href="/resume.pdf" download className="secondary-btn">
                                    <Download size={15} /> Download CV
                                </a>
                            </div>
                            <div className="hero-intro mt-12 flex flex-wrap gap-6 text-xs text-zinc-500">
                                <span className="inline-flex items-center gap-2">
                                    <MapPin size={14} className="text-violet" />
                                    {profile.location}
                                </span>
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 hover:text-white"
                                >
                                    <Github size={14} /> GitHub
                                </a>
                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 hover:text-white"
                                >
                                    <Linkedin size={14} /> LinkedIn
                                </a>
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="inline-flex items-center gap-2 hover:text-white"
                                >
                                    <Mail size={14} /> Email
                                </a>
                            </div>
                        </div>
                        <div className="profile-frame mx-auto w-full max-w-[370px]">
                            <div className="profile-halo" />
                            <div className="profile-image-box relative overflow-hidden">
                                <img
                                    src="/dijo-pic.jpeg"
                                    alt="Dijo C.G. profile"
                                    className="relative z-0 h-full w-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = "none";
                                    }}
                                />

                                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                <div className="profile-placeholder">
                                    <span className="font-mono text-9xl font-medium tracking-[-.1em]">
                                        D
                                    </span>
                                </div>
                            </div>
                            <div className="profile-caption">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />{" "}
                                Full-Stack Developer <span className="text-zinc-600">/</span>{" "}
                                Kerala, India
                            </div>
                        </div>
                    </div>
                    <a
                        href="#about"
                        className="absolute animate-bounce bottom-9 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] text-zinc-600 md:flex"
                    >
                        Scroll to explore <ArrowDown size={14} />
                    </a>
                </section>
                <section id="about" className="section wrap">
                    <Heading n="01" kicker="About" title="A little about me." />
                    <Reveal>
                        <p className="max-w-4xl text-xl font-medium leading-9 tracking-tight text-zinc-200 sm:text-2xl">
                            {profile.about}
                        </p>
                        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div className="stat">
                                <b>
                                    1<span>+</span>
                                </b>
                                <small>Year professional experience</small>
                            </div>
                            <div className="stat">
                                <b>3</b>
                                <small>Workplaces and internships</small>
                            </div>
                            <div className="stat col-span-2 sm:col-span-1">
                                <b>BCA</b>
                                <small>University of Calicut · 2024</small>
                            </div>
                        </div>
                    </Reveal>
                </section>
                <section
                    id="experience"
                    className="section border-y border-white/[.05] bg-white/[.015]"
                >
                    <div className="wrap">
                        <Heading
                            n="02"
                            kicker="Experience"
                            title="Where I've worked."
                            sub="My professional journey, the teams I've worked with, and the experience I've gained along the way."
                        />
                        <div className="timeline">
                            {experience.map((job, i) => (
                                <Reveal
                                    key={job.company}
                                    delay={i * 0.07}
                                    className="timeline-item"
                                >
                                    <div className="timeline-date">{job.period}</div>
                                    <div>
                                        <h3 className="text-lg font-bold">{job.role}</h3>
                                        <p className="mt-1 text-sm text-violet">
                                            {job.company} <span className="text-zinc-600">/</span>{" "}
                                            <span className="text-zinc-500">{job.place}</span>
                                        </p>
                                        <ul className="mt-5 space-y-3">
                                            {job.points.map((p) => (
                                                <li key={p} className="bullet">
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="skills" className="section wrap">
                    <Heading
                        n="03"
                        kicker="Toolkit"
                        title="Tools I work with."
                        sub="Technologies and engineering practices listed in my resume."
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                        {skills.map((g, i) => (
                            <Reveal key={g.name} delay={i * 0.06} className="skill-panel">
                                <div className="mb-5 flex items-center gap-3">
                                    <span className="rounded-lg bg-violet/10 p-2 text-violet">
                                        <Code2 size={17} />
                                    </span>
                                    <h3 className="font-bold">{g.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {g.items.map((s) => (
                                        <span className="chip" key={s}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
                <section
                    id="projects"
                    className="section border-y border-white/[.05] bg-white/[.015]"
                >
                    <div className="wrap">
                        <Heading
                            n="04"
                            kicker="Selected work"
                            title="Projects with purpose."
                            sub="A collection of projects showcasing my technical skills, creativity, and passion for building meaningful digital experiences."
                        />
                        <div className="grid gap-5 lg:grid-cols-2 cursor-pointer">
                            {projects.map((p, i) => (
                                <Reveal
                                    key={p.title}
                                    delay={(i % 2) * 0.07}
                                    className="project-card"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="font-mono text-xs text-violet">
                                            /{String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-right text-[10px] uppercase tracking-wider text-zinc-500">
                                            {p.kind}
                                        </span>
                                    </div>
                                    <h3 className="mt-7 text-xl font-bold">{p.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                                        {p.description}
                                    </p>
                                    <ul className="mt-5 space-y-2">
                                        {p.features.map((f) => (
                                            <li className="bullet" key={f}>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {p.stack.map((s) => (
                                            <span className="chip" key={s}>
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-7 flex flex-wrap gap-5 border-t border-white/[.07] pt-5 text-xs font-semibold">
                                        {p.repo && (
                                            <a
                                                className="inline-flex items-center gap-2 hover:text-violet"
                                                href={p.repo}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Github size={14} /> Source code{" "}
                                                <ExternalLink size={12} />
                                            </a>
                                        )}
                                        {p.demo && (
                                            <a
                                                className="inline-flex items-center gap-2 hover:text-violet"
                                                href={p.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Live demo <ExternalLink size={12} />
                                            </a>
                                        )}
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                        <div className="mt-8 text-right">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex animate-pulse items-center gap-2 text-xs text-violet hover:text-white"
                            >
                                Explore GitHub <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </section>
                <section id="education" className="section wrap">
                    <Heading n="05" kicker="Education" title="Academic background." />
                    <div className="grid gap-4">
                        {education.map((e, i) => (
                            <Reveal
                                key={e.school}
                                delay={i * 0.06}
                                className="education-card"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="rounded-xl border border-violet/20 bg-violet/10 p-3 text-violet">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h3 className="font-bold">{e.school}</h3>
                                            <span className="font-mono text-xs text-violet">
                                                {e.year}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm text-zinc-400">{e.course}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>
                <section
                    id="certifications"
                    className="section border-y border-white/[.05] bg-white/[.015]"
                >
                    <div className="wrap">
                        <Heading
                            n="06"
                            kicker="Certifications"
                            title="Learning & certifications."
                            sub="A continuous journey of learning, skill development, and professional growth."
                        />
                        <div className="grid gap-3 md:grid-cols-2">
                            {certifications.map((c, i) => (
                                <Reveal
                                    key={c.name}
                                    delay={(i % 2) * 0.05}
                                    className="cert-card"
                                >
                                    <div className="rounded-lg bg-violet/10 p-2.5 text-violet">
                                        <Award size={17} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold leading-6">
                                            {c.name}
                                        </h3>
                                        <p className="mt-1 text-xs text-zinc-500">
                                            {c.issuer}
                                            {c.date ? ` · ${c.date}` : ""}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="wrap py-28 sm:py-36">
                    <div className="contact-panel relative overflow-hidden rounded-[2rem] border border-violet/20 px-6 py-14 text-center sm:px-12 sm:py-20">
                        <div className="relative">
                            <p className="eyebrow justify-center">07 / Contact</p>
                            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-[-.06em] sm:text-6xl">
                                Let's build something useful
                                <span className="text-violet">.</span>
                            </h2>
                            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400">
                                Open to software development opportunities and roles where I can
                                contribute, learn and build useful products.
                            </p>
                            <a href={`mailto:${profile.email}`} className="primary-btn mt-9">
                                Get in touch <ArrowUpRight size={16} />
                            </a>
                            <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-4 text-xs text-zinc-400">
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="inline-flex items-center gap-2 hover:text-white"
                                >
                                    <Mail size={14} />
                                    {profile.email}
                                </a>
                                <a
                                    href={`tel:${profile.phone.replaceAll(" ", "")}`}
                                    className="inline-flex items-center gap-2 hover:text-white"
                                >
                                    <Phone size={14} />
                                    {profile.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-white/[.06]">
                <div className="wrap flex flex-col items-center justify-between gap-4 py-7 text-xs text-zinc-600 sm:flex-row">
                    <a href="#home" className="font-mono text-sm text-zinc-300">
                        Dijo C<span className="text-violet">.</span>G
                    </a>
                    <p>© {new Date().getFullYear()} Dijo C.G. · React + Tailwind CSS</p>
                    <div className="flex gap-4">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="hover:text-violet"
                        >
                            <Github size={16} />
                        </a>
                        {profile.linkedin && (
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-violet"
                            >
                                <Linkedin size={16} />
                            </a>
                        )}
                        <a
                            href={`mailto:${profile.email}`}
                            aria-label="Email"
                            className="hover:text-violet"
                        >
                            <Mail size={16} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default App;
