import { Reveal, RegisterButton } from './ui'

const stats = [['30 Days', 'Structured plan'], ['Live Online', 'Daily classes'], ['₹999', 'Introductory fee'], ['Project-Based', 'Practical learning']]

function Illustration() {
  return (
    <svg viewBox="0 0 480 360" role="img" aria-label="Developer workstation connected to cloud, containers and a CI/CD pipeline" className="w-full">
      <rect x="0" y="0" width="480" height="360" rx="28" fill="#EAF3FF" />
      <g fill="#fff" stroke="#1769C2" strokeWidth="2.5">
        <path d="M300 110a28 28 0 0 1 4-55 40 40 0 0 1 76 8 24 24 0 0 1 2 47z" />
      </g>
      <text x="340" y="92" fontSize="14" fontWeight="700" fill="#102A56" textAnchor="middle">AWS</text>
      <rect x="60" y="130" width="230" height="150" rx="14" fill="#102A56" />
      <rect x="72" y="142" width="206" height="116" rx="8" fill="#0B1E40" />
      <g stroke="#38BDF8" strokeWidth="5" strokeLinecap="round"><path d="M88 164h70M98 184h110M98 204h60M88 224h90" /></g>
      <path d="M150 280h90l10 28H140z" fill="#1769C2" />
      <g>
        <rect x="320" y="170" width="52" height="34" rx="6" fill="#38BDF8" /><rect x="378" y="170" width="52" height="34" rx="6" fill="#1769C2" />
        <rect x="320" y="210" width="52" height="34" rx="6" fill="#1769C2" /><rect x="378" y="210" width="52" height="34" rx="6" fill="#102A56" />
        <text x="375" y="268" fontSize="12" fontWeight="600" fill="#64748B" textAnchor="middle">Containers</text>
      </g>
      <g fill="none" stroke="#1769C2" strokeWidth="2.5" strokeDasharray="6 6"><path d="M290 190h28M345 160v-20" /></g>
      <g fill="#fff" stroke="#1769C2" strokeWidth="2.5">
        {[70, 120, 170, 220].map(x => <circle key={x} cx={x} cy="327" r="9" />)}
      </g>
      <path d="M79 327h32M129 327h32M179 327h32" stroke="#1769C2" strokeWidth="2.5" />
      <text x="262" y="332" fontSize="12" fontWeight="600" fill="#64748B">CI/CD pipeline</text>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-soft/70 to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:py-20 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 inline-block rounded-full bg-soft px-3 py-1 text-sm font-semibold text-brand">Live instructor-led bootcamp</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-5xl">
            Master DevOps &amp; Cloud Engineering Through Practical Learning.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Learn modern DevOps tools, work on real-world projects and understand how applications are built, automated and deployed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <RegisterButton />
            <a href="#technologies" className="inline-flex items-center justify-center rounded-xl border border-brand/30 px-6 py-3 font-semibold text-brand transition hover:bg-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan/50">Explore Curriculum</a>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(([a, b]) => (
              <div key={a} className="rounded-2xl bg-white p-3 shadow-card">
                <dt className="font-bold text-navy">{a}</dt><dd className="text-xs text-muted">{b}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal delay={0.1}><Illustration /></Reveal>
      </div>
    </section>
  )
}
