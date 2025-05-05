import React from "react";

export default function OverviewHeader() {
  return (
    <div
      className="relative bottom-40  w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/icons/Rectangle 26.svg')",
        height: "900px",
      }}
    >
      <div className=" flex justify-center  items-center py-30">
        <div className="flex items-center mt-36">
        <div className=" relative left-30 mb-12 flex flex-col gap-10">
          <h1 className="flex flex-col text-5xl w-4xl font-bold text-blue-500 ">
            <span>Viloyatga chiqish hech qachon</span>
            <span>Bu qadar oson bo‘lmagan!</span>
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 text-blue-500 font-bold text-lg">
              <img className="w-7 h-7" src="/images/front.png" alt="" />
              <span>O'rindiq tanlash imkoniyati</span>
            </div>
            <div className="flex gap-1 text-blue-500 font-bold text-lg">
              <img src="/icons/comment-dots-solid.svg" alt="" />
              <span>Haydovchi bilan chat qilish</span>
            </div>
            <div className="flex gap-1 text-blue-500 font-bold text-lg">
              <img src="/icons/money-bill-wave-solid.svg" alt="" />
              <span>Qulay narx</span>
            </div>
          </div>
        </div>
        <div className="relative right-15">
          <img src="/images/taxibook.png" alt="" className="w-lg" />
        </div>
        </div>
      </div>
    </div>
  );
}
