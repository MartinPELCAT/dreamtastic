import BellIcon from "icons/BellIcon";
import React from "react";

export default function Connected() {
  return (
    <div className="flex space-x-2">
      <div
        role="button"
        className="my-auto bg-gray-200 bg-opacity-25 p-2 rounded-full hover:bg-opacity-50"
      >
        <BellIcon />
      </div>
      <div role="button" className="my-auto rounded-full">
        <div className="w-10 h-10 bg-gray-200 bg-opacity-50 rounded-full"></div>
      </div>
    </div>
  );
}
