import ConfidentialProjectsGrid from "./ConfidentialProjectsGrid";

export default function ConfidentialProjects() {
  return (
    <section className="py-24 sm:py-32" id="confidential-projects">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
          Confidential Company Projects
        </h2>
        <p className="mt-4 text-lg text-[var(--text-secondary)]">
          Projects developed under non-disclosure agreements, where live demos cannot be shown. These
          highlight my professional experience and impact.
        </p>
      </div>
      <ConfidentialProjectsGrid />
    </section>
  );
}
