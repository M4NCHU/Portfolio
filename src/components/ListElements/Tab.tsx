import React from "react";
import ActiveLink from "../Links";
import { BiMenuAltRight, BiMoon } from 'react-icons/bi';
import { AiFillGithub, AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import Icon from "../Icon";
import Button from "../Button";
import Image from "next/image";
import Logo from "../../assets/letter-m.png"
import Head from "../Headers";
import { icons } from "react-icons";


interface TabProps { 
    icon?: React.ReactNode
    title: string
}

const Tab:React.FC<TabProps> = ({icon,title}) => {
  return (
    <div className="skill flex flex-row gap-2 items-center text-primary-font bg-second-bg px-4 py-1 rounded-lg hover:bg-third-bg cursor-pointer">
        {icon}
        <p className="text-sm md:text-base">{title}</p>
    </div>
    
  );
};

export default Tab;