import React from "react";
import { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import BazzarBee from "../assessts/bb.png";
import BlogWebsite from "../assessts/blbl.png";
import { Projects } from "./Projects";
import { LuPanelLeftClose } from "react-icons/lu";
import { MdOutlineCloseFullscreen } from "react-icons/md";
export const Home = () => {
  const [entryOfProject, setentryOfProject] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [webURL, setwebURL] = useState("");

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
            className="p-5 cursor-pointer"
            onClick={() => (
              setImageURL(
                "https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/bb.jpg?alt=media&token=2409bbde-50dc-402e-8ecc-67822f22f130"
              ),
              setentryOfProject((prev) => !prev),
              setwebURL("https://bazzar-bee.vercel.app")
            )}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/bb.jpg?alt=media&token=2409bbde-50dc-402e-8ecc-67822f22f130"
              className="w-full h-full border-y p-2 hover:scale-105 transition-all duration-300"
              alt=""
            />
          </div>
          <div
            className="p-5 cursor-pointer"
            onClick={() => (
              setImageURL(
                "https://firebasestorage.googleapis.com/v0/b/blog-website-584fc.appspot.com/o/blbl.png?alt=media&token=b6fc619e-6624-4f58-96f0-7f5a4b0efc40"
              ),
              setentryOfProject((prev) => !prev),
              setwebURL("https://blog-website-liart.vercel.app")
            )}
          >
            <img
              src={BlogWebsite}
              className="w-full h-full border-y p-2 hover:scale-105 transition-all duration-300 "
              alt=""
            />
          </div>
        </div>

        {entryOfProject && (
          <div
            className="absolute z-50 back h-full w-full top-0 flex justify-end pr-4 items-center border-r cursor-pointer backdrop-blur-lg bg-black/[.6] hover:backdrop-blur-3xl transition-all duration-100"
            onClick={() => setentryOfProject((prev) => !prev)}
          >
            <div className="text-white transition-all duration-200">
              <LuPanelLeftClose className="w-8 h-8 cursor-pointer" />
              {/* <MdOutlineCloseFullscreen /> */}
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-full">
        {entryOfProject && <Projects imageURL={imageURL} webURL={webURL} />}
      </div>
    </div>
  );
};
