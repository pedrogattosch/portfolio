function PageShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}

export default PageShell;
