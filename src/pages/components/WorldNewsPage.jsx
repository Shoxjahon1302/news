import React from "react";
import image from "../image/f_UG0vfQeNAbvAO6wlpJF7If8Wa4Hl8q 1 (1).png";
import { data } from "./data";
export default function WorldNewsPage() {
  return (
    <div>
      <div className="w-[1280px] m-auto">
        <div className="border-b-4 border-red-600 w-full  flex items-center justify-between">
          <h1 className="bg-red-600 text-white rounded-t-lg text-[30px] font-['Inter'] px-5 py-3">
            Dunyo yangiliklari
          </h1>
          <div className="flex items-center gap-2">
            <i className="fa-solid bg-red-600 text-white p-3 rounded-full cursor-pointer fa-arrow-left"></i>
            <i className="fa-solid bg-red-600 text-white p-3 rounded-full cursor-pointer fa-arrow-right"></i>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div className="flex flex-col w-[750px] ">
            <div className="relative">
              <img className="w-full" src={image} alt="" />
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
                  AQSHda 230 mingdan ortiq davlat xizmatchisining shaxsiy
                  ma’lumotla...
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
            <div className="flex flex-col">
              <p className="w-[630px] pt-[20px] pb-[10px] font-['Inter'] font-normal">
                Amerika Qo‘shma Shtatlarida 237 ming amaldagi va sobiq federal
                hukumat xodimlarining shaxsiy ma’lumotlari internetga sizib
                chiqdi, holat mamlakat transport departamentida sodir bo‘ldi. Bu
                haqda “Reuters” xabar berdi.
              </p>
              <p className="w-[630px] pb-[20px] font-['Inter'] font-normal">
                Ma’lum qilinishicha, hodisa imtiyozlarni qayta ishlash va
                ishchilarga sayohat xarajatlarining bir qismini qoplash uchun
                mo‘ljallangan TRANServe tizimining xavfsizligi buzilishi tufayli
                yuz bergan. Ma’lumotlar jinoiy maqsadlarda ishlatilganmi yoki
                yo‘qmi noma’lum. Voqea ortida kim turgani ham aytilmagan.
                Departament tekshiruv boshlagan, xavfsizlik tiklanmaguncha
                tizimga kirish muzlatilgan.
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center border-r-4 gap-2">
                <i className="text-red-600 bg-slate-200 p-2 rounded  fa-regular fa-calendar"></i>
                <h5 className="px-2">20 May, 2022</h5>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <i className="text-red-600 bg-slate-200 p-2 rounded fa-regular fa-eye"></i>
                <h5 className="px-2">12658</h5>
              </div>
            </div>
          </div>
          <div className="h-[618px] overflow-hidden">
            {data.map((item) => (
              <div className="mb-3 w-[500px] flex">
                <div className="">
                  <img className="w-[221px] rounded" src={item.image} alt="" />
                </div>
                <div className="ml-5">
                  <h3 className="w-[261px]  text-[20px] font-medium font-['Inter']">
                    {item.title}
                  </h3>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center border-r-4">
                      <i className="fa-regular text-red-400 bg-slate-200 p-2 rounded fa-calendar"></i>
                      <h4 className="px-2">{item.date}</h4>
                    </div>
                    <div className="px-2 gap-2 flex items-center">
                      <i className="fa-regular text-red-400 bg-slate-200 p-2 rounded fa-eye"></i>
                      <h4 className="">{item.zretiley}</h4>
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
