import React from "react";
import Header from "./components/Header";
import HeaderBottom from "./components/HeaderBottom";
import IconPage from "./components/IconPage";
import BackToTopButton from "./components/BackToTopButton";
import WebSiteNews from "./components/WebSiteNews";

export default function Callback() {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <IconPage />
      <BackToTopButton />
      <WebSiteNews />
    </div>
  );
}
