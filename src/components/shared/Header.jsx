import React from "react";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center">
      <div className="relative">
        <CiSearch fontSize={28} className="text-gray-400 absolute mt-2 pl-3" />

        <input
          type="text"
          placeholder="Searchs here.."
          className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-lg pl-10 px-4"
        />
      </div>
      <div>Menus</div>
    </div>
  );
};
