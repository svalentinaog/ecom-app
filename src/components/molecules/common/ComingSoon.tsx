import Container from "@/layouts/Container";
import comingSoon from "@/assets/icons/coming-soon.png";
import type { CSSProperties } from "react";

type Props = {
  title?: string;
  description?: string;
  iconSrc?: string;
  minHeight?: number;
};

export default function ComingSoon({
  title = "Próximamente",
  description = "Estamos trabajando para habilitar esta sección.",
  iconSrc = comingSoon,
  minHeight = 600,
}: Props) {
  const style: CSSProperties = { minHeight };
  const icon = iconSrc;

  return (
    <section className="coming-soon" style={style}>
      <Container>
        <div className="coming-soon-card">
          <img src={icon} alt="coming-soon" className="coming-soon-icon" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Container>
    </section>
  );
}
