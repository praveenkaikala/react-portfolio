
import SkillGroup from './SkillGroup';

function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript','TypeScript', 'Tailwind CSS', 'Next.js','ReactNative'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'mySql', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS',] },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <h2 className="text-4xl font-bold mb-4 text-black text-center">Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
       

        <div className="flex justify-around gap-8">
          {skills.map((skillGroup, index) => (
            <SkillGroup key={index} {...skillGroup} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;