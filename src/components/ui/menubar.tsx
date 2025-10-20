import { useState } from "react";
import { Cart } from "./Cart";
import { Menu, X } from "lucide-react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "./Menu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md p-4 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <div className="font-bold text-lg">Malawi Furniture Hub</div>

      {/* Desktop Menubar */}
      <div className="hidden sm:flex items-center gap-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Home</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Link 1</MenubarItem>
              <MenubarItem>Link 2</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Shop</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Furniture</MenubarItem>
              <MenubarItem>Chairs</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Cart + Mobile Hamburger */}
      <div className="flex items-center gap-2">
        <Cart />
        <button
          className="sm:hidden p-2 rounded hover:bg-gray-200"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="sm:hidden w-full flex flex-col mt-2 gap-2 bg-white p-2 shadow-md rounded-md z-50">
          <Menubar className="flex flex-col gap-2">
            <MenubarMenu>
              <MenubarTrigger onClick={() => setMobileOpen(false)}>Home</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setMobileOpen(false)}>Link 1</MenubarItem>
                <MenubarItem onClick={() => setMobileOpen(false)}>Link 2</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={() => setMobileOpen(false)}>Shop</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => setMobileOpen(false)}>Furniture</MenubarItem>
                <MenubarItem onClick={() => setMobileOpen(false)}>Chairs</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      )}
    </header>
  );
};
