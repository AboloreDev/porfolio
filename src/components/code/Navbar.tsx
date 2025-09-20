"use client";

import { Download, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experience" },
  { label: "Projects", href: "#project" },
  { label: "Contact Me", href: "#contact" },
];

const Navbar = () => {
  // mobile menu state
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const pathname = usePathname();

  const isOpenMenu = () => setIsMobileMenu(true);
  const isCloseMenu = () => setIsMobileMenu(false);

  // Effect
  useEffect(() => {
    document.body.style.overflow = isMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenu]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <nav className="w-full max-w-7xl mx-auto py-2 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={"#top"} className="flex items-center">
          <Image src={"/logo.png"} alt="" width={50} height={50} />
          <p className="font-bold">ALABI FATHIU</p>
        </Link>

        {/* Nav Links */}
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 items-center text-sm font-semibold rounded-full uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link px-2 py-1 ${
                pathname === link.href ? "active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button Links */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/resume.pdf"
            className="flex items-center gap-2 border px-5 py-2 rounded-2xl border-gray-500"
          >
            <p className="font-semibold">Resume</p>
            <Download size={15} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={isOpenMenu}>
          <Menu className="h-6 w-6 cursor-pointer" />
        </button>
      </nav>

      <MobileMenu isOpen={isMobileMenu} onClose={isCloseMenu} />
    </div>
  );
};

export default Navbar;
