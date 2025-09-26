import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "All In One Solution For Companies",
      imageUrl: "/projects/3.png",
      url: "https://company-internal-app.vercel.app/"
     
    },
    {
      title: "A Portfolio Website",
      imageUrl: "/projects/1.png",
      url: "https://aashukumar3451.github.io/portfolio"
    },
    {
      title: "AI Candidate Assessment System",
      imageUrl: "/projects/4.png",
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
