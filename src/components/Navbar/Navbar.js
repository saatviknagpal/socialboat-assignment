import React from "react";
import Search from "../Search/Search";

export default function Navbar({ setResult }) {
  return (
    <>
      <div className="flex w-full justify-between shadow-xl items-center gap-1">
        <img
          src="https://blog.socialboat.live/content/images/2021/08/seoimg.png"
          alt=""
          className="md:w-48 ml-2 w-32"
        />
        <Search setResult={setResult} />
        <img
          src="https://avatars.githubusercontent.com/u/61618767?v=4"
          alt=""
          className="w-10 rounded-full h-10 mr-3"
        />
      </div>
    </>
  );
}
