import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)] block"
    >
      {children}
    </Link>
  );
}


