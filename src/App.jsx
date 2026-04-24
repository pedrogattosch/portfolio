import "./App.css";

import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PageShell from "./components/layout/PageShell";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Skills from "./components/Skills";

function App() {
  return (
    <PageShell>
      <Header />
      <main className="space-y-8 pb-6 sm:space-y-10">
        <Introduction />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <AboutMe />
      </main>
      <Footer />
      <ScrollToTopButton />
    </PageShell>
  );
}

export default App;
