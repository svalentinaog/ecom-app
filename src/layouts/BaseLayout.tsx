import { useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import CallToAction from "@/layouts/CallToAction";

export default function BaseLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const shouldRenderCTA = !/\/contact$/.test(location.pathname);

  return (
    <div className="layout-wrapper">
      <Header />

      <main className="layout-main">
        <Outlet />
      </main>

      {shouldRenderCTA && <CallToAction />}
      <Footer />
    </div>
  );
}
