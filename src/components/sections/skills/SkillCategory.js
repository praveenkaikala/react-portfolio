export function SkillCategory({ category, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full ${
        isActive
          ? 'bg-purple-600 text-white'
          : 'bg-white text-gray-600 hover:bg-purple-100'
      }`}
    >
      {category}
    </button>
  );
}