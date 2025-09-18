export default function ExperienceTimeline() {
  return (
    <div className="animate-fade-in-up">
      <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Experience</h3>
      <div className="mt-8 space-y-8 border-l-2 border-[var(--border-color)] pl-8">
        <div className="relative">
          <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-[var(--primary-color)]"></div>
          <h4 className="text-lg font-semibold text-[var(--text-primary)]">Senior Frontend Developer</h4>
          <p className="text-sm text-[var(--text-secondary)]">Stitch Design Co. | 2021 - Present</p>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            Leading the development of complex user interfaces and contributing to architectural decisions for major client projects.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-[var(--border-color)]"></div>
          <h4 className="text-lg font-semibold text-[var(--text-primary)]">Software Engineer</h4>
          <p className="text-sm text-[var(--text-secondary)]">Innovate Solutions | 2018 - 2021</p>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            Developed and maintained scalable web applications, collaborating with cross-functional teams to deliver high-quality features.
          </p>
        </div>
      </div>
    </div>
  );
}
