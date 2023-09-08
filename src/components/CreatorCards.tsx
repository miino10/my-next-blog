import React from "react";
import CreatorsCard from "./CreatorCard";
import { CreatorData } from "@/data";


export default function CreatorCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
      {CreatorData.map((data) => (
        <CreatorsCard
        key={data.id}
          id={data.id}
          name={data.name}
          profileUrl={data.photo}
          channelName={data.channel}
        />
      ))}
    </div>
  );
}
