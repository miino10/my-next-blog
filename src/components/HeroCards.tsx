"use client";

import { HeroData } from "@/data";
import React, { useState, useEffect } from "react";
import HeroCard from "./HeroCard";


export default function HeroCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    
    const interval = setInterval(() =>
      setCurrentIndex((prev) => (prev === HeroData.length - 1 ? 0 : prev + 1)),4000
    );
    return () => {
        clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex overflow-x-hidden ">
        {HeroData.map((data, index) => (
          <div
            key={index}
            className={`min-w-0 flex ease-in-out  flex-[0_0_100%] ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            <HeroCard
              id={data.id}
              titlePost={data.titlePost}
              mainTextPost={data.mainTextPost}
              profileUrl={data.profileUrl}
              channelName={data.channelName}
              timePost={data.timePost}
              channelImg={data.channelImg}
              tagPost={data.tagPost}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
