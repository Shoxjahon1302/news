import React from "react";

export default function IconPage() {
  return (
    <div className="p-10">
      <div className="w-[1440px] m-auto">
        <div className="flex border-b-2 w-[50%] h-[50px] m-auto items-center justify-center">
          <div className="flex flex-col text-center px-6 border-r-2 hover:text-red-600 duration-200">
            <i className="text-slate-400 fa-solid fa-fire"></i>
            <h4 className="pt-1 text-slate-400 py-3">Olovli Yangiliklar</h4>
          </div>
          <div className="flex flex-col text-center px-6 border-r-2 hover:text-red-600 duration-200">
            <i className="text-slate-400 fa-solid fa-heart"></i>
            <h4 className="pt-1 text-slate-400 py-3">Eng mashhur</h4>
          </div>
          <div className="flex flex-col text-center px-6 border-r-2 hover:text-red-600 duration-200">
            <i className="text-slate-400 fa-solid fa-bolt"></i>
            <h4 className="pt-1 text-slate-400 py-3">Trend yangiliklar</h4>
          </div>
          <div className="flex flex-col text-center px-6 hover:text-red-600 duration-200">
            <i className="text-slate-400 fa-solid fa-eye"></i>
            <h4 className="pt-1 text-slate-400 py-3">
              Eng ko‘p tomosha qilingan
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
