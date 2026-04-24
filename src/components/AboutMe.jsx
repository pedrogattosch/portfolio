import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    titulo: "Sobre mim",
    eventos: [
      {
        data: "2026",
        texto:
          "Iniciei meu estágio na Inside Sistemas, minha primeira experiência profissional em tecnologia. Esse passo tem sido essencial para aplicar na prática o que venho construindo na faculdade e nos projetos paralelos.",
      },
      {
        data: "2025, março",
        texto:
          "Após o período no Exército Brasileiro, retornei à Engenharia de Computação na UTFPR com objetivos profissionais mais claros. Desde então, tenho buscado integrar base teórica, prática e evolução constante na área de tecnologia.",
      },
      {
        data: "2024",
        texto:
          "Atuei no Exército Brasileiro, na seção de informática, com manutenção de equipamentos essenciais para a operação da unidade. A experiência fortaleceu minha disciplina, resiliência e atuação sob pressão.",
      },
      {
        data: "2023, março",
        texto:
          "Ingressei em Engenharia de Computação na UTFPR e ampliei minha visão além do front-end. Os primeiros semestres consolidaram minha base em programação e pensamento técnico.",
      },
      {
        data: "2023",
        texto:
          "Comecei meus estudos em programação pelo front-end, etapa que despertou meu interesse pela área e marcou o início da minha trajetória em tecnologia.",
      },
    ],
  },
  en: {
    titulo: "About me",
    eventos: [
      {
        data: "2026",
        texto:
          "I started my internship at Inside Sistemas, my first professional experience in technology. This step has been essential for applying in practice what I have been building through university and side projects.",
      },
      {
        data: "March, 2025",
        texto:
          "After my time in the Brazilian Army, I returned to Computer Engineering at UTFPR with clearer professional goals. Since then, I have been focused on connecting theory, practice, and continuous growth in technology.",
      },
      {
        data: "2024",
        texto:
          "I worked in the IT section of the Brazilian Army, maintaining essential equipment for the unit's operation. The experience strengthened my discipline, resilience, and ability to perform under pressure.",
      },
      {
        data: "March, 2023",
        texto:
          "I started Computer Engineering at UTFPR and expanded my perspective beyond front-end development. The first semesters helped build a solid foundation in programming and technical thinking.",
      },
      {
        data: "2023",
        texto:
          "I began my programming studies through front-end development, which sparked my interest in the field and marked the beginning of my journey in technology.",
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
