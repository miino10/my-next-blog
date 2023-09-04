import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  id: number;
  titlePost: string;
  mainTextPost: string;
  profileUrl: string;
  channelName: string;
  timePost: string;
  channelImg: string;
  tagPost: string;
}

export default function Card({
  profileUrl,
  titlePost,
  mainTextPost,
  channelImg,
  channelName,
  timePost,
  tagPost,
}: CardProps) {
  return (
    <div className="w-full md:w-[40%] lg:w-[45%] xl:w-[23%] xl:h-fit  p-4 flex md:gap-8  ">
      {}
      <div className="flex flex-col gap-2  md:w-full lg:w-fit xl:h-fit ">
        {/* Image and Channel Info */}
        <div className="relative w-full md:w-full h-[30vh] md:h-[40vh] lg:w-full lg:h-[40vh] xl:h-[30vh]">
          <Image
            src={profileUrl}
            alt="imgPost"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-8 h-8 relative">
            <Image
              src={channelImg}
              alt="imgAccount"
              layout="fill"
              objectFit="cover"
              className="rounded-full border border-gray-300"
            />
          </div>
          <div className="flex flex-col 2xl:text-2xl">
            <p>{channelName}</p>
            <p>{timePost}</p>
          </div>
        </div>

        {/* Text Content */}
        <Link href="/news/{id}">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold max-w-[40vh] min-h-[15vh] line-clamp-3 overflow-hidden 2xl:text-5xl">
            {titlePost}
          </h2>
        </Link>
        <p className="text-sm lg:text-base line-clamp-4 2xl:text-4xl">
          {mainTextPost}
        </p>
        <p className="text-red-500 font-semibold 2xl:text-3xl">{tagPost}</p>
      </div>
    </div>
  );
}
