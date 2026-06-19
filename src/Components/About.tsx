import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import LottieImport from "react-lottie";
import SkillCard from "./SkillCard";

const skillGroups = [
  ["React", "ASP.NET Core", "TypeScript", "SQL", "C#", "Python", "REST APIs", "TailwindCSS"],
  ["HTML5", "CSS3", "Git"],
  ["GitHub", "MySQL", "SQL Server"]
];

const Lottie = (LottieImport as any).default ?? LottieImport;


const About = () => {
  return (
    <div className="">
      <div className="mt-44">
        <Fade direction="right">
          <h1 className="text-center font-bold text-3xl">
            <span className="border-b-2 border-[#4267B2] px-5 py-3">ABOUT ME</span>
          </h1>
        </Fade>
        <Fade direction="left">
          <p className="text-center mt-5 p-5 md:text-center font-medium text-[#555]">
            Explore my profile for details on my tech skills, expertise.
          </p>
        </Fade>
      </div>

      <div className="md:flex md:mt-20">
        <div className="md:mt-20 ml-10 md:ml-20 md:grow">
          <Fade direction="left">
            <div>
              <h1 className="font-bold text-2xl">Get To know Me!</h1>
              <p className="mt-10 mr-5">
                I'm an IT graduate specializing in software engineering and full-stack development. I build secure web applications, workflow automation systems, and AI-powered solutions using modern technologies.
              </p>
              <p className="mt-10 mr-5">
                I'm open to <span className="font-semibold text-gray-700">job opportunities</span> where I can contribute, learn, and grow.
                <br />If you have a strong opportunity that matches my skills and experience,
                <br />don’t hesitate to <span className="font-semibold text-gray-700">contact</span> me.
              </p>
            </div>
          </Fade>
          <Fade direction="left">
            <Link to="Contact" smooth={true} duration={900} offset={-50} className="hover:text-[#4267B2] rounded-md">
              <button className="bg-[#4267B2] mt-5 py-3 px-4 text-white font-bold rounded-md">Contact Me</button>
            </Link>
          </Fade>
        </div>

        <div className="mt-20 ml-10 md:mr-10 md:flex-grow">
          <h1 className="font-bold text-2xl">My Skills</h1>

          {skillGroups.map((group, index) => (
            <Fade key={index} direction="right">
              <div className="flex flex-wrap gap-3 mb-6 md:mr-10">
                {group.map((skill) => (
                  <SkillCard key={skill} label={skill} />
                ))}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;