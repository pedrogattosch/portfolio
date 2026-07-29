import { useEffect, useState } from "react";
import ArrowUp from "../assets/icons/arrowup.svg";
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const onScroll = () => setVisible(window.scrollY > 500); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo" className={`fixed bottom-7 right-7 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-lineStrong bg-panel transition duration-200 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}><img src={ArrowUp} alt="" className="h-[18px] w-[18px]" style={{ filter: "var(--icon-filter)" }} /></button>;
}
export default ScrollToTopButton;
