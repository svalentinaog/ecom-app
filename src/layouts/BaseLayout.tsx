import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { Outlet } from "react-router-dom";
import CallToAction from "@/layouts/CallToAction";

export default function BaseLayout() {
  return (
    <div className="layout-wrapper">
      <Header />

      <main className="layout-main">
        <Outlet />
      </main>

      <CallToAction />
      <Footer />
    </div>
  );
}
