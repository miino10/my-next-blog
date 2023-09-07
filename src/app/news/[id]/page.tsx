import CommentSection from "@/components/CommentSection";
import Image from "next/image";
import React from "react";

export default function SignlePagenews() {
  return (
    <div className=" h-fit pb-10 flex justify-center ">
      {/* imgpart */}
      <div className="ml-2 pr-2  pt-4 lg:ml-0 w-full xl:w-[140vh] 2xl:w-[170vh] ">
        <div className=" h-[200px] md:h-[450px] xl:h-[400px] 2xl:h-[1000px] relative">
          <Image
            src={"/john.jpg"}
            alt={""}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center mt-3 gap-2">
          <div className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] 2xl:h-[80px] 2xl:w-[80px] relative  ">
            <Image
              src={"/netflex.png"}
              alt={""}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-xs xl:text-sm 2xl:text-2xl text-gray-700">
              12 Minutes Ago
            </p>
          </div>
        </div>
        {/* textpart */}
        <div className="h-fit w-fit ">
          <h1 className="text-xl md:text-2xl xl:text-3xl 2xl:text-6xl py-5 font-semibold">
            Where to watch 'John Wick: Chapter 4'
          </h1>

          <p className="xl:text-lg lg:leading-relaxed 2xl:text-4xl 2xl:leading-normal">
            "John Wick 4," the legendary hitman, John Wick, finds himself pulled
            back into the world of assassins and intrigue once again after the
            events of the previous films. John is on the run and has become a
            target himself.' "John Wick 4," the legendary hitman, John Wick,
            finds himself pulled back into the world of assassins and intrigue
            once again after the events of the previous films. John is on the
            run and has become a target himself.' "John Wick 4," the legendary
            hitman, John Wick, finds himself pulled back into the world of
            assassins and intrigue once again after the become a target
            himself.' "John Wick 4," the legendary hitman, John Wick, finds
            himself pulled back into the world of assassins and intrigue once
            again after the events of the previous films. John is on the run and
            has become a target himself.' "John Wick 4," the legendary hitman,
            John Wick, finds himself pulled back into the world of assassins and
            intrigue once again after the become a target himself.' "John Wick
            4," the legendary hitman, John Wick, finds himself pulled back into
            the world of assassins and intrigue once again after the events of
            the previous films. John is on the run and has become a target
            himself.' "John Wick 4," the legendary hitman, John Wick, finds
            himself pulled back into the world of assassins and intrigue once
            again after the run and has become a target himself.' "John Wick 4,"
            the legendary hitman, John Wick, finds himself pulled back into the
            world of assassins and intrigue once again after the become a target
            himself.' "John Wick 4," the legendary hitman, John Wick, finds
            himself pulled back into the world of assassins and intrigue once
            again after the events of the previous films. John is on the run and
            has become a target himself.' "John Wick 4," the legendary hitman,
            John Wick, finds himself pulled back into the world of assassins and
            intrigue once again after the become a target himself.' "John Wick
            4," the legendary hitman, John Wick, finds himself pulled back into
            the world of assassins and intrigue once again after the events of
            the previous films. John is on the run and has become a target
            himself.' "John Wick 4," the legendary hitman, John Wick, finds
            himself pulled back into the world of assassins and intrigue once
            again after the
          </p>
        </div>
        <CommentSection />
      </div>
    </div>
  );
}
