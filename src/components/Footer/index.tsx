import React from "react";
import Navbar from "../Navbar";


interface FooterProps { 
    
}

const Footer:React.FC<FooterProps> = () => {
    const current = new Date()
    const date = current.getFullYear()

  return (
      <footer className="bg-second-bg text-second-font">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          Copyright © {date} Maciej Szwast
        </div>
      </footer>
  );
};

export default Footer;