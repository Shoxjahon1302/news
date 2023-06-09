import React from "react";
import Header from "./components/Header";
import HeaderBottom from "./components/HeaderBottom";
import IconPage from "./components/IconPage";
import BackToTopButton from "./components/BackToTopButton";
import WebSiteNews from "./components/WebSiteNews";
import LastNews from "./components/LastNews";
import SportPages from "./components/SportPages";
import Maps from "./components/Maps";
import SportNewsPage from "./components/SportNewsPage";
import WorldNewsPage from "./components/WorldNewsPage";
import UzbekistanNews from "./components/UzbekistanNews";
import VedioPages from "./components/VedioPages";
import TopOfFooter from "./components/TopOfFooter";
import Footer from "./components/Footer";

export default function Callback() {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <IconPage />
      <BackToTopButton />
      <WebSiteNews />
      <LastNews />
      <SportPages />
      <Maps />
      <SportNewsPage />
      <WorldNewsPage />
      <UzbekistanNews />
      <VedioPages />
      <TopOfFooter />
      <Footer />
    </div>
  );
}
