import FooterCopyright from "./FooterCopyright";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--secondary-color)] py-8 px-6 md:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <FooterCopyright />
        <FooterSocial />
      </div>
    </footer>
  );
}
