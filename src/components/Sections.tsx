import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Terminal, GitBranch, Container, Workflow, Cog, Ship, Cloud, Layers, Wrench, Boxes, Code2, Github, Rocket,
  Video, Hammer, Users, FileText, Briefcase, Check, ChevronDown, Linkedin, User } from 'lucide-react'
import { Reveal, RegisterButton, SectionHeading } from './ui'
import { LINKS } from '../config'

const tech = [
  [Terminal, 'Linux', 'Command line, file systems and shell scripting basics.'],
  [GitBranch, 'Git & GitHub', 'Version control and collaboration workflows.'],
  [Container, 'Docker', 'Package apps into portable containers.'],
  [Cog, 'Jenkins', 'Automate builds and deployments with pipelines.'],
  [Workflow, 'CI/CD', 'Ship code changes reliably and repeatedly.'],
  [Github, 'GitHub Actions', 'Workflow automation right inside your repository.'],
  [Ship, 'Kubernetes', 'Run and manage containerized applications.'],
  [Cloud, 'AWS', 'Core cloud services for hosting applications.'],
  [Layers, 'Terraform', 'Define infrastructure as code.'],
  [Wrench, 'Ansible', 'Automate configuration and server setup.'],
] as const

export function Technologies() {
  return (
    <section id="technologies" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading title="Technologies You Will Learn" sub="The core tools used in real software delivery teams." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {tech.map(([Icon, name, desc], i) => (
          <Reveal key={name} delay={(i % 5) * 0.05}>
            <div className="h-full rounded-2xl border border-soft bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-soft text-brand"><Icon size={22} /></span>
              <h3 className="font-bold text-navy">{name}</h3>
              <p className="mt-1 text-sm text-muted">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

const steps = [
  [Code2, 'Application Development', 'Start with a simple web application.'],
  [GitBranch, 'GitHub', 'Store code and manage versions.'],
  [Container, 'Docker', 'Containerize the app for consistent runs.'],
  [Workflow, 'Jenkins / GitHub Actions', 'Automate build, test and deploy.'],
  [Ship, 'Kubernetes', 'Understand how containers are deployed and managed.'],
  [Cloud, 'AWS', 'Deploy on cloud infrastructure.'],
] as const

export function Project() {
  return (
    <section id="project" className="bg-soft/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Not Just Theory. Build Real Projects." sub="Build, Containerize, Automate and Deploy a Web Application." />
        <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="relative h-full rounded-2xl bg-white p-4 shadow-card">
                <span className="absolute -top-3 left-4 rounded-full bg-navy px-2.5 py-0.5 text-xs font-bold text-white">{i + 1}</span>
                <Icon className="mb-3 mt-1 text-brand" size={24} />
                <h3 className="text-sm font-bold text-navy">{t}</h3>
                <p className="mt-1 text-xs text-muted">{d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
        <p className="mt-8 text-center text-sm text-muted">You implement this workflow step by step during the course.</p>
      </div>
    </section>
  )
}

const benefits = [
  [Video, 'Daily Live Interactive Classes'], [Hammer, 'Hands-on Practical Sessions'],
  [Boxes, 'Real-World Project Implementation'], [Users, 'Individual Doubt-Clearing Support'],
  [FileText, 'Resume & GitHub Profile Guidance'], [Briefcase, 'Interview Preparation & Soft Skills'],
] as const

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <SectionHeading title="More Than Just Technical Training" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(([Icon, t], i) => (
          <Reveal key={t} delay={(i % 3) * 0.05}>
            <div className="flex items-center gap-4 rounded-2xl border border-soft p-5 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy text-cyan"><Icon size={22} /></span>
              <h3 className="font-semibold text-navy">{t}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Instructor() {
  return (
    <section id="instructor" className="bg-soft/60 py-16 md:py-24">
      <div className="mx-auto grid max-w-4xl items-center gap-8 px-4 md:grid-cols-[220px_1fr]">
      <Reveal>
  <img
    src="/3VC21CI008.jpg"
    alt="Bharath Kumar P."
    className="mx-auto aspect-square w-48 rounded-3xl object-cover shadow-card md:w-full"
  />
</Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-extrabold text-navy">Learn Directly from Your Instructor</h2>
          <p className="mt-4 text-xl font-bold text-brand">Bharath Kumar P.</p>
          <p className="text-sm font-medium text-muted">DevOps | Cloud | Backend Trainer</p>
          <p className="mt-4 text-muted">Learn through practical demonstrations, guided implementation and interactive sessions focused on understanding real software development and deployment workflows.</p>
          <div className="mt-5 flex gap-3">
            {LINKS.linkedin && <a aria-label="LinkedIn" className="rounded-lg bg-white p-2 text-brand shadow-card" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>}
            {LINKS.github && <a aria-label="GitHub" className="rounded-lg bg-white p-2 text-brand shadow-card" href={LINKS.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const includes = ['30 Days Training', 'Daily Live Classes', 'Hands-on Project', 'Individual Doubt Support', 'Resume Guidance', 'Interview Preparation']

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <Reveal>
        <div className="mx-auto max-w-md rounded-3xl border-2 border-brand/20 bg-white p-8 text-center shadow-lift">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">First Batch – Introductory Fee</p>
          <p className="mt-2 text-6xl font-extrabold text-navy">₹999</p>
          <ul className="my-6 space-y-3 text-left">
            {includes.map(i => <li key={i} className="flex items-center gap-3 text-ink"><Check className="shrink-0 text-brand" size={18} />{i}</li>)}
          </ul>
          <p className="mb-5 rounded-xl bg-soft py-2 text-sm font-medium text-navy">Limited batch size: 25–30 students</p>
          <RegisterButton label="Register for the Bootcamp" className="w-full" />
        </div>
      </Reveal>
    </section>
  )
}

const faqs = [
  ['Who can join?', 'Engineering students, final-year students, fresh graduates and beginners interested in DevOps and Cloud.'],
  ['Is prior DevOps experience required?', 'No. The course starts from the fundamentals and builds up step by step.'],
  ['Are classes live?', 'Yes. Classes are conducted live online, with room for questions and interaction.'],
  ['Will practical projects be included?', 'Yes. You build, containerize, automate and deploy a web application during the course.'],
  ['How can I clear my doubts?', 'Ask during live sessions, and get individual doubt-clearing support.'],
  ['What is the course fee?', 'The first batch introductory fee is ₹999.'],
  ['How do I register?', 'Click any Register button to open the registration form. Further enrollment details are shared after you register.'],
  ['Does this program guarantee placements?', 'No. This program provides skills, practice and career preparation guidance, but placement or employment is not guaranteed.'],
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-soft/60 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q} className="rounded-2xl bg-white shadow-card">
                <h3>
                  <button className="flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left font-semibold text-navy focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan/50"
                    aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                    {q}<ChevronDown className={`shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} size={20} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-muted">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { Rocket }
