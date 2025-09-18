import ExperienceTimeline from "./ExperienceTimeline";
import SkillsGrid from "./SkillsGrid";

export default function Experience() {
  return (
    <section className="py-24 sm:py-32" id="experience">
      <h2 className="text-center text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
        Experience & Skills
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
        <ExperienceTimeline />
        <SkillsGrid />
      </div>
    </section>
  );
}
