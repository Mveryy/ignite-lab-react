import { List, X } from "phosphor-react";

interface menuProps {
  sidebarWidth?: boolean
  setSidebarWidth: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu(props: menuProps) {


  return (
    <div className="text-blue-500 hidden sm:inline " onClick={() => props.setSidebarWidth(!(props.sidebarWidth))}>
      {props.sidebarWidth ? <List size={32} /> : <X size={32} />}
    </div>
  )
}