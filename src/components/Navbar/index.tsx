import React from "react";
import ActiveLink from "../Links";
import { BiMenuAltRight, BiMoon } from 'react-icons/bi';
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";
import Icon from "../Icon";
import Button from "../Button";
import Image from "next/image";
import Logo from "../../assets/letter-m.png"

interface NavbarProps { 
    
}

const Navbar:React.FC<NavbarProps> = () => {
  return (
    <header className="header-nav fixed top-0 w-full backdrop-filter backdrop-blur-lg bg-opacity-70">
      <nav className="flex flex-row justify-between max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 bg-opacity-50">
        <div className="logo flex items-center hover:bg-primary-bg rounded-full p-1 cursor-pointer" >
          <Image src={Logo} width={36} height={36} alt="Portfolio logo"/>
        </div>
        <ul className="md:flex flex-row gap-6 hidden">
          <ActiveLink href="/" label="Home"/>
          <ActiveLink href="/about" label="About"/>
          <ActiveLink href="/projects" label="Projects"/>
          <ActiveLink href="/resume" label="Resume"/>
        </ul>
        <div className="nav-right flex flex-row items-center gap-2 text-xl text-second-font">
          <Icon icon={BiMenuAltRight} className="block md:hidden" />
          <Icon icon={BiMoon} />
          <Icon icon={AiFillGithub} />
          <Button size="small" variant="primary" addClass="text-sm flex gap-2 ml-2">
            <p className="m-0"><span className="md:inline-block hidden">Download</span>  CV</p> 
            <AiOutlineDownload/>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;