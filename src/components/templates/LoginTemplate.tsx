import HeroSection from "@/components/sections/auth/HeroSection";

export default function LoginTemplate() {
  return (
    <>
      <HeroSection />
    </>
  );
}

// Login y register por el momento estaran dividos, pero seran uno solo despues (AuthPage.tsx) en el que dependiendo de si se logea o se registra, se mostrara uno u otra informacion.
