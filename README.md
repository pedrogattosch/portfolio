# Portfólio

Portfólio pessoal desenvolvido com React e Vite para apresentar projetos, tecnologias, experiências, certificações, informações de contato e links profissionais.

## Tecnologias

- React
- Vite
- JavaScript
- Tailwind CSS

## Estrutura

```text
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── assets
    │   ├── icons
    │   └── images
    ├── components
    │   ├── layout
    │   ├── ui
    │   ├── AboutMe.jsx
    │   ├── Certifications.jsx
    │   ├── Contact.jsx
    │   ├── Experience.jsx
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Introduction.jsx
    │   ├── LanguageToggle.jsx
    │   ├── Projects.jsx
    │   ├── RootLayout.jsx
    │   ├── ScrollToTopButton.jsx
    │   ├── Technologies.jsx
    │   └── ThemeToggle.jsx
    ├── contexts
    ├── hooks
    ├── styles
    └── utils
```

## Seções

- `Introduction`: apresentação inicial e links profissionais.
- `Projects`: lista de projetos, incluindo o projeto principal.
- `Technologies`: tecnologias organizadas por categoria.
- `Experience`: experiências profissionais.
- `Certifications`: certificações.
- `AboutMe`: resumo pessoal.
- `Contact`: página de contato acessada pela rota `/contato`.

## Execução

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Execute a validação com ESLint:

```bash
npm run lint
```
