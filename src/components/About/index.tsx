import React from "react";
import ActiveLink from "../Links";
import { BiMenuAltRight, BiMoon } from 'react-icons/bi';
import { AiFillGithub, AiOutlineArrowRight, AiOutlineClockCircle, AiOutlineDownload } from "react-icons/ai";
import Icon from "../Icon";
import Button from "../Button";
import Image from "next/image";
import Logo from "../../assets/letter-m.png"
import Head from "../Headers";
import HeroImg from "../../assets/IMG_20210606_111743.jpg"
import Pans from "../../assets/pans.png"
import Zsp5 from "../../assets/zsp5.png"
import Skills from "../Skills";
import TimelineBlock from "./TimelineBlock";

interface AboutProps { 
    
}

const About:React.FC<AboutProps> = () => {
  return (
    <section className="about mt-28 text-primary-font mb-8">
        <Head text="A little more about me" link="/about">
            
        </Head>


        <div className="flex flex-col lg:flex-row h-fit">
            <div className="about-left p-2 flex items-center">
                <Image src={HeroImg} width={1024} height={1024} className="rounded-lg" alt="Maciej Szwast - Profile img"/>
            </div>

            <div className="about-right w-full flex flex-col gap-4 pl-0 md:pl-8 mt-4 lg:mt-0">
                <h3 className="text-center">My education:</h3>
                <div className="container mx-auto py-2">
                    <div className="relative md:flex">
                        <div className="md:w-1/2 md:pr-6">
                        
                        <TimelineBlock image={Zsp5 as string} title="ZSP 5 w Krośnie" desc="My education in a technical high school specializing in computer science." years="2017-2021"/>
                        </div>
                        <div className="md:w-1/2 md:pl-6 mt-12">
                        <TimelineBlock image={Pans as string} title="PANS Krosno" desc="I studied computer science at the university, where I gained knowledge  in various programming languages, algorithms, software development methodologies, and database management." years="2021-Now"/>
                        
                        </div>
                        <div className="hidden md:block absolute inset-y-0 left-1/2 w-0.5 bg-third-bg"></div>
                        <div className="hidden md:block absolute md:left-1/2 md:top-1/2 w-6 h-6 rounded-full bg-second-bg shadow transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                </div>


                {/* <div className="about-card bg-second-bg p-2 rounded-lg">
                    <Image src={Pans} width={248} height={248} alt="pans logo"/>
                </div> */}
                <h3 className="text-center">Here are a few technologies I've been working with:</h3>
                <Skills/>
            </div>
        </div>

        

    </section>
  );
};

export default About;