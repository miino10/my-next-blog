import React from "react";

export default function CommentInput() {
  return (
    <div className="flex flex-col  h-fit">
      <div className="py-4">
        <h1 className="text-2xl font-semibold">Comments</h1>
      </div>
      <div className="flex items-center gap-3 ">
        <div className="py-2 w-[90vh]">
          <input
            type="text"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            placeholder="Write Comment..."
          />
        </div>

        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
