import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void;  
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  return (
    <Link href={href} onClick={onClick}>
      {title}
    </Link>
  );
};

export default NavLink;

