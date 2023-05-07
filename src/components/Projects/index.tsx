import React from 'react';

import Project from './Project';
import Head from '../Headers';
import todo from "../../assets/todoapp.png"


interface ProjectsProps {
}

const Projects: React.FC<ProjectsProps> = () => {
  

  return (
    <div className='mt-16 md:mt-36'>
        <Head text="Things I’ve Built" link="/projects">

        </Head>
        <div className='projects flex flex-col items-center justify-center md:mt-16 mb-4'>
            

            <Project variant='1' img={todo as string} headTitle="NextJS" title="ToDo App" desc="Users can create todo for each day" categories={["JavaScript", "CSS", "HTML"]} />
            <Project variant='2' img={todo as string} headTitle="NextJS" title="Real time Chat App" desc="Users can communicate in real time" categories={["NextJS", "Apollo", "GraphQL", "TypeScript", "HTML", "CSS", "NextAuth", "MongoDB"]} />
            {/* <Project variant='1' headTitle="" title="" desc="" categories={["React", "css"]} /> */}
        </div>
    </div>
    
  );
};

export default Projects;