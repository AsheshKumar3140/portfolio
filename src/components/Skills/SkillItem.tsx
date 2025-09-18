type SkillItemProps = {
  name: string;
  percentage: number;
};

export default function SkillItem({ name, percentage }: SkillItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--text-secondary)]">{name}</span>
        <span className="text-sm font-medium text-[var(--text-secondary)]">{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-[var(--secondary-color)]">
        <div
          className="h-2 rounded-full bg-[var(--primary-color)] transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
