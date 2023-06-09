import React from "react";

export default function TopOfFooter() {
  return (
    <div>
      <div className="w-[1280px] m-auto">
        <div className="flex items-center justify-center flex-col mt-10">
          <button className="bg-red-600 text-white rounded p-2">
            <i className="fa-solid fa-rotate-left"></i> Ko‘proq yangilik
          </button>
          <div className="rounded bg-slate-200 p-[40px_94px] m-10">
            <p className="w-[382px] text-center font-['Inter'] font-medium">
              Eng so'nggi yangiliklar, mashhur yangiliklar va eksklyuziv
              yangiliklarni olish uchun bizning axborot byulletenimizga obuna
              bo'ling.
            </p>
            <div className="flex items-center justify-center m-4">
              <input type="text" className="outline-none p-3 rounded-l-lg" />
              <button className="rounded-r-lg bg-red-600 text-white text-[20px] p-2.5">
                Yuborish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
