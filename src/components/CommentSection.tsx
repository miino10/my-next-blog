"use client";
import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import Image from "next/image";

export default function CommentSection() {
  const [love, setLove] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);
  const handleComment = () => {
    setCommentToggle(!commentToggle);
  };
  const handleLove = () => {
    setLove(!love);
  };
  const loveNumber = 1;

  return (
    <div className=" h-fit flex flex-col   ">
      <div className="flex justify-center items-center  gap-4 w-fit h-fit pb-12  py-6 ">
        <div className="flex items-center">
          <button onClick={handleLove}>
            {love ? (
              <BsHeartFill className="text-3xl text-red-600" />
            ) : (
              <BsHeart className="text-3xl " />
            )}
          </button>
          <div className="relative flex justify-center top-4 right-4">
            {" "}
            <p className="absolute ">{love === true ? loveNumber : ""}</p>
          </div>
        </div>
        <div>
          <AiOutlineEye className="text-3xl" />
          <p className="absolute ">256</p>
        </div>
        <button onClick={handleComment}>
          <BiComment className="text-3xl" />
        </button>
      </div>
      <div className=" bg-green-300 ">
        {/* {commentToggle && (
          
           
         
        )} */}
      </div>
    </div>
  );
}
