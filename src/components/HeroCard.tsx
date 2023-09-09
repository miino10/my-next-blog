
import Image from "next/image";
import Link from "next/link";
import React from "react";


export interface HeroProps {
  id: number;
  titlePost: string;
  mainTextPost: string;
  profileUrl: string;
  channelName: string;
  timePost: string;
  channelImg: string;
  tagPost: string;
}

export default function HeroCard({
  profileUrl,
  titlePost,
  mainTextPost,
  channelImg,
  channelName,
  timePost,
  tagPost,
}: HeroProps) {
  return (
    <>
      {/* ADD2230905AL5239386 */}
      {/* ADD2230906AL4439928 */}
      {/* ADD2230906AL4439928 */}
      {/* 7b39758216940131826133701e6aac */}
      {/* ID: 7b39758216940131826133701e6aac */}
      <div className="h-[120vh]  md:h-[120vh] lg:h-fit lg:flex-row w-full  mt-8 mb-2 flex flex-col justify-start bg-yellow-200 overflow-hidden   md:gap-10 lg:gap-0  ">
        {/* Left */}
        <div className="flex-1   md:w-full  lg:h-full     ">
          <div className="w-full md:w-3/4 lg:w-[100%]    relative h-60 md:h-[60vh] lg:h-[50vh] xl:h-[70vh]">
            <Image
              src={profileUrl}
              alt="heroimg"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex-[1_1_100%] md:flex-1  flex  px-5 xl:py-8 lg:w-[70vh] lg:h-[50vh] xl:h-[70vh]">
          <div className="flex flex-col py-8 xl:gap-y-2 2xl:gap-y-8">
            <div className="flex items-center gap-3 ">
              <div className="w-8 h-8 relative xl:w-10 xl:h-10 2xl:w-16 2xl:h-16">
                <Image
                  src={channelImg}
                  alt="netflex"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <p className="2xl:text-3xl">{timePost}</p>
            </div>
            <div className="mb-5 text-xl font-semibold xl:text-4xl 2xl:text-6xl">
              <Link href={"/"} className="xl:line-clamp-3 xl:py-1 2xl:py-2 2xl:leading-tight">
                {titlePost}
              </Link>
            </div>
            <div className="mb-5 text-lg md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl   overflow-hidden">
              <p className="line-clamp-3 md:line-clamp-5 lg:line-clamp-none xl:line-clamp-3 2xl:line-clamp-5 2xl:text-5xl 2xl:leading-normal">
                {mainTextPost}
              </p>
            </div>
            <div>
              <h3 className="text-red-500 font-semibold xl:text-xl 2xl:text-4xl">
                {tagPost}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
