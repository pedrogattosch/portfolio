import { useState } from "react";

function useToggleMenu(initialState = false) {
  const [menuOpen, setMenuOpen] = useState(initialState);

  function toggleMenu() {
    setMenuOpen((currentState) => !currentState);
  }

  return { menuOpen, toggleMenu };
}

export default useToggleMenu;
