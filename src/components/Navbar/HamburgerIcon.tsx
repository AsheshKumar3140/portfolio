type HamburgerIconProps = {
  isOpen: boolean;
};

export default function HamburgerIcon({ isOpen }: HamburgerIconProps) {
  return (
    <div className="flex h-6 w-6 flex-col justify-center space-y-1">
      <span
        className={`h-0.5 w-6 transform transition-all duration-300 ${
          isOpen ? "translate-y-1.5 rotate-45" : ""
        }`}
        style={{ backgroundColor: "var(--text-primary)" }}
      />
      <span
        className={`h-0.5 w-6 transform transition-all duration-300 ${
          isOpen ? "opacity-0" : ""
        }`}
        style={{ backgroundColor: "var(--text-primary)" }}
      />
      <span
        className={`h-0.5 w-6 transform transition-all duration-300 ${
          isOpen ? "-translate-y-1.5 -rotate-45" : ""
        }`}
        style={{ backgroundColor: "var(--text-primary)" }}
      />
    </div>
  );
}
