'use client'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 pointer-events-none" />
      
      {/* Floating background elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="fixed top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="fixed bottom-20 left-1/4 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      <div className="fixed bottom-40 right-1/3 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;