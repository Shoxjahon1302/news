import React from "react";
import rasm from "../image/2oqi 1.png";

export default function HeaderBottom() {
  return (
    <div className="bg-[#E50914] w-full sticky top-0 z-40">
      <div className="w-[1350px] m-auto">
        <div className="flex items-center  justify-between">
          <div className="flex items-center gap-[20px] p-[20px]">
            <img className="mr-10" src={rasm} alt="" />
            <select name="" id="">
              <option value="">Dunyo yangiliklari</option>
            </select>
            <h4 className="text-white text-[20px] font-medium font-['Inter']">
              Iqtisodiyot
            </h4>
            <h4 className="text-white text-[20px] font-medium font-['Inter']">
              Jamiyat
            </h4>
            <h4 className="text-white text-[20px] font-medium font-['Inter']">
              Sport
            </h4>
            <h4 className="text-white text-[20px] font-medium font-['Inter']">
              Texnologiyalar
            </h4>
            <select name="" id="">
              <option value="">Viloyatlar</option>
            </select>
          </div>
          <div className="flex items-center gap-[22px]">
            <i className="text-white fa-solid fa-magnifying-glass"></i>
            <select name="" id="">
              <option value="">UZB</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
