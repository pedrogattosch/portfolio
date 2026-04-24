import { useEffect, useState } from "react";
import ArrowUp from "../assets/icons/arrowup.svg";
import { cn } from "../utils/cn";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.pageYOffset > 400);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white p-2",
        isVisible ? "visible" : "hidden"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <img src={ArrowUp} className="h-5 w-5" alt="" />
    </button>
  );
}

export default ScrollToTopButton;
