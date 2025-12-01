import { packaging, shipping, support } from "@/assets";
import Container from "@/layouts/Container";

export default function FeaturesSection() {
  return (
    <section className="bg-section-features">
      <Container>
        <div className="hero-section-features">
          <div className="feature-item">
            <img src={shipping} alt="Envío gratis" />
            <h3>Envío gratis</h3>
            <p>Breve descripción sobre el beneficio.</p>
          </div>
          <div className="separator"></div>
          <div className="feature-item">
            <img src={packaging} alt="Devoluciones en 30 días" />
            <h3>Devoluciones en 30 días</h3>
            <p>Breve descripción sobre el beneficio.</p>
          </div>
          <div className="separator"></div>
          <div className="feature-item">
            <img src={support} alt="Soporte 24/7" />
            <h3>Soporte 24/7</h3>
            <p>Breve descripción sobre el beneficio.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
