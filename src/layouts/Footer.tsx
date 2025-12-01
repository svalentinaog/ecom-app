import Container from "@/layouts/Container";
import { Link, NavLink } from "react-router-dom";
import {
  logoLight,
  facebook,
  twitter,
  google,
  instagram,
  youtube,
  visa,
  mastercard,
  americanExpress,
  paypal,
  discover,
  email,
  phone,
  location,
} from "@/assets";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-content">
          <div className="footer-columns">
            {/* Column 1 */}
            <div className="footer-column">
              <Link to="/">
                <img src={logoLight} alt="LOGO" />
              </Link>
              <p>[Breve descripción de la empresa o tienda]</p>
              <div className="footer-social">
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
                <a href="#">
                  <img src={google} alt="Google+" />
                </a>
                <a href="#">
                  <img src={youtube} alt="Youtube" />
                </a>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div className="footer-column">
              <h3>Menu</h3>
              <div className="footer-items">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink>
                <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>Tienda</NavLink>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contacto</NavLink>
                <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Acceso</NavLink>
              </div>
            </div>

            {/* Column 3 */}
            <div className="footer-column">
              <h3>Informacion de contacto</h3>
              <div className="footer-items">
                <div className="footer-item">
                  <img src={phone} alt="phone" />
                  <a href="#">+57 312 456 7890</a>
                </div>
                <div className="footer-item">
                  <img src={email} alt="email" />
                  <a href="#">info@ecom.com</a>
                </div>
                <div className="footer-item">
                  <img src={location} alt="location" />
                  <a href="#">Calle 123, Edificio 456</a>
                </div>
              </div>
            </div>
            {/* Column 4 */}
            <div className="footer-column">
              <h3>Legal</h3>
              <div className="footer-items">
                <p>
                  <a href="#">Aviso legal</a>
                </p>
                <p>
                  <a href="#">Politica de privacidad</a>
                </p>
                <p>
                  <a href="#">Política de envíos y devoluciones</a>
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="footer-columns">
            <p className="footer-copyright">© 2025 All Rights Reserved</p>
            <div className="payment-methods">
              <img src={visa} alt="visa" />
              <img src={mastercard} alt="mastercard" />
              <img src={americanExpress} alt="american-express" />
              <img src={paypal} alt="paypal" />
              <img src={discover} alt="discover" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
