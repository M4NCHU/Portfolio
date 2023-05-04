import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface CustomLinkProps extends LinkProps {
  activeClassName?: string;
  className?: string;
  children?: React.ReactNode
  label: string
}

const ActiveLink: React.FC<CustomLinkProps> = ({ children,label, href, activeClassName , className, ...props }) => {
  const router = useRouter();
  // Check if link is active
  const isActive = router.pathname === href || router.asPath === href;

  
  // Add active clas
  const linkClassName = isActive && activeClassName;
  

  return (
    <Link href={href} {...props} className={`link ${linkClassName} ${linkClassName ? "bg-third-bg" : "bg-transparent" }`}>
      {label}
    </Link>
  );
};

ActiveLink.defaultProps = {
  activeClassName: 'active',
};

export default ActiveLink;