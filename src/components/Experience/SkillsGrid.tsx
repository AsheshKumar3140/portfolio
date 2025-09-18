export default function SkillsGrid() {
  const skills = [
    "React.js",
    "Node.js", 
    "TypeScript",
    "Next.js",
    "GraphQL",
    "PostgreSQL",
    "Docker",
    "AWS"
  ];

  return (
    <div className="animate-fade-in-up animate-delay-200">
      <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Core Skills</h3>
      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[var(--secondary-color)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--primary-color)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
