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
import { IoHomeOutline } from "react-icons/io5";
import bazzVIdeo from "../assessts/user_auth_BazzarBee.mp4";

const descriptionArray = [
  "Built a dynamic e-commerce website using React and Redux. Features include a responsive design, real-time updates, seamless routes, advanced search and filter options, an intuitive shopping cart, and a seamless user experience.",
  "Developed a robust backend for the e-commerce website using Node.js, ensuring efficient server-side operations and scalable performance with asynchronous event-driven architecture.",
  "Utilized Express.js to create a fast and flexible server framework, enabling smooth API integration and streamlined backend development with its minimalist design.",
  "Implemented MongoDB for a scalable and flexible database solution, providing efficient data storage and retrieval for the e-commerce platform, with support for complex data structures and high availability.",
  "Integrated Stripe for secure and seamless payment processing, ensuring a smooth and trustworthy transaction experience for users, with support for various payment methods and currencies.",
  "Leveraged TensorFlow to incorporate advanced machine learning algorithms, enhancing product recommendations and user experience with intelligent analytics, enabling personalized shopping experiences based on user behavior.",
  "Utilized Tailwind CSS for rapid and efficient UI development, leveraging its utility-first approach to create a highly customizable and responsive design system for the e-commerce website, enabling streamlined styling and consistent user interface elements.",
];

export const Projects1 = ({ imageURL, webURL, handleHomepage }) => {
  const [skillDescription, setskillDescription] = useState(false);
  const [descriptionIndex, setskillDescriptionIndex] = useState(null);
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
      <button
        className="text-white md:hidden block absolute top-2 left-2 z-50"
        onClick={() => handleHomepage()}
      >
        <IoHomeOutline className="w-6 h-6" />
      </button>
      <div className=" absolute md:right-4 md:top-2 top-32 right-2 -z-10 flex flex-col items-end justify-center fade-in">
        <h1 className="uppercase 2xl:text-[9rem] lg:text-[7rem] md:text-[4rem] text-[2rem] oswald text-yellow-400 h-fit m-0 p-0">
          BAZZARBEE
        </h1>
        <p className="md:w-1/2 w-2/3 montserrat text-left text-xs md:text-base">
          Buzzing with Deals,
        </p>
        <p className="md:w-1/2 w-2/3 montserrat text-left md:text-sm text-xs">
          Your One-Stop Hive - BazzarBee!
        </p>
      </div>
      <div className="h-full flex md:flex-row flex-col items-center hover-big justify-center">
        <div className="md:h-full md:w-1/3 h-1/3 w-full flex items-center md:justify-end justify-start py-4">
          <div className="md:w-full md:h-2/3 w-fit h-[100%] flex flex-col md:items-end items-start md:gap-3 gap-1 justify-end">
            {skillDescription && (
              <div className="w-[90%] border-l-2 pl-2 appear text-sm text-gray-400 font-light border-gray-400">
                {descriptionArray[descriptionIndex]}
              </div>
            )}
            <ul className="text-white exo flex flex-col md:gap-2 gap-0 items-end w-full font-extralight overflow-y-auto h-[60%] pr-2">
              <li
                className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-blue-400 flex-row-reverse fade-in"
                onMouseEnter={() => {
                  setskillDescription((prev) => !prev),
                    setskillDescriptionIndex(0);
                }}
                onMouseLeave={() => setskillDescription((prev) => !prev)}
              >
                <FaReact /> React.js
              </li>
              <li
                className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-green-400 flex-row-reverse fade-in"
                onMouseEnter={() => {
                  setskillDescription((prev) => !prev),
                    setskillDescriptionIndex(1);
                }}
                onMouseLeave={() => setskillDescription((prev) => !prev)}
              >
                <LiaNode /> Node.js
              </li>
              <li
                className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-gray-300 flex-row-reverse fade-in"
                onMouseEnter={() => {
                  setskillDescription((prev) => !prev),
                    setskillDescriptionIndex(2);
                }}
                onMouseLeave={() => setskillDescription((prev) => !prev)}
              >
                <SiExpress /> Express.js
              </li>
              <li
                className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-green-700 flex-row-reverse fade-in"
                onMouseEnter={() => {
                  setskillDescription((prev) => !prev),
                    setskillDescriptionIndex(3);
                }}
                onMouseLeave={() => setskillDescription((prev) => !prev)}
              >
                <SiMongodb /> Mongo DB
              </li>
              <li
                className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-purple-500 flex-row-reverse fade-in"
                onMouseEnter={() => {
                  setskillDescription((prev) => !prev),
                    setskillDescriptionIndex(4);
                }}
                onMouseLeave={() => setskillDescription((prev) => !prev)}
              >
                <BsStripe /> Stripe
              </li>
              <li
                className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-orange-400 flex-row-reverse fade-in"
                onMouseEnter={() => {
                  setskillDescription((prev) => !prev),
                    setskillDescriptionIndex(5);
                }}
                onMouseLeave={() => setskillDescription((prev) => !prev)}
              >
                <SiTensorflow /> TenserFlow
              </li>
              <li
                className="flex items-center gap-2 text-lg hover:text-gray-100 cursor-pointer text-sky-400 flex-row-reverse fade-in"
                onMouseEnter={() => {
                  setskillDescription((prev) => !prev),
                    setskillDescriptionIndex(6);
                }}
                onMouseLeave={() => setskillDescription((prev) => !prev)}
              >
                <RiTailwindCssFill /> Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="md:h-2/3 md:w-2/3 h-1/3 w-full overflow-y-scroll overflow-x-hidden relative scrollable-div">
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

        <div className="md:h-full md:w-1/3 h-1/3 w-full flex md:items-end items-start">
          <div className="h-fit py-2 px-2 ">
            <p className="montserrat font-thin md:w-4/5 relative text-left fade-in pb-4 2xl:text-[1rem] lg:text-[0.9rem] md:text-[1rem] text-[0.8rem]">
              An innovative e-commerce platform designed to elevate your online
              shopping experience. Seamlessly integrating advanced features, it
              offers secure transactions, personalized product recommendations,
              and insights tailored to your preferences. Explore the future of
              online shopping with us!
            </p>
          </div>
        </div>
      </div>
      <footer className="w-full absolute bottom-0 h-10 p-2 px-4 mb-2 hidden md:block">
        <button className="text-white py-1 px-4 border-2 rounded-full text-sm font-mono opacity-40">
          Ctrl + i
        </button>
      </footer>
    </div>
  );
};
