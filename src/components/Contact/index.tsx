import React from 'react';

// import Project from './Project';
import Head from '../Headers';
import ContactEl from './ContactEl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import ContactInput from './ContactInput';
import ContactTextArea from './ContactTextArea';
import Button from '../Button';
import { BiMessageAltDetail } from 'react-icons/bi';


interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {
  

  return (
    
    <div className="contact mt-32 mb-10">
        <Head text="Contact me" />
        <div className="flex flex-col md:flex-row justify-center  gap-10 mt-12">
            
            <div className="contact-left flex flex-col justify-start items-start gap-4">
                <ContactEl icon={<AiOutlinePhone/>} title="Call me" desc="+48 793 659 960"/>
                <ContactEl icon={<AiOutlineMail/>} title="E-mail" desc="maciejov250@gmail.com"/>
                <ContactEl icon={<CiLocationOn/>} title="Location" desc="Internet"/>
            </div>
            <div className="contact-right flex flex-col gap-4 text-primary-font">
                <div className='flex flex-col md:flex-row gap-4'>
                    <ContactInput title='Name' placeHolder='Enter name' type='text' />
                    <ContactInput title='E-mail' placeHolder='Enter E-mail' type='email' />
                </div>
                <ContactTextArea title='Message' placeHolder='Type your message here...' />
                <div className="contact-btn flex justify-end" >
                    <Button variant='primary' icon={<BiMessageAltDetail/>}>Send message</Button>
                </div>
            </div>
            
        </div>
        
    </div>    
  );
};

export default Contact;