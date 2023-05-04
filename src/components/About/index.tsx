import React from "react";
import ActiveLink from "../Links";
import { BiMenuAltRight, BiMoon } from 'react-icons/bi';
import { AiFillGithub, AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import Icon from "../Icon";
import Button from "../Button";
import Image from "next/image";
import Logo from "../../assets/letter-m.png"
import Head from "../Headers";
import HeroImg from "../../assets/IMG_20210606_111743.jpg"
import Pans from "../../assets/Logo-PANS-2022-pelne-1.png"

interface AboutProps { 
    
}

const About:React.FC<AboutProps> = () => {
  return (
    <section className="about mt-28 text-primary-font mb-8">
        <Head text="A little more about me">
            <a href="" className="flex flex-row items-center gap-2 hover:text-second-font">
                See more
                <AiOutlineArrowRight/>
            </a>
        </Head>

        <div className="flex flex-col md:flex-row h-fit">
            <div className="about-left p-2">
                <Image src={HeroImg} width={512} height={512} className="rounded-lg" alt="Maciej Szwast - Profile img"/>
            </div>

            <div className="about-right p-2 w-full flex flex-col gap-4">
                <div className="about-card bg-second-bg p-2 rounded-lg">
                    <Image src={Pans} width={248} height={248} alt="pans logo"/>
                </div>
                <div className="about-card bg-second-bg p-2 rounded-lg">
                    <Image src={Pans} width={248} height={248} alt="pans logo"/>
                </div>
            </div>
        </div>
        

    </section>
  );
};

export default About;