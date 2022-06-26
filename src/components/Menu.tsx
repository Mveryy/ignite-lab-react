import { List, X } from "phosphor-react";
import { useContext } from "react";
import { SidebarContext } from "../Context/SidebarContext";



export default function Menu() {
  const { sidebarWidth, setSidebarWidth } = useContext(SidebarContext)

  return (
    <div className="text-blue-500 hidden sm:inline " onClick={() => setSidebarWidth(!sidebarWidth)}>
      {sidebarWidth ? <List size={32} /> : <X size={32} />}
    </div>
  )
}