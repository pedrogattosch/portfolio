import { useState } from "react";
import emailjs from "@emailjs/browser";
import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import { useLanguage } from "../hooks/useLanguage";
import Section from "./ui/Section";
import { cardClass, fieldClass, labelClass, primaryActionClass } from "./ui/styles";

function Contact() {
  const { lang } = useLanguage();
  const [sent, setSent] = useState(false);
  async function sendEmail(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    await emailjs.send("service_9hij8yk", "template_doh40yy", { from_name: data.get("name"), email: data.get("email"), message: data.get("message") }, "kRbXfO-nzqPm2yryh");
    form.reset();
    setSent(true);
  }
  const channels = [
    ["E-mail", "mailto:pedrogattosch@gmail.com", "pedrogattosch@gmail.com", null],
    ["LinkedIn", "https://linkedin.com/in/pedrogattosch", "pedrogattosch", LinkedIn],
    ["GitHub", "https://github.com/pedrogattosch", "pedrogattosch", GitHub],
    [lang === "pt" ? "Telefone" : "Phone", "tel:+5545991544402", "(45) 99154-4402", null],
    [lang === "pt" ? "Cidade" : "Location", null, lang === "pt" ? "Toledo, Paraná" : "Toledo, Paraná, Brazil", null],
  ];
  return <Section id="contato" title={lang === "pt" ? "Contato" : "Contact"} index="06"><div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]"><form onSubmit={sendEmail}><div className="grid gap-4 sm:grid-cols-2"><label className={labelClass}>{lang === "pt" ? "Nome" : "Name"}<input required name="name" className={`${fieldClass} mt-2 font-sans normal-case tracking-normal`} /></label><label className={labelClass}>E-mail<input required type="email" name="email" className={`${fieldClass} mt-2 font-sans normal-case tracking-normal`} /></label></div><label className={`${labelClass} mt-4 block`}>{lang === "pt" ? "Mensagem" : "Message"}<textarea required name="message" className={`${fieldClass} mt-2 min-h-[150px] resize-y font-sans normal-case tracking-normal`} /></label><div className="mt-4 flex items-center gap-4"><button className={primaryActionClass}>{lang === "pt" ? "Enviar mensagem" : "Send message"}</button>{sent && <span className="text-sm text-accentSoft">{lang === "pt" ? "Mensagem enviada com sucesso." : "Message sent successfully."}</span>}</div></form><aside className={`${cardClass} p-[22px]`}><h3 className="text-base font-semibold">{lang === "pt" ? "Canais diretos" : "Direct channels"}</h3><div className="mt-5 space-y-4">{channels.map(([label, href, value, icon]) => <div key={label}><div className={labelClass}>{label}</div>{href ? <a href={href} className="mt-1.5 flex items-center gap-2 break-all text-sm text-muted hover:text-text">{icon && <img src={icon} alt="" className="h-4 w-4" style={{ filter: "var(--icon-filter)" }} />}{value}</a> : <p className="mt-1.5 text-sm text-muted">{value}</p>}</div>)}</div></aside></div></Section>;
}
export default Contact;
