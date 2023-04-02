import React from "react";
import { BichevronDown, BiMenu, BiSearch } from "react-icons/bi";

// Small Screen Size
function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Its All Starts heere...</h3>
          <span className="text-gray-400 text-xs flex item-center cursor-pointer hover:text-white">
            Bangalore
          </span>
        </div>
        <div className="w-8 h-8">
          <button>Use App</button>
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

// Medium Screen Size
function NavMd() {
  return (
    <>
      <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearch />
        <input
          type="search"
          className="w-full bg-transparent border-none focus:outline-none"
        />
      </div>
    </>
  );
}

// Large Screen Size
function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img src="" alt="logo" className="w-full h-full" />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies,events,plays,sports and activities"
            />
          </div>
        </div>
      </div>
    </>
  );
}
// Main Component
const Navbar = () => {
  return <div>Navbar</div>;
};

export default Navbar;
