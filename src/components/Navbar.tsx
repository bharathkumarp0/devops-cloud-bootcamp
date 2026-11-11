import { useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { NAV } from '../config'
import { RegisterButton } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-soft bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4" aria-label="Main">
        <a href="#top" className="flex items-center gap-2 font-bold text-navy">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-cyan"><Terminal size={18} /></span>
          <span className="hidden sm:inline">DevOps &amp; Cloud Bootcamp</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {NAV.map(([l, h]) => <li key={h}><a className="hover:text-brand" href={h}>{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <RegisterButton className="!px-4 !py-2 text-sm" />
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-soft bg-white px-4 pb-4 lg:hidden">
          {NAV.map(([l, h]) => (
            <li key={h}><a onClick={() => setOpen(false)} href={h} className="block py-3 font-medium text-navy">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
