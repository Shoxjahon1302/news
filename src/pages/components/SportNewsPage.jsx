import React from "react";
import { data } from "./data";

export default function SportNewsPage() {
  return (
    <div>
      <div className="w-[1280px] m-auto">
        <div className="flex mt-10 items-center justify-between">
          <div className="flex flex-col w-full h-[800px] flex-wrap">
            {data.map((item) => (
              <div className="flex mb-10">
                <div className="">
                  <img className="w-[211px] rounded" src={item.image} alt="" />
                </div>
                <div className="flex flex-col">
                  <h1 className="ml-4 text-[26px] font-medium font-['Inter'] w-[373px]">
                    {item.title}
                  </h1>
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-2 px-4 items-center border-r-4">
                      <i className="fa-regular text-red-600 p-1 text-[20px] rounded bg-slate-300 fa-calendar"></i>
                      <h4 className="text-[17px] font-['Inter']">
                        {item.date}
                      </h4>
                    </div>
                    <div className="flex gap-2 px-3 items-center">
                      <i className="fa-regular text-red-600 p-1 text-[20px] rounded bg-slate-300 fa-eye"></i>
                      <h4 className="text-[17px] font-['Inter']">
                        {item.zretiley}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
