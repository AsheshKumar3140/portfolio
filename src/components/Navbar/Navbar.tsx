"use client";

import Logo from "./Logo";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";
import HamburgerIcon from "./HamburgerIcon";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { useTheme } from "@/theme/ThemeContext";

export default function Navbar() {
  const { toggleTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b px-6 py-4 md:px-12 lg:px-24 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--background-dark)]/20 backdrop-blur-xs backdrop-saturate-150 shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
            : "bg-[var(--background-dark)]"
        }`}
        style={{ borderColor: "var(--border-color)" }}
      >
        <Logo />
        <div className="flex flex-1 items-center justify-end gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <PrimaryButton href="#contact">Hire Me</PrimaryButton>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="hidden md:inline-flex rounded-full border px-3 py-1 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            style={{ borderColor: "var(--border-color)" }}
          >
            {theme.name === "dark" ? "Dark" : "Light"}
          </button>
          <button
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
          >
            <HamburgerIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}


