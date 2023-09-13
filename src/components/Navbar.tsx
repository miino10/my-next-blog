"use client";
import { BsBell } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { HiOutlinePencilAlt } from "react-icons/hi";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const { data, status } = useSession();
  console.log("status: " + status);
  console.log("data: " + data);

  return (
    <>
      <div className="  w-[120%]  flex justify-between items-center md:hidden h-full">
        <div className="w-32 h-32 relative ml-5">
          <Image src={"/logo.png"} alt={"logo"} fill className="object-cover" />
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
            <Link href={"/"}>Creators</Link>
            <Link href={"/"}>Community</Link>
            <Link href={"/"}>Subscribe</Link>
          </div>
        )}
      </div>
      <div className="  w-full py-3 md:flex md:justify-between  hidden">
        <div className="flex gap-5 text-lg items-center font-normal">
          <Link href={"/"}>
            <div className="w-36 h-20 relative right-4 2xl:h-[200px] 2xl:w-[200px]">
              <Image src={"/logo.png"} alt={"logo"} fill />
            </div>
          </Link>
          <div className="flex items-center  gap-4 2xl:text-4xl ">
            <Link href={"/"}>Stories</Link>
            <Link href={"/"}>Creator</Link>

            {status === "authenticated" ? (
              <button
                className="bg-red-400 p-2 2xl:p-4 text-white rounded-xl"
                onClick={() => signOut()}
              >
                {" "}
                Logout
              </button>
            ) : (
              <>
                <Link href={"/login"} className="bg-yellow-200 p-2  rounded-xl">
                  Login
                </Link>
                <Link href={"/signup"} className="bg-green-200 p-2  rounded-xl">
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          {/* icon */}
          {status === "authenticated" && (
            <>
              <div className="flex items-center gap-2 2xl:text-3xl">
                <HiOutlinePencilAlt />
                <Link href={"/post"}>Write</Link>
              </div>
              {/* icon */}
              <BsBell className="2xl:text-3xl xl:text-2xl" />
            </>
          )}
          <div className="w-10 h-10  relative xl:w-[55px] xl:h-[55px]  2xl:w-[100px] 2xl:h-[100px] ">
            <Image
              className="rounded-full border border-gray-400 object-cover  "
              fill
              src={
                status === "authenticated" &&
                typeof data.user?.image === "string"
                  ? data.user?.image
                  : "/defaultImg.jpg"
              }
              alt={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};
