import React from "react";
import Navbar from "../Navbar";
import Button from "../Button";
import ListItem from "./ListItem";
import { TbBrandNextjs } from 'react-icons/tb';
import { SiJavascript } from 'react-icons/si';
import { DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';


interface HeroProps { 
    
}

const Hero:React.FC<HeroProps> = () => {
    const current = new Date()
    const date = current.getFullYear()

  return (
      <section className="hero flex md:flex-row flex-col justify-center items-center text-primary-font mt-4 md:-mt-8 min-h-screen">
        <div className="hero-left px-1 md:px-4">
            <div className="hero-title">
                <p className="text-blue-500">Welcome to my profile</p>
                <h1 className="text-4xl md:text-7xl font-extrabold">I'm <strong className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Maciek Szwast</strong>, a Fullstack developer</h1>
            </div>
            <div className="hero-technologies mt-4">
                <ul className="flex flex-row gap-6 flex-wrap">
                    <ListItem label="NextJS" icon={<TbBrandNextjs/>}/>
                    <ListItem label="JavaScript" icon={<SiJavascript/>}/>
                    <ListItem label="ReactJS" icon={<DiReact/>}/>
                    <ListItem label="TailwindCSS" icon={<SiTailwindcss/>}/>
                </ul>
            </div>
            <div className="hero-info mt-4">
                <p className="m-0">Hi, I'm Maciek, a web developer with a passion for creating beautiful and functional websites.  I specialize in developing responsive and user-friendly websites using modern technologies such as HTML, CSS, JavaScript, and React. </p>
                <p className="mt-2">My goal is to deliver high-quality solutions. When I'm not coding, you can find me exploring the outdoors or tinkering with new technologies. Let's build something great together!</p>
            </div>

            <div className="hero-buttons flex gap-6 mt-6">
                <Button variant="primary">
                    <p>Download CV</p> 
                </Button>
                <Button addClass="bg-second-bg text-white hover:bg-third-bg">
                    <p className="text-primary-font">Check Resume</p>
                </Button>
            </div>
        </div>
        <div className="hero-right p-1 md:p-2 md:mt-0 mt-12">

            <section className="hero-hobbys mb-4 flex flex-row gap-2">
                <Button size="small" variant="success" addClass="border-2 border-green-800">
                    <p className="text-primary-font">Running</p>
                </Button>
                <Button size="small" variant="primary" addClass="border-2 border-blue-800">
                    <p className="text-primary-font">Movies</p>
                </Button>

                <Button size="small" variant="danger" addClass="border-2 border-red-800">
                    <p className="text-primary-font">Books</p>
                </Button>
                
                <Button size="small" variant="warning" addClass="border-2 border-yellow-800">
                    <p className="text-primary-font">Cooking</p>
                </Button>
            </section>

           <section className="code bg-second-bg rounded-md border border-gray-500 w-full min-w-0 md:min-w-[24rem] p-4">
                <div className="code-header flex flex-row justify-between items-center border-b border-b-gray-500 mb-2">
                    <div className="code-actions">

                    </div>
                    <div className="code-title">
                        <p>/index.tsx</p>
                    </div>
                    <div className="code-copy">

                    </div>
                </div>

                <div className="code text-xs">
                    
                        <code className="">
                            <p className=""><span className="text-primary-danger">import</span>  &#123; <span className="text-primary-warning">FC</span> &#125; <span className="text-primary-danger">from</span> "react";</p> 
                            <br />
                            <p className=""><span className="text-primary-danger">interface</span> WelcomeProps = &#123;</p>
                            <p className="ml-4">uses:</p>
                            <p className="ml-8">| <span className="text-primary-success">"explore new tech"</span></p>
                            <p className="ml-8">| <span className="text-primary-success">"display my skills"</span></p>
                            <p className="ml-8">| <span className="text-primary-success">"find freelancing opportunities"</span></p>
                            <p className="ml-8">| <span className="text-primary-success">"find a fulltime job";</span></p>
                            <p>&#125;;</p>
                            <br />
                            <p className=""><span className="text-primary-danger">export const</span> Welcome: <span className="text-primary-warning">FC</span>&lt;WelcomeProps&gt; = (&#123; uses &#125;) =&gt; &#123;</p>
                            <p className="ml-4"><span className="text-primary-danger">return</span> &#40; </p>
                            <p className="ml-6">&lt;&gt;</p>
                            <p className="ml-8">&lt;h1&gt;This is my little slice of the internet.&lt;/h1&gt;</p>
                            <p className="ml-8">&lt;p&gt;</p>
                            <p className="ml-10">I use this site to &lt;em&gt;&#123;uses&#125;&lt;/em&gt;.</p>
                            <p className="ml-8"> &lt;/p&gt;</p>
                            <p className="ml-6">&lt;/&gt;</p>
                            <p className="ml-4">&#41;;</p>
                            <p className="">&#125;;</p>
                            <br />
                            <p className=""><span className="text-primary-danger">export default</span> Welcome;</p>
                            <p className="ml-4"></p>

                            
                                
                                
                                
                        
                        </code>
                    
                </div>
           </section>
        </div>
        
      </section>
  );
};

export default Hero;