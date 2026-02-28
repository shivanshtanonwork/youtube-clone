import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-4   m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8" src="/hamburger.svg" alt="menu" />
        <img className="h-8" src="/youtube-logo.svg" alt="YouTube logo" />
      </div>
      <div className="col-span-10">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src="/user-icon.svg" alt="user_icon" />
      </div>
    </div>
  );
};

export default Head;
