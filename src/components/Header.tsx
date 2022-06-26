import { Logo } from "./Logo";
import Menu from "./Menu";


export default function Header() {
  return (
    <header className="w-full py-5 sm:px-6 flex items-center justify-center sm:justify-between bg-gray-700 border-b border-gray-600">
      <Logo />
      <Menu />
    </header>
  );
}
