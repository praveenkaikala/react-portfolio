import { FaEye, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import image from '../../asserts/profile.png'
import { SiLeetcode } from "react-icons/si";
function Home() {
  const icons=[
    {
      icon:<FaGithub className="w-6 h-6 text-gray-700"/>,
      link:"https://github.com/praveenkaikala"
    },
    {
      icon:<FaLinkedinIn  className="w-6 h-6 text-gray-700"/>,
      link:"https://linkedin.com/in/praveenkaikala"
    },
    {
      icon:<IoMdMail className="w-6 h-6 text-gray-700"/>,
      link:"mailto:kaikalapraveen24@gmail.com"
    },
    {
      icon:<SiLeetcode  className="w-6 h-6 text-gray-700"/>,
      link:"https://leetcode.com/u/praveenkaikala/"
    }
  ]
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center md:mt-0 mt-10">
          <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Hello, I'm Praveen Kumar
              </span>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 pt-10 text-center md:text-left">
              Full Stack Developer 
            </p>
            </h1>
            <div className="flex space-x-4 mb-8 md:justify-start justify-center">
              {icons.map((icon,ind)=>{
                return(
                  <a href={icon.link} target="_blank" rel="noopener noreferrer" 
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                {icon.icon}
              </a>
                )
              })}
                <a href={'https://drive.google.com/file/d/1Sq9tQX3kk4mZvFeIg7fFtjsc8QU2zxkZ/view?usp=drivesdk'}  
                className=" rounded-full bg-purple-600 hover:bg-purple-700  transition-colors flex items-center gap-3 p-3">
                <p>Resume</p>
                <span><FaEye /></span>
                </a>
            </div>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors w-full "
            >
              Get in Touch
            </button>
          </div>
            
            
           
           
           <div className="flex justify-center md:justify-end">
          <img src={image} alt="profile" className="w-[25rem] h-[25rem] rounded-full"/>
           </div>
         

         
           
          
        </div>
      </div>
    </section>
  );
}

export default Home;