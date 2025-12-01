import Container from "@/layouts/Container";
import { imageSection } from "@/assets";

export default function CallToAction() {
  return (
    <section className="bg-section-CTA">
      <Container>
        <div className="hero-section-CTA">
          <div className="container-image-CTA">
            <img
              className="image-CTA"
              src={imageSection}
              alt="Imagen destacada"
            />
          </div>
          <div className="text-content-CTA">
            <h2>[Texto principal banner o promoción]</h2>
            <p>[Breve descripción]</p>
            <div>
              <button className="btn btn--primary">
                <a href="/contact">Contacto</a>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
