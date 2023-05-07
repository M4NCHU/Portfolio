import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';
import Tab from '../ListElements/Tab';


interface ProjectProps {
  variant?: '1' | '2' ;
  addClass?: string
  img: string
  headTitle: string
  title: string
  desc: string
  categories: Array<string>
}

const Project: React.FC<ProjectProps> = ({ addClass, variant, img, headTitle, title, desc, categories, ...props }) => {
  
  console.log(categories)

  return (
    <div className={`project flex flex-col md:justify-between w-full md:flex-row mt-8 md:mt-16 ${addClass}`}>
      <div className={`${variant === "1" ? "" : "order-2"} flex items-center`}>
        <Image src={img} width={648} height={648} alt={title} className='rounded-lg' />
      </div>
      <div className=" flex flex-col justify-start p-8">
        <div className="project__head-title py-2 flex flex-row items-center gap-2">
            
            <h3 className='text-lg md:text-xl text-third-font'><span className='text-primary-info'>-</span> {headTitle}</h3>
        </div>
        <div className="project-title">
            <h2 className='text-3xl md:text-5xl py-1 text-primary-font'>{title}</h2>
        </div>
        <div className="project-desc">
            <p className='text-base md:text-lg py-4 text-third-font'>{desc}</p>
        </div>
        <div className="project-categories">
            <ul className='flex flex-row gap-2 flex-wrap'>
                {categories.map((category, i) => (
                    <Tab key={i} title={category}/>
                ))}
                
            </ul>
            
        </div>
        <div className="project-btn"></div>
      </div>
    </div>
    
  );
};

export default Project;