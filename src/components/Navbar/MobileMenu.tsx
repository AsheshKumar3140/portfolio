import NavLink from "./NavLink";
import { useTheme } from "@/theme/ThemeContext";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { toggleTheme, theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="fixed right-0 top-0 h-full w-64 bg-[var(--background-dark)] border-l border-[var(--border-color)] shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)]">
            <h2 className="text-xl font-bold text-[var(--text-primary)]">Menu</h2>
            <button
              onClick={onClose}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 p-6">
            <div className="space-y-6">
              <NavLink href="#about" onClick={onClose}>About</NavLink>
              <NavLink href="#experience" onClick={onClose}>Experience</NavLink>
              <NavLink href="#projects" onClick={onClose}>Projects</NavLink>
              <NavLink href="#skills" onClick={onClose}>Skills</NavLink>
              <NavLink href="#contact" onClick={onClose}>Contact</NavLink>
            </div>
          </nav>

          {/* Footer with Theme Toggle */}
          <div className="p-6 border-t border-[var(--border-color)]">
            <button
              onClick={toggleTheme}
              className="w-full rounded-full border px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] hover:bg-[var(--secondary-color)]"
              style={{ borderColor: "var(--border-color)" }}
            >
              {theme.name === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
