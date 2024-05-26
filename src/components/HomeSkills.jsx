import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { LiaNode } from "react-icons/lia";
import { SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
export const HomeSkills = () => {
  return (
    <ul className="text-white exo flex md:flex-col flex-row flex-wrap  gap-2 md:items-end md:justify-center justify-end items-center w-full font-extralight overflow-y-auto h-[100%] pr-2 fade-in1">
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-100 cursor-pointer text-blue-400 flex-row-reverse md:m-0 mt-2"
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(0);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <FaReact className="text-3xl" /> React.js
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-blue-400 h-1.5">
          <div className="bg-blue-50 h-1.5 w-1/12"></div>
        </div>
      </li>
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-100 cursor-pointer text-green-400 flex-row-reverse "
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(1);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <LiaNode className="text-3xl" /> Node.js
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-green-400 h-1.5">
          <div className="bg-gray-50 h-1.5 w-2/12"></div>
        </div>
      </li>
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-100 cursor-pointer text-gray-300 flex-row-reverse "
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(2);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <SiExpress className="text-3xl" /> Express.js
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-gray-600 h-1.5">
          <div className="bg-gray-50 h-1.5 w-2/12"></div>
        </div>
      </li>
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-100 cursor-pointer text-green-700 flex-row-reverse "
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(3);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <SiMongodb className="text-3xl" /> Mongo DB
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-green-700 h-1.5">
          <div className="bg-gray-50 h-1.5 w-3/12"></div>
        </div>
      </li>
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-100 cursor-pointer text-cyan-700 flex-row-reverse  font-normal"
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(3);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <GrMysql className="text-3xl" /> My SQL
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-blue-600 h-1.5">
          <div className="bg-gray-50 h-1.5 w-3/12"></div>
        </div>
      </li>
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-100 cursor-pointer text-yellow-400 flex-row-reverse "
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(5);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <FaAws className="text-3xl" />
        AWS services
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-yellow-400 h-1.5">
          <div className="bg-gray-50 h-1.5 w-6/12"></div>
        </div>
      </li>
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-400 cursor-pointer text-white flex-row-reverse "
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(7);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <FaGithub className="text-3xl" />{" "}
        <a href="https://github.com/Priyanshu885588" target="_blank">
          Github
        </a>
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-gray-600 h-1.5">
          <div className="bg-gray-50 h-1.5 w-3/12"></div>
        </div>
      </li>
      <li
        className="flex items-center gap-2 md:text-lg text-sm hover:text-gray-100 cursor-pointer text-orange-400 flex-row-reverse "
        onMouseEnter={() => {
          setskillDescription((prev) => !prev), setskillDescriptionIndex(5);
        }}
        onMouseLeave={() => setskillDescription((prev) => !prev)}
      >
        <SiTensorflow /> TenserFlow
      </li>
      <li className="w-full flex justify-end mb-2">
        <div className="w-10/12 bg-orange-400 h-1.5">
          <div className="bg-gray-50 h-1.5 w-8/12"></div>
        </div>
      </li>
    </ul>
  );
};
