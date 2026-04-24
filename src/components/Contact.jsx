import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/icons/arrowleft.svg";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

const content = {
  pt: {
    titulo: "Contato",
    voltar: "Voltar para o portfólio",
    nome: "Seu nome:",
    email: "Seu e-mail:",
    mensagem: "Mensagem:",
    enviar: "Enviar",
    alerta: "Preencha todos os campos",
  },
  en: {
    titulo: "Contact",
    voltar: "Back to portfolio",
    nome: "Your name:",
    email: "Your email:",
    mensagem: "Message:",
    enviar: "Send",
    alerta: "Please fill in all fields",
  },
};

function Contact() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert(content[lang].alerta);
      return;
    }

    const templateParms = {
      from_name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_9hij8yk",
        "template_doh40yy",
        templateParms,
        "kRbXfO-nzqPm2yryh"
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      });
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        <div className="section-panel overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-400/35 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/30"
              >
                <img
                  src={ArrowLeft}
                  className={`h-4 w-4 ${theme === "light" ? "invert" : ""}`}
                  alt=""
                />
                <span>{content[lang].voltar}</span>
              </Link>
            </div>

            <div className="max-w-2xl">
              <h1 className="section-heading text-3xl sm:text-4xl">
                {content[lang].titulo}
              </h1>
            </div>
          </div>

          <div className="mt-8">
            <div className="glass-card mx-auto w-full max-w-3xl p-6 sm:p-8">
              <form className="grid gap-5 sm:gap-6" onSubmit={sendEmail}>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    {content[lang].nome}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 transition duration-300 focus:outline-none focus-visible:border-cyan-400/40 focus-visible:ring-2 focus-visible:ring-cyan-400/20"
                    placeholder="Fulano"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    {content[lang].email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 transition duration-300 focus:outline-none focus-visible:border-cyan-400/40 focus-visible:ring-2 focus-visible:ring-cyan-400/20"
                    placeholder="fulano@ciclano.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    {content[lang].mensagem}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="min-h-[180px] w-full rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 transition duration-300 focus:outline-none focus-visible:border-cyan-400/40 focus-visible:ring-2 focus-visible:ring-cyan-400/20"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-50 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/30"
                  >
                    {content[lang].enviar}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
