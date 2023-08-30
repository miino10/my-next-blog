"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="   flex justify-between items-center md:hidden h-full">
        <div className="w-32 h-20 relative">
          <Image src={"/logo.png"} alt={"logo"} fill />
        </div>
        {toggle ? (
          <>
            <div className="text-2xl">
              <button onClick={handleToggle}>
                <RxCross1 />
              </button>
            </div>
          </>
        ) : (
          <div className="text-2xl">
            <button onClick={handleToggle}>
              <CiMenuBurger />
            </button>
          </div>
        )}
        {toggle && (
          <div
            className="  flex flex-col items-center h-[120vh]  w-full bg-green-300 text-4xl gap-10 pt-16 absolute top-20
            "
          >
            <Link href={"/"}>Stories</Link>
            <Link href={"/"}>Creator</Link>
            <Link href={"/"}>Community</Link>
            <Link href={"/"}>Subscribe</Link>
          </div>
        )}
      </div>
      <div className="  w-full py-3 md:flex md:justify-between  hidden">
        <div className="flex gap-5 text-lg items-center font-normal">
          <div className="w-36 h-20 relative right-4">
            <Image src={"/logo.png"} alt={"logo"} fill />
          </div>
          <Link href={"/"}>Stories</Link>
          <Link href={"/"}>Creator</Link>
          <Link href={"/"}>Community</Link>
          <Link href={"/"}>Subscribe</Link>
        </div>
        <div className="flex justify-center items-center gap-8">
          {/* icon */}
          <div className="flex items-center gap-2">
            <HiOutlinePencilAlt />
            <Link href={""}>Write</Link>
          </div>
          {/* icon */}
          <BsBell />
          <div className="w-10 h-10  relative ">
            <Image
              className="rounded-full"
              fill
              src={"/profile.jpg"}
              alt={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};
