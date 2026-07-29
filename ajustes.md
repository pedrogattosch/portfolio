# Ajustes mobile — portfólio

Referência visual: `Portfolio Mobile.dc.html` (390 px). Escopo: **só responsividade** — nenhum texto, cor ou token novo. Tudo abaixo usa classes Tailwind já presentes no projeto e as variáveis de `src/App.css`.

Navegação escolhida: **menu full-screen** (overlay ocupando a tela inteira, abre pelo hambúrguer).

---

## 1. `src/components/Header.jsx` — menu mobile

Hoje o `<nav>` é `hidden ... lg:flex`, ou seja, **não existe navegação abaixo de 1024 px**. Adicionar hambúrguer + overlay usando o hook já existente `src/hooks/useToggleMenu.jsx`.

```jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import useToggleMenu from "../hooks/useToggleMenu";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const content = { /* inalterado */ };

function Header() {
  const { lang } = useLanguage();
  const { menuOpen, toggleMenu } = useToggleMenu();

  const items = [
    ["#projetos", content[lang].projetos, "01"],
    ["#tecnologias", content[lang].tecnologias, "02"],
    ["#experiencia", content[lang].experiencia, "03"],
    ["#certificacoes", content[lang].certificacoes, "04"],
    ["#sobre-mim", content[lang].sobre, "05"],
    ["#contato", content[lang].contato, "06"],
  ];

  // trava o scroll do body enquanto o overlay está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-[10px]">
      <div className="shell-padding mx-auto flex max-w-shell items-center justify-between gap-3 px-8 py-3 md:gap-5 md:py-4">
        <a href="#" className="flex shrink-0 items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[.14em] md:text-xs">
          <span className="h-2 w-2 rounded-full bg-accent" />pedro.miguel
        </a>

        <nav className="hidden items-center gap-[22px] lg:flex">
          {items.map(([href, label]) => (
            <a key={href} href={href} className="text-[12.5px] text-muted transition hover:text-text">{label}</a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Link
            to="/curriculo"
            className="inline-flex h-8 items-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2.5 text-[11.5px] font-medium text-accentSoft md:h-auto md:px-3.5 md:py-2.5 md:text-[12.5px]"
          >
            <span className="lg:hidden">CV ↗</span>
            <span className="hidden lg:inline">{content[lang].curriculo}</span>
          </Link>

          <button
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="inline-flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg border border-lineStrong bg-chip lg:hidden"
          >
            <span className="block h-px w-[15px] bg-text" />
            <span className="block h-px w-[15px] bg-text" />
            <span className="block h-px w-[15px] bg-text" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg p-5 lg:hidden">
          <div className="mb-7 flex items-center justify-between">
            <span className="flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[.14em]">
              <span className="h-2 w-2 rounded-full bg-accent" />pedro.miguel
            </span>
            <button
              onClick={toggleMenu}
              aria-label="Fechar menu"
              className="h-9 w-9 rounded-lg border border-lineStrong bg-chip text-[15px] text-text"
            >
              ✕
            </button>
          </div>

          <div className="grid gap-1">
            {items.map(([href, label, index]) => (
              <a
                key={href}
                href={href}
                onClick={toggleMenu}
                className="flex items-baseline gap-3.5 py-2.5"
              >
                <span className="min-w-[22px] font-mono text-[11px] text-faint">{index}</span>
                <span className="text-[28px] font-semibold tracking-[-.02em]">{label}</span>
              </a>
            ))}
          </div>

          <Link
            to="/curriculo"
            onClick={toggleMenu}
            className="mt-auto inline-flex items-center justify-center rounded-[10px] bg-accent px-5 py-4 text-sm font-semibold text-[var(--btn-text)]"
          >
            {content[lang].curriculo}
          </Link>
        </div>
      )}
    </header>
  );
}
```

**Toggles menores no mobile** — em `LanguageToggle.jsx` e `ThemeToggle.jsx`, trocar `h-9` por `h-8 md:h-9` (e em `ThemeToggle`, `min-w-9` → `min-w-8 md:min-w-9`). Toque continua ≥ 44 px no hambúrguer e nos links do overlay.

---

## 2. `src/components/Technologies.jsx` — fim da coluna de 120 px

O grid `grid-cols-[minmax(120px,210px)_minmax(0,1fr)]` é aplicado em todas as larguras. Empilhar no mobile:

```jsx
<div className="border-t border-line md:grid md:grid-cols-[minmax(120px,210px)_minmax(0,1fr)] md:gap-x-7">
  {categories.map(([pt, en, skills]) => (
    <Fragment key={pt}>
      <div className="pt-4 font-mono text-xs font-semibold uppercase leading-[1.5] tracking-[.1em] text-accentSoft md:border-b md:border-line md:py-4">
        {lang === "pt" ? pt : en}
      </div>
      <div className="border-b border-line pb-4 pt-1.5 text-[14.5px] leading-[1.5] text-muted md:border-b md:py-4 md:pt-4">
        {skills}
      </div>
    </Fragment>
  ))}
</div>
```

No mobile o container deixa de ser grid: categoria em cima, lista embaixo, largura total, uma borda por linha.

---

## 3. `src/components/Experience.jsx` — período acima do card

O `grid-cols-[120px_minmax(0,1fr)]` espreme a data em 3 linhas. No mobile o período vira uma linha só (o `\n` do dado é neutralizado com `whitespace-normal`):

```jsx
<div className="grid items-start gap-x-7 gap-y-6 md:grid-cols-[180px_minmax(0,1fr)] md:gap-y-5">
  {content[lang].map((item) => (
    <Fragment key={item.role}>
      <div className="whitespace-normal font-mono text-xs font-medium leading-[1.7] text-faint md:whitespace-pre-line md:pt-5">
        {item.period.replace("\n", " ")}
      </div>
      <article className={`${cardClass} px-[22px] py-5`}>
        <div className="flex flex-col gap-0.5 md:flex-row md:flex-wrap md:items-baseline md:justify-between md:gap-4">
          <h3 className="text-lg font-semibold">{item.role}</h3>
          <span className="font-mono text-xs font-medium text-faint">{item.company}</span>
        </div>
        {/* ul inalterada */}
      </article>
    </Fragment>
  ))}
</div>
```

> Se preferir não mexer no dado, use `md:whitespace-pre-line` e deixe o `whitespace-normal` colapsar a quebra — é o que o `.replace` já faz explicitamente.

Obs.: com uma coluna só no mobile, a data e o card se alternam naturalmente na ordem certa.

---

## 4. `src/components/AboutMe.jsx` — data acima do texto

Hoje: `grid-cols-[68px_26px_minmax(0,1fr)]`. No mobile, some a coluna da data e ela passa a ser a primeira linha do parágrafo:

```jsx
<div className="grid grid-cols-[22px_minmax(0,1fr)] gap-x-3.5 md:grid-cols-[92px_26px_minmax(0,1fr)] md:gap-x-5">
  {events[lang].map(([date, text], index) => {
    const first = index === 0;
    const last = index === events[lang].length - 1;
    return (
      <Fragment key={date}>
        {/* coluna de data: só no desktop */}
        <div className="hidden pb-[30px] pt-6 text-right font-mono text-[13px] font-semibold tracking-[.1em] text-accentSoft md:block">
          {date}
        </div>

        <div className="relative flex justify-center">
          <span className="absolute w-px bg-lineStrong"
            style={{ top: first ? "9px" : 0, bottom: last ? "auto" : 0, height: last ? "9px" : "auto" }} />
          <span className="relative mt-1 h-[11px] w-[11px] rounded-full border-2 border-accent md:mt-[26px]"
            style={{ background: first ? "var(--accent)" : "var(--bg)", boxShadow: "0 0 0 5px var(--accent-bg)" }} />
        </div>

        <div className="pb-[26px] md:pb-[30px] md:pt-5">
          <div className="font-mono text-[13px] font-semibold tracking-[.1em] text-accentSoft md:hidden">{date}</div>
          <p className="mt-2 max-w-[74ch] text-[14.5px] leading-[1.8] text-muted md:mt-0">{text}</p>
        </div>
      </Fragment>
    );
  })}
</div>
```

Atenção ao `top` do trilho: no mobile o ponto começa em ~9 px (a data é menor), no desktop em 31 px. Os valores acima já assumem o mobile; se quiser exatidão nos dois, use uma media query CSS em vez do `style` inline.

---

## 5. `src/components/Introduction.jsx` — hero mais leve

Três mudanças pontuais:

```jsx
{/* botões: currículo em largura total, sociais lado a lado */}
<div className="mt-7 grid gap-2.5 sm:flex sm:flex-wrap">
  <Link to="/curriculo" className={`${primaryActionClass} w-full sm:w-auto`}>{copy.resume}</Link>
  <div className="grid grid-cols-2 gap-2.5 sm:contents">
    {/* os dois <a> de LinkedIn/GitHub, com `justify-center sm:justify-start` */}
  </div>
</div>

{/* foto: 320px → 240px no mobile */}
<img src={Foto} alt="Pedro Miguel" className="h-60 w-full rounded-xl object-cover object-top md:h-80" />

{/* stats: número menor, padding menor */}
<div className="bg-panel px-[18px] py-4 md:px-5 md:py-5">
  <div className="text-2xl font-semibold text-accentSoft md:text-[28px]">{value}</div>
  ...
</div>
```

Também vale reduzir o `pt-16` do container para `pt-9 md:pt-16` e o `gap-14` do grid para `gap-8 md:gap-14`.

---

## 6. Ajustes menores

**`src/components/Projects.jsx`** — o `min-h-64` força 256 px de altura em cards curtos no mobile: `min-h-0 md:min-h-64`. O `md:gap-px` já resolve as bordas.

**`src/components/Certifications.jsx`** — evitar que o título empurre o botão: no `<div>` interno adicione `min-w-0`, no `<img>`/`<span>` do logo adicione `shrink-0`, e no `<a>` `shrink-0`.

**`src/components/Contact.jsx`** — já stacka bem; só garanta `w-full` no botão de envio no mobile: `${primaryActionClass} w-full sm:w-auto`, e `flex-col items-start gap-3 sm:flex-row sm:items-center` no wrapper do botão + mensagem de sucesso.

**`src/components/Footer.jsx`** — `flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between` e `py-6 md:py-7`.

**`src/components/ScrollToTopButton.jsx`** — `bottom-5 right-5 md:bottom-7 md:right-7` para não colidir com a barra do navegador mobile.

---

## 7. `src/pages/Resume.jsx` + `Resume.css`

A barra de ações estoura em 390 px. Empilhar:

```jsx
<div className="cv-bar mx-auto grid w-[8.5in] max-w-full gap-2.5 bg-white px-4 pb-1 pt-4 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-0">
  <button onClick={() => window.print()} className="w-full rounded-md border border-white/15 bg-[#111] px-[18px] py-2.5 font-mono text-[13.5px] font-medium text-white sm:w-auto">
    {pt ? "salvar currículo" : "save resume"}
  </button>
  <div className="flex items-center justify-between gap-4 sm:justify-end">
    <ResumeLanguageToggle lang={lang} />
    <Link to="/" className="font-mono text-[13px] text-black/65">← {pt ? "voltar ao site" : "back to site"}</Link>
  </div>
</div>
```

E em `Resume.css`, refinar o breakpoint que já existe:

```css
@media screen and (max-width: 850px) {
  .cv-sheet { width: calc(100% - 24px); height: auto; min-height: 0; margin: 12px; padding: 20px; }
  .cv-sheet h1 { font-size: 24px; }
}
```

O `@media print` continua forçando `grid-template-columns: 222px minmax(0, 1fr)` — o PDF não muda.

---

## 8. Checklist de teste

- 320 px (iPhone SE) — header sem overflow, hambúrguer visível, nenhum scroll horizontal.
- 390 px / 412 px — foto do hero em 240 px, stats 2×2, Tecnologias empilhada.
- Overlay aberto — body travado, links com alvo ≥ 44 px, fechar volta ao scroll anterior.
- Tema claro e escuro no mobile.
- `Ctrl+P` no `/curriculo` — layout de duas colunas intacto.
- ≥ 768 px e ≥ 1024 px — layout desktop idêntico ao de hoje (nada abaixo de `md:`/`lg:` mudou).
