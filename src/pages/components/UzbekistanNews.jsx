import React from "react";
import { data } from "./data";
import SportPages from "./SportPages";

export default function UzbekistanNews() {
  return (
    <div className="">
      <div className="w-[1280px] m-auto">
        <div className="flex items-center justify-between gap-5 mt-10">
          <div className="flex justify-between w-1/2 border-b-4">
            <h3 className="bg-red-600 text-white px-7 rounded-t-lg text-[20px] py-3">
              Iqtisodiyot
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
              Jamiyat
            </h3>
            <div className="flex items-center gap-2">
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
              <div className="bg-slate-400 rounded-full w-5 h-5"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[800px] flex-wrap pt-8">
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
                    <h4 className="text-[17px] font-['Inter']">{item.date}</h4>
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
  );
}
