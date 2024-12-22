function ProjectTechnologies({ technologies }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default ProjectTechnologies;