import React from "react";
import strelkaPastga from "../image/Frame (2).png";
import strelkaTepaga from "../image/Frame (1).png";
import logo from "../image/Frame.png";

export default function Header() {
  return (
    <div className="bg-[#1D1D1D] w-full">
      <div className="w-[1440px] m-auto">
        <div className="flex items-center justify-between p-[11px_12px]">
          <div className="flex items-center gap-[23.44px]">
            <div className="flex items-center gap-1">
              <img src={logo} alt="" />
              <h4 className="text-white">21 C</h4>
              <select name="" id="" className="">
                <option className="" value="">
                  Toshkent
                </option>
                <option className="" value="">
                  Andijon
                </option>
              </select>
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-white">USD</h4>
              <h4 className="text-[#1DB954]">11 424.06</h4>
              <img src={strelkaTepaga} alt="" />
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-white">EUR</h4>
              <h4 className="text-[#1DB954]">11 424.06</h4>
              <img src={strelkaPastga} alt="" />
            </div>
            <div className="flex items-center gap-1">
              <h4 className="text-white">RUB</h4>
              <h4 className="text-[#1DB954]">11 424.06</h4>
              <img src={strelkaTepaga} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <h4 className="text-white text-[12px] font-['Inter'] font-medium cursor-pointer hover:text-red-600 duration-200">
              Aloqa
            </h4>
            <h4 className="text-white text-[12px] font-['Inter'] font-medium cursor-pointer hover:text-red-600 duration-200">
              Reklama
            </h4>
            <i className="text-white hover:text-red-600 cursor-pointer duration-200 fa-regular fa-paper-plane"></i>
            <i className="text-white hover:text-red-600 cursor-pointer duration-200 fa-brands fa-twitter"></i>
            <i className="text-white hover:text-red-600 cursor-pointer duration-200 fa-brands fa-instagram"></i>
            <i className="text-white hover:text-red-600 cursor-pointer duration-200 fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
