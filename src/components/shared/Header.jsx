import React from "react";

export const Header = () => {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center">
      <div>
        <input
          type="text"
          placeholder="Search here.."
          className="text-sm focus:outline-none active:outline-none"
        />
      </div>
      <div>Menus</div>
    </div>
  );
};
