import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import i18nextConfig from "../../next-i18next.config";

export default function Navbar() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const currentLocale = router.locale;

  const [showButtons, setShowButtons] = useState(false);
  const toggleDropdown = () => setShowButtons(!showButtons);

  const changeLanguage = (locale) => {
    const path = router.asPath;
    router.push(path, path, { locale });
    setShowButtons(false);
  };

  return (
    <div className="w-full relative z-10">
      <div className="container">
        <div className=" flex justify-between items-center p-6 relative">
          <div>
            <h1 className="text-blue-500 font-bold text-2xl">{t("title")}</h1>
          </div>
          <div className="flex justify-center items-center gap-12 text-blue-500 font-bold py-2 px-10 bg-blue-200 rounded-full">
            <a href="#contact">{t("contact")}</a>
            <a href="#about">{t("about")}</a>
            <a href="#location">{t("location")}</a>
            <a href="#form">{t("form")}</a>
          </div>
          <div className="relative">
            <button onClick={toggleDropdown}>
              <img src="/icons/globe.svg" alt="globe" className="w-6 h-6" />
            </button>
            {showButtons && (
              <div className="languages absolute right-0 mt-2 bg-blue-100 shadow-xl rounded-md w-32 z-50">
                {i18nextConfig.i18n.locales.map((lng) => (
                  <button
                    key={lng}
                    onClick={() => changeLanguage(lng)}
                    className={`flex items-center w-full text-left hover:bg-gray-100 rounded-md px-2 py-2 ${
                      currentLocale === lng ? "font-semibold" : ""
                    }`}
                  >
                    <img
                      src={
                        lng === "oz"
                          ? "/images/uzbekFlag.png"
                          : lng === "uz"
                          ? "/images/uzbekFlag.png"
                          : lng === "en"
                          ? "/images/englishFlag.png"
                          : lng === "ru"
                          ? "/images/russianFlag.png"
                          : ""
                      }
                      alt={lng}
                      className="w-5 h-5 mr-2"
                    />

                    {lng === "oz" && "Ўзбек"}
                    {lng === "uz" && "O'zbek"}
                    {lng === "en" && "English"}
                    {lng === "ru" && "Русский"}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
