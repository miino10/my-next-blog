import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function AlertForComment() {
  const [toggleAlert, setTogGleAlert] = useState(true);
  const handleAlertToggle = () => {
    setTogGleAlert(!toggleAlert);
  };

  useEffect(() => {
   
    
  }, []);
  return (
    <>
      {toggleAlert && (
        <div className="bg-red-400  md:w-[80vh]  lg:w-[60vh] lg:h-[10vh] flex items-center justify-between rounded-lg">
          <p className=" p-4 text-white ">Sign up if you went to comment</p>
          <button className="" onClick={handleAlertToggle}>
            <IoCloseOutline className="  text-4xl  cursor-pointer" />
          </button>
        </div>
      )}
    </>
  );
}
