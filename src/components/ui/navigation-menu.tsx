import { useState } from "react";
import { Cart } from "./Cart";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./NavigationMenu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex flex-wrap items-center justify-between relative z-50">
      {/* Logo */}
      <div className="font-bold text-lg">Malawi Furniture Hub</div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex flex-1 justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/">Link 1</NavigationMenuLink>
                <NavigationMenuLink href="/">Link 2</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/furniture">Furniture</NavigationMenuLink>
                <NavigationMenuLink href="/chairs">Chairs</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/about">Our Story</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Cart + Hamburger */}
      <div className="flex items-center gap-2">
        <Cart />
        <button
          className="sm:hidden p-2 rounded hover:bg-gray-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden w-full flex flex-col mt-2 gap-2 bg-white p-4 shadow-md rounded-md">
          <a href="/" className="p-2 hover:bg-gray-100 rounded">Home</a>
          <a href="/furniture" className="p-2 hover:bg-gray-100 rounded">Furniture</a>
          <a href="/chairs" className="p-2 hover:bg-gray-100 rounded">Chairs</a>
          <a href="/about" className="p-2 hover:bg-gray-100 rounded">About</a>
        </div>
      )}
    </header>
  );
};
