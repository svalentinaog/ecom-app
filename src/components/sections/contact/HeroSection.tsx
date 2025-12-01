import Container from "@/layouts/Container";
import { imageSection } from "@/assets";

export default function HeroSection() {
  return (
    <section className="bg-section-home">
      <Container>
        <div className="hero-section-home">
          <div className="text-content-home">
            <span>[Área para promociones principales]</span>
            <h1>[Contact]</h1>
            <p>[Texto secundario/Descripción de sección]</p>
          </div>
          <div className="container-image-home">
            <img
              className="image-home"
              src={imageSection}
              alt="Imagen destacada"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
