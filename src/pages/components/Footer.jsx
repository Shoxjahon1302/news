import React from "react";
import logo from "../image/2oqi 1.png";
export default function Footer() {
  return (
    <div className="bg-[#1D1D1D] w-full">
      <div className="w-[1280px] m-auto">
        <div className="flex pb-5 items-center justify-between border-b-4">
          <div className="flex pt-[60px]">
            <div className="">
              <img src={logo} alt="" />
              <p className="w-[385px] text-white pt-[20px]">
                FIRE.news Web-Site OAV sifatida 2029 yil 26 oktyabr kuni
                Administratsiyasi huzuridagi Axborot va om maviy
                kommunikatsiyalar agentligidan raqam bilan ro‘yxatga olingan.
              </p>
              <div className="flex items-center gap-2 text-white hover:text-red-600 cursor-pointer duration-200 mt-[20px]">
                <i className="fa-solid text-xl fa-house"></i>
                <h4 className="text-xl">15 Cliff St, New York NY 10038, USA</h4>
              </div>
              <div className="flex items-center gap-2 text-white hover:text-red-600 cursor-pointer duration-200 mt-[16px]">
                <i class="fa-solid  text-xl fa-phone"></i>
                <h4 className=" text-xl">+91 234 567 8765</h4>
              </div>
              <div className="flex items-center gap-2 text-white hover:text-red-600 cursor-pointer duration-200 mt-[16px]">
                <i className="fa-regular text-xl  fa-envelope"></i>
                <h4 className=" text-xl">FireNews@gmail.com</h4>
              </div>
            </div>
            <div className="flex flex-col justify-center ml-10 space-y-1 pt-10 text-white">
              <h4 className="hover:text-red-600 duration-150 cursor-pointer ">
                Aloqa
              </h4>
              <h4 className="hover:text-red-600 duration-150 cursor-pointer">
                Reklama
              </h4>
              <h4 className="hover:text-red-600 duration-150 cursor-pointer ">
                FireNews jamoasi
              </h4>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-[31px] mr-3">
              <i className="fa-solid fa-paper-plane bg-red-600 text-white p-3 text-[20px] rounded-full flex items-center justify-center"></i>
              <i className="fa-brands fa-twitter bg-red-600 text-white p-3 text-[20px] rounded-full flex items-center justify-center"></i>
              <i className="fa-brands fa-instagram bg-red-600 text-white p-3 text-[20px] rounded-full flex items-center justify-center"></i>
              <i className="fa-brands fa-facebook-f bg-red-600 text-white px-4 py-3 text-[20px] rounded-full flex items-center justify-center"></i>
            </div>
            <div className="flex flex-col items-end">
              <button className="flex justify-center rounded mt-4 items-center bg-[#E50914] px-7 py-3 gap-2">
                <i class="text-white text-4xl fa-solid fa-play"></i>
                <div className="">
                  <h3 className="text-white">GET IT ON</h3>
                  <h2 className="text-white">Google Play</h2>
                </div>
              </button>
              <button className="flex justify-center rounded mt-4 items-center bg-[#E50914] px-6 py-3 gap-2">
                <i className=" text-white text-4xl fa-brands fa-apple"></i>
                <div className="">
                  <h3 className="text-white">Download on</h3>
                  <h2 className="text-white">App Store</h2>
                </div>
              </button>
            </div>
          </div>
        </div>
        <h4 className="text-white text-center py-5">
          © 2030 FireNews Barcha huquqlar himoyalangan
        </h4>
      </div>
    </div>
  );
}
