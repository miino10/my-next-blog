import NewsCard from "@/components/NewsCard";
import { LatestNewsData } from "@/data";
import React from "react";

export default function LatestNews() {
  return (
    <div className=" w-screen  lg:w-[100%] h-auto md:min-h-[100vh]  ">
      <div className="flex justify-center items-center py-4">
        <h1 className="text-3xl font-semibold">Latest news</h1>
      </div>
      <div className="flex  flex-wrap justify-center md:justify-start  md:gap-12 lg:gap-8 xl:gap-5 p-4  ">
        {LatestNewsData.map((data) => (
          <NewsCard
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
