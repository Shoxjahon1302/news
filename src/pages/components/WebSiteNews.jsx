import React from "react";
import GlobalQudrat from "../image/m_tfkh75dn3xnifoymsnuXlyRN21f0r3 1.png";
import ShavkatAka from "../image/Mask group.png";
import XitoyVaziri from "../image/Mask group (1).png";
import Bomba from "../image/m_9NmnV1Lw7JHZEvcQLBjDPnTZEMBm6P 1.png";
export default function WebSiteNews() {
  return (
    <div className="">
      <div className="w-[1280px] m-auto">
        <div className="flex justify-between">
          <div className="relative">
            <img className="" src={GlobalQudrat} alt="" />
            <div className="">
              <button className="absolute top-5 bg-red-600 text-white p-1 rounded left-5">
                Siyosat
              </button>
              <button className="absolute top-5 right-5 bg-red-600 text-white px-3 py-1.5 rounded">
                <i className="fa-solid fa-bolt"></i>
              </button>
            </div>
            <div className="flex flex-col">
              <h4 className="absolute px-10 py-1 bottom-10 text-white text-[32px] font-['Inter'] w-[100%] mix-blend-hard-light bg-[#333]">
                9 May Rossiya uchun global qudratini qumsash bayrami – Rabbimov
              </h4>
              <div className="w-full mix-blend-hard-light bg-[#333] flex absolute bottom-0 py-2 px-10">
                <div className="border-r-2 flex items-center gap-2">
                  <i className="text-red-400 bg-white p-1 rounded fa-regular fa-calendar"></i>
                  <h5 className="mr-3 text-white">20 May, 2022</h5>
                </div>
                <div className="flex items-center gap-2 ml-3">
                  <i className="text-red-400 bg-white p-1 rounded fa-solid fa-eye"></i>
                  <h5 className="text-white">12658</h5>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col space-y-5">
            <div className="relative">
              <img src={ShavkatAka} alt="" />
              <div className="">
                <button className="top-5 left-5 p-1 rounded absolute bg-red-600 text-white">
                  Jamiyat
                </button>
                <button className="top-5 absolute right-5 bg-red-600 text-white px-3 py-1 rounded">
                  <i className="fa-solid fa-bolt-lightning"></i>
                </button>
                <div className="flex flex-col">
                  <h4 className="absolute px-10 py-1 bottom-10 text-white text-[32px] font-['Inter'] w-[100%] mix-blend-hard-light bg-[#333]">
                    Mirziyoyev 5 nafar urush qatnashchisini ko‘rishga bordi
                  </h4>
                  <div className="w-full mix-blend-hard-light bg-[#333] flex absolute bottom-0 py-2 px-10">
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
            <div className="flex justify-end gap-4">
              <div className="relative">
                <img src={XitoyVaziri} alt="" />
                <div className="">
                  <button className="top-5 left-5 p-1 rounded absolute bg-red-600 text-white">
                    Jamiyat
                  </button>
                  <button className="top-5 absolute right-5 bg-red-600 text-white px-3 py-1 rounded">
                    <i className="fa-solid fa-eye"></i>
                  </button>
                  <div className="flex flex-col">
                    <h4 className="absolute px-6 py-1 bottom-10 text-white text-[20px] font-['Inter'] w-[100%] mix-blend-hard-light bg-[#333]">
                      Pekin AQSHning Xitoy-Yevropa munosabatlariga...
                    </h4>
                    <div className="w-full mix-blend-hard-light bg-[#333] flex absolute bottom-0 py-2 px-6">
                      <div className="flex items-center gap-2">
                        <i className="text-red-400 bg-white p-1 rounded fa-regular fa-calendar"></i>
                        <h5 className="mr-3 text-white">18 May, 2022</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img src={Bomba} alt="" />
                <div className="">
                  <button className="top-5 left-5 p-1 rounded absolute bg-red-600 text-white">
                    Jamiyat
                  </button>
                  <button className="top-5 absolute right-5 bg-red-600 text-white px-3 py-1.5 rounded">
                    <i className="fa-solid fa-heart"></i>
                  </button>
                  <div className="flex flex-col">
                    <h4 className="absolute px-6 py-1 bottom-10 text-white text-[20px] font-['Inter'] w-[100%] mix-blend-hard-light bg-[#333]">
                      Falastin guruhlari G‘azoga qilingan hujumlar uchun...
                    </h4>
                    <div className="w-full mix-blend-hard-light bg-[#333] flex absolute bottom-0 py-2 px-6">
                      <div className="flex items-center gap-2">
                        <i className="text-red-400 bg-white p-1 rounded fa-regular fa-calendar"></i>
                        <h5 className="mr-3 text-white">18 May, 2022</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
