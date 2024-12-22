 export function SkillBar({ name, level }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-purple-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-purple-600 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}