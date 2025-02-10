const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with Next.js and TailwindCSS.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      link: "https://github.com/yourgithub/portfolio",
    },
  ];
  
  export default function Projects() {
    return (
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-purple-400">View Code</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  