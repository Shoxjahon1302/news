import React from "react";

export default function SportPages() {
  return (
    <div className="w-full">
      <div className="w-[1280px] m-auto">
        <div className="flex items-center justify-between gap-5">
          <div className="flex justify-between w-1/2 border-b-4">
            <h3 className="bg-red-600 text-white px-7 rounded-t-lg text-[20px] py-3">
              Sport
            </h3>
            <div className="flex items-center gap-2">
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
            </div>
          </div>
          <div className="flex border-b-4 justify-between w-1/2">
            <h3 className="bg-red-600 text-white px-7 rounded-t-lg text-[20px] py-3">
              Texnologiya
            </h3>
            <div className="flex items-center gap-2">
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
