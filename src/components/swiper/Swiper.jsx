/** @format */

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function SwiperComponent() {
  return (
    <div className="grid grid-cols-1">
      <div className="w-[300px] h-[150px] m-auto flex flex-row">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          direction={"vertical"}
          //   breakpoints={{
          //     768: { enabled: false, slidesPerView: 4 },
          //   }}
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center md:!h-auto md:visible md:block">
              <div className="w-full md:pl-6 pb-5 md:pb-[70px] pr-3">
                <p className="text-[#0f0f0f] w-full border-b border-black pl-2">
                  Lackierung
                </p>
                <div className="mt-3">
                  <ul className="w-full flex items-center justify-between md:grid md:grid-cols-3 gap-3 md:gap-6 xl:gap-x-[50px] gap-y-2.5 overflow-auto">
                    <li
                      className={`max-w-[60px] w-full mx-auto text-center hover:cursor-pointer`}
                    >
                      <span
                        className={`w-[60px] h-[60px] bg-white shadow-box rounded-[10px] flex justify-center items-center ${`border-2 border-[#71AD77]`}`}
                      >
                        <span
                          className={`w-10 h-10  rounded-full inline-block`}
                        ></span>
                      </span>
                      <span className="text-sm leading-4 text-dark-d32 text-center inline-block pt-1">
                        Content
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center md:!h-auto md:visible md:block">
              <div className="w-full md:pl-6 pb-5 md:pb-[70px] pr-3">
                <p className="text-[#0f0f0f] w-full border-b border-black pl-2">
                  Lackierung
                </p>
                <div className="mt-3">
                  <ul className="w-full flex items-center justify-between md:grid md:grid-cols-3 gap-3 md:gap-6 xl:gap-x-[50px] gap-y-2.5 overflow-auto">
                    <li
                      className={`max-w-[60px] w-full mx-auto text-center hover:cursor-pointer`}
                    >
                      <span
                        className={`w-[60px] h-[60px] bg-white shadow-box rounded-[10px] flex justify-center items-center ${`border-2 border-[#71AD77]`}`}
                      >
                        <span
                          className={`w-10 h-10  rounded-full inline-block`}
                        ></span>
                      </span>
                      <span className="text-sm leading-4 text-dark-d32 text-center inline-block pt-1">
                        Content
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center md:!h-auto md:visible md:block">
              <div className="w-full md:pl-6 pb-5 md:pb-[70px] pr-3">
                <p className="text-[#0f0f0f] w-full border-b border-black pl-2">
                  Lackierung
                </p>
                <div className="mt-3">
                  <ul className="w-full flex items-center justify-between md:grid md:grid-cols-3 gap-3 md:gap-6 xl:gap-x-[50px] gap-y-2.5 overflow-auto">
                    <li
                      className={`max-w-[60px] w-full mx-auto text-center hover:cursor-pointer`}
                    >
                      <span
                        className={`w-[60px] h-[60px] bg-white shadow-box rounded-[10px] flex justify-center items-center ${`border-2 border-[#71AD77]`}`}
                      >
                        <span
                          className={`w-10 h-10  rounded-full inline-block`}
                        ></span>
                      </span>
                      <span className="text-sm leading-4 text-dark-d32 text-center inline-block pt-1">
                        Content
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center md:!h-auto md:visible md:block">
              <div className="w-full md:pl-6 pb-5 md:pb-[70px] pr-3">
                <p className="text-[#0f0f0f] w-full border-b border-black pl-2">
                  Lackierung
                </p>
                <div className="mt-3">
                  <ul className="w-full flex items-center justify-between md:grid md:grid-cols-3 gap-3 md:gap-6 xl:gap-x-[50px] gap-y-2.5 overflow-auto">
                    <li
                      className={`max-w-[60px] w-full mx-auto text-center hover:cursor-pointer`}
                    >
                      <span
                        className={`w-[60px] h-[60px] bg-white shadow-box rounded-[10px] flex justify-center items-center ${`border-2 border-[#71AD77]`}`}
                      >
                        <span
                          className={`w-10 h-10  rounded-full inline-block`}
                        ></span>
                      </span>
                      <span className="text-sm leading-4 text-dark-d32 text-center inline-block pt-1">
                        Content
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center md:!h-auto md:visible md:block">
              <div className="w-full md:pl-6 pb-5 md:pb-[70px] pr-3">
                <p className="text-[#0f0f0f] w-full border-b border-black pl-2">
                  Lackierung
                </p>
                <div className="mt-3">
                  <ul className="w-full flex items-center justify-between md:grid md:grid-cols-3 gap-3 md:gap-6 xl:gap-x-[50px] gap-y-2.5 overflow-auto">
                    <li
                      className={`max-w-[60px] w-full mx-auto text-center hover:cursor-pointer`}
                    >
                      <span
                        className={`w-[60px] h-[60px] bg-white shadow-box rounded-[10px] flex justify-center items-center ${`border-2 border-[#71AD77]`}`}
                      >
                        <span
                          className={`w-10 h-10  rounded-full inline-block`}
                        ></span>
                      </span>
                      <span className="text-sm leading-4 text-dark-d32 text-center inline-block pt-1">
                        Content
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
