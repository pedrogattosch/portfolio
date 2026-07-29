import "./App.css";

import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PageShell from "./components/layout/PageShell";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Technologies from "./components/Technologies";

function App() {
  return (
    <PageShell>
      <Header />
      <main>
        <Introduction />
        <Projects />
        <Technologies />
        <Experience />
        <Certifications />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </PageShell>
  );
}

export default App;
