import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Experience", path: "/experience" },
  { name: "Ivy AI", path: "/ivy" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <span className="navbar-logo-mark">
            O
          </span>

          <span className="navbar-logo-name">
            OAK <b>&</b> IVORY
          </span>
        </Link>


        {/* DESKTOP NAV */}

        <nav className="navbar-navigation">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={`navbar-link ${
                isActive(link.path)
                  ? "navbar-link-active"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

        </nav>


        {/* BOOK BUTTON */}

        <Link
          to="/booking"
          className="navbar-book-button"
          onClick={closeMenu}
        >
          <span>
            Book Appointment
          </span>

          <span className="navbar-book-icon">
            <ArrowUpRight size={15} />
          </span>
        </Link>


        {/* MOBILE BUTTON */}

        <button
          type="button"
          className="navbar-mobile-button"
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>

      </div>


      {/* MOBILE MENU */}

      <div
        className={`navbar-mobile-menu ${
          menuOpen
            ? "navbar-mobile-menu-open"
            : ""
        }`}
      >

        <nav className="navbar-mobile-navigation">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={
                isActive(link.path)
                  ? "mobile-link-active"
                  : ""
              }
            >
              <span>
                {link.name}
              </span>

              <ArrowUpRight size={15} />
            </Link>
          ))}

        </nav>


        <Link
          to="/voice"
          className="navbar-mobile-ai"
          onClick={closeMenu}
        >
          <span>
            <span className="navbar-ai-dot" />
            Talk to Ivy by Voice
          </span>

          <ArrowUpRight size={15} />
        </Link>


        {/* MOBILE BOOK */}

        <Link
          to="/booking"
          className="navbar-mobile-book"
          onClick={closeMenu}
        >
          <span>
            Book an Appointment
          </span>

          <span>
            <ArrowUpRight size={15} />
          </span>
        </Link>

      </div>

    </header>
  );
};

export default Navbar;