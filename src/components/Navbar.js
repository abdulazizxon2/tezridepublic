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
    <div className="container">
      <div>
        <div className="flex items-center justify-center gap-3 p-2 w-full bg-blue-500">
          <a className="flex items-center gap-1" href="tel:+998555005051">
            <div className="w-5 p-1 rounded-full h-5 bg-orange-400">
              <img
                src="/icons/phone-solid.svg"
                alt="telfon"
              />
            </div>
            +998 55 500 50 51
          </a>
          <a href="https://t.me/tezboruz">
            <img className="" src="/icons/telegram-line.svg" alt="Telegram" />
          </a>
          <a href="https://www.instagram.com/tezbor.uz">
            <img
              className="w-6"
              src="/icons/instagram_line.svg"
              alt="Instagram"
            />
          </a>
          <a href="https://www.facebook.com/tezbor.uz">
            <img
              className="w-6"
              src="/icons/facebook-box-fill.svg"
              alt="Facebook"
            />
          </a>
          <a href="https://www.linkedin.com/company/tezbor">
            <img className="w-6" src="/icons/linkedin-box.svg" alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/@tezbor5118">
            <img className="w-6" src="/icons/you-tube-box.svg" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="bg-blue-500 flex justify-between p-6 relative">
        <div>
          <h1 className="text-white font-bold text-2xl">{t("title")}</h1>
        </div>
        <div className="flex justify-center items-center gap-12 text-white">
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
            <div className="languages absolute right-0 mt-2 bg-gray-100 shadow-md rounded-md w-32 z-50">
              {i18nextConfig.i18n.locales.map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`flex items-center w-full text-left hover:bg-gray-200 rounded-md px-2 py-2 ${
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
  );
}
