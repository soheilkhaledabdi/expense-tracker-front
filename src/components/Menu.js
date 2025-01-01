import React, { useState } from "react";

function Menu({ changePage, openLoginModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={toggleMenu}>
        ☰ Menu
      </button>
      {isOpen && (
        <div className="menu-items">
          <ul>
            <li><button onClick={() => changePage("home")}>Home</button></li> {}
            <li><button onClick={() => changePage("about")}>About</button></li> {}
            <li><button onClick={openLoginModal}>Login</button></li> {}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
