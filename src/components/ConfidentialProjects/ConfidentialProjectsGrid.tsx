import ConfidentialProjectCard from "./ConfidentialProjectCard";

export default function ConfidentialProjectsGrid() {
  const projects = [
    {
      title: "Complaint Registration Portal with RBAC",
      problem:
        "The company needed a secure and scalable way to manage user complaints with controlled access for different roles.",
      role:
        "I designed and developed the entire complaint registration system with full role-based access control (RBAC) using Node.js, Express, and ReactJS. I also built an MVP in record time to showcase the concept.",
      impact:
        "The portal streamlined the complaint handling process, ensuring secure access while accelerating response times. The MVP was delivered quickly, allowing stakeholders to validate the system early.",
      visuals:
        "A clean, modern interface with forms, complaint tracking dashboards, and secure login/role management screens.",
      technologies: "Node.js, Express, ReactJS, Supabase",
      icon: "shield" as const,
      delay: "animate-delay-200",
    },
    {
      title: "Realtime Communication System",
      problem:
        "The organization required a modern, realtime messaging experience with DM, channels, and thread functionality.",
      role:
        "I implemented DM and channels functionality with role-based access control, integrated Supabase realtime for live updates, and built almost-complete threaded conversations. I also created a small chat module inside the company’s internal app.",
      impact:
        "Enabled seamless team communication with realtime updates. Users could interact via direct messages, join channels, and soon use threaded discussions—all improving collaboration across teams.",
      visuals:
        "An intuitive chat interface with channel sidebar, direct messages list, and threaded conversation panels.",
      technologies: "ReactJS, Supabase Realtime, Node.js, Express",
      icon: "shield" as const,
      delay: "animate-delay-400",
    },
    {
      title: "Internal App Optimization",
      problem:
        "The internal application was inefficient, relying on polling for updates, which caused delays and high server load.",
      role:
        "I analyzed and optimized the internal app’s architecture, replacing polling with socket-based realtime functionality. Additionally, I contributed to learning and improving the existing codebase while ensuring smooth integration of new modules.",
      impact:
        "Significantly improved system performance by reducing server overhead and enabling truly realtime interactions. This optimization enhanced user experience and scalability for future features.",
      visuals:
        "Optimized background processes with efficient socket-based connections and smooth realtime UI updates.",
      technologies: "Node.js, Express, Socket.io, RemixJS",
      icon: "shield" as const,
      delay: "animate-delay-600",
    },
    {
      title: "Automation & Workflow Enhancements",
      problem:
        "The team had repetitive tasks and required proof-of-concept solutions to accelerate development workflows.",
      role:
        "I contributed to automation work and quickly built an MVP for the complaint system, ensuring faster validation cycles. I also handled smaller but critical modules in the internal app to improve usability.",
      impact:
        "Accelerated development cycles and reduced manual effort. My rapid prototyping skills allowed the team to validate features faster and stay ahead in development.",
      visuals:
        "Lightweight, functional modules designed with simplicity and speed, integrated seamlessly into the larger application.",
      technologies: "NextJS, Supabase, TailwindCSS",
      icon: "shield" as const,
      delay: "animate-delay-800",
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
