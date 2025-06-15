import './App.css'

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Certifications from './components/Certifications';
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import UseScrollToTop from "./hooks/useScrollToTop"

function App() {
  return (
      <div className='max-w-3xl m-auto relative'>
        {/* Cabeçalho */}
        <Header/>
        {/* Conteúdo principal */}
        <main>
          {/* Componente de introdução */}
          <Introduction/>
          {/* Componente de projetos */}
          <Projects id="projetos"/>
          {/* Componente de certificações */}
          <Certifications id="certificacoes"/>
          {/* Componente de habilidades */}
          <Skills id="habilidades"/>
          {/* Componente de sobre mim */}
          <AboutMe id="sobre-mim"/>
        </main>
        {/* Rodapé */}
        <Footer/>
        <UseScrollToTop/>
      </div>
  );
}

export default App
