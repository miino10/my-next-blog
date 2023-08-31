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
}: 
CardProps) {
  return (
    <div className=" h-[90vh] lg:h-[80vh] xl:w-[40vh] md:px-8 lg:px-0  ">
      {/* text */}

      {/* card */}
      <div className="flex gap-5 ">
        <div className="mt-4  h-[60vh]">
          {/* imagesparts */}
          <div className="mt-5 mb-2 ">
            <div className="w-[55vh]  h-[30vh] md:w-[50vh] xl:w-[40vh] relative mb-2">
              <Image
                src={profileUrl}
                alt={"imgPost"}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center gap-1 text-center">
              <div className="w-8 h-8 relative  ">
                <Image
                  src={channelImg}
                  alt={"imgAcoount"}
                  fill
                  className="object-cover rounded-full border-gray-300 border"
                />
              </div>
              {/* <p>Formula 1</p> */}
              <div className="flex gap-6">
                <p> {channelName}</p>
                <p>{timePost}</p>
              </div>

             
            </div>
          </div>
          {/* textPart */}
          <div className="">
            <Link href={"/"}>
              <h2 className="text-xl lg:text-2xl font-bold  max-w-[40vh] min-h-[15vh]   line-clamp-3 overflow-hidden">
                {titlePost}
              </h2>
            </Link>
            <p className=" line-clamp-4   max-w-[40vh] mt-3">{mainTextPost}</p>
            <p className="text-red-500 font-semibold mt-3">{tagPost}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
