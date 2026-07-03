import HeroSection from "@/components/sections/cart/HeroSection";
import Breadcrumbs from "@/components/molecules/common/Breadcrumbs";
import Container from "@/layouts/Container";

export default function CartTemplate() {
  return (
    <>
      <section className="bg-section-shop">
        <div className="container-breadcrumbs">
          <Breadcrumbs />
        </div>
      </section>
      <Container>
        <HeroSection />
      </Container>
    </>
  );
}
