import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../image/f_1oQusgim0zYmhCw665qVfAv6TMLd32 1.png";
import img2 from "../image/f_99KOZE3ZLms4Xd46Y2aqgtmBnHn463 1.png";
import img3 from "../image/f_Jqdqsn4AIDkSUre6p58y9skq2YiwYU 1.png";
import img4 from "../image/f_M9UAPjPvktcfJ4ehxc9nfvzvgMIbl5 1.png";
import img5 from "../image/f_WhrFQyeedscPdBm2hicgZ4nXW74dB1 (1) 1.png";
import img6 from "../image/f_dGwgzpR0SkIeT7mEJ5JQF1hAX0LaAI 1.png";
import img7 from "../image/f_iDJGAHZ0MgNMquiqVrQU3fbnDjja70 1.png";
import img8 from "../image/f_knoxuoAjWGpdbek2TOjiu3EjY5AqMU 1.png";

export default function VedioPages() {
  return (
    <div>
      <div className="w-[1280px] m-auto">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img1} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img2} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img3} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img4} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img5} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img6} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img7} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col card">
              <i className="text-[30px] text-white absolute hidden cursor-pointer duration-200 hover:text-red-600 icon left-[45%] top-[25%] fa-regular fa-circle-play"></i>
              <img className="rounded" src={img8} alt="" />
              <div className="">
                <h4 className="text-[23px] font-['Inter'] font-medium w-[305px] pt-[10px]">
                  Dunyodagi eng qimmat muzqaymoq Ginnes rekordlar...
                </h4>
                <div className="flex items-center gap-5 mt-[10px]">
                  <div className="flex items-center border-r-2">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-calendar"></i>
                    <h4 className="text-[17px] px-3">20 May, 2022</h4>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-regular bg-slate-200 text-red-600 p-2 text-[20px] rounded fa-eye"></i>
                    <h4 className="text-[17px] px-2">12658</h4>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
