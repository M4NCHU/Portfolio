import React from 'react';


interface ContactTextAreaProps {
  icon?: React.ReactNode
  title: string
  placeHolder: string
}

const ContactTextArea: React.FC<ContactTextAreaProps> = ({icon, title, placeHolder}) => {
  

  return (
    
    <div className="contact-input relative ">
        <textarea placeholder={placeHolder} className='bg-second-bg pt-10 px-4 pb-2 rounded-lg w-full'/>
        <div className="input-title absolute top-2 left-3 text-primary-font">
            <span>{title}</span>
        </div>
    </div>    
  );
};

export default ContactTextArea;