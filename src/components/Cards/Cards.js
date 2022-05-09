import React from "react";
import ReactPlayer from "react-player";

export default function Cards({ result }) {
  return (
    <>
      <div className="flex justify-center gap-10 items-center mt-5 flex-wrap mb-5">
        {result.map((item) => (
          <>
            <div className="flex flex-col rounded-lg border border-gray-200 shadow-lg p-5 md:w-96 w-[21rem] break-words space-y-2 h-full">
              <div className="flex justify-center items-center">
                <ReactPlayer
                  controls
                  url={item.video}
                  width={310}
                  height={200}
                />
              </div>
              <h1 className="text-xl font-bold">{item.heading}</h1>
              <div className="flex gap-1">
                <h1 className="text-lg font-semibold mt-1">Tags:</h1>
                {item.tags.map((tagItem) => (
                  <>
                    <p className=" bg-red-500 rounded-md text-white md:p-2 p-1 text-sm ">
                      {tagItem}
                    </p>
                  </>
                ))}
              </div>
              <p className="mt-3 text-md">{item.text}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
