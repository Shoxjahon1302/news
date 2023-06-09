import React from "react";
import ShavkatAka from "../image/f_T6rbcAFGKFsv5GqMX2OSpAJqi9ALeC 1.png";
import billGeyts from "../image/f_vnDWWcWT23pESGyj2qa4TLvxD6qRaB 1.png";
export default function Maps() {
  return (
    <div className="w-full">
      <div className="w-[1280px] m-auto flex gap-5">
        <div className="relative mt-10">
          <img src={ShavkatAka} alt="" />
          <div className="">
            <button className="top-5 left-5 p-1 rounded absolute bg-red-600 text-white">
              Jamiyat
            </button>
            <button className="top-5 absolute left-[91%] bg-red-600 text-white px-3 py-1 rounded">
              <i className="fa-solid fa-bolt-lightning"></i>
            </button>
            <div className="flex flex-col">
              <h4 className="absolute px-10 py-1 bottom-10 text-white text-[32px] font-['Inter'] w-[100%] mix-blend-hard-light bg-[#333]">
                Mirziyoyev 5 nafar urush qatnashchisini ko‘rishga bordi
              </h4>
              <div className="w-[100%] mix-blend-hard-light bg-[#333] flex absolute bottom-0 py-2 px-10">
                <div className="border-r-2 flex items-center gap-2">
                  <i className="text-red-400 bg-white p-1 rounded fa-regular fa-calendar"></i>
                  <h5 className="mr-3 text-white">18 May, 2022</h5>
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <i className="text-red-400 bg-white p-1 rounded fa-solid fa-eye"></i>
                  <h5 className="text-white">12658</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-10">
          <img src={billGeyts} alt="" />
          <div className="">
            <button className="top-5 left-5 p-1 rounded absolute bg-red-600 text-white">
              Jamiyat
            </button>
            <button className="top-5 absolute left-[91%] bg-red-600 text-white px-3 py-1 rounded">
              <i className="fa-solid fa-bolt-lightning"></i>
            </button>
            <div className="flex flex-col">
              <h4 className="absolute px-10 py-1 bottom-10 text-white text-[32px] font-['Inter'] w-[100%] mix-blend-hard-light bg-[#333]">
                Mirziyoyev 5 nafar urush qatnashchisini ko‘rishga bordi
              </h4>
              <div className="w-[100%] mix-blend-hard-light bg-[#333] flex absolute bottom-0 py-2 px-10">
                <div className="border-r-2 flex items-center gap-2">
                  <i className="text-red-400 bg-white p-1 rounded fa-regular fa-calendar"></i>
                  <h5 className="mr-3 text-white">18 May, 2022</h5>
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <i className="text-red-400 bg-white p-1 rounded fa-solid fa-eye"></i>
                  <h5 className="text-white">12658</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
