import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { cardClass, fieldClass, labelClass, primaryActionClass } from "./ui/styles";

const messages = {
  pt: {
    idle: "Enviar mensagem",
    sending: "Enviando...",
    success: "Mensagem enviada com sucesso.",
    error: "Não foi possível enviar a mensagem. Tente novamente.",
  },
  en: {
    idle: "Send message",
    sending: "Sending...",
    success: "Message sent successfully.",
    error: "The message could not be sent. Please try again.",
  },
};

function Contact() {
  const { lang } = useLanguage();
  const [status, setStatus] = useState("idle");
  const sendingRef = useRef(false);

  async function sendEmail(event) {
    event.preventDefault();
    if (sendingRef.current) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    sendingRef.current = true;
    setStatus("sending");

    try {
      await emailjs.send("service_9hij8yk", "template_doh40yy", { from_name: data.get("name"), email: data.get("email"), message: data.get("message") }, "kRbXfO-nzqPm2yryh");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      sendingRef.current = false;
    }
  }

  const channels = [
    ["E-mail", "mailto:pedrogattosch@gmail.com", "pedrogattosch@gmail.com", null],
    ["LinkedIn", "https://linkedin.com/in/pedrogattosch", "pedrogattosch", LinkedIn],
    ["GitHub", "https://github.com/pedrogattosch", "pedrogattosch", GitHub],
    [lang === "pt" ? "Cidade" : "Location", null, lang === "pt" ? "Toledo, Paraná" : "Toledo, Paraná, Brazil", null],
  ];
  const feedback = status === "success" || status === "error" ? messages[lang][status] : null;

  return <Section id="contato" title={lang === "pt" ? "Contato" : "Contact"} index="06"><div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]"><form onSubmit={sendEmail}><div className="grid gap-4 sm:grid-cols-2"><label className={labelClass}>{lang === "pt" ? "Nome" : "Name"}<input required name="name" className={`${fieldClass} mt-2 font-sans normal-case tracking-normal`} /></label><label className={labelClass}>E-mail<input required type="email" name="email" className={`${fieldClass} mt-2 font-sans normal-case tracking-normal`} /></label></div><label className={`${labelClass} mt-4 block`}>{lang === "pt" ? "Mensagem" : "Message"}<textarea required name="message" className={`${fieldClass} mt-2 min-h-[150px] resize-y font-sans normal-case tracking-normal`} /></label><div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center"><button disabled={status === "sending"} className={`${primaryActionClass} w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto`}>{messages[lang][status === "sending" ? "sending" : "idle"]}</button><span aria-live="polite" className={`text-sm ${status === "error" ? "text-red-400" : "text-accentSoft"}`}>{feedback}</span></div></form><aside className={`${cardClass} p-[22px]`}><h3 className="text-base font-semibold">{lang === "pt" ? "Canais diretos" : "Direct channels"}</h3><div className="mt-5 space-y-4">{channels.map(([label, href, value, icon]) => <div key={label}><div className={labelClass}>{label}</div>{href ? <a href={href} className="mt-1.5 flex items-center gap-2 break-all text-sm text-muted hover:text-text">{icon && <img src={icon} alt="" className="h-4 w-4" style={{ filter: "var(--icon-filter)" }} />}{value}</a> : <p className="mt-1.5 text-sm text-muted">{value}</p>}</div>)}</div></aside></div></Section>;
}

export default Contact;
