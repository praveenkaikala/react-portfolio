import ProjectLinks from './projects/ProjectLinks';
import ProjectTechnologies from './projects/ProjectTechnologies';

function ProjectCard({ title, description, image, technologies, github, live }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover "
        />
        <ProjectLinks github={github} live={live} />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1 text-black">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <ProjectTechnologies technologies={technologies} />
      </div>
    </div>
  );
}

export default ProjectCard;