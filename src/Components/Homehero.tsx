import { Fade } from "react-awesome-reveal";
import space from "./../assets/space.json";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import scrolldown from "./../assets/Animation - 1710549008709.json";
import Hero from "./../assets/Global.json"
import LottieImport from "react-lottie";

const Lottie = (LottieImport as any).default ?? LottieImport;

const Homehero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Lottie animation for background */}
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 mt-64">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: Hero,
          }}
          isClickToPauseDisabled={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-15 md:mt-20 ml-4 mr-8 ">
        <div className="md:flex flex-col items-center justify-center">
          <Fade direction="right">
            <h1 className="font-semibold text-[#4267B2] text-2xl md:text-3xl md:justify-center md:text-center font-abc">
              Hi! I'M Bongani Glen Maduma — Software Engineer
            </h1>
          </Fade>
          <Fade direction="left">
            <p className="font-normal mt-8 md:text-1xl text-black">
              I build secure web applications, workflow automation systems, and AI-powered solutions using modern web technologies.
            </p>
          </Fade>

          <div className="flex gap-2 md:justify-between mt-8">
            <Fade direction="left">
              <a
                href="https://www.linkedin.com/in/bongani-maduma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#4267B2] gap-1  text-white rounded-lg px-6 py-3 md:px-3 font-semibold transition duration-300 ease-in-out hover:bg-transparent hover:border border-black flex hover:text-black">
                  <FaLinkedin className="pb" size={21} />
                  Linkedin
                </button>
              </a>
            </Fade>
            <Fade direction="left">
              <a
                href="https://github.com/bonganiglen04"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#4267B2] gap-1  text-white rounded-lg px-6 py-3 md:px-3 font-semibold transition duration-300 ease-in-out hover:bg-transparent hover:border border-black flex hover:text-black">
                   <FaGithubSquare className="pb" size={21} />
                  GitHub
                </button>
              </a>
            </Fade>
            <Fade direction="right">
              <a
                href="https://drive.google.com/file/d/1qRr_UvPm00WipTRQilINy3UNWRxYT0FE/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border rounded-lg font-semibold border-black px-2 py-3  transition duration-300 ease-in-out hover:bg-[#4267B2] hover:border-none hover:text-white ">
                  Resume
                </button>
              </a>
            </Fade>
            
          </div>
          <div className="flex flex-col items-center">
            <Fade direction="left">
              <div className="w-64 ml-7 md:ml-15 md:w-96 ">
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: space,
                  }}
                />
              </div>
            </Fade>
            <div className="w-5 hidden md:block mb-2 ml-7 md:ml-15 md:w-10">
              {/* Ensure correct size adjustment */}
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: scrolldown,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homehero