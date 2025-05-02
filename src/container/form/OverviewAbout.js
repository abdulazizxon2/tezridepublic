import React from "react";

export default function OverviewAbout() {
  return (
    <div className="container">
      <div className="m-20 flex justify-center items-center gap-12 ">
      <div className="max-w-xl ">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Biz haqimizda</h1>
        <h2 className="text-blue-400 font-medium text-xl text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
          veritatis magni consectetur perferendis natus veniam sint, eius
          reiciendis sit facilis sunt obcaecati repellat. 
        </h2>
      </div>
      <div className="w-[400px] h-auto shadow-lg rounded-md overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/about.mp4" type="video/mp4" />
          Sizning brauzeringiz video tagini qo‘llab-quvvatlamaydi.
        </video>
      </div>
      </div>
    </div>
  );
}
