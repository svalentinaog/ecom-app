import Breadcrumbs from "@/components/molecules/Breadcrumbs";
import Container from "@/layouts/Container";
import ComingSoon from "@/components/molecules/ComingSoon";

export default function HeroSection() {
  return (
    <section className="bg-section-shop">
      <Container>
        <Breadcrumbs />
      </Container>
      <ComingSoon title="Próximamente tienda" />
    </section>
  );
}
