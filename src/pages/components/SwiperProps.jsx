import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../components/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="flex flex-wrap gap-5">
          {data.map((item) => (
            <div className="w-[305px] h-[299px]">
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  <i className="fa-regular fa-calendar"></i>
                  <h5 className="border-r-2 px-2">{item.date}</h5>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <i className="fa-solid fa-eye"></i>
                  <h5>{item.zretiley}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
