import LockIcon from "./LockIcon";
import ShieldIcon from "./ShieldIcon";

type ConfidentialProjectCardProps = {
  title: string;
  problem: string;
  role: string;
  impact: string;
  visuals: string;
  technologies: string;
  icon: "lock" | "shield";
  delay?: string;
};

export default function ConfidentialProjectCard({
  title,
  problem,
  role,
  impact,
  visuals,
  technologies,
  icon,
  delay = "",
}: ConfidentialProjectCardProps) {
  return (
    <div
      className={`animate-fade-in-up ${delay} rounded-lg bg-[var(--secondary-color)] p-8 shadow-lg`}
    >
      <div className="mb-6 flex h-40 items-center justify-center rounded-md bg-[var(--background-dark)]">
        {icon === "lock" ? <LockIcon /> : <ShieldIcon />}
      </div>
      <h3 className="text-2xl font-bold text-[var(--text-primary)]">{title}</h3>
      <div className="mt-4 space-y-4 text-sm text-[var(--text-secondary)]">
        <p>
          <strong className="text-[var(--text-primary)]">Problem:</strong> {problem}
        </p>
        <p>
          <strong className="text-[var(--text-primary)]">Role & Contribution:</strong> {role}
        </p>
        <p>
          <strong className="text-[var(--text-primary)]">Impact:</strong> {impact}
        </p>
        <p>
          <strong className="text-[var(--text-primary)]">Visuals:</strong> {visuals}
        </p>
        <p>
          <strong className="text-[var(--text-primary)]">Technologies:</strong> {technologies}
        </p>
      </div>
    </div>
  );
}
