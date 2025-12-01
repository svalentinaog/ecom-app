import Container from "@/layouts/Container";
import { imageSection } from "@/assets";

export default function HeroSection() {
  return (
    <section className="bg-section-home">
      <Container>
        <div className="hero-section-home">
          <div className="text-content-home">
            <span>[Área para promociones principales]</span>
            <h1>[Mensaje llamativo o slogan de campaña]</h1>
            <p>[Espacio para una breve descripción]</p>
            <div>
              <button className="btn btn--white">Tienda</button>
            </div>
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
