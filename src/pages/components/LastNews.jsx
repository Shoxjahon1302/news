import React from "react";
import SwiperProps from "./SwiperProps";
export default function LastNews() {
  return (
    <div className="">
      <div className="w-[1280px] m-auto">
        <div className="flex items-center justify-between border-b-2 my-24">
          <h4 className="py-4 bg-red-600 px-3 text-white rounded-t-lg text-[24px] font-medium font-['Inter]">
            So'ngi yangiliklar
          </h4>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-arrow-left bg-red-700 text-white px-2 py-2 rounded-full flex items-center justify-center cursor-pointer"></i>
            <i className="fa-solid fa-arrow-right bg-red-700 text-white px-2 py-2 rounded-full flex items-center justify-center cursor-pointer"></i>
          </div>
        </div>
        <div className="flex-wrap overflow-hidden">
          <SwiperProps />
        </div>
      </div>
    </div>
  );
}
