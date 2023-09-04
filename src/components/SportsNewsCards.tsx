import React from "react";
import Card from "./Card";
import { SportsNewsData } from "@/data";

export default function SportsNewsCards() {
  return (
    <div className=" w-screen  lg:w-[100%] h-auto md:min-h-[100vh]  ">
      <div className="flex  flex-wrap justify-center md:justify-start  md:gap-12 lg:gap-8 xl:gap-5 p-4  ">
        {SportsNewsData.map((data) => (
          <Card
            id={data.id}
            key={data.id}
            profileUrl={data.profileUrl}
            channelName={data.channelName}
            timePost={data.timePost}
            channelImg={data.channelImg}
            tagPost={data.tagPost}
            titlePost={data.titlePost}
            mainTextPost={data.mainTextPost}
          />
        ))}
      </div>
    </div>
  );
}
