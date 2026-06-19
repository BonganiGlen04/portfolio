import { Fade } from "react-awesome-reveal";
import PurchaseRequest from "../assets/Images/PurchaseRequest.png";
import RCC from "../assets/Images/RCC.png";
import ShopEase from "../assets/Images/ShopEase.png";

const Projects = () => {
  return (
    <div className="mt-20 bg-zinc-100 p-10">
      <div>
        <Fade direction="left">
          <h1 className="text-center font-bold text-3xl">
            <span className="border-b-2 border-[#4267B2] px-5 py-3">
              MY PROJECTS
            </span>
          </h1>
        </Fade>
        <Fade direction="right">
          <p className=" text-center mt-5 p-5 md:text-center font-medium text-[#555] ">
            {" "}
            Discover my personal and client projects, each with its Design.
          </p>
        </Fade>
      </div>

      <div className="md:flex justify-center items-center mt-12">
        <div>
          <Fade direction="left">
            <img src={RCC} alt="RCC Check-In App preview" className="mx-auto w-full max-w-sm z-10" />
          </Fade>
        </div>
        <div className="text-center">
          <Fade direction="left">
            <h1 className="font-bold text-2xl">RCC Check-In App</h1>
            <p className="text-[#555] p-5">
              Multi-tenant church attendance management platform with QR check-ins, visitor tracking, kiosk mode, and attendance reporting.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="flex gap-5 justify-center">
              <a href="https://github.com/bonganiglen04" target="_blank">
                <button className="bg-[#4267B2] py-2 px-4 rounded-md font-semibold text-white">
                  Code
                </button>
              </a>
              <a href="https://rcc-check-in-283b592ad27d.herokuapp.com/" target="_blank">
                <button className="text-[#4267B2] py-2 px-4 rounded-md font-semibold bg-white">
                  Preview
                </button>
              </a>
            </div>
          </Fade>
        </div>
      </div>

      <div className="md:flex justify-center items-center mt-12">
        <div>
          <Fade direction="left">
            <img src={PurchaseRequest} alt="Purchase Request Approval System preview" className="mx-auto w-full max-w-sm z-10" />
          </Fade>
        </div>
        <div className="text-center">
          <Fade direction="left">
            <h1 className="font-bold text-2xl">Purchase Request Approval System</h1>
            <p className="text-[#555] p-5">
              Role-based workflow application for managing purchase requests, approvals, and purchase order generation.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="flex gap-5 justify-center">
              <a href="https://github.com/BonganiGlen04/purchase_request_approval_tool" target="_blank">
                <button className="bg-[#4267B2] py-2 px-4 rounded-md font-semibold text-white">
                  Code
                </button>
              </a>
              <a href="https://github.com/BonganiGlen04/purchase_request_approval_tool" target="_blank">
                <button className="text-[#4267B2] py-2 px-4 rounded-md font-semibold bg-white">
                  Preview
                </button>
              </a>
            </div>
          </Fade>
        </div>
      </div>

      <div className="md:flex justify-center items-center mt-12">
        <div>
          <Fade direction="left">
            <img src={ShopEase} alt="ShopEase preview" className="mx-auto w-full max-w-sm z-10" />
          </Fade>
        </div>
        <div className="text-center">
          <Fade direction="left">
            <h1 className="font-bold text-2xl">ShopEase</h1>
            <p className="text-[#555] p-5">
              Responsive e-commerce landing page built with reusable React components and modern frontend practices.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="flex gap-5 justify-center">
              <a href="https://github.com/bonganiglen04" target="_blank">
                <button className="bg-[#4267B2] py-2 px-4 rounded-md font-semibold text-white">
                  Code
                </button>
              </a>
              <a href="https://shopease-81232.web.app/" target="_blank">
                <button className="text-[#4267B2] py-2 px-4 rounded-md font-semibold bg-white">
                  Preview
                </button>
              </a>
            </div>
          </Fade>
        </div>
      </div>

      <div className="md:flex justify-center items-center mt-12">
        {/* <div>
          <Fade direction="left">
            <img src="" alt="website" className=" z-10 " />
          </Fade>
        </div> */}
        <div className="text-center">
          <Fade direction="left">
            <h1 className="font-bold text-2xl">CCTV Person Detection Script</h1>
            <p className="text-[#555] p-5">
              Python-based computer vision script that detects people in CCTV images using the YOLO object detection model.
            </p>
          </Fade>
          <Fade direction="up">
            <div className="flex gap-5 justify-center">
              <a href="https://github.com/BonganiGlen04/image_sorting_project" target="_blank">
                <button className="bg-[#4267B2] py-2 px-4 rounded-md font-semibold text-white">
                  Code
                </button>
              </a>
              <a href="https://github.com/BonganiGlen04/image_sorting_project" target="_blank">
                <button className="text-[#4267B2] py-2 px-4 rounded-md font-semibold bg-white">
                  Preview
                </button>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Projects