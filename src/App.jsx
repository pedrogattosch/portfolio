import './App.css'

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Certifications from './components/Certifications';
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import UseScrollToTop from "./hooks/useScrollToTop"

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        <Header />
        <main className="space-y-8 pb-6 sm:space-y-10">
          <Introduction />
          <Projects id="projetos" />
          <Skills id="habilidades" />
          <Experience id="experiencia" />
          <Certifications id="certificacoes" />
          <AboutMe id="sobre-mim" />
        </main>
        <Footer />
        <UseScrollToTop />
      </div>
    </div>
  );
}

export default App
