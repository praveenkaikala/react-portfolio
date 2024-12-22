import { Github, ExternalLink } from 'lucide-react';

function ProjectLinks({ github, live }) {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center space-x-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-800"
      >
        <Github className="w-5 h-5" />
      </a>
      {live && (

      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-800"
      >
        <ExternalLink className="w-5 h-5" />
      </a>
      )}
    </div>
  );
}

export default ProjectLinks;