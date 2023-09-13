"use client";

import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { NextResponse } from "next/server";
import React, { FormEvent, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const response = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });
      console.log("Signup success", response.data);

      if (response.data) {
        if (formRef.current) {
          setError("");
          setName("");
          setEmail("");
          setPassword("");
        }
      } else {
        console.log("Failed  to register", error);
      }
    } catch (error: any) {
      console.error("faileddd to register", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };

  const handleVisiblity = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 h-fit mb-9">
      {/* conti with google and facebook */}
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-xl md:text-2xl font-semibold">Sign up with</h1>
        <div className="">
          <button className=" w-[300px]  py-2  md:w-[500px] h-[50px] bg-green-100 md:py-5 flex justify-center items-center">
            <FcGoogle className="text-3xl" />
          </button>
        </div>

        <div className="   ">
          <button className="bg-blue-200 w-[300px] py-2   md:w-[500px] md:h-[50px] md:py-5 flex items-center justify-center">
            <ImFacebook className="text-3xl text-blue-600" />
          </button>
        </div>

        <h1 className="text-xl md:text-2xl font-semibold">Or</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col gap-6 items-center  w-[76vh]"
      >
        <div className="">
          <label htmlFor="" className="text-xl ">
            Name
          </label>
          <div className="">
            {" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-[300px]    md:w-[500px] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="" className="text-xl ">
            Email
          </label>
          <div className="">
            {" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-[300px]    md:w-[500px] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="text-xl">
            Password
          </label>
          <div className="flex items-center relative">
            {" "}
            <input
              className="mt-2 w-[300px]   md:w-[500px] bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <button className="flex items-center" onClick={handleVisiblity}>
                <MdVisibility className="absolute right-1 " />
              </button>
            ) : (
              <button className="flex items-center" onClick={handleVisiblity}>
                <MdVisibilityOff className="absolute right-1 " />
              </button>
            )}
          </div>
          {error && (
            <div className="bg-red-500 w-fit px-4 py-3  mt-2 rounded-md ">
              <p className="text-white">{error}</p>
            </div>
          )}
          <div className="flex items-center justify-end mt-3">
            <p>
              Do you have an account?
              <Link href={"/login"} className="underline font-semibold">
                Login
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center mt-5 ">
            <button
              className="bg-purple-500 p-3 rounded-lg md:w-[20%] text-white text-xl  "
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
