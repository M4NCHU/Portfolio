import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";


interface LayoutProps { 
    children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;