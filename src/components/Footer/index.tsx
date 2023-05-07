import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Icon from "../Icon";
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaFacebookSquare } from "react-icons/fa";


interface FooterProps { 
    
}

const Footer:React.FC<FooterProps> = () => {
    const current = new Date()
    const date = current.getFullYear()

  return (
      <footer className="bg-second-bg text-second-font mt-20 w-full py-2 px-2 sm:px-6 lg:px-24 flex flex-row justify-between items-center">
        <div className="max-w-7xl py-4 px-4 sm:px-6 lg:px-8 text-sm md:text-base">
          Copyright © {date} Maciej Szwast
        </div>
        <div className="footer-icons flex flex-row gap-2 text-base md:text-xl flex-wrap">
          <Link href="https://github.com/M4NCHU">
            <Icon icon={AiFillGithub} />
          </Link>
          <Link href="https://www.facebook.com/maciej.szwast">
            <Icon icon={FaFacebookF} />
          </Link>
          <Link href="https://twitter.com/MaciejSzwast">
            <Icon icon={AiOutlineTwitter} />
          </Link>
          <Link href="as">
            <Icon icon={AiFillLinkedin} />
          </Link>
          <Link href="https://www.instagram.com/maciek.szwast/">
            <Icon icon={AiOutlineInstagram} />
          </Link>
        </div>
      </footer>
  );
};

export default Footer;