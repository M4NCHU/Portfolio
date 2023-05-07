import React from 'react';


interface ContactInputProps {
  icon?: React.ReactNode
  title: string
  placeHolder: string
  type: string
}

const ContactInput: React.FC<ContactInputProps> = ({icon, title, placeHolder, type = "text"}) => {
  

  return (
    
    <div className="contact-input relative">
        <input type={type} placeholder={placeHolder} className='bg-second-bg pt-10 w-full md:w-auto px-4 pb-2 rounded-lg'/>
        <div className="input-title absolute top-2 left-3 text-primary-font">
            <span>{title}</span>
        </div>
    </div>    
  );
};

export default ContactInput;