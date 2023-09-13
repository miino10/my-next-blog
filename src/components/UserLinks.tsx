import Link from "next/link";
import React from "react";
import Image from "next/image";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsBell } from "react-icons/bs";
import { useSession } from "next-auth/react";

export default function UserLinks() {
  const { data, status } = useSession();
  console.log("data" + data);
  console.log("status" + status);

  return (
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
            <Link
              href={"/"}
              className="bg-red-400 p-2 2xl:p-4 text-white rounded-xl"
            >
              Logout
            </Link>
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
              status === "authenticated" ? "/creatorImg.jpg" : "/defaultImg.jpg"
            }
            alt={""}
          />
        </div>
      </div>
    </div>
  );
}
