import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export default function Footer() {
  const { t } = useTranslation("common");
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-gray-100 w-full">
      <footer className="bg-grey-100">
        <div className="container">
          <div className="flex justify-around p-12 capitalize">
            <div>
              <h3 className="font-medium  text-blue-500 text-lg">
                {t("sendparcel")}
              </h3>
              <ul className="text-sm">
                <li>
                  <Link href="/send_parcel">{t("send")}</Link>
                </li>
                <li>
                  <Link href="/what-can-you-send">{t("cannotsend")}</Link>
                </li>
                <li>
                  <Link href="/covered">{t("covered")}</Link>
                </li>
                <li>
                  <Link href="/How-to-weigh-a-parcel">{t("weighparcel")}</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium  text-blue-500 text-lg">
                {t("trackparcel")}
              </h3>
              <ul>
                <li>
                  <Link href="/track">{t("trackparcel")}</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium  text-blue-500 text-lg">
                {t("ourservices")}
              </h3>
              <ul className="text-sm">
                <li>
                  <Link href="/our-services">{t("ourservices")}</Link>
                </li>
                <li>
                  <Link href="/app">{t("mobileapp")}</Link>
                </li>
                <li>
                  <Link href="/courier-service">{t("curierservices")}</Link>
                </li>
                <li>
                  <Link href="/pricing">{t("ourTariff")}</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium  text-blue-500 text-lg">
                {t("about")}
              </h3>
              <ul className="text-sm">
                <li>
                  <Link href="/about">{t("about")}</Link>
                </li>
                <li>
                  <Link href="/contact">{t("contact")}</Link>
                </li>
                <li>
                  <Link href="/security">{t("cyber")}</Link>
                </li>
                <li>
                  <Link href="/promo/friends">{t("promotionsPrograms")}</Link>
                </li>
                <li>
                  <Link href="/careers">{t("vakansiya")}</Link>
                </li>
                <li>
                  <Link href="/blog">{t("blog")}</Link>
                </li>
              </ul>

              <div className="flex items-center justify-center gap-3">
                <a href="https://www.instagram.com/tezbor.uz">
                  <img
                    className="w-10"
                    src="/icons/instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a href="https://t.me/tezboruz">
                  <img
                    className="w-10"
                    src="/icons/telegram.svg"
                    alt="Telegram"
                  />
                </a>
                <a href="https://www.facebook.com/tezbor.uz">
                  <img
                    className="w-10"
                    src="/icons/facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="https://www.linkedin.com/company/tezbor">
                  <img
                    className="w-10"
                    src="/icons/LI-In-Bug.svg"
                    alt="LinkedIn"
                  />
                </a>
                <a href="https://www.youtube.com/@tezbor5118">
                  <img
                    className="w-12"
                    src="/icons/you_tube_logo.svg"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

          <div className=" bg-blue-100 py-6">
        <div className="container flex items-center justify-around ">
            <div className="">
              <h5>{t("tezridesend")}</h5>
              <p>{t("ourapp")}</p>
            </div>
            <div className="flex gap-2">
              <a href="https://play.google.com/store/apps/details?id=uz.tezbor.client">
                <img
                  src="/icons/google-play-storeblack.svg"
                  alt="Google Play"
                />
              </a>
              <a href="https://apps.apple.com/uz/app/tezbor-customer/id1576361032">
                <img src="/icons/appstorebalck.svg" alt="App Store" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-3">
          <p>© TezRide.uz 2024–{year}</p>
        </div>
      </footer>
    </div>
  );
}
