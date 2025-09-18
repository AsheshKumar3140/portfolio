import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with a modern, responsive UI. Built with Next.js, Stripe, and PostgreSQL.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVp_yzhb3a9lfJzg0bvTHjIqCG9POHieVRTIvqD8q6t-sBkoH9l7JwSlUuXVMHw_Kh51FPBEUJlDT9kKNadi4RA4_3cE5CmrsIusYh_BxDneLwQlpA6L2s2Aq8tZE3ApvgocSyLWY544hX0aC5vieut61XV8FUtGut4LTriAMHyx-dsrWHfyImafooW5jweEnT4Gk8Z9HFzA4Z_W2eQCl1UMjcZ2lGgeqIUFtcEiGodcf_AG5YvDiNOMv1IbIswTNMOXpPMiT8f10"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for tracking fitness goals, built with React Native and Firebase.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcUDjUtsdFRWEGCx_svZM6EVtw_fLTmTg6qbu5odfSnehqp8x52AfOq-mWiNLa1dsJ8sbFbyDt3kzdTkjkatgK6AiwVBR3onBfE7nvx8NJAu34Mv87w--E1L4s7TEC6pt_cfPRqNBFgU6dxC922jt3NFEGmNvGIKsEdJ0limIXrwZGanMYgKKbaUJ8CA72MB52uSeMzbVZBxIMgzTg4Tkez-z_YXz4aeCxQNOi8V2ELw0VBQw0E1JNDzwaOo3vjkgut2H3LotOL2I"
    },
    {
      title: "Social Media Dashboard",
      description: "A web app for managing social media accounts, featuring analytics and post scheduling. Developed with Vue.js and Chart.js.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtOfeybaCSkzngGMyQk9H1Yzad18e0rF_VFRYWWI-fKN8REk3S8Vy52zBnzMw0cFuro6cZJcWvLtI-Fj0gkq-eLIfuRz84rc8Yfo1-j0B7M2Wj56EFZ69eS0f2UJbpNGUEHAZUfw7j185LKKhgGZP6n3gllkxz3wC5D8WKT1kB9nZS_dTlIBvKAvWRZGLu5cm3tdhesh7qwPOaq7RkntTjlB5EjIShwtWycfbIYFwhHHWX3AAMcXLEEmyzqlUpkL8RughvF2Hp3P8"
    },
    {
      title: "Personal Finance Tracker",
      description: "A tool for tracking income and expenses with data visualization. Built with React and D3.js.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMHI4aRPceRgsgiNjyvla6_T3hKopWc_MEPypIj-JmrM2EIHt5EffcHtqL6X8LbvZ0LmOUiIblYB7CsJs1fUBO2O74gYgIdX3F1dTs3ggMj64oAzSWO6W_LLMv8g869yT9rgQlhN8d2OHQYxrfw4COGCGmiOizP0Im3KiPY1veLngQjb4XrYPLUQbFptfUSx21-7jCp9NJByPeXkIy7HR_sWGUidLrDccWPL9oL-NrdV9wuHZRg9A7yVwJRS9kIaO-JvUMv2bD-e8"
    }
  ];

  return (
    <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          delay={index % 2 === 1 ? "animate-delay-200" : ""}
        />
      ))}
    </div>
  );
}
