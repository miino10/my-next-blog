import Image from "next/image";

import React from "react";

interface CreatorProps {
  id: number;
  name: string;

  profileUrl: string;
  channelName: string;
}

export default function CreatorsCard({
  profileUrl,
  id,
  name,
  channelName,
}: CreatorProps) {
  return (
    <div key={id} className="flex w-full ml-5   gap-3  py-5 2xl:h-[20vh] 2xl:w-[30vh]   2xl:items-center ">
      {/* className="w-full md:w-[40%] lg:w-[45%] xl:w-[23%] xl:h-fit p-4 flex
      md:gap-8 "{} */}
      <div className="flex min-w-[60px] min-h-[60px] md:w-[100px] md:h-[100px] xl:h-[70px] xl:w-[70px] relative 2xl:w-[35vh] 2xl:h-[13vh]    ">
        <Image
          src={profileUrl}
          fill
          alt={"prof"}
          className="object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center  w-[60%] xl:w-[65%] xl:h-full 2xl:h-[15vh] 2xl:w-[50vh] ">
        <h1 className="text-lg font-semibold xl:text-lg 2xl:text-4xl">{name}</h1>
        <p className="text-red-500 font-semibold xl:text-sm 2xl:text-2xl">{channelName}</p>
      </div>
    </div>
  );
}
