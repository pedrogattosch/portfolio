import { useState, useEffect } from 'react';
import ArrowUp from '../assets/icons/arrowup.svg'

function useScrollToTop() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 ${scrolling ? 'visible' : 'hidden'}`} 
      onClick={scrollToTop}
    >
      <img src={ArrowUp} className='w-5 h-5 mx-auto my-auto'/>
    </button>
  );
}

export default useScrollToTop;
