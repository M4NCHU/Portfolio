import React from "react";
import Navbar from "../Navbar";
import { IconType } from "react-icons";


interface ListItemProps { 
    icon?: React.ReactNode;
    label: string
}

const ListItem:React.FC<ListItemProps> = ({icon, label }: ListItemProps) => {
    const current = new Date()
    const date = current.getFullYear()

  return (
      <li className="flex flex-row items-center gap-2">
        {icon}
        {label}
      </li>
  );
};

export default ListItem;