// Navbar.tsx
import { Cart } from "./Cart";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./NavigationMenu";

export const Navbar = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    // Add more menu items here freely
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 font-bold text-lg">Malawi Furniture Hub</div>

          {/* Center: Menu */}
          <div className="flex-1 flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4 overflow-x-auto scrollbar-hide min-w-max">
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

          {/* Right: Cart */}
          <div className="flex-shrink-0">
            <Cart />
          </div>

        </div>
      </div>
    </header>
  );
};
