import {Fade} from "react-awesome-reveal"
import cycling from "./../assets/cycling.json"
import LottieImport from "react-lottie";

const Lottie = (LottieImport as any).default ?? LottieImport;

const Timeline = () => {
  return (
    <div className='mt-20'>
      <div>
        <h1 className="text-center font-bold text-3xl">
          <Fade direction='right'>
            <span className="border-b-2 border-[#4267B2] px-5 py-3">MY TIMELINE</span>
          </Fade>
        </h1>
      </div>

      <div className='md:flex'>
        <div className='ml-10 md:ml-20 mt-20'>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              
              

              <li className="ms-4 mb-10">
                  {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -insert-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2026</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">Software Developer Intern</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">GrowthTech Development House</p>
                  <a href="https://drive.google.com/file/d/1qRr_UvPm00WipTRQilINy3UNWRxYT0FE/view?usp=drive_link" className="inline-flex items-center px-4 py-2 text-sm mt-4 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" target="_blank">
                    Download CV 
                    <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
              </li>

              <li className="ms-4 mb-10">
                  {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -insert-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2025</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">Technical Support Intern</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Cape Engineering and Business College</p>
              </li>

              <li className="ms-4 mb-10">
                  {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -insert-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2024</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">Completed My Advance National Diploma IT(Software Development)</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Nelson Mandela University</p>
              </li>

              <li className="ms-4 mb-10">
                  {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -insert-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div> */}
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2023</time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">Completed My National Diploma IT(Software Development)</h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">Nelson Mandela University</p>
              </li>

              <li className="mb-10 ms-4">
                {/* <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -insert-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                </div> */}
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2019</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500">Completed Grade 12 With A Bachelor Pass.</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> Mashishing Secondary School </p>
              </li>
              
            </ol>
        </div>
      </div>
    </div>
  )
}

export default Timeline