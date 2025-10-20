// Navbar.tsx
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    // add/remove items freely; layout won't break
  ];

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 font-bold text-lg">Malawi Furniture Hub</div>

          {/* Center: Desktop Menu */}
          <div className="hidden sm:flex flex-1 justify-center max-w-2xl">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink href={item.href}>{item.label}</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Cart + Mobile Hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Cart />
            <button
              className="sm:hidden p-2 rounded hover:bg-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 left-0 w-full bg-white flex flex-col p-4 gap-2"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="p-2 hover:bg-gray-100 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
