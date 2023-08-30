"use-client";
import Image from "next/image";
import React from "react";

export default function hero() {
  return (
    <div className=" w-full h-[100vh] mt-8   flex flex-col md:flex-row gap-2  md:gap-10">
      {/* left */}
      <div className=" flex-1  flex justify-center  ">
        <div className=" h-[40vh] w-[90%] md:w-[80vh] md:h-[60vh] lg:w-[60vh] xl:w-[75vh]  xl:h-[50vh] relative  md:mt-0">
          <Image
            src="/john.jpg"
            alt="heroimg"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex-1 flex px-5  md:h-[63vh]  xl:py-8 lg:h-[60vh] xl:h-[50vh]  ">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-8 h-8 relative">
              <Image
                src={"/netflex.png"}
                alt={"netflex"}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <p>12 minuetes ago</p>
          </div>
          <div className=" text-xl font-semibold  xl:font-bold xl:text-3xl">
            <h1>where to watch 'John wick:chapter 4'</h1>
          </div>
          <div className=" text-lg md:text-base  lg:text-xl  overflow-hidden ">
            <p className="line-clamp-3 md:line-clamp-5 lg:line-clamp-none  xl:line-clamp-3">
              "John Wick 4," the legendary hitman, John Wick, finds himself
              pulled back into the world of assassins and intrigue once again
              After the events of the previous films, John is on the run and has
              become a target himself.
            </p>
          </div>
          <div>
            <h3 className="text-red-500 font-semibold">Movies</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
