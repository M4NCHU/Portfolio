import React from 'react';


interface ContactElProps {
  icon: React.ReactNode
  title: string
  desc: string
}

const ContactEl: React.FC<ContactElProps> = ({icon, title, desc}) => {
  

  return (
    
    <div className="contact-element flex flex-row items-center gap-4 text-primary-font">
        <div className="contact-icon text-2xl">
          {icon}
        </div>
        <div className="contact-description">
          <div className="contact-title">
            <h2 className="text-xl md:text-2xl">{title}</h2>
          </div>
          <div className="contact-desc">
            <p className="">{desc}</p>
          </div>
        </div>
    </div>    
  );
};

export default ContactEl;