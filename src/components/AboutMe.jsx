import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Sobre mim",
    eventos: [
      {
        data: "2025, março",
        texto:
          "Após concluir meu período no Exército Brasileiro, decidi retornar à faculdade de Engenharia de Computação na UTFPR com uma visão mais clara sobre minhas metas profissionais e acadêmicas. O retorno à universidade me proporciona a chance de integrar o aprendizado teórico com a prática, buscando sempre me atualizar e aprimorar minhas competências para enfrentar os desafios do mercado de tecnologia.",
      },
      {
        data: "2024",
        texto:
          "Encarei a oportunidade de ingressar no Exército Brasileiro, onde atuei na seção de informática. Nesse período, pude aplicar meus conhecimentos técnicos ao realizar manutenção de equipamentos essenciais para o funcionamento da unidade. Esse período me permitiu não apenas fortalecer minhas habilidades técnicas, mas também aprimorar qualidades como disciplina, resiliência e capacidade de trabalho sob pressão, essenciais tanto no ambiente militar quanto no mercado de trabalho.",
      },
      {
        data: "2023, março",
        texto:
          "Dei o próximo passo em minha jornada ingressando na faculdade para estudar Engenharia de Computação na UTFPR. Aqui, mergulhei em um mundo de desafios e oportunidades, expandindo meus horizontes além da programação front-end. Durante os primeiros semestres, concentrei-me em disciplinas introdutórias, incluindo meu primeiro contato com a linguagem C, o que me proporcionou uma base sólida em programação.",
      },
      {
        data: "2023",
        texto:
          "Movido por uma curiosidade inata e uma paixão crescente pela tecnologia, dei meus primeiros passos na programação front-end, explorando as intricadas nuances do HTML, CSS e JavaScript.",
      },
    ],
  },
  en: {
    titulo: "About me",
    eventos: [
      {
        data: "March, 2025",
        texto:
          "After completing my period in the Brazilian Army, I decided to return to the Computer Engineering program at UTFPR with a clearer vision of my professional and academic goals. Returning to university gives me the chance to integrate theoretical learning with practice, always seeking to update and improve my skills to face the challenges of the technology market.",
      },
      {
        data: "2024",
        texto:
          "I took the opportunity to join the Brazilian Army, where I worked in the IT section. During this period, I was able to apply my technical knowledge by maintaining essential equipment for the unit's operation. This experience not only strengthened my technical skills but also improved qualities such as discipline, resilience, and the ability to work under pressure, which are essential both in the military and in the job market.",
      },
      {
        data: "March, 2023",
        texto:
          "I took the next step in my journey by enrolling in Computer Engineering at UTFPR. Here, I immersed myself in a world of challenges and opportunities, expanding my horizons beyond front-end programming. During the first semesters, I focused on introductory subjects, including my first contact with the C language, which gave me a solid foundation in programming.",
      },
      {
        data: "2023",
        texto:
          "Driven by innate curiosity and a growing passion for technology, I took my first steps in front-end programming, exploring the intricate nuances of HTML, CSS, and JavaScript.",
      },
    ],
  },
};

function AboutMe() {
  const { lang } = useLanguage();

  return (
    <section id="sobre-mim">
      <div className="container m-auto px-5 py-10">
        <h2 className="text-xl font-semibold">{content[lang].titulo}</h2>
        <div className="mt-12 relative before:absolute before:top-2 before:left-[100px] before:rounded-full before:bottom-1 before:w-[2px] before:bg-white">
          {content[lang].eventos.map((evento, idx) => (
            <div
              key={idx}
              className={`mt-${
                idx === 0 ? "0" : "14"
              } pl-[120px] relative before:top-2 before:w-2 before:h-2 before:bg-white before:absolute before:rounded-full before:left-[97px]`}
            >
              <h3 className="absolute top-0 left-0 font-thin">{evento.data}</h3>
              <p className="mb-6">{evento.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
