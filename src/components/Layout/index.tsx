import React from "react";
import Navbar from "../Navbar";


interface LayoutProps { 
    children: React.ReactNode
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          Footer content here
        </div>
      </footer>
    </div>
  );
};

export default Layout;