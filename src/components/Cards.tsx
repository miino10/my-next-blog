import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export default function Cards() {
  return (
    <div className="mt-5 h-[100vh] ">
      {/* text */}
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Latest News</h1>
        <Link
          href={"/"}
          className="flex items-center   px-5
         "
        >
          <p className="text-red-500 text-xl font-semibold">See all</p>
          <BsArrowRightShort className="text-red-500 w-10 h-10" />
        </Link>
      </div>
      {/* card */}
      <div className="flex gap-5">
        <div className="mt-4  h-[60vh]">
          {/* imagesparts */}
          <div className="mt-5 mb-2 ">
            <div className="w-[40vh] h-[25vh] relative mb-2">
              <Image
                src={"/Formula.jpg"}
                alt={"imgPost"}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center gap-1 text-center">
              <div className="w-8 h-8 relative  ">
                <Image
                  src={"/Formulalogo.jpg"}
                  alt={"imgAcoount"}
                  fill
                  className="object-cover rounded-full border-gray-300 border"
                />
              </div>
              <p>Formula 1</p>

              <p>3 hours ago</p>
            </div>
          </div>
          {/* textPart */}
          <div className="">
            <Link href={"/"}>
              <h2 className="text-xl font-bold">
                'He deserves a lot more'
                <br />
                Verstappen back
                <br /> Alonso
              </h2>
            </Link>
            <p className=" line-clamp-4   max-w-[40vh] mt-3">
              "John Wick 4," the legendary hitman, John Wick, finds himself
              pulled back into the world of assassins and intrigue once again
              After the events of the previous films, John is on the run and has
              become a target himself.
            </p>
            <p className="text-red-500 font-semibold mt-3">Sports</p>
          </div>
        </div>
        {/* card */}
      </div>
    </div>
  );
}
