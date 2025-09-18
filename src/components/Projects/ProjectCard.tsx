import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  delay?: string;
};

export default function ProjectCard({ title, description, imageUrl, delay = "" }: ProjectCardProps) {
  return (
    <div className={`animate-fade-in-up ${delay} group relative overflow-hidden rounded-lg bg-[var(--secondary-color)] shadow-lg`}>
      <div 
        className="h-80 w-full transform bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full p-8">
        <h3 className="text-2xl font-bold text-[var(--text-primary)]">{title}</h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">{description}</p>
        <Link 
          href="#" 
          className="mt-4 inline-flex items-center font-semibold text-[var(--primary-color)] transition-all group-hover:text-[var(--text-primary)]"
        >
          View Details 
          <span className="material-symbols-outlined ml-1 text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
