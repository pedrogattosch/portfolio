import React from "react";

function AboutMe() {
  return (
    <section id='sobre-mim'>
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">Sobre mim</h2>
        <div className="mt-12 relative before:absolute before:top-2 before:left-[100px] before:rounded-full before:bottom-1 before:w-[2px] before:bg-white">
          <div className="pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]">
            <h3 className="absolute top-0 left-0 font-thin">2025, março</h3>
            <p>
            Após concluir meu período no Exército Brasileiro, decidi retornar à faculdade de Engenharia de Computação na UTFPR com uma visão mais clara sobre minhas metas profissionais e acadêmicas. O retorno à universidade me proporciona a chance de integrar o aprendizado teórico com a prática, buscando sempre me atualizar e aprimorar minhas competências para enfrentar os desafios do mercado de tecnologia.
            </p>
          </div>
          <div className="mt-14 pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]">
            <h3 className="absolute top-0 left-0 font-thin">2024</h3>
            <p>
            Encarei a oportunidade de ingressar no Exército Brasileiro, onde atuei na seção de informática. Nesse período, pude aplicar meus conhecimentos técnicos ao realizar manutenção de equipamentos essenciais para o funcionamento da unidade. Esse período me permitiu não apenas fortalecer minhas habilidades técnicas, mas também aprimorar qualidades como disciplina, resiliência e capacidade de trabalho sob pressão, essenciais tanto no ambiente militar quanto no mercado de trabalho.
            </p>
          </div>
          <div className="mt-14 pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]">
            <h3 className="absolute left-0 font-thin">2023, março</h3>
            <p>
            Dei o próximo passo em minha jornada ingressando na faculdade para estudar Engenharia de Computação na UTFPR. Aqui, mergulhei em um mundo de desafios e oportunidades, expandindo meus horizontes além da programação front-end. Durante os primeiros semestres, concentrei-me em disciplinas introdutórias, incluindo meu primeiro contato com a linguagem C, o que me proporcionou uma base sólida em programação.
            </p>
          </div>
          <div className="mt-14 pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]">
            <h3 className="absolute left-0 font-thin">2023</h3>
            <p>
            Movido por uma curiosidade inata e uma paixão crescente pela tecnologia, dei meus primeiros passos na programação front-end, explorando as intricadas nuances do HTML, CSS e JavaScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;