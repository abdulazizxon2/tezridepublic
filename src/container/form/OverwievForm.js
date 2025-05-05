// src/container/form/OverwievForm.js
import React from "react";
import { useTranslation } from "next-i18next";

export default function OverwievForm() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="my-20 flex justify-center flex-col   items-center rounded-lg "  style={{
        backgroundColor:"#d6eaff"}}>
        <h1 className="text-blue-500 font-bold text-4xl pt-10">
          {t("fillForm")}
        </h1>
        <h2 className="text-blue-400 font-medium text-xl pt-4 w-2xl text-center">
        Tez, ishonchli va endi bepul: Faqat ro‘yxatdan o‘ting va viloyatlararo xizmatdan 3 marta tekin foydalaning!
        </h2>
        <div className="flex items-center justify-center gap-40">
          <div className="w-lg">
            <img src="/images/taxi-and-person.png" alt="" />
          </div>
          <div className="flex flex-col py-10 gap-1">
            <label className="text-blue-500 font-bold ml-1" htmlFor="name">{t("name")}</label>
            <input
              id="name"
              type="text"
              className="border-blue-500 border w-lg h-9 rounded-md focus:bg-blue-300 outline-0 pl-1"
            />
            <label className="text-blue-500 font-bold ml-1" htmlFor="lastName">{t("lastName")}</label>
            <input
              id="lastName"
              type="text"
              className="border-blue-500 border h-9 w-lg rounded-md focus:bg-blue-300 outline-0 pl-1"
            />
            <label className="text-blue-500 font-bold ml-1" htmlFor="phoneNumber">{t("phoneNumber")}</label>
            <input
              id="phoneNumber"
              type="text"
              className="border-blue-500 border h-9 w-lg rounded-md focus:bg-blue-300 outline-0 pl-1"
            />
            <label className="text-blue-500 font-bold ml-1" htmlFor="comment">{t("comment")}</label>
            <textarea
              className="border border-blue-500 h-24 w-lg rounded-md focus:bg-blue-300  outline-0 pl-1"
              id="comment"
            ></textarea>
            <button className="bg-blue-500 text-white w-lg rounded-md mt-6 py-1.5 outline-0 pl-1 font-bold text-lg">
              {t("submit")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
