import React, { Children } from "react";


interface FooterProps { 
    text: string
    children?: React.ReactNode
}

const Head:React.FC<FooterProps> = ({text,children}) => {
    

  return (
      <header className="p-2 my-8 flex flex-row justify-between items-center text-primary-font text-base">
        <h1 className="text-xl md:text-3xl">
            {text}
        </h1>
        {children}
      </header>


  );
};

export default Head;