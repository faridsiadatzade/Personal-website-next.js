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
    { name: "Education", icon: GraduationCap, path: "/education" },
    { name: "Contact", icon: MessagesSquare, path: "/contact" },
  ];

  return (
    <div>
      <button
        className={`p-2 m-4 bg-primary text-primary-foreground rounded-md md:hidden ${
          isOpen && "hidden"
        }`}
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`
        fixed top-0 bottom-0 left-0 h-full z-50 w-60 bg-background shadow-lg transition-transform duration-300 md:relative md:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex justify-center pt-8">
          <Logo />
        </div>

        <div className="grid h-[80vh] mt-12">
          <ul className="flex flex-col justify-center">
            {menuItems?.length > 0 &&
              menuItems.map((item, index) => (
                <li
                  className="py-2 my-2 mx-8 border-b border-border"
                  key={index}
                >
                  <Link
                    href={item.path}
                    className={`flex font-bold items-center space-x-3 hover:text-primary ${
                      pathname === item.path && "text-primary"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="flex mx-8 gap-4">
            <ThemeSwitcher />
            <ColorPicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
