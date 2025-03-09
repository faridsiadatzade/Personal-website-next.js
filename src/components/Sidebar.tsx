"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  MessagesSquare,
  Home,
  User,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import Logo from "./Logo";
import ColorPicker from "./ColorPicker";
import ThemeSwitcher from "./ThemeSwitcher";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  interface MenuItem {
    name: string;
    path: string;
    icon: React.ElementType;
  }

  const menuItems: MenuItem[] = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Portfolio", icon: BriefcaseBusiness, path: "/portfolio" },
    { name: "Experience", icon: GraduationCap, path: "/experience" },
    { name: "Contact", icon: MessagesSquare, path: "/contact" },
  ];

  return (
    <>
      <button
        className={`fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-md md:hidden ${
          isOpen && "hidden"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 bottom-0 left-0 w-64 z-50 
          bg-background border-r border-border
          transition-transform duration-300 ease-in-out
          transform md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-center pt-8">
            <Logo />
          </div>

          <nav className="flex-1 mt-12">
            <ul className="px-4 space-y-2">
              {menuItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-colors duration-200
                      hover:bg-primary/10 hover:text-primary
                      ${pathname === item.path ? "bg-primary/10 text-primary" : "text-foreground"}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex gap-4 justify-center">
              <ThemeSwitcher />
              <ColorPicker />
            </div>
          </div>
        </div>
      </aside>

      <div className="md:pl-64">
        
      </div>
    </>
  );
};

export default Sidebar;
