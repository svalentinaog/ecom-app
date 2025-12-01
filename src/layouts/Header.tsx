import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Acceso
            </NavLink>
          </div>
        </div>

        <hr />

        {/* Navbar */}
        <nav className="navbar">
          <Link to="/">
            <img src={logoDark} alt="LOGO" className="logo" />
          </Link>

          <div className="navbar-content">
            {/* Menú principal oculto en móvil */}
            <div className="menu-items">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tienda
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contacto
              </NavLink>
            </div>

            {/* SearchBar */}
            <SearchBar value={search} onChange={handleSearch} />

            {/* Carrito */}
            <Link to="/cart">
              <img src={cart} alt="Cart" />
            </Link>

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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Tienda
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contacto
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
