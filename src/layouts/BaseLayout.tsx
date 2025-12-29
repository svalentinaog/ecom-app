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

  // 1. Definimos las rutas que no llevan CTA de forma clara
  const CTA_EXCLUDE_PREFIXES = ["/contact", "/legal"];

  // 2. Normalizamos la ruta eliminando el idioma (ej: /es/legal -> /legal)
  const pathWithoutLang =
    lang && location.pathname.startsWith(`/${lang}`)
      ? location.pathname.slice(`/${lang}`.length) || "/"
      : location.pathname;

  // 3. Verificamos si la ruta actual empieza con alguno de nuestros prefijos
  const shouldRenderCTA = !CTA_EXCLUDE_PREFIXES.some((prefix) =>
    pathWithoutLang.startsWith(prefix)
  );

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
