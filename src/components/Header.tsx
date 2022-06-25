import { Logo } from "./Logo";
import Menu from "./Menu";

interface headerProps {
  sidebarWidth?: boolean
  setSidebarWidth: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header(props: headerProps) {
  return (
    <header className="w-full py-5 sm:px-6 flex items-center justify-center sm:justify-between bg-gray-700 border-b border-gray-600">
      <Logo />
      <Menu sidebarWidth={props.sidebarWidth} setSidebarWidth={props.setSidebarWidth} />
    </header>
  );
}
