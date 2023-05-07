import Link from "next/link";
import React, { Children } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";


interface FooterProps { 
    text: string
    children?: React.ReactNode
    link?: string 
}

const Head:React.FC<FooterProps> = ({text,children, link}) => {
    

  return (
      <header className="p-2 my-8 flex flex-row justify-between items-center text-primary-font text-base">
        <h1 className="text-xl sm:text-3xl md:text-5xl">
            {text}
        </h1>
        {children}
        {link && 
        <Link href={link} className="flex flex-row items-center md:text-blue-500 gap-2 hover:text-second-font bg-second-info md:bg-transparent p-2 md:p-1 rounded-lg text-primary-font">
          <span className="hidden md:block">See more</span> 
          <AiOutlineArrowRight/>
        </Link>
        }
        
      </header>


  );
};

export default Head;