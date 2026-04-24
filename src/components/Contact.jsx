import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import ArrowLeft from "../assets/icons/arrowleft.svg";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import PageShell from "./layout/PageShell";
import GlassCard from "./ui/GlassCard";
import {
  inputFieldClass,
  primaryActionClass,
  secondaryActionClass,
  sectionPanelClass,
  textAreaFieldClass,
} from "./ui/styles";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function updateField(field) {
    return (event) => {
      const { value } = event.target;

      setFormData((currentData) => ({
        ...currentData,
        [field]: value,
      }));
    };
  }

  function sendEmail(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert(content[lang].alerta);
      return;
    }

    emailjs
      .send(
        "service_9hij8yk",
        "template_doh40yy",
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "kRbXfO-nzqPm2yryh"
      )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  }

  return (
    <PageShell>
      <section className="pt-8 sm:pt-10">
        <div className={`${sectionPanelClass} overflow-hidden`}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link to="/" className={secondaryActionClass}>
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
            <GlassCard className="mx-auto w-full max-w-3xl p-6 sm:p-8">
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
                    className={inputFieldClass}
                    placeholder="Fulano"
                    onChange={updateField("name")}
                    value={formData.name}
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
                    className={inputFieldClass}
                    placeholder="fulano@ciclano.com"
                    onChange={updateField("email")}
                    value={formData.email}
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
                    className={textAreaFieldClass}
                    onChange={updateField("message")}
                    value={formData.message}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className={`${primaryActionClass} w-full`}
                  >
                    {content[lang].enviar}
                  </button>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default Contact;
