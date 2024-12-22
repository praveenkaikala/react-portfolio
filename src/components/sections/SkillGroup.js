

function SkillGroup({ category, items }) {
  return (
   <div className='pt-10'>
      <h3 className="text-xl font-bold mb-4 text-purple-600">
        {category}
      </h3>
      <ul className="space-y-2">
        {items.map((skill, index) => (
          <li
            key={index}
            className="flex items-center text-gray-700 hover:text-purple-600 transition-colors cursor-pointer"
          >
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
   </div>
  );
}

export default SkillGroup;