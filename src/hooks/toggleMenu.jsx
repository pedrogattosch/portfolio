import { useState } from "react";

function useToggleMenu(initialState = false) {
  const [menuOpen, setMenuOpen] = useState(initialState);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return { menuOpen, toggleMenu };
}

export default useToggleMenu;