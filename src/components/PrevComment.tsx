import { CommentData } from "@/data";
import Image from "next/image";
import React from "react";

export default function PrevComment() {
  return (
    <>
      {CommentData.map((data) => (
        <div className="p-1 mt-3 " key={data.id}>
          {/* commentPersonData */}

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src={data.photo}
                alt={""}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="text-base">
              <p className="font-semibold text-lg">Abdifatah</p>
              <p className="text-xs">{data.timeComment}</p>
            </div>
          </div>
          {/* commentPost */}
          <div className="mt-4  md:w-[100vh] py-5">
            <p>
             {data.CommentValue}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
