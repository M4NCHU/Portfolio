import React from "react";

interface NavbarProps { 
    
}

const Navbar:React.FC<NavbarProps> = () => {
  return (
    <header>
      <nav className="flex flex-row justify-between">
        <div className="logo"></div>
          <ul>
            <li>dfasd</li>
          </ul>
      </nav>
    </header>
  );
};

export default Navbar;