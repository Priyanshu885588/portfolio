import React, { useState, useEffect } from "react";
import BazzarBee from "../assessts/bb.png";
import BlogWebsite from "../assessts/blbl.png";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { SiTensorflow } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import bazzVIdeo from "../assessts/user_auth_BazzarBee.mp4";
export const Projects = ({ imageURL, webURL }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl and I keys are pressed
      if (event.ctrlKey && event.key === "i") {
        // Scroll to the end of the div
        const div = document.querySelector(".scrollable-div");
        if (div) {
          div.scrollTo({
            top: div.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  const handleClickBlogWebsite = () => {
    window.location.href = "https://blog-website-liart.vercel.app";
  };
  return (
    <div className="text-white h-full w-full">
      {/* <div className=" absolute left-[15%] top-2 -z-10 flex flex-col items-end justify-center fade-in">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bazzarbee-192fe.appspot.com/o/HomePage%2Fwired-outline-1186-honeycombs%20(1).gif?alt=media&token=e900967b-3b3e-43d5-a326-39000982c456"
          alt=""
          className="w-60 h-60 opacity-10"
        />
      </div> */}
      <div className=" absolute right-4 top-2 -z-10 flex flex-col items-end justify-center fade-in">
        <h1 className="uppercase 2xl:text-[9rem] lg:text-[7rem] md:text-[4rem] sm:text-[2rem] oswald text-yellow-400 h-fit m-0 p-0">
          BAZZARBEE
        </h1>
        <p className="w-1/2 montserrat text-left text-xs md:text-base">
          Buzzing with Deals,
        </p>
        <p className="w-1/2 montserrat text-left md:text-sm text-xs">
          Your One-Stop Hive - BazzarBee!
        </p>
      </div>
      <div className="h-full flex items-center hover-big justify-center">
        <div className="h-full w-1/3 flex items-center justify-end py-4">
          <div className="w-full h-2/3 flex items-end">
            <ul className="text-white exo flex flex-col gap-2 items-end w-full font-extralight overflow-y-auto h-[60%] pr-2">
              <li className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-blue-400 flex-row-reverse fade-in">
                <FaReact /> React.js
              </li>
              <li className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-green-400 flex-row-reverse fade-in">
                <LiaNode /> Node.js
              </li>
              <li className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-gray-300 flex-row-reverse fade-in">
                <SiExpress /> Express.js
              </li>
              <li className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-green-700 flex-row-reverse fade-in">
                <SiMongodb /> Mongo DB
              </li>
              <li className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-purple-500 flex-row-reverse fade-in">
                <BsStripe /> Stripe
              </li>
              <li className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-orange-400 flex-row-reverse fade-in">
                <SiTensorflow /> TenserFlow
              </li>
              <li className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-sky-400 flex-row-reverse fade-in">
                <RiTailwindCssFill /> Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="h-2/3 w-2/3 overflow-y-scroll overflow-x-hidden relative scrollable-div">
          <img
            src={imageURL}
            className="h-full p-3 transition-all duration-300 cursor-pointer border-r"
            alt=""
            onClick={() => handleClick(webURL)}
          />

          <video
            className="h-[100%] w-[100%] transition-all duration-200 p-3"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            <source src={bazzVIdeo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="h-full w-1/3 flex items-end">
          <div className="h-fit py-2 px-2 ">
            <p className="montserrat font-thin w-4/5 relative text-left fade-in pb-4 2xl:text-[1rem] lg:text-[0.9rem] md:text-[1rem] sm:text-[0.5rem]">
              An innovative e-commerce platform designed to elevate your online
              shopping experience. Seamlessly integrating advanced features, it
              offers secure transactions, personalized product recommendations,
              and insights tailored to your preferences. Explore the future of
              online shopping with us!
            </p>
          </div>
        </div>
      </div>
      <footer className="w-full absolute bottom-0 h-10 p-2 px-4 mb-2">
        <button className="text-white py-1 px-4 border-2 rounded-full text-sm font-mono opacity-40">
          Ctrl + i
        </button>
      </footer>
    </div>
  );
};
