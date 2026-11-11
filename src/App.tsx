import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Technologies, Project, Benefits, Instructor, Pricing, FAQ } from './components/Sections'

export default function App() {
  return (
    <>
      <a href="#technologies" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:p-2">Skip to content</a>
      <Navbar />
      <main><Hero /><Technologies /><Project /><Benefits /><Instructor /><Pricing /><FAQ /></main>
      <Footer />
    </>
  )
}
