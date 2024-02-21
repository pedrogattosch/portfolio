import React from "react";

function AboutMe() {
  return (
    <section id='sobre-mim'>
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">Sobre mim</h2>
        <div className="mt-12 relative before:absolute before:top-2 before:left-[100px] before:rounded-full before:bottom-1 before:w-[2px] before:bg-white">
          <div className="pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]">
            <h3 className="absolute top-0 left-0 font-thin">2024</h3>
            <p>
            Decidi redirecionar meu foco e retomar minha jornada na programação front-end com renovado entusiasmo e dedicação. Após uma breve pausa para me dedicar aos estudos acadêmicos, voltei aos estudos mergulhando em projetos desafiadores e expandindo meu conhecimento em frameworks e tecnologias front-end.
            </p>
          </div>
          <div className="mt-14 pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]">
            <h3 className="absolute left-0 font-thin">2023, março</h3>
            <p>
            Dei o próximo passo em minha jornada ingressando na faculdade para estudar engenharia de computação na UTFPR. Aqui, mergulhei em um mundo de desafios e oportunidades, expandindo meus horizontes além da programação front-end. Durante os primeiros semestres, concentrei-me em disciplinas introdutórias, incluindo meu primeiro contato com a linguagem C, o que me proporcionou uma base sólida em programação.
            </p>
          </div>
          <div className="mt-14 pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]">
            <h3 className="absolute left-0 font-thin">2023</h3>
            <p>
            Movido por uma curiosidade inata e uma paixão crescente pela tecnologia, dei meus primeiros passos na programação front-end, explorando as intricadas nuances do HTML, CSS e JavaScript. Foi nesse ponto que decidi compartilhar minha jornada e conhecimento, criando a página no Instagram "Hey, Dev!".
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;