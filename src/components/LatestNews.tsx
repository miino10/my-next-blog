import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
export default function LatestNews() {
  return (
    <div className="mt-5  ">
      <div className="flex justify-between ">
        <h1 className="text-2xl md:text-3xl font-bold ml-5 md:ml-0">
          Latest News
        </h1>
        <Link
          href={"/"}
          className="flex items-center  xl:ml-8 xl:mr-0 lg:mr-16 md:mr-36 
         "
        >
          <p className="text-red-500 text-xl font-semibold ">See all</p>
          <BsArrowRightShort className="text-red-500 w-10 h-10" />
        </Link>
      </div>
    </div>
  );
}
