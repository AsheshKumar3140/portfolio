import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function PrimaryButton({ href, children }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-full bg-[var(--primary-color)] px-5 py-2 text-sm font-semibold text-[var(--text-on-primary)] transition-transform hover:scale-105"
    >
      {children}
    </Link>
  );
}


