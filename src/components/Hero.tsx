"use-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HeroData } from "@/data";

export default function Hero() {
  return (
    <>
      {HeroData.map((data) => (
        <div key={data.id} className="lg:flex-row w-full  mt-8 mb-2 flex flex-col  gap-2 md:gap-10 lg:gap-0 ">
          {/* Left */}
          <div className="flex-1 flex justify-center md:w-full  lg:h-full   ">
            <div className="w-full md:w-3/4 lg:w-[100%]   relative h-60 md:h-[60vh] lg:h-[50vh] xl:h-[70vh]">
              <Image
                src={data.profileUrl}
                alt="heroimg"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Right */}
          <div className="flex-1 flex px-5 xl:py-8   lg:w-[70vh] lg:h-[50vh] xl:h-[70vh]">
            <div className="flex flex-col py-8 xl:gap-y-2 2xl:gap-y-8">
              <div className="flex items-center gap-3 ">
                <div className="w-8 h-8 relative xl:w-10 xl:h-10 2xl:w-16 2xl:h-16">
                  <Image
                    src={data.channelImg}
                    alt="netflex"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <p className="2xl:text-3xl">{data.timePost}</p>
              </div>
              <div className="mb-5 text-xl font-semibold xl:text-4xl 2xl:text-6xl">
                <Link href={"/"}>{data.titlePost}</Link>
              </div>
              <div className="mb-5 text-lg md:text-base lg:text-xl xl:text-2xl  overflow-hidden">
                <p className="line-clamp-3 md:line-clamp-5 lg:line-clamp-none xl:line-clamp-3 2xl:line-clamp-5 2xl:text-5xl">
                  {data.mainTextPost}
                </p>
              </div>
              <div>
                <h3 className="text-red-500 font-semibold xl:text-xl 2xl:text-4xl">
                  {data.tagPost}
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
