import React from "react";
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import BazzarBee from "../assessts/bb.png";
import BlogWebsite from "../assessts/blbl.png";
import { Projects1 } from "./Projects1";
import { Projects2 } from "./Projects2";
import { Projects3 } from "./Projects3";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { CiCircleChevRight } from "react-icons/ci";

import Terminal from "./Terminal";
import { HomeSkills } from "./HomeSkills";
export const Home = () => {
  const [entryOfProject, setentryOfProject] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [webURL, setwebURL] = useState("");
  const [imageHover, setimageHover] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleSkills = (arg) => {
    setShowSkills((prev) => arg);
  };
  const handleContacts = () => {
    setShowContactOptions((prev) => true);
  };
  return (
    <div className=" h-screen w-screen background-image border-gray-700 flex">
      <div
        className={` h-full flex items-center z-10 relative transition-all duration-200 ${
          entryOfProject ? "move-right" : "move-left"
        }`}
      >
        <div className="relative h-full w-full in-animation left-0 overflow-y-scroll overflow-x-hidden">
          <div className="text-white quicksand text-2xl text-center p-4 tracking-widest uppercase flex items-center justify-center hover:bg-white cursor-pointer hover:text-black transition-all duration-300">
            Pr
            <span className="animate-pulse">
              <CiCircleChevDown className=" text-2xl animate-bounce" />
            </span>
            jects
          </div>
          <div
            className="p-5 cursor-pointer h-[30%]"
            onClick={() => (
              setImageURL(
                "https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/bb.jpg?alt=media&token=2409bbde-50dc-402e-8ecc-67822f22f130"
              ),
              setentryOfProject(1),
              setwebURL("https://bazzar-bee.vercel.app")
            )}
          >
            <div className="w-full h-full border-y p-2 hover:scale-105 transition-all duration-300">
              <div
                className="w-full h-full flex items-end"
                style={{
                  backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/bb.jpg?alt=media&token=2409bbde-50dc-402e-8ecc-67822f22f130")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div
            className="p-5 cursor-pointer h-[30%]"
            onClick={() => (
              setImageURL(
                "https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/Screenshot%202024-05-26%20021257.png?alt=media&token=ed51ce4f-3bae-4019-a747-5ce0af4d93ca"
              ),
              setentryOfProject(2),
              setwebURL("https://main.d32nmi8aqac813.amplifyapp.com/")
            )}
          >
            <div className="w-full h-full border-y p-2 hover:scale-105 transition-all duration-300">
              <div
                className="w-full h-full flex items-end "
                style={{
                  backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/Screenshot%202024-05-26%20021257.png?alt=media&token=ed51ce4f-3bae-4019-a747-5ce0af4d93ca")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
          <div
            className="p-5 cursor-pointer h-[30%]"
            onClick={() => (
              setImageURL(
                "https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/blbl.png?alt=media&token=b6fc619e-6624-4f58-96f0-7f5a4b0efc40"
              ),
              setentryOfProject(3),
              setwebURL("https://blog-website-liart.vercel.app")
            )}
          >
            <div className="w-full h-full border-y p-2 hover:scale-105 transition-all duration-300">
              <div
                className="w-full h-full flex items-end "
                style={{
                  backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/blbl.png?alt=media&token=b6fc619e-6624-4f58-96f0-7f5a4b0efc40")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>

        {entryOfProject > 0 && (
          <div
            className="absolute z-50 back h-full w-full top-0 flex justify-end pr-4 items-center cursor-pointer bg-black hover:backdrop-blur-3xl transition-all duration-100"
            onClick={() => setentryOfProject(0)}
          >
            <div className="text-white transition-all duration-200">
              <CiCircleChevRight className="w-10 h-10 cursor-pointer transition-all duration-200 hover:scale-110 opacity-100" />
              {/* <MdOutlineCloseFullscreen /> */}
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-full">
        {entryOfProject == 1 && (
          <Projects1 imageURL={imageURL} webURL={webURL} />
        )}
        {entryOfProject == 2 && (
          <Projects2 imageURL={imageURL} webURL={webURL} />
        )}
        {entryOfProject == 3 && (
          <Projects3 imageURL={imageURL} webURL={webURL} />
        )}
        <div className="h-full w-full flex items-center justify-center">
          <div className="h-full w-[20%] "></div>
          <div className="h-[100%] w-[60%] overflow-hidden flex flex-col items-center justify-between">
            <div className="w-full h-[20%] flex gap-6 justify-center relative">
              {showContactOptions && (
                <>
                  <div className="h-full w-1/6 flex flex-col items-center relative -top-32 drop-animation">
                    <div className="w-[0.5px] h-1/2 bg-white"></div>
                    <a
                      href="https://github.com/Priyanshu885588"
                      target="_blank"
                    >
                      <FaGithub className="text-white w-7 h-7 hover:animate-pulse" />
                    </a>
                  </div>
                  <div className="h-full w-1/6 flex flex-col items-center relative -top-32 drop-animation">
                    <div className="w-[0.5px] h-1/2 bg-white"></div>
                    <a
                      href="https://www.linkedin.com/in/priyanshu-mandani-835553309/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-blue-400 w-7 h-7 hover:animate-pulse" />
                    </a>
                  </div>
                  <div className="h-full w-1/6 flex flex-col items-center relative -top-32 drop-animation">
                    <div className="w-[0.5px] h-1/2 bg-white"></div>
                    <a
                      href="https://www.instagram.com/priyanshu__11/"
                      target="_blank"
                    >
                      <LuInstagram className="text-white w-7 h-7 hover:animate-pulse bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-0.5" />
                    </a>
                  </div>
                  <div className="h-full w-1/6 flex flex-col items-center relative -top-32 drop-animation">
                    <div className="w-[0.5px] h-1/2 bg-white"></div>
                    <a href="https://x.com/M16946Priyanshu" target="_blank">
                      <BsTwitterX className="text-white w-7 h-7 hover:animate-pulse p-0.5" />
                    </a>
                  </div>
                  <div className="h-full w-1/6 flex flex-col items-center relative -top-32 drop-animation">
                    <div className="w-[0.5px] h-1/2 bg-white"></div>
                    <a
                      href="mailto:priyanshumandani978@gmail.com"
                      target="_blank"
                    >
                      <SiGmail className="text-red-500 w-7 h-7 hover:animate-pulse" />
                    </a>
                  </div>
                </>
              )}
            </div>
            <div className="h-[55%] w-full">
              <Terminal
                handleSkills={handleSkills}
                handleContacts={handleContacts}
              />
            </div>
            <div className="w-full h-[20%] "></div>
          </div>
          <div className="h-full w-[20%] flex items-center">
            {showSkills && <HomeSkills />}
          </div>
        </div>
      </div>
    </div>
  );
};
