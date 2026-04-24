import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Sobre mim",
    eventos: [
      {
        data: "2026",
        texto:
          "Dei um grande passo na minha carreira ao iniciar meu estágio na Inside Sistemas, minha primeira oportunidade profissional em uma empresa de tecnologia. Essa experiência tem sido fundamental para aplicar na prática os conhecimentos da faculdade e dos projetos paralelos, me inserindo de vez no mercado.",
      },
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
          "Dei o próximo passo em minha jornada ingressando na faculdade para estudar Engenharia de Computação na UTFPR. Aqui, mergulhei em um mundo de desafios e oportunidades, expandindo meus horizontes além da programação front-end. Durante os primeiros semestres, concentrei-me em disciplinas introdutórias, o que me proporcionou uma base sólida em programação.",
      },
      {
        data: "2023",
        texto:
          "Movido por uma curiosidade inata e uma paixão crescente pela tecnologia, dei meus primeiros passos na programação front-end, explorando as intricadas nuances do front-end.",
      },
    ],
  },
  en: {
    titulo: "About me",
    eventos: [
      {
        data: "2026",
        texto:
          "I took a major step in my career by starting my internship at Inside Sistemas, my first professional opportunity in a tech company. This experience has been essential to put into practice the knowledge gained from college and side projects, fully immersing me in the job market.",
      },
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
          "I took the next step in my journey by enrolling in Computer Engineering at UTFPR. Here, I immersed myself in a world of challenges and opportunities, expanding my horizons beyond front-end programming. During the first semesters, I focused on introductory subjects, which gave me a solid foundation in programming.",
      },
      {
        data: "2023",
        texto:
          "Driven by innate curiosity and a growing passion for technology, I took my first steps in front-end programming, exploring the intricate nuances of the front-end.",
      },
    ],
  },
};

function AboutMe() {
  const { lang } = useLanguage();

  return (
    <section id="sobre-mim">
      <div className="section-panel px-6 py-8 sm:px-8 sm:py-10">
        <h2 className="section-heading">{content[lang].titulo}</h2>
        <div className="mt-8">
          <div className="space-y-5">
            {content[lang].eventos.map((evento, idx) => (
              <div
                key={idx}
                className="grid gap-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start sm:gap-6"
              >
                <div className="pr-2 sm:pt-5 sm:text-right">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                    {evento.data}
                  </h3>
                </div>
                <div className="glass-card p-5 sm:p-6">
                  <p className="section-copy">{evento.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
