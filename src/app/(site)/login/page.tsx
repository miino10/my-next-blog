import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";

export default function login() {
  return (
    <div className="flex flex-col items-center py-2">
      {/* conti with google and facebook */}
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-xl md:text-2xl font-semibold">Sign in with</h1>
        <div className="">
          <button className=" w-[200px] py-2  md:w-[500px] h-[50px] bg-green-100 md:py-5 flex justify-center items-center">
            <FcGoogle className="text-3xl" />
          </button>
        </div>

        <div className="   ">
          <button className="bg-blue-200 w-[200px] py-2   md:w-[500px] md:h-[50px] md:py-5 flex items-center justify-center">
            <ImFacebook className="text-3xl text-blue-600" />
          </button>
        </div>

        <h1 className="text-xl md:text-2xl font-semibold">Or</h1>
      </div>
      <div className="flex flex-col gap-6 items-center  w-[76vh]">
        <div className="">
          <label htmlFor="" className="text-xl">
            Email
          </label>
          <div className="">
            {" "}
            <input
              type="text"
              name=""
              className="    md:w-[500px] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-xl">
            Password
          </label>
          <div>
            {" "}
            <input
              className="   md:w-[500px] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="password"
            />
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-indigo-400 p-3 rounded-lg md:w-[20%] text-white text-xl ">
              Login
            </button>
          </div>
        </div>
        {/* login with your email */}
      </div>
    </div>
  );
}
