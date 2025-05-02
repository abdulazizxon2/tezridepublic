// pages/index.js
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomePage from "./HomePage";

export default function Index() {
  return (
    <main className="">
      <Navbar />
      <HomePage/>
      <Footer />
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
