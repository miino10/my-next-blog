import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
export default function TopCreatorsTitle() {
  return (
    <div className="mt-5  min-w-[36vh]   ">
      <div className="flex  gap-5 justify-between">
        <h1 className="text-base md:text-3xl font-bold ml-8  md:ml-6 2xl:text-5xl">
          Top Creators
        </h1>
        <Link
          href={"/creators"}
          className="flex items-center mr-8  md:mr-36   lg:mr-16 xl:mr-14 2xl:mr-32
         "
        >
          <p className="text-red-500 text-sm min-w-fit  md:text-xl font-semibold 2xl:text-5xl">
            See all
          </p>
          <BsArrowRightShort className="text-red-500 w-5 h-5 md:w-10 md:h-10 2xl:w-32 2xl:h-20" />
        </Link>
      </div>
    </div>
  );
}
