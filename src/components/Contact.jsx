import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import ArrowLeft from '../assets/icons/arrowleft.svg'
import emailjs from '@emailjs/browser'
import { useLanguage } from "../hooks/useLanguage";

const content = {
  pt: {
    nome: "Seu nome:",
    email: "Seu e-mail:",
    mensagem: "Mensagem:",
    enviar: "Enviar",
    alerta: "Preencha todos os campos"
  },
  en: {
    nome: "Your name:",
    email: "Your email:",
    mensagem: "Message:",
    enviar: "Send",
    alerta: "Please fill in all fields"
  }
};

function Contact() {
  const { lang } = useLanguage();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(name === '' || email === '' || message === ''){
      alert(content[lang].alerta);
      return;
    }

    const templateParms = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs.send("service_9hij8yk", "template_doh40yy", templateParms, "kRbXfO-nzqPm2yryh")
    .then((response) => {
      setName('')
      setEmail('')
      setMessage('')
    })
  }

  return (
    <section className="py-20 max-w-2xl m-auto relative">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Link to="/">
            <button className="mb-4">
              <img src={ArrowLeft} className='w-4 h-4'/>
            </button>
          </Link> 
          <form className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block mb-2">{content[lang].nome}</label>
              <input type="text" id="name" name="name" className="w-full bg-black px-4 py-2 border border-zinc-800 rounded-md focus:border-white" placeholder="Fulano" onChange={(e) => setName(e.target.value)}
              value={name}/>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">{content[lang].email}</label>
              <input type="email" id="email" name="email" className="w-full bg-black px-4 py-2 border border-zinc-800 rounded-md focus:border-white" placeholder="fulano@ciclano.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">{content[lang].mensagem}</label>
              <textarea id="message" name="message" rows="4" className="w-full bg-black px-4 py-2 border border-zinc-800 rounded-md focus:outline-none focus:border-white" onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-white text-black px-4 py-2 rounded-md border hover:bg-black hover:border-white hover:text-white transition-colors duration-300">{content[lang].enviar}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
