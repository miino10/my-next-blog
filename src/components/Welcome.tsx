import React from "react";
import { PiFilmSlateFill } from "react-icons/pi";
import { BsBook, BsPen } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";
export default function Welcome() {
  return (
    <div className="  flex justify-center    ">
      <div className=" w-[90%]  h-32 md:h-48 lg:w-full flex  flex-col gap-3  md:gap-2 md:py-4 items-center justify-center bg-gray-100 text-center rounded-lg">
        <h1 className="text-slate-500 text-base font-medium md:text-2xl">
          Welcome to our Blog
        </h1>
        <div className="md:w-[70%] md:h-[80%]  md:p-2">
          <h2 className="text-base font-medium md:text-lg lg:text-2xl xl:text-3xl ">
            Crafting narrative that ignit{" "}
            <span className="text-red-500"> inspiration</span>,{" "}
            <span className="text-red-500">knowledge</span> , and
            <span className="text-red-500"> entertainment </span>
          </h2>
        </div>
        <div className="flex gap-1 md:gap-3">
          <PiFilmSlateFill className="w-10 h-6 md:h-8" />
          <BsBook className="w-10 h-6 md:h-8" />
          <AiOutlineBulb className="w-10 h-6 md:h-8" />
          <BsPen className="w-10 h-6 md:h-8" />
        </div>
      </div>
    </div>
  );
}
