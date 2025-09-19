export default function ExperienceTimeline() {
  return (
    <div className="animate-fade-in-up">
      <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Experience</h3>
      <div className="mt-8 space-y-8 border-l-2 border-[var(--border-color)] pl-8">
        <div className="relative">
          <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-[var(--primary-color)]"></div>
          <h4 className="text-lg font-semibold text-[var(--text-primary)]">Full Stack Software Engineer</h4>
          <p className="text-sm text-[var(--text-secondary)]">Techmile Solutions | June, 2025 - Present</p>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
          At Techmile Solutions, I worked as a Software Engineer where I built a real-time chat application (DMs & channels) and a complaints reporting system with role-based access using React.js, Node.js, Express, Supabase Realtime, and PostgreSQL. I am currently working on adding Socket.IO-powered real-time features to their internal app to improve collaboration and responsiveness. I also collaborated with senior developers on debugging, code reviews, and architecture discussions, which strengthened my problem-solving skills and ability to deliver production-ready features in an Agile environment.
          </p>
        </div>
      </div>
    </div>
  );
}
