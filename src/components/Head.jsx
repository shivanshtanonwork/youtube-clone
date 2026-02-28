import React from "react";

const Head = () => {
  return (
    <header className="sticky top-0 z-10 grid grid-cols-12 items-center gap-3 border-b border-gray-200 bg-white px-4 py-3">
      <div className="col-span-3 flex items-center gap-4 md:col-span-2">
        <img
          className="h-5 w-5 cursor-pointer"
          src="/hamburger.svg"
          alt="menu"
        />
        <img
          className="h-6 w-auto cursor-pointer"
          src="/youtube-logo.svg"
          alt="YouTube logo"
        />
      </div>

      <div className="col-span-7 flex items-center justify-center md:col-span-8">
        <input
          className="w-full max-w-xl rounded-l-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-blue-500"
          type="text"
          placeholder="Search"
        />
        <button className="rounded-r-full border border-l-0 border-gray-300 bg-gray-50 px-5 py-2 text-sm">
          🔍
        </button>
      </div>

      <div className="col-span-2 flex justify-end">
        <img
          className="h-8 w-8 cursor-pointer rounded-full"
          src="/user-icon.svg"
          alt="user_icon"
        />
      </div>
    </header>
  );
};

export default Head;
