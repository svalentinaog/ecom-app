import {
  addressContactPage,
  phoneContactPage,
  emailContactPage,
} from "@/assets";
import Container from "@/layouts/Container";

import { useTranslation } from "react-i18next";

export default function InfoSection() {
  const { t } = useTranslation("home");
  return (
    <section className="bg-info-section">
      <Container>
        <div className="hero-info-section">
          <div className="info-item">
            <img src={addressContactPage} alt="Envío gratis" />
            <h3>{t("benefits.shipping.title")}</h3>
            <p>{t("benefits.shipping.description")}</p>
          </div>

          <div className="info-item">
            <img src={emailContactPage} alt="Devoluciones en 30 días" />
            <h3>{t("benefits.returns.title")}</h3>
            <p>{t("benefits.returns.description")}</p>
          </div>

          <div className="info-item">
            <img src={phoneContactPage} alt="Soporte 24/7" />
            <h3>{t("benefits.support.title")}</h3>
            <p>{t("benefits.support.description")}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
