import SkillItem from "./SkillItem";

type SkillsColumnProps = {
  title: string;
  skills: Array<{ name: string; percentage: number }>;
  delay?: string;
};

export default function SkillsColumn({ title, skills, delay = "" }: SkillsColumnProps) {
  return (
    <div className={`animate-fade-in-up ${delay}`}>
      <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
}
