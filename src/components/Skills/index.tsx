import React from "react";
import ActiveLink from "../Links";
import { BiGitBranch, BiMenuAltRight, BiMoon } from 'react-icons/bi';
import { AiFillGithub, AiFillHtml5, AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import Icon from "../Icon";
import Button from "../Button";
import Image from "next/image";
import Logo from "../../assets/letter-m.png"
import Head from "../Headers";
import Skill from "./Skill";
import { DiCss3, DiJava, DiJavascript, DiLinux } from "react-icons/di";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { BsFiletypeScss, BsWordpress } from "react-icons/bs";


interface SkillsProps { 
    
}

const Skills:React.FC<SkillsProps> = () => {
  return (
    

        <div className="skills flex flex-row justify-center items-center gap-4 text-lg flex-wrap mb-8">
            <Skill title="JavaScript" icon={<DiJavascript/>}/>
            <Skill title="TypeScript" icon={<TbBrandTypescript/>}/>
            <Skill title="React" icon={<FaReact/>}/>
            <Skill title="NodeJS" icon={<FaNodeJs/>}/>
            <Skill title="Linux" icon={<DiLinux/>}/>
            <Skill title="CSS" icon={<DiCss3/>}/>
            <Skill title="HTML" icon={<AiFillHtml5/>}/>
            <Skill title="Java" icon={<DiJava/>}/>
            <Skill title="Git" icon={<BiGitBranch/>}/>
            <Skill title="Tailwind" icon={<SiTailwindcss/>}/>
            <Skill title="PHP" icon={<FaPhp/>}/>
            {/* <Skill title="SCSS" icon={<BsFiletypeScss/>}/> */}
            <Skill title="Python" icon={<FaPython/>}/>
            <Skill title="WordPress" icon={<BsWordpress/>}/>
        </div>
    
    
  );
};

export default Skills;