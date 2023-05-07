import Image from 'next/image';
import React, { ButtonHTMLAttributes } from 'react';

import { AiOutlineClockCircle } from 'react-icons/ai';



interface TimelineBlockProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  image: string
  title: string
  desc: string
  years: string
}

const TimelineBlock: React.FC<TimelineBlockProps> = ({image,title, desc, years}) => {

return (
    <div className="bg-second-bg rounded-lg border-l-4 border-gray-500 p-4 mb-6">
        <div className="flex flex-row gap-2 items-center ">
            <div className="min-w-[2rem] flex items-center ">
                <Image src={image} width={36} height={36} alt="Pans Logo"/>
                                    
            </div>
                                
            <h2 className="text-base font-bold ">{title}</h2>
        </div>
                            
        <p className="text-third-font mt-2">{desc}</p>
        <p className="text-primary-font text-sm mt-2 flex flex-row items-center gap-2"><AiOutlineClockCircle/>{years}</p>
    </div>
    
);
};

export default TimelineBlock;