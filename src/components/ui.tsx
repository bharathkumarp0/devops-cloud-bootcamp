import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { REGISTRATION_URL } from '../config'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.45, delay }}>
      {children}
    </motion.div>
  )
}

export function RegisterButton({ label = 'Register Now', variant = 'primary', className = '' }:
  { label?: string; variant?: 'primary' | 'light'; className?: string }) {
  const styles = variant === 'primary'
    ? 'bg-brand text-white hover:bg-navy shadow-lift'
    : 'bg-white text-navy hover:bg-soft'
  return (
    <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan/50 ${styles} ${className}`}>
      {label} <ArrowRight size={18} aria-hidden />
    </a>
  )
}

export function SectionHeading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted">{sub}</p>}
    </div>
  )
}
