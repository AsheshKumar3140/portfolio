import Link from "next/link";

export default function FooterSocial() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="https://www.linkedin.com/in/ashesh-kumar-b04446244/"
        className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
      >
        LinkedIn
      </Link>
      <Link
        href="https://github.com/aashukumar3451"
        className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
      >
        GitHub
      </Link>
      <Link
        href="https://www.instagram.com/thenameis_aashu/"
        className="text-[var(--text-secondary)] transition-colors hover:text-[var(--primary-color)]"
      >
        Instagram
      </Link>
    </div>
  );
}
