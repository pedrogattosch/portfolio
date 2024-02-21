import './App.css'

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Others from "./components/Others";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import UseScrollToTop from "./hooks/useScrollToTop"

function App() {
  return (
    <>
      <div className='max-w-3xl m-auto relative'>
        {/* Cabeçalho */}
        <Header/>
        {/* Conteúdo principal */}
        <main>
          {/* Componente de introdução */}
          <Introduction/>
          {/* Componente de projetos */}
          <Projects id="projetos"/>
          {/* Componente de tecnologias */}
          <Technologies id="tecnologias"/>
          {/* Componente de outras tecnologias e habilidades */}
          <Others/>
          {/* Componente de sobre mim */}
          <AboutMe id="sobre-mim"/>
        </main>
        {/* Rodapé */}
        <Footer/>
        <UseScrollToTop/>
      </div>
    </>
  )
}

export default App
