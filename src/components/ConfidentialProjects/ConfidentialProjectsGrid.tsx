import ConfidentialProjectCard from "./ConfidentialProjectCard";

export default function ConfidentialProjectsGrid() {
  const projects = [
    {
      title: "Internal Data Analytics Platform",
      problem:
        "The company lacked a centralized system for analyzing sales and marketing data, leading to inefficient decision-making.",
      role: "As the lead front-end developer, I designed and built the entire user interface from scratch, creating interactive dashboards and data visualization components.",
      impact:
        "The platform reduced data analysis time by 60% and improved data-driven decision-making across the organization.",
      visuals:
        "The UI featured a clean, card-based layout with a combination of charts, graphs, and sortable data tables. A dark theme was implemented to reduce eye strain for users working long hours.",
      technologies: "Vue.js, Chart.js, Tailwind CSS, Python (backend)",
      icon: "lock" as const,
      delay: "animate-delay-200",
    },
    {
      title: "Secure Document Management System",
      problem:
        "The client required a highly secure platform for managing sensitive legal documents, with granular access control and versioning.",
      role: "I was responsible for implementing the front-end architecture, focusing on security best practices, including role-based access control and secure API integrations.",
      impact:
        "The system streamlined document workflows, enhanced security, and ensured compliance with industry regulations, resulting in a 40% increase in operational efficiency.",
      visuals:
        "The interface was designed to be intuitive and minimalist, with a focus on usability. A clear folder structure, drag-and-drop functionality, and detailed audit trails were key visual elements.",
      technologies: "Angular, NgRx, Node.js, AWS S3",
      icon: "shield" as const,
      delay: "animate-delay-400",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
      {projects.map((project) => (
        <ConfidentialProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
