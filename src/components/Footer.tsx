import { Github, Linkedin } from 'lucide-react'
import { LINKS, NAV } from '../config'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-bold">DevOps &amp; Cloud Engineering – Practical Bootcamp</p>
          <p className="mt-2 text-sm text-white/70">Instructor: Bharath Kumar P.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 font-semibold">Quick links</p>
          <ul className="space-y-2 text-sm text-white/70">
            {NAV.map(([l, h]) => <li key={h}><a className="hover:text-cyan" href={h}>{l}</a></li>)}
          </ul>
        </nav>
        <div>
          
          <div className="mt-3 flex gap-3">
            {LINKS.linkedin && <a aria-label="LinkedIn" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan"><Linkedin size={20} /></a>}
            {LINKS.github && <a aria-label="GitHub" href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan"><Github size={20} /></a>}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        <a href="/privacy.html" className="hover:text-cyan">Privacy Policy</a> · <a href="/terms.html" className="hover:text-cyan">Terms</a>
        <p className="mt-2">© {new Date().getFullYear()} Bharath Kumar P. All rights reserved.</p>
      </div>
    </footer>
  )
}
