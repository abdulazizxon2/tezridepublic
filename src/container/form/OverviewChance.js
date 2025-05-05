import React from "react";

const services = [
  {
    img: "/images/Annotation_2025-05-05_132035-removebg-preview.png",
    text: (
      <>
        Joy band qilish endi oson! <br />
        Qulay o‘rindiqni tanlang va rohat bilan yo‘lga chiqing!
      </>
    ),
  },
  {
    img: "/images/Annotation 2025-05-05 152340.png",
    text: (
      <>
        Yo‘lga chiqishdan avval haydovchingiz bilan bevosita bog‘laning. <br />
        Barcha savollarga javob oling.
      </>
    ),
  },
  {
    img: "/images/Annotation 2025-05-05 141710 (1).png",
    text: (
      <>
        Jo‘natmalaringizni tez, ishonchli va xavfsiz yetkazamiz. <br />
        Qulay narx va mukammal xizmat kafolatlangan!
      </>
    ),
  },
  {
    img: "/images/Annotation 2025-05-05 150122.png",
    text: (
      <>
        Narxlar sizni hayratda qoldiradi! <br />
        Qulay, arzon va sifatli xizmat endi qo‘lingizda!
      </>
    ),
  },
  {
    img: "/images/Annotation_2025-05-05_162409-removebg-preview.png",
    text: (
        <>
        24/7 mijozlarga xizmat! <br />
        Har qanday muammoga tezkor yechim.
      </>
    ),
  },
];
export default function OverviewChance() {
    return (
      <div className="bg-blue-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center text-4xl font-bold text-blue-500 mb-5">
            Bizdagi qulayliklar
          </h1>
          <h1 className="text-blue-400 font-medium text-xl text-lg text-center w-xl m-auto mb-16">Har safaringiz, har jo‘natmangiz va har so‘rovingiz uchun tez, qulay, xavfsiz va ishonchli yechim bizda.</h1>
          <div className="flex mb-5 gap-6 justify-center flex-wrap">
            {services.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-r from-blue-300 to-blue-100 bg-opacity-20 backdrop-blur-lg max-w-135 w-full mx-auto rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-radial before:from-white before:to-transparent before:opacity-0 hover:before:opacity-40 before:transition-all before:duration-300"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-32 h-45 object-contain mb-4"
                />
                <p className="text-blue-500 font-semibold text-lg">{item.text}</p>
              </div>
            ))}
          </div>
  
          <div className="flex gap-6 justify-center flex-wrap">
            {services.slice(2).map((item, index) => (
              <div
                key={index + 2}
                className="group relative bg-gradient-to-r from-blue-100 to-blue-300 bg-opacity-20 backdrop-blur-lg max-w-88 w-full mx-auto rounded-xl shadow-lg p-4 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                before:absolute before:inset-0 before:rounded-xl before:bg-gradient-radial before:from-white before:to-transparent before:opacity-0 hover:before:opacity-40 before:transition-all before:duration-300"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-24 h-24 object-contain mb-3"
                />
                <p className="text-blue-500 text-base font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  