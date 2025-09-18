import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section className="py-24 sm:py-32" id="projects">
      <h2 className="text-center text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
        Featured Projects
      </h2>
      <ProjectsGrid />
    </section>
  );
}
