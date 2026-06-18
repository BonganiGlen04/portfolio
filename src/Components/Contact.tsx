import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import Radio from "./../assets/Radio.json"
import LottieImport from "react-lottie";

const Lottie = (LottieImport as any).default ?? LottieImport;

const Contact = () => {
  return (
    <div className="mt-20">
      <Fade direction="left">
        <h1 className="font-bold text-3xl text-center">
          <span className="border-b-2 border-[#4267B2] px-5 py-3">CONTACT ME </span>
        </h1>
      </Fade>
      <Fade direction="right">
        <p className="text-center mt-5 p-5 md:text-center font-medium text-[#555]">
          Feel welcome to reach out through the form; I'll respond promptly. 🚀
        </p>
      </Fade>
      <Fade direction="down">
        <div className="flex items-center justify-center gap-3 cursor-pointer">
          <a href="https://www.linkedin.com/in/bongani-maduma" target="_blank"><FaLinkedin size={30} /></a>
          <a href="https://github.com/bonganiglen04" target="_blank"><FaGithubSquare size={30} /></a>
        </div>
      </Fade>
      <div className="mt-10">
        <form action="https://getform.io/f/zaxmdnpb"   method="POST" className="space-y-4 pr-5 mb-10 md:flex flex-col justify-center mt-5 items-center mx-auto">
          <div>
              <input className="border ml-4  border-gray-300 rounded-md py-2 px-4 w-[80%] md:w-full lg:w-80" type="text" placeholder="Name" name="name" />
          </div>
          <div>
              <input className="border  ml-4 border-gray-300 rounded-md py-2 px-4 w-[80%] md:w-full lg:w-80" type="email" name="email" placeholder="Email" />
          </div>
          <div>
              <input className="border ml-4 border-gray-300 rounded-md py-2 px-4 w-[80%] md:w-full lg:w-80" type="tel" placeholder="Phone number" name="number" />
          </div>
          <div>
              <textarea className="border ml-4 border-gray-300 rounded-md py-2 px-4 w-[80%] md:w-full lg:w-80" placeholder="Message" name="message"></textarea>
          </div>
          <div>
              <button className="bg-[#4267B2] w-[60%] md:w-full  ml-4 text-white rounded-md py-2 px-4 i lg:w-80" type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="flex md:justify-center">
        <Fade direction="left">
          <div className="w-36 ml-7 md:ml-15 md:w-36">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Radio,
              }}
            />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact