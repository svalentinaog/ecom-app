import { useState } from "react";
import {
  cart,
  logoDark,
  phoneTop,
  userAccess,
  emailTop,
  languageTop,
  hamburger,
} from "@/assets";
import SearchBar from "@/components/molecules/common/SearchBar";

export default function Header() {
  const [search, setSearch] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <header>
      <div className="header-content">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <img src={languageTop} alt="Language" />
              <p>English</p>
            </div>
            <div className="top-bar-item">
              <img src={phoneTop} alt="Phone" />
              <p>123-456-7890</p>
            </div>
            <div className="top-bar-item">
              <img src={emailTop} alt="Email" />
              <p>contact@example.com</p>
            </div>
          </div>

          {/* Acceso */}
          <div className="top-bar-item">
            <img src={userAccess} alt="userAccess" />
            <p>Acceso</p>
          </div>
        </div>

        <hr />

        {/* Navbar */}
        <nav className="navbar">
          <img src={logoDark} alt="LOGO" className="logo" />

          <div className="navbar-content">
            {/* Menú principal oculto en móvil */}
            <div className="menu-items">
              <a href="#">Inicio</a>
              <a href="#">Tienda</a>
              <a href="#">Contacto</a>
            </div>

            {/* SearchBar */}
            <SearchBar value={search} onChange={handleSearch} />

            {/* Carrito */}
            <img src={cart} alt="Cart" />

            {/* Hamburguesa para móvil */}
            <img
              src={hamburger}
              alt="Menu"
              className="hamburger-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </nav>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="mobile-menu">
            <SearchBar value={search} onChange={handleSearch} />{" "}
            {/* Input visible */}
            <a href="#">Inicio</a>
            <a href="#">Tienda</a>
            <a href="#">Contacto</a>
          </div>
        )}
      </div>
    </header>
  );
}
