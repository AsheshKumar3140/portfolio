import Link from "next/link";

export default function FooterSocial() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="#"
        className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
      >
        LinkedIn
      </Link>
      <Link
        href="#"
        className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
      >
        GitHub
      </Link>
      <Link
        href="#"
        className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
      >
        Twitter
      </Link>
    </div>
  );
}
