import React from "react";
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import BazzarBee from "../assessts/bb.png";
import BlogWebsite from "../assessts/blbl.png";
import { Projects1 } from "./Projects1";
import { Projects2 } from "./Projects2";
import { CiCircleChevRight } from "react-icons/ci";
export const Home = () => {
  const [entryOfProject, setentryOfProject] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [webURL, setwebURL] = useState("");
  const [imageHover, setimageHover] = useState(false);

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
                "https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/Screenshot%20(54).png?alt=media&token=65f46a8f-2b18-49f4-a09c-1feafeb3cacd"
              ),
              setentryOfProject(2),
              setwebURL("https://blog-website-liart.vercel.app")
            )}
          >
            <div className="w-full h-full border-y p-2 hover:scale-105 transition-all duration-300">
              <div
                className="w-full h-full flex items-end "
                style={{
                  backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/Screenshot%20(54).png?alt=media&token=65f46a8f-2b18-49f4-a09c-1feafeb3cacd")`,
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
      </div>
    </div>
  );
};
