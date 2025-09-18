import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section className="py-24 sm:py-32" id="skills">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
          Technical Skills & Proficiency
        </h2>
        <p className="mt-4 text-lg text-[var(--text-secondary)]">
          A visual representation of my technical capabilities and expertise in various technologies.
        </p>
      </div>
      <SkillsGrid />
    </section>
  );
}
