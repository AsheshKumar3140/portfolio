import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "All In One Solution For Companies",
      imageUrl: "/projects/3.png",
     
    },
    {
      title: "A Portfolio Website",
      imageUrl: "/projects/1.png",
      url: "https://aashukumar3451.github.io/portfolio"
    },
    {
      title: "AI Candidate Assessment System",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMHI4aRPceRgsgiNjyvla6_T3hKopWc_MEPypIj-JmrM2EIHt5EffcHtqL6X8LbvZ0LmOUiIblYB7CsJs1fUBO2O74gYgIdX3F1dTs3ggMj64oAzSWO6W_LLMv8g869yT9rgQlhN8d2OHQYxrfw4COGCGmiOizP0Im3KiPY1veLngQjb4XrYPLUQbFptfUSx21-7jCp9NJByPeXkIy7HR_sWGUidLrDccWPL9oL-NrdV9wuHZRg9A7yVwJRS9kIaO-JvUMv2bD-e8",
      url: "https://ai-candidate-frontend.vercel.app"
    },
    {
      title: "A Dark Themed Portfolio Website",
      imageUrl: "/projects/2.png",
      url: "https://aashuyourwebdeveloper.netlify.app/"
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          imageUrl={project.imageUrl}
          url={project.url}
          delay={index % 2 === 1 ? "animate-delay-200" : ""}
        />
      ))}
    </div>
  );
}
