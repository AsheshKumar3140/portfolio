import SkillsColumn from "./SkillsColumn";

export default function SkillsGrid() {
  const frontendSkills = [
    { name: "React.js", percentage: 90 },
    { name: "Vue.js", percentage: 85 },
    { name: "Next.js", percentage: 80 },
    { name: "Remix", percentage: 70 },
    { name: "Expo", percentage: 75 },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 95 },
    { name: "Express", percentage: 90 },
    { name: "Mongo", percentage: 85 },
    { name: "Postgres", percentage: 80 },
    { name: "Supabase", percentage: 75 },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
      <SkillsColumn title="Frontend" skills={frontendSkills} />
      <SkillsColumn title="Backend & Databases" skills={backendSkills} delay="animate-delay-200" />
    </div>
  );
}
